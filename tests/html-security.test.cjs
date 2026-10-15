const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');

const root = path.resolve(__dirname, '..');
function browserFor(project) {
  const dom = new JSDOM(fs.readFileSync(path.join(root, project, 'index.html'), 'utf8'), {
    url: 'http://localhost/', runScripts: 'outside-only',
  });
  dom.window.eval(fs.readFileSync(path.join(root, 'security/purify.min.js'), 'utf8'));
  dom.window.eval(fs.readFileSync(path.join(root, 'security/safe-html.js'), 'utf8'));
  return dom;
}

test('CorpComment renders untrusted API content without executable attributes', async () => {
  const project = '06 - CorpComment/More Refactoring';
  const dom = browserFor(project);
  dom.window.fetch = async () => ({ json: async () => ({ feedbacks: [{
    company: '<img src=x onerror="globalThis.compromised=true">',
    text: '<a href="javascript:alert(1)">Review</a><svg onload="alert(1)"></svg>',
    badgeLetter: 'X', upvoteCount: 1, daysAgo: 1,
  }] }) });
  dom.window.eval(fs.readFileSync(path.join(root, project, 'script.js'), 'utf8'));
  await new Promise(resolve => setImmediate(resolve));
  const feedback = dom.window.document.querySelector('.feedback');
  assert.ok(feedback, 'the actual course renderer should still render feedback');
  assert.equal(feedback.querySelector('[onerror], [onload], svg'), null);
  assert.equal(feedback.querySelector('a').hasAttribute('href'), false);
  assert.match(feedback.textContent, /Review/);
  dom.window.close();
});

test('sanitizer preserves normal job markup and rejects clobbering and active content', () => {
  const dom = browserFor('06 - CorpComment/More Refactoring');
  const clean = dom.window.ByteGradSecurity.sanitizeHTML(
    '<section><h2>Developer</h2><a href="https://example.com/jobs">Apply</a>' +
    '<form id="location"><input name="href"></form><iframe src="https://example.com"></iframe>' +
    '<img src=x onerror="alert(1)"><script>alert(1)</script></section>'
  );
  const template = dom.window.document.createElement('template'); template.innerHTML = clean;
  assert.equal(template.content.querySelector('h2').textContent, 'Developer');
  assert.equal(template.content.querySelector('a').href, 'https://example.com/jobs');
  assert.equal(template.content.querySelector('form, input, iframe, script, [onerror]'), null);
  dom.window.close();
});

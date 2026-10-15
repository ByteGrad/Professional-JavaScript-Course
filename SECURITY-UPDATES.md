# Security update — 15 October 2026

- Updated both webpack example dependency trees and regenerated the distributed bundles.
- Added locally vendored DOMPurify 3.4.17 and a shared HTML-sanitization wrapper. The CorpComment/rmtDev examples sanitize HTML at insertion points, including API-derived content and submitted feedback. Sanitizer license files are in `security/`.
- The HTML entry files load the sanitizer from a relative path within this repository. Copying a single lesson directory requires also preserving the repository's `security/` directory and relative paths, or adapting those paths deliberately. Use a local static server; do not expose a development server publicly.
- Added regression tests that feed malicious content through an actual course renderer, dependency monitoring, automated audit/build checks and an educational/security notice. These changes deliberately deviate from the recordings.
- Verification: both production bundles built successfully; the root security tests passed; all three package audits reported zero known vulnerabilities at review time.

Run `npm ci` and `npm test` at the repository root for the security checks. Install/build each webpack example in its own directory. `security/purify.min.js` is the browser copy of the exact DOMPurify version in the root lockfile; update that copy and its licenses when upgrading DOMPurify.

See SECURITY.md before use. Sanitization is one defense and does not replace a production security review or future maintenance.

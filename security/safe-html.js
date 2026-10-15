/* DOMPurify 3.4.17; licenses are alongside this file. */
(function () {
  'use strict';
  globalThis.ByteGradSecurity = Object.freeze({
    sanitizeHTML(value) {
      return DOMPurify.sanitize(value, {
        USE_PROFILES: { html: true },
        FORBID_TAGS: ['style', 'form', 'input', 'iframe', 'object', 'embed'],
        SANITIZE_NAMED_PROPS: true
      });
    }
  });
}());

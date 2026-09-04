# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hydration.test.js >> Check hydration is successfully for each project >> Check that hydration is ok on PoE
- Location: e2e-tests/hydration.test.js:418:3

# Error details

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/46742ffa-5c80-4df9-bcc5-c5864222a42a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/46742ffa-5c80-4df9-bcc5-c5864222a42a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/46742ffa-5c80-4df9-bcc5-c5864222a42a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/46742ffa-5c80-4df9-bcc5-c5864222a42a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/36dd594f-d637-4185-92d6-5e977d049755' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/36dd594f-d637-4185-92d6-5e977d049755' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/36dd594f-d637-4185-92d6-5e977d049755' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/36dd594f-d637-4185-92d6-5e977d049755' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6087259f-c34d-46af-929d-53308cfd540e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6087259f-c34d-46af-929d-53308cfd540e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6087259f-c34d-46af-929d-53308cfd540e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6087259f-c34d-46af-929d-53308cfd540e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/04bea1d1-44ce-4116-8d86-3e7eb6d1274e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/04bea1d1-44ce-4116-8d86-3e7eb6d1274e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/04bea1d1-44ce-4116-8d86-3e7eb6d1274e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/04bea1d1-44ce-4116-8d86-3e7eb6d1274e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/faebad86-ece9-4951-b46d-5aeed99e29e0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (Too Many Requests),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/faebad86-ece9-4951-b46d-5aeed99e29e0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (Too Many Requests),Console error: 
[error]: Player stopping playback - error MasterPlaylist:11 (ErrorNotAvailable code 404 - Failed to load playlist),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/faebad86-ece9-4951-b46d-5aeed99e29e0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (Too Many Requests),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/faebad86-ece9-4951-b46d-5aeed99e29e0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (Too Many Requests),Console error: 
[error]: Player stopping playback - error MasterPlaylist:11 (ErrorNotAvailable code 404 - Failed to load playlist),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/24a3c372-e605-49b2-b25c-e57ee5ae571b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/24a3c372-e605-49b2-b25c-e57ee5ae571b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/24a3c372-e605-49b2-b25c-e57ee5ae571b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/24a3c372-e605-49b2-b25c-e57ee5ae571b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b43ec3d8-c90f-4187-8d75-6532a20cdbf2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b43ec3d8-c90f-4187-8d75-6532a20cdbf2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b43ec3d8-c90f-4187-8d75-6532a20cdbf2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b43ec3d8-c90f-4187-8d75-6532a20cdbf2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dc2ed565-e3ee-4e99-aeb3-ea9d2629003c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dc2ed565-e3ee-4e99-aeb3-ea9d2629003c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dc2ed565-e3ee-4e99-aeb3-ea9d2629003c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dc2ed565-e3ee-4e99-aeb3-ea9d2629003c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/eb1d94c2-7ec4-4045-823b-caccb2f37b4f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/eb1d94c2-7ec4-4045-823b-caccb2f37b4f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/eb1d94c2-7ec4-4045-823b-caccb2f37b4f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/050b0939-03a6-44ae-bcf6-0cc6d8d5c689' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/050b0939-03a6-44ae-bcf6-0cc6d8d5c689' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/eb1d94c2-7ec4-4045-823b-caccb2f37b4f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/050b0939-03a6-44ae-bcf6-0cc6d8d5c689' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/050b0939-03a6-44ae-bcf6-0cc6d8d5c689' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dcb1d89a-929b-48c8-91f2-8e036c84268b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dcb1d89a-929b-48c8-91f2-8e036c84268b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dcb1d89a-929b-48c8-91f2-8e036c84268b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dcb1d89a-929b-48c8-91f2-8e036c84268b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e15a119d-b037-45ff-afb9-12b7bfa1cb73' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e15a119d-b037-45ff-afb9-12b7bfa1cb73' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e15a119d-b037-45ff-afb9-12b7bfa1cb73' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e15a119d-b037-45ff-afb9-12b7bfa1cb73' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ddabe408-b319-41cb-bb65-c3dd42ea46be' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ddabe408-b319-41cb-bb65-c3dd42ea46be' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ddabe408-b319-41cb-bb65-c3dd42ea46be' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ddabe408-b319-41cb-bb65-c3dd42ea46be' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10d4ac3d-ade5-4efe-aaa0-5c7ac04dc133' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10d4ac3d-ade5-4efe-aaa0-5c7ac04dc133' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10d4ac3d-ade5-4efe-aaa0-5c7ac04dc133' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10d4ac3d-ade5-4efe-aaa0-5c7ac04dc133' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8da3fb10-e567-469b-af22-ea443abf57e1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8da3fb10-e567-469b-af22-ea443abf57e1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8da3fb10-e567-469b-af22-ea443abf57e1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8da3fb10-e567-469b-af22-ea443abf57e1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2e2ce6a1-aba2-4dca-a5a0-48d5ac9f26a3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2e2ce6a1-aba2-4dca-a5a0-48d5ac9f26a3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2e2ce6a1-aba2-4dca-a5a0-48d5ac9f26a3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2e2ce6a1-aba2-4dca-a5a0-48d5ac9f26a3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5b922162-28e9-4987-9b07-5873270ebd32' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5b922162-28e9-4987-9b07-5873270ebd32' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5b922162-28e9-4987-9b07-5873270ebd32' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5b922162-28e9-4987-9b07-5873270ebd32' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dc2934f1-0074-42a3-91d2-e6dab38d9bcb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dc2934f1-0074-42a3-91d2-e6dab38d9bcb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dc2934f1-0074-42a3-91d2-e6dab38d9bcb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dc2934f1-0074-42a3-91d2-e6dab38d9bcb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c5771541-56c5-402d-b6e9-7a345efa83b6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c5771541-56c5-402d-b6e9-7a345efa83b6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c5771541-56c5-402d-b6e9-7a345efa83b6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c5771541-56c5-402d-b6e9-7a345efa83b6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/67a72f95-6060-4032-bbfa-54c25f3f61d4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/67a72f95-6060-4032-bbfa-54c25f3f61d4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/67a72f95-6060-4032-bbfa-54c25f3f61d4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/67a72f95-6060-4032-bbfa-54c25f3f61d4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1b9fa8c1-654a-4fd3-a7ab-d66145979330' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1b9fa8c1-654a-4fd3-a7ab-d66145979330' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1b9fa8c1-654a-4fd3-a7ab-d66145979330' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1b9fa8c1-654a-4fd3-a7ab-d66145979330' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e4934bed-71d9-4a61-aadc-a6d5595bbfa5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e4934bed-71d9-4a61-aadc-a6d5595bbfa5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e4934bed-71d9-4a61-aadc-a6d5595bbfa5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e4934bed-71d9-4a61-aadc-a6d5595bbfa5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7b5ab197-7fed-4e77-8d51-e799db3e166b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7b5ab197-7fed-4e77-8d51-e799db3e166b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7b5ab197-7fed-4e77-8d51-e799db3e166b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7b5ab197-7fed-4e77-8d51-e799db3e166b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/07920ec6-080b-4a7c-8b0c-bd278a85405c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/07920ec6-080b-4a7c-8b0c-bd278a85405c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/07920ec6-080b-4a7c-8b0c-bd278a85405c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/07920ec6-080b-4a7c-8b0c-bd278a85405c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7ee851f0-dce1-4e70-adf1-23d60d0f39fd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7ee851f0-dce1-4e70-adf1-23d60d0f39fd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7ee851f0-dce1-4e70-adf1-23d60d0f39fd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7ee851f0-dce1-4e70-adf1-23d60d0f39fd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e49cd9c3-f442-44cf-9cc2-a8632331d5ed' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e49cd9c3-f442-44cf-9cc2-a8632331d5ed' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e49cd9c3-f442-44cf-9cc2-a8632331d5ed' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e49cd9c3-f442-44cf-9cc2-a8632331d5ed' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ef5d44a6-abd7-44d3-b27b-9d8916f6f096' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ef5d44a6-abd7-44d3-b27b-9d8916f6f096' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ef5d44a6-abd7-44d3-b27b-9d8916f6f096' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ef5d44a6-abd7-44d3-b27b-9d8916f6f096' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1ebbae70-d4c2-46c9-a3cd-9a30206b2bcb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1ebbae70-d4c2-46c9-a3cd-9a30206b2bcb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1ebbae70-d4c2-46c9-a3cd-9a30206b2bcb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1ebbae70-d4c2-46c9-a3cd-9a30206b2bcb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d8abb638-bffd-487b-b302-b6fbb994beb8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d8abb638-bffd-487b-b302-b6fbb994beb8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d8abb638-bffd-487b-b302-b6fbb994beb8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d8abb638-bffd-487b-b302-b6fbb994beb8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a5cc1c03-ea3b-4833-ac69-6d20a595cb14' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a5cc1c03-ea3b-4833-ac69-6d20a595cb14' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a5cc1c03-ea3b-4833-ac69-6d20a595cb14' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a5cc1c03-ea3b-4833-ac69-6d20a595cb14' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7860c632-3aaa-4bcc-9eaf-87407069b631' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7860c632-3aaa-4bcc-9eaf-87407069b631' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7860c632-3aaa-4bcc-9eaf-87407069b631' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7860c632-3aaa-4bcc-9eaf-87407069b631' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9d065941-3a2d-4a7a-a1a5-820d7572bac6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9d065941-3a2d-4a7a-a1a5-820d7572bac6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9d065941-3a2d-4a7a-a1a5-820d7572bac6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9d065941-3a2d-4a7a-a1a5-820d7572bac6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1067350f-2fe4-4b55-b49c-ea4c5ad4f4d8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1067350f-2fe4-4b55-b49c-ea4c5ad4f4d8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1067350f-2fe4-4b55-b49c-ea4c5ad4f4d8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1067350f-2fe4-4b55-b49c-ea4c5ad4f4d8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c268b77d-8743-4b37-aff2-623a5cfb7f8a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c268b77d-8743-4b37-aff2-623a5cfb7f8a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c268b77d-8743-4b37-aff2-623a5cfb7f8a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c268b77d-8743-4b37-aff2-623a5cfb7f8a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/530d74e2-d32b-4184-8853-dcfa35640299' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/530d74e2-d32b-4184-8853-dcfa35640299' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/530d74e2-d32b-4184-8853-dcfa35640299' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/530d74e2-d32b-4184-8853-dcfa35640299' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8bdc595a-4771-47ec-9940-3931f8e85854' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8bdc595a-4771-47ec-9940-3931f8e85854' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8bdc595a-4771-47ec-9940-3931f8e85854' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8bdc595a-4771-47ec-9940-3931f8e85854' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2855b9ad-d92c-4881-9556-06b929d57490' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2855b9ad-d92c-4881-9556-06b929d57490' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2855b9ad-d92c-4881-9556-06b929d57490' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2855b9ad-d92c-4881-9556-06b929d57490' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b2ce4d96-cf44-4bcd-abe0-dbd9c71e24b8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b2ce4d96-cf44-4bcd-abe0-dbd9c71e24b8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b2ce4d96-cf44-4bcd-abe0-dbd9c71e24b8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b2ce4d96-cf44-4bcd-abe0-dbd9c71e24b8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c1134861-d6f4-45ee-a05c-003bebf7aa23' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c1134861-d6f4-45ee-a05c-003bebf7aa23' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c1134861-d6f4-45ee-a05c-003bebf7aa23' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c1134861-d6f4-45ee-a05c-003bebf7aa23' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/93a669a2-bfd5-45bd-9625-a2a72cf7894f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/93a669a2-bfd5-45bd-9625-a2a72cf7894f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/93a669a2-bfd5-45bd-9625-a2a72cf7894f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/93a669a2-bfd5-45bd-9625-a2a72cf7894f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6be4f335-369d-499f-b214-e565303c746d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6be4f335-369d-499f-b214-e565303c746d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6be4f335-369d-499f-b214-e565303c746d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6be4f335-369d-499f-b214-e565303c746d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/49d6740c-2c0f-4ba2-97c4-7dae1a23c7aa' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/49d6740c-2c0f-4ba2-97c4-7dae1a23c7aa' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/49d6740c-2c0f-4ba2-97c4-7dae1a23c7aa' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/49d6740c-2c0f-4ba2-97c4-7dae1a23c7aa' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/960c2c1b-a57d-4b52-befa-c286a8705ab3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/960c2c1b-a57d-4b52-befa-c286a8705ab3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/960c2c1b-a57d-4b52-befa-c286a8705ab3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/960c2c1b-a57d-4b52-befa-c286a8705ab3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/432d3a9f-bff4-4470-9301-c046955bd0d6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/432d3a9f-bff4-4470-9301-c046955bd0d6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/432d3a9f-bff4-4470-9301-c046955bd0d6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/432d3a9f-bff4-4470-9301-c046955bd0d6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0d9f444f-9abd-4bce-b446-700813d17cdd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0d9f444f-9abd-4bce-b446-700813d17cdd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0d9f444f-9abd-4bce-b446-700813d17cdd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0d9f444f-9abd-4bce-b446-700813d17cdd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/04980660-cefd-490b-b9a4-19df4b3fb216' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/04980660-cefd-490b-b9a4-19df4b3fb216' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/04980660-cefd-490b-b9a4-19df4b3fb216' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/04980660-cefd-490b-b9a4-19df4b3fb216' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dce8f690-1aae-4d6c-966a-14f4677c33e7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dce8f690-1aae-4d6c-966a-14f4677c33e7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dce8f690-1aae-4d6c-966a-14f4677c33e7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dce8f690-1aae-4d6c-966a-14f4677c33e7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/aca8ebca-b18c-4ade-b149-7a7a7551ea19' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/aca8ebca-b18c-4ade-b149-7a7a7551ea19' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/aca8ebca-b18c-4ade-b149-7a7a7551ea19' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/aca8ebca-b18c-4ade-b149-7a7a7551ea19' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be90be69-2634-42af-9caa-fc942d12a2e4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be90be69-2634-42af-9caa-fc942d12a2e4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be90be69-2634-42af-9caa-fc942d12a2e4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be90be69-2634-42af-9caa-fc942d12a2e4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6f4e1514-a28f-403d-8b64-78e0b2882f93' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6f4e1514-a28f-403d-8b64-78e0b2882f93' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6f4e1514-a28f-403d-8b64-78e0b2882f93' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6f4e1514-a28f-403d-8b64-78e0b2882f93' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /poe
          - img "Mobalytics" [ref=e7]
        - generic [ref=e9]:
          - link "League of Legends LoL" [ref=e11] [cursor=pointer]:
            - /url: https://mobalytics.gg/lol
            - generic [ref=e13]:
              - img "League of Legends" [ref=e14]
              - generic [ref=e15]: LoL
          - link "Teamfight Tactics TFT" [ref=e17] [cursor=pointer]:
            - /url: https://mobalytics.gg/tft
            - generic [ref=e19]:
              - img "Teamfight Tactics" [ref=e20]
              - generic [ref=e21]: TFT
          - link "Diablo 4 Diablo 4" [ref=e23] [cursor=pointer]:
            - /url: https://mobalytics.gg/diablo-4
            - generic [ref=e25]:
              - img "Diablo 4" [ref=e26]
              - generic [ref=e27]: Diablo 4
          - link "Path of Exile 2 PoE 2" [ref=e29] [cursor=pointer]:
            - /url: https://mobalytics.gg/poe-2
            - generic [ref=e31]:
              - img "Path of Exile 2" [ref=e32]
              - generic [ref=e33]: PoE 2
          - link "Path of Exile PoE" [ref=e35] [cursor=pointer]:
            - /url: https://mobalytics.gg/poe
            - generic [ref=e37]:
              - img "Path of Exile" [ref=e38]
              - generic [ref=e39]: PoE
          - link "Destiny 2 Destiny 2" [ref=e41] [cursor=pointer]:
            - /url: https://mobalytics.gg/destiny-2
            - generic [ref=e43]:
              - img "Destiny 2" [ref=e44]
              - generic [ref=e45]: Destiny 2
          - link "Marathon Marathon" [ref=e47] [cursor=pointer]:
            - /url: https://mobalytics.gg/marathon
            - generic [ref=e49]:
              - img "Marathon" [ref=e50]
              - generic [ref=e51]: Marathon
          - link "Slay the Spire 2 STS 2" [ref=e53] [cursor=pointer]:
            - /url: https://mobalytics.gg/slay-the-spire-2
            - generic [ref=e55]:
              - img "Slay the Spire 2" [ref=e56]
              - generic [ref=e57]: STS 2
          - link "Deadlock Deadlock" [ref=e59] [cursor=pointer]:
            - /url: https://mobalytics.gg/deadlock
            - generic [ref=e61]:
              - img "Deadlock" [ref=e62]
              - generic [ref=e63]: Deadlock
          - link "Overwatch Overwatch" [ref=e65] [cursor=pointer]:
            - /url: https://mobalytics.gg/overwatch
            - generic [ref=e67]:
              - img "Overwatch" [ref=e68]
              - generic [ref=e69]: Overwatch
          - link "Borderlands 4 Borderlands 4" [ref=e71] [cursor=pointer]:
            - /url: https://mobalytics.gg/borderlands-4
            - generic [ref=e73]:
              - img "Borderlands 4" [ref=e74]
              - generic [ref=e75]: Borderlands 4
          - link "Valorant VAL" [ref=e77] [cursor=pointer]:
            - /url: https://mobalytics.gg/valorant
            - generic [ref=e79]:
              - img "Valorant" [ref=e80]
              - generic [ref=e81]: VAL
          - link "Neverness to Everness NTE" [ref=e83] [cursor=pointer]:
            - /url: https://mobalytics.gg/neverness-to-everness
            - generic [ref=e85]:
              - img "Neverness to Everness" [ref=e86]
              - generic [ref=e87]: NTE
          - 'link "Arknights: Endfield Endfield" [ref=e89] [cursor=pointer]':
            - /url: https://mobalytics.gg/arknights-endfield
            - generic [ref=e91]:
              - 'img "Arknights: Endfield" [ref=e92]'
              - generic [ref=e93]: Endfield
          - link "Elden Ring Nightreign Nightreign" [ref=e95] [cursor=pointer]:
            - /url: https://mobalytics.gg/elden-ring-nightreign
            - generic [ref=e97]:
              - img "Elden Ring Nightreign" [ref=e98]
              - generic [ref=e99]: Nightreign
          - button [ref=e100] [cursor=pointer]:
            - img [ref=e101]
          - generic:
            - link "Monster Hunter Wilds Monster Hunter Wilds":
              - /url: https://mobalytics.gg/mhw
              - generic:
                - generic:
                  - img "Monster Hunter Wilds"
                  - generic: Monster Hunter Wilds
          - generic:
            - link "Hades 2 Hades 2":
              - /url: https://mobalytics.gg/hades-2
              - generic:
                - generic:
                  - img "Hades 2"
                  - generic: Hades 2
          - generic:
            - link "The Bazaar The Bazaar":
              - /url: https://mobalytics.gg/the-bazaar
              - generic:
                - generic:
                  - img "The Bazaar"
                  - generic: The Bazaar
          - generic:
            - link "Marvel Rivals Marvel Rivals":
              - /url: https://mobalytics.gg/marvel-rivals
              - generic:
                - generic:
                  - img "Marvel Rivals"
                  - generic: Marvel Rivals
          - generic:
            - link "Zenless Zone Zero ZZZ":
              - /url: https://mobalytics.gg/zzz
              - generic:
                - generic:
                  - img "Zenless Zone Zero"
                  - generic: ZZZ
          - generic:
            - link "2XKO 2XKO":
              - /url: https://mobalytics.gg/2xko
              - generic:
                - generic:
                  - img "2XKO"
                  - generic: 2XKO
          - generic:
            - link "Riftbound Riftbound":
              - /url: https://mobalytics.gg/riftbound
              - generic:
                - generic:
                  - img "Riftbound"
                  - generic: Riftbound
      - generic [ref=e102]:
        - generic [ref=e103]:
          - generic [ref=e105]:
            - generic [ref=e108] [cursor=pointer]:
              - button "plus Rewards" [ref=e109]:
                - img "plus" [ref=e111]
                - generic [ref=e112]: Rewards
              - generic [ref=e114]: New
            - generic [ref=e116] [cursor=pointer]:
              - img [ref=e117]:
                - generic [ref=e140]: ✓
              - generic [ref=e141]: New challenge available
          - link "DOWNLOAD APP" [ref=e142] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&utm_campaign=top-poe&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e144]:
              - img [ref=e145]
              - text: DOWNLOAD APP
          - link "Gamebase" [ref=e147] [cursor=pointer]:
            - /url: /gamebase
            - generic [ref=e148]: Gamebase
        - generic [ref=e150]:
          - button "Sign In" [ref=e152] [cursor=pointer]
          - button [ref=e154] [cursor=pointer]:
            - img [ref=e156]
          - button "Theme" [ref=e158] [cursor=pointer]:
            - img "Theme" [ref=e160]
      - generic [ref=e162]:
        - link "Home" [ref=e165] [cursor=pointer]:
          - /url: /poe
          - img "Home" [ref=e167]
        - link "Profile" [ref=e170] [cursor=pointer]:
          - /url: /poe/profile
          - img "Profile" [ref=e172]
        - link "Build Planner" [ref=e175] [cursor=pointer]:
          - /url: /poe/planner/builds
          - img "Build Planner" [ref=e177]
        - link "Tier List" [ref=e180] [cursor=pointer]:
          - /url: /poe/tier-list
          - img "Tier List" [ref=e182]
        - link "Starter Builds" [ref=e185] [cursor=pointer]:
          - /url: /poe/starter-builds
          - img "Starter Builds" [ref=e187]
        - link "Builds" [ref=e190] [cursor=pointer]:
          - /url: /poe/builds
          - img "Builds" [ref=e192]
        - link "Guides" [ref=e195] [cursor=pointer]:
          - /url: /poe/guides
          - img "Guides" [ref=e197]
        - link "Creators" [ref=e200] [cursor=pointer]:
          - /url: /poe/creators
          - img "Creators" [ref=e202]
      - generic [ref=e204]:
        - main [ref=e205]:
          - generic [ref=e206]:
            - navigation [ref=e207]:
              - list [ref=e208]:
                - listitem [ref=e209]:
                  - link "Path of Exile" [ref=e210] [cursor=pointer]:
                    - /url: /poe
                - listitem [ref=e211]:
                  - img [ref=e212]
                - listitem [ref=e213]:
                  - link "Builds" [ref=e214] [cursor=pointer]:
                    - /url: /poe/builds
                - listitem [ref=e215]:
                  - img [ref=e216]
                - listitem [ref=e217]: Herald-stacking Divine Ire League Starter (Build Concept)
            - generic [ref=e218]:
              - generic [ref=e219]:
                - button "PoE Build Herald-stacking Divine Ire League Starter (Build Concept) Creator presentation Witch presentation Elementalist Starter 3.29 CotA By FastAF ⚡ Updated on Jul 24, 2026 72 Favorites 0 Share" [ref=e222]:
                  - generic [ref=e223]:
                    - generic [ref=e225]:
                      - generic [ref=e226]: PoE Build
                      - heading "Herald-stacking Divine Ire League Starter (Build Concept)" [level=1] [ref=e227]
                      - generic [ref=e228]:
                        - generic [ref=e229]: Creator
                        - generic [ref=e230]:
                          - img "presentation" [ref=e231]
                          - text: Witch
                        - generic [ref=e232]:
                          - img "presentation" [ref=e233]
                          - text: Elementalist
                        - generic [ref=e234]: Starter
                        - generic [ref=e235]: 3.29 CotA
                      - generic [ref=e236]:
                        - generic [ref=e238]:
                          - generic [ref=e239]:
                            - text: By
                            - link "FastAF ⚡" [ref=e240] [cursor=pointer]:
                              - /url: /poe/profile/fastaf/builds
                          - link [ref=e241] [cursor=pointer]:
                            - /url: https://www.youtube.com/@FastAFgaming
                            - button [ref=e242]:
                              - img [ref=e243]
                          - link [ref=e244] [cursor=pointer]:
                            - /url: https://discord.gg/fastaf-realm-706744387840770119
                            - button [ref=e245]:
                              - img [ref=e246]
                        - generic [ref=e249]:
                          - text: Updated on
                          - generic [ref=e250]: Jul 24, 2026
                    - generic [ref=e252]:
                      - button "72 Favorites" [ref=e254] [cursor=pointer]:
                        - img [ref=e255]
                        - text: 72 Favorites
                      - button "0" [ref=e256] [cursor=pointer]:
                        - img [ref=e257]
                        - text: "0"
                      - button "Share" [ref=e259] [cursor=pointer]:
                        - img [ref=e260]
                        - text: Share
                - generic [ref=e262]:
                  - generic [ref=e263]:
                    - generic [ref=e264]:
                      - heading "Path of Building Code" [level=2] [ref=e268]
                      - generic [ref=e271]:
                        - textbox "Path of Building Code or POBb.in Link" [ref=e275]: eNrNPWlT40iyn8e_QkHEvpiJMaD74MFsGHP2QOOxoYH50lGWy1jdsuTWAbgn-r9vZpUuC0s-6ZglYluuyruyMutIaQ7_-zp2hWcahI7vHe1Ie-KOQD3bHzje09HO3e3Zrrnz3z8ahx0SjW6Gx7HjYs8fjV8O2bPg0mfqHu2YgBaR4IlGn1JSymdomxAvGlHfuyZf_ODcHxztfPQ9uiP0iTdwovSX7ZIw_EjG9Gjn3ons0Y5AQpt6g3befurSMfUi4jphBAgjEhA7osEVsm_FkX_tDwBqSNwQ6I2J4_V8-yuNzgM_noBaO8KzQ1840OV156Z7W5DN8YqygW6_HHZcMqVBLyKREML_He20wETkiV44wP2ZuDHQkUVNFEVjT7ZkTdP0nf1azOM4CKMTMobHVSn0JpQOMiRJ3dNNKfurQgJJS3h76pJ4t844l1FEbpKkapokmopmVeF1Ano6HFI7cp5pO3Ci9oh4Ni1wt-Qq1DXAr2M3ciauQ4MCilajU5m-KFYB3_rgZSedXgariKJlmMqeqqiiISr1eH7uH5UcwMdHxy6MzRpcEPfyyXMiuiZyx3dC39tAvyJqpYrt2HUhTiwF26UhDZ5J5MyKVU3bH_cdby3rtQJKbobcT7tk4MThNY0CGmZ0tD2jCveaeKTth_n4Vs8hBO3QAEJYNIMhLkDoUduHqLcKCvJYEfPKGdLlIVfSI0FYVZr19DjtLQs3n7Csq3uykf4ptehriNeFSL8cZM-P3SUhozze6TUT6lsR0Kr00xP6mkGZdeSKgJJWGWcvvVwHRTZrCBYhJbNGwGcf48Jiy7DodHrRyUdXU6w9RZZ0U1VkvTKZdEbT0LGJe01enXE8xuxHvtKcoSwpZrXrPo0iD8JcFbJkyZVJ_cwJaCWeqqvV0c8dVAory5XhCxKgH66DiBO0OFZSzTLFPkDoS8_O3Uqpo3vnBSz4F5cpNRwQpQtTEFdUfZcujZOzSabyMusAzuyJegnHae7aeq1SV5Tao3NYgnZJRJcL5PlcldRa8yJw0bxybQ6aY95qh5xFKBtK3jNVVVdMS7V0oz7zzTeapOh7Vh3aimY79WjwNO2NHOrm2qnVoaQInwrXJpNlUJnli_jFEVC05TjOs8lSyq1ol3sSDJZLTqvK9EzCYiiWJbHeVxOEorGqJwGF9TAgDGh5oV4duQP_C2433BXxWsHYj4Mlci3qwIGXUiHNJHyP16WD2F4udWXbpmMX9qwlPRR1IRoI6rrzcCsduhVFxP564g-eymars4brroQxK18vnkwgtqBDLEsAMyTsDZzCwmhXVRZD34A_F2e2WJdKSwyMxbBLk8-WB2UlzCUxllcEc3uJi7oE8NIMsrG8hmCB5zDsaOHaL54uVKeiM9gMLrWzY4BL7jA7_gsIP8Izp3A1aFgE5dOrUpSAet-nS9OfAV-Kwak3iAOcCEvzKGPMY4NHNy5MsxMSEWGQrJ4_kcAhXiSzc7CQksAeXcHonxHX7UMcONoptrJf7OzszHEjGpxAGzJFwcoUJaSIjA_32WkgPl2OJ34QCfQV_-mQIJqmx3IMkLUAnTByPLblh2jkujtCb-S_tAbPyOnW990wO8sjkwn1BjM0bgNKBZLGFhuFYMrjD2FMQpB6yj0WyPyjWKaiN2UTFi8_mv9oCiwWm7pqGhr-MmTo0nRT-jFz5ngJDOUdwfNBUDxckEWtqRqmoQAdU7OamqqqRlPSJN1oWoolN3Vd0puqKplKE2gCUc2U8VGyjKYqG7rYVBRFEpvwiOiWojUlS7O0pgW7kyasqYCBIWlKU5EtaNBUXQP6qihLTRkAzaaiStgim5qMmKLUVHRJhBZFQ6lEwGhKkq5qAKmJ8CxLKrQDpmaoSBbSdVM3dBV_AyVNA-HgWdFBeFFVQUBmJw2ktUAzQ5KaugRbZOBvgrSqKVpARoMFIIirgQ1hjyKCXBaS12QLWJqmrqHQSF6VVBWEUICYDNRAUdMAU6imDBJosooSKKgpCKqABJZpgaF0UwcesqIwW6ogtgFia5KJ-sqqpjU1XdXBJirKLakWSCyJCjQYlmw1YaBkEFVUdFBEF5GrAhRlyzBBV9PQwSIGGBLsIoJlYHNogH1M0L-Z-gWaSYMVLhBgloVxlEBLxUDeomKCtRRRsdD6MDYKmAnUVA20u2mJgKsqCtABvS20Hww2yA0CAiaOkC4ytwAHMSyEkxQZnEJCUcGeutUE-6JgiohKmobcBMbQp-hoMB3MpiiWCANhgIw4bfE8ggTT1qzveg5MqQimSeE0Hlb-_KAdARQ2Y345vOtesYdfRlE0CQ_2919eXvYmJBr5Q_oKS6s92x_vTwAJ5tpu-NVx3V0ku9-C_x0_Xbftiwcrfjl7ib-Hnz9ctf6W_5w-KKp__2xZ0eTFaV-MX67Opta1M719fLHv-uZj-6v0eCq_fno4H92L04-nL9GXv0Lp-NNx--pBPp861nPrr8v7vqL0zsffn-zB11v1-Co8_xDbUsu2Hnatvz7dxYby-CK_9HtS70P4-ezq-EN425-IauvlXupefJjcP59_HHbk9u3lCVWtSaB_8Mn0cWj2_7x_MC6US2n455fJ43FrEJ0_PHY9YvTb0963wdmD68jhwyP9cBfEt-F381YXI_lavHv4QvxO__XakDuq-PfXjq-N_x6K0umV9nHXuhp-2_309-hvevFy9eycfbiNHu8c6-xaeuw9DZ5eTzvyp93TvnbttVofn5VJbH--f-68nne7Z656xAZhPx2FQ35pEe7zX5ieAwdCEI_t-xjfWLDFAIgPH_2IhtiHjemPwx4OUwhBPIjO6Tg8nkI-PcOdROnoNImgCN2jEU8ORZyjnSiIKQb9IYldbP8rJq6DAV0stl7xKyDPD8bZOQqQgoCOiz5O8XY6wUjaurriPS03SoghuzS68yieCCQ4gzSyJ43sXqeVS90mrh0yuR3PduMBvfSSpUaWPVzSR9nwTgtPDAapTiVKGaNfDkGeBPjc9fvElVMU5v2YvnK2rAkyNB70xR6aEAyT3IjJ8PhExzjZrmlEBpCQ9y8jUHYfNd5nbOHpxHmGAbmlY7APW7yxxIpYvOcySFmX2r4VxiITjWWtpIfB80HamdFISjUq2cROdIC8R8ZJZuUMBeS4v8hASyqe-US6Ybr1s3XvjAESyLlgmUXqgIom2qZRUmZC5As5u63bJyPdoR6NApLuJssGmg9XttB8qPcyUcZNKLLbuol6EQSdYwJRkl8Elk1z6Q3jkA5wx-lRdiP11jDzYN7LLAkvochs60Zp-14U-C6IcgIxJciPIcrWqQAsG6gC7L1slLMTivy2bqasouDMt-Nwnn3KEGXDlPvfyyIZH6EoyLXj8e3TqxOeAi_a890BzIMLGhB3cDNkUzAx2yHPN1vJpeqVcO6DRFvLqVyRkhSrZdFePB77XhZ0EvlmRnQeQGFAK7sL0jHBskGWtzzKXIY8oQhvpUiB6KAk6v7PNfSZC1JXGbnYWTLwm66fbVwmQK1hCyL-ZKN2Ye1fZVPIc16FTd90_WybMgFqbVoQ8SfblJ11Vhm12Fky6puun21UJkCtUQsibj_GK1dCKw6IsC_wbPJvivVpfuvEARh9ZlzLXdmozu2oHNMtDylnLvhDYQ775fL35suekvFa4Wiu5Vj7G7Ox1vc3D7J5J31vR7E3KO0R3vS90TvreX_dU1bvsl5rBTbxnDAS-gHxtjKZk1GQlhqElP0x514YAtaSrKYL9p9tfi_jZ1bhcu1vVWeY6rzQN9P1njzTmyHsbp6d8kbrbdd76Yyc0N0KvLY844Ayu_l-Lgfn2Y5M99nmd9xU5lz2t-3dkWMfB5REszG1HVA6gSX6WcBq-3KNZ9vfTeWEjcD5bD-wvJEidH0stqbumEabRJUlPe0-KFs8acnnFf_9bpOJkd92xsL7y9k8xVvy7MR_v1tOYuTfuEvy2KMRu4Lglwz4yByGQVx6kzhilI52xk5of-7HwyG-cwHCRwF7oeT07Oy0fXv56TS5ry6iMAU_e_G4jymX_5teMIOzUhauhDDuh_zxaOeTQ1-YICdgUMcNUSHXJZOQZhfG7BYhkdwFvBpqDOrCyV7SmE8rB6imdPpKgwj0vSeBHTi0Uq6sf4FQnCHWafFXM-ZTw3cPqgnxmp82DC6vI6uwFHtlpJoKvntRqQ521uBejifEreSc9C6wRIT3SOCmztCxsTSifsjx1olD1djFtmGnY09rxjspWKqmwV7mqCLAO6uR-QsZVdhJb41V2csglVblvdXoJ9QmlbrzzmrkrDTR99iLUfOpZFA1lD76HnNymDQtx8XTzsqRPXVpBlJN8CYa0SApAqmidA0xKgWpnTiB04-j6mlcgKixFSujrrAQ9lWj8grhCh2wryYSzVTJVhi0CFNNiheWVgayOlRebVZpv6RyrWYIkpLNCvPz3hojpJWrFfon3TWThMXf1rPvDHjpYsV0KYHVBQzf_ro5GVaPuTmZcoHm5hTPXBJ-rRzvpLca_S5ycDkzhwpftixFBCfVZhRwbm1G4RbW0FEc0LUJdMsrkRy3W78GycoK5yKnvXWRI6k2XJsCr4lcG52VbK6NzeI_rIUpaFCbADKYmvkRxd5JnF6Zb0SKiTU_kOTarUSLp8K5mq5MkU_w5NWguhjAQRYQglx-UbNaXI5SVnl8QYmLb6_67mYE37wCtQkxfHsinhBvkJK7mbdGz8dhSev5UQg0WUntCb6ksakNPTqeziFULdfhfrqrY8W2uM9KSoR7UYA7_---P3482tF0Y880TV1WDNWSVd6e1IOpSQ0YrL9PHBjFgHlfyhUBH452dmUsHDdEQ9EswzB40foh2xYn9Wn4nJWnVdOLQ8pfzrynZOJ7DKNQVIZUigVlXYIn8QdCt9U9beT36_dg9sbluB_TAX9uB2QY0cGBgFwanYAOndcD4R8IjE_0QPrB34pgxrvxOGfzcxlM3DO0H3wfnl3bMkTc9zNjSW9RtB9Xvk3c1mBQuOzlnMxGD_bVM3JcenZACVaxwP6O7eGMMpC4J1nGjxKp5C0vPQPGLyA0ksq8A0EWG0lF4oFwvAt_DSZul347EHQDDDVxHdvBXqnxT0SewgObVV9_HjDqzeQf3vgjk_ZXRdlVjN_-gydMXGyB2UPgQjUk0arsk81iV35ZnnSDvUJBkrEyS5aUt_2KXERHawnMXI3fJVbNherh-SgBjjkyl4Afl-GgsaORa3_QRYUEphY_MRtk5xVv-2FMOYS8EEJZCKEuhNAWQqRvArJTqNlZIs_OkruPl3_dnTZa7mRE_g-cPPz_ULjwX9xGz_Fg8yDcBo7tB-A5yVIa_EEE30l-HYOtE0dzXIq-MtfBznfZX9HF1KKLiY3f5Zkx4pgwjOyqko1L7mKmuCuJ4oyPJeIIXYJnMzns77_K4q6CsEAd3_MR-IYEM3RD1v6DXxuBR-xlmVvoU3SK9sjBIqVGm3ieH0EjHrR-p15D0otccREpFD5xIEBGA40geE2ZEuwcrX6gKl1KWuBQ0r_EnZQKd3ryA-HaDyInBCsGHgTgayeKwoIbyVK1F_F9q8A3ruhyVqO4lX2LcEXJUwxPJ9R1AiceL-uHmjjrhwXP0cRdQ_wNXWPM1xXCjFRFUEnblYtOBumlEGJyl8u8GJNA5pq5D_bIBJmMHRqCm3E3RAr4bYvCDCiATGF7XIITIsj1wq-ytqtov9VG1HxKpQoUZhRbnKEbQ97YTRd9Qno8s1aYlDYOktICn5ZmPLrsr8nBO6uk5mTm-m44AtuC4rAGF2BJEoSNG2_6KrTGsUujRvJ-1IEAeV1Q9mRlT8zb2nEAa5eowQ-kwYxZj1wMfuK8_PqFvkAqosH0M0kPnX4UfQyins7cERNYfi4141IaRMbZYXyd0AAjEhXwmA7V4tE0sQWQLuIDk5IfLAxvc7JrIZvOj8TJ5JwD_-_NvrWuhe80VC9TZ193cCGjOIDT6d91r3DBza9IYBX5jJs87LosilqFwNkIUo4iLUI59mH7IbT60zCEgMzDoqDlBMSFBKgblfHlFfDZoYigrICRain0XiA4llir6xDaQP2EhrwFGvMV0regkL4FhdaiMU8haRXnmuedyhYsIm9Lm1X8jd-Vb2SPOZNN31gCeWUKOYK8HktlW_bXtuAM0hamh7QFOdQVPWFbIUbedEaqWzDg6jljayFW2VR_ecMpvJoAg6nAL8E28UG-ttiEwvyJrW1MQd_WsErbijGru-bmdlQ3HkttO061ivJ8P5QjqOtGQmULAUXZcFKqG-JL27H_2plyZadVV8ZYZxW1yt5kjlW1TWP1loZF3VZw2dq6eu0t1Ap4XTzwkTcOTfJ2xmBrmWIbGz51PZ1WNf7mOX5Liw1tY0E2T3H6qsFg0-DxliE_9eF1snh9Sga0x65O7ymerYb8fpVdcbLyWd8bOk_JZSf_kVx3MvysRYicyKWF-t7ieVGxjNZ58z47e-uc1S70fd-lxEsuTfffIr-U3kQ4fZ34YRxQrKTMq3jLHz2YIYGnWw7iIhUaPFFW6LCQc4bGbqsvvfS8Go-rK9A7LrHpyHcHNEiIUMRNPnueFhAborgAYebzaSmasgirdJWaY8qyKi3iWPjieYqmLcApfg4vw1moGrSsIR_yWgONHfDmGKZaDT_OPuCOHyWnAb4livXJWJDeo-6wUACuLaHjyoYpfg6jMOjLYq0-EOhjZZOalr7EQKwkIXpWmY2yjJcsy6Vn-6wMBAYrfFOlX8kh-Sim77rsvLw4OxdgpkkxRdAly7SqcULnyXFvhqx4jH2ZZwUhZ7_guZLnZyWmGS9RUuusOIL0UWHEw_0s6PNSHPbrj8bhfvk_wvE_cOzvzg==
                        - button "Copy Code" [ref=e276] [cursor=pointer]
                    - generic [ref=e277]:
                      - heading "Build Overview" [level=2] [ref=e281]
                      - generic [ref=e288]:
                        - paragraph [ref=e289]:
                          - text: ⚡ Divine Ire (Kamehameha Build)
                          - text: ⚡ Heralds combo wombo
                          - text: ⚡ Insane AoE and single target DPS
                        - paragraph [ref=e290]:
                          - strong [ref=e291]: Disclaimer -
                          - emphasis [ref=e292]: This is just a build concept
                          - text: 🔥 Check out the video for full showcase & accurate gear info 🔥
                          - strong [ref=e293]: Hope you enjoy this build guide!
                          - emphasis [ref=e294]: We are still new to this since we mostly only do showcases, but your support will motivate us to do better! Cheers
                    - generic [ref=e295]:
                      - heading "Strengths and Weaknesses" [level=2] [ref=e299]
                      - generic [ref=e302]:
                        - list [ref=e309]:
                          - listitem [ref=e310]: Decent AoE for early game (Elementalist)
                          - listitem [ref=e311]: Carry DPS up to end game mapping
                          - listitem [ref=e312]: Easy to play (No targeting)
                          - listitem [ref=e313]: GOKU KAMEHAMEHA
                        - list [ref=e320]:
                          - listitem [ref=e321]: Squishy
                          - listitem [ref=e322]: Might feel clunky if not enough cast speed
                    - generic [ref=e323]:
                      - generic [ref=e324]:
                        - heading "Build Variants" [level=2] [ref=e328]
                        - paragraph [ref=e336]:
                          - strong [ref=e337]: PoB
                          - text: "-https://pobb.in/fqvQ0BzqgWpF"
                      - generic [ref=e340]:
                        - generic [ref=e341]:
                          - heading "Equipment" [level=2] [ref=e345]
                          - generic [ref=e350]:
                            - img "Imbued Wand" [ref=e353] [cursor=pointer]
                            - img "Algor Mortis" [ref=e358] [cursor=pointer]
                            - img "Alpha's Howl" [ref=e361] [cursor=pointer]
                            - img "Ashes of the Stars" [ref=e368] [cursor=pointer]
                            - img "Imbued Wand" [ref=e373] [cursor=pointer]
                        - generic [ref=e410]:
                          - paragraph [ref=e411]: 1. Basically just get anything with cast speed + spell / lightning damage
                          - paragraph [ref=e412]:
                            - strong [ref=e413]: (Ignore the uniques, it's just my way of building up to mid game progress)
                      - generic [ref=e415]:
                        - heading "Passive Tree" [level=2] [ref=e419]
                        - generic [ref=e420]:
                          - generic [ref=e425]:
                            - generic [ref=e426]:
                              - generic [ref=e427]: "main:"
                              - generic [ref=e428]: "123"
                              - generic [ref=e429]: "123"
                            - generic [ref=e430]:
                              - generic [ref=e431]: "ascendancy:"
                              - generic [ref=e432]: "8"
                              - generic [ref=e433]: "8"
                          - generic [ref=e439]:
                            - generic [ref=e440]: Keystones
                            - generic [ref=e445]:
                              - generic [ref=e446]: Eldritch Battery
                              - generic [ref=e448]: Spend Energy Shield before Mana for Skill Mana Costs Energy Shield protects Mana instead of Life 50% less Energy Shield Recharge Rate
                          - generic [ref=e449]:
                            - generic [ref=e450]: Masteries
                            - generic [ref=e451]:
                              - generic [ref=e452]:
                                - generic [ref=e453]: Reservation Mastery (1)
                                - generic [ref=e455]: 8% increased Damage for each of your Aura or Herald Skills affecting you
                              - generic [ref=e456]:
                                - generic [ref=e457]: Mana Mastery (1)
                                - generic [ref=e459]: 12% increased Mana Reservation Efficiency of Skills
                              - generic [ref=e460]:
                                - generic [ref=e461]: Elemental Mastery (1)
                                - generic [ref=e463]: 3% chance for Hits to deal 300% of Physical Damage as Extra Damage of a random Element
                      - generic [ref=e465]:
                        - heading "Skills" [level=2] [ref=e469]
                        - generic [ref=e473]:
                          - generic [ref=e479]:
                            - generic [ref=e480]: Alpha's Howl
                            - generic [ref=e481]: Sinner Tricorne
                          - generic [ref=e482]:
                            - generic [ref=e490]: Wrath
                            - generic [ref=e498]: Haste
                    - generic [ref=e500]:
                      - generic [ref=e504]:
                        - heading "Comments" [level=2] [ref=e505]
                        - generic [ref=e506]: "0"
                      - generic [ref=e508]:
                        - generic [ref=e512]:
                          - generic [ref=e514]:
                            - generic [ref=e515]:
                              - button [ref=e517] [cursor=pointer]:
                                - img [ref=e518]
                              - button [ref=e520] [cursor=pointer]:
                                - img [ref=e521]
                              - button [ref=e523] [cursor=pointer]:
                                - img [ref=e524]
                              - button [ref=e526] [cursor=pointer]:
                                - img [ref=e527]
                            - button [ref=e529] [cursor=pointer]:
                              - img [ref=e530]
                            - generic [ref=e532]:
                              - button [ref=e534] [cursor=pointer]:
                                - img [ref=e535]
                              - button [ref=e537] [cursor=pointer]:
                                - img [ref=e538]
                            - button [ref=e540] [cursor=pointer]:
                              - img [ref=e541]
                          - generic [ref=e543]:
                            - textbox [ref=e545]:
                              - paragraph [ref=e546]
                            - generic: Share your thoughts...Type @ to try game data
                          - generic [ref=e547]:
                            - generic: 1000 characters remaining
                            - button "Comment" [ref=e548] [cursor=pointer]
                        - generic "select" [ref=e550]:
                          - combobox [ref=e553]
                          - button "Top" [ref=e556] [cursor=pointer]:
                            - generic [ref=e557]: Top
                            - img [ref=e559]
                  - generic [ref=e561]:
                    - generic [ref=e562]:
                      - heading "Video Guide" [level=2] [ref=e566]
                      - iframe [ref=e572]:
                        - generic [active] [ref=f751e1]:
                          - generic "YouTube Video Player" [ref=f751e3]
                          - generic [ref=f751e5]:
                            - generic:
                              - generic:
                                - button "Play video" [ref=f751e10] [cursor=pointer]:
                                  - generic [ref=f751e13]:
                                    - img
                                - button "Hide player controls" [ref=f751e14] [cursor=pointer]
                                - generic [ref=f751e16]:
                                  - generic [ref=f751e21]:
                                    - generic [ref=f751e22]:
                                      - link "【Full-Unique Build】GOKU BLAST goes WILD! Divine Ire + Grace of the Goddess Wand | Elementalist 3.26" [ref=f751e23] [cursor=pointer]:
                                        - /url: https://www.youtube.com/watch?v=Ahvsktu4LAE
                                      - link "FastAF ⚡" [ref=f751e24] [cursor=pointer]:
                                        - /url: /channel/UCFRY0sr8tXuefXmvRBzw_Fw
                                        - generic [ref=f751e25]: FastAF ⚡
                                    - generic [ref=f751e26]:
                                      - button "thumbnail-image" [ref=f751e27] [cursor=pointer]:
                                        - img "thumbnail-image" [ref=f751e28]
                                      - generic [ref=f751e30]:
                                        - generic: FastAF ⚡
                                        - generic: 100K subscribers
                                  - generic [ref=f751e31]:
                                    - button "Share" [ref=f751e34] [cursor=pointer]:
                                      - generic [ref=f751e38]:
                                        - img
                                    - link "Watch on YouTube" [ref=f751e45] [cursor=pointer]:
                                      - /url: https://www.youtube.com/watch?v=Ahvsktu4LAE
                                      - generic [ref=f751e48]:
                                        - text: Watch on
                                        - img [ref=f751e50]:
                                          - generic [ref=f751e52]:
                                            - img
                    - generic [ref=e573]:
                      - heading "Stats" [level=2] [ref=e577]
                      - generic [ref=e581]:
                        - generic [ref=e582]:
                          - generic [ref=e583]: Character
                          - generic [ref=e584]:
                            - generic [ref=e585]:
                              - generic [ref=e586]: Attributes
                              - generic [ref=e587]:
                                - generic [ref=e588]: 60 /
                                - generic [ref=e589]: 80 /
                                - generic [ref=e590]: "328"
                            - generic [ref=e591]:
                              - generic [ref=e592]: Movement Speed
                              - generic [ref=e594]: 128%
                        - generic [ref=e595]:
                          - generic [ref=e596]: Charges
                          - generic [ref=e597]:
                            - generic [ref=e598]:
                              - generic [ref=e599]: Endurance Charges
                              - generic [ref=e601]: "3"
                            - generic [ref=e602]:
                              - generic [ref=e603]: Frenzy Charges
                              - generic [ref=e605]: "3"
                            - generic [ref=e606]:
                              - generic [ref=e607]: Power Charges
                              - generic [ref=e609]: "3"
                        - generic [ref=e610]:
                          - generic [ref=e611]: Defensive
                          - generic [ref=e612]:
                            - generic [ref=e613]:
                              - generic [ref=e614]: Life
                              - generic [ref=e616]: 1,881
                            - generic [ref=e617]:
                              - generic [ref=e618]: Energy Shield
                              - generic [ref=e620]: "488"
                            - generic [ref=e621]:
                              - generic [ref=e622]: Mana
                              - generic [ref=e624]: "914"
                            - generic [ref=e625]:
                              - generic [ref=e626]: Armour
                              - generic [ref=e628]: "0"
                            - generic [ref=e629]:
                              - generic [ref=e630]: Evasion Rating
                              - generic [ref=e632]: 2,104
                            - generic [ref=e633]:
                              - generic [ref=e634]: Block
                              - generic [ref=e636]: 34%
                            - generic [ref=e637]:
                              - generic [ref=e638]: Resistances
                              - generic [ref=e639]:
                                - generic [ref=e640]: "-43% /"
                                - generic [ref=e641]: 7% /
                                - generic [ref=e642]: "-8% /"
                                - generic [ref=e643]: 4%
                        - generic [ref=e644]:
                          - generic [ref=e645]: Simulated
                          - generic [ref=e646]:
                            - generic [ref=e647]:
                              - generic [ref=e648]: Effective Health Pool
                              - generic [ref=e650]: 2,539
                            - generic [ref=e651]:
                              - generic [ref=e652]: Max Hit
                              - generic [ref=e653]:
                                - generic [ref=e654]: 2,138 /
                                - generic [ref=e655]: 1,464 /
                                - generic [ref=e656]: 2,227 /
                                - generic [ref=e657]: 1,926 /
                                - generic [ref=e658]: 2,227
                        - generic [ref=e659]:
                          - generic [ref=e660]: Skill DPS Estimation
                          - generic [ref=e662]:
                            - generic [ref=e663]: Divine Ire
                            - generic [ref=e665]: 3M
                    - generic [ref=e666]:
                      - generic [ref=e667]:
                        - heading "Table of Contents" [level=2] [ref=e671]
                        - generic [ref=e672]:
                          - generic [ref=e673]:
                            - link "1. Path of Building Code" [ref=e674] [cursor=pointer]:
                              - /url: /poe/builds/fastaf-herald-stacking-divine-ire#f06538a3-2c25-461d-966d-5c957d872a3c-path-of-building-code-0
                            - link "2. Build Overview" [ref=e675] [cursor=pointer]:
                              - /url: /poe/builds/fastaf-herald-stacking-divine-ire#c81bc723-60d4-42bc-acf2-59b5ed7b2fe1-build-overview-0
                            - link "3. Strengths and Weaknesses" [ref=e676] [cursor=pointer]:
                              - /url: /poe/builds/fastaf-herald-stacking-divine-ire#91048081-0a41-44a5-871d-578e28f52491-strengths-and-weaknesses-0
                            - link "4. Equipment" [ref=e677] [cursor=pointer]:
                              - /url: /poe/builds/fastaf-herald-stacking-divine-ire#d4c1e427-be15-4b3c-b2b4-49b898c83b93-equipment-0
                            - link "5. Passive Tree" [ref=e678] [cursor=pointer]:
                              - /url: /poe/builds/fastaf-herald-stacking-divine-ire#27f1f8be-7338-4f6d-96dc-6757b79eef07-passive-tree-0
                            - link "6. Skills" [ref=e679] [cursor=pointer]:
                              - /url: /poe/builds/fastaf-herald-stacking-divine-ire#0c2b1fb8-ab87-4b11-960f-cb1399b811d1-skills-0
                            - link "7. Comments" [ref=e680] [cursor=pointer]:
                              - /url: /poe/builds/fastaf-herald-stacking-divine-ire#1a25d256-9f21-45ad-a6ea-2b3d581fc47b-comments-0
                          - button "Back to top" [ref=e682] [cursor=pointer]
                      - generic [ref=e684]:
                        - heading "Featured Builds" [level=2] [ref=e688]
                        - generic [ref=e690]:
                          - generic [ref=e692] [cursor=pointer]:
                            - link [ref=e693]:
                              - /url: /poe/builds/holy-sweep-of-hammer-falls-inquisitor
                            - generic [ref=e697]:
                              - generic [ref=e698]: "[3.29] Holy Sweep of Hammer Falls Inquisitor - Final Update 2nd Sep"
                              - generic [ref=e699]: Updated on Sep 2, 2026
                          - generic [ref=e702] [cursor=pointer]:
                            - link [ref=e703]:
                              - /url: /poe/builds/endgame-armour-stacker-valdo-farmer
                            - generic [ref=e707]:
                              - generic [ref=e708]: Luminary Armour Stacker - Valdo Farmer
                              - generic [ref=e709]: Updated on Sep 1, 2026
                          - generic [ref=e712] [cursor=pointer]:
                            - link [ref=e713]:
                              - /url: /poe/builds/mercenary-support-luminary-path-of-evening
                            - generic [ref=e717]:
                              - generic [ref=e718]: Mercenary Support Luminary
                              - generic [ref=e719]: Updated on Aug 31, 2026
                          - generic [ref=e722] [cursor=pointer]:
                            - link [ref=e723]:
                              - /url: /poe/builds/ky-s-blade-fall-blade-blast-slinger-coc-assassin-leaguestart-to-endgame
                            - generic [ref=e727]:
                              - generic [ref=e728]: Ky's Blade Fall + Blade Blast Slinger / CoC Assassin Leaguestart to Endgame
                              - generic [ref=e729]: Updated on Aug 30, 2026
                          - generic [ref=e732] [cursor=pointer]:
                            - link [ref=e733]:
                              - /url: /poe/builds/wild-strike-luminary-support-peuget2
                            - generic [ref=e737]:
                              - generic [ref=e738]: "[3.29] Wild Strike Luminary Support"
                              - generic [ref=e739]: Updated on Aug 27, 2026
                      - link "Become a Creator Want to earn rewards by sharing your builds with your community? Join Creator Program" [ref=e741] [cursor=pointer]:
                        - /url: https://form.typeform.com/to/iDJST6r5#email=xxxxx
                        - generic [ref=e744]:
                          - generic [ref=e745]:
                            - paragraph [ref=e746]: Become a Creator
                            - paragraph [ref=e747]: Want to earn rewards by sharing your builds with your community?
                          - button "Join Creator Program" [ref=e749]: Join Creator Program
              - status [ref=e751]
        - complementary [ref=e756]:
          - generic [ref=e757]:
            - generic [ref=e759]:
              - generic [ref=e761] [cursor=pointer]:
                - generic [ref=e762]: Advertisement
                - generic [ref=e763]: Remove Ads
              - generic [ref=e766] [cursor=pointer]:
                - generic [ref=e767]: Remove all ads
                - generic [ref=e768]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e769]
            - generic [ref=e771]:
              - generic [ref=e773] [cursor=pointer]:
                - generic [ref=e774]: Advertisement
                - generic [ref=e775]: Remove Ads
              - generic [ref=e778] [cursor=pointer]:
                - generic [ref=e779]: Remove all ads
                - generic [ref=e780]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e781]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e784]:
    - banner [ref=e785]:
      - generic [ref=e786] [cursor=pointer]:
        - generic [ref=e787]: Advertisement
        - generic [ref=e788]: Remove Ads
    - generic [ref=e791] [cursor=pointer]:
      - generic [ref=e792]: Remove all ads
      - generic [ref=e793]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e794]
```

# Test source

```ts
  372 | 
  373 |       filteredLinks = arrayLinks
  374 |         .filter((match) => {
  375 |           const filterPattern = /mobalytics\.gg\/riftbound/;
  376 |           return filterPattern.test(match.groups.link);
  377 |         })
  378 |         .slice(0, quantityLinks);
  379 |     });
  380 | 
  381 |     const consoleMessages = [];
  382 |     const pageErrors = [];
  383 |     page.on('console', (msg) => {
  384 |       if (msg.type() === 'error') {
  385 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  386 |         // console.log(consoleInfo);
  387 |         consoleMessages.push(consoleInfo);
  388 |       }
  389 |     });
  390 |     page.on('pageerror', (error) => {
  391 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  392 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  393 |       //   console.log(errorInfo);
  394 |       // }
  395 |       pageErrors.push(errorInfo);
  396 |     });
  397 | 
  398 |     for (const takeLink of filteredLinks) {
  399 |       consoleMessages.length = 0;
  400 |       pageErrors.length = 0;
  401 | 
  402 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  403 | 
  404 |       await test.step(`Open parsed page: ${link}`, async () => {
  405 |         await page.goto(link);
  406 |         await page.waitForTimeout(1000);
  407 |       });
  408 | 
  409 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  410 | 
  411 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  412 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  413 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  414 |       });
  415 |     }
  416 |   });
  417 | 
  418 |   test(`Check that hydration is ok on PoE`, async ({ page, request }) => {
  419 |     let filteredLinks;
  420 | 
  421 |     await test.step(`Parse up to ${quantityLinks} links from PoE sitemap: ${process.env.BASE_URL}/poe/sitemap.xml`, async () => {
  422 |       const response = await request.get(`${process.env.BASE_URL}/poe/sitemap.xml`);
  423 |       await test.step(`Expected Result: ${process.env.BASE_URL}/poe/sitemap.xml returns with ${response.status()}`, async () => {
  424 |         expect(response.ok()).toBeTruthy();
  425 |       });
  426 |       const xmlData = await response.text();
  427 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  428 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  429 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  430 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  431 | 
  432 |       filteredLinks = arrayLinks
  433 |         .filter((match) => {
  434 |           const filterPattern = /mobalytics\.gg\/poe\/(builds|guides)\/[-a-z]+$/;
  435 |           return filterPattern.test(match.groups.link);
  436 |         })
  437 |         .slice(0, quantityLinks);
  438 |     });
  439 | 
  440 |     const consoleMessages = [];
  441 |     const pageErrors = [];
  442 |     page.on('console', (msg) => {
  443 |       if (msg.type() === 'error') {
  444 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  445 |         // console.log(consoleInfo);
  446 |         consoleMessages.push(consoleInfo);
  447 |       }
  448 |     });
  449 |     page.on('pageerror', (error) => {
  450 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  451 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  452 |       //   console.log(errorInfo);
  453 |       // }
  454 |       pageErrors.push(errorInfo);
  455 |     });
  456 | 
  457 |     for (const takeLink of filteredLinks) {
  458 |       consoleMessages.length = 0;
  459 |       pageErrors.length = 0;
  460 | 
  461 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  462 | 
  463 |       await test.step(`Open parsed page: ${link}`, async () => {
  464 |         await page.goto(link);
  465 |         await page.waitForTimeout(1000);
  466 |       });
  467 | 
  468 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  469 | 
  470 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  471 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
> 472 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      |                                               ^ Error: expect(received).not.toMatch(expected)
  473 |       });
  474 |     }
  475 |   });
  476 | 
  477 |   test(`Check that hydration is ok on Hades-2`, async ({ page, request }) => {
  478 |     let filteredLinks;
  479 | 
  480 |     await test.step(`Parse up to ${quantityLinks} links from Hades-2 sitemap: ${process.env.BASE_URL}/hades-2/sitemap.xml`, async () => {
  481 |       const response = await request.get(`${process.env.BASE_URL}/hades-2/sitemap.xml`);
  482 |       await test.step(`Expected Result: ${process.env.BASE_URL}/hades-2/sitemap.xml returns with ${response.status()}`, async () => {
  483 |         expect(response.ok()).toBeTruthy();
  484 |       });
  485 |       const xmlData = await response.text();
  486 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  487 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  488 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  489 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  490 | 
  491 |       filteredLinks = arrayLinks
  492 |         .filter((match) => {
  493 |           const filterPattern = /mobalytics\.gg\/hades-2/;
  494 |           return filterPattern.test(match.groups.link);
  495 |         })
  496 |         .slice(0, quantityLinks);
  497 |     });
  498 | 
  499 |     const consoleMessages = [];
  500 |     const pageErrors = [];
  501 |     page.on('console', (msg) => {
  502 |       if (msg.type() === 'error') {
  503 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  504 |         // console.log(consoleInfo);
  505 |         consoleMessages.push(consoleInfo);
  506 |       }
  507 |     });
  508 |     page.on('pageerror', (error) => {
  509 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  510 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  511 |       //   console.log(errorInfo);
  512 |       // }
  513 |       pageErrors.push(errorInfo);
  514 |     });
  515 | 
  516 |     for (const takeLink of filteredLinks) {
  517 |       consoleMessages.length = 0;
  518 |       pageErrors.length = 0;
  519 | 
  520 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  521 | 
  522 |       await test.step(`Open parsed page: ${link}`, async () => {
  523 |         await page.goto(link);
  524 |         await page.waitForTimeout(1000);
  525 |       });
  526 | 
  527 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  528 | 
  529 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  530 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  531 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  532 |       });
  533 |     }
  534 |   });
  535 | 
  536 |   test(`Check that hydration is ok on PoE-2`, async ({ page, request }) => {
  537 |     let filteredLinks;
  538 | 
  539 |     await test.step(`Parse up to ${quantityLinks} links from PoE-2 sitemap: ${process.env.BASE_URL}/poe-2/sitemap.xml`, async () => {
  540 |       const response = await request.get(`${process.env.BASE_URL}/poe-2/sitemap.xml`);
  541 |       await test.step(`Expected Result: ${process.env.BASE_URL}/poe-2/sitemap.xml returns with ${response.status()}`, async () => {
  542 |         expect(response.ok()).toBeTruthy();
  543 |       });
  544 |       const xmlData = await response.text();
  545 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  546 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  547 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  548 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  549 | 
  550 |       filteredLinks = arrayLinks
  551 |         .filter((match) => {
  552 |           const filterPattern = /mobalytics\.gg\/poe-2\/(builds|guides|tier-lists)\/[-a-z]+$/;
  553 |           return filterPattern.test(match.groups.link);
  554 |         })
  555 |         .slice(0, quantityLinks);
  556 |     });
  557 | 
  558 |     const consoleMessages = [];
  559 |     const pageErrors = [];
  560 |     page.on('console', (msg) => {
  561 |       if (msg.type() === 'error') {
  562 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  563 |         // console.log(consoleInfo);
  564 |         consoleMessages.push(consoleInfo);
  565 |       }
  566 |     });
  567 |     page.on('pageerror', (error) => {
  568 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  569 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  570 |       //   console.log(errorInfo);
  571 |       // }
  572 |       pageErrors.push(errorInfo);
```
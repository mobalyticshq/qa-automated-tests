# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hydration.test.js >> Check hydration is successfully for each project >> Check that hydration is ok on ZZZ
- Location: e2e-tests/hydration.test.js:734:3

# Error details

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d050d267-56ae-4df6-aeb7-32014df0f014' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d050d267-56ae-4df6-aeb7-32014df0f014' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d050d267-56ae-4df6-aeb7-32014df0f014' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d050d267-56ae-4df6-aeb7-32014df0f014' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fzzz%2Fbangboos&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/957aa428-f69b-4c4f-bf40-272ae404f6d2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fzzz%2Fbangboos&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/957aa428-f69b-4c4f-bf40-272ae404f6d2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fzzz%2Fbangboos&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/957aa428-f69b-4c4f-bf40-272ae404f6d2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fzzz%2Fbangboos&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/957aa428-f69b-4c4f-bf40-272ae404f6d2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0399ce7d-9961-4e9a-be4f-449f1788bccc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0399ce7d-9961-4e9a-be4f-449f1788bccc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0399ce7d-9961-4e9a-be4f-449f1788bccc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0399ce7d-9961-4e9a-be4f-449f1788bccc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/672dce0f-fe63-4699-95a3-833973f12f9c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/672dce0f-fe63-4699-95a3-833973f12f9c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/672dce0f-fe63-4699-95a3-833973f12f9c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/672dce0f-fe63-4699-95a3-833973f12f9c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3b74dd73-da16-4579-a715-fb8f5a153a1e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3b74dd73-da16-4579-a715-fb8f5a153a1e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3b74dd73-da16-4579-a715-fb8f5a153a1e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3b74dd73-da16-4579-a715-fb8f5a153a1e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e3c51ab-9dff-41d3-b0db-9bd8d9c432cf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e3c51ab-9dff-41d3-b0db-9bd8d9c432cf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e3c51ab-9dff-41d3-b0db-9bd8d9c432cf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e3c51ab-9dff-41d3-b0db-9bd8d9c432cf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/655a2588-f39e-4576-a499-d03dfedf3f7d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/655a2588-f39e-4576-a499-d03dfedf3f7d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/655a2588-f39e-4576-a499-d03dfedf3f7d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/655a2588-f39e-4576-a499-d03dfedf3f7d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9fa03b96-6f36-4ac4-be6b-80ce048f0745' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9fa03b96-6f36-4ac4-be6b-80ce048f0745' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9fa03b96-6f36-4ac4-be6b-80ce048f0745' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9fa03b96-6f36-4ac4-be6b-80ce048f0745' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1bab5e31-0491-4ca9-9176-eb6e3d0d1aa7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1bab5e31-0491-4ca9-9176-eb6e3d0d1aa7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1bab5e31-0491-4ca9-9176-eb6e3d0d1aa7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1bab5e31-0491-4ca9-9176-eb6e3d0d1aa7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/097e94ad-d028-478f-a6e2-667ff32f97c5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/097e94ad-d028-478f-a6e2-667ff32f97c5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/097e94ad-d028-478f-a6e2-667ff32f97c5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/097e94ad-d028-478f-a6e2-667ff32f97c5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/12c32671-170e-44ee-85f3-67863123c52e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/12c32671-170e-44ee-85f3-67863123c52e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/12c32671-170e-44ee-85f3-67863123c52e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/12c32671-170e-44ee-85f3-67863123c52e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5c4c7616-a7b5-4771-b97b-39c963cbd738' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5c4c7616-a7b5-4771-b97b-39c963cbd738' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5c4c7616-a7b5-4771-b97b-39c963cbd738' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5c4c7616-a7b5-4771-b97b-39c963cbd738' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/077a6734-8a09-4c48-b84e-90e7397f04da' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/077a6734-8a09-4c48-b84e-90e7397f04da' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/077a6734-8a09-4c48-b84e-90e7397f04da' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/077a6734-8a09-4c48-b84e-90e7397f04da' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b30a2a7-4b10-4ef2-bf47-2063439933d4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b30a2a7-4b10-4ef2-bf47-2063439933d4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b30a2a7-4b10-4ef2-bf47-2063439933d4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b30a2a7-4b10-4ef2-bf47-2063439933d4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5606c746-399a-4e72-9c0a-16dd1ff3f320' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5606c746-399a-4e72-9c0a-16dd1ff3f320' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5606c746-399a-4e72-9c0a-16dd1ff3f320' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5606c746-399a-4e72-9c0a-16dd1ff3f320' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/325d2f61-cd41-4725-8271-695702b9aac8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/325d2f61-cd41-4725-8271-695702b9aac8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/325d2f61-cd41-4725-8271-695702b9aac8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/325d2f61-cd41-4725-8271-695702b9aac8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a77d1507-b297-4807-b600-c49c15a6d982' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a77d1507-b297-4807-b600-c49c15a6d982' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a77d1507-b297-4807-b600-c49c15a6d982' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a77d1507-b297-4807-b600-c49c15a6d982' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7175a314-9037-43a6-abcf-f1e0b8b7aa2f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7175a314-9037-43a6-abcf-f1e0b8b7aa2f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7175a314-9037-43a6-abcf-f1e0b8b7aa2f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7175a314-9037-43a6-abcf-f1e0b8b7aa2f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7afb823d-3c35-4f54-83e1-8ff95fd867d0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7afb823d-3c35-4f54-83e1-8ff95fd867d0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7afb823d-3c35-4f54-83e1-8ff95fd867d0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7afb823d-3c35-4f54-83e1-8ff95fd867d0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e041a288-9d7b-4531-8aff-96d8c9c7f360' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e041a288-9d7b-4531-8aff-96d8c9c7f360' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e041a288-9d7b-4531-8aff-96d8c9c7f360' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e041a288-9d7b-4531-8aff-96d8c9c7f360' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9f7938be-cd35-45cd-b531-e8528e16b5d8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9f7938be-cd35-45cd-b531-e8528e16b5d8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9f7938be-cd35-45cd-b531-e8528e16b5d8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9f7938be-cd35-45cd-b531-e8528e16b5d8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4531df6d-47c4-4db6-96e5-2a59e70e7d80' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4531df6d-47c4-4db6-96e5-2a59e70e7d80' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4531df6d-47c4-4db6-96e5-2a59e70e7d80' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4531df6d-47c4-4db6-96e5-2a59e70e7d80' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7db53f39-bfcb-4a46-85b1-403fca0304e4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7db53f39-bfcb-4a46-85b1-403fca0304e4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7db53f39-bfcb-4a46-85b1-403fca0304e4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7db53f39-bfcb-4a46-85b1-403fca0304e4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2d09d4cd-65c0-4444-ad78-f5b9637cb489' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2d09d4cd-65c0-4444-ad78-f5b9637cb489' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2d09d4cd-65c0-4444-ad78-f5b9637cb489' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2d09d4cd-65c0-4444-ad78-f5b9637cb489' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cdc4e40a-5036-4491-b3ec-f047ecc5b1fc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cdc4e40a-5036-4491-b3ec-f047ecc5b1fc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cdc4e40a-5036-4491-b3ec-f047ecc5b1fc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cdc4e40a-5036-4491-b3ec-f047ecc5b1fc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fbfd3b24-8ddc-4fd0-ad8f-522060fda87e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fbfd3b24-8ddc-4fd0-ad8f-522060fda87e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fbfd3b24-8ddc-4fd0-ad8f-522060fda87e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fbfd3b24-8ddc-4fd0-ad8f-522060fda87e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9d48c993-7e25-4136-b398-fbc4d19d870c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9d48c993-7e25-4136-b398-fbc4d19d870c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9d48c993-7e25-4136-b398-fbc4d19d870c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9d48c993-7e25-4136-b398-fbc4d19d870c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/70c348af-2eef-4bfc-8464-eedbf5cb4f2c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/70c348af-2eef-4bfc-8464-eedbf5cb4f2c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/70c348af-2eef-4bfc-8464-eedbf5cb4f2c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/70c348af-2eef-4bfc-8464-eedbf5cb4f2c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2ab1f119-7195-4f3b-acf4-a71300c66045' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2ab1f119-7195-4f3b-acf4-a71300c66045' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2ab1f119-7195-4f3b-acf4-a71300c66045' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2ab1f119-7195-4f3b-acf4-a71300c66045' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0642cefa-b0b0-4f11-a48c-76cd4be6965e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0642cefa-b0b0-4f11-a48c-76cd4be6965e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0642cefa-b0b0-4f11-a48c-76cd4be6965e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0642cefa-b0b0-4f11-a48c-76cd4be6965e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b7fdf638-7fbb-4302-9f76-19833e72f959' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b7fdf638-7fbb-4302-9f76-19833e72f959' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b7fdf638-7fbb-4302-9f76-19833e72f959' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b7fdf638-7fbb-4302-9f76-19833e72f959' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/215aca43-6fde-4415-ad16-3062f9dfb4b5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/215aca43-6fde-4415-ad16-3062f9dfb4b5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/215aca43-6fde-4415-ad16-3062f9dfb4b5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/215aca43-6fde-4415-ad16-3062f9dfb4b5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9ac3d4be-7778-4a96-a2f8-110c2a08d648' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9ac3d4be-7778-4a96-a2f8-110c2a08d648' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9ac3d4be-7778-4a96-a2f8-110c2a08d648' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9ac3d4be-7778-4a96-a2f8-110c2a08d648' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1a88011b-b4a0-4f20-ac72-4e6c913dfc63' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1a88011b-b4a0-4f20-ac72-4e6c913dfc63' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1a88011b-b4a0-4f20-ac72-4e6c913dfc63' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1a88011b-b4a0-4f20-ac72-4e6c913dfc63' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4ab18a59-cad5-40cc-91bb-a8ade0d6cf4e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4ab18a59-cad5-40cc-91bb-a8ade0d6cf4e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4ab18a59-cad5-40cc-91bb-a8ade0d6cf4e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4ab18a59-cad5-40cc-91bb-a8ade0d6cf4e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/09f29155-a1fe-4b7d-89a3-adc71e7b6e5f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/09f29155-a1fe-4b7d-89a3-adc71e7b6e5f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/09f29155-a1fe-4b7d-89a3-adc71e7b6e5f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/09f29155-a1fe-4b7d-89a3-adc71e7b6e5f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1b28b1be-72ec-41d4-ae13-e3438b1e1137' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1b28b1be-72ec-41d4-ae13-e3438b1e1137' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1b28b1be-72ec-41d4-ae13-e3438b1e1137' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1b28b1be-72ec-41d4-ae13-e3438b1e1137' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e5e15f06-c141-4a99-ab12-5f2233bc64a1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e5e15f06-c141-4a99-ab12-5f2233bc64a1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e5e15f06-c141-4a99-ab12-5f2233bc64a1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e5e15f06-c141-4a99-ab12-5f2233bc64a1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f6cae70d-fff2-4f87-a4fd-71fdf89f3ff4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f6cae70d-fff2-4f87-a4fd-71fdf89f3ff4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f6cae70d-fff2-4f87-a4fd-71fdf89f3ff4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f6cae70d-fff2-4f87-a4fd-71fdf89f3ff4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cdc87f43-801a-491f-ab7b-98e5d9a76535' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cdc87f43-801a-491f-ab7b-98e5d9a76535' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cdc87f43-801a-491f-ab7b-98e5d9a76535' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cdc87f43-801a-491f-ab7b-98e5d9a76535' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c79e35c1-2f4b-47dc-b251-9d2e1bfb0422' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c79e35c1-2f4b-47dc-b251-9d2e1bfb0422' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c79e35c1-2f4b-47dc-b251-9d2e1bfb0422' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c79e35c1-2f4b-47dc-b251-9d2e1bfb0422' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bb65c64c-c188-4944-8169-00fee10ff732' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bb65c64c-c188-4944-8169-00fee10ff732' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bb65c64c-c188-4944-8169-00fee10ff732' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bb65c64c-c188-4944-8169-00fee10ff732' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6d8419c2-4ab9-44bb-9f79-2df366d83150' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6d8419c2-4ab9-44bb-9f79-2df366d83150' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6d8419c2-4ab9-44bb-9f79-2df366d83150' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6d8419c2-4ab9-44bb-9f79-2df366d83150' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ff2ec88e-8f6e-4b56-a394-c02544aee2d6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ff2ec88e-8f6e-4b56-a394-c02544aee2d6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ff2ec88e-8f6e-4b56-a394-c02544aee2d6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ff2ec88e-8f6e-4b56-a394-c02544aee2d6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9bc96403-4146-4ec5-9e0c-fb9fa57f321f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9bc96403-4146-4ec5-9e0c-fb9fa57f321f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9bc96403-4146-4ec5-9e0c-fb9fa57f321f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9bc96403-4146-4ec5-9e0c-fb9fa57f321f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a0dd8e3f-f06e-492c-917e-fda20992ec80' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a0dd8e3f-f06e-492c-917e-fda20992ec80' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a0dd8e3f-f06e-492c-917e-fda20992ec80' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a0dd8e3f-f06e-492c-917e-fda20992ec80' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11f23363-2e95-4fe8-8705-41ce93c037dc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11f23363-2e95-4fe8-8705-41ce93c037dc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11f23363-2e95-4fe8-8705-41ce93c037dc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11f23363-2e95-4fe8-8705-41ce93c037dc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9abd2c05-3a6b-4b3b-bb89-9fd87931f264' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9abd2c05-3a6b-4b3b-bb89-9fd87931f264' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9abd2c05-3a6b-4b3b-bb89-9fd87931f264' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9abd2c05-3a6b-4b3b-bb89-9fd87931f264' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e84f1a77-0a0f-4001-92fc-50234cd113c8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e84f1a77-0a0f-4001-92fc-50234cd113c8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e84f1a77-0a0f-4001-92fc-50234cd113c8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e84f1a77-0a0f-4001-92fc-50234cd113c8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/987c94c6-36fa-4d3e-89fe-29948be579b4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/987c94c6-36fa-4d3e-89fe-29948be579b4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/987c94c6-36fa-4d3e-89fe-29948be579b4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/987c94c6-36fa-4d3e-89fe-29948be579b4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link "Check out Genshin Impact's latest major update 7.0! Explore Genshin Close":
        - /url: https://mobalytics.gg/genshin-impact
        - generic [ref=e4] [cursor=pointer]:
          - generic [ref=e5]:
            - paragraph [ref=e11]: Check out Genshin Impact's latest major update 7.0!
            - button "Explore Genshin" [ref=e12]
          - img "Close" [ref=e13]
      - generic [ref=e14]:
        - generic [ref=e15]:
          - link "Mobalytics" [ref=e16] [cursor=pointer]:
            - /url: /zzz
            - img "Mobalytics" [ref=e17]
          - generic [ref=e19]:
            - link "League of Legends LoL" [ref=e21] [cursor=pointer]:
              - /url: https://mobalytics.gg/lol
              - generic [ref=e23]:
                - img "League of Legends" [ref=e24]
                - generic [ref=e25]: LoL
            - link "Teamfight Tactics TFT" [ref=e27] [cursor=pointer]:
              - /url: https://mobalytics.gg/tft
              - generic [ref=e29]:
                - img "Teamfight Tactics" [ref=e30]
                - generic [ref=e31]: TFT
            - link "Diablo 4 Diablo 4" [ref=e33] [cursor=pointer]:
              - /url: https://mobalytics.gg/diablo-4
              - generic [ref=e35]:
                - img "Diablo 4" [ref=e36]
                - generic [ref=e37]: Diablo 4
            - link "Path of Exile 2 PoE 2" [ref=e39] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe-2
              - generic [ref=e41]:
                - img "Path of Exile 2" [ref=e42]
                - generic [ref=e43]: PoE 2
            - link "Path of Exile PoE" [ref=e45] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe
              - generic [ref=e47]:
                - img "Path of Exile" [ref=e48]
                - generic [ref=e49]: PoE
            - link "Destiny 2 Destiny 2" [ref=e51] [cursor=pointer]:
              - /url: https://mobalytics.gg/destiny-2
              - generic [ref=e53]:
                - img "Destiny 2" [ref=e54]
                - generic [ref=e55]: Destiny 2
            - link "Marathon Marathon" [ref=e57] [cursor=pointer]:
              - /url: https://mobalytics.gg/marathon
              - generic [ref=e59]:
                - img "Marathon" [ref=e60]
                - generic [ref=e61]: Marathon
            - link "Slay the Spire 2 STS 2" [ref=e63] [cursor=pointer]:
              - /url: https://mobalytics.gg/slay-the-spire-2
              - generic [ref=e65]:
                - img "Slay the Spire 2" [ref=e66]
                - generic [ref=e67]: STS 2
            - link "Deadlock Deadlock" [ref=e69] [cursor=pointer]:
              - /url: https://mobalytics.gg/deadlock
              - generic [ref=e71]:
                - img "Deadlock" [ref=e72]
                - generic [ref=e73]: Deadlock
            - link "Overwatch Overwatch" [ref=e75] [cursor=pointer]:
              - /url: https://mobalytics.gg/overwatch
              - generic [ref=e77]:
                - img "Overwatch" [ref=e78]
                - generic [ref=e79]: Overwatch
            - link "Borderlands 4 Borderlands 4" [ref=e81] [cursor=pointer]:
              - /url: https://mobalytics.gg/borderlands-4
              - generic [ref=e83]:
                - img "Borderlands 4" [ref=e84]
                - generic [ref=e85]: Borderlands 4
            - link "Valorant VAL" [ref=e87] [cursor=pointer]:
              - /url: https://mobalytics.gg/valorant
              - generic [ref=e89]:
                - img "Valorant" [ref=e90]
                - generic [ref=e91]: VAL
            - link "Neverness to Everness NTE New" [ref=e93] [cursor=pointer]:
              - /url: https://mobalytics.gg/neverness-to-everness
              - generic [ref=e95]:
                - img "Neverness to Everness" [ref=e96]
                - generic [ref=e97]: NTE
                - generic [ref=e99]: New
            - 'link "Arknights: Endfield Endfield" [ref=e101] [cursor=pointer]':
              - /url: https://mobalytics.gg/arknights-endfield
              - generic [ref=e103]:
                - 'img "Arknights: Endfield" [ref=e104]'
                - generic [ref=e105]: Endfield
            - link "Elden Ring Nightreign Nightreign" [ref=e107] [cursor=pointer]:
              - /url: https://mobalytics.gg/elden-ring-nightreign
              - generic [ref=e109]:
                - img "Elden Ring Nightreign" [ref=e110]
                - generic [ref=e111]: Nightreign
            - button [ref=e112] [cursor=pointer]:
              - img [ref=e113]
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
        - generic [ref=e114]:
          - generic [ref=e115]:
            - generic [ref=e117]:
              - generic [ref=e120] [cursor=pointer]:
                - button "plus Rewards" [ref=e121]:
                  - img "plus" [ref=e123]
                  - generic [ref=e124]: Rewards
                - generic [ref=e126]: New
              - generic [ref=e128] [cursor=pointer]:
                - img [ref=e129]:
                  - generic [ref=e152]: ✓
                - generic [ref=e153]: New challenge available
            - link "DOWNLOAD APP" [ref=e154] [cursor=pointer]:
              - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-zzz&utm_medium=homepage&utm_source=web
              - button "DOWNLOAD APP" [ref=e156]:
                - img [ref=e157]
                - text: DOWNLOAD APP
            - link "Gamebase" [ref=e159] [cursor=pointer]:
              - /url: /gamebase
              - generic [ref=e160]: Gamebase
          - generic [ref=e162]:
            - button "Sign In" [ref=e164] [cursor=pointer]
            - button "Notifications" [ref=e166] [cursor=pointer]:
              - img [ref=e167]
            - button [ref=e169] [cursor=pointer]:
              - img [ref=e171]
            - button "Theme" [ref=e173] [cursor=pointer]:
              - img "Theme" [ref=e175]
        - generic [ref=e177]:
          - link "Home" [ref=e180] [cursor=pointer]:
            - /url: /zzz
            - img "Home" [ref=e182]
          - link "Profile" [ref=e185] [cursor=pointer]:
            - /url: /zzz/profile
            - img "Profile" [ref=e187]
          - link "Characters" [ref=e190] [cursor=pointer]:
            - /url: /zzz/characters
            - img "Characters" [ref=e192]
          - link "Builds" [ref=e195] [cursor=pointer]:
            - /url: /zzz/builds
            - img "Builds" [ref=e197]
          - link "Teams" [ref=e200] [cursor=pointer]:
            - /url: /zzz/teams
            - img "Teams" [ref=e202]
          - link "Tier List" [ref=e205] [cursor=pointer]:
            - /url: /zzz/tier-list
            - img "Tier List" [ref=e207]
          - link "W-Engines" [ref=e210] [cursor=pointer]:
            - /url: /zzz/w-engines
            - img "W-Engines" [ref=e212]
          - link "Drive Discs" [ref=e215] [cursor=pointer]:
            - /url: /zzz/drive-discs
            - img "Drive Discs" [ref=e217]
          - link "Bangboos" [ref=e220] [cursor=pointer]:
            - /url: /zzz/bangboos
            - img "Bangboos" [ref=e222]
          - link "Guides" [ref=e225] [cursor=pointer]:
            - /url: /zzz/guides
            - img "Guides" [ref=e227]
        - generic [ref=e229]:
          - main [ref=e230]:
            - generic [ref=e232]:
              - generic [ref=e233]:
                - 'button "ZZZ Yidhari Overview: Kit, Materials, & More" [ref=e236]':
                  - 'heading "ZZZ Yidhari Overview: Kit, Materials, & More" [level=1] [ref=e242]':
                    - generic [ref=e243]: ZZZ
                    - generic [ref=e244]: "Yidhari Overview: Kit, Materials, & More"
                - generic [ref=e253]:
                  - link "Overview" [ref=e255] [cursor=pointer]:
                    - /url: /zzz/characters/yidhari
                    - generic [ref=e256]: Overview
                  - link "Build" [ref=e259] [cursor=pointer]:
                    - /url: /zzz/builds/yidhari
                    - generic [ref=e260]: Build
                - generic [ref=e261]:
                  - generic [ref=e262]:
                    - generic [ref=e263]:
                      - heading "Overview" [level=2] [ref=e267]
                      - generic [ref=e272]:
                        - paragraph [ref=e273]:
                          - text: Yidhari is an
                          - text: Rank /
                          - text: Ice Attribute /
                          - text: Rupture Specialty Agent and a member of the
                          - text: Spook Shack faction.
                        - paragraph [ref=e286]: "Yidhari Release Date: November 5th, 2025 - Version 2.3"
                    - generic [ref=e288]:
                      - heading "Materials" [level=2] [ref=e292]
                      - paragraph [ref=e300]: Summation of Ascension, Core Skill, & Talent Materials
                      - generic [ref=e302]:
                        - generic [ref=e306]:
                          - generic "3,705,000" [ref=e307]
                          - generic "Denny" [ref=e308]
                        - generic [ref=e312]:
                          - generic "4" [ref=e313]
                          - generic "Basic Rupture Certification Seal" [ref=e314]
                        - generic [ref=e318]:
                          - generic "32" [ref=e319]
                          - generic "Advanced Rupture Certification Seal" [ref=e320]
                        - generic [ref=e324]:
                          - generic "30" [ref=e325]
                          - generic "Arbiter Certification Seal" [ref=e326]
                        - generic [ref=e330]:
                          - generic "25" [ref=e331]
                          - generic "Basic Ice Chip" [ref=e332]
                        - generic [ref=e336]:
                          - generic "75" [ref=e337]
                          - generic "Advanced Ice Chip" [ref=e338]
                        - generic [ref=e342]:
                          - generic "250" [ref=e343]
                          - generic "Specialized Ice Chip" [ref=e344]
                        - generic [ref=e348]:
                          - generic "5" [ref=e349]
                          - generic "Hamster Cage Pass" [ref=e350]
                        - generic [ref=e354]:
                          - generic "9" [ref=e355]
                          - generic "Crimson Miasma Spike" [ref=e356]
                        - generic [ref=e360]:
                          - generic "60" [ref=e361]
                          - generic "Corrupted Dreamsteel" [ref=e362]
                    - generic [ref=e363]:
                      - heading "Core Skills" [level=2] [ref=e367]
                      - generic [ref=e372]:
                        - 'heading "zzz core skill Core Passive: Dreamscape Collection" [level=4] [ref=e373]':
                          - img "zzz core skill" [ref=e377] [cursor=pointer]
                          - text: "Core Passive: Dreamscape Collection"
                        - paragraph [ref=e378]:
                          - text: Yidhari gains extra Sheer Force based on her Max HP, with every 1 point of Max HP increasing Sheer Force by 0.1.
                          - text: All
                          - strong [ref=e379]: Ice DMG
                          - text: dealt by Yidhari deals is Sheer DMG, ignoring enemy DEF and using her Sheer Force stat as the DMG Multiplier. When Yidhari enters battle, she immediately gains 60 Adrenaline. In Investigation Zone Mode, this effect can trigger once every 180s.
                          - text: Yidhari's skill DMG increases as her current HP percentage decreases.
                          - text: When her HP falls below 50%, the buff reaches its maximum value, increasing her DMG by up to
                          - strong [ref=e380]: 100%
                          - text: . Once her HP is restored to 50%, the maximum bonus remains for 5s thereafter.
                          - text: Yidhari gains fewer Decibels from landing skills. Instead, she gains Decibels as her HP decreases, with every 1% HP lost granting 10 Decibels.
                        - 'heading "zzz core skill Additional Ability: Narrative Completion" [level=4] [ref=e381]':
                          - img "zzz core skill" [ref=e385] [cursor=pointer]
                          - text: "Additional Ability: Narrative Completion"
                        - paragraph [ref=e386]:
                          - text: When another character in your squad is a
                          - strong [ref=e387]: Stun
                          - text: or
                          - strong [ref=e388]: Support
                          - text: "character:"
                          - text: When Yidhari's HP falls below 50%, CRIT DMG increases by 30% and DMG taken is reduced by 25%.
                          - text: While Yidhari is within
                          - strong [ref=e389]: "Ether Veil: Wellspring"
                          - text: ", she gains the following additional effect:"
                          - text: After the level 3 charged attack of Yidhari's
                          - strong [ref=e390]: "Basic Attack: Frostbite Embrace"
                          - text: or
                          - strong [ref=e391]: "EX Special Attack: Glacial Crush"
                          - text: ", an icy tentacle is summoned to attack, dealing extra damage. This effect can trigger once every 12s."
                          - text: The above skill is considered an
                          - strong [ref=e392]: EX Special Attack
                          - text: ", the DMG multiplier increases based on the EX Special Attack's level."
                    - generic [ref=e393]:
                      - heading "Basic Attack" [level=2] [ref=e397]
                      - generic [ref=e402]:
                        - 'heading "zzz basic attack Basic Attack: Crushing Strike" [level=4] [ref=e403]':
                          - img "zzz basic attack" [ref=e407] [cursor=pointer]
                          - text: "Basic Attack: Crushing Strike"
                        - paragraph [ref=e408]:
                          - text: Press
                          - img "zzz basic attack" [ref=e412] [cursor=pointer]
                          - text: "to activate:"
                          - text: Unleashes up to 3 strikes, dealing
                          - strong [ref=e413]: Ice DMG
                          - text: .
                          - text: On the 3rd hit, Yidhari recovers 10% HP.
                        - 'heading "zzz basic attack Basic Attack: Frostbite Embrace" [level=4] [ref=e414]':
                          - img "zzz basic attack" [ref=e418] [cursor=pointer]
                          - text: "Basic Attack: Frostbite Embrace"
                        - paragraph [ref=e419]:
                          - text: Hold
                          - img "zzz basic attack" [ref=e423] [cursor=pointer]
                          - text: "to activate:"
                          - text: Yidhari begins charging, continuously consuming HP to reach up to three levels of charge. When is released, Yidhari unleashes a powerful charged hammer attack in front based on the current charge level, dealing massive
                          - strong [ref=e424]: Ice DMG
                          - text: .
                          - text: The higher Yidhari's HP, the faster charging consumes it. HP consumption will at most reduce Yidhari's HP to 25% of Max HP.
                          - text: At 2 charge levels, after using the skill, press
                          - img "zzz basic attack" [ref=e428] [cursor=pointer]
                          - text: to immediately follow up with the 3rd hit of
                          - strong [ref=e429]: "Basic Attack: Crushing Strike"
                          - text: . The DMG of a
                          - strong [ref=e430]: "Basic Attack: Crushing Strike"
                          - text: triggered this way increases based on the current charge level, up to 30%.
                          - text: At 3 charge levels, Yidhari gains increased Anti-Interrupt level during the charged skill. Press
                          - img "zzz basic attack" [ref=e434] [cursor=pointer]
                          - text: to chain early into the finishing smash.
                        - heading "Frost's Crushing Weight" [level=4] [ref=e435]
                        - paragraph [ref=e436]:
                          - text: While charging or spinning during
                          - strong [ref=e437]: "Basic Attack: Frostbite Embrace"
                          - text: ", if hit by an enemy, Yidhari can block with her tentacles, reducing the DMG taken by 25%."
                          - text: If charging or not yet at full charge, Yidhari counterattacks with her tentacles, returning to the charging stance and instantly gaining 1 charge level, while also dealing
                          - strong [ref=e438]: Ice DMG
                          - text: to enemies ahead.
                          - text: While Frost's Crushing Weight is active, pressing
                          - img "zzz basic attack" [ref=e442] [cursor=pointer]
                          - text: makes Yidhari immediately unleash the finishing slam of
                          - strong [ref=e443]: "Basic Attack: Frostbite Embrace"
                          - text: based on her current charge level.
                          - text: While Frost's Crushing Weight is active, pressing
                          - img "zzz basic attack" [ref=e447] [cursor=pointer]
                          - text: or
                          - img "zzz special attack" [ref=e451] [cursor=pointer]
                          - text: makes Yidhari unleash a
                          - strong [ref=e452]: "Special Attack: Surging Cold, Crushing Pursuit"
                          - text: that is guaranteed to trigger Surging Cold.
                    - generic [ref=e453]:
                      - heading "Dodge" [level=2] [ref=e457]
                      - generic [ref=e462]:
                        - 'heading "zzz dodge Dodge: Dreamshift" [level=4] [ref=e463]':
                          - img "zzz dodge" [ref=e467] [cursor=pointer]
                          - text: "Dodge: Dreamshift"
                        - paragraph [ref=e468]:
                          - text: Press
                          - img "zzz dodge" [ref=e472] [cursor=pointer]
                          - text: "to activate:"
                          - text: A quick dash dodge.
                          - text: Character is invulnerable while using this skill.
                        - 'heading "zzz dodge Dash Attack: Frostbloom Impact" [level=4] [ref=e473]':
                          - img "zzz dodge" [ref=e477] [cursor=pointer]
                          - text: "Dash Attack: Frostbloom Impact"
                        - paragraph [ref=e478]:
                          - text: Press
                          - img "zzz basic attack" [ref=e482] [cursor=pointer]
                          - text: "during a dodge to activate:"
                          - text: Strike forward, dealing
                          - strong [ref=e483]: Ice DMG
                          - text: .
                        - 'heading "zzz dodge Dodge Counter: Icehaul Reverb" [level=4] [ref=e484]':
                          - img "zzz dodge" [ref=e488] [cursor=pointer]
                          - text: "Dodge Counter: Icehaul Reverb"
                        - paragraph [ref=e489]:
                          - text: Press
                          - img "zzz basic attack" [ref=e493] [cursor=pointer]
                          - text: during a
                          - strong [ref=e494]: Perfect Dodge
                          - text: "to activate:"
                          - text: Strikes enemies in front, dealing
                          - strong [ref=e495]: Ice DMG
                          - text: .
                          - text: Character is invulnerable while using this skill.
                    - generic [ref=e496]:
                      - heading "Assist" [level=2] [ref=e500]
                      - generic [ref=e505]:
                        - 'heading "zzz assist Quick Assist: Frostshock Reinforcement" [level=4] [ref=e506]':
                          - img "zzz assist" [ref=e510] [cursor=pointer]
                          - text: "Quick Assist: Frostshock Reinforcement"
                        - paragraph [ref=e511]:
                          - text: When the active character is launched, press
                          - img "zzz assist" [ref=e515] [cursor=pointer]
                          - text: "to activate:"
                          - text: Strikes enemies in front, dealing
                          - strong [ref=e516]: Ice DMG
                          - text: .
                          - text: Character is invulnerable while using this skill.
                        - 'heading "zzz assist Defensive Assist: Flashquake Rejection" [level=4] [ref=e517]':
                          - img "zzz assist" [ref=e521] [cursor=pointer]
                          - text: "Defensive Assist: Flashquake Rejection"
                        - paragraph [ref=e522]:
                          - text: When the on-field character is about to be attacked, press
                          - img "zzz assist" [ref=e526] [cursor=pointer]
                          - text: "to activate:"
                          - text: Parries the enemy's attack, dealing massive Daze.
                          - text: Character is invulnerable while using this skill.
                        - 'heading "zzz assist Assist Follow-Up: Glacial Onslaught" [level=4] [ref=e527]':
                          - img "zzz assist" [ref=e531] [cursor=pointer]
                          - text: "Assist Follow-Up: Glacial Onslaught"
                        - paragraph [ref=e532]:
                          - text: Press
                          - img "zzz basic attack" [ref=e536] [cursor=pointer]
                          - text: after a
                          - strong [ref=e537]: Defensive Assist
                          - text: "to activate:"
                          - text: Execute an ice shard hammer attack against enemies in front, dealing
                          - strong [ref=e538]: Ice DMG
                          - text: .
                          - text: Character is invulnerable while using this skill.
                    - generic [ref=e539]:
                      - heading "Special Attack" [level=2] [ref=e543]
                      - generic [ref=e548]:
                        - 'heading "zzz special attack Special Attack: Cease Thoughts" [level=4] [ref=e549]':
                          - img "zzz special attack" [ref=e553] [cursor=pointer]
                          - text: "Special Attack: Cease Thoughts"
                        - paragraph [ref=e554]:
                          - text: Press
                          - img "zzz special attack" [ref=e558] [cursor=pointer]
                          - text: "to activate:"
                          - text: Launches enemies in front into the air, dealing
                          - strong [ref=e559]: Ice DMG
                          - text: .
                          - text: Anti-Interrupt level is increased while using this skill.
                        - 'heading "zzz ex special attack EX Special Attack: Frost Coil" [level=4] [ref=e560]':
                          - img "zzz ex special attack" [ref=e564] [cursor=pointer]
                          - text: "EX Special Attack: Frost Coil"
                        - paragraph [ref=e565]:
                          - text: With enough Adrenaline, press
                          - img "zzz ex special attack" [ref=e569] [cursor=pointer]
                          - text: "to activate:"
                          - text: Perform two consecutive upward strikes, then release an icy mist, dealing massive
                          - strong [ref=e570]: Ice DMG
                          - text: .
                          - text: "If EX Special Attack: Frost Coil hits an enemy, Yidhari recovers HP at the end of the skill equal to 33% of her missing HP."
                          - text: Character is invulnerable while using this skill.
                        - heading "zzz special attack zzz ex special attack Surging Cold, Crushing Pursuit" [level=4] [ref=e571]:
                          - img "zzz special attack" [ref=e575] [cursor=pointer]
                          - img "zzz ex special attack" [ref=e579] [cursor=pointer]
                          - text: Surging Cold, Crushing Pursuit
                        - paragraph [ref=e580]:
                          - text: Press
                          - img "zzz special attack" [ref=e584] [cursor=pointer]
                          - text: or
                          - img "zzz ex special attack" [ref=e588] [cursor=pointer]
                          - text: while charging or spinning during
                          - strong [ref=e589]: "Basic Attack: Frostbite Embrace"
                          - text: ", or press"
                          - img "zzz dodge" [ref=e593] [cursor=pointer]
                          - text: while holding
                          - img "zzz basic attack" [ref=e597] [cursor=pointer]
                          - text: "to activate:"
                          - text: Launches enemies in front into the air, dealing
                          - strong [ref=e598]: Ice DMG
                          - text: .
                          - text: When the skill's attack collides with an enemy's attack, it triggers Surging Cold.
                          - text: If the skill hits a Stunned enemy, and with sufficient Adrenaline, it triggers Crushing Pursuit.
                          - text: Triggering Surging Cold or Crushing Pursuit instantly raises the charge level to maximum.
                          - text: During this skill, press
                          - img "zzz basic attack" [ref=e602] [cursor=pointer]
                          - text: and Yidhari will immediately unleash the finishing slam of
                          - strong [ref=e603]: "Basic Attack: Frostbite Embrace"
                          - text: based on the current charge level.
                          - text: Anti-Interrupt level is increased while using this skill.
                        - 'heading "zzz special attack zzz ex special attack EX Special Attack: Glacial Crush" [level=4] [ref=e604]':
                          - img "zzz special attack" [ref=e608] [cursor=pointer]
                          - img "zzz ex special attack" [ref=e612] [cursor=pointer]
                          - text: "EX Special Attack: Glacial Crush"
                        - paragraph [ref=e613]:
                          - text: When triggering Surging Cold or Crushing Pursuit, and with enough Adrenaline, press
                          - img "zzz special attack" [ref=e617] [cursor=pointer]
                          - text: or
                          - img "zzz ex special attack" [ref=e621] [cursor=pointer]
                          - text: "to activate:"
                          - text: Dash forward with an upward attack, then leap into the air before delivering a powerful downward smash, dealing massive
                          - strong [ref=e622]: Ice DMG
                          - text: .
                          - text: If
                          - strong [ref=e623]: "EX Special Attack: Glacial Crush"
                          - text: hits an enemy, Yidhari heals at the end of the skill for 33% of her missing HP.
                          - text: If the skill is used after Surging Cold, it grants an additional 15 Adrenaline. This effect can trigger once every 1s.
                          - text: After using this skill, press
                          - img "zzz basic attack" [ref=e627] [cursor=pointer]
                          - text: to immediately unleash the finishing slam of
                          - strong [ref=e628]: "Basic Attack: Frostbite Embrace"
                          - text: based on the current charge level.
                          - text: Character is invulnerable while using this skill.
                    - generic [ref=e629]:
                      - heading "Chain Attack & Ultimate" [level=2] [ref=e633]
                      - generic [ref=e638]:
                        - 'heading "zzz chain attack Chain Attack: Frostbound Oath" [level=4] [ref=e639]':
                          - img "zzz chain attack" [ref=e643] [cursor=pointer]
                          - text: "Chain Attack: Frostbound Oath"
                        - paragraph [ref=e644]:
                          - text: When a
                          - strong [ref=e645]: Chain Attack
                          - text: "is triggered, select the character to activate:"
                          - text: Unleash a powerful strike against enemies in a small area ahead, dealing massive
                          - strong [ref=e646]: Ice DMG
                          - text: .
                          - text: If inside
                          - strong [ref=e647]: "Ether Veil: Wellspring"
                          - text: ", tentacles join in the assault, further enhancing the skill's power."
                          - text: Character is invulnerable while using this skill.
                        - 'heading "Ether Veil: Wellspring" [level=4] [ref=e648]'
                        - paragraph [ref=e649]:
                          - text: When Decibel Rating is at
                          - strong [ref=e650]: Maximum
                          - text: ", the final hit of"
                          - strong [ref=e651]: "Basic Attack: Frostbite Embrace"
                          - text: ","
                          - strong [ref=e652]: "EX Special Attack: Frost Coil"
                          - text: ","
                          - strong [ref=e653]: "EX Special Attack: Glacial Crush"
                          - text: ", and"
                          - strong [ref=e654]: "Chain Attack: Frostbound Oath"
                          - text: will consume 3,000 Decibels to activate an
                          - strong [ref=e655]: "Ether Veil: Wellspring"
                          - text: . While
                          - strong [ref=e656]: "Ether Veil: Wellspring"
                          - text: is active, all squad members' Max HP increase by 5% for 30s. Repeated triggers extend the duration, up to a maximum of 300s.
                          - text: While Yidhari is within
                          - strong [ref=e657]: "Ether Veil: Wellspring"
                          - text: ", the charge speed of"
                          - strong [ref=e658]: "Basic Attack: Frostbite Embrace"
                          - text: increases, and HP is consumed faster during charging.
                        - 'heading "zzz ultimate Ultimate: Final Act - Crossing the River of Regret" [level=4] [ref=e659]':
                          - img "zzz ultimate" [ref=e663] [cursor=pointer]
                          - text: "Ultimate: Final Act - Crossing the River of Regret"
                        - paragraph [ref=e664]:
                          - text: After Yidhari expends Decibels to activate
                          - strong [ref=e665]: "Ether Veil: Wellspring"
                          - text: ", press"
                          - img "zzz ultimate" [ref=e669] [cursor=pointer]
                          - text: "within 30s to activate:"
                          - text: Deliver a powerful strike to enemies in a large area ahead, dealing massive
                          - strong [ref=e670]: Ice DMG
                          - text: .
                          - text: Character is invulnerable while using this skill.
                          - text: Each time Yidhari expends Decibels to activate an
                          - strong [ref=e671]: "Ether Veil: Wellspring"
                          - text: ", she can use"
                          - strong [ref=e672]: "Ultimate: Final Act - Crossing the River of Regret"
                          - text: once.
                    - generic [ref=e673]:
                      - heading "Mindscape Cinema" [level=2] [ref=e677]
                      - generic [ref=e682]:
                        - paragraph [ref=e683]:
                          - img "zzz yidhari mindscape" [ref=e689] [cursor=pointer]
                        - 'heading "M1: The Past Lost Beneath the Abyss" [level=4] [ref=e690]'
                        - paragraph [ref=e691]:
                          - text: The Adrenaline cost to activate Yidhari's
                          - strong [ref=e692]: EX Special Attack
                          - text: is reduced by 10. After using
                          - strong [ref=e693]: "EX Special Attack: Frost Coil"
                          - text: or
                          - strong [ref=e694]: "EX Special Attack: Glacial Crush"
                          - text: ", keeping hold of the Basic Attack or Special Attack button consumes 35 Adrenaline to forgo healing and immediately chain into another"
                          - strong [ref=e695]: "EX Special Attack: Glacial Crush"
                          - text: . The HP restored by this
                          - strong [ref=e696]: "EX Special Attack: Glacial Crush"
                          - text: is increased by 100% of the original value. Yidhari's
                          - strong [ref=e697]: Basic Attacks
                          - text: and
                          - strong [ref=e698]: EX Special Attacks
                          - text: ignore 20% of targets'
                          - strong [ref=e699]: Ice RES
                          - text: .
                        - 'heading "M2: Who Lingers Here, Lost in Thought?" [level=4] [ref=e700]'
                        - paragraph [ref=e701]:
                          - text: Yidhari's CRIT DMG increases by 40%. Triggering
                          - strong [ref=e702]: Surging Cold
                          - text: or
                          - strong [ref=e703]: Crushing Pursuit
                          - text: grants Adrenaline regen of 0.5/s for up to 30s. Repeated triggers reset the duration.
                        - 'heading "M3: A Story Without an Audience" [level=4] [ref=e704]'
                        - paragraph [ref=e705]:
                          - strong [ref=e706]: Basic Attack
                          - text: ","
                          - strong [ref=e707]: Dodge
                          - text: ","
                          - strong [ref=e708]: Assist
                          - text: ","
                          - strong [ref=e709]: Special Attack
                          - text: ", and"
                          - strong [ref=e710]: Chain Attack
                          - text: Lv. +2
                        - 'heading "M4: Blooming in Silence" [level=4] [ref=e711]'
                        - paragraph [ref=e712]:
                          - text: Yidhari gains 10% more Decibels when losing HP for
                          - strong [ref=e713]: "Core Passive: Dreamscape Collection"
                          - text: . While in
                          - strong [ref=e714]: "Ether Veil: Wellspring"
                          - text: ", Yidhari's Max HP is further increased by 5%."
                        - 'heading "M5: This Solace Is Real" [level=4] [ref=e715]'
                        - paragraph [ref=e716]:
                          - strong [ref=e717]: Basic Attack
                          - text: ","
                          - strong [ref=e718]: Dodge
                          - text: ","
                          - strong [ref=e719]: Assist
                          - text: ","
                          - strong [ref=e720]: Special Attack
                          - text: ", and"
                          - strong [ref=e721]: Chain Attack
                          - text: Lv. +2
                        - 'heading "M6: At Last, a Peaceful Dream" [level=4] [ref=e722]'
                        - paragraph [ref=e723]:
                          - text: After Yidhari spends Decibels to activate or extend
                          - strong [ref=e724]: "Ether Veil: Wellspring"
                          - text: ", she gains"
                          - strong [ref=e725]: Erudition
                          - text: for 30s. While
                          - strong [ref=e726]: Erudition
                          - text: is active, her Sheer DMG increases by 25%. Also, upon taking fatal DMG for the first time, her HP is reduced to at most 1, and for the next 5s, she cannot be defeated and will restore 25% HP over time.
                    - generic [ref=e727]:
                      - heading "Drip Marketing" [level=2] [ref=e731]
                      - paragraph [ref=e737]:
                        - img "Yidhari Agent Record" [ref=e743] [cursor=pointer]
                  - generic [ref=e745]:
                    - generic [ref=e746]:
                      - heading "Table of Contents" [level=2] [ref=e750]
                      - generic [ref=e751]:
                        - generic [ref=e752]:
                          - link "1. Overview" [ref=e753] [cursor=pointer]:
                            - /url: /zzz/characters/yidhari#da74abb0-9b92-4b36-8712-287db2cda2ac-overview-0
                          - link "2. Materials" [ref=e754] [cursor=pointer]:
                            - /url: /zzz/characters/yidhari#0cf58387-81c7-4082-b0cd-fb379799103b-materials-0
                          - link "3. Core Skills" [ref=e755] [cursor=pointer]:
                            - /url: /zzz/characters/yidhari#cf8cf47a-6526-4f13-b236-d969fdd12644-core-skills-1
                          - link "4. Basic Attack" [ref=e756] [cursor=pointer]:
                            - /url: /zzz/characters/yidhari#b0ed4142-bd41-4841-95da-9aceafff0d68-basic-attack-2
                          - link "5. Dodge" [ref=e757] [cursor=pointer]:
                            - /url: /zzz/characters/yidhari#dd7b8af0-a415-46be-b85d-50a7f6c66065-dodge-3
                          - link "6. Assist" [ref=e758] [cursor=pointer]:
                            - /url: /zzz/characters/yidhari#3e851059-dd23-42b3-955a-73e74b41f624-assist-4
                          - link "7. Special Attack" [ref=e759] [cursor=pointer]:
                            - /url: /zzz/characters/yidhari#c48121b0-057a-4ddc-96e0-13ea2ab94c3a-special-attack-5
                          - link "8. Chain Attack & Ultimate" [ref=e760] [cursor=pointer]:
                            - /url: /zzz/characters/yidhari#74be112d-15b8-40cb-981e-4dcfebc73528-chain-attack-and-ultimate-6
                          - link "9. Mindscape Cinema" [ref=e761] [cursor=pointer]:
                            - /url: /zzz/characters/yidhari#d8f130a6-4db7-45b4-8c92-7af96c2c2b1e-mindscape-cinema-7
                          - link "10. Drip Marketing" [ref=e762] [cursor=pointer]:
                            - /url: /zzz/characters/yidhari#1-drip-marketing-8
                        - button "Back to top" [ref=e764] [cursor=pointer]
                    - generic [ref=e765]:
                      - heading "Stats (Level 60)" [level=2] [ref=e769]
                      - table [ref=e776]:
                        - 'row "HP: 8497 Impact: 95" [ref=e780]':
                          - 'cell "HP: 8497" [ref=e781]':
                            - paragraph [ref=e782]: "HP: 8497"
                          - 'cell "Impact: 95" [ref=e783]':
                            - paragraph [ref=e784]: "Impact: 95"
                        - 'row "DEF: 448 Anomaly Mastery: 87" [ref=e785]':
                          - 'cell "DEF: 448" [ref=e786]':
                            - paragraph [ref=e787]: "DEF: 448"
                          - 'cell "Anomaly Mastery: 87" [ref=e788]':
                            - paragraph [ref=e789]: "Anomaly Mastery: 87"
                        - 'row "ATK: 859 Anomaly Proficiency: 90" [ref=e790]':
                          - 'cell "ATK: 859" [ref=e791]':
                            - paragraph [ref=e792]: "ATK: 859"
                          - 'cell "Anomaly Proficiency: 90" [ref=e793]':
                            - paragraph [ref=e794]: "Anomaly Proficiency: 90"
                        - 'row "CRIT Rate: 19.4% Sheer Force: 1107" [ref=e795]':
                          - 'cell "CRIT Rate: 19.4%" [ref=e796]':
                            - paragraph [ref=e797]: "CRIT Rate: 19.4%"
                          - 'cell "Sheer Force: 1107" [ref=e798]':
                            - paragraph [ref=e799]: "Sheer Force: 1107"
                        - 'row "CRIT DMG: 50% Adrenaline: 2" [ref=e800]':
                          - 'cell "CRIT DMG: 50%" [ref=e801]':
                            - paragraph [ref=e802]: "CRIT DMG: 50%"
                          - 'cell "Adrenaline: 2" [ref=e803]':
                            - paragraph [ref=e804]: "Adrenaline: 2"
              - status [ref=e805]
          - complementary [ref=e810]:
            - generic [ref=e811]:
              - generic [ref=e813]:
                - generic [ref=e815] [cursor=pointer]:
                  - generic [ref=e816]: Advertisement
                  - generic [ref=e817]: Remove Ads
                - generic [ref=e820] [cursor=pointer]:
                  - generic [ref=e821]: Remove all ads
                  - generic [ref=e822]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e823]
              - generic [ref=e825]:
                - generic [ref=e827] [cursor=pointer]:
                  - generic [ref=e828]: Advertisement
                  - generic [ref=e829]: Remove Ads
                - generic [ref=e832] [cursor=pointer]:
                  - generic [ref=e833]: Remove all ads
                  - generic [ref=e834]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=e835]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e838]:
    - banner [ref=e839]:
      - generic [ref=e840] [cursor=pointer]:
        - generic [ref=e841]: Advertisement
        - generic [ref=e842]: Remove Ads
    - generic [ref=e845] [cursor=pointer]:
      - generic [ref=e846]: Remove all ads
      - generic [ref=e847]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e848]
```

# Test source

```ts
  690 |           return filterPattern.test(match.groups.link);
  691 |         })
  692 |         .slice(0, quantityLinks);
  693 |     });
  694 | 
  695 |     const consoleMessages = [];
  696 |     const pageErrors = [];
  697 |     page.on('console', (msg) => {
  698 |       if (msg.type() === 'error') {
  699 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  700 |         // console.log(consoleInfo);
  701 |         consoleMessages.push(consoleInfo);
  702 |       }
  703 |     });
  704 |     page.on('pageerror', (error) => {
  705 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  706 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  707 |       //   console.log(errorInfo);
  708 |       // }
  709 |       pageErrors.push(errorInfo);
  710 |     });
  711 | 
  712 |     for (const takeLink of filteredLinks) {
  713 |       consoleMessages.length = 0;
  714 |       pageErrors.length = 0;
  715 | 
  716 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  717 | 
  718 |       await test.step(`Open parsed page: ${link}`, async () => {
  719 |         await page.goto(link);
  720 |         await page.waitForTimeout(1000);
  721 |       });
  722 | 
  723 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  724 | 
  725 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  726 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  727 |         expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
  728 |         expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
  729 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  730 |       });
  731 |     }
  732 |   });
  733 | 
  734 |   test(`Check that hydration is ok on ZZZ`, async ({ page, request }) => {
  735 |     let filteredLinks;
  736 | 
  737 |     await test.step(`Parse up to ${quantityLinks} links from ZZZ sitemap: ${process.env.BASE_URL}/zzz/sitemap.xml`, async () => {
  738 |       const response = await request.get(`${process.env.BASE_URL}/zzz/sitemap.xml`);
  739 |       await test.step(`Expected Result: ${process.env.BASE_URL}/zzz/sitemap.xml returns with ${response.status()}`, async () => {
  740 |         expect(response.ok()).toBeTruthy();
  741 |       });
  742 |       const xmlData = await response.text();
  743 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  744 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  745 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  746 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  747 | 
  748 |       filteredLinks = arrayLinks
  749 |         .filter((match) => {
  750 |           const filterPattern = /mobalytics\.gg\/zzz/;
  751 |           return filterPattern.test(match.groups.link);
  752 |         })
  753 |         .slice(0, quantityLinks);
  754 |     });
  755 | 
  756 |     const consoleMessages = [];
  757 |     const pageErrors = [];
  758 |     page.on('console', (msg) => {
  759 |       if (msg.type() === 'error') {
  760 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  761 |         // console.log(consoleInfo);
  762 |         consoleMessages.push(consoleInfo);
  763 |       }
  764 |     });
  765 |     page.on('pageerror', (error) => {
  766 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  767 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  768 |       //   console.log(errorInfo);
  769 |       // }
  770 |       pageErrors.push(errorInfo);
  771 |     });
  772 | 
  773 |     for (const takeLink of filteredLinks) {
  774 |       consoleMessages.length = 0;
  775 |       pageErrors.length = 0;
  776 | 
  777 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  778 | 
  779 |       await test.step(`Open parsed page: ${link}`, async () => {
  780 |         await page.goto(link);
  781 |         await page.waitForTimeout(1000);
  782 |       });
  783 | 
  784 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  785 | 
  786 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  787 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  788 |         expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
  789 |         expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
> 790 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      |                                               ^ Error: expect(received).not.toMatch(expected)
  791 |       });
  792 |     }
  793 |   });
  794 | 
  795 |   test(`Check that hydration is ok on Marvel-Rivals`, async ({ page, request }) => {
  796 |     let filteredLinks;
  797 | 
  798 |     await test.step(`Parse up to ${quantityLinks} links from Marvel-Rivals sitemap: ${process.env.BASE_URL}/marvel-rivals/sitemap.xml`, async () => {
  799 |       const response = await request.get(`${process.env.BASE_URL}/marvel-rivals/sitemap.xml`);
  800 |       await test.step(`Expected Result: ${process.env.BASE_URL}/marvel-rivals/sitemap.xml returns with ${response.status()}`, async () => {
  801 |         expect(response.ok()).toBeTruthy();
  802 |       });
  803 |       const xmlData = await response.text();
  804 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  805 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  806 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  807 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  808 | 
  809 |       filteredLinks = arrayLinks
  810 |         .filter((match) => {
  811 |           const filterPattern = /mobalytics\.gg\/marvel-rivals/;
  812 |           return filterPattern.test(match.groups.link);
  813 |         })
  814 |         .slice(0, quantityLinks);
  815 |     });
  816 | 
  817 |     const consoleMessages = [];
  818 |     const pageErrors = [];
  819 |     page.on('console', (msg) => {
  820 |       if (msg.type() === 'error') {
  821 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  822 |         // console.log(consoleInfo);
  823 |         consoleMessages.push(consoleInfo);
  824 |       }
  825 |     });
  826 |     page.on('pageerror', (error) => {
  827 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  828 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  829 |       //   console.log(errorInfo);
  830 |       // }
  831 |       pageErrors.push(errorInfo);
  832 |     });
  833 | 
  834 |     for (const takeLink of filteredLinks) {
  835 |       consoleMessages.length = 0;
  836 |       pageErrors.length = 0;
  837 | 
  838 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  839 | 
  840 |       await test.step(`Open parsed page: ${link}`, async () => {
  841 |         await page.goto(link);
  842 |         await page.waitForTimeout(1000);
  843 |       });
  844 | 
  845 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  846 | 
  847 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  848 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  849 |         expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
  850 |         expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
  851 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  852 |       });
  853 |     }
  854 |   });
  855 | 
  856 |   test(`Check that hydration is ok on MHW`, async ({ page, request }) => {
  857 |     let filteredLinks;
  858 | 
  859 |     await test.step(`Parse up to ${quantityLinks} links from MHW sitemap: ${process.env.BASE_URL}/mhw/sitemap.xml`, async () => {
  860 |       const response = await request.get(`${process.env.BASE_URL}/mhw/sitemap.xml`);
  861 |       await test.step(`Expected Result: ${process.env.BASE_URL}/mhw/sitemap.xml returns with ${response.status()}`, async () => {
  862 |         expect(response.ok()).toBeTruthy();
  863 |       });
  864 |       const xmlData = await response.text();
  865 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  866 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  867 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  868 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  869 | 
  870 |       filteredLinks = arrayLinks
  871 |         .filter((match) => {
  872 |           const filterPattern = /mobalytics\.gg\/mhw/;
  873 |           return filterPattern.test(match.groups.link);
  874 |         })
  875 |         .slice(0, quantityLinks);
  876 |     });
  877 | 
  878 |     const consoleMessages = [];
  879 |     const pageErrors = [];
  880 |     page.on('console', (msg) => {
  881 |       if (msg.type() === 'error') {
  882 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  883 |         // console.log(consoleInfo);
  884 |         consoleMessages.push(consoleInfo);
  885 |       }
  886 |     });
  887 |     page.on('pageerror', (error) => {
  888 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  889 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  890 |       //   console.log(errorInfo);
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hydration.test.js >> Check hydration is successfully for each project >> Check that hydration is ok on Hades-2
- Location: e2e-tests/hydration.test.js:490:3

# Error details

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fefc5e00-26c4-4f09-bea1-db437253ae5a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fefc5e00-26c4-4f09-bea1-db437253ae5a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fefc5e00-26c4-4f09-bea1-db437253ae5a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fefc5e00-26c4-4f09-bea1-db437253ae5a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9dc5ee7c-ffe2-4f4c-a747-68674b193f99' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9dc5ee7c-ffe2-4f4c-a747-68674b193f99' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9dc5ee7c-ffe2-4f4c-a747-68674b193f99' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9dc5ee7c-ffe2-4f4c-a747-68674b193f99' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9b64197b-a617-45fb-9a87-4a018a4c0bfe' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9b64197b-a617-45fb-9a87-4a018a4c0bfe' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9b64197b-a617-45fb-9a87-4a018a4c0bfe' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9b64197b-a617-45fb-9a87-4a018a4c0bfe' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cc5159f9-110d-4740-a363-4652085bbbe0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cc5159f9-110d-4740-a363-4652085bbbe0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cc5159f9-110d-4740-a363-4652085bbbe0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cc5159f9-110d-4740-a363-4652085bbbe0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7e2c78cd-516f-4f8f-88ed-5bfcbe784fdd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7e2c78cd-516f-4f8f-88ed-5bfcbe784fdd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7e2c78cd-516f-4f8f-88ed-5bfcbe784fdd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7e2c78cd-516f-4f8f-88ed-5bfcbe784fdd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11f0a74a-887c-436c-86b9-27b98eddf640' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11f0a74a-887c-436c-86b9-27b98eddf640' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11f0a74a-887c-436c-86b9-27b98eddf640' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11f0a74a-887c-436c-86b9-27b98eddf640' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5ec316f8-52c1-4b9c-8e76-559efe6ede34' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5ec316f8-52c1-4b9c-8e76-559efe6ede34' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5ec316f8-52c1-4b9c-8e76-559efe6ede34' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5ec316f8-52c1-4b9c-8e76-559efe6ede34' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4eadc387-d871-4693-b285-10d81106b072' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4eadc387-d871-4693-b285-10d81106b072' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4eadc387-d871-4693-b285-10d81106b072' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4eadc387-d871-4693-b285-10d81106b072' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a4fd9348-7480-4565-b640-e3f3a817d659' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a4fd9348-7480-4565-b640-e3f3a817d659' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a4fd9348-7480-4565-b640-e3f3a817d659' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a4fd9348-7480-4565-b640-e3f3a817d659' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/baafef92-2025-46e9-a746-5e15843094ea' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/baafef92-2025-46e9-a746-5e15843094ea' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/baafef92-2025-46e9-a746-5e15843094ea' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/baafef92-2025-46e9-a746-5e15843094ea' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/41f9eec7-778b-4a33-bd6e-7724d03163db' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/41f9eec7-778b-4a33-bd6e-7724d03163db' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/41f9eec7-778b-4a33-bd6e-7724d03163db' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/41f9eec7-778b-4a33-bd6e-7724d03163db' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/737bd0f6-cb54-4ddb-b873-1b2ac0233505' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/737bd0f6-cb54-4ddb-b873-1b2ac0233505' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/737bd0f6-cb54-4ddb-b873-1b2ac0233505' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/737bd0f6-cb54-4ddb-b873-1b2ac0233505' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4343fedc-07f7-4728-9715-00964ab9b4c9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4343fedc-07f7-4728-9715-00964ab9b4c9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4343fedc-07f7-4728-9715-00964ab9b4c9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4343fedc-07f7-4728-9715-00964ab9b4c9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f4edd0e0-3b9e-4ab3-b65d-8ba8b1424585' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f4edd0e0-3b9e-4ab3-b65d-8ba8b1424585' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f4edd0e0-3b9e-4ab3-b65d-8ba8b1424585' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f4edd0e0-3b9e-4ab3-b65d-8ba8b1424585' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/298014a4-b7f8-40bc-978d-b9d12f4aade0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/298014a4-b7f8-40bc-978d-b9d12f4aade0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/298014a4-b7f8-40bc-978d-b9d12f4aade0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/298014a4-b7f8-40bc-978d-b9d12f4aade0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9788a288-ab48-4def-89b5-3af252398c0b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9788a288-ab48-4def-89b5-3af252398c0b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9788a288-ab48-4def-89b5-3af252398c0b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9788a288-ab48-4def-89b5-3af252398c0b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51533fb8-6086-42ba-98e9-943095be0998' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51533fb8-6086-42ba-98e9-943095be0998' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51533fb8-6086-42ba-98e9-943095be0998' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51533fb8-6086-42ba-98e9-943095be0998' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bca0cc5e-269e-4def-9848-30bf7967c176' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bca0cc5e-269e-4def-9848-30bf7967c176' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bca0cc5e-269e-4def-9848-30bf7967c176' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bca0cc5e-269e-4def-9848-30bf7967c176' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e07c5d5-7dab-4259-ac10-987cbd539195' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e07c5d5-7dab-4259-ac10-987cbd539195' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e07c5d5-7dab-4259-ac10-987cbd539195' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e07c5d5-7dab-4259-ac10-987cbd539195' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/07720202-a7c5-4bfa-8a92-997c557af7a8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/07720202-a7c5-4bfa-8a92-997c557af7a8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/07720202-a7c5-4bfa-8a92-997c557af7a8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/07720202-a7c5-4bfa-8a92-997c557af7a8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e1a89fa7-0784-4615-94d4-7c5336114ae7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e1a89fa7-0784-4615-94d4-7c5336114ae7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e1a89fa7-0784-4615-94d4-7c5336114ae7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e1a89fa7-0784-4615-94d4-7c5336114ae7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8ed5320b-7551-4243-9655-a76894138dbf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8ed5320b-7551-4243-9655-a76894138dbf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8ed5320b-7551-4243-9655-a76894138dbf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8ed5320b-7551-4243-9655-a76894138dbf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fd9ee5d9-d169-437b-bb17-dc5a1d09e5bb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fd9ee5d9-d169-437b-bb17-dc5a1d09e5bb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fd9ee5d9-d169-437b-bb17-dc5a1d09e5bb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fd9ee5d9-d169-437b-bb17-dc5a1d09e5bb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8aab7e87-fa2f-4752-bbd4-d0feee2f367b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8aab7e87-fa2f-4752-bbd4-d0feee2f367b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8aab7e87-fa2f-4752-bbd4-d0feee2f367b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8aab7e87-fa2f-4752-bbd4-d0feee2f367b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e89c3ecb-c677-4827-af68-2d96eef4a91f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e89c3ecb-c677-4827-af68-2d96eef4a91f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e89c3ecb-c677-4827-af68-2d96eef4a91f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e89c3ecb-c677-4827-af68-2d96eef4a91f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e1a21dd0-fc4f-4e4a-a096-df9746931420' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e1a21dd0-fc4f-4e4a-a096-df9746931420' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e1a21dd0-fc4f-4e4a-a096-df9746931420' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e1a21dd0-fc4f-4e4a-a096-df9746931420' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/93232943-a883-4f81-99e1-b7c4787ce984' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/93232943-a883-4f81-99e1-b7c4787ce984' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/93232943-a883-4f81-99e1-b7c4787ce984' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/93232943-a883-4f81-99e1-b7c4787ce984' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/85abb536-acba-4589-88e2-be29be0364f4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/85abb536-acba-4589-88e2-be29be0364f4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/85abb536-acba-4589-88e2-be29be0364f4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/85abb536-acba-4589-88e2-be29be0364f4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/08901fe4-4a80-4cd8-a79a-080f4b7b679d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/08901fe4-4a80-4cd8-a79a-080f4b7b679d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/08901fe4-4a80-4cd8-a79a-080f4b7b679d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/08901fe4-4a80-4cd8-a79a-080f4b7b679d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b0b76c60-a707-4c55-a9fd-455f6dcb529b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b0b76c60-a707-4c55-a9fd-455f6dcb529b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b0b76c60-a707-4c55-a9fd-455f6dcb529b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b0b76c60-a707-4c55-a9fd-455f6dcb529b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b066227f-b1ef-4138-b40b-f9a7c902f9a9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b066227f-b1ef-4138-b40b-f9a7c902f9a9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b066227f-b1ef-4138-b40b-f9a7c902f9a9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b066227f-b1ef-4138-b40b-f9a7c902f9a9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/951a6136-2f9c-4bca-87ec-d35f46ee0a9b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/951a6136-2f9c-4bca-87ec-d35f46ee0a9b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/951a6136-2f9c-4bca-87ec-d35f46ee0a9b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/951a6136-2f9c-4bca-87ec-d35f46ee0a9b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Fbuilds%2Fblack-coat-starter-build&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f2085db1-61fa-4533-b067-d1aa7b6873ae' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Fbuilds%2Fblack-coat-starter-build&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f2085db1-61fa-4533-b067-d1aa7b6873ae' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Fbuilds%2Fblack-coat-starter-build&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f2085db1-61fa-4533-b067-d1aa7b6873ae' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Fbuilds%2Fblack-coat-starter-build&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f2085db1-61fa-4533-b067-d1aa7b6873ae' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bedae7a8-7b88-466e-8b12-7e9371de4014' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bedae7a8-7b88-466e-8b12-7e9371de4014' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bedae7a8-7b88-466e-8b12-7e9371de4014' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bedae7a8-7b88-466e-8b12-7e9371de4014' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e22ef69d-b35d-47a5-ba95-958f9b5c4f42' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Fbuilds%2Fpan-blades-poseidon-build&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e22ef69d-b35d-47a5-ba95-958f9b5c4f42' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Fbuilds%2Fpan-blades-poseidon-build&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e22ef69d-b35d-47a5-ba95-958f9b5c4f42' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Fbuilds%2Fpan-blades-poseidon-build&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e22ef69d-b35d-47a5-ba95-958f9b5c4f42' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Fbuilds%2Fpan-blades-poseidon-build&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a69e3f34-2c6f-457c-90ff-b416cc96b8aa' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a69e3f34-2c6f-457c-90ff-b416cc96b8aa' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a69e3f34-2c6f-457c-90ff-b416cc96b8aa' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a69e3f34-2c6f-457c-90ff-b416cc96b8aa' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/63c16679-b3ca-4743-b60d-f2bba267257c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/63c16679-b3ca-4743-b60d-f2bba267257c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/63c16679-b3ca-4743-b60d-f2bba267257c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/63c16679-b3ca-4743-b60d-f2bba267257c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5e897442-8b96-408f-9594-0dd6f5ca1266' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5e897442-8b96-408f-9594-0dd6f5ca1266' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5e897442-8b96-408f-9594-0dd6f5ca1266' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5e897442-8b96-408f-9594-0dd6f5ca1266' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e4ffae3-4cc3-477f-9e6e-6cb60ded86d1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e4ffae3-4cc3-477f-9e6e-6cb60ded86d1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e4ffae3-4cc3-477f-9e6e-6cb60ded86d1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e4ffae3-4cc3-477f-9e6e-6cb60ded86d1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/60a8310a-d36b-4284-bfa9-3090d2f32f58' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/60a8310a-d36b-4284-bfa9-3090d2f32f58' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/60a8310a-d36b-4284-bfa9-3090d2f32f58' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/60a8310a-d36b-4284-bfa9-3090d2f32f58' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be140d65-b3b2-436f-a8b8-476f67de974c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be140d65-b3b2-436f-a8b8-476f67de974c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be140d65-b3b2-436f-a8b8-476f67de974c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be140d65-b3b2-436f-a8b8-476f67de974c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4da406a3-76e1-4b36-b776-4d6dfa8cf705' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4da406a3-76e1-4b36-b776-4d6dfa8cf705' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4da406a3-76e1-4b36-b776-4d6dfa8cf705' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4da406a3-76e1-4b36-b776-4d6dfa8cf705' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6d95464d-7d45-407c-ac5f-34b2973ddfce' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6d95464d-7d45-407c-ac5f-34b2973ddfce' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6d95464d-7d45-407c-ac5f-34b2973ddfce' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6d95464d-7d45-407c-ac5f-34b2973ddfce' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/94ccca5d-4c4a-4dd0-8362-d1c324289009' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Fbuilds%2Fsoup-ay-recipe&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/94ccca5d-4c4a-4dd0-8362-d1c324289009' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Fbuilds%2Fsoup-ay-recipe&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/94ccca5d-4c4a-4dd0-8362-d1c324289009' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Fbuilds%2Fsoup-ay-recipe&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/94ccca5d-4c4a-4dd0-8362-d1c324289009' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Fbuilds%2Fsoup-ay-recipe&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/80947610-d6cb-409b-9e74-e03df6ffcbca' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/80947610-d6cb-409b-9e74-e03df6ffcbca' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/80947610-d6cb-409b-9e74-e03df6ffcbca' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/80947610-d6cb-409b-9e74-e03df6ffcbca' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cb8f7304-35e9-494e-8238-518b345891c2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cb8f7304-35e9-494e-8238-518b345891c2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cb8f7304-35e9-494e-8238-518b345891c2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cb8f7304-35e9-494e-8238-518b345891c2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ce6b1fdc-17f8-489d-9090-96843fdfcc35' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ce6b1fdc-17f8-489d-9090-96843fdfcc35' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ce6b1fdc-17f8-489d-9090-96843fdfcc35' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ce6b1fdc-17f8-489d-9090-96843fdfcc35' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7ddc722b-cfda-493f-af18-84914a499f59' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Ftier-lists%2Fkeepsakes&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7ddc722b-cfda-493f-af18-84914a499f59' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Ftier-lists%2Fkeepsakes&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7ddc722b-cfda-493f-af18-84914a499f59' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Ftier-lists%2Fkeepsakes&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7ddc722b-cfda-493f-af18-84914a499f59' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fhades-2%2Ftier-lists%2Fkeepsakes&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ba0581cd-bfab-4837-a564-a28db46bc07d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ba0581cd-bfab-4837-a564-a28db46bc07d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ba0581cd-bfab-4837-a564-a28db46bc07d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ba0581cd-bfab-4837-a564-a28db46bc07d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /hades-2
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
          - link "Neverness to Everness NTE New" [ref=e83] [cursor=pointer]:
            - /url: https://mobalytics.gg/neverness-to-everness
            - generic [ref=e85]:
              - img "Neverness to Everness" [ref=e86]
              - generic [ref=e87]: NTE
              - generic [ref=e89]: New
          - 'link "Arknights: Endfield Endfield" [ref=e91] [cursor=pointer]':
            - /url: https://mobalytics.gg/arknights-endfield
            - generic [ref=e93]:
              - 'img "Arknights: Endfield" [ref=e94]'
              - generic [ref=e95]: Endfield
          - link "Elden Ring Nightreign Nightreign" [ref=e97] [cursor=pointer]:
            - /url: https://mobalytics.gg/elden-ring-nightreign
            - generic [ref=e99]:
              - img "Elden Ring Nightreign" [ref=e100]
              - generic [ref=e101]: Nightreign
          - button [ref=e102] [cursor=pointer]:
            - img [ref=e103]
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
      - generic [ref=e104]:
        - generic [ref=e105]:
          - generic [ref=e107]:
            - generic [ref=e110] [cursor=pointer]:
              - button "plus Rewards" [ref=e111]:
                - img "plus" [ref=e113]
                - generic [ref=e114]: Rewards
              - generic [ref=e116]: New
            - generic [ref=e118] [cursor=pointer]:
              - img [ref=e119]:
                - generic [ref=e142]: ✓
              - generic [ref=e143]: New challenge available
          - link "DOWNLOAD APP" [ref=e144] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-hades-2&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e146]:
              - img [ref=e147]
              - text: DOWNLOAD APP
          - link "Gamebase" [ref=e149] [cursor=pointer]:
            - /url: /gamebase
            - generic [ref=e150]: Gamebase
        - generic [ref=e152]:
          - button "Sign In" [ref=e154] [cursor=pointer]
          - button "Notifications" [ref=e156] [cursor=pointer]:
            - img [ref=e157]
          - button [ref=e159] [cursor=pointer]:
            - img [ref=e161]
          - button "Theme" [ref=e163] [cursor=pointer]:
            - img "Theme" [ref=e165]
      - generic [ref=e167]:
        - link "Home" [ref=e170] [cursor=pointer]:
          - /url: /hades-2
          - img "Home" [ref=e172]
        - link "Profile" [ref=e175] [cursor=pointer]:
          - /url: /hades-2/profile
          - img "Profile" [ref=e177]
        - link "Builds" [ref=e180] [cursor=pointer]:
          - /url: /hades-2/builds
          - img "Builds" [ref=e182]
        - link "Build Planner" [ref=e185] [cursor=pointer]:
          - /url: /hades-2/planner/builds
          - img "Build Planner" [ref=e187]
        - link "Tier List" [ref=e191] [cursor=pointer]:
          - /url: /hades-2/tier-lists
          - img "Tier List" [ref=e193]
        - link "Guides" [ref=e196] [cursor=pointer]:
          - /url: /hades-2/guides
          - img "Guides" [ref=e198]
        - link "Wiki" [ref=e201] [cursor=pointer]:
          - /url: /hades-2/wiki
          - img "Wiki" [ref=e203]
      - generic [ref=e205]:
        - main [ref=e206]:
          - generic [ref=e207]:
            - navigation [ref=e208]:
              - list [ref=e209]:
                - listitem [ref=e210]:
                  - link "Hades 2" [ref=e211] [cursor=pointer]:
                    - /url: /hades-2
                - listitem [ref=e212]:
                  - img [ref=e213]
                - listitem [ref=e214]:
                  - link "Tier Lists" [ref=e215] [cursor=pointer]:
                    - /url: /hades-2/tier-lists
                - listitem [ref=e216]:
                  - img [ref=e217]
                - listitem [ref=e218]: Gods Tier List
            - generic [ref=e219]:
              - generic [ref=e220]:
                - button "Hades 2 Tier List Gods Tier List Verified By Mobalytics Updated on May 4, 2026 6 Favorites Share" [ref=e223]:
                  - generic [ref=e224]:
                    - generic [ref=e226]:
                      - generic [ref=e227]: Hades 2 Tier List
                      - heading "Gods Tier List" [level=1] [ref=e228]
                      - generic [ref=e230]: Verified
                      - generic [ref=e231]:
                        - generic [ref=e233]:
                          - generic [ref=e234]:
                            - text: By
                            - link "Mobalytics" [ref=e235] [cursor=pointer]:
                              - /url: /hades-2/profile/mobalytics/tier-lists
                          - link [ref=e236] [cursor=pointer]:
                            - /url: https://www.youtube.com/c/mobalytics
                            - button [ref=e237]:
                              - img [ref=e238]
                        - generic [ref=e241]:
                          - text: Updated on
                          - generic [ref=e242]: May 4, 2026
                    - generic [ref=e244]:
                      - button "6 Favorites" [ref=e246] [cursor=pointer]:
                        - img [ref=e247]
                        - text: 6 Favorites
                      - button "Share" [ref=e249] [cursor=pointer]:
                        - img [ref=e250]
                        - text: Share
                - generic [ref=e253]:
                  - generic [ref=e259]:
                    - link "Gods" [ref=e261] [cursor=pointer]:
                      - /url: /hades-2/tier-lists/gods
                      - generic [ref=e262]: Gods
                    - link "Weapon Aspects" [ref=e265] [cursor=pointer]:
                      - /url: /hades-2/tier-lists/weapon-aspects
                      - generic [ref=e266]: Weapon Aspects
                    - link "Arcana Cards" [ref=e268] [cursor=pointer]:
                      - /url: /hades-2/tier-lists/arcana-cards
                      - generic [ref=e269]: Arcana Cards
                    - link "Keepsakes" [ref=e271] [cursor=pointer]:
                      - /url: /hades-2/tier-lists/keepsakes
                      - generic [ref=e272]: Keepsakes
                    - link "Hexes" [ref=e274] [cursor=pointer]:
                      - /url: /hades-2/tier-lists/hex
                      - generic [ref=e275]: Hexes
                    - link "Animal Familiars" [ref=e277] [cursor=pointer]:
                      - /url: /hades-2/tier-lists/animal-familiars-rankings
                      - generic [ref=e278]: Animal Familiars
                  - generic [ref=e280]:
                    - generic [ref=e282]:
                      - heading "The Best Gods in Hades 2" [level=2] [ref=e284]
                      - button "Save as Image" [ref=e287] [cursor=pointer]:
                        - img [ref=e288]
                        - text: Save as Image
                    - generic [ref=e289]:
                      - generic [ref=e291]:
                        - generic [ref=e293]:
                          - generic [ref=e295]: S (Meta)
                          - generic [ref=e297]:
                            - button "Zeus" [disabled] [ref=e299]:
                              - generic [ref=e302]: Zeus
                            - button "Hera" [disabled] [ref=e304]:
                              - generic [ref=e307]: Hera
                        - generic [ref=e309]:
                          - generic [ref=e311]: A (High-tier)
                          - generic [ref=e313]:
                            - button "Hephaestus" [disabled] [ref=e315]:
                              - generic [ref=e318]: Hephaestus
                            - button "Aphrodite" [disabled] [ref=e320]:
                              - generic [ref=e323]: Aphrodite
                            - button "Hestia" [disabled] [ref=e325]:
                              - generic [ref=e328]: Hestia
                            - button "Demeter" [disabled] [ref=e330]:
                              - generic [ref=e333]: Demeter
                        - generic [ref=e335]:
                          - generic [ref=e337]: B (Mid-tier)
                          - generic [ref=e339]:
                            - button "Ares" [disabled] [ref=e341]:
                              - generic [ref=e344]: Ares
                            - button "Apollo" [disabled] [ref=e346]:
                              - generic [ref=e349]: Apollo
                            - button "Poseidon" [disabled] [ref=e351]:
                              - generic [ref=e354]: Poseidon
                      - status [ref=e355]
                  - generic [ref=e356]:
                    - heading "Overview" [level=2] [ref=e360]
                    - generic [ref=e365]:
                      - paragraph [ref=e366]:
                        - text: God's in
                        - emphasis [ref=e367]: Hades II
                        - text: are the most foundational and impactful component of any run. Most runs will begin with equipping a God's Keepsake so you can start with their desired core Boon. Some Boons and Curses are so powerful that they completely overshadow the effect of your Aspect of the Nocturnal Arms, and your combat loop revolves solely around inflicting the God's Curse effect.
                      - paragraph [ref=e368]:
                        - text: While some Gods offer universal power that complements virtually every build, others only excel in specific builds centered around their unique Boons. From
                        - generic [ref=e373]: Hephaestus
                        - text: "'s burst damage and"
                        - generic [ref=e378]: Hestia
                        - text: rapid ticks of Scorch, to
                        - generic [ref=e383]: Demeter
                        - text: "'s CC Freeze, each Olympian offers a unique power and path to victory."
                      - paragraph [ref=e384]:
                        - text: This tier list will break down each
                        - link "Olympian God" [ref=e385] [cursor=pointer]:
                          - /url: /hades-2/guides/gods-explained
                        - text: based on the strength and versatility of their boons, how well they function together, and how they mesh with different Weapon Aspects. We'll rank them from the Gods who provide the most consistent enhancements to those whose Boons are limited to more niche use cases.
                      - paragraph [ref=e386]: Understanding how the Olympian Gods stack up against one another, what kind of Duo Boons they unlock, and how they synergize with your Weapon Aspect is vital to putting together the strongest possible builds.
                      - paragraph [ref=e387]: Bust out a bottle of Ambrosia, and let's dive into the rankings!
                      - list [ref=e388]:
                        - listitem [ref=e389]:
                          - emphasis [ref=e390]: These rankings were curated by HookieDookie, who has played over 700 hours of Hades 2, and cleared every Weapon at 65 Fear on both the Underworld and the Surface.
                - generic [ref=e391]:
                  - generic [ref=e392]:
                    - generic [ref=e393]:
                      - heading "S-tier Commentary (Meta)" [level=2] [ref=e397]
                      - generic [ref=e402]:
                        - paragraph [ref=e403]:
                          - strong [ref=e404]: The best of the best. The strongest builds in the game feature one or both of these Gods. Nearly every one of their boons is an excellent addition to your build. Their builds are immediately powerful. You'll never be disappointed when offered one of these Gods.
                        - heading "Zeus" [level=3] [ref=e405]
                        - paragraph [ref=e406]:
                          - generic [ref=e411]: Zeus
                          - text: "'s Attack, Special, and Cast boons are some of the best you can get no matter what Aspect of the Nocturnal Arms you are wielding. He also has incredible non-core, Infusion, Legendary, and Duo boons. For extremely Magick-hungry builds,"
                          - generic [ref=e416]: Ionic Gain
                          - text: is one of the few Magick boons that can offer truly infinite Magick.
                        - paragraph [ref=e417]:
                          - text: Blitz generates high single-target damage to help you defeat bosses with ease. Because Blitz applies with a single hit then can auto-trigger, it's also good for clearing rooms with a high number of enemies. If you manage to get a
                          - generic [ref=e422]: Static Shock
                          - text: build going, large locations are a breeze with fast-hitting Aspects.
                        - paragraph [ref=e423]:
                          - text: Once you get his legendary boon,
                          - generic [ref=e428]: Shocking Loss
                          - text: ", you clear every room 25% faster. Even mini-bosses can be killed by the Instant Destruction, making"
                          - generic [ref=e433]: Zeus
                          - text: "'s legendary incredibly lethal."
                        - heading "Hera" [level=3] [ref=e434]
                        - paragraph [ref=e435]:
                          - text: Enemies afflicted by
                          - generic [ref=e440]: Hera
                          - text: "'s Curse, Hitch, take 30% of damage dealt to other afflicted foes which makes it easily one of the best Curses for clearing standard encounters. When paired with Aspects that have large AoE attacks or specials, you'll quickly link enemies together and wipe them with the chain damage. Lasting up to 13 seconds also allows Hitch to excel at activating the"
                          - generic [ref=e445]: Origination (XIV)
                          - text: Arcana for bonus damage.
                        - paragraph [ref=e446]:
                          - text: On top of Hitch, she also offers the 2nd highest attack damage percentage boost of all the Gods. Other than
                          - generic [ref=e451]: Nexus Rush
                          - text: ", all other"
                          - generic [ref=e456]: Hera
                          - text: core boons will be superb choices every run.
                        - paragraph [ref=e457]:
                          - generic [ref=e462]: Born Gain
                          - text: is the easiest Magick Boon to use because you don't have to do anything to activate it. While you may find yourself running out of Magick early in a run, by the time you get to the 3rd and 4th region, you likely won't still be facing this issue.
                        - paragraph [ref=e463]:
                          - generic [ref=e468]: Hera
                          - text: also has some good non-core boons that fit into any build because of their universal applications. Increasing rarity levels from
                          - generic [ref=e473]: Bridal Glow
                          - text: and
                          - generic [ref=e478]: Proper Upbringing
                          - text: is always a good thing, and many builds get a nice damage boost from Fine Line and Extended Family.
                    - generic [ref=e479]:
                      - heading "A-tier Commentary (High-tier)" [level=2] [ref=e483]
                      - generic [ref=e488]:
                        - paragraph [ref=e489]:
                          - strong [ref=e490]: The high-tier Gods offer some great boons, but have fewer desirable options. You'll often want them in your God pool, but not always as your primary God. When using them as the foundation of a build, it takes more locations to feel their power come online compared to the top-tier Gods.
                        - heading "Hephaestus" [level=3] [ref=e491]
                        - paragraph [ref=e492]:
                          - generic [ref=e497]: Hephaestus
                          - text: is the best defensive God in Hades II. Equipping his Keepsake in the 2nd or 3rd region is a common strategy to give yourself the sustain required to overcome the increasingly difficult enemies. Altogether, he offers 6 defensive boons that either reduce damage taken or give you Armor.
                        - paragraph [ref=e498]:
                          - text: Grabbing
                          - generic [ref=e503]: Trusty Shield
                          - text: early on in a run is a smart move to keep your health high throughout a Night. Regardless of your primary God or Weapon Aspect, every build will benefit from having the increased tankiness
                          - generic [ref=e508]: Hephaestus
                          - text: enables.
                        - paragraph [ref=e509]:
                          - text: If you manage to get a high rarity on
                          - generic [ref=e514]: Volcanic Strike
                          - text: or
                          - generic [ref=e519]: Volcanic Flourish
                          - text: then multiple poms to decrease Blast Recharge Time, the "ding! ding! ding!" deals massive damage. For the luckiest, top the Volcanic build off with either
                          - generic [ref=e524]: Seismic Servo
                          - text: or
                          - generic [ref=e529]: Chain Reaction
                          - text: ", and you'll have a very fun burst damage build going into the final boss."
                        - list [ref=e530]:
                          - listitem [ref=e531]:
                            - generic [ref=e536]: Jeweled Pom
                            - text: and
                            - generic [ref=e541]: Calling Card
                            - text: have also made
                            - generic [ref=e546]: Hephaestus
                            - text: blast builds more consistent and viable.
                        - heading "Aphrodite" [level=3] [ref=e547]
                        - paragraph [ref=e548]:
                          - text: When you want to go for big, hard hits,
                          - generic [ref=e553]: Aphrodite
                          - text: is your best choice. While her attack and specials don't inflict a Curse, a Heroic Flutter Flourish ramps up your Aspects damage to +250%! Any Aspect with high damage close-range attacks synergizes well with
                          - generic [ref=e558]: Aphrodite
                          - text: "'s boons."
                        - paragraph [ref=e559]:
                          - text: Weak is a decent defensive Curse since Weak-inflicted enemies deal 30% reduced damage. Because it offers no offensive value, however, it's considered one of the weaker status effects in
                          - emphasis [ref=e560]: Hades II
                          - text: . Weak also only lasts a single second, so outside of
                          - generic [ref=e565]: Glamour Gain
                          - text: ", you can't rely on the damage reduction."
                        - paragraph [ref=e566]:
                          - text: Her CC from
                          - generic [ref=e571]: Rapture Ring
                          - text: is great for keeping your distance from dangerous enemies significantly easier. Her non-core boons are ok, but not worth taking
                          - generic [ref=e576]: Aphrodite
                          - text: for if you don't need Weak or her Attack/Special.
                        - paragraph [ref=e577]:
                          - text: Another area where
                          - generic [ref=e582]: Aphrodite
                          - text: "'s beauty reflects is in her Duo Boons. Her Duos with"
                          - generic [ref=e587]: Zeus
                          - text: and
                          - generic [ref=e592]: Hestia
                          - text: are must-haves. They make your build so much stronger that it's often worth using two God Keepsakes to guarantee you fulfill the Offering Requirements.
                        - paragraph [ref=e593]:
                          - text: If you can get a bit lucky, being able to potentially inflict every curse in the game with her Legendary,
                          - generic [ref=e598]: Nervous Wreck
                          - text: ", is ridiculously strong."
                        - heading "Hestia" [level=3] [ref=e599]
                        - paragraph [ref=e600]:
                          - text: Scorch deals damage over time and can be stacked when inflicted multiple times in a row. To maximize damage per second with Scorch, you'll want to put
                          - generic [ref=e605]: Hestia
                          - text: on a fast-hitting Aspect move. Examples include
                          - generic [ref=e610]: Aspect of Hel
                          - text: Attack,
                          - generic [ref=e615]: Aspect of Anubis
                          - text: Attack, and
                          - link "Ygnium" [ref=e617] [cursor=pointer]:
                            - /url: /hades-2/wiki/nocturnalArms/ygnium
                            - generic [ref=e620]: Ygnium
                          - text: Special.
                        - paragraph [ref=e621]:
                          - text: The problem with
                          - generic [ref=e626]: Hestia
                          - text: builds is that you need a high rarity or Pom level on the core move, plus
                          - generic [ref=e631]: Pyro Technique
                          - text: ", and ideally"
                          - generic [ref=e636]: Burning Desire
                          - text: . You won't always be so lucky, or it may not be until late into the run that you get all the necessary boons, which makes the earlier regions more difficult.
                        - paragraph [ref=e637]:
                          - text: If you're not going for a full-on Scorch build, it's better to choose one of the S-tier or A-tier Gods when given the choice.
                          - generic [ref=e642]: Hestia
                          - text: "'s synergy with most builds is limited by a lack of useful non-core boons and a niche Magick boon."
                        - heading "Demeter" [level=3] [ref=e643]
                        - paragraph [ref=e644]: Being able to freeze any standard enemy and slow bosses is immensely helpful. Many enemies can be destroyed by burst damage while they are frozen, so they'll never have the opportunity to hurt you. Freeze also makes Omega-centered builds easier because it buys you time to safely channel your Omega moves.
                        - paragraph [ref=e645]:
                          - text: While her Rush and Gain aren't that great, they come in handy when you have no other options. Plus,
                          - generic [ref=e650]: Tropical Cyclone
                          - text: makes her Rush deal high damage.
                        - paragraph [ref=e651]:
                          - text: For her non-core boons,
                          - generic [ref=e656]: Weed Killer
                          - text: is fantastic for Omega Attack builds, and the cost of an extra 10 Magick is well worth the increased damage.
                        - paragraph [ref=e657]:
                          - generic [ref=e662]: Frosty Veneer
                          - text: is difficult to activate because of the high elemental requirement, only triggers on high damage hits, and is not necessarily worth going out of your way to try to acquire water element boons. Her Duos are very build-dependent and are not always better than taking standard Boons that may be more useful to your build.
                        - paragraph [ref=e663]:
                          - text: Through Freeze, healing, and damage mitigation,
                          - generic [ref=e668]: Demeter
                          - text: offers a more defensive playstyle that works equally well as a primary or secondary God.
                    - generic [ref=e669]:
                      - heading "B-tier Commentary (Mid-tier)" [level=2] [ref=e673]
                      - generic [ref=e678]:
                        - paragraph [ref=e679]:
                          - strong [ref=e680]: On a few Aspects, these Gods have the best boons to build around. They lack the versatility, however, to synergize with several of the Aspects. Generally, they rely on secondary tier 2 boons to make their core boons viable.
                        - heading "Ares" [level=3] [ref=e681]
                        - paragraph [ref=e682]:
                          - generic [ref=e687]: Ares
                          - text: "'s Curse, Wounds, is not a very impactful status effect on its own. The secondary boon,"
                          - generic [ref=e692]: Grievous Blow
                          - text: ", is the only thing that makes taking"
                          - generic [ref=e697]: Vicious Strike
                          - text: or
                          - generic [ref=e702]: Vicious Flourish
                          - text: worth it. If you don't get offered
                          - generic [ref=e707]: Grievous Blow
                          - text: after taking
                          - generic [ref=e712]: Ares
                          - text: on your Attack or Special, your Weapon is going to feel weak.
                        - paragraph [ref=e713]:
                          - text: Additionally, he has
                          - generic [ref=e718]: Mutual Destruction
                          - text: to add more chances to deal 200% damage. If you manage to get 8 Earth elements, and select his Infusion (which gives no element) then you'll even get 50% bonus to Olympian damage such as
                          - generic [ref=e723]: Ares
                          - text: "' Falling Blades, or the infliction of Wounds. Despite ranking him as the \"weakest\" God,"
                          - generic [ref=e728]: Ares
                          - text: has the potential for insane damage.
                        - paragraph [ref=e729]:
                          - text: As of Patch 2,
                          - generic [ref=e734]: Grisly Gain
                          - text: is really good! Unlike
                          - generic [ref=e739]: Cardio Gain
                          - text: ", all strikes (standard and Omega) can trigger Plasma and restore Magick."
                        - paragraph [ref=e740]:
                          - text: For secondary boons,
                          - generic [ref=e745]: Cut Above
                          - text: is essentially a worse version of
                          - generic [ref=e750]: Fine Line
                          - text: .
                          - generic [ref=e755]: Visceral Impact
                          - text: might as well not exist.
                        - paragraph [ref=e756]:
                          - generic [ref=e761]: Blood Spree
                          - text: can feel OP
                          - emphasis [ref=e762]: if
                          - text: you get a high rarity while using the
                          - generic [ref=e767]: Strength (XXIII)
                          - text: Arcana, wielding a fast-hitting Aspect, and when you don't have
                          - generic [ref=e772]: Vow of Scars
                          - strong [ref=e773]: "3"
                          - text: on. Being limited to activating at below 40 health, however, means that big hits from the final bosses often don't give you the chance to benefit from its healing.
                        - heading "Apollo" [level=3] [ref=e774]
                        - paragraph [ref=e775]:
                          - generic [ref=e780]: Apollo
                          - text: "'s increases the AoE of any Attack or Special. His Curse is to inflict Daze, which gives enemies a 20% chance of missing attacks that otherwise would've hit you. Both of these effects are strong and make"
                          - generic [ref=e785]: Apollo
                          - text: "'s Boons a nice balance between offense and defense."
                        - paragraph [ref=e786]:
                          - generic [ref=e791]: Nova Strike
                          - text: is used a bit more often than
                          - generic [ref=e796]: Nova Flourish
                          - text: because every Weapon has at least one Aspect that synergizes well with the increased damage and AoE of his Attack boon. Weapons like the Axe, which have high damage Omega attacks, work especially well with
                          - generic [ref=e801]: Apollo
                          - text: . They shine bright like the sun when you have his legendary boon,
                          - generic [ref=e806]: Exceptional Talent
                          - text: ", which doubles the damage of every Omega Attack."
                        - paragraph [ref=e807]:
                          - text: He has a few good Duos Boons, a couple of decent ones, and a couple that are very niche. Most builds are not too focused on Rush Boons, so
                          - generic [ref=e812]: Blinding Rush
                          - text: "'s increased sprint speed and ability to inflict Daze are going to be a solid choice in virtually every run."
                        - paragraph [ref=e813]:
                          - text: No God in
                          - emphasis [ref=e814]: Hades II
                          - text: is worthless, but someone has to be at the bottom of the list, and
                          - generic [ref=e819]: Apollo
                          - text: possesses a bit less viability compared to the rest of the Olympian Gods.
                        - heading "Poseidon" [level=3] [ref=e820]
                        - paragraph [ref=e821]:
                          - text: Splash damage is independent of Weapon damage. Depending on the Aspect, this is either a great mechanic or a terrible one. On an Aspect like
                          - generic [ref=e826]: Aspect of Melinoë
                          - text: with a slow but high damage Attack,
                          - generic [ref=e831]: Wave Strike
                          - text: is abysmal. For a fast-hitting Weapon like
                          - generic [ref=e836]: Aspect of Pan
                          - text: Special or
                          - generic [ref=e841]: Aspect of Hel
                          - text: Attack, you'll finish many runs with
                          - generic [ref=e846]: Poseidon
                          - text: Waves as your highest total damage.
                        - paragraph [ref=e847]:
                          - text: Similar to
                          - generic [ref=e852]: Hestia
                          - text: ","
                          - generic [ref=e857]: Poseidon
                          - text: "'s Attack and Special Boons require an enhancement boon ("
                          - generic [ref=e862]: Slippery Slope
                          - text: ) to get the real build started. You also are 100% going to want his Legendary, and hopefully even his Duo with Ares
                          - generic [ref=e867]: Arterial Spray
                          - text: . This is a tall order for a game based on RNG.
                        - paragraph [ref=e868]:
                          - text: His Duos and Infusion are also quite powerful.
                          - generic [ref=e873]: Poseidon
                          - text: "'s biggest weaknesses are limited Aspect synergy and that most of his non-core boons are weaker than the other Gods, or only useful when taken very early in a run."
                  - generic [ref=e876]:
                    - heading "Table of Contents" [level=2] [ref=e880]
                    - generic [ref=e881]:
                      - generic [ref=e882]:
                        - link "1. The Best Gods in Hades 2" [ref=e883] [cursor=pointer]:
                          - /url: /hades-2/tier-lists/gods#351d6f39-2f46-4b3a-a275-59eb9843cded-the-best-gods-in-hades-2-0
                        - link "2. Overview" [ref=e884] [cursor=pointer]:
                          - /url: /hades-2/tier-lists/gods#6-overview-0
                        - link "3. S-tier Commentary (Meta)" [ref=e885] [cursor=pointer]:
                          - /url: /hades-2/tier-lists/gods#2-s-tier-commentary-meta-1
                        - link "Zeus" [ref=e886] [cursor=pointer]:
                          - /url: /hades-2/tier-lists/gods#2-zeus-0
                          - generic [ref=e888]: Zeus
                        - link "Hera" [ref=e889] [cursor=pointer]:
                          - /url: /hades-2/tier-lists/gods#2-hera-1
                          - generic [ref=e891]: Hera
                        - link "4. A-tier Commentary (High-tier)" [ref=e892] [cursor=pointer]:
                          - /url: /hades-2/tier-lists/gods#3-a-tier-commentary-high-tier-2
                        - link "Hephaestus" [ref=e893] [cursor=pointer]:
                          - /url: /hades-2/tier-lists/gods#3-hephaestus-0
                          - generic [ref=e895]: Hephaestus
                        - link "Aphrodite" [ref=e896] [cursor=pointer]:
                          - /url: /hades-2/tier-lists/gods#3-aphrodite-1
                          - generic [ref=e898]: Aphrodite
                        - link "Hestia" [ref=e899] [cursor=pointer]:
                          - /url: /hades-2/tier-lists/gods#3-hestia-2
                          - generic [ref=e901]: Hestia
                        - link "Demeter" [ref=e902] [cursor=pointer]:
                          - /url: /hades-2/tier-lists/gods#3-demeter-3
                          - generic [ref=e904]: Demeter
                        - link "5. B-tier Commentary (Mid-tier)" [ref=e905] [cursor=pointer]:
                          - /url: /hades-2/tier-lists/gods#4-b-tier-commentary-mid-tier-3
                        - link "Ares" [ref=e906] [cursor=pointer]:
                          - /url: /hades-2/tier-lists/gods#4-ares-0
                          - generic [ref=e908]: Ares
                        - link "Apollo" [ref=e909] [cursor=pointer]:
                          - /url: /hades-2/tier-lists/gods#4-apollo-1
                          - generic [ref=e911]: Apollo
                        - link "Poseidon" [ref=e912] [cursor=pointer]:
                          - /url: /hades-2/tier-lists/gods#4-poseidon-2
                          - generic [ref=e914]: Poseidon
                        - link "6. See More Tier Lists" [ref=e915] [cursor=pointer]:
                          - /url: /hades-2/tier-lists/gods#8-see-more-tier-lists-0
                      - button "Back to top" [ref=e917] [cursor=pointer]
                - generic [ref=e921]:
                  - heading "See More Tier Lists" [level=2] [ref=e925]
                  - generic [ref=e927]:
                    - generic [ref=e930] [cursor=pointer]:
                      - link [ref=e931]:
                        - /url: /hades-2/tier-lists/keepsakes
                      - generic [ref=e933]:
                        - generic [ref=e934]: Keepsakes Tier List
                        - generic [ref=e935]:
                          - text: By
                          - link "Mobalytics" [ref=e936]:
                            - /url: /hades-2/profile/mobalytics/tier-lists
                          - text: ∙
                          - generic [ref=e937]: Updated on
                          - generic [ref=e938]: Aug 21, 2026
                      - generic [ref=e939]:
                        - generic [ref=e941]:
                          - button "6 Favorites" [ref=e942]:
                            - img [ref=e943]
                            - text: 6 Favorites
                          - button "Share" [ref=e944]:
                            - img [ref=e945]
                            - text: Share
                        - generic [ref=e947]: Verified
                    - generic [ref=e950] [cursor=pointer]:
                      - link [ref=e951]:
                        - /url: /hades-2/tier-lists/hex
                      - generic [ref=e953]:
                        - generic [ref=e954]: Hex Tier List
                        - generic [ref=e955]:
                          - text: By
                          - link "Mobalytics" [ref=e956]:
                            - /url: /hades-2/profile/mobalytics/tier-lists
                          - text: ∙
                          - generic [ref=e957]: Updated on
                          - generic [ref=e958]: Aug 21, 2026
                      - generic [ref=e959]:
                        - generic [ref=e961]:
                          - button "4 Favorites" [ref=e962]:
                            - img [ref=e963]
                            - text: 4 Favorites
                          - button "Share" [ref=e964]:
                            - img [ref=e965]
                            - text: Share
                        - generic [ref=e967]: Verified
                    - generic [ref=e970] [cursor=pointer]:
                      - link [ref=e971]:
                        - /url: /hades-2/tier-lists/weapon-aspects
                      - generic [ref=e973]:
                        - generic [ref=e974]: Weapon Aspects Tier List (Aspects of Nocturnal Arms)
                        - generic [ref=e975]:
                          - text: By
                          - link "Mobalytics" [ref=e976]:
                            - /url: /hades-2/profile/mobalytics/tier-lists
                          - text: ∙
                          - generic [ref=e977]: Updated on
                          - generic [ref=e978]: May 4, 2026
                      - generic [ref=e979]:
                        - generic [ref=e981]:
                          - button "12 Favorites" [ref=e982]:
                            - img [ref=e983]
                            - text: 12 Favorites
                          - button "Share" [ref=e984]:
                            - img [ref=e985]
                            - text: Share
                        - generic [ref=e987]: Verified
                    - generic [ref=e990] [cursor=pointer]:
                      - link [ref=e991]:
                        - /url: /hades-2/tier-lists/animal-familiars-rankings
                      - generic [ref=e993]:
                        - generic [ref=e994]: Animal Familiars Tier List
                        - generic [ref=e995]:
                          - text: By
                          - link "Mobalytics" [ref=e996]:
                            - /url: /hades-2/profile/mobalytics/tier-lists
                          - text: ∙
                          - generic [ref=e997]: Updated on
                          - generic [ref=e998]: May 4, 2026
                      - generic [ref=e999]:
                        - generic [ref=e1001]:
                          - button "3 Favorites" [ref=e1002]:
                            - img [ref=e1003]
                            - text: 3 Favorites
                          - button "Share" [ref=e1004]:
                            - img [ref=e1005]
                            - text: Share
                        - generic [ref=e1007]: Verified
                    - generic [ref=e1010] [cursor=pointer]:
                      - link [ref=e1011]:
                        - /url: /hades-2/tier-lists/arcana-cards
                      - generic [ref=e1013]:
                        - generic [ref=e1014]: Arcana Cards Tier List
                        - generic [ref=e1015]:
                          - text: By
                          - link "Mobalytics" [ref=e1016]:
                            - /url: /hades-2/profile/mobalytics/tier-lists
                          - text: ∙
                          - generic [ref=e1017]: Updated on
                          - generic [ref=e1018]: May 4, 2026
                      - generic [ref=e1019]:
                        - generic [ref=e1021]:
                          - button "4 Favorites" [ref=e1022]:
                            - img [ref=e1023]
                            - text: 4 Favorites
                          - button "Share" [ref=e1024]:
                            - img [ref=e1025]
                            - text: Share
                        - generic [ref=e1027]: Verified
                  - button "Show more" [ref=e1028] [cursor=pointer]
              - status [ref=e1029]
        - complementary [ref=e1035]:
          - generic [ref=e1036]:
            - generic [ref=e1038]:
              - generic [ref=e1040] [cursor=pointer]:
                - generic [ref=e1041]: Advertisement
                - generic [ref=e1042]: Remove Ads
              - generic [ref=e1046] [cursor=pointer]:
                - generic [ref=e1047]: Remove all ads
                - generic [ref=e1048]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e1049]
            - generic [ref=e1051]:
              - generic [ref=e1053] [cursor=pointer]:
                - generic [ref=e1054]: Advertisement
                - generic [ref=e1055]: Remove Ads
              - generic [ref=e1059] [cursor=pointer]:
                - generic [ref=e1060]: Remove all ads
                - generic [ref=e1061]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e1062]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e1065]:
    - banner [ref=e1066]:
      - generic [ref=e1067] [cursor=pointer]:
        - generic [ref=e1068]: Advertisement
        - generic [ref=e1069]: Remove Ads
    - generic [ref=e1072] [cursor=pointer]:
      - generic [ref=e1073]: Remove all ads
      - generic [ref=e1074]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e1075]
```

# Test source

```ts
  446 |           return filterPattern.test(match.groups.link);
  447 |         })
  448 |         .slice(0, quantityLinks);
  449 |     });
  450 | 
  451 |     const consoleMessages = [];
  452 |     const pageErrors = [];
  453 |     page.on('console', (msg) => {
  454 |       if (msg.type() === 'error') {
  455 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  456 |         // console.log(consoleInfo);
  457 |         consoleMessages.push(consoleInfo);
  458 |       }
  459 |     });
  460 |     page.on('pageerror', (error) => {
  461 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  462 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  463 |       //   console.log(errorInfo);
  464 |       // }
  465 |       pageErrors.push(errorInfo);
  466 |     });
  467 | 
  468 |     for (const takeLink of filteredLinks) {
  469 |       consoleMessages.length = 0;
  470 |       pageErrors.length = 0;
  471 | 
  472 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  473 | 
  474 |       await test.step(`Open parsed page: ${link}`, async () => {
  475 |         await page.goto(link);
  476 |         await page.waitForTimeout(1000);
  477 |       });
  478 | 
  479 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  480 | 
  481 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  482 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  483 |         expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
  484 |         expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
  485 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  486 |       });
  487 |     }
  488 |   });
  489 | 
  490 |   test(`Check that hydration is ok on Hades-2`, async ({ page, request }) => {
  491 |     let filteredLinks;
  492 | 
  493 |     await test.step(`Parse up to ${quantityLinks} links from Hades-2 sitemap: ${process.env.BASE_URL}/hades-2/sitemap.xml`, async () => {
  494 |       const response = await request.get(`${process.env.BASE_URL}/hades-2/sitemap.xml`);
  495 |       await test.step(`Expected Result: ${process.env.BASE_URL}/hades-2/sitemap.xml returns with ${response.status()}`, async () => {
  496 |         expect(response.ok()).toBeTruthy();
  497 |       });
  498 |       const xmlData = await response.text();
  499 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  500 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  501 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  502 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  503 | 
  504 |       filteredLinks = arrayLinks
  505 |         .filter((match) => {
  506 |           const filterPattern = /mobalytics\.gg\/hades-2/;
  507 |           return filterPattern.test(match.groups.link);
  508 |         })
  509 |         .slice(0, quantityLinks);
  510 |     });
  511 | 
  512 |     const consoleMessages = [];
  513 |     const pageErrors = [];
  514 |     page.on('console', (msg) => {
  515 |       if (msg.type() === 'error') {
  516 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  517 |         // console.log(consoleInfo);
  518 |         consoleMessages.push(consoleInfo);
  519 |       }
  520 |     });
  521 |     page.on('pageerror', (error) => {
  522 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  523 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  524 |       //   console.log(errorInfo);
  525 |       // }
  526 |       pageErrors.push(errorInfo);
  527 |     });
  528 | 
  529 |     for (const takeLink of filteredLinks) {
  530 |       consoleMessages.length = 0;
  531 |       pageErrors.length = 0;
  532 | 
  533 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  534 | 
  535 |       await test.step(`Open parsed page: ${link}`, async () => {
  536 |         await page.goto(link);
  537 |         await page.waitForTimeout(1000);
  538 |       });
  539 | 
  540 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  541 | 
  542 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  543 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  544 |         expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
  545 |         expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
> 546 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      |                                               ^ Error: expect(received).not.toMatch(expected)
  547 |       });
  548 |     }
  549 |   });
  550 | 
  551 |   test(`Check that hydration is ok on PoE-2`, async ({ page, request }) => {
  552 |     let filteredLinks;
  553 | 
  554 |     await test.step(`Parse up to ${quantityLinks} links from PoE-2 sitemap: ${process.env.BASE_URL}/poe-2/sitemap.xml`, async () => {
  555 |       const response = await request.get(`${process.env.BASE_URL}/poe-2/sitemap.xml`);
  556 |       await test.step(`Expected Result: ${process.env.BASE_URL}/poe-2/sitemap.xml returns with ${response.status()}`, async () => {
  557 |         expect(response.ok()).toBeTruthy();
  558 |       });
  559 |       const xmlData = await response.text();
  560 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  561 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  562 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  563 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  564 | 
  565 |       filteredLinks = arrayLinks
  566 |         .filter((match) => {
  567 |           const filterPattern = /mobalytics\.gg\/poe-2\/(builds|guides|tier-lists)\/[-a-z]+$/;
  568 |           return filterPattern.test(match.groups.link);
  569 |         })
  570 |         .slice(0, quantityLinks);
  571 |     });
  572 | 
  573 |     const consoleMessages = [];
  574 |     const pageErrors = [];
  575 |     page.on('console', (msg) => {
  576 |       if (msg.type() === 'error') {
  577 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  578 |         // console.log(consoleInfo);
  579 |         consoleMessages.push(consoleInfo);
  580 |       }
  581 |     });
  582 |     page.on('pageerror', (error) => {
  583 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  584 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  585 |       //   console.log(errorInfo);
  586 |       // }
  587 |       pageErrors.push(errorInfo);
  588 |     });
  589 | 
  590 |     for (const takeLink of filteredLinks) {
  591 |       consoleMessages.length = 0;
  592 |       pageErrors.length = 0;
  593 | 
  594 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  595 | 
  596 |       await test.step(`Open parsed page: ${link}`, async () => {
  597 |         await page.goto(link);
  598 |         await page.waitForTimeout(1000);
  599 |       });
  600 | 
  601 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  602 | 
  603 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  604 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  605 |         expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
  606 |         expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
  607 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  608 |       });
  609 |     }
  610 |   });
  611 | 
  612 |   test(`Check that hydration is ok on Borderlands-4`, async ({ page, request }) => {
  613 |     let filteredLinks;
  614 | 
  615 |     await test.step(`Parse up to ${quantityLinks} links from Borderlands-4 sitemap: ${process.env.BASE_URL}/borderlands-4/sitemap.xml`, async () => {
  616 |       const response = await request.get(`${process.env.BASE_URL}/borderlands-4/sitemap.xml`);
  617 |       await test.step(`Expected Result: ${process.env.BASE_URL}/borderlands-4/sitemap.xml returns with ${response.status()}`, async () => {
  618 |         expect(response.ok()).toBeTruthy();
  619 |       });
  620 |       const xmlData = await response.text();
  621 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  622 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  623 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  624 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  625 | 
  626 |       filteredLinks = arrayLinks
  627 |         .filter((match) => {
  628 |           const filterPattern = /mobalytics\.gg\/borderlands-4/;
  629 |           return filterPattern.test(match.groups.link);
  630 |         })
  631 |         .slice(0, quantityLinks);
  632 |     });
  633 | 
  634 |     const consoleMessages = [];
  635 |     const pageErrors = [];
  636 |     page.on('console', (msg) => {
  637 |       if (msg.type() === 'error') {
  638 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  639 |         // console.log(consoleInfo);
  640 |         consoleMessages.push(consoleInfo);
  641 |       }
  642 |     });
  643 |     page.on('pageerror', (error) => {
  644 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  645 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  646 |       //   console.log(errorInfo);
```
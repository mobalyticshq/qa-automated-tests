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
[error]: Loading the script 'blob:https://mobalytics.gg/e026aa41-59bd-455b-af6f-48704aafd14b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e026aa41-59bd-455b-af6f-48704aafd14b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e026aa41-59bd-455b-af6f-48704aafd14b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e026aa41-59bd-455b-af6f-48704aafd14b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8fdbd18a-e77f-4e5b-8e86-09e847ceff0d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8fdbd18a-e77f-4e5b-8e86-09e847ceff0d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8fdbd18a-e77f-4e5b-8e86-09e847ceff0d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8fdbd18a-e77f-4e5b-8e86-09e847ceff0d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ede621d9-6b57-4a8b-a4f0-f0f9438ceb39' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ede621d9-6b57-4a8b-a4f0-f0f9438ceb39' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ede621d9-6b57-4a8b-a4f0-f0f9438ceb39' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ede621d9-6b57-4a8b-a4f0-f0f9438ceb39' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/88a82b0d-8913-4dbe-b3e6-c80fa9630e68' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/88a82b0d-8913-4dbe-b3e6-c80fa9630e68' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/88a82b0d-8913-4dbe-b3e6-c80fa9630e68' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/88a82b0d-8913-4dbe-b3e6-c80fa9630e68' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e171c853-3625-4450-926e-3f46885adab1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e171c853-3625-4450-926e-3f46885adab1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e171c853-3625-4450-926e-3f46885adab1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e171c853-3625-4450-926e-3f46885adab1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a58b4b33-c778-499c-82d9-07f84aa5532d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a58b4b33-c778-499c-82d9-07f84aa5532d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a58b4b33-c778-499c-82d9-07f84aa5532d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a58b4b33-c778-499c-82d9-07f84aa5532d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5bd54505-f5c1-4e51-ac94-3e2de7f2e7bd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fpoe%2Fbuilds%2Flightning-arrow-ele-hit-deadeye-guide&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5bd54505-f5c1-4e51-ac94-3e2de7f2e7bd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fpoe%2Fbuilds%2Flightning-arrow-ele-hit-deadeye-guide&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Failed to load resource: the server responded with a status of 400 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5bd54505-f5c1-4e51-ac94-3e2de7f2e7bd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fpoe%2Fbuilds%2Flightning-arrow-ele-hit-deadeye-guide&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5bd54505-f5c1-4e51-ac94-3e2de7f2e7bd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fpoe%2Fbuilds%2Flightning-arrow-ele-hit-deadeye-guide&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Failed to load resource: the server responded with a status of 400 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/122724ad-5db5-4d76-96b9-14ecd1c9db7b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/122724ad-5db5-4d76-96b9-14ecd1c9db7b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (Too Many Requests),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[SecurityError]: \"getLayoutMap() must be called from a top-level browsing context or allowed by the permission policy.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/122724ad-5db5-4d76-96b9-14ecd1c9db7b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/122724ad-5db5-4d76-96b9-14ecd1c9db7b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (Too Many Requests),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[SecurityError]: \"getLayoutMap() must be called from a top-level browsing context or allowed by the permission policy.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fdcfd1c6-15f6-4772-9d87-152796719c04' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fdcfd1c6-15f6-4772-9d87-152796719c04' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fdcfd1c6-15f6-4772-9d87-152796719c04' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fdcfd1c6-15f6-4772-9d87-152796719c04' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e35e187c-0db2-4006-b3e9-9d30a7fb8c7b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e35e187c-0db2-4006-b3e9-9d30a7fb8c7b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e35e187c-0db2-4006-b3e9-9d30a7fb8c7b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e35e187c-0db2-4006-b3e9-9d30a7fb8c7b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/93a73946-8cce-4518-b5d9-d4acf3d9f432' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/93a73946-8cce-4518-b5d9-d4acf3d9f432' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/93a73946-8cce-4518-b5d9-d4acf3d9f432' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/93a73946-8cce-4518-b5d9-d4acf3d9f432' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/44918c18-6105-4a2c-8487-deb51de6e36a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/44918c18-6105-4a2c-8487-deb51de6e36a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/44918c18-6105-4a2c-8487-deb51de6e36a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/44918c18-6105-4a2c-8487-deb51de6e36a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/246bc434-b50c-4e4e-8a26-e94963ad1dd7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/246bc434-b50c-4e4e-8a26-e94963ad1dd7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/246bc434-b50c-4e4e-8a26-e94963ad1dd7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/246bc434-b50c-4e4e-8a26-e94963ad1dd7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:15:4056
    at O (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:214880)
    at v (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:210655)
    at eC.load (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:260325)
    at ex.ensureProvidersReady (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:250444)
    at ed.initAdsEffect (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:242308)
    at Object.onFinished (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2995:2699)
    at ew.finish (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:259194)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.finish (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at ew.runCommand (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256779)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256353)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at onEmpty (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:257646)
    at d (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:251040)
    at S (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252242)
    at o.<anonymous> (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252295)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at nQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:858:129)
    at oQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:868:318)
    at mQ.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:869:83)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at LL.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:652:270)
    at ry (https://imasdk.googleapis.com/js/sdkloader/ima3.js:364:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:362:297)
    at n (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:15:4056
    at b (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:215219)
    at v (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:210665)
    at eC.load (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:260325)
    at ex.ensureProvidersReady (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:250444)
    at ed.initAdsEffect (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:242308)
    at Object.onFinished (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2995:2699)
    at ew.finish (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:259194)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.finish (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at ew.runCommand (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256779)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256353)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at onEmpty (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:257646)
    at d (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:251040)
    at S (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252242)
    at o.<anonymous> (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252295)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at nQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:858:129)
    at oQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:868:318)
    at mQ.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:869:83)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at LL.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:652:270)
    at ry (https://imasdk.googleapis.com/js/sdkloader/ima3.js:364:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:362:297)
    at n (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:15:4056
    at D (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:215050)
    at v (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:210660)
    at eC.load (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:260325)
    at ex.ensureProvidersReady (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:250444)
    at ed.initAdsEffect (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:242308)
    at Object.onFinished (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2995:2699)
    at ew.finish (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:259194)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.finish (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at ew.runCommand (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256779)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256353)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at onEmpty (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:257646)
    at d (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:251040)
    at S (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252242)
    at o.<anonymous> (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252295)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at nQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:858:129)
    at oQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:868:318)
    at mQ.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:869:83)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at LL.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:652:270)
    at ry (https://imasdk.googleapis.com/js/sdkloader/ima3.js:364:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:362:297)
    at n (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:12:4922),Console error: 
[error]: error:  [Prebid] could not load prebid config,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ad945346-612d-4c43-9e7e-2f015fd4765e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ad945346-612d-4c43-9e7e-2f015fd4765e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:15:4056
    at O (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:214880)
    at v (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:210655)
    at eC.load (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:260325)
    at ex.ensureProvidersReady (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:250444)
    at ed.initAdsEffect (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:242308)
    at Object.onFinished (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2995:2699)
    at ew.finish (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:259194)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.finish (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at ew.runCommand (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256779)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256353)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at onEmpty (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:257646)
    at d (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:251040)
    at S (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252242)
    at o.<anonymous> (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252295)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at nQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:858:129)
    at oQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:868:318)
    at mQ.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:869:83)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at LL.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:652:270)
    at ry (https://imasdk.googleapis.com/js/sdkloader/ima3.js:364:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:362:297)
    at n (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:15:4056
    at b (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:215219)
    at v (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:210665)
    at eC.load (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:260325)
    at ex.ensureProvidersReady (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:250444)
    at ed.initAdsEffect (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:242308)
    at Object.onFinished (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2995:2699)
    at ew.finish (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:259194)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.finish (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at ew.runCommand (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256779)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256353)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at onEmpty (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:257646)
    at d (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:251040)
    at S (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252242)
    at o.<anonymous> (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252295)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at nQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:858:129)
    at oQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:868:318)
    at mQ.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:869:83)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at LL.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:652:270)
    at ry (https://imasdk.googleapis.com/js/sdkloader/ima3.js:364:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:362:297)
    at n (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:15:4056
    at D (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:215050)
    at v (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:210660)
    at eC.load (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:260325)
    at ex.ensureProvidersReady (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:250444)
    at ed.initAdsEffect (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:242308)
    at Object.onFinished (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2995:2699)
    at ew.finish (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:259194)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.finish (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at ew.runCommand (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256779)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256353)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at onEmpty (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:257646)
    at d (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:251040)
    at S (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252242)
    at o.<anonymous> (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252295)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at nQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:858:129)
    at oQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:868:318)
    at mQ.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:869:83)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at LL.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:652:270)
    at ry (https://imasdk.googleapis.com/js/sdkloader/ima3.js:364:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:362:297)
    at n (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:12:4922),Console error: 
[error]: error:  [Prebid] could not load prebid config,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ad945346-612d-4c43-9e7e-2f015fd4765e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ad945346-612d-4c43-9e7e-2f015fd4765e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ba40db5f-d7a1-4b11-85fe-26eef1ce66cf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ba40db5f-d7a1-4b11-85fe-26eef1ce66cf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ba40db5f-d7a1-4b11-85fe-26eef1ce66cf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ba40db5f-d7a1-4b11-85fe-26eef1ce66cf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bf59b46b-54e7-4876-92f9-50568f2e2c96' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bf59b46b-54e7-4876-92f9-50568f2e2c96' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bf59b46b-54e7-4876-92f9-50568f2e2c96' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bf59b46b-54e7-4876-92f9-50568f2e2c96' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/88ef620f-170f-4a0d-bade-3da0754abe33' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/88ef620f-170f-4a0d-bade-3da0754abe33' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/88ef620f-170f-4a0d-bade-3da0754abe33' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/88ef620f-170f-4a0d-bade-3da0754abe33' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/db8ff852-b733-496b-b6a2-3ca58e7e2aed' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/db8ff852-b733-496b-b6a2-3ca58e7e2aed' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/db8ff852-b733-496b-b6a2-3ca58e7e2aed' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/db8ff852-b733-496b-b6a2-3ca58e7e2aed' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8c113752-1981-4baf-a01d-2be24faf8729' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8c113752-1981-4baf-a01d-2be24faf8729' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8c113752-1981-4baf-a01d-2be24faf8729' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8c113752-1981-4baf-a01d-2be24faf8729' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/58f51826-9ad4-43ba-a627-d9a3ff7db59a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/58f51826-9ad4-43ba-a627-d9a3ff7db59a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Failed to load resource: the server responded with a status of 400 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/58f51826-9ad4-43ba-a627-d9a3ff7db59a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/58f51826-9ad4-43ba-a627-d9a3ff7db59a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Failed to load resource: the server responded with a status of 400 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be01631d-e2aa-493e-b03a-52eb711ee525' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be01631d-e2aa-493e-b03a-52eb711ee525' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be01631d-e2aa-493e-b03a-52eb711ee525' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be01631d-e2aa-493e-b03a-52eb711ee525' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dbe52aff-b9ba-4277-bb4c-0f5ce407944d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dbe52aff-b9ba-4277-bb4c-0f5ce407944d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dbe52aff-b9ba-4277-bb4c-0f5ce407944d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dbe52aff-b9ba-4277-bb4c-0f5ce407944d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/189a5fee-2514-4246-9e3d-fa0b9ee0a969' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/189a5fee-2514-4246-9e3d-fa0b9ee0a969' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/189a5fee-2514-4246-9e3d-fa0b9ee0a969' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/189a5fee-2514-4246-9e3d-fa0b9ee0a969' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d2ace3f3-0275-447c-8ec5-bc54ae52a9a8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d2ace3f3-0275-447c-8ec5-bc54ae52a9a8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d2ace3f3-0275-447c-8ec5-bc54ae52a9a8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d2ace3f3-0275-447c-8ec5-bc54ae52a9a8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/06e28c1d-8125-4dd8-b30b-0293822ebda2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/06e28c1d-8125-4dd8-b30b-0293822ebda2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/06e28c1d-8125-4dd8-b30b-0293822ebda2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/06e28c1d-8125-4dd8-b30b-0293822ebda2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51d8ece0-a5cd-45fa-8aac-d9fba1edd5cb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51d8ece0-a5cd-45fa-8aac-d9fba1edd5cb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51d8ece0-a5cd-45fa-8aac-d9fba1edd5cb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51d8ece0-a5cd-45fa-8aac-d9fba1edd5cb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4d2f7d0b-7ca5-4c1b-81d3-40f566c6aace' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4d2f7d0b-7ca5-4c1b-81d3-40f566c6aace' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4d2f7d0b-7ca5-4c1b-81d3-40f566c6aace' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4d2f7d0b-7ca5-4c1b-81d3-40f566c6aace' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/404932ee-af44-4a32-92cf-ea650cf7e165' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/404932ee-af44-4a32-92cf-ea650cf7e165' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/404932ee-af44-4a32-92cf-ea650cf7e165' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/404932ee-af44-4a32-92cf-ea650cf7e165' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a5c67fb5-924c-47e3-8845-b22eb453a2e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a5c67fb5-924c-47e3-8845-b22eb453a2e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a5c67fb5-924c-47e3-8845-b22eb453a2e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a5c67fb5-924c-47e3-8845-b22eb453a2e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d16e0ba8-91df-4a4e-9d26-c00ba7e74fac' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d16e0ba8-91df-4a4e-9d26-c00ba7e74fac' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d16e0ba8-91df-4a4e-9d26-c00ba7e74fac' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d16e0ba8-91df-4a4e-9d26-c00ba7e74fac' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e1b59c73-6858-4910-8915-5ec4e4c163e2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e1b59c73-6858-4910-8915-5ec4e4c163e2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e1b59c73-6858-4910-8915-5ec4e4c163e2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e1b59c73-6858-4910-8915-5ec4e4c163e2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2856ae49-85cb-4a03-8460-4b566440cff6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2856ae49-85cb-4a03-8460-4b566440cff6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2856ae49-85cb-4a03-8460-4b566440cff6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2856ae49-85cb-4a03-8460-4b566440cff6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9ccf7f11-ddc0-4ce9-b4cc-2028d15166f4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9ccf7f11-ddc0-4ce9-b4cc-2028d15166f4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9ccf7f11-ddc0-4ce9-b4cc-2028d15166f4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9ccf7f11-ddc0-4ce9-b4cc-2028d15166f4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d5894097-ccaf-42d9-9540-9bd443506e9f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d5894097-ccaf-42d9-9540-9bd443506e9f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d5894097-ccaf-42d9-9540-9bd443506e9f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d5894097-ccaf-42d9-9540-9bd443506e9f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:15:4056
    at D (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:215050)
    at v (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:210660)
    at eC.load (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:260325)
    at ex.ensureProvidersReady (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:250444)
    at ed.initAdsEffect (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:242308)
    at Object.onFinished (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2995:2699)
    at ew.finish (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:259194)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.finish (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at ew.runCommand (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256779)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256353)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at onEmpty (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:257646)
    at d (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:251040)
    at S (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252242)
    at o.<anonymous> (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252295)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at nQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:858:129)
    at oQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:868:318)
    at mQ.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:869:83)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at LL.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:652:270)
    at ry (https://imasdk.googleapis.com/js/sdkloader/ima3.js:364:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:362:297)
    at n (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:15:4056
    at b (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:215219)
    at v (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:210665)
    at eC.load (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:260325)
    at ex.ensureProvidersReady (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:250444)
    at ed.initAdsEffect (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:242308)
    at Object.onFinished (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2995:2699)
    at ew.finish (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:259194)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.finish (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at ew.runCommand (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256779)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256353)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at onEmpty (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:257646)
    at d (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:251040)
    at S (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252242)
    at o.<anonymous> (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252295)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at nQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:858:129)
    at oQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:868:318)
    at mQ.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:869:83)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at LL.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:652:270)
    at ry (https://imasdk.googleapis.com/js/sdkloader/ima3.js:364:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:362:297)
    at n (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:15:4056
    at O (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:214880)
    at v (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:210655)
    at eC.load (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:260325)
    at ex.ensureProvidersReady (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:250444)
    at ed.initAdsEffect (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:242308)
    at Object.onFinished (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2995:2699)
    at ew.finish (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:259194)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.finish (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at ew.runCommand (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256779)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256353)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at onEmpty (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:257646)
    at d (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:251040)
    at S (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252242)
    at o.<anonymous> (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252295)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at nQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:858:129)
    at oQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:868:318)
    at mQ.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:869:83)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at LL.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:652:270)
    at ry (https://imasdk.googleapis.com/js/sdkloader/ima3.js:364:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:362:297)
    at n (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:12:4922),Console error: 
[error]: error:  [Prebid] could not load prebid config,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e3a766c2-0315-4ebf-b6a9-5c763aad18a5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e3a766c2-0315-4ebf-b6a9-5c763aad18a5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:15:4056
    at D (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:215050)
    at v (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:210660)
    at eC.load (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:260325)
    at ex.ensureProvidersReady (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:250444)
    at ed.initAdsEffect (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:242308)
    at Object.onFinished (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2995:2699)
    at ew.finish (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:259194)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.finish (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at ew.runCommand (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256779)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256353)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at onEmpty (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:257646)
    at d (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:251040)
    at S (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252242)
    at o.<anonymous> (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252295)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at nQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:858:129)
    at oQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:868:318)
    at mQ.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:869:83)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at LL.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:652:270)
    at ry (https://imasdk.googleapis.com/js/sdkloader/ima3.js:364:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:362:297)
    at n (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:15:4056
    at b (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:215219)
    at v (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:210665)
    at eC.load (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:260325)
    at ex.ensureProvidersReady (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:250444)
    at ed.initAdsEffect (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:242308)
    at Object.onFinished (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2995:2699)
    at ew.finish (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:259194)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.finish (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at ew.runCommand (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256779)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256353)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at onEmpty (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:257646)
    at d (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:251040)
    at S (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252242)
    at o.<anonymous> (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252295)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at nQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:858:129)
    at oQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:868:318)
    at mQ.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:869:83)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at LL.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:652:270)
    at ry (https://imasdk.googleapis.com/js/sdkloader/ima3.js:364:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:362:297)
    at n (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:15:4056
    at O (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:214880)
    at v (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:210655)
    at eC.load (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:260325)
    at ex.ensureProvidersReady (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:250444)
    at ed.initAdsEffect (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:242308)
    at Object.onFinished (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2995:2699)
    at ew.finish (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:259194)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.finish (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at ew.runCommand (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256779)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:256353)
    at ti (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170610)
    at ew.dispatch (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:3:170407)
    at onEmpty (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:257646)
    at d (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:251040)
    at S (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252242)
    at o.<anonymous> (https://mobalytics.gg/poe/static/js/main.a914ab1f.js:2982:252295)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at nQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:858:129)
    at oQ (https://imasdk.googleapis.com/js/sdkloader/ima3.js:868:318)
    at mQ.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:869:83)
    at vy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:367:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:365:349)
    at LL.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:652:270)
    at ry (https://imasdk.googleapis.com/js/sdkloader/ima3.js:364:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:362:297)
    at n (https://mobalytics.gg/poe/static/js/9237.55c03e9a.js:12:4922),Console error: 
[error]: error:  [Prebid] could not load prebid config,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e3a766c2-0315-4ebf-b6a9-5c763aad18a5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e3a766c2-0315-4ebf-b6a9-5c763aad18a5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
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
[error]: Loading the script 'blob:https://mobalytics.gg/10cd1f72-b47a-4e04-b12c-21da06a9e096' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10cd1f72-b47a-4e04-b12c-21da06a9e096' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10cd1f72-b47a-4e04-b12c-21da06a9e096' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10cd1f72-b47a-4e04-b12c-21da06a9e096' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c07b45c8-c13e-4aa9-aea9-964b6225825f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c07b45c8-c13e-4aa9-aea9-964b6225825f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c07b45c8-c13e-4aa9-aea9-964b6225825f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c07b45c8-c13e-4aa9-aea9-964b6225825f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2a857d77-6820-4e9a-93bd-46982fee1b03' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fpoe%2Fbuilds%2Fcoldslinger-cold-dot-elementalist-league-starter&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2a857d77-6820-4e9a-93bd-46982fee1b03' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fpoe%2Fbuilds%2Fcoldslinger-cold-dot-elementalist-league-starter&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2a857d77-6820-4e9a-93bd-46982fee1b03' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fpoe%2Fbuilds%2Fcoldslinger-cold-dot-elementalist-league-starter&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2a857d77-6820-4e9a-93bd-46982fee1b03' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fpoe%2Fbuilds%2Fcoldslinger-cold-dot-elementalist-league-starter&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8f21acb2-4469-4bc6-aecd-3805bae1ed9f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8f21acb2-4469-4bc6-aecd-3805bae1ed9f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8f21acb2-4469-4bc6-aecd-3805bae1ed9f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8f21acb2-4469-4bc6-aecd-3805bae1ed9f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2f8c0683-9667-46c3-9aba-a28e15f27b5e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2f8c0683-9667-46c3-9aba-a28e15f27b5e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2f8c0683-9667-46c3-9aba-a28e15f27b5e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2f8c0683-9667-46c3-9aba-a28e15f27b5e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/12f66c7a-e1fa-4944-8de3-6929cf06f825' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/12f66c7a-e1fa-4944-8de3-6929cf06f825' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/12f66c7a-e1fa-4944-8de3-6929cf06f825' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/12f66c7a-e1fa-4944-8de3-6929cf06f825' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c83d41c7-52d5-4523-8ab8-eced87084ec6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c83d41c7-52d5-4523-8ab8-eced87084ec6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c83d41c7-52d5-4523-8ab8-eced87084ec6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c83d41c7-52d5-4523-8ab8-eced87084ec6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11d0f9e5-f73f-46ee-9737-9c2e47fa70f6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11d0f9e5-f73f-46ee-9737-9c2e47fa70f6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11d0f9e5-f73f-46ee-9737-9c2e47fa70f6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11d0f9e5-f73f-46ee-9737-9c2e47fa70f6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/00d7bb4a-489f-422e-ac92-92d7c578afec' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/00d7bb4a-489f-422e-ac92-92d7c578afec' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/00d7bb4a-489f-422e-ac92-92d7c578afec' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/00d7bb4a-489f-422e-ac92-92d7c578afec' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e2284eba-026d-4caa-810a-015bbc826777' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e2284eba-026d-4caa-810a-015bbc826777' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e2284eba-026d-4caa-810a-015bbc826777' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e2284eba-026d-4caa-810a-015bbc826777' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9823ed3a-dcc9-4873-8f9c-3cbec8918496' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9823ed3a-dcc9-4873-8f9c-3cbec8918496' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9823ed3a-dcc9-4873-8f9c-3cbec8918496' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9823ed3a-dcc9-4873-8f9c-3cbec8918496' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
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
[error]: Loading the script 'blob:https://mobalytics.gg/ca5617ce-de24-479f-be0e-b7a5984a0218' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ca5617ce-de24-479f-be0e-b7a5984a0218' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
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
[error]: Loading the script 'blob:https://mobalytics.gg/ca5617ce-de24-479f-be0e-b7a5984a0218' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ca5617ce-de24-479f-be0e-b7a5984a0218' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e89a491d-d1a3-4ac3-84a7-a4988c52cd33' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e89a491d-d1a3-4ac3-84a7-a4988c52cd33' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e89a491d-d1a3-4ac3-84a7-a4988c52cd33' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e89a491d-d1a3-4ac3-84a7-a4988c52cd33' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5a916c43-4c01-4967-bbc9-79e4ef565188' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5a916c43-4c01-4967-bbc9-79e4ef565188' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5a916c43-4c01-4967-bbc9-79e4ef565188' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5a916c43-4c01-4967-bbc9-79e4ef565188' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ce50e279-8d6f-44a4-890c-745201363525' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ce50e279-8d6f-44a4-890c-745201363525' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ce50e279-8d6f-44a4-890c-745201363525' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ce50e279-8d6f-44a4-890c-745201363525' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e6]:
        - link "Mobalytics" [ref=e8] [cursor=pointer]:
          - /url: /poe
          - img "Mobalytics" [ref=e9]
        - generic [ref=e11]:
          - link "League of Legends LoL" [ref=e13] [cursor=pointer]:
            - /url: https://mobalytics.gg/lol
            - generic [ref=e15]:
              - img "League of Legends" [ref=e17]
              - generic [ref=e18]: LoL
          - link "Teamfight Tactics TFT" [ref=e20] [cursor=pointer]:
            - /url: https://mobalytics.gg/tft
            - generic [ref=e22]:
              - img "Teamfight Tactics" [ref=e24]
              - generic [ref=e25]: TFT
          - link "Diablo 4 Diablo 4" [ref=e27] [cursor=pointer]:
            - /url: https://mobalytics.gg/diablo-4
            - generic [ref=e29]:
              - img "Diablo 4" [ref=e31]
              - generic [ref=e32]: Diablo 4
          - link "Path of Exile 2 PoE 2" [ref=e34] [cursor=pointer]:
            - /url: https://mobalytics.gg/poe-2
            - generic [ref=e36]:
              - img "Path of Exile 2" [ref=e38]
              - generic [ref=e39]: PoE 2
          - link "Path of Exile PoE" [ref=e41] [cursor=pointer]:
            - /url: https://mobalytics.gg/poe
            - generic [ref=e43]:
              - img "Path of Exile" [ref=e45]
              - generic [ref=e46]: PoE
          - 'link "World of Warcraft: Forever WoW Forever New" [ref=e48] [cursor=pointer]':
            - /url: https://mobalytics.gg/wow-forever
            - generic [ref=e50]:
              - 'img "World of Warcraft: Forever" [ref=e52]'
              - generic [ref=e53]: WoW Forever
              - generic [ref=e55]: New
          - link "Destiny 2 Destiny 2" [ref=e57] [cursor=pointer]:
            - /url: https://mobalytics.gg/destiny-2
            - generic [ref=e59]:
              - img "Destiny 2" [ref=e61]
              - generic [ref=e62]: Destiny 2
          - link "Marathon Marathon" [ref=e64] [cursor=pointer]:
            - /url: https://mobalytics.gg/marathon
            - generic [ref=e66]:
              - img "Marathon" [ref=e68]
              - generic [ref=e69]: Marathon
          - link "Slay the Spire 2 STS 2" [ref=e71] [cursor=pointer]:
            - /url: https://mobalytics.gg/slay-the-spire-2
            - generic [ref=e73]:
              - img "Slay the Spire 2" [ref=e75]
              - generic [ref=e76]: STS 2
          - link "Deadlock Deadlock" [ref=e78] [cursor=pointer]:
            - /url: https://mobalytics.gg/deadlock
            - generic [ref=e80]:
              - img "Deadlock" [ref=e82]
              - generic [ref=e83]: Deadlock
          - link "Overwatch Overwatch" [ref=e85] [cursor=pointer]:
            - /url: https://mobalytics.gg/overwatch
            - generic [ref=e87]:
              - img "Overwatch" [ref=e89]
              - generic [ref=e90]: Overwatch
          - button [ref=e92] [cursor=pointer]:
            - img [ref=e93]
        - link "Gamebase Gamebase Reviews, Previews, & More" [ref=e95] [cursor=pointer]:
          - /url: https://mobalytics.gg/gamebase
          - generic [ref=e96]:
            - img "Gamebase" [ref=e98]
            - generic [ref=e99]: Gamebase
            - generic [ref=e100]: Reviews, Previews, & More
      - generic [ref=e101]:
        - link "Download App" [ref=e102] [cursor=pointer]:
          - /url: /lol/glp/download-welcome?Channel=web_dl_btn&utm_campaign=top-poe&utm_medium=homepage&utm_source=web
          - button "Download App" [ref=e104]:
            - img [ref=e105]
            - text: Download App
        - generic [ref=e106]:
          - button "Sign In" [ref=e108] [cursor=pointer]
          - button "Settings" [ref=e110] [cursor=pointer]:
            - img [ref=e111]
      - generic [ref=e113]:
        - link "Home Home" [ref=e116] [cursor=pointer]:
          - /url: /poe
          - img "Home" [ref=e117]
          - generic: Home
        - link "Profile Profile" [ref=e120] [cursor=pointer]:
          - /url: /poe/profile
          - img "Profile" [ref=e121]
          - generic: Profile
        - link "Build Planner Build Planner" [ref=e124] [cursor=pointer]:
          - /url: /poe/planner/builds
          - img "Build Planner" [ref=e125]
          - generic: Build Planner
        - link "Tier List Tier List" [ref=e128] [cursor=pointer]:
          - /url: /poe/tier-list
          - img "Tier List" [ref=e129]
          - generic: Tier List
        - link "Starter Builds Starter Builds" [ref=e132] [cursor=pointer]:
          - /url: /poe/starter-builds
          - img "Starter Builds" [ref=e133]
          - generic: Starter Builds
        - link "Builds Builds" [ref=e136] [cursor=pointer]:
          - /url: /poe/builds
          - img "Builds" [ref=e137]
          - generic: Builds
        - link "Guides Guides" [ref=e140] [cursor=pointer]:
          - /url: /poe/guides
          - img "Guides" [ref=e141]
          - generic: Guides
        - link "Creators Creators" [ref=e144] [cursor=pointer]:
          - /url: /poe/creators
          - img "Creators" [ref=e145]
          - generic: Creators
      - generic [ref=e147]:
        - main [ref=e148]:
          - generic [ref=e152]:
            - navigation [ref=e153]:
              - list [ref=e154]:
                - listitem [ref=e155]:
                  - link "Path of Exile" [ref=e156] [cursor=pointer]:
                    - /url: /poe
                - listitem [ref=e157]:
                  - img [ref=e158]
                - listitem [ref=e159]:
                  - link "Builds" [ref=e160] [cursor=pointer]:
                    - /url: /poe/builds
                - listitem [ref=e161]:
                  - img [ref=e162]
                - listitem [ref=e163]: FROSTZOOKA (Shotgun DPS Creeping Frost Elementalist) Build Concept 3.26
            - generic [ref=e164]:
              - generic [ref=e165]:
                - button "PoE Build FROSTZOOKA (Shotgun DPS Creeping Frost Elementalist) Build Concept 3.26 presentation Witch presentation Elementalist End Game 3.29 CotA By FastAF ⚡ Follow Updated on Jul 24, 2026 74 Favorites 0 Share" [ref=e168]:
                  - generic [ref=e169]:
                    - generic [ref=e171]:
                      - generic [ref=e172]: PoE Build
                      - heading "FROSTZOOKA (Shotgun DPS Creeping Frost Elementalist) Build Concept 3.26" [level=1] [ref=e173]
                      - generic [ref=e174]:
                        - generic [ref=e175]:
                          - img "presentation" [ref=e176]
                          - text: Witch
                        - generic [ref=e177]:
                          - img "presentation" [ref=e178]
                          - text: Elementalist
                        - generic [ref=e179]: End Game
                        - generic [ref=e180]: 3.29 CotA
                      - generic [ref=e181]:
                        - generic [ref=e183]:
                          - generic [ref=e184]:
                            - text: By
                            - link "FastAF ⚡" [ref=e185] [cursor=pointer]:
                              - /url: /poe/profile/fastaf/builds
                          - button "Follow" [ref=e187] [cursor=pointer]:
                            - img [ref=e188]
                            - text: Follow
                          - link [ref=e189] [cursor=pointer]:
                            - /url: https://www.youtube.com/@FastAFgaming
                            - button [ref=e190]:
                              - img [ref=e191]
                          - link [ref=e192] [cursor=pointer]:
                            - /url: https://discord.gg/fastaf-realm-706744387840770119
                            - button [ref=e193]:
                              - img [ref=e194]
                        - generic [ref=e197]:
                          - text: Updated on
                          - generic [ref=e198]: Jul 24, 2026
                    - generic [ref=e200]:
                      - button "74 Favorites" [ref=e202] [cursor=pointer]:
                        - img [ref=e203]
                        - text: 74 Favorites
                      - button "0" [ref=e204] [cursor=pointer]:
                        - img [ref=e205]
                        - text: "0"
                      - button "Share" [ref=e207] [cursor=pointer]:
                        - img [ref=e208]
                        - text: Share
                - generic [ref=e210]:
                  - generic [ref=e211]:
                    - generic [ref=e212]:
                      - heading "Path of Building Code" [level=2] [ref=e216]
                      - generic [ref=e219]:
                        - textbox "Path of Building Code or POBb.in Link" [ref=e223]: eNrtPWtX20iyn8e_Qodz9n4JgX5LnZvMHp6BDAQGSDKTLzktqYWVyBIjyRBmz_73W92SZclYxoDJztx7Z3YZW-qqrq6qrlc__Pqf30eJc63zIs7SN2t4A605Og2yME4v36x9uNh_6a398-fB61NVDk-i7XGcmDc_D356bT87ib7WyZs1SdecUuWXuvw4QUW_AKorlZZDnaXH6muWv83CN2vvs1SvOb5Kw7icfAsSVRTv1Ui_WfsUl8FwzVFFoNNwZ_p8L9EjnZYqiYsSAIYqV0Gp8yPT_da4zI6zEFpFKikA30jF6XkWfNPl2zwbX8Gw1pzrWN9UjQ6PT0_OLlq0xWmbNhjbT69PE3Wr8_NSlU4Bf96sbQGL1KU-iKH3a5WMAQ8jjBG-QaQUxBVkbXMh5PY4L8pdNYKPDQaPeR5HG1xKwjlhfRjOr7QOp0AbHm390wd0muu9KNJBGV_rnTwud4YqDVpdow23l-THtD8eJ2V8lcQ6nzJoQ4o-kIM7PWCE-hpfZCD43dPzpi11mUQSbWAmXIzcxXDZVGSYg8jQhnCl5zKvl-GghEMA6_QoEeUYbXhEcI_zRZDbCYjrEdQeXqZxqduARPINjgXhglFMvEWd3gU2vVKPbwhBJPS7CPg0i4ssfQKD26DAYxeLDSwFBqJ7QXfGSQKWpA3ZK_8zXej8WpVxl8je9jvZyI_TGSGAAD0kNigjHsOyd7bmWp1E1cw5U2E8Lo51metiimejV_jHKlU7WTFVt36um6anOgcjV3Yg0D0A5zrIwC4-BMT08UDIozjSy7d80DhqgIdS87hx7J0v224-YopB2t69ptaCP4K8M_AFy7U8z8bJki3Lqf3Fwu2fUX90WrJe47Krv7eaLULYaUl6Z9hh2mKwxxcgbLfEXPZTeJ0Z03A_c6y52js4nRpYTAXZ4ES6SIp-q346vC3iQCXH6ns8Go_Ad12ob3raoSs82a-9l8MyBUvXB0yEQL2eaD_O9aMAd7IkfBzgUGVFHySlYuE0bc0ctiicCV6Z1odpMI0vyCK8H9LcuoBWGLSoBwNyBhPRRF5-opeGmXZTT-hlgpOqs0ud1j3etrSbbLiLwI60DoZvIVg9U6VezqA3rWS_a7UMNo07DF6EdQ5_CV0OYJZTZIN5GBPsSY9LVyxCMp9rYDo2Fvb9QK7tpTq_vD0fxjppj65fE9oAE-p21NVSsJb1bQRtEVC0XJfzuLIU6HzOMORtECbqf3q15pPKw-V81kMpvFZF2zzDXEL3MLCCaPOuf1JoCLcBINQz-QRn_alR9tUkRskD4bbyUTZuOU3CyMJhVO2XGsXEw1QJ4pkOx0HZ5VkvdydJ3nYCGe_MWCi7FwwoTZJ5sL0GY6ssVfBtNwsvZ1mHFrAjSR4E0aXvfHx1BQbHKMWyCIznhLwhbofj_P7GJ6DT7cmOFznYpfFPG8_i78_qmsBh6V5mIO4MhS70-TPdvOz39K3ms33cL89jsBqmkmOLGsdZyyRvkH75QLK4VOZnG3bz0f45l90A8UNTtSoe1hrCo-kU6yUl1-mft7P48VLNl-pgLw3HuZkMS49hFmJeNxfxCCxqUeyqUjlhHVp_VHms0pLYSlqhVR4Mj0D6-ypJfLAFb9baT-03W33bj5NS57vwzHRqCJvFiCcceb1p64nm0-HoKstLJ1FFuRUE2TgtD1QxBMMsOCHMR74WKFIhFoSFwlVERUhqSjwpsB8FGGyDAT3TKhmB2HaqrzuTimGFizDpBoqqQEk_QMTjTDFEhYh8j3HJmfmoFI7WHP3dUHOq8vJ2Ul-09NonMJyijFNbmQDDmCRrzvkwu9kKr82AL7IsKZqipLq60mnYwXGRa-2oiZkLDC-sDMwXZwRUg3-tJg6g-Zfknlgn0nP_vf4vgbCL1jElwnzjnFC0LgjhBL5hhjFdZx7l3r87ldRD6J2sOWkGVIMdoZ63zrDH1hkRgBmyRUbXOWPMXReYIm8dc3i2jgmi68APCg0pfPcgIV4nWBpAJjmHZlRweEIRXucegZeIM6DURdRbt0RTCJn4uqBSAF3EFUC5CRChieBynVMmoWNPSuhScsACfyVf9zDl60wSztax5wnTkYvhpecKuQ5scA0VHMbAPAK0gPjWCREYkGBGDHO4S81IzGfQHA8-Sw-ve5J5AMldoJkjbh4zLNcpJx5Q4TLuwmg9eE5dDh1VnGYwfATMIS60BAo4UG3QwzCASCoYJoABUEPnZkyMQVK5TqVlKZHAXWpYQpA0cqJAOvTvAkMl9MYQjBxSMtMDJ8B-hoXByjhwisFA7VsEfZqOmZUZJQxYz7EH7AL2M7LOBRPwmTIAxRCBAx-Ar8IyBv66FMFf5kogDhNhhkoEMypEiUEMTyhxMVqXLugFpRQbFiIkQTGQESpGIHcI6ck6ATIYCI9hvl6pHgdRw3NXmkF7EiFgHkgBKAB-Qn8MoDjIHNhJDQUCE8MkKWBQoGPSsBZyM_grgIUCWEjXsetSo1bINZLHGDTRKjawBUZCgC-A08XAQIYEkCk5KKdAVBrJmYInmCRTi1H57VZ3DqQxzNMS5l5rrYKIehnCNKB2Gv70-sPZkf3w07Asr4pXm5s3NzcbV6ocZpH-DuHjRpCNNq8ACCbwy-JbnCQvDdrNLfhn-_J4J9r-M9jbj0fX3_ZTl964pzfnf379np3t3v6y_VHvXI_-vNn_8OeHT9d4e0d9ZkmQ8s8vw3G6s_My9Leuf5X6M7nYwcfx9y8HN28_vysucHT-cW-UfPztbf798vT7_lAdvbvB2_rl4Qn98_bg_Ah93AuHbPwlj8PTy-D3L-JbcZDv5B_28FboXcr9_Y8fxienhzfk6Pdx6X0uvuwfbe3_mnz-5e0-_pae7ZXDi6Pi7fvoNPvj5GDrSPwivnz45Inb36Mi-uXT7-IlPSQ7o9uSnSRxmOdff8mvXw6P5MubY3c3iemXt---3u4cfD06-xB_--3jwfa5-h79dl1cnPhno9_ku11x8nkUbx1fXry8iK7PvYP9Xz_7F5fvP4289x_3z_C7i5MbRA9_93_5_fxr5H8Ww3cfv-Tu1XG6tfXr0R-3H2-P5Wm-c31cYBcm6ddgaAW1OZHU62rZp6jEVn-zFs_K1VixNScu9agS8-b8dta6TduRvnbWckzb4b52dsJN29VBOZDdpva1iaVAbLqoHPGm8QLWMxo3YT68z0pt25qHky-vz43eFeBx8_KtHhXbtxD87JtscKYOXvsZ0_pcl5Unb8O8WSvzsTYeOlLjxDz_dayS2Lg91H56VK34pVk-aipigArcnonSK4wXt1fGxWwdHVVvtpKyRma6m_jAytfVBDlxOPF_9UO7jLc1pXpHJUFh6Y7TIBkDa9M6Lmx8bKJ8Q5tZwjSFn3AypiLJYMTbWXjrTJK4GeRN3z-9BhJr-LdJ5quETNFXQydAwmUlymNdqhAipc1DkG2xaUa3afHBp60c0AfbuQaDYcIsG_AYoB2Q5xWE6fu5LelawzHn-R8T9hPUfDHNditRrHWIxJOhzozcxk-Waaka1VHGpB-n6mhzVeNuxG_XAgNVZRPNsOv3NqHbC4ZZa-R3Xz3b4G0fju1k9QOHXB_EXejQrIhO8_l5bOhtOsuU3obPxqKmR2fSpVP3uTTHxJIM2wpDGBhkx1UHp8m4mMesrRtThtbhTPO7zOpt-GzMmvTo2C4d0-eDufV4_Tov8_ibLpZSsKbtvRrWtPyRKjbpdPVcA0OsUn0-zufPxM7rOwrVfvl8SmR7capumuDAkPKc_hDovDZSfoorREu5Quto_CROv3UE0H7cML798NkY3upk9fq2naU6GMamGnBX21ovZ3Wt9eqPVui1ynFPu1j9sD-kPvQYbsWJqe_NtUl3msyy4E6D52JE3ZHT9PTDZt2Bhh7LHxGAVlV364u2xrnqCOSzVkCNWb5pRDB99FxMb3rYXPFID3SukvAkOgy6Fr7zvBlo5-mzmZiqFyeLHNPP0iPGy1nU01wH8WRZrRlv62kz2tazZqxitUOddrFqwe7GRWB2FaZdubYfNwNtP3wuDW718cMMxnaWlY_00pY3x3EKopmh5YGWZDwaZWmzvvQ2S_Roxr7Pa9Cy7r2vW9RZwp4v8bM0OA0Rzl0qJo10OEPq0mrNls97YrNooJK6LjLPW-6l9VrnrJdsXjwbsyY9bP5gFQNT2adc01czajXz4kcrFHS_UJUa8lbBS_QAXu4nQGofN9svZ_h559WP5qglYCFPWyT-MDP8SasrII78FSzxWRZ865PseQkcmi_ZO69-tGQtAQsl2yJx-ZBJLse6UusEOu2GTL-OY-Dl2G5-atjVfvhcocSUnFUHTeY8zEiVs8Fh-3Ez0vbD5ytvTDv50dMVPy3RWrbQr9K4KLdzlYYdltsntdNuMb37-LkUbEKWU9G1ai1rTmQBp7-luugm_HPeNsOf8-65eNB05TR9rZoPVSkpLvWc0pZ9OlPZss-ea7zTLu5MtPrjuS7tomK1bGg-2qlmWxymV-PSYnuzNoJM54s_jiJzaA4GUeb2RODe_v7ezsXhx716u1AbxA70Szoe-eYQWPXfZvX09bm2WxqdYuwX1cc3ax9jfWMJ2QUGx0lhBpUk6qrQzUYZuy5YU54A3AJsttVB3Jyym49r2qAf0953nZcw3k8qD_JY99LVvL-HqKpDs1_WbK_qw2ZOqvUjqrZd7pitTXZ3bw-n7FnBfiym3N47HPNyAezh6EolvT3Xb-_hRGlWhkFV4ygOzM60xSI368hVqwV8CYJxroLbBfLeaSUzc3HYI3t9CKqX_cDV6bk-6PrtAq7ak3u9XK3e9oPv6kD1jr162Q_cbBjPUnuydT6WptUCTO-z1Co5TJpp8XY-OrDJ3arrXIQn5VDn9ea3PkzHYKMmTRZOnDz2x2X_NG61WMAre76lh0PmXT9odXCjZwzm3QJL1Dm90MPQdpt-VNUG_15Dtgi02uzby7966_ACEdSbLnrYX71dwITJCYKe8devF0ySqgh-ncVhVTjpmS4zzRYZDMjAno7Gbol_OprZPfJPxwgJdvGtV971237wD2VsQpo5WKrQZSkkZlI9DYOZW0_DcAHZRznO9aMRnM1GIlPYs8UxSLOrey7w5O0iy1Fv9n40hmpL-qPB7Y75R0Nb-w_xsIYRLHQATZsF86Mcp7vAjHLB3FgSlSVrviGZju5BuCpXOHekD8ZYTfD6zOYiG1A1uQcR-PKDBdHicpiagx8HWiXmqoEseRrCO2dTn4LMnGIbX0F6PEF3Mi9Gn8phSe5lZQE47YmGXXNY7qk8TPXodg6ifrpeb06yOnvIwORZ9QmN8zI3NZM_s2z0u6n0iOpzvauT1js5IebejUFyudW4SU-m4W9v1l5iUZ1aem3T4XpnqfncbCztxzEudHVGvirQWIjWdlCDpb0V9AxS6vL2lfPh_eGvH_YGn1QZwKT5LwAt_rtw9m714DSPC1NcCpx3-kYngw9p_MdYO4e7rxzfY4EIBCKCRxHlLtHMj4Q0B0mQ4CxQ3BWRRh7DIpJMe0RF2CNc-1RH5uKLgaXGsuaV4_HBUTyCYDx0yuyVAy9HV0kcwAR55aCB-IcpVNV7mkaVijpVYOZUkdmAz2tinNz8N8Z5DXayFLQALBe8MHfZpKFzm40d07bUzs0wTrSj7AyDBv6tM1lhdwIFjC4cDZoD-SlQ7JSgHI5s91QpzWB2B5ZzClCl6dPB6B9mAdvqnzOtpVTxnjGAxQIabP3hOAvPVHqpndz8fbOGNvhaLd-6QtHbgtzbgt7bgt3bYnLmzJZ2uipIuip4tnW2Nzi4vUozo2xvk3g00jlIyAe7dlf3PJ9EWBPKtY6oFjwIPBVKpEjgh1pxL3KJi0XghTTyEWIu8kTIJCXK15KEQnR0zxVdbXvhGYnu6u-lNrQ5YGycw7SEKDC-NLOtq1GmZuDYwoBzE5fDao9iVf8ZvMDkHwZXVWqa3Y3nTG_1gZaebdnf5C72v44GzJMvnSPfvbTMs6tb4O1Nr2gD5RGGZegRFBGtSORq4gmJsMuDyPUoQi5zmQo00SjgwoP_Rq5ylfADKbXrdkXLZkSLueEyMFenl-VweUmy-Q37EdiJuzs2tVFjn8Db_8XlxebI62N8BYp3brZklAtmowxCgpXr-14YeH4kNSIcKxxQDwQXqJBw5gVKRFFEJAJngAVYNN_3cSS8kAe0IzLudkW2tIhwR0bVTvTZ6VTVqkAN3AfPthcYVzDmmTEJ070OLYv9FxcynyPk8zLLR8CvOFfJYDdWIwgfnDOjsC0RU0E4DUOFJKeMgR31A43AyiKCQ097CIPj116AOKYcCeQroRnHQkQU5jKm3Vnp0YH9dKb_eOWIzhTFA9IReI_lrOWIe5Rj8EIwI6tOHPACm0dmSdQ8qtIvp06VzPwOLE7T5lLFqaO6TRyIGn8BRRh41mlX3t26_dSp4lygQBVVV_-CoCICh_3vrTAsHGw7xsIxB-EncUFPk9YO97-Hhxf3tnDvbeH1K6yYo7A7Ks9NEH9xE6d6AJnP9a2zrZOyra8cSRTIECEvJFRFzCOahkGIdYi4jAgFJaEQqIbQjiov4JEfEo9ioTUh2tNRV19ZW1_drr6-oLTjUl4w1Fa9bpT6AnffVorJKmtk1WNqS-C5N7U4c57PM0BTvXpBPGJaVfU_a7HqUp5zpsq_lj-6P4JchQbO0y93XhQKOWB2AxJVuZ6GpJAN3fV8DEJKiZWnpTlEHUGMEjEUCsiFBHIhAsW-MqfmQykYFdLXvmvPRjPGAg4AeoFZnEmBrJkgVtWI2zYTVvmMsysGtM8aUnJH6bANcgmrT9bU7rKF9u8XwXhzk9qdbDQyyg9Guxxq5zQuB2eQUJeVc7kG21_NEAhjUP1xGxhY37wEPADub3iDzjyGeS8H7YWBuxAQ5LjdGElR6bmcYwKJsC9UyAKiBFHYi5ivKEPMcyXysHGgXEKgxHjIiaIBoiJiZDZbrnc2vnIIGtQHXV852y_hX2erpUZ0Jpo6ABeFnS3_tiiMN7WAA9mjN6I3pzb3WoKHfDuExsntdG7UGHW47lR7jwpnqK6188JcS2StUb2eOLFBNaK7s6yFybrj9iEe44sP4rKK0Wrd_7unw3Ku8l6Axpob-MZmf4ADwVmoR4P3OsizkbH2ubMT50ECIpxRT4Lde_TTFVJ2Ajw3kDh0IwWBHeOcRESEXIKOMgp_XMYDponLsSdU4AcI-RT-DRTxIgmq7tMl9fMt_Lvd0k8-k6BNpO6YXSCV7nQDwtZtpc5eFAEgpOS3g4s8vrwEfljMDmR5-9roMUz6_UQXQ0eb27QcXt9aAMmCJG2sM15a3HXS9loubes2fIPa-pFjkqMK4cDUcuoAMsryLj4TH1YxJCAFN52D5g4hbDS1pnGhQf1tijHYS8LcXNDsbKvSXE7y_w46tCc25k2MI31prIiR7xg49ek2HxWQH2jH7udvTDp1Ra9Npy4b1BFR1bD-Mr9lJxcSAUESE8h0qAoEli6VEQaTHSLiudQlkOpCchuIyIWsyFwpwhHkSC71Qiwo604VsWiqnLWnykxEQEjHPt-N8wYUtRtM7oaqjft7rXL_1lYfTQ0TYh3nPMjyYGiqGh3AapHB8LpqMKCyUfZGkU1uZDS5RlFXNUHht8c5zFQFal2Mc1tkNXa_em2mCpvMyXUn1MrcWuxUKZbx1gbrBNmkLG2mo8m0WtlUeyb-3R0Bnl-bP74tjH8805G5aSnLB6fqUqXOJ5B3J8xgUnp-4DPJwsj3sVDKJwFFjGJQUkkoBKsemPJQM8V9xoTPwKIjT3EegD2Xs9WzRjdbqnn28qxjw-lMBo9RTzxRX6YRGcFRRzWnNJzpnYHFgHSgp29qHCZXmvu6TppbqByIGCCqcEAtINYYmzo6mFW7xBMbJazih-pi_b9_AIHJ_PBXQeBUFM47FXwbfFR5GhdDe5JelVPrhwmm_eZPYCHuBBjMuyfAEBDQdjJyBXoYRRAI-kHkMYKU60kMahpIDcGFK2hECRWgpEqSMFIMohAUeL6rqWCK-rMl-_4A2IQYHQUVpGs5MetkSpO02JrOmUBAzCkjVXVAZS66mLdoM2M9zZ3ndpnHWtGByd1nXtaau_e9zJVzmeX6f5njn6utdK62boFyFhPjbxLwYnCS3n53tkZjE-W21UkoqiGGhVSbkkCDL47A77qh8BX2CecR8cwPETDXpUEYqDAQjBDQNUVBEfWMofPctragtraQVqUuSbIAAsDC-TSMC3A5ltLdLBtN1hWMTky3u3Xzqr3vAGGCVe2Y3X4G1MS4dVmyilvhmUFR7dmv3hofDu9rbZ_T4m9vt-YtPEDyCClApsIB_Cknnv8gy9O2DoTGlfmhD3m1ggzaJVSzyIVk2ff9iEVYhiFHGEc4FJIGHCmtQE2gNSiJZKKrA9ib6-xmLEnX01W1WyMf1glHmpKMtSnV3uL5CxT13MedbKRdBLZduLY6jHrKPl5f2eeuZk1uwq17_5uq0SNNzrzFj51hPIJpGQDfIAMDZ3kNPJwNqlzsal8SRBElBEUhYyiiYYgD7TIZSeS6KvAk01ohrc3vciCqcRAFPnYjUMmwq2eyJ6hq6xkmMyEV6VWdri9rBFy_pbRPsR6kHaSzPlJtmx4Q3H54PoShDHayPB9fgbX8v6BQM4sTx1tvD3cGu8r3k-kmmncq1I7dyGgvK0iro_ydfTSQM0qGI48QFciIq4iEFCnkBkHoIYmw5qFSAdG-73kyYpSKAHOlPGb2hXhhb-UFtQ0X74ZAFBQqNxdhm50q9ea9maU3XQUsvLvGNnchzgmrAlUd4_wni8DYnSeUrQSS0hFEaBOxnMfJNeQCjWBMvHFy013VRhxzIYDjMvSVK1wSuNr1XWUyJ596gUs5pP5Shhh5ASY-ogIHAVGKBZEfkNklpPlymVlNaoKND4XdRaBNWAqp0ldlQuua3rgwdaNwQNxlhSjotOU0nd8Z52YbU1Zl8A-Q4XOHBF5vMfRCjUz5YLotbXah2hMMIgDmIcQV5MEIBYRLBnNScE3AbrvmmtkIAoLIVZq6WJqFbRxywrCGAAF1pCbaoqJoZuEPo3sSgRdE3tOiVTY0C4C51n_q9cqUVtuOKkvbTRqmqCZLNSaPNZtJq3CjPv5hqisDbQov5liQTUEawLqNEb2trfzFV3awXGpSTzYvdGa1PTmlOu7cFUiGGvueVJEIuAwj4noaw_985HkIIkdQHLNBxfMgYnQjFbGAQd5KwEIjjX_AxOZLW2d3XiZbLa78hWY0QfMECISNze2-zl6pc1MHsqW9RnrnVTmwLToIa0UgScR9FvjUVwhLGqFAujrkoOrK9zSXPPS9yPOwBLFKhUPtwf-Vdonv9pa3CFngLFlLHFsjczDUqX-gA2SF6cz6RPXLHY5ZKrClABhJ81Bdmd1FZjuhsQBlcjt4C1yEuXo4Go1Tk-CZiqk5EmcEZ8qj3qQ86sSRVY56YXbSaB6CJgiDVlkWLsTT3ls6A_f332KKlzIb9j6CYk5AsDPUulTDzoK_1ohJHggJcRgPkJTM9bmIfO4Jl0co8gTBoIC-Cn0B4b80W1SJhBzUDX3Ou1UsjFCP8fCeYjzYssajm5B21wf-SsaDPKUizpHwpO-DyVAgmIgwjjUNXYFVgBR1NWOhlBBQC6kgvmMB8rEvhBuhUCJJQ9lbd5wtO_6nKuIc_X9FfFZvzJXX_WchurdhJ8AQc3n4qf_h7Mic3qjO20_u75zcK-5NSOkDmN6J0VxtTu6DsauVM9sxHD7FgBoE9tVhCNCzF6RXmKpNE6070yc93UeBTspZAsg8Au7AVwdTJidPKmyVJWrdxj75LdD72eac36irWUrYUpTMIFqGnYtxkBXgmD8gsYIBiRUM6FE45g0IPwDRXG2nK-AIWdVoHqJv1VWjT-LHnLknnkwBeTCGKYB8XJd0VfznK1AGvILpgVdAB3ugJkybiyeZGPLUGclWwMCnupCWIhC8yAnWv_7RdoKtHwRZ0gku5Cd9Kj_JE03CwwhofoXjKTpdBT8LMLiPMxT8ydZNrMoT41XZrKeqejtgfCRT2JNFy1ejYw9R9WpNvxUq0sdaWroCg0WXDLrrXy9q25vWDxrN2ps5COqfSWojaP1y0hOidvZEM4NXowKPjgVamsAfM49a48fuYxC0lBcv64LbMPgxXOdP9S4rEhtblTlcWWZBH2vpWyJh9wGa5aO2EPnjzCdZjRBW5txWkfOyx42pxX2yFPdbCoy9x7F_RRESf7IbfbojFg-1By3uPc6A3O2xKqZVd1maK05UqM_t9SaftDlyWFR3oNjrSewVl1kaxZe1Ya2-1FeVWPjmiVPGZaJb93C2y3Dtqy5N0c4WQu3apNm0svf9KivGORhsP8sSrdLafm_eCzy0O8iXgDO3cXZ-j2j5nmCE1zq3d0M8mMCTtHULSXUJyYNxVKvED4ez68y9cKeJCvQQmK_zGlpbIHsHZnMBqYvQPQCd37-egNH7oJrDrZP7RpsbTwnD9_WYN7dSNmD8Hpj2L5o3MPcOrfUbaA-gz_T1CDC7vjCF8Fh_-1FzkYE5YGfWKc_t_aZm7fJcJ9EUC-ZLjPHBjGmkd2rukGqEvizUwwVhdGyWpZ4USwjiQRQazZrthi6jJcv2Up2fscIqWkK6p4eKpLMsSewiSXt23gM58dkTAPMrzrIfpogv4-QkspfPAZH2Br1liZzsLnyE5jdXVDZ9IcwWcdEYth4mvt5sHFJ1lZf99vPg9eapKocnkb1XDHTw58H_AFOxnLA=
                        - button "Copy Code" [ref=e224] [cursor=pointer]
                    - generic [ref=e225]:
                      - generic [ref=e229]:
                        - heading "Equipment" [level=2] [ref=e233]
                        - generic [ref=e235]:
                          - generic [ref=e238]:
                            - img "Mystic Refractor" [ref=e241] [cursor=pointer]
                            - img "The Taming" [ref=e244] [cursor=pointer]
                            - img "Command of the Pit (One Abyssal Socket)" [ref=e247] [cursor=pointer]
                            - img "The Devouring Diadem (Additional Minions + Minion Life)" [ref=e250] [cursor=pointer]
                            - img "Carcass Jack" [ref=e253] [cursor=pointer]
                            - img "Heavy Belt" [ref=e256] [cursor=pointer]
                            - img "Ashes of the Stars" [ref=e259] [cursor=pointer]
                            - img "Diamond Ring" [ref=e262] [cursor=pointer]
                            - img "Mystic Refractor" [ref=e265] [cursor=pointer]
                            - img "Legacy of Fury" [ref=e268] [cursor=pointer]
                          - generic [ref=e273]:
                            - generic [ref=e275]:
                              - img "Eternal Life Flask" [ref=e280] [cursor=pointer]
                              - img "Jade Flask" [ref=e285] [cursor=pointer]
                              - img "Diamond Flask" [ref=e290] [cursor=pointer]
                              - img "Silver Flask" [ref=e295] [cursor=pointer]
                              - img "Quicksilver Flask" [ref=e300] [cursor=pointer]
                            - generic [ref=e302]:
                              - img "Watcher's Eye" [ref=e306] [cursor=pointer]
                              - img "Entropy Dew" [ref=e310] [cursor=pointer]
                              - img "Hypnotic Glimmer" [ref=e314] [cursor=pointer]
                              - img "Viper Splinter" [ref=e318] [cursor=pointer]
                      - generic [ref=e320]:
                        - heading "Passive Tree" [level=2] [ref=e324]
                        - generic [ref=e325]:
                          - generic [ref=e330]:
                            - generic [ref=e331]:
                              - generic [ref=e332]: "main:"
                              - generic [ref=e333]: "123"
                              - generic [ref=e334]: "123"
                            - generic [ref=e335]:
                              - generic [ref=e336]: "ascendancy:"
                              - generic [ref=e337]: "8"
                              - generic [ref=e338]: "8"
                          - generic [ref=e344]:
                            - generic [ref=e345]: Keystones
                            - generic [ref=e350]:
                              - generic [ref=e351]: Mind Over Matter
                              - generic [ref=e353]: 40% of Damage is taken from Mana before Life
                          - generic [ref=e354]:
                            - generic [ref=e355]: Masteries
                            - generic [ref=e356]:
                              - generic [ref=e357]:
                                - generic [ref=e358]: Critical Mastery (1)
                                - generic [ref=e360]: +25% to Critical Strike Multiplier against Unique Enemies
                              - generic [ref=e361]:
                                - generic [ref=e362]: Cold Mastery (1)
                                - generic [ref=e364]: 10% Chance to Inflict Cold Exposure on Hit with Cold Damage
                              - generic [ref=e365]:
                                - generic [ref=e366]: Leech Mastery (1)
                                - generic [ref=e368]: 5% of Leech is Instant
                              - generic [ref=e369]:
                                - generic [ref=e370]: Caster Mastery (1)
                                - generic [ref=e372]: Final Repeat of Spells has 40% increased Area of Effect
                      - generic [ref=e374]:
                        - heading "Skills" [level=2] [ref=e378]
                        - generic [ref=e381]:
                          - generic [ref=e382]:
                            - generic [ref=e388]:
                              - generic [ref=e389]: Carcass Jack
                              - generic [ref=e390]: Varnished Coat
                            - generic [ref=e391]:
                              - generic [ref=e399]: Creeping Frost
                              - generic [ref=e407]: Spell Echo
                              - generic [ref=e415]: Increased Critical Damage
                              - generic [ref=e423]: Awakened Added Cold Damage
                              - generic [ref=e431]: Increased Critical Strikes
                              - generic [ref=e439]: Arcane Surge
                          - generic [ref=e440]:
                            - generic [ref=e446]:
                              - generic [ref=e447]: The Devouring Diadem
                              - generic [ref=e448]: Necromancer Circlet
                            - generic [ref=e449]:
                              - generic [ref=e457]: Zealotry
                              - generic [ref=e465]: Herald of Ice
                              - generic [ref=e473]: Precision
                              - generic [ref=e481]: Discipline
                          - generic [ref=e482]:
                            - generic [ref=e488]:
                              - generic [ref=e489]: Legacy of Fury
                              - generic [ref=e490]: Wyrmscale Boots
                            - generic [ref=e491]:
                              - generic [ref=e499]: Summon Lightning Golem
                              - generic [ref=e507]: Enhance
                              - generic [ref=e515]: Summon Ice Golem
                              - generic [ref=e523]: Summon Flame Golem
                          - generic [ref=e524]:
                            - generic [ref=e530]:
                              - generic [ref=e531]: Command of the Pit
                              - generic [ref=e532]: Riveted Gloves
                            - generic [ref=e533]:
                              - generic [ref=e541]: Frostblink
                              - generic [ref=e549]: Bonechill
                              - generic [ref=e557]: Unbound Ailments
                          - generic [ref=e558]:
                            - generic [ref=e564]:
                              - generic [ref=e565]: Mystic Refractor
                              - generic [ref=e566]: Pagan Wand
                            - generic [ref=e567]:
                              - generic [ref=e575]: Summon Stone Golem
                              - generic [ref=e583]: Steelskin
                              - generic [ref=e591]: Automation
                          - generic [ref=e592]:
                            - generic [ref=e598]:
                              - generic [ref=e599]: Mystic Refractor
                              - generic [ref=e600]: Pagan Wand
                            - generic [ref=e601]:
                              - generic [ref=e609]: Arcanist Brand
                              - generic [ref=e617]: Elemental Weakness
                              - generic [ref=e625]: Frostbite
                    - generic [ref=e627]:
                      - generic [ref=e631]:
                        - heading "Comments" [level=2] [ref=e632]
                        - generic [ref=e633]: "0"
                      - generic [ref=e635]:
                        - generic [ref=e639]:
                          - generic [ref=e641]:
                            - generic [ref=e642]:
                              - button [ref=e644] [cursor=pointer]:
                                - img [ref=e645]
                              - button [ref=e647] [cursor=pointer]:
                                - img [ref=e648]
                              - button [ref=e650] [cursor=pointer]:
                                - img [ref=e651]
                              - button [ref=e653] [cursor=pointer]:
                                - img [ref=e654]
                            - button [ref=e656] [cursor=pointer]:
                              - img [ref=e657]
                            - generic [ref=e659]:
                              - button [ref=e661] [cursor=pointer]:
                                - img [ref=e662]
                              - button [ref=e664] [cursor=pointer]:
                                - img [ref=e665]
                            - button [ref=e667] [cursor=pointer]:
                              - img [ref=e668]
                          - generic [ref=e670]:
                            - textbox [ref=e672]:
                              - paragraph [ref=e673]
                            - generic: Share your thoughts...Type @ to try game data
                          - generic [ref=e674]:
                            - generic: 1000 characters remaining
                            - button "Comment" [ref=e675] [cursor=pointer]
                        - generic "select" [ref=e677]:
                          - combobox [ref=e680]
                          - button "Top" [ref=e683] [cursor=pointer]:
                            - generic [ref=e684]: Top
                            - img [ref=e686]
                  - generic [ref=e688]:
                    - generic [ref=e689]:
                      - heading "Video Guide" [level=2] [ref=e693]
                      - iframe [ref=e699]:
                        - generic [active] [ref=f1162e1]:
                          - generic "YouTube Video Player" [ref=f1162e3]
                          - generic [ref=f1162e5]:
                            - generic:
                              - generic:
                                - button "Play video" [ref=f1162e10] [cursor=pointer]:
                                  - generic [ref=f1162e13]:
                                    - img
                                - button "Hide player controls" [ref=f1162e14] [cursor=pointer]
                                - generic [ref=f1162e16]:
                                  - generic [ref=f1162e23]:
                                    - generic [ref=f1162e24]:
                                      - link "Eye-cancer AoE with【The Mystic Frost Golementalist】ft. NEW UNIQUE WANDS! Super Zoom Mapper 3.26" [ref=f1162e25] [cursor=pointer]:
                                        - /url: https://www.youtube.com/watch?v=YPKvBfkt9DQ
                                      - link "FastAF ⚡" [ref=f1162e26] [cursor=pointer]:
                                        - /url: /channel/UCFRY0sr8tXuefXmvRBzw_Fw
                                        - generic [ref=f1162e27]: FastAF ⚡
                                    - generic [ref=f1162e28]:
                                      - button "thumbnail-image" [ref=f1162e29] [cursor=pointer]:
                                        - img "thumbnail-image" [ref=f1162e30]
                                      - generic [ref=f1162e32]:
                                        - generic: FastAF ⚡
                                        - generic: 100K subscribers
                                  - generic [ref=f1162e33]:
                                    - button "Share" [ref=f1162e36] [cursor=pointer]:
                                      - generic [ref=f1162e40]:
                                        - img
                                    - link "Watch on YouTube" [ref=f1162e47] [cursor=pointer]:
                                      - /url: https://www.youtube.com/watch?v=YPKvBfkt9DQ
                                      - generic [ref=f1162e50]:
                                        - text: Watch on
                                        - img [ref=f1162e52]:
                                          - generic [ref=f1162e54]:
                                            - img
                    - generic [ref=e700]:
                      - heading "Stats" [level=2] [ref=e704]
                      - generic [ref=e708]:
                        - generic [ref=e709]:
                          - generic [ref=e710]: Character
                          - generic [ref=e711]:
                            - generic [ref=e712]:
                              - generic [ref=e713]: Attributes
                              - generic [ref=e714]:
                                - generic [ref=e715]: 167 /
                                - generic [ref=e716]: 147 /
                                - generic [ref=e717]: "385"
                            - generic [ref=e718]:
                              - generic [ref=e719]: Movement Speed
                              - generic [ref=e721]: 225%
                        - generic [ref=e722]:
                          - generic [ref=e723]: Charges
                          - generic [ref=e724]:
                            - generic [ref=e725]:
                              - generic [ref=e726]: Endurance Charges
                              - generic [ref=e728]: "3"
                            - generic [ref=e729]:
                              - generic [ref=e730]: Frenzy Charges
                              - generic [ref=e732]: "3"
                            - generic [ref=e733]:
                              - generic [ref=e734]: Power Charges
                              - generic [ref=e736]: "3"
                        - generic [ref=e737]:
                          - generic [ref=e738]: Defensive
                          - generic [ref=e739]:
                            - generic [ref=e740]:
                              - generic [ref=e741]: Life
                              - generic [ref=e743]: 3,144
                            - generic [ref=e744]:
                              - generic [ref=e745]: Energy Shield
                              - generic [ref=e747]: 2,344
                            - generic [ref=e748]:
                              - generic [ref=e749]: Mana
                              - generic [ref=e751]: "927"
                            - generic [ref=e752]:
                              - generic [ref=e753]: Armour
                              - generic [ref=e755]: 1,242
                            - generic [ref=e756]:
                              - generic [ref=e757]: Evasion Rating
                              - generic [ref=e759]: 10,004
                            - generic [ref=e760]:
                              - generic [ref=e761]: Block
                              - generic [ref=e763]: 34%
                            - generic [ref=e764]:
                              - generic [ref=e765]: Resistances
                              - generic [ref=e766]:
                                - generic [ref=e767]: 75% /
                                - generic [ref=e768]: 75% /
                                - generic [ref=e769]: 75% /
                                - generic [ref=e770]: "-60%"
                        - generic [ref=e771]:
                          - generic [ref=e772]: Simulated
                          - generic [ref=e773]:
                            - generic [ref=e774]:
                              - generic [ref=e775]: Effective Health Pool
                              - generic [ref=e777]: 21K
                            - generic [ref=e778]:
                              - generic [ref=e779]: Max Hit
                              - generic [ref=e780]:
                                - generic [ref=e781]: 7.7K /
                                - generic [ref=e782]: 27K /
                                - generic [ref=e783]: 27K /
                                - generic [ref=e784]: 27K /
                                - generic [ref=e785]: 3.4K
                        - generic [ref=e786]:
                          - generic [ref=e787]: Skill DPS Estimation
                          - generic [ref=e789]:
                            - generic [ref=e790]: Creeping Frost
                            - generic [ref=e792]: 3.9M
                    - generic [ref=e793]:
                      - generic [ref=e794]:
                        - heading "Table of Contents" [level=2] [ref=e798]
                        - generic [ref=e799]:
                          - generic [ref=e800]:
                            - link "1. Path of Building Code" [ref=e801] [cursor=pointer]:
                              - /url: /poe/builds/fastaf-creeping-frost-elementalist#f06538a3-2c25-461d-966d-5c957d872a3c-path-of-building-code-0
                            - link "2. Equipment" [ref=e802] [cursor=pointer]:
                              - /url: /poe/builds/fastaf-creeping-frost-elementalist#739a0a0f-6bd0-4807-8096-ere5ae1414ec-equipment-0
                            - link "3. Passive Tree" [ref=e803] [cursor=pointer]:
                              - /url: /poe/builds/fastaf-creeping-frost-elementalist#739a0a0f-6bd0-4807-8096-eee5ae1617ec-passive-tree-0
                            - link "4. Skills" [ref=e804] [cursor=pointer]:
                              - /url: /poe/builds/fastaf-creeping-frost-elementalist#f06538a3-2c25-461d-966d-5c666d872a3c-skills-0
                            - link "5. Comments" [ref=e805] [cursor=pointer]:
                              - /url: /poe/builds/fastaf-creeping-frost-elementalist#1a25d256-9f21-45ad-a6ea-2b3d581fc47b-comments-0
                          - button "Back to top" [ref=e807] [cursor=pointer]
                      - generic [ref=e809]:
                        - heading "Featured Builds" [level=2] [ref=e813]
                        - generic [ref=e815]:
                          - generic [ref=e817] [cursor=pointer]:
                            - link [ref=e818]:
                              - /url: /poe/builds/mastert-s-true-vaal-cold-snap-autobomber
                            - generic [ref=e822]:
                              - generic [ref=e823]: "[3.29] MasterT's TRUE DOT CAP Vaal Cold Snap Autobomber"
                              - generic [ref=e824]: Updated on Oct 11, 2026
                          - generic [ref=e827] [cursor=pointer]:
                            - link [ref=e828]:
                              - /url: /poe/builds/mercenary-support-luminary-path-of-evening
                            - generic [ref=e832]:
                              - generic [ref=e833]: Mercenary Support Luminary
                              - generic [ref=e834]: Updated on Oct 2, 2026
                          - generic [ref=e837] [cursor=pointer]:
                            - link [ref=e838]:
                              - /url: /poe/builds/cast-on-ward-break-reliquarian
                            - generic [ref=e842]:
                              - generic [ref=e843]: 3.29 Cast on Ward Break Reliquarian
                              - generic [ref=e844]: Updated on Sep 28, 2026
                          - generic [ref=e847] [cursor=pointer]:
                            - link [ref=e848]:
                              - /url: /poe/builds/captainlance9-luminary-merc-bot
                            - generic [ref=e852]:
                              - generic [ref=e853]: "[3.29] Captainlance9's Luminary Merc Bot"
                              - generic [ref=e854]: Updated on Sep 15, 2026
                          - generic [ref=e857] [cursor=pointer]:
                            - link [ref=e858]:
                              - /url: /poe/builds/endgame-smite-aegis-armour-stacker
                            - generic [ref=e862]:
                              - generic [ref=e863]: Smite Armour Stacker
                              - generic [ref=e864]: Updated on Sep 14, 2026
                      - link "Become a Creator Want to earn rewards by sharing your builds with your community? Join Creator Program" [ref=e866] [cursor=pointer]:
                        - /url: https://form.typeform.com/to/iDJST6r5#email=xxxxx
                        - generic [ref=e869]:
                          - generic [ref=e870]:
                            - paragraph [ref=e871]: Become a Creator
                            - paragraph [ref=e872]: Want to earn rewards by sharing your builds with your community?
                          - button "Join Creator Program" [ref=e874]: Join Creator Program
              - status [ref=e876]
        - complementary [ref=e882]:
          - generic [ref=e883]:
            - generic [ref=e885]:
              - generic [ref=e887] [cursor=pointer]:
                - generic [ref=e888]: Advertisement
                - generic [ref=e889]: Remove Ads
              - generic [ref=e895] [cursor=pointer]:
                - generic [ref=e896]: Remove all ads
                - generic [ref=e897]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e898]
            - generic [ref=e900]:
              - generic [ref=e902] [cursor=pointer]:
                - generic [ref=e903]: Advertisement
                - generic [ref=e904]: Remove Ads
              - generic [ref=e910] [cursor=pointer]:
                - generic [ref=e911]: Remove all ads
                - generic [ref=e912]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e913]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e916]:
    - banner [ref=e917]:
      - generic [ref=e918] [cursor=pointer]:
        - generic [ref=e919]: Advertisement
        - generic [ref=e920]: Remove Ads
    - generic [ref=e924] [cursor=pointer]:
      - generic [ref=e925]: Remove all ads
      - generic [ref=e926]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e927]
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
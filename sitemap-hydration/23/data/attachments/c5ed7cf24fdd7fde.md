# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hydration.test.js >> Check hydration is successfully for each project >> Check that hydration is ok on Marvel-Rivals
- Location: e2e-tests/hydration.test.js:751:3

# Error details

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/229cb34e-c1ef-47e9-a9e3-e6b03cff574f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/229cb34e-c1ef-47e9-a9e3-e6b03cff574f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d8be8b91-8fc5-48ab-b239-b4e977b9dabb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d8be8b91-8fc5-48ab-b239-b4e977b9dabb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/56ba2287-19c3-47d7-a6ba-b307e29652a3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/56ba2287-19c3-47d7-a6ba-b307e29652a3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/640d47b3-f81c-4413-9751-ac29bda82532' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/640d47b3-f81c-4413-9751-ac29bda82532' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ab267d1c-93fc-4861-b076-fd92ac8c1a4c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ab267d1c-93fc-4861-b076-fd92ac8c1a4c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/16995255-374a-4c74-983e-d5ad84f0c3de' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/16995255-374a-4c74-983e-d5ad84f0c3de' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/90fa7224-d8d7-4ade-9960-5095d18785d4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/90fa7224-d8d7-4ade-9960-5095d18785d4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/08de2577-3a33-453b-a9d2-4a53676561c6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/08de2577-3a33-453b-a9d2-4a53676561c6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a1b941ad-c756-4854-b8b8-73809e3b43c2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a1b941ad-c756-4854-b8b8-73809e3b43c2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4d1e6763-d52c-4dcd-a791-267d49a1a660' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4d1e6763-d52c-4dcd-a791-267d49a1a660' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5b0c86b3-528c-43a5-b174-7e78c4afbb59' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5b0c86b3-528c-43a5-b174-7e78c4afbb59' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/04aeb0b8-d5f9-4015-97ca-2effc25a9b2c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/04aeb0b8-d5f9-4015-97ca-2effc25a9b2c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/27b00b12-9e66-42db-b98d-ba06c402afab' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/27b00b12-9e66-42db-b98d-ba06c402afab' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/554a96e9-1bbe-4228-a16c-b198f42a9533' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/554a96e9-1bbe-4228-a16c-b198f42a9533' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1c7c366a-b8f9-4501-8031-1be5c2e008b7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1c7c366a-b8f9-4501-8031-1be5c2e008b7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cd05719b-3d3a-4280-9db9-12264e361fac' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cd05719b-3d3a-4280-9db9-12264e361fac' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/178fc7b6-1a99-4aa6-a532-580fb4cc8b46' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/178fc7b6-1a99-4aa6-a532-580fb4cc8b46' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/124a3af2-1c6a-4ece-a1aa-f6b5a2937f66' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/124a3af2-1c6a-4ece-a1aa-f6b5a2937f66' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /marvel-rivals
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
          - link "Slay the Spire 2 STS 2 New" [ref=e53] [cursor=pointer]:
            - /url: https://mobalytics.gg/slay-the-spire-2
            - generic [ref=e55]:
              - img "Slay the Spire 2" [ref=e56]
              - generic [ref=e57]: STS 2
              - generic [ref=e59]: New
          - link "Deadlock Deadlock" [ref=e61] [cursor=pointer]:
            - /url: https://mobalytics.gg/deadlock
            - generic [ref=e63]:
              - img "Deadlock" [ref=e64]
              - generic [ref=e65]: Deadlock
          - link "Overwatch Overwatch" [ref=e67] [cursor=pointer]:
            - /url: https://mobalytics.gg/overwatch
            - generic [ref=e69]:
              - img "Overwatch" [ref=e70]
              - generic [ref=e71]: Overwatch
          - link "Borderlands 4 Borderlands 4" [ref=e73] [cursor=pointer]:
            - /url: https://mobalytics.gg/borderlands-4
            - generic [ref=e75]:
              - img "Borderlands 4" [ref=e76]
              - generic [ref=e77]: Borderlands 4
          - link "Valorant VAL" [ref=e79] [cursor=pointer]:
            - /url: https://mobalytics.gg/valorant
            - generic [ref=e81]:
              - img "Valorant" [ref=e82]
              - generic [ref=e83]: VAL
          - link "Neverness to Everness NTE New" [ref=e85] [cursor=pointer]:
            - /url: https://mobalytics.gg/neverness-to-everness
            - generic [ref=e87]:
              - img "Neverness to Everness" [ref=e88]
              - generic [ref=e89]: NTE
              - generic [ref=e91]: New
          - 'link "Arknights: Endfield Endfield" [ref=e93] [cursor=pointer]':
            - /url: https://mobalytics.gg/arknights-endfield
            - generic [ref=e95]:
              - 'img "Arknights: Endfield" [ref=e96]'
              - generic [ref=e97]: Endfield
          - button [ref=e98] [cursor=pointer]:
            - img [ref=e99]
          - generic:
            - link "Elden Ring Nightreign Nightreign":
              - /url: https://mobalytics.gg/elden-ring-nightreign
              - generic:
                - generic:
                  - img "Elden Ring Nightreign"
                  - generic: Nightreign
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
      - generic [ref=e100]:
        - generic [ref=e101]:
          - link "DOWNLOAD APP" [ref=e102] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-marvel-rivals&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e104]:
              - img [ref=e105]
              - text: DOWNLOAD APP
          - link "News" [ref=e107] [cursor=pointer]:
            - /url: /news
            - generic [ref=e108]: News
        - generic [ref=e110]:
          - button "Sign In" [ref=e112] [cursor=pointer]
          - button [ref=e114] [cursor=pointer]:
            - img [ref=e116]
          - button "Theme" [ref=e118] [cursor=pointer]:
            - img "Theme" [ref=e120]
      - generic [ref=e122]:
        - link "Home" [ref=e125] [cursor=pointer]:
          - /url: /marvel-rivals
          - img "Home" [ref=e127]
        - link "Tier List" [ref=e130] [cursor=pointer]:
          - /url: /marvel-rivals/tier-list
          - img "Tier List" [ref=e132]
        - link "Heroes" [ref=e135] [cursor=pointer]:
          - /url: /marvel-rivals/heroes
          - img "Heroes" [ref=e137]
        - link "Team-Ups" [ref=e140] [cursor=pointer]:
          - /url: /marvel-rivals/guides/best-team-ups
          - img "Team-Ups" [ref=e142]
        - link "Guides" [ref=e145] [cursor=pointer]:
          - /url: /marvel-rivals/guides
          - img "Guides" [ref=e147]
        - link "Battle Matrix" [ref=e150] [cursor=pointer]:
          - /url: /marvel-rivals/battle-matrix/home
          - img "Battle Matrix" [ref=e152]
      - generic [ref=e154]:
        - main [ref=e155]:
          - generic [ref=e157]:
            - generic [ref=e158]:
              - button "Marvel Rivals Marvel Rivals Black Widow Character Guide In this Marvel Rivals Black Widow guide, you’ll learn the fundamentals of her abilities, unique play styles, and fundamental tips." [ref=e161]:
                - generic [ref=e166]:
                  - heading "Marvel Rivals Marvel Rivals Black Widow Character Guide" [level=1] [ref=e167]:
                    - generic [ref=e168]: Marvel Rivals
                    - generic [ref=e169]: Marvel Rivals Black Widow Character Guide
                  - paragraph [ref=e177]: In this Marvel Rivals Black Widow guide, you’ll learn the fundamentals of her abilities, unique play styles, and fundamental tips.
              - generic [ref=e179]:
                - generic [ref=e180]:
                  - generic [ref=e181]:
                    - heading "Black Widow Overview" [level=2] [ref=e185]
                    - generic [ref=e190]:
                      - paragraph [ref=e191]: Natasha Romanova is the only sniper you’ll ever play who doesn’t one-shot with headshots. Armed with a sniper rifle and her batons, Black Widow requires a high level of mechanical skill and a deep understanding of hero movement patterns.
                      - paragraph [ref=e192]: If you can click heads, you’ll still have a lot of success with Widow as long as you're receiving damage boosts from either Mantis or Storm.
                      - paragraph [ref=e193]: The only things holding back Natasha, besides player skill, are the raw stats and damage numbers of her abilities. Even with a damage boost to enable one-shots on 250HP heroes, less than half of the roster falls into that category.
                      - paragraph [ref=e194]: Those who still choose to play her for the challenge and enjoyment of sniping do well when they constantly change their positioning and keep the enemy unaware of where her next headshot will come from.
                      - paragraph [ref=e195]: She may receive a minor buff that changes her breakpoints and makes Widow a meta pick, so don’t let her current power stop you from playing her if she’s who you enjoy.
                      - paragraph [ref=e196]:
                        - emphasis [ref=e197]: Find out where
                        - link "Black Widow ranks in our Marvel Rivals tier list" [ref=e198] [cursor=pointer]:
                          - /url: /marvel-rivals/tier-list
                          - emphasis [ref=e199]: Black Widow ranks in our Marvel Rivals tier list
                        - emphasis [ref=e200]: .
                      - heading "TLDR" [level=3] [ref=e201]
                      - paragraph [ref=e202]: How to Play As
                      - list [ref=e203]:
                        - listitem [ref=e204]: Always follow up Edge Dancer’s zip kick with a rifle shot. The enemy is briefly stunned and unable to dodge.
                        - listitem [ref=e205]: Combo the slow of your ult, with the AoE damage of a teammate's ult like Namor.
                        - listitem [ref=e206]: Ask for a teammate to play Mantis, and for them to constantly have damage boost applied to you. Otherwise, you won’t be able to KO 250HP enemies with a headshot.
                      - paragraph [ref=e207]: How to Play Against
                      - list [ref=e208]:
                        - listitem [ref=e209]: Avoid long sight lines and her LoS. Widow has the advantage at super long ranges, so stay hidden from her.
                        - listitem [ref=e210]: Ping her location. Alert your teammates of her position by pinging her so they can be prepared to avoid her LoS.
                        - listitem [ref=e211]: The easiest way to shut her down is by using a hero who has the mobility to quickly get to her position and either KO her or force her to retreat. Every role has a hero who can flank her.
                  - generic [ref=e212]:
                    - heading "Strengths and Weaknesses Summary" [level=2] [ref=e216]
                    - generic [ref=e219]:
                      - list [ref=e226]:
                        - listitem [ref=e227]:
                          - strong [ref=e228]: No falloff damage when scoped
                        - listitem [ref=e229]:
                          - strong [ref=e230]: Oneshot potential
                        - listitem [ref=e231]:
                          - strong [ref=e232]: Versatile melee and ranged kit
                      - list [ref=e239]:
                        - listitem [ref=e240]:
                          - strong [ref=e241]: Relies on allied damage boosts
                        - listitem [ref=e242]:
                          - strong [ref=e243]: Extremely limited in who she can potentially oneshot
                        - listitem [ref=e244]:
                          - strong [ref=e245]: Nearly useless ultimate
                  - generic [ref=e246]:
                    - heading "Strengths and Weaknesses" [level=2] [ref=e250]
                    - generic [ref=e255]:
                      - heading "Strengths" [level=3] [ref=e256]
                      - heading "No falloff damage when scoped" [level=4] [ref=e257]
                      - paragraph [ref=e258]: Black Widow has the only hitscan weapon with no falloff damage. The slow rechamber speed and difficulty of landing a lot of headshots hold her back, but she still has the advantage in areas with long sight lines.
                      - heading "Oneshot potential" [level=4] [ref=e259]
                      - paragraph [ref=e260]: When damage boosted, she has one of the few non-ultimate abilities capable of eliminating an enemy in a single instance of damage. Oneshots have immeasurable potential in Marvel Rivals because of the high amounts of healing. Black Widow can kill Cloak & Dagger during their ult as an example of her potential power when damage boosted.
                      - heading "Versatile melee and ranged kit" [level=4] [ref=e261]
                      - paragraph [ref=e262]: Most heroes just get one or the other, but Natasha has both extremes. She can use Edge Dancer to combo the enemy to death at melee range. No other sniper kit hero has a melee kit to go with it like Widow does.
                      - heading "Weaknesses" [level=3] [ref=e263]
                      - heading "Relies on allied damage boosts" [level=4] [ref=e264]
                      - paragraph [ref=e265]: Without a damage boost, she is a super hard-to-use sniper who doesn’t even kill when she lands the rare headshot. Even when paired with Mantis, she can’t realistically have a damage boost at all times. Damage boost from ults like Rocket Racoon opens up the possibility of 300HP hero elims but for such a tiny window.
                      - heading "Extremely limited in who she can potentially oneshot" [level=4] [ref=e266]
                      - paragraph [ref=e267]: There are only 15 heroes who widow can potentially KO with a single headshot. She gets the most value when eliminating a Strategist, but Luna, Mantis, and Invisible Woman all have 275HP, so they can never be one shot even with a regular damage boost.
                      - heading "Nearly useless ultimate" [level=4] [ref=e268]
                      - paragraph [ref=e269]: Most top Widow players just use their ult to follow up their headshots that didn’t kill. The fact that she has to charge up and then fire a slow-moving projectile gives the enemy team too much time to prepare their countermeasures.
                  - generic [ref=e270]:
                    - heading "Ability Tips" [level=2] [ref=e274]
                    - generic [ref=e279]:
                      - 'heading "Primary Fire 1: Widow''s Bite Baton" [level=3] [ref=e280]'
                      - paragraph [ref=e281]
                      - table [ref=e293]:
                        - row "DESCRIPTION Strike with the enhanced electric batons." [ref=e297]:
                          - cell "DESCRIPTION" [ref=e298]:
                            - paragraph [ref=e299]:
                              - strong [ref=e300]: DESCRIPTION
                          - cell "Strike with the enhanced electric batons." [ref=e301]:
                            - paragraph [ref=e302]:
                              - strong [ref=e303]: Strike with the enhanced electric batons.
                        - row "KEY Left click" [ref=e304]:
                          - cell "KEY" [ref=e305]:
                            - paragraph [ref=e306]:
                              - strong [ref=e307]: KEY
                          - cell "Left click" [ref=e308]:
                            - paragraph [ref=e309]:
                              - strong [ref=e310]: Left click
                        - row "CASTING Melee" [ref=e311]:
                          - cell "CASTING" [ref=e312]:
                            - paragraph [ref=e313]:
                              - strong [ref=e314]: CASTING
                          - cell "Melee" [ref=e315]:
                            - paragraph [ref=e316]:
                              - strong [ref=e317]: Melee
                        - row "DAMAGE 45" [ref=e318]:
                          - cell "DAMAGE" [ref=e319]:
                            - paragraph [ref=e320]:
                              - strong [ref=e321]: DAMAGE
                          - cell "45" [ref=e322]:
                            - paragraph [ref=e323]:
                              - strong [ref=e324]: "45"
                        - row "MAXIMUM DISTANCE 3m" [ref=e325]:
                          - cell "MAXIMUM DISTANCE" [ref=e326]:
                            - paragraph [ref=e327]:
                              - strong [ref=e328]: MAXIMUM DISTANCE
                          - cell "3m" [ref=e329]:
                            - paragraph [ref=e330]:
                              - strong [ref=e331]: 3m
                        - row "FIRE RATE 2 strikes per second" [ref=e332]:
                          - cell "FIRE RATE" [ref=e333]:
                            - paragraph [ref=e334]:
                              - strong [ref=e335]: FIRE RATE
                          - cell "2 strikes per second" [ref=e336]:
                            - paragraph [ref=e337]:
                              - strong [ref=e338]: 2 strikes per second
                      - 'heading "Tips for Primary Fire 1: Widow''s Bite Baton" [level=4] [ref=e339]':
                        - strong [ref=e340]: Tips for
                        - text: "Primary Fire 1: Widow's Bite Baton"
                      - paragraph [ref=e341]:
                        - strong [ref=e342]: Situational swaps
                      - list [ref=e343]:
                        - listitem [ref=e344]: Since you’ll mostly have your rifle out, look out for a few scenarios where you’ll want to swap to your batons.
                        - listitem [ref=e345]:
                          - list [ref=e346]:
                            - listitem [ref=e347]: Damages through shields
                            - listitem [ref=e348]: "Example: If an enemy like Dr. Strange jumps on you, switch to your batons after landing a couple of shots to keep attacking him while he’s shielding."
                        - listitem [ref=e349]: You are in a close-range fight, and out of ammo
                        - listitem [ref=e350]:
                          - text: Dueling a melee enemy whose movement is difficult for you to
                          - strong [ref=e351]
                          - text: track.
                        - listitem [ref=e352]: Melee combo starter (see tips for Edge Dancer).
                      - 'heading "Primary Fire 2: Red Room Rifle" [level=3] [ref=e353]'
                      - paragraph [ref=e354]
                      - table [ref=e366]:
                        - row "DESCRIPTION Attack with the Red Room Rifle" [ref=e370]:
                          - cell "DESCRIPTION" [ref=e371]:
                            - paragraph [ref=e372]:
                              - strong [ref=e373]: DESCRIPTION
                          - cell "Attack with the Red Room Rifle" [ref=e374]:
                            - paragraph [ref=e375]:
                              - strong [ref=e376]: Attack with the Red Room Rifle
                        - row "KEY Left Click" [ref=e377]:
                          - cell "KEY" [ref=e378]:
                            - paragraph [ref=e379]:
                              - strong [ref=e380]: KEY
                          - cell "Left Click" [ref=e381]:
                            - paragraph [ref=e382]:
                              - strong [ref=e383]: Left Click
                        - row "CASTING Single-cast direct hit" [ref=e384]:
                          - cell "CASTING" [ref=e385]:
                            - paragraph [ref=e386]:
                              - strong [ref=e387]: CASTING
                          - cell "Single-cast direct hit" [ref=e388]:
                            - paragraph [ref=e389]:
                              - strong [ref=e390]: Single-cast direct hit
                        - row "DAMAGE 120 damage per round" [ref=e391]:
                          - cell "DAMAGE" [ref=e392]:
                            - paragraph [ref=e393]:
                              - strong [ref=e394]: DAMAGE
                          - cell "120 damage per round" [ref=e395]:
                            - paragraph [ref=e396]:
                              - strong [ref=e397]: 120 damage per round
                        - row "DAMAGE FALLOFF Falloff begins at 10m, decreasing to 50% at 20m" [ref=e398]:
                          - cell "DAMAGE FALLOFF" [ref=e399]:
                            - paragraph [ref=e400]:
                              - strong [ref=e401]: DAMAGE FALLOFF
                          - cell "Falloff begins at 10m, decreasing to 50% at 20m" [ref=e402]:
                            - paragraph [ref=e403]:
                              - strong [ref=e404]: Falloff begins at 10m, decreasing to 50% at 20m
                        - row "FIRE RATE 0.83 rounds per second" [ref=e405]:
                          - cell "FIRE RATE" [ref=e406]:
                            - paragraph [ref=e407]:
                              - strong [ref=e408]: FIRE RATE
                          - cell "0.83 rounds per second" [ref=e409]:
                            - paragraph [ref=e410]:
                              - strong [ref=e411]: 0.83 rounds per second
                        - row "FIRE RATE 15" [ref=e412]:
                          - cell "FIRE RATE" [ref=e413]:
                            - paragraph [ref=e414]:
                              - strong [ref=e415]: FIRE RATE
                          - cell "15" [ref=e416]:
                            - paragraph [ref=e417]:
                              - strong [ref=e418]: "15"
                        - row "CRITICAL HIT Yes" [ref=e419]:
                          - cell "CRITICAL HIT" [ref=e420]:
                            - paragraph [ref=e421]:
                              - strong [ref=e422]: CRITICAL HIT
                          - cell "Yes" [ref=e423]:
                            - paragraph [ref=e424]:
                              - strong [ref=e425]: "Yes"
                        - row "AIMING DOWN SIGHTS TIMES 0.3s" [ref=e426]:
                          - cell "AIMING DOWN SIGHTS TIMES" [ref=e427]:
                            - paragraph [ref=e428]:
                              - strong [ref=e429]: AIMING DOWN SIGHTS TIMES
                          - cell "0.3s" [ref=e430]:
                            - paragraph [ref=e431]:
                              - strong [ref=e433]: 0.3s
                        - row "SPECIAL EFFECT Shares the same magazine with Red Room Rifle. Straight Shooter activates only after aiming down sights for a specific duration; otherwise, it will fire from the Red Room Rifle" [ref=e434]:
                          - cell "SPECIAL EFFECT" [ref=e435]:
                            - paragraph [ref=e436]:
                              - strong [ref=e437]: SPECIAL EFFECT
                          - cell "Shares the same magazine with Red Room Rifle. Straight Shooter activates only after aiming down sights for a specific duration; otherwise, it will fire from the Red Room Rifle" [ref=e438]:
                            - paragraph [ref=e439]:
                              - strong [ref=e440]: Shares the same magazine with Red Room Rifle. Straight Shooter activates only after aiming down sights for a specific duration; otherwise, it will fire from the Red Room Rifle
                      - 'heading "Tips for Primary Fire 2: Red Room Rifle" [level=4] [ref=e441]':
                        - strong [ref=e442]: Tips for
                        - text: "Primary Fire 2: Red Room Rifle"
                      - paragraph [ref=e443]:
                        - strong [ref=e444]: Stay unscoped at close range
                      - list [ref=e445]:
                        - listitem [ref=e446]: Falloff damage doesn’t begin until 10 meters, and close-range shots are easier to hit unscoped.
                      - paragraph [ref=e447]:
                        - strong [ref=e448]: Look for low-health enemies
                      - list [ref=e449]:
                        - listitem [ref=e450]: Even a body shot starts at 120dmg and can be a reliable way of finishing off enemies already at low health.
                      - paragraph [ref=e451]:
                        - strong [ref=e452]: Harsh falloff damage
                      - list [ref=e453]:
                        - listitem [ref=e454]: At only 20m away, you are already only dealing 50% of regular damage so a headshot would only deal 120dmg. Make sure to scope in unless very close.
                      - 'heading "Secondary Fire: Straight Shooter" [level=3] [ref=e455]'
                      - paragraph [ref=e456]
                      - table [ref=e468]:
                        - row "DESCRIPTION Switch the Red Room Rifle to Sniper mode to fire high-energy rounds." [ref=e472]:
                          - cell "DESCRIPTION" [ref=e473]:
                            - paragraph [ref=e474]:
                              - strong [ref=e475]: DESCRIPTION
                          - cell "Switch the Red Room Rifle to Sniper mode to fire high-energy rounds." [ref=e476]:
                            - paragraph [ref=e477]:
                              - strong [ref=e478]: Switch the Red Room Rifle to Sniper mode to fire high-energy rounds.
                        - row "KEY Right Click" [ref=e479]:
                          - cell "KEY" [ref=e480]:
                            - paragraph [ref=e481]:
                              - strong [ref=e482]: KEY
                          - cell "Right Click" [ref=e483]:
                            - paragraph [ref=e484]:
                              - strong [ref=e485]: Right Click
                        - row "CASTING Single-cast direct hit" [ref=e486]:
                          - cell "CASTING" [ref=e487]:
                            - paragraph [ref=e488]:
                              - strong [ref=e489]: CASTING
                          - cell "Single-cast direct hit" [ref=e490]:
                            - paragraph [ref=e491]:
                              - strong [ref=e492]: Single-cast direct hit
                        - row "DAMAGE 120 damage per hit" [ref=e493]:
                          - cell "DAMAGE" [ref=e494]:
                            - paragraph [ref=e495]: DAMAGE
                          - cell "120 damage per hit" [ref=e496]:
                            - paragraph [ref=e497]:
                              - strong [ref=e498]: 120 damage per hit
                        - row "FIRE RATE 0.83 rounds per second" [ref=e499]:
                          - cell "FIRE RATE" [ref=e500]:
                            - paragraph [ref=e501]: FIRE RATE
                          - cell "0.83 rounds per second" [ref=e502]:
                            - paragraph [ref=e503]:
                              - strong [ref=e504]: 0.83 rounds per second
                        - row "FIRE RATE 8" [ref=e505]:
                          - cell "FIRE RATE" [ref=e506]:
                            - paragraph [ref=e507]: FIRE RATE
                          - cell "8" [ref=e508]:
                            - paragraph [ref=e509]:
                              - strong [ref=e510]: "8"
                        - row "CRITICAL HIT Yes" [ref=e511]:
                          - cell "CRITICAL HIT" [ref=e512]:
                            - paragraph [ref=e513]: CRITICAL HIT
                          - cell "Yes" [ref=e514]:
                            - paragraph [ref=e515]:
                              - strong [ref=e516]: "Yes"
                        - row "SPECIAL EFFECT Shares the same magazine with Red Room Rifle" [ref=e517]:
                          - cell "SPECIAL EFFECT" [ref=e518]:
                            - paragraph [ref=e519]: SPECIAL EFFECT
                          - cell "Shares the same magazine with Red Room Rifle" [ref=e520]:
                            - paragraph [ref=e521]:
                              - strong [ref=e522]: Shares the same magazine with Red Room Rifle
                      - 'heading "Tips for Secondary Fire: Straight Shooter" [level=4] [ref=e523]':
                        - strong [ref=e524]: Tips for
                        - text: "Secondary Fire: Straight Shooter"
                      - paragraph [ref=e525]:
                        - strong [ref=e526]: Maintain distance
                      - list [ref=e527]:
                        - listitem [ref=e528]: As the only true sniper in the game, Widow has the advantage against the rest of the cast in long-range engagements.
                      - paragraph [ref=e529]:
                        - strong [ref=e530]: Can’t quick scope
                      - list [ref=e531]:
                        - listitem [ref=e532]: If you’re familiar with quick scoping in other games, it doesn’t function the same for Black Widow. Only after a minimum of 0.3 seconds spent scoped in will she gain infinite damage range and not have falloff damage.
                        - listitem [ref=e533]: You can still quick scope to help with accuracy, but know at ranges past 10m you will be dealing reduced damage.
                      - paragraph [ref=e534]:
                        - strong [ref=e535]: Always use cover
                      - list [ref=e536]:
                        - listitem [ref=e537]: Never stand in the open when ADS. You are a super easy target. You can also use cover to hide a portion of your body or to make your shot timing less predictable.
                      - paragraph [ref=e538]:
                        - strong [ref=e539]: Watch for movement patterns
                      - list [ref=e540]:
                        - listitem [ref=e541]: Things like jumping, falling, or certain movement abilities like Spider-Man’s Get Over Here to Amazing Combo have fixed movement patterns.
                        - listitem [ref=e542]: If you learn these patterns and then watch for them, you’ll be giving yourself multiple opportunities for easy headshots.
                      - 'heading "[SHIFT]: Fleet Foot" [level=3] [ref=e543]'
                      - paragraph [ref=e544]
                      - table [ref=e556]:
                        - row "DESCRIPTION Dash forward and enable a powerful jump." [ref=e560]:
                          - cell "DESCRIPTION" [ref=e561]:
                            - paragraph [ref=e562]:
                              - strong [ref=e563]: DESCRIPTION
                          - cell "Dash forward and enable a powerful jump." [ref=e564]:
                            - paragraph [ref=e565]:
                              - strong [ref=e566]: Dash forward and enable a powerful jump.
                        - row "KEY SHIFT" [ref=e567]:
                          - cell "KEY" [ref=e568]:
                            - paragraph [ref=e569]:
                              - strong [ref=e570]: KEY
                          - cell "SHIFT" [ref=e571]:
                            - paragraph [ref=e572]:
                              - strong [ref=e573]: SHIFT
                        - row "MOVEMENT BOOST 33%" [ref=e574]:
                          - cell "MOVEMENT BOOST" [ref=e575]:
                            - paragraph [ref=e576]:
                              - strong [ref=e577]: MOVEMENT BOOST
                          - cell "33%" [ref=e578]:
                            - paragraph [ref=e579]:
                              - strong [ref=e580]: 33%
                        - row "MAXIMUM ENERGY 120" [ref=e581]:
                          - cell "MAXIMUM ENERGY" [ref=e582]:
                            - paragraph [ref=e583]: MAXIMUM ENERGY
                          - cell "120" [ref=e584]:
                            - paragraph [ref=e585]:
                              - strong [ref=e586]: "120"
                        - row "ENERGY COST (SPRINTING) 12/s" [ref=e587]:
                          - cell "ENERGY COST (SPRINTING)" [ref=e588]:
                            - paragraph [ref=e589]:
                              - strong [ref=e590]: ENERGY COST (SPRINTING)
                          - cell "12/s" [ref=e591]:
                            - paragraph [ref=e592]:
                              - strong [ref=e593]: 12/s
                        - row "POWER JUMP ENERGY COST 24 per leap" [ref=e594]:
                          - cell "POWER JUMP ENERGY COST" [ref=e595]:
                            - paragraph [ref=e596]:
                              - strong [ref=e597]: POWER JUMP ENERGY COST
                          - cell "24 per leap" [ref=e598]:
                            - paragraph [ref=e599]:
                              - strong [ref=e600]: 24 per leap
                        - row "NERGY RECOVERY SPEED 30/s" [ref=e601]:
                          - cell "NERGY RECOVERY SPEED" [ref=e602]:
                            - paragraph [ref=e603]:
                              - strong [ref=e604]: NERGY RECOVERY SPEED
                          - cell "30/s" [ref=e605]:
                            - paragraph [ref=e606]:
                              - strong [ref=e607]: 30/s
                      - 'heading "Tips for [SHIFT]: Fleet Foot" [level=4] [ref=e608]':
                        - strong [ref=e609]: Tips for
                        - text: "[SHIFT]: Fleet Foot"
                      - paragraph [ref=e610]:
                        - strong [ref=e611]: Change positions frequently
                      - list [ref=e612]:
                        - listitem [ref=e613]: Use sprint to constantly reposition where you are sniping from. When the enemy doesn't know what angle you are shooting from, landing shots is much easier.
                      - paragraph [ref=e614]:
                        - strong [ref=e615]: Jump Shots
                      - list [ref=e616]:
                        - listitem [ref=e617]: When enemies are safe behind barriers, walls, and shields, use Fleet Foot jump to leap into the air, ADS, and get a shot in.
                      - paragraph [ref=e618]:
                        - strong [ref=e619]: Save at least half energy to escape
                      - list [ref=e620]:
                        - listitem [ref=e621]: Never get caught without any sprint resource. You’ll want to save a bit in case you suddenly need to run and jump away from where you just ran to.
                      - 'heading "[E]: Edge Dancer" [level=3] [ref=e622]'
                      - paragraph [ref=e623]
                      - table [ref=e635]:
                        - row "DESCRIPTION Unleash a spinning kick to Knock enemies airborne. Landing the hit will allow her to zip to the target with a grappling hook for a second kick." [ref=e639]:
                          - cell "DESCRIPTION" [ref=e640]:
                            - paragraph [ref=e641]:
                              - strong [ref=e642]: DESCRIPTION
                          - cell "Unleash a spinning kick to Knock enemies airborne. Landing the hit will allow her to zip to the target with a grappling hook for a second kick." [ref=e643]:
                            - paragraph [ref=e644]:
                              - strong [ref=e645]: Unleash a spinning kick to Knock enemies airborne. Landing the hit will allow her to zip to the target with a grappling hook for a second kick.
                        - row "KEY E" [ref=e646]:
                          - cell "KEY" [ref=e647]:
                            - paragraph [ref=e648]:
                              - strong [ref=e649]: KEY
                          - cell "E" [ref=e650]:
                            - paragraph [ref=e651]:
                              - strong [ref=e652]: E
                        - row "CASTING Melee" [ref=e653]:
                          - cell "CASTING" [ref=e654]:
                            - paragraph [ref=e655]:
                              - strong [ref=e656]: CASTING
                          - cell "Melee" [ref=e657]:
                            - paragraph [ref=e658]: Melee
                        - row "CASTINGSPINNING KICK DAMAGE 35" [ref=e659]:
                          - cell "CASTINGSPINNING KICK DAMAGE" [ref=e660]:
                            - paragraph [ref=e661]:
                              - strong [ref=e662]: CASTINGSPINNING KICK DAMAGE
                          - cell "35" [ref=e663]:
                            - paragraph [ref=e664]: "35"
                        - row "MAXIMUM DISTANCE 5m" [ref=e665]:
                          - cell "MAXIMUM DISTANCE" [ref=e666]:
                            - paragraph [ref=e667]:
                              - strong [ref=e668]: MAXIMUM DISTANCE
                          - cell "5m" [ref=e669]:
                            - paragraph [ref=e670]:
                              - strong [ref=e671]: 5m
                        - row "FLYING KICK DISTANCE 12m" [ref=e672]:
                          - cell "FLYING KICK DISTANCE" [ref=e673]:
                            - paragraph [ref=e674]:
                              - strong [ref=e675]: FLYING KICK DISTANCE
                          - cell "12m" [ref=e676]:
                            - paragraph [ref=e677]:
                              - strong [ref=e678]: 12m
                        - row "FLYING KICK DAMAGE 35" [ref=e679]:
                          - cell "FLYING KICK DAMAGE" [ref=e680]:
                            - paragraph [ref=e681]:
                              - strong [ref=e682]: FLYING KICK DAMAGE
                          - cell "35" [ref=e683]:
                            - paragraph [ref=e684]:
                              - strong [ref=e685]: "35"
                        - row "FLYING KICK STUN DURATION 1s" [ref=e686]:
                          - cell "FLYING KICK STUN DURATION" [ref=e687]:
                            - paragraph [ref=e688]:
                              - strong [ref=e689]: FLYING KICK STUN DURATION
                          - cell "1s" [ref=e690]:
                            - paragraph [ref=e691]:
                              - strong [ref=e692]: 1s
                        - row "FLYING KICK CASTING WINDOW 5s" [ref=e693]:
                          - cell "FLYING KICK CASTING WINDOW" [ref=e694]:
                            - paragraph [ref=e695]:
                              - strong [ref=e696]: FLYING KICK CASTING WINDOW
                          - cell "5s" [ref=e697]:
                            - paragraph [ref=e698]:
                              - strong [ref=e699]: 5s
                      - 'heading "Tips for [E]: Edge Dancer" [level=4] [ref=e700]':
                        - strong [ref=e701]: Tips for
                        - text: "[E]: Edge Dancer"
                      - paragraph [ref=e702]:
                        - strong [ref=e703]: Her most underrated ability
                      - list [ref=e704]:
                        - listitem [ref=e705]:
                          - list [ref=e706]:
                            - listitem [ref=e707]: Normally, the way to get an easy kill on a sniper is to dive them and get in their face. Edge Dancer combos make Widow dangerous at melee range as well.
                            - listitem [ref=e708]: Swap to your batons to get in more damage before using Edge Dancer’s knockback.
                      - paragraph [ref=e709]:
                        - strong [ref=e710]: "Melee Combo:"
                      - list [ref=e711]:
                        - listitem [ref=e712]:
                          - list [ref=e713]:
                            - listitem [ref=e714]: 2 baton hits -> Edge Dancer spin kick -> zip kick -> unscoped shot
                            - listitem [ref=e715]: KOs 275HP heroes
                      - 'heading "Ultimate: Electro-Plasma Explosion" [level=3] [ref=e716]'
                      - paragraph [ref=e717]
                      - table [ref=e729]:
                        - row "DESCRIPTION Switch the Red Room Rifle to Destruction mode and unleash an electro-plasma blast, damaging enemies within range and leaving plasma on the ground to Slow nearby enemies." [ref=e733]:
                          - cell "DESCRIPTION" [ref=e734]:
                            - paragraph [ref=e735]:
                              - strong [ref=e736]: DESCRIPTION
                          - cell "Switch the Red Room Rifle to Destruction mode and unleash an electro-plasma blast, damaging enemies within range and leaving plasma on the ground to Slow nearby enemies." [ref=e737]:
                            - paragraph [ref=e738]:
                              - strong [ref=e739]: Switch the Red Room Rifle to Destruction mode and unleash an electro-plasma blast, damaging enemies within range and leaving plasma on the ground to Slow nearby enemies.
                        - row "KEY Q" [ref=e740]:
                          - cell "KEY" [ref=e741]:
                            - paragraph [ref=e742]:
                              - strong [ref=e743]: KEY
                          - cell "Q" [ref=e744]:
                            - paragraph [ref=e745]:
                              - strong [ref=e746]: Q
                        - row "PROJECTILE SPEED 100m/s" [ref=e747]:
                          - cell "PROJECTILE SPEED" [ref=e748]:
                            - paragraph [ref=e749]:
                              - strong [ref=e750]: PROJECTILE SPEED
                          - cell "100m/s" [ref=e751]:
                            - paragraph [ref=e752]:
                              - strong [ref=e753]: 100m/s
                        - row "EXPLOSION RANGE 5.6m - 8m (Maximum range is achieved after 0.6s of charging)" [ref=e754]:
                          - cell "EXPLOSION RANGE" [ref=e755]:
                            - paragraph [ref=e756]:
                              - strong [ref=e757]: EXPLOSION RANGE
                          - cell "5.6m - 8m (Maximum range is achieved after 0.6s of charging)" [ref=e758]:
                            - paragraph [ref=e759]:
                              - strong [ref=e760]: 5.6m - 8m (Maximum range is achieved after 0.6s of charging)
                        - row "EXPLOSION DAMAGE 120 - 170 (Maximum damage is achieved after 0.6s of charging)" [ref=e761]:
                          - cell "EXPLOSION DAMAGE" [ref=e762]:
                            - paragraph [ref=e763]:
                              - strong [ref=e764]: EXPLOSION DAMAGE
                          - cell "120 - 170 (Maximum damage is achieved after 0.6s of charging)" [ref=e765]:
                            - paragraph [ref=e766]:
                              - strong [ref=e767]: 120 - 170 (Maximum damage is achieved after 0.6s of charging)
                        - row "NUMBER OF PLASMA GLOBULES 7 - 20 (Maximum amount is achieved after 0.6s of charging)" [ref=e768]:
                          - cell "NUMBER OF PLASMA GLOBULES" [ref=e769]:
                            - paragraph [ref=e770]:
                              - strong [ref=e771]: NUMBER OF PLASMA GLOBULES
                          - cell "7 - 20 (Maximum amount is achieved after 0.6s of charging)" [ref=e772]:
                            - paragraph [ref=e773]:
                              - strong [ref=e774]: 7 - 20 (Maximum amount is achieved after 0.6s of charging)
                        - row "PLASMA RANGE 1.5m spherical radius" [ref=e775]:
                          - cell "PLASMA RANGE" [ref=e776]:
                            - paragraph [ref=e777]:
                              - strong [ref=e778]: PLASMA RANGE
                          - cell "1.5m spherical radius" [ref=e779]:
                            - paragraph [ref=e780]:
                              - strong [ref=e781]: 1.5m spherical radius
                        - row "SLOW RATE -55%" [ref=e782]:
                          - cell "SLOW RATE" [ref=e783]:
                            - paragraph [ref=e784]:
                              - strong [ref=e785]: SLOW RATE
                          - cell "-55%" [ref=e786]:
                            - paragraph [ref=e787]:
                              - strong [ref=e788]: "-55%"
                        - row "PLASMA DURATION 10s" [ref=e789]:
                          - cell "PLASMA DURATION" [ref=e790]:
                            - paragraph [ref=e791]:
                              - strong [ref=e792]: PLASMA DURATION
                          - cell "10s" [ref=e793]:
                            - paragraph [ref=e794]:
                              - strong [ref=e795]: 10s
                        - row "Vulnerability Effect Duration 4s" [ref=e796]:
                          - cell "Vulnerability Effect Duration" [ref=e797]:
                            - paragraph [ref=e798]:
                              - strong [ref=e799]: Vulnerability Effect Duration
                          - cell "4s" [ref=e800]:
                            - paragraph [ref=e801]:
                              - strong [ref=e802]: 4s
                        - row "Vulnerability Effect Rate 15%" [ref=e803]:
                          - cell "Vulnerability Effect Rate" [ref=e804]:
                            - paragraph [ref=e805]:
                              - strong [ref=e806]: Vulnerability Effect Rate
                          - cell "15%" [ref=e807]:
                            - paragraph [ref=e808]:
                              - strong [ref=e809]: 15%
                        - row "Energy Cost 2800" [ref=e810]:
                          - cell "Energy Cost" [ref=e811]:
                            - paragraph [ref=e812]:
                              - strong [ref=e813]: Energy Cost
                          - cell "2800" [ref=e814]:
                            - paragraph [ref=e815]:
                              - strong [ref=e816]: "2800"
                      - 'heading "Tips for Ultimate: Electro-Plasma Explosion" [level=4] [ref=e817]':
                        - strong [ref=e818]: Tips for
                        - text: "Ultimate: Electro-Plasma Explosion"
                      - paragraph [ref=e819]:
                        - strong [ref=e820]: Great for finishing off enemies behind cover
                      - list [ref=e821]:
                        - listitem [ref=e822]: The large AoE of the ult allows you to shoot at the floor next to a target hiding behind cover.
                        - listitem [ref=e823]: When you almost KO’d someone and they are retreating, look to convert the elim with the explosion
                      - paragraph [ref=e824]:
                        - strong [ref=e825]: Large AoE for damage, slow, and Vulnerability
                      - list [ref=e826]:
                        - listitem [ref=e827]: Target grouped-up enemies, and they’ll all take damage plus be significantly slowed by the 80% movement penalty debuff.
                  - generic [ref=e828]:
                    - heading "Synergies" [level=2] [ref=e832]
                    - generic [ref=e837]:
                      - heading "Team Comp Synergies" [level=3] [ref=e838]
                      - paragraph [ref=e839]: Team comps built around Black Widow contest space for her, and make it difficult for flankers to get behind her. She wants a stable frontline that takes up a lot of the enemy's attention so she has more time to line up her shots before being shot at.
                      - paragraph [ref=e840]: Her advantage in map areas with long sight lines helps her Vangaurds to contest space as standing in her LoS makes them vulnerable to big burst damage from headshots.
                      - paragraph [ref=e841]: Running shield comps gives Widow the freedom to position directly in front of the enemy team behind the safety of her team's shields. Most importantly, Widow wants Mantis, or another form of damage boost which empowers her to KO with a single headshot.
                      - heading "Team Comp Example" [level=4] [ref=e842]
                      - list [ref=e843]:
                        - listitem [ref=e844]: "Vanguards: Magneto, Strange"
                        - listitem [ref=e845]: "Duelists: Black Widow, Spider-Man"
                        - listitem [ref=e846]: "Strategists: Mantis, Loki"
                      - heading "Hero Synergies" [level=3] [ref=e847]
                      - 'heading "Vanguards: Dr. Strange" [level=4] [ref=e848]'
                      - paragraph [ref=e849]
                      - paragraph [ref=e855]:
                        - link "Strange" [ref=e856] [cursor=pointer]:
                          - /url: /marvel-rivals/dr-strange-guide
                        - text: has the best shield to enable Widow’s sniper playstyle. Since he can activate it at any point, they can coordinate much easier and Widow can watch for when Strange is staying forward and shielding. He also mitigates a lot of the poke damage that would either threaten to KO her or force her to play slow and wait for healing.
                      - 'heading "Duelists: Spider-Man" [level=4] [ref=e857]'
                      - paragraph [ref=e858]
                      - paragraph [ref=e864]:
                        - text: Neither of these heroes are currently well known for their consistency. As a specialist duo, they are surprisingly lethal and super hard for non-Vanguards to deal with. When Widow attacks first, the damaged target is easy for
                        - link "Spider-Man" [ref=e865] [cursor=pointer]:
                          - /url: /marvel-rivals/spider-man-guide
                        - text: to zip to and finish off. If Spidey goes first, his web pull and uppercut give Widow two opportunities to land a follow-up critical hit and instantly delete any Duelist or Strategist.
                      - 'heading "Strategists: Mantis" [level=4] [ref=e866]'
                      - paragraph [ref=e867]
                      - paragraph [ref=e873]:
                        - text: Damage boost from
                        - link "Mantis’" [ref=e874] [cursor=pointer]:
                          - /url: /marvel-rivals/mantis-guide
                        - text: Allied Inspiration transforms Black Widow into an actual threat. Lasting for 8 full seconds, Mantis can reapply the buff as needed. Many of the most popular Duelists and Strategists fall into the 250HP category. With Mantis’ damage boost, Widow can eliminate all 250HP enemies with a single headshot. She just needs to have the mechanical skill to do so.
                - generic [ref=e876]:
                  - generic [ref=e877]:
                    - heading "Table of Contents" [level=2] [ref=e881]
                    - generic [ref=e882]:
                      - generic [ref=e883]:
                        - link "1. Black Widow Overview" [ref=e884] [cursor=pointer]:
                          - /url: /marvel-rivals/black-widow-guide#ed3fd0d4-0789-46a0-817e-bb6d6eab57f1-black-widow-overview-0
                        - link "TLDR" [ref=e885] [cursor=pointer]:
                          - /url: /marvel-rivals/black-widow-guide#ed3fd0d4-0789-46a0-817e-bb6d6eab57f1-tldr-0
                          - generic [ref=e887]: TLDR
                        - link "2. Strengths and Weaknesses Summary" [ref=e888] [cursor=pointer]:
                          - /url: /marvel-rivals/black-widow-guide#52889463-25de-4bf4-aa39-f6f1b909447a-strengths-and-weaknesses-summary-0
                        - link "3. Strengths and Weaknesses" [ref=e889] [cursor=pointer]:
                          - /url: /marvel-rivals/black-widow-guide#29113cf4-4be8-4321-93cc-1b97924086cf-strengths-and-weaknesses-1
                        - link "Strengths" [ref=e890] [cursor=pointer]:
                          - /url: /marvel-rivals/black-widow-guide#29113cf4-4be8-4321-93cc-1b97924086cf-strengths-0
                          - generic [ref=e892]: Strengths
                        - link "Weaknesses" [ref=e893] [cursor=pointer]:
                          - /url: /marvel-rivals/black-widow-guide#29113cf4-4be8-4321-93cc-1b97924086cf-weaknesses-1
                          - generic [ref=e895]: Weaknesses
                        - link "4. Ability Tips" [ref=e896] [cursor=pointer]:
                          - /url: /marvel-rivals/black-widow-guide#5feed7d2-642c-4544-9a71-5500fa451283-ability-tips-2
                        - 'link "Primary Fire 1: Widow''s Bite Baton" [ref=e897] [cursor=pointer]':
                          - /url: /marvel-rivals/black-widow-guide#5feed7d2-642c-4544-9a71-5500fa451283-primary-fire-1-widows-bite-baton-0
                          - generic [ref=e899]: "Primary Fire 1: Widow's Bite Baton"
                        - 'link "Primary Fire 2: Red Room Rifle" [ref=e900] [cursor=pointer]':
                          - /url: /marvel-rivals/black-widow-guide#5feed7d2-642c-4544-9a71-5500fa451283-primary-fire-2-red-room-rifle-1
                          - generic [ref=e902]: "Primary Fire 2: Red Room Rifle"
                        - 'link "Secondary Fire: Straight Shooter" [ref=e903] [cursor=pointer]':
                          - /url: /marvel-rivals/black-widow-guide#5feed7d2-642c-4544-9a71-5500fa451283-secondary-fire-straight-shooter-2
                          - generic [ref=e905]: "Secondary Fire: Straight Shooter"
                        - 'link "[SHIFT]: Fleet Foot" [ref=e906] [cursor=pointer]':
                          - /url: /marvel-rivals/black-widow-guide#5feed7d2-642c-4544-9a71-5500fa451283-shift-fleet-foot-3
                          - generic [ref=e908]: "[SHIFT]: Fleet Foot"
                        - 'link "[E]: Edge Dancer" [ref=e909] [cursor=pointer]':
                          - /url: /marvel-rivals/black-widow-guide#5feed7d2-642c-4544-9a71-5500fa451283-e-edge-dancer-4
                          - generic [ref=e911]: "[E]: Edge Dancer"
                        - 'link "Ultimate: Electro-Plasma Explosion" [ref=e912] [cursor=pointer]':
                          - /url: /marvel-rivals/black-widow-guide#5feed7d2-642c-4544-9a71-5500fa451283-ultimate-electro-plasma-explosion-5
                          - generic [ref=e914]: "Ultimate: Electro-Plasma Explosion"
                        - link "5. Synergies" [ref=e915] [cursor=pointer]:
                          - /url: /marvel-rivals/black-widow-guide#5a770f3b-8dde-47ad-815e-8fd4d5ce6466-synergies-3
                        - link "Team Comp Synergies" [ref=e916] [cursor=pointer]:
                          - /url: /marvel-rivals/black-widow-guide#5a770f3b-8dde-47ad-815e-8fd4d5ce6466-team-comp-synergies-0
                          - generic [ref=e918]: Team Comp Synergies
                        - link "Hero Synergies" [ref=e919] [cursor=pointer]:
                          - /url: /marvel-rivals/black-widow-guide#5a770f3b-8dde-47ad-815e-8fd4d5ce6466-hero-synergies-1
                          - generic [ref=e921]: Hero Synergies
                      - button "Back to top" [ref=e923] [cursor=pointer]
                  - generic [ref=e924]:
                    - heading "Base Stats" [level=2] [ref=e928]
                    - table [ref=e935]:
                      - row "Role Duelist" [ref=e939]:
                        - cell "Role" [ref=e940]:
                          - paragraph [ref=e941]: Role
                        - cell "Duelist" [ref=e942]:
                          - paragraph [ref=e943]: Duelist
                      - row "Difficulty 4/5 Stars" [ref=e944]:
                        - cell "Difficulty" [ref=e945]:
                          - paragraph [ref=e946]: Difficulty
                        - cell "4/5 Stars" [ref=e947]:
                          - paragraph [ref=e948]: 4/5 Stars
                      - row "Health 250" [ref=e949]:
                        - cell "Health" [ref=e950]:
                          - paragraph [ref=e951]: Health
                        - cell "250" [ref=e952]:
                          - paragraph [ref=e953]: "250"
                      - row "Movement Speed 6 m/s" [ref=e954]:
                        - cell "Movement Speed" [ref=e955]:
                          - paragraph [ref=e956]: Movement Speed
                        - cell "6 m/s" [ref=e957]:
                          - paragraph [ref=e958]: 6 m/s
            - status [ref=e959]
        - complementary [ref=e964]:
          - generic [ref=e965]:
            - generic [ref=e967]:
              - generic [ref=e969] [cursor=pointer]:
                - generic [ref=e970]: Advertisement
                - generic [ref=e971]: Remove Ads
              - generic [ref=e974] [cursor=pointer]:
                - generic [ref=e975]: Remove all ads
                - generic [ref=e976]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e977]:
                  - generic [ref=e978]: Remove ads
            - generic [ref=e980]:
              - generic [ref=e982] [cursor=pointer]:
                - generic [ref=e983]: Advertisement
                - generic [ref=e984]: Remove Ads
              - generic [ref=e987] [cursor=pointer]:
                - generic [ref=e988]: Remove all ads
                - generic [ref=e989]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e990]:
                  - generic [ref=e991]: Remove ads
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e994]:
    - banner [ref=e995]:
      - generic [ref=e996] [cursor=pointer]:
        - generic [ref=e997]: Advertisement
        - generic [ref=e998]: Remove Ads
    - generic [ref=e1001] [cursor=pointer]:
      - generic [ref=e1002]: Remove all ads
      - generic [ref=e1003]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e1004]:
        - generic [ref=e1005]: Remove ads
```

# Test source

```ts
  703 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  704 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  705 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  706 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  707 | 
  708 |       filteredLinks = arrayLinks
  709 |         .filter((match) => {
  710 |           const filterPattern = /mobalytics\.gg\/zzz/;
  711 |           return filterPattern.test(match.groups.link);
  712 |         })
  713 |         .slice(0, quantityLinks);
  714 |     });
  715 | 
  716 |     for (const takeLink of filteredLinks) {
  717 |       const consoleMessages = [];
  718 |       const pageErrors = [];
  719 |       page.on('console', (msg) => {
  720 |         if (msg.type() === 'error') {
  721 |           const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  722 |           // console.log(consoleInfo);
  723 |           consoleMessages.push(consoleInfo);
  724 |         }
  725 |       });
  726 |       page.on('pageerror', (error) => {
  727 |         const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  728 |         // if (error.message.match(/Minified React error #(418|423)/i)) {
  729 |         //   console.log(errorInfo);
  730 |         // }
  731 |         pageErrors.push(errorInfo);
  732 |       });
  733 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  734 | 
  735 |       await test.step(`Open parsed page: ${link}`, async () => {
  736 |         await page.goto(link);
  737 |         await page.waitForTimeout(1000);
  738 |       });
  739 | 
  740 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  741 | 
  742 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  743 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  744 |         expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
  745 |         expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
  746 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  747 |       });
  748 |     }
  749 |   });
  750 | 
  751 |   test(`Check that hydration is ok on Marvel-Rivals`, async ({ page, request }) => {
  752 |     let filteredLinks;
  753 | 
  754 |     await test.step(`Parse up to ${quantityLinks} links from Marvel-Rivals sitemap: ${process.env.BASE_URL}/marvel-rivals/sitemap.xml`, async () => {
  755 |       const response = await request.get(`${process.env.BASE_URL}/marvel-rivals/sitemap.xml`);
  756 |       await test.step(`Expected Result: ${process.env.BASE_URL}/marvel-rivals/sitemap.xml returns with ${response.status()}`, async () => {
  757 |         expect(response.ok()).toBeTruthy();
  758 |       });
  759 |       const xmlData = await response.text();
  760 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  761 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  762 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  763 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  764 | 
  765 |       filteredLinks = arrayLinks
  766 |         .filter((match) => {
  767 |           const filterPattern = /mobalytics\.gg\/marvel-rivals/;
  768 |           return filterPattern.test(match.groups.link);
  769 |         })
  770 |         .slice(0, quantityLinks);
  771 |     });
  772 | 
  773 |     for (const takeLink of filteredLinks) {
  774 |       const consoleMessages = [];
  775 |       const pageErrors = [];
  776 |       page.on('console', (msg) => {
  777 |         if (msg.type() === 'error') {
  778 |           const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  779 |           // console.log(consoleInfo);
  780 |           consoleMessages.push(consoleInfo);
  781 |         }
  782 |       });
  783 |       page.on('pageerror', (error) => {
  784 |         const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  785 |         // if (error.message.match(/Minified React error #(418|423)/i)) {
  786 |         //   console.log(errorInfo);
  787 |         // }
  788 |         pageErrors.push(errorInfo);
  789 |       });
  790 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  791 | 
  792 |       await test.step(`Open parsed page: ${link}`, async () => {
  793 |         await page.goto(link);
  794 |         await page.waitForTimeout(1000);
  795 |       });
  796 | 
  797 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  798 | 
  799 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  800 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  801 |         expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
  802 |         expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
> 803 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      |                                               ^ Error: expect(received).not.toMatch(expected)
  804 |       });
  805 |     }
  806 |   });
  807 | 
  808 |   test(`Check that hydration is ok on MHW`, async ({ page, request }) => {
  809 |     let filteredLinks;
  810 | 
  811 |     await test.step(`Parse up to ${quantityLinks} links from MHW sitemap: ${process.env.BASE_URL}/mhw/sitemap.xml`, async () => {
  812 |       const response = await request.get(`${process.env.BASE_URL}/mhw/sitemap.xml`);
  813 |       await test.step(`Expected Result: ${process.env.BASE_URL}/mhw/sitemap.xml returns with ${response.status()}`, async () => {
  814 |         expect(response.ok()).toBeTruthy();
  815 |       });
  816 |       const xmlData = await response.text();
  817 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  818 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  819 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  820 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  821 | 
  822 |       filteredLinks = arrayLinks
  823 |         .filter((match) => {
  824 |           const filterPattern = /mobalytics\.gg\/mhw/;
  825 |           return filterPattern.test(match.groups.link);
  826 |         })
  827 |         .slice(0, quantityLinks);
  828 |     });
  829 | 
  830 |     for (const takeLink of filteredLinks) {
  831 |       const consoleMessages = [];
  832 |       const pageErrors = [];
  833 |       page.on('console', (msg) => {
  834 |         if (msg.type() === 'error') {
  835 |           const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  836 |           // console.log(consoleInfo);
  837 |           consoleMessages.push(consoleInfo);
  838 |         }
  839 |       });
  840 |       page.on('pageerror', (error) => {
  841 |         const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  842 |         // if (error.message.match(/Minified React error #(418|423)/i)) {
  843 |         //   console.log(errorInfo);
  844 |         // }
  845 |         pageErrors.push(errorInfo);
  846 |       });
  847 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  848 | 
  849 |       await test.step(`Open parsed page: ${link}`, async () => {
  850 |         await page.goto(link);
  851 |         await page.waitForTimeout(1000);
  852 |       });
  853 | 
  854 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  855 | 
  856 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  857 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  858 |         expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
  859 |         expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
  860 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  861 |       });
  862 |     }
  863 |   });
  864 | 
  865 |   test(`Check that hydration is ok on Deadlock`, async ({ page, request }) => {
  866 |     let filteredLinks;
  867 | 
  868 |     await test.step(`Parse up to ${quantityLinks} links from Deadlock sitemap: ${process.env.BASE_URL}/deadlock/sitemap.xml`, async () => {
  869 |       const response = await request.get(`${process.env.BASE_URL}/deadlock/sitemap.xml`);
  870 |       await test.step(`Expected Result: ${process.env.BASE_URL}/deadlock/sitemap.xml returns with ${response.status()}`, async () => {
  871 |         expect(response.ok()).toBeTruthy();
  872 |       });
  873 |       const xmlData = await response.text();
  874 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  875 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  876 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  877 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  878 | 
  879 |       filteredLinks = arrayLinks
  880 |         .filter((match) => {
  881 |           const filterPattern = /mobalytics\.gg\/deadlock/;
  882 |           return filterPattern.test(match.groups.link);
  883 |         })
  884 |         .slice(0, quantityLinks);
  885 |     });
  886 | 
  887 |     for (const takeLink of filteredLinks) {
  888 |       const consoleMessages = [];
  889 |       const pageErrors = [];
  890 |       page.on('console', (msg) => {
  891 |         if (msg.type() === 'error') {
  892 |           const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  893 |           // console.log(consoleInfo);
  894 |           consoleMessages.push(consoleInfo);
  895 |         }
  896 |       });
  897 |       page.on('pageerror', (error) => {
  898 |         const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  899 |         // if (error.message.match(/Minified React error #(418|423)/i)) {
  900 |         //   console.log(errorInfo);
  901 |         // }
  902 |         pageErrors.push(errorInfo);
  903 |       });
```
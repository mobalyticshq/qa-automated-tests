# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hydration.test.js >> Check hydration is successfully for each project >> Check that hydration is ok on Borderlands-4
- Location: e2e-tests/hydration.test.js:595:3

# Error details

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b314460c-f170-45c4-8705-98f9fa9f1e14' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b314460c-f170-45c4-8705-98f9fa9f1e14' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b314460c-f170-45c4-8705-98f9fa9f1e14' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b314460c-f170-45c4-8705-98f9fa9f1e14' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4f2db5cd-6f04-4042-bf78-4255f5318cbf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4f2db5cd-6f04-4042-bf78-4255f5318cbf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4f2db5cd-6f04-4042-bf78-4255f5318cbf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4f2db5cd-6f04-4042-bf78-4255f5318cbf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dfdd7a14-37e7-4e03-a9dd-c6033202e007' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dfdd7a14-37e7-4e03-a9dd-c6033202e007' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dfdd7a14-37e7-4e03-a9dd-c6033202e007' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dfdd7a14-37e7-4e03-a9dd-c6033202e007' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/19795ea6-3cfe-48c7-89ff-26e8bfac7a62' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/19795ea6-3cfe-48c7-89ff-26e8bfac7a62' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/19795ea6-3cfe-48c7-89ff-26e8bfac7a62' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/19795ea6-3cfe-48c7-89ff-26e8bfac7a62' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3f784396-2d7e-4c52-a739-db59ac26d49b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3f784396-2d7e-4c52-a739-db59ac26d49b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3f784396-2d7e-4c52-a739-db59ac26d49b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3f784396-2d7e-4c52-a739-db59ac26d49b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/52a20acc-286a-495b-99ac-0a64b9d2b942' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/52a20acc-286a-495b-99ac-0a64b9d2b942' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/52a20acc-286a-495b-99ac-0a64b9d2b942' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/52a20acc-286a-495b-99ac-0a64b9d2b942' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4adae1bf-8e9e-47ca-bc3e-c5e06b4e5fa1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4adae1bf-8e9e-47ca-bc3e-c5e06b4e5fa1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4adae1bf-8e9e-47ca-bc3e-c5e06b4e5fa1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4adae1bf-8e9e-47ca-bc3e-c5e06b4e5fa1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/02921c23-5c11-404d-9208-2d4ddac60427' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/02921c23-5c11-404d-9208-2d4ddac60427' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/02921c23-5c11-404d-9208-2d4ddac60427' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/02921c23-5c11-404d-9208-2d4ddac60427' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/494a226b-add9-4906-84d9-774b2804ec7c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/494a226b-add9-4906-84d9-774b2804ec7c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/494a226b-add9-4906-84d9-774b2804ec7c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/494a226b-add9-4906-84d9-774b2804ec7c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c8806e83-4724-4a8c-892f-721ef2b45592' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c8806e83-4724-4a8c-892f-721ef2b45592' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c8806e83-4724-4a8c-892f-721ef2b45592' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c8806e83-4724-4a8c-892f-721ef2b45592' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a1c514e7-44ee-4462-9882-f168f1335361' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a1c514e7-44ee-4462-9882-f168f1335361' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a1c514e7-44ee-4462-9882-f168f1335361' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a1c514e7-44ee-4462-9882-f168f1335361' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b2bf07a7-f82a-4372-b4f7-f432b778ebbd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b2bf07a7-f82a-4372-b4f7-f432b778ebbd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b2bf07a7-f82a-4372-b4f7-f432b778ebbd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b2bf07a7-f82a-4372-b4f7-f432b778ebbd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/21d388c2-d5b3-45c0-9f7a-907faa52a6e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/21d388c2-d5b3-45c0-9f7a-907faa52a6e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/21d388c2-d5b3-45c0-9f7a-907faa52a6e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/21d388c2-d5b3-45c0-9f7a-907faa52a6e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1cc6c4b4-9d4d-4e52-9c54-32b646fa2460' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1cc6c4b4-9d4d-4e52-9c54-32b646fa2460' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1cc6c4b4-9d4d-4e52-9c54-32b646fa2460' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1cc6c4b4-9d4d-4e52-9c54-32b646fa2460' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10ca286b-b795-4989-8045-d827237a2b15' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10ca286b-b795-4989-8045-d827237a2b15' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10ca286b-b795-4989-8045-d827237a2b15' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10ca286b-b795-4989-8045-d827237a2b15' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/171c5f32-cc97-43af-a45f-666e32aaf435' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/171c5f32-cc97-43af-a45f-666e32aaf435' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/171c5f32-cc97-43af-a45f-666e32aaf435' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/171c5f32-cc97-43af-a45f-666e32aaf435' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d6fd56a0-6621-4935-88af-054fdd7b207b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d6fd56a0-6621-4935-88af-054fdd7b207b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d6fd56a0-6621-4935-88af-054fdd7b207b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d6fd56a0-6621-4935-88af-054fdd7b207b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d731967e-a70a-4551-8d5e-0ad4a17dcb3f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d731967e-a70a-4551-8d5e-0ad4a17dcb3f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d731967e-a70a-4551-8d5e-0ad4a17dcb3f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d731967e-a70a-4551-8d5e-0ad4a17dcb3f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/35697525-ba3a-4312-9bfe-3910aa0847d5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/35697525-ba3a-4312-9bfe-3910aa0847d5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Error: carr
    at Tc (https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:48:220)
    at H (https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:47:216)
    at new Yg (https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:93:683)
    at Zi (https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:143:24)
    at https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:157:148
    at Qf.M (https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:82:821)
    at https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:157:27
    at https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:157:159,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/35697525-ba3a-4312-9bfe-3910aa0847d5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/35697525-ba3a-4312-9bfe-3910aa0847d5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Error: carr
    at Tc (https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:48:220)
    at H (https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:47:216)
    at new Yg (https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:93:683)
    at Zi (https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:143:24)
    at https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:157:148
    at Qf.M (https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:82:821)
    at https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:157:27
    at https://pagead2.googlesyndication.com/pagead/js/rum.js?fcd=true:157:159,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/949a9993-21e3-453c-be92-c4f338f0d838' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/949a9993-21e3-453c-be92-c4f338f0d838' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/949a9993-21e3-453c-be92-c4f338f0d838' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/949a9993-21e3-453c-be92-c4f338f0d838' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b73fc0ff-5032-48c3-aa4c-a8ba877abdd9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b73fc0ff-5032-48c3-aa4c-a8ba877abdd9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b73fc0ff-5032-48c3-aa4c-a8ba877abdd9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b73fc0ff-5032-48c3-aa4c-a8ba877abdd9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/74879408-8ae0-4a88-ad53-71008a0d2c8d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/74879408-8ae0-4a88-ad53-71008a0d2c8d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/74879408-8ae0-4a88-ad53-71008a0d2c8d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/74879408-8ae0-4a88-ad53-71008a0d2c8d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cf4f8813-d6e9-4d20-853f-8259e76f7ddb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cf4f8813-d6e9-4d20-853f-8259e76f7ddb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cf4f8813-d6e9-4d20-853f-8259e76f7ddb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/cf4f8813-d6e9-4d20-853f-8259e76f7ddb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/91f59b5d-b610-4fe7-aeaa-6a9cb7f5e00b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/91f59b5d-b610-4fe7-aeaa-6a9cb7f5e00b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/91f59b5d-b610-4fe7-aeaa-6a9cb7f5e00b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/91f59b5d-b610-4fe7-aeaa-6a9cb7f5e00b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dd1ec2ba-712b-4904-91fa-9f5671bdd9e4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dd1ec2ba-712b-4904-91fa-9f5671bdd9e4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dd1ec2ba-712b-4904-91fa-9f5671bdd9e4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dd1ec2ba-712b-4904-91fa-9f5671bdd9e4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/babd3227-24e3-4681-8a31-4370dde24360' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/babd3227-24e3-4681-8a31-4370dde24360' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/babd3227-24e3-4681-8a31-4370dde24360' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/babd3227-24e3-4681-8a31-4370dde24360' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8f1627b7-a67a-44ad-bdf3-e14f5e7e358a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8f1627b7-a67a-44ad-bdf3-e14f5e7e358a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\",Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8f1627b7-a67a-44ad-bdf3-e14f5e7e358a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8f1627b7-a67a-44ad-bdf3-e14f5e7e358a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\",Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0e042d9b-8d94-442b-82ed-a6161fc82286' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0e042d9b-8d94-442b-82ed-a6161fc82286' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0e042d9b-8d94-442b-82ed-a6161fc82286' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0e042d9b-8d94-442b-82ed-a6161fc82286' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51916459-e259-4b6f-bb3d-5ce16a4ebef2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51916459-e259-4b6f-bb3d-5ce16a4ebef2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51916459-e259-4b6f-bb3d-5ce16a4ebef2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51916459-e259-4b6f-bb3d-5ce16a4ebef2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d84016da-eee8-4b61-b52e-5f3f75eadfa1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d84016da-eee8-4b61-b52e-5f3f75eadfa1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d84016da-eee8-4b61-b52e-5f3f75eadfa1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d84016da-eee8-4b61-b52e-5f3f75eadfa1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/466b9cb4-cabe-48dc-9186-a09cbc08bded' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/466b9cb4-cabe-48dc-9186-a09cbc08bded' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/466b9cb4-cabe-48dc-9186-a09cbc08bded' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/466b9cb4-cabe-48dc-9186-a09cbc08bded' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/98875a1f-162b-402d-b1a0-0c67e985d5ff' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/98875a1f-162b-402d-b1a0-0c67e985d5ff' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/98875a1f-162b-402d-b1a0-0c67e985d5ff' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/98875a1f-162b-402d-b1a0-0c67e985d5ff' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/05d12f28-5e90-4d80-ac01-4e76dfbd15f4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/05d12f28-5e90-4d80-ac01-4e76dfbd15f4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/05d12f28-5e90-4d80-ac01-4e76dfbd15f4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/05d12f28-5e90-4d80-ac01-4e76dfbd15f4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/04e46eb3-122d-445c-acf6-d5277d773680' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/04e46eb3-122d-445c-acf6-d5277d773680' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/04e46eb3-122d-445c-acf6-d5277d773680' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/04e46eb3-122d-445c-acf6-d5277d773680' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b2b1ea48-702d-4758-a67d-4844cd0e6648' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b2b1ea48-702d-4758-a67d-4844cd0e6648' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b2b1ea48-702d-4758-a67d-4844cd0e6648' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b2b1ea48-702d-4758-a67d-4844cd0e6648' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/09be810b-6e9a-4668-8288-dc441ae44300' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/09be810b-6e9a-4668-8288-dc441ae44300' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/09be810b-6e9a-4668-8288-dc441ae44300' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/09be810b-6e9a-4668-8288-dc441ae44300' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9e416730-6031-466f-8faa-13147afc164e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9e416730-6031-466f-8faa-13147afc164e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9e416730-6031-466f-8faa-13147afc164e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9e416730-6031-466f-8faa-13147afc164e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/643b4fc9-032f-4775-8075-4fbda46cea9b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/643b4fc9-032f-4775-8075-4fbda46cea9b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/643b4fc9-032f-4775-8075-4fbda46cea9b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/643b4fc9-032f-4775-8075-4fbda46cea9b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bb6b38da-70c3-4cc8-a618-ae8f4a7e5bb6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bb6b38da-70c3-4cc8-a618-ae8f4a7e5bb6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bb6b38da-70c3-4cc8-a618-ae8f4a7e5bb6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bb6b38da-70c3-4cc8-a618-ae8f4a7e5bb6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0eae30e7-705b-411e-93fe-0a3304479146' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0eae30e7-705b-411e-93fe-0a3304479146' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0eae30e7-705b-411e-93fe-0a3304479146' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0eae30e7-705b-411e-93fe-0a3304479146' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e2e0de30-8c0f-4c58-a1b9-124b0b80eabf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e2e0de30-8c0f-4c58-a1b9-124b0b80eabf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e2e0de30-8c0f-4c58-a1b9-124b0b80eabf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e2e0de30-8c0f-4c58-a1b9-124b0b80eabf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/733ffbeb-d619-49ea-94ab-4319ee527adc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/733ffbeb-d619-49ea-94ab-4319ee527adc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/733ffbeb-d619-49ea-94ab-4319ee527adc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/733ffbeb-d619-49ea-94ab-4319ee527adc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11bd93a0-9c24-4490-839f-d2d8e3e1902d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11bd93a0-9c24-4490-839f-d2d8e3e1902d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11bd93a0-9c24-4490-839f-d2d8e3e1902d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/11bd93a0-9c24-4490-839f-d2d8e3e1902d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2c1ca01a-4bd9-4007-9a8b-f24e6f3f0835' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2c1ca01a-4bd9-4007-9a8b-f24e6f3f0835' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2c1ca01a-4bd9-4007-9a8b-f24e6f3f0835' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2c1ca01a-4bd9-4007-9a8b-f24e6f3f0835' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/57a2efc4-094c-4aba-a400-237d8669152f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/57a2efc4-094c-4aba-a400-237d8669152f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/57a2efc4-094c-4aba-a400-237d8669152f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/57a2efc4-094c-4aba-a400-237d8669152f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/87b17385-8951-48c5-9eee-4c53bc93f549' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/87b17385-8951-48c5-9eee-4c53bc93f549' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/87b17385-8951-48c5-9eee-4c53bc93f549' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/87b17385-8951-48c5-9eee-4c53bc93f549' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/23f44c5e-d4e2-4039-b92e-44e0cdc1a13d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/23f44c5e-d4e2-4039-b92e-44e0cdc1a13d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/23f44c5e-d4e2-4039-b92e-44e0cdc1a13d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/23f44c5e-d4e2-4039-b92e-44e0cdc1a13d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a2e2f33b-f5de-4894-a26f-6f4584b9671c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a2e2f33b-f5de-4894-a26f-6f4584b9671c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a2e2f33b-f5de-4894-a26f-6f4584b9671c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a2e2f33b-f5de-4894-a26f-6f4584b9671c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d986992a-534d-46c2-b32c-ef2aadb6c063' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d986992a-534d-46c2-b32c-ef2aadb6c063' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d986992a-534d-46c2-b32c-ef2aadb6c063' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d986992a-534d-46c2-b32c-ef2aadb6c063' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

# Page snapshot

```yaml
- generic [active] [ref=f1136e1]:
  - generic [ref=f1136e2]:
    - generic [ref=f1136e3]:
      - link "Activate the free Logitech G Pass for your chance to get keyboards, mice, and headsets! → Get Started Close":
        - /url: /reward-pass/01a15f39-e0e7-77d8-947f-951a912807e5
        - generic [ref=f1136e4] [cursor=pointer]:
          - generic [ref=f1136e5]:
            - paragraph [ref=f1136e11]: Activate the free Logitech G Pass for your chance to get keyboards, mice, and headsets!
            - button "→ Get Started" [ref=f1136e12]
          - img "Close" [ref=f1136e13]
      - generic [ref=f1136e14]:
        - generic [ref=f1136e16]:
          - link [ref=f1136e18] [cursor=pointer]:
            - /url: /borderlands-4
            - img "Mobalytics" [ref=f1136e19]
          - generic [ref=f1136e21]:
            - link "League of Legends LoL" [ref=f1136e23] [cursor=pointer]:
              - /url: https://mobalytics.gg/lol
              - generic [ref=f1136e25]:
                - img "League of Legends" [ref=f1136e27]
                - generic [ref=f1136e28]: LoL
            - link "Teamfight Tactics TFT" [ref=f1136e30] [cursor=pointer]:
              - /url: https://mobalytics.gg/tft
              - generic [ref=f1136e32]:
                - img "Teamfight Tactics" [ref=f1136e34]
                - generic [ref=f1136e35]: TFT
            - link "Diablo 4 Diablo 4" [ref=f1136e37] [cursor=pointer]:
              - /url: https://mobalytics.gg/diablo-4
              - generic [ref=f1136e39]:
                - img "Diablo 4" [ref=f1136e41]
                - generic [ref=f1136e42]: Diablo 4
            - link "Path of Exile 2 PoE 2" [ref=f1136e44] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe-2
              - generic [ref=f1136e46]:
                - img "Path of Exile 2" [ref=f1136e48]
                - generic [ref=f1136e49]: PoE 2
            - link "Path of Exile PoE" [ref=f1136e51] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe
              - generic [ref=f1136e53]:
                - img "Path of Exile" [ref=f1136e55]
                - generic [ref=f1136e56]: PoE
            - 'link "World of Warcraft: Forever WoW Forever New" [ref=f1136e58] [cursor=pointer]':
              - /url: https://mobalytics.gg/wow-forever
              - generic [ref=f1136e60]:
                - 'img "World of Warcraft: Forever" [ref=f1136e62]'
                - generic [ref=f1136e63]: WoW Forever
                - generic [ref=f1136e64]: New
            - link "Destiny 2 Destiny 2" [ref=f1136e67] [cursor=pointer]:
              - /url: https://mobalytics.gg/destiny-2
              - generic [ref=f1136e69]:
                - img "Destiny 2" [ref=f1136e71]
                - generic [ref=f1136e72]: Destiny 2
            - link "Marathon Marathon" [ref=f1136e74] [cursor=pointer]:
              - /url: https://mobalytics.gg/marathon
              - generic [ref=f1136e76]:
                - img "Marathon" [ref=f1136e78]
                - generic [ref=f1136e79]: Marathon
            - link "Slay the Spire 2 STS 2" [ref=f1136e81] [cursor=pointer]:
              - /url: https://mobalytics.gg/slay-the-spire-2
              - generic [ref=f1136e83]:
                - img "Slay the Spire 2" [ref=f1136e85]
                - generic [ref=f1136e86]: STS 2
            - link "Deadlock Deadlock" [ref=f1136e88] [cursor=pointer]:
              - /url: https://mobalytics.gg/deadlock
              - generic [ref=f1136e90]:
                - img "Deadlock" [ref=f1136e92]
                - generic [ref=f1136e93]: Deadlock
            - link "Overwatch Overwatch" [ref=f1136e95] [cursor=pointer]:
              - /url: https://mobalytics.gg/overwatch
              - generic [ref=f1136e97]:
                - img "Overwatch" [ref=f1136e99]
                - generic [ref=f1136e100]: Overwatch
            - button [ref=f1136e102] [cursor=pointer]
          - link "Gamebase Gamebase Reviews, Previews, & More" [ref=f1136e105] [cursor=pointer]:
            - /url: https://mobalytics.gg/gamebase
            - generic [ref=f1136e106]:
              - img "Gamebase" [ref=f1136e108]
              - generic [ref=f1136e109]: Gamebase
              - generic [ref=f1136e110]: Reviews, Previews, & More
        - generic [ref=f1136e111]:
          - link [ref=f1136e112] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-borderlands-4&utm_medium=homepage&utm_source=web
            - button "Download App" [ref=f1136e114]
          - generic [ref=f1136e116]:
            - button "Play & Get Free Rewards" [ref=f1136e117] [cursor=pointer]
            - button "New Challenge Available" [ref=f1136e120] [cursor=pointer]
          - generic [ref=f1136e123]:
            - button "Sign In" [ref=f1136e125] [cursor=pointer]
            - button "Settings" [ref=f1136e127] [cursor=pointer]
        - generic [ref=f1136e130]:
          - link [ref=f1136e133] [cursor=pointer]:
            - /url: /borderlands-4
            - img "Home" [ref=f1136e134]
            - generic: Home
          - link [ref=f1136e137] [cursor=pointer]:
            - /url: /borderlands-4/profile
            - img "Profile" [ref=f1136e138]
            - generic: Profile
          - link [ref=f1136e141] [cursor=pointer]:
            - /url: /borderlands-4/planner/builds
            - img "Build Planner" [ref=f1136e142]
            - generic: Build Planner
          - link [ref=f1136e145] [cursor=pointer]:
            - /url: /borderlands-4/guides/legendary-weapons-and-gear
            - img "Legendaries" [ref=f1136e146]
            - generic: Legendaries
          - link [ref=f1136e149] [cursor=pointer]:
            - /url: /borderlands-4/builds
            - img "Builds" [ref=f1136e150]
            - generic: Builds
          - link [ref=f1136e153] [cursor=pointer]:
            - /url: /borderlands-4/vault-hunters
            - img "Vault Hunters" [ref=f1136e154]
            - generic: Vault Hunters
          - link [ref=f1136e157] [cursor=pointer]:
            - /url: /borderlands-4/guides
            - img "Guides" [ref=f1136e158]
            - generic: Guides
          - link [ref=f1136e161] [cursor=pointer]:
            - /url: /borderlands-4/shift-codes-borderlands-4
            - img "SHiFT Codes" [ref=f1136e162]
            - generic: SHiFT Codes
          - link [ref=f1136e165] [cursor=pointer]:
            - /url: /borderlands-4/wiki
            - img "Wiki" [ref=f1136e166]
            - generic: Wiki
          - link [ref=f1136e169] [cursor=pointer]:
            - /url: /borderlands-4/creators
            - img "Creators" [ref=f1136e170]
            - generic: Creators
        - generic [ref=f1136e172]:
          - main [ref=f1136e173]:
            - generic [ref=f1136e174]:
              - img "bl4 logitech free refresh takeover version a" [ref=f1136e175] [cursor=pointer]
              - generic [ref=f1136e179]:
                - generic [ref=f1136e180]:
                  - button [ref=f1136e183]:
                    - generic [ref=f1136e188]:
                      - heading "Borderlands 4 Ordnance Database" [level=1] [ref=f1136e189]:
                        - generic [ref=f1136e190]: Borderlands 4
                        - generic [ref=f1136e191]: Ordnance Database
                      - generic [ref=f1136e198]:
                        - paragraph [ref=f1136e199]: Explore all Borderlands 4 ordnance and see the explosives, grenades, and heavy gear available in the game. Each piece of ordnance brings unique effects and tactical options, giving you more ways to handle every encounter. Browse the database to discover stats, variations, and the best tools for your loadout.
                        - paragraph [ref=f1136e200]:
                          - emphasis [ref=f1136e201]: "NOTE: This content is community-sourced and created in collaboration with our contributors and creators. More information is added and may change over time."
                  - generic [ref=f1136e204]:
                    - generic [ref=f1136e210]:
                      - link "Weapons" [ref=f1136e212] [cursor=pointer]:
                        - /url: /borderlands-4/wiki/weapons
                      - link "Repkits" [ref=f1136e215] [cursor=pointer]:
                        - /url: /borderlands-4/wiki/repkits
                      - link "Ordnance" [ref=f1136e218] [cursor=pointer]:
                        - /url: /borderlands-4/wiki/ordnance
                      - link "Class Mods" [ref=f1136e222] [cursor=pointer]:
                        - /url: /borderlands-4/wiki/class-mods
                      - link "Shields" [ref=f1136e225] [cursor=pointer]:
                        - /url: /borderlands-4/wiki/shields
                      - link "Enhancements" [ref=f1136e228] [cursor=pointer]:
                        - /url: /borderlands-4/wiki/enhancements
                    - generic [ref=f1136e232]:
                      - textbox "search by name" [ref=f1136e244]:
                        - /placeholder: Search...
                      - generic [ref=f1136e247]:
                        - link "Alignment All in agreement? Grenade Ordnance Order Legendary Coordinated" [ref=f1136e248] [cursor=pointer]:
                          - /url: /borderlands-4/wiki/ordnance/alignment
                          - generic [ref=f1136e253]:
                            - generic [ref=f1136e258]:
                              - paragraph [ref=f1136e259]: Alignment
                              - paragraph [ref=f1136e260]: All in agreement?
                            - generic [ref=f1136e261]:
                              - generic [ref=f1136e262]: Grenade Ordnance
                              - generic [ref=f1136e263]: Order
                              - generic [ref=f1136e264]: Legendary
                            - paragraph [ref=f1136e265]: Coordinated
                        - link "Artillery Sphere It's the only way to be sure. Grenade Ordnance Ripper Legendary Orbiting Body - On equip, spawns an orbiting Observer that deals 15,736/s to nearby enemies. The Observer will briefly attack enemies damaged by the grenade." [ref=f1136e266] [cursor=pointer]:
                          - /url: /borderlands-4/wiki/ordnance/sphere
                          - generic [ref=f1136e271]:
                            - generic [ref=f1136e276]:
                              - paragraph [ref=f1136e277]: Artillery Sphere
                              - paragraph [ref=f1136e278]: It's the only way to be sure.
                            - generic [ref=f1136e279]:
                              - generic [ref=f1136e280]: Grenade Ordnance
                              - generic [ref=f1136e281]: Ripper
                              - generic [ref=f1136e282]: Legendary
                            - paragraph [ref=f1136e283]: Orbiting Body - On equip, spawns an orbiting Observer that deals 15,736/s to nearby enemies. The Observer will briefly attack enemies damaged by the grenade.
                        - link "Atling Gun Move in silence... Heavy Weapon Ordnance Vladof Legendary Extremely High Fire Rate & Projectiles home in on target" [ref=f1136e284] [cursor=pointer]:
                          - /url: /borderlands-4/wiki/ordnance/atling-gun
                          - generic [ref=f1136e289]:
                            - generic [ref=f1136e294]:
                              - paragraph [ref=f1136e295]: Atling Gun
                              - paragraph [ref=f1136e296]: Move in silence...
                            - generic [ref=f1136e297]:
                              - generic [ref=f1136e298]: Heavy Weapon Ordnance
                              - generic [ref=f1136e299]: Vladof
                              - generic [ref=f1136e300]: Legendary
                            - paragraph [ref=f1136e301]: Extremely High Fire Rate & Projectiles home in on target
                        - link "Barb'ara Ooh, mami. Grenade Ordnance Vladof Legendary Tentacles" [ref=f1136e302] [cursor=pointer]:
                          - /url: /borderlands-4/wiki/ordnance/barbara
                          - generic [ref=f1136e307]:
                            - generic [ref=f1136e312]:
                              - paragraph [ref=f1136e313]: Barb'ara
                              - paragraph [ref=f1136e314]: Ooh, mami.
                            - generic [ref=f1136e315]:
                              - generic [ref=f1136e316]: Grenade Ordnance
                              - generic [ref=f1136e317]: Vladof
                              - generic [ref=f1136e318]: Legendary
                            - paragraph [ref=f1136e319]: Tentacles
                        - link "Bismuth-Tipped Dagger Get down with the Bismuth! Grenade Ordnance Jakobs Legendary Bismuth - Attaches on Hit. Enemies take 15% more Corrosive damage for each attached Dagger." [ref=f1136e320] [cursor=pointer]:
                          - /url: /borderlands-4/wiki/ordnance/bismuth-tipped-dagger
                          - generic [ref=f1136e325]:
                            - generic [ref=f1136e330]:
                              - paragraph [ref=f1136e331]: Bismuth-Tipped Dagger
                              - paragraph [ref=f1136e332]: Get down with the Bismuth!
                            - generic [ref=f1136e333]:
                              - generic [ref=f1136e334]: Grenade Ordnance
                              - generic [ref=f1136e335]: Jakobs
                              - generic [ref=f1136e336]: Legendary
                            - paragraph [ref=f1136e337]: Bismuth - Attaches on Hit. Enemies take 15% more Corrosive damage for each attached Dagger.
                        - link "Blockbuster They don't make 'em like this anymore. Grenade Ordnance Vladof Legendary Splits into MIRV and bouncy grenades" [ref=f1136e338] [cursor=pointer]:
                          - /url: /borderlands-4/wiki/ordnance/blockbuster
                          - generic [ref=f1136e343]:
                            - generic [ref=f1136e348]:
                              - paragraph [ref=f1136e349]: Blockbuster
                              - paragraph [ref=f1136e350]: They don't make 'em like this anymore.
                            - generic [ref=f1136e351]:
                              - generic [ref=f1136e352]: Grenade Ordnance
                              - generic [ref=f1136e353]: Vladof
                              - generic [ref=f1136e354]: Legendary
                            - paragraph [ref=f1136e355]: Splits into MIRV and bouncy grenades
                        - link "Bottled Lightning Hen scarts and filly tails, make lofty ships wear low sails. Heavy Weapon Ordnance Maliwan Legendary" [ref=f1136e356] [cursor=pointer]:
                          - /url: /borderlands-4/wiki/ordnance/bottled-lightning
                          - generic [ref=f1136e361]:
                            - generic [ref=f1136e366]:
                              - paragraph [ref=f1136e367]: Bottled Lightning
                              - paragraph [ref=f1136e368]: Hen scarts and filly tails, make lofty ships wear low sails.
                            - generic [ref=f1136e369]:
                              - generic [ref=f1136e370]: Heavy Weapon Ordnance
                              - generic [ref=f1136e371]: Maliwan
                              - generic [ref=f1136e372]: Legendary
                        - link "Buoy No wake zone... Grenade Ordnance Ripper Legendary" [ref=f1136e373] [cursor=pointer]:
                          - /url: /borderlands-4/wiki/ordnance/buoy
                          - generic [ref=f1136e378]:
                            - generic [ref=f1136e383]:
                              - paragraph [ref=f1136e384]: Buoy
                              - paragraph [ref=f1136e385]: No wake zone...
                            - generic [ref=f1136e386]:
                              - generic [ref=f1136e387]: Grenade Ordnance
                              - generic [ref=f1136e388]: Ripper
                              - generic [ref=f1136e389]: Legendary
                        - link "Buzz Axe TURN AROUND! Grenade Ordnance Daedalus Legendary" [ref=f1136e390] [cursor=pointer]:
                          - /url: /borderlands-4/wiki/ordnance/buzz-axe
                          - generic [ref=f1136e395]:
                            - generic [ref=f1136e400]:
                              - paragraph [ref=f1136e401]: Buzz Axe
                              - paragraph [ref=f1136e402]: TURN AROUND!
                            - generic [ref=f1136e403]:
                              - generic [ref=f1136e404]: Grenade Ordnance
                              - generic [ref=f1136e405]: Daedalus
                              - generic [ref=f1136e406]: Legendary
                        - link "Chaumurky Will someone try it tonight? Grenade Ordnance Order Legendary Continuously homes in on a target" [ref=f1136e407] [cursor=pointer]:
                          - /url: /borderlands-4/wiki/ordnance/chaumurky
                          - generic [ref=f1136e412]:
                            - generic [ref=f1136e417]:
                              - paragraph [ref=f1136e418]: Chaumurky
                              - paragraph [ref=f1136e419]: Will someone try it tonight?
                            - generic [ref=f1136e420]:
                              - generic [ref=f1136e421]: Grenade Ordnance
                              - generic [ref=f1136e422]: Order
                              - generic [ref=f1136e423]: Legendary
                            - paragraph [ref=f1136e424]: Continuously homes in on a target
                        - link "Cooper Duper Ba-Ba-BARREL! Heavy Weapon Ordnance Maliwan Legendary Holo-Barrel - Shoots holographic barrels that pierce enemies and attach to the world. Shooting attached barrels causes it to explode, dealing 21,666 damage." [ref=f1136e425] [cursor=pointer]:
                          - /url: /borderlands-4/wiki/ordnance/cooper-duper
                          - generic [ref=f1136e430]:
                            - generic [ref=f1136e435]:
                              - paragraph [ref=f1136e436]: Cooper Duper
                              - paragraph [ref=f1136e437]: Ba-Ba-BARREL!
                            - generic [ref=f1136e438]:
                              - generic [ref=f1136e439]: Heavy Weapon Ordnance
                              - generic [ref=f1136e440]: Maliwan
                              - generic [ref=f1136e441]: Legendary
                            - paragraph [ref=f1136e442]: Holo-Barrel - Shoots holographic barrels that pierce enemies and attach to the world. Shooting attached barrels causes it to explode, dealing 21,666 damage.
                        - link "Countermeasure Separate the wheat from the chaff. Grenade Ordnance Torgue Legendary Decoy - Launches flares that distract nearby enemies" [ref=f1136e443] [cursor=pointer]:
                          - /url: /borderlands-4/wiki/ordnance/countermeasure
                          - generic [ref=f1136e448]:
                            - generic [ref=f1136e453]:
                              - paragraph [ref=f1136e454]: Countermeasure
                              - paragraph [ref=f1136e455]: Separate the wheat from the chaff.
                            - generic [ref=f1136e456]:
                              - generic [ref=f1136e457]: Grenade Ordnance
                              - generic [ref=f1136e458]: Torgue
                              - generic [ref=f1136e459]: Legendary
                            - paragraph [ref=f1136e460]: Decoy - Launches flares that distract nearby enemies
                      - button "Show more" [ref=f1136e461] [cursor=pointer]
                - status [ref=f1136e462]
            - generic [ref=f1136e464] [cursor=pointer]
          - complementary [ref=f1136e468]:
            - generic [ref=f1136e469]:
              - generic [ref=f1136e471]:
                - generic [ref=f1136e473] [cursor=pointer]:
                  - generic [ref=f1136e474]: Advertisement
                  - generic [ref=f1136e475]: Remove Ads
                - generic [ref=f1136e481] [cursor=pointer]:
                  - generic [ref=f1136e482]: Remove all ads
                  - generic [ref=f1136e483]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=f1136e484]
              - generic [ref=f1136e486]:
                - generic [ref=f1136e488] [cursor=pointer]:
                  - generic [ref=f1136e489]: Advertisement
                  - generic [ref=f1136e490]: Remove Ads
                - generic [ref=f1136e496] [cursor=pointer]:
                  - generic [ref=f1136e497]: Remove all ads
                  - generic [ref=f1136e498]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=f1136e499]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=f1136e502]:
    - banner [ref=f1136e503]:
      - generic [ref=f1136e504] [cursor=pointer]:
        - generic [ref=f1136e505]: Advertisement
        - generic [ref=f1136e506]: Remove Ads
    - generic [ref=f1136e510] [cursor=pointer]:
      - generic [ref=f1136e511]: Remove all ads
      - generic [ref=f1136e512]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=f1136e513]
```

# Test source

```ts
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
  573 |     });
  574 | 
  575 |     for (const takeLink of filteredLinks) {
  576 |       consoleMessages.length = 0;
  577 |       pageErrors.length = 0;
  578 | 
  579 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  580 | 
  581 |       await test.step(`Open parsed page: ${link}`, async () => {
  582 |         await page.goto(link);
  583 |         await page.waitForTimeout(1000);
  584 |       });
  585 | 
  586 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  587 | 
  588 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  589 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  590 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  591 |       });
  592 |     }
  593 |   });
  594 | 
  595 |   test(`Check that hydration is ok on Borderlands-4`, async ({ page, request }) => {
  596 |     let filteredLinks;
  597 | 
  598 |     await test.step(`Parse up to ${quantityLinks} links from Borderlands-4 sitemap: ${process.env.BASE_URL}/borderlands-4/sitemap.xml`, async () => {
  599 |       const response = await request.get(`${process.env.BASE_URL}/borderlands-4/sitemap.xml`);
  600 |       await test.step(`Expected Result: ${process.env.BASE_URL}/borderlands-4/sitemap.xml returns with ${response.status()}`, async () => {
  601 |         expect(response.ok()).toBeTruthy();
  602 |       });
  603 |       const xmlData = await response.text();
  604 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  605 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  606 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  607 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  608 | 
  609 |       filteredLinks = arrayLinks
  610 |         .filter((match) => {
  611 |           const filterPattern = /mobalytics\.gg\/borderlands-4/;
  612 |           return filterPattern.test(match.groups.link);
  613 |         })
  614 |         .slice(0, quantityLinks);
  615 |     });
  616 | 
  617 |     const consoleMessages = [];
  618 |     const pageErrors = [];
  619 |     page.on('console', (msg) => {
  620 |       if (msg.type() === 'error') {
  621 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  622 |         // console.log(consoleInfo);
  623 |         consoleMessages.push(consoleInfo);
  624 |       }
  625 |     });
  626 |     page.on('pageerror', (error) => {
  627 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  628 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  629 |       //   console.log(errorInfo);
  630 |       // }
  631 |       pageErrors.push(errorInfo);
  632 |     });
  633 | 
  634 |     for (const takeLink of filteredLinks) {
  635 |       consoleMessages.length = 0;
  636 |       pageErrors.length = 0;
  637 | 
  638 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  639 | 
  640 |       await test.step(`Open parsed page: ${link}`, async () => {
  641 |         await page.goto(link);
  642 |         await page.waitForTimeout(1000);
  643 |       });
  644 | 
  645 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  646 | 
  647 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  648 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
> 649 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      |                                               ^ Error: expect(received).not.toMatch(expected)
  650 |       });
  651 |     }
  652 |   });
  653 | 
  654 |   test(`Check that hydration is ok on News`, async ({ page, request }) => {
  655 |     let filteredLinks;
  656 | 
  657 |     await test.step(`Parse up to ${quantityLinks} links from News sitemap: ${process.env.BASE_URL}/news/sitemap.xml`, async () => {
  658 |       const response = await request.get(`${process.env.BASE_URL}/news/sitemap.xml`);
  659 |       await test.step(`Expected Result: ${process.env.BASE_URL}/news/sitemap.xml returns with ${response.status()}`, async () => {
  660 |         expect(response.ok()).toBeTruthy();
  661 |       });
  662 |       const xmlData = await response.text();
  663 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  664 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  665 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  666 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  667 | 
  668 |       filteredLinks = arrayLinks
  669 |         .filter((match) => {
  670 |           const filterPattern = /mobalytics\.gg\/news/;
  671 |           return filterPattern.test(match.groups.link);
  672 |         })
  673 |         .slice(0, quantityLinks);
  674 |     });
  675 | 
  676 |     const consoleMessages = [];
  677 |     const pageErrors = [];
  678 |     page.on('console', (msg) => {
  679 |       if (msg.type() === 'error') {
  680 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  681 |         // console.log(consoleInfo);
  682 |         consoleMessages.push(consoleInfo);
  683 |       }
  684 |     });
  685 |     page.on('pageerror', (error) => {
  686 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  687 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  688 |       //   console.log(errorInfo);
  689 |       // }
  690 |       pageErrors.push(errorInfo);
  691 |     });
  692 | 
  693 |     for (const takeLink of filteredLinks) {
  694 |       consoleMessages.length = 0;
  695 |       pageErrors.length = 0;
  696 | 
  697 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  698 | 
  699 |       await test.step(`Open parsed page: ${link}`, async () => {
  700 |         await page.goto(link);
  701 |         await page.waitForTimeout(1000);
  702 |       });
  703 | 
  704 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  705 | 
  706 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  707 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  708 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  709 |       });
  710 |     }
  711 |   });
  712 | 
  713 |   test(`Check that hydration is ok on ZZZ`, async ({ page, request }) => {
  714 |     let filteredLinks;
  715 | 
  716 |     await test.step(`Parse up to ${quantityLinks} links from ZZZ sitemap: ${process.env.BASE_URL}/zzz/sitemap.xml`, async () => {
  717 |       const response = await request.get(`${process.env.BASE_URL}/zzz/sitemap.xml`);
  718 |       await test.step(`Expected Result: ${process.env.BASE_URL}/zzz/sitemap.xml returns with ${response.status()}`, async () => {
  719 |         expect(response.ok()).toBeTruthy();
  720 |       });
  721 |       const xmlData = await response.text();
  722 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  723 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  724 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  725 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  726 | 
  727 |       filteredLinks = arrayLinks
  728 |         .filter((match) => {
  729 |           const filterPattern = /mobalytics\.gg\/zzz/;
  730 |           return filterPattern.test(match.groups.link);
  731 |         })
  732 |         .slice(0, quantityLinks);
  733 |     });
  734 | 
  735 |     const consoleMessages = [];
  736 |     const pageErrors = [];
  737 |     page.on('console', (msg) => {
  738 |       if (msg.type() === 'error') {
  739 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  740 |         // console.log(consoleInfo);
  741 |         consoleMessages.push(consoleInfo);
  742 |       }
  743 |     });
  744 |     page.on('pageerror', (error) => {
  745 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  746 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  747 |       //   console.log(errorInfo);
  748 |       // }
  749 |       pageErrors.push(errorInfo);
```
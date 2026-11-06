# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hydration.test.js >> Check hydration is successfully for each project >> Check that hydration is ok on Riftbound
- Location: e2e-tests/hydration.test.js:359:3

# Error details

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b45615eb-3f69-44e4-a2e8-934ee9192a4a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b45615eb-3f69-44e4-a2e8-934ee9192a4a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b45615eb-3f69-44e4-a2e8-934ee9192a4a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b45615eb-3f69-44e4-a2e8-934ee9192a4a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bdcc4acd-6058-46d0-af99-2a7c69e10fc6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 400 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bdcc4acd-6058-46d0-af99-2a7c69e10fc6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 400 (),Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bdcc4acd-6058-46d0-af99-2a7c69e10fc6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 400 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bdcc4acd-6058-46d0-af99-2a7c69e10fc6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 400 (),Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d9f7c27d-6732-4683-bd7e-b633d209e5c0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d9f7c27d-6732-4683-bd7e-b633d209e5c0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d9f7c27d-6732-4683-bd7e-b633d209e5c0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d9f7c27d-6732-4683-bd7e-b633d209e5c0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/80c205c5-011b-46a5-b51b-a5a2975e0101' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/80c205c5-011b-46a5-b51b-a5a2975e0101' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 400 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/80c205c5-011b-46a5-b51b-a5a2975e0101' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/80c205c5-011b-46a5-b51b-a5a2975e0101' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 400 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b423be8-41f5-4ae5-87d2-3ad242cfce59' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b423be8-41f5-4ae5-87d2-3ad242cfce59' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b423be8-41f5-4ae5-87d2-3ad242cfce59' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b423be8-41f5-4ae5-87d2-3ad242cfce59' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/df407ade-c159-489d-ab16-17edd146f576' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/df407ade-c159-489d-ab16-17edd146f576' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/df407ade-c159-489d-ab16-17edd146f576' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/df407ade-c159-489d-ab16-17edd146f576' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fbattlefields&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4e3810b7-2ca0-4ba3-8398-d2fd728dbbd1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fbattlefields&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4e3810b7-2ca0-4ba3-8398-d2fd728dbbd1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fbattlefields&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4e3810b7-2ca0-4ba3-8398-d2fd728dbbd1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fbattlefields&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4e3810b7-2ca0-4ba3-8398-d2fd728dbbd1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/69a34964-6cf7-48f3-8240-8ead8d34d0fa' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/69a34964-6cf7-48f3-8240-8ead8d34d0fa' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/69a34964-6cf7-48f3-8240-8ead8d34d0fa' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/69a34964-6cf7-48f3-8240-8ead8d34d0fa' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c9af4ab5-6836-4aae-b5cf-1ffc6d62a0bb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c9af4ab5-6836-4aae-b5cf-1ffc6d62a0bb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c9af4ab5-6836-4aae-b5cf-1ffc6d62a0bb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c9af4ab5-6836-4aae-b5cf-1ffc6d62a0bb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d7a76735-0856-4b69-8eee-d4a9f5f2fb42' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d7a76735-0856-4b69-8eee-d4a9f5f2fb42' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d7a76735-0856-4b69-8eee-d4a9f5f2fb42' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d7a76735-0856-4b69-8eee-d4a9f5f2fb42' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d83b14b9-314d-46f0-a2a2-d5f604b75f97' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d83b14b9-314d-46f0-a2a2-d5f604b75f97' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d83b14b9-314d-46f0-a2a2-d5f604b75f97' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d83b14b9-314d-46f0-a2a2-d5f604b75f97' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/412c8c7b-303b-47a3-8174-5dca9ca89198' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/412c8c7b-303b-47a3-8174-5dca9ca89198' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/412c8c7b-303b-47a3-8174-5dca9ca89198' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/412c8c7b-303b-47a3-8174-5dca9ca89198' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51cb9bcc-3155-44c4-a8a6-ae5c50513d63' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51cb9bcc-3155-44c4-a8a6-ae5c50513d63' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51cb9bcc-3155-44c4-a8a6-ae5c50513d63' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/51cb9bcc-3155-44c4-a8a6-ae5c50513d63' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a706d012-8f15-4cc5-9738-d14cff75a53e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a706d012-8f15-4cc5-9738-d14cff75a53e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a706d012-8f15-4cc5-9738-d14cff75a53e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a706d012-8f15-4cc5-9738-d14cff75a53e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c949f347-486b-46cc-b33e-e8b408c88632' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c949f347-486b-46cc-b33e-e8b408c88632' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c949f347-486b-46cc-b33e-e8b408c88632' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c949f347-486b-46cc-b33e-e8b408c88632' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/eaa0e6db-ac83-4bac-993e-b7d0781e0e91' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/eaa0e6db-ac83-4bac-993e-b7d0781e0e91' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/eaa0e6db-ac83-4bac-993e-b7d0781e0e91' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/eaa0e6db-ac83-4bac-993e-b7d0781e0e91' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d00ebbcb-ced4-4f23-b226-736ad3dbd54d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d00ebbcb-ced4-4f23-b226-736ad3dbd54d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d00ebbcb-ced4-4f23-b226-736ad3dbd54d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d00ebbcb-ced4-4f23-b226-736ad3dbd54d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/83e123ac-4823-44a4-ab0d-7a3d2e62a0dd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/83e123ac-4823-44a4-ab0d-7a3d2e62a0dd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/83e123ac-4823-44a4-ab0d-7a3d2e62a0dd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/83e123ac-4823-44a4-ab0d-7a3d2e62a0dd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1669cf04-6d8b-4b10-b54a-4953d26ff856' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1669cf04-6d8b-4b10-b54a-4953d26ff856' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1669cf04-6d8b-4b10-b54a-4953d26ff856' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1669cf04-6d8b-4b10-b54a-4953d26ff856' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fjayce-defender-of-tomorrow-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e0886552-a444-4f85-a777-90bd2f4e414a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fjayce-defender-of-tomorrow-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e0886552-a444-4f85-a777-90bd2f4e414a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fjayce-defender-of-tomorrow-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e0886552-a444-4f85-a777-90bd2f4e414a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fjayce-defender-of-tomorrow-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e0886552-a444-4f85-a777-90bd2f4e414a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/31404c0e-fe7f-47b6-b640-b98bcefb95bb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/31404c0e-fe7f-47b6-b640-b98bcefb95bb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/31404c0e-fe7f-47b6-b640-b98bcefb95bb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/31404c0e-fe7f-47b6-b640-b98bcefb95bb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0adeb0f6-ca2b-4a37-ad38-843f560a7ade' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0adeb0f6-ca2b-4a37-ad38-843f560a7ade' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0adeb0f6-ca2b-4a37-ad38-843f560a7ade' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0adeb0f6-ca2b-4a37-ad38-843f560a7ade' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2f15313a-be54-473a-9196-26b9ac83731f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2f15313a-be54-473a-9196-26b9ac83731f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2f15313a-be54-473a-9196-26b9ac83731f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2f15313a-be54-473a-9196-26b9ac83731f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b5adad94-70e4-4404-86a6-337993af44c4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b5adad94-70e4-4404-86a6-337993af44c4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b5adad94-70e4-4404-86a6-337993af44c4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b5adad94-70e4-4404-86a6-337993af44c4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/adba6755-044f-4e2d-8a9c-5f85041ed0a4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/adba6755-044f-4e2d-8a9c-5f85041ed0a4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/adba6755-044f-4e2d-8a9c-5f85041ed0a4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/adba6755-044f-4e2d-8a9c-5f85041ed0a4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2a8a93f9-6a65-4e88-9f2b-d96dbbf5fba2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2a8a93f9-6a65-4e88-9f2b-d96dbbf5fba2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2a8a93f9-6a65-4e88-9f2b-d96dbbf5fba2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2a8a93f9-6a65-4e88-9f2b-d96dbbf5fba2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a3d5ac20-b43e-4e55-8e73-75e2fd3708f8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a3d5ac20-b43e-4e55-8e73-75e2fd3708f8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a3d5ac20-b43e-4e55-8e73-75e2fd3708f8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a3d5ac20-b43e-4e55-8e73-75e2fd3708f8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/db4092dd-91f8-4cea-a572-bfb48cf2d564' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/db4092dd-91f8-4cea-a572-bfb48cf2d564' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/db4092dd-91f8-4cea-a572-bfb48cf2d564' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/db4092dd-91f8-4cea-a572-bfb48cf2d564' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/49b5cb76-58d8-408a-bf97-25dcaf8aa17b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/49b5cb76-58d8-408a-bf97-25dcaf8aa17b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/49b5cb76-58d8-408a-bf97-25dcaf8aa17b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/49b5cb76-58d8-408a-bf97-25dcaf8aa17b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Refused to execute script from 'https://f75f7a4dd84bf6a656b064316a323709.safeframe.googlesyndication.com/safeframe/1-0-45/html/mraid.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d397fc0e-5e3d-44a7-ac23-ebf364f6e696' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d397fc0e-5e3d-44a7-ac23-ebf364f6e696' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Refused to execute script from 'https://f75f7a4dd84bf6a656b064316a323709.safeframe.googlesyndication.com/safeframe/1-0-45/html/mraid.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d397fc0e-5e3d-44a7-ac23-ebf364f6e696' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d397fc0e-5e3d-44a7-ac23-ebf364f6e696' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3bc49c2d-330d-4285-9e2d-450cd384d16f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3bc49c2d-330d-4285-9e2d-450cd384d16f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3bc49c2d-330d-4285-9e2d-450cd384d16f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3bc49c2d-330d-4285-9e2d-450cd384d16f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fmaster-yi-wuju-bladesman-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/645dabf5-6a71-4206-9bde-e1c3e87cc8cf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fmaster-yi-wuju-bladesman-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/645dabf5-6a71-4206-9bde-e1c3e87cc8cf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fmaster-yi-wuju-bladesman-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/645dabf5-6a71-4206-9bde-e1c3e87cc8cf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fmaster-yi-wuju-bladesman-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/645dabf5-6a71-4206-9bde-e1c3e87cc8cf' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/055bc31d-c1b5-4d7a-b1a2-b3c4568b71cb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/055bc31d-c1b5-4d7a-b1a2-b3c4568b71cb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/055bc31d-c1b5-4d7a-b1a2-b3c4568b71cb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/055bc31d-c1b5-4d7a-b1a2-b3c4568b71cb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c4a70d32-67e9-485f-9bdf-c7795ebcaeb2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c4a70d32-67e9-485f-9bdf-c7795ebcaeb2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c4a70d32-67e9-485f-9bdf-c7795ebcaeb2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c4a70d32-67e9-485f-9bdf-c7795ebcaeb2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1a6a9b44-2668-45fc-a43c-28d71bbe202e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1a6a9b44-2668-45fc-a43c-28d71bbe202e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1a6a9b44-2668-45fc-a43c-28d71bbe202e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1a6a9b44-2668-45fc-a43c-28d71bbe202e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ff78f5be-d020-4ad7-b248-99332e0c7b1b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ff78f5be-d020-4ad7-b248-99332e0c7b1b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ff78f5be-d020-4ad7-b248-99332e0c7b1b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ff78f5be-d020-4ad7-b248-99332e0c7b1b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2d030143-e9cd-46ca-8525-12f78c51551e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2d030143-e9cd-46ca-8525-12f78c51551e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2d030143-e9cd-46ca-8525-12f78c51551e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2d030143-e9cd-46ca-8525-12f78c51551e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fpoppy-keeper-of-the-hammer-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c3bd8741-811a-4fa3-8631-f20fb9011433' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fpoppy-keeper-of-the-hammer-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c3bd8741-811a-4fa3-8631-f20fb9011433' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fpoppy-keeper-of-the-hammer-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c3bd8741-811a-4fa3-8631-f20fb9011433' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fpoppy-keeper-of-the-hammer-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c3bd8741-811a-4fa3-8631-f20fb9011433' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/72155be6-a5eb-46ac-96e3-76365d38f942' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/72155be6-a5eb-46ac-96e3-76365d38f942' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/72155be6-a5eb-46ac-96e3-76365d38f942' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/72155be6-a5eb-46ac-96e3-76365d38f942' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e9bc86d2-90dc-49ac-9b79-0a212b209ba6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e9bc86d2-90dc-49ac-9b79-0a212b209ba6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e9bc86d2-90dc-49ac-9b79-0a212b209ba6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e9bc86d2-90dc-49ac-9b79-0a212b209ba6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/917bba3f-e3ca-49f9-823d-da69d7fa2da8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/917bba3f-e3ca-49f9-823d-da69d7fa2da8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/917bba3f-e3ca-49f9-823d-da69d7fa2da8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/917bba3f-e3ca-49f9-823d-da69d7fa2da8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c5d66ef5-3c82-4042-8583-c76b00eac3e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c5d66ef5-3c82-4042-8583-c76b00eac3e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c5d66ef5-3c82-4042-8583-c76b00eac3e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c5d66ef5-3c82-4042-8583-c76b00eac3e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c9e528e5-9a1b-4c13-86ad-a70f7b96b04c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c9e528e5-9a1b-4c13-86ad-a70f7b96b04c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c9e528e5-9a1b-4c13-86ad-a70f7b96b04c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c9e528e5-9a1b-4c13-86ad-a70f7b96b04c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5af9aa6f-c991-456f-9870-4c57a568f4b9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5af9aa6f-c991-456f-9870-4c57a568f4b9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5af9aa6f-c991-456f-9870-4c57a568f4b9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5af9aa6f-c991-456f-9870-4c57a568f4b9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3a0308ce-b1db-474e-acc3-6569867cfe77' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3a0308ce-b1db-474e-acc3-6569867cfe77' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3a0308ce-b1db-474e-acc3-6569867cfe77' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3a0308ce-b1db-474e-acc3-6569867cfe77' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fshen-eye-of-twilight-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3748bb52-75f7-43ec-aeaf-5ef1b566b70e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fshen-eye-of-twilight-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3748bb52-75f7-43ec-aeaf-5ef1b566b70e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fshen-eye-of-twilight-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3748bb52-75f7-43ec-aeaf-5ef1b566b70e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fshen-eye-of-twilight-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3748bb52-75f7-43ec-aeaf-5ef1b566b70e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2478e30f-8a60-45e2-9f07-551e0bc6e5bc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2478e30f-8a60-45e2-9f07-551e0bc6e5bc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2478e30f-8a60-45e2-9f07-551e0bc6e5bc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2478e30f-8a60-45e2-9f07-551e0bc6e5bc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fteemo-swift-scout-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/00c0fa0b-b8c3-4661-bdaa-ff4c5bbc7889' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fteemo-swift-scout-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/00c0fa0b-b8c3-4661-bdaa-ff4c5bbc7889' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fteemo-swift-scout-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/00c0fa0b-b8c3-4661-bdaa-ff4c5bbc7889' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Friftbound%2Fteemo-swift-scout-decks&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/00c0fa0b-b8c3-4661-bdaa-ff4c5bbc7889' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f64799b4-3c04-4206-a90b-d1aa49e3cead' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f64799b4-3c04-4206-a90b-d1aa49e3cead' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f64799b4-3c04-4206-a90b-d1aa49e3cead' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f64799b4-3c04-4206-a90b-d1aa49e3cead' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c2dd94e7-2d16-4fe0-9364-470e15c75148' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c2dd94e7-2d16-4fe0-9364-470e15c75148' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c2dd94e7-2d16-4fe0-9364-470e15c75148' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c2dd94e7-2d16-4fe0-9364-470e15c75148' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

# Page snapshot

```yaml
- generic [active] [ref=f941e1]:
  - generic [ref=f941e2]:
    - generic [ref=f941e3]:
      - link "Activate the free Logitech G Pass for your chance to get keyboards, mice, and headsets! → Get Started Close":
        - /url: /reward-pass/01a15f39-e0e7-77d8-947f-951a912807e5
        - generic [ref=f941e4] [cursor=pointer]:
          - generic [ref=f941e5]:
            - textbox [ref=f941e10]:
              - paragraph [ref=f941e11]: Activate the free Logitech G Pass for your chance to get keyboards, mice, and headsets!
            - button "→ Get Started" [ref=f941e12]
          - img "Close" [ref=f941e13]
      - generic [ref=f941e14]:
        - generic [ref=f941e16]:
          - link [ref=f941e18] [cursor=pointer]:
            - /url: /riftbound
            - img "Mobalytics" [ref=f941e19]
          - generic [ref=f941e21]:
            - link "League of Legends LoL" [ref=f941e23] [cursor=pointer]:
              - /url: https://mobalytics.gg/lol
              - generic [ref=f941e25]:
                - img "League of Legends" [ref=f941e27]
                - generic [ref=f941e28]: LoL
            - link "Teamfight Tactics TFT" [ref=f941e30] [cursor=pointer]:
              - /url: https://mobalytics.gg/tft
              - generic [ref=f941e32]:
                - img "Teamfight Tactics" [ref=f941e34]
                - generic [ref=f941e35]: TFT
            - link "Diablo 4 Diablo 4" [ref=f941e37] [cursor=pointer]:
              - /url: https://mobalytics.gg/diablo-4
              - generic [ref=f941e39]:
                - img "Diablo 4" [ref=f941e41]
                - generic [ref=f941e42]: Diablo 4
            - link "Path of Exile 2 PoE 2" [ref=f941e44] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe-2
              - generic [ref=f941e46]:
                - img "Path of Exile 2" [ref=f941e48]
                - generic [ref=f941e49]: PoE 2
            - link "Path of Exile PoE" [ref=f941e51] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe
              - generic [ref=f941e53]:
                - img "Path of Exile" [ref=f941e55]
                - generic [ref=f941e56]: PoE
            - 'link "World of Warcraft: Forever WoW Forever New" [ref=f941e58] [cursor=pointer]':
              - /url: https://mobalytics.gg/wow-forever
              - generic [ref=f941e60]:
                - 'img "World of Warcraft: Forever" [ref=f941e62]'
                - generic [ref=f941e63]: WoW Forever
                - generic [ref=f941e64]: New
            - link "Destiny 2 Destiny 2" [ref=f941e67] [cursor=pointer]:
              - /url: https://mobalytics.gg/destiny-2
              - generic [ref=f941e69]:
                - img "Destiny 2" [ref=f941e71]
                - generic [ref=f941e72]: Destiny 2
            - link "Marathon Marathon" [ref=f941e74] [cursor=pointer]:
              - /url: https://mobalytics.gg/marathon
              - generic [ref=f941e76]:
                - img "Marathon" [ref=f941e78]
                - generic [ref=f941e79]: Marathon
            - link "Slay the Spire 2 STS 2" [ref=f941e81] [cursor=pointer]:
              - /url: https://mobalytics.gg/slay-the-spire-2
              - generic [ref=f941e83]:
                - img "Slay the Spire 2" [ref=f941e85]
                - generic [ref=f941e86]: STS 2
            - link "Deadlock Deadlock" [ref=f941e88] [cursor=pointer]:
              - /url: https://mobalytics.gg/deadlock
              - generic [ref=f941e90]:
                - img "Deadlock" [ref=f941e92]
                - generic [ref=f941e93]: Deadlock
            - link "Overwatch Overwatch" [ref=f941e95] [cursor=pointer]:
              - /url: https://mobalytics.gg/overwatch
              - generic [ref=f941e97]:
                - img "Overwatch" [ref=f941e99]
                - generic [ref=f941e100]: Overwatch
            - button [ref=f941e102] [cursor=pointer]
          - link "Gamebase Gamebase Reviews, Previews, & More" [ref=f941e105] [cursor=pointer]:
            - /url: https://mobalytics.gg/gamebase
            - generic [ref=f941e106]:
              - img "Gamebase" [ref=f941e108]
              - generic [ref=f941e109]: Gamebase
              - generic [ref=f941e110]: Reviews, Previews, & More
        - generic [ref=f941e111]:
          - link [ref=f941e112] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-riftbound&utm_medium=homepage&utm_source=web
            - button "Download App" [ref=f941e114]
          - generic [ref=f941e116]:
            - button "Play & Get Free Rewards" [ref=f941e117] [cursor=pointer]
            - button "New Challenge Available" [ref=f941e120] [cursor=pointer]
          - generic [ref=f941e123]:
            - button "Sign In" [ref=f941e125] [cursor=pointer]
            - button "Settings" [ref=f941e127] [cursor=pointer]
        - generic [ref=f941e130]:
          - link [ref=f941e133] [cursor=pointer]:
            - /url: /riftbound
            - img "Home" [ref=f941e134]
            - generic: Home
          - link [ref=f941e137] [cursor=pointer]:
            - /url: /riftbound/profile
            - img "Profile" [ref=f941e138]
            - generic: Profile
          - link [ref=f941e141] [cursor=pointer]:
            - /url: /riftbound/decks
            - img "Decks" [ref=f941e142]
            - generic: Decks
          - link [ref=f941e145] [cursor=pointer]:
            - /url: /riftbound/tournaments
            - img "Tournaments" [ref=f941e146]
            - generic: Tournaments
          - link [ref=f941e149] [cursor=pointer]:
            - /url: /riftbound/tier-list
            - img "Tier List" [ref=f941e150]
            - generic: Tier List
          - link [ref=f941e153] [cursor=pointer]:
            - /url: /riftbound/guides
            - img "Guides" [ref=f941e154]
            - generic: Guides
          - link [ref=f941e157] [cursor=pointer]:
            - /url: /riftbound/gallery
            - img "Gallery" [ref=f941e158]
            - generic: Gallery
        - generic [ref=f941e160]:
          - main [ref=f941e161]:
            - generic [ref=f941e162]:
              - img "rb logitech free refresh takeover version a" [ref=f941e163] [cursor=pointer]
              - generic [ref=f941e167]:
                - generic [ref=f941e168]:
                  - button [ref=f941e171]:
                    - generic [ref=f941e176]:
                      - heading "Riftbound Riftbound Tournaments" [level=1] [ref=f941e177]:
                        - generic [ref=f941e178]: Riftbound
                        - generic [ref=f941e179]: Riftbound Tournaments
                      - textbox [ref=f941e186]:
                        - paragraph [ref=f941e187]: Keep up with the latest tournaments, check out conversion rates, and explore a variety of topping and best-of decklists.
                  - generic [ref=f941e190]:
                    - generic [ref=f941e191]:
                      - heading "Latest Tournaments" [level=2] [ref=f941e195]
                      - generic [ref=f941e198]:
                        - generic [ref=f941e203] [cursor=pointer]:
                          - link [ref=f941e204]:
                            - /url: /riftbound/tournaments/s4-chengdu-national-open
                          - generic [ref=f941e206]:
                            - generic [ref=f941e207]: S4 Chengdu National Open
                            - generic [ref=f941e208]:
                              - text: By
                              - link "Mobalytics" [ref=f941e209]:
                                - /url: /riftbound/profile/mobalytics/tournaments
                              - text: ∙
                              - generic [ref=f941e210]: Oct 14, 2026
                          - generic [ref=f941e212]:
                            - generic [ref=f941e213]: CN
                            - generic [ref=f941e214]: National Open
                            - generic [ref=f941e215]: Vendetta
                        - generic [ref=f941e220] [cursor=pointer]:
                          - link [ref=f941e221]:
                            - /url: /riftbound/tournaments/los-angeles-regional-qualifier
                          - generic [ref=f941e223]:
                            - generic [ref=f941e224]: Los Angeles Regional Qualifier
                            - generic [ref=f941e225]:
                              - text: By
                              - link "Mobalytics" [ref=f941e226]:
                                - /url: /riftbound/profile/mobalytics/tournaments
                              - text: ∙
                              - generic [ref=f941e227]: Oct 5, 2026
                          - generic [ref=f941e229]:
                            - generic [ref=f941e230]: NA
                            - generic [ref=f941e231]: Regional Qualifier
                            - generic [ref=f941e232]: Vendetta
                        - generic [ref=f941e237] [cursor=pointer]:
                          - link [ref=f941e238]:
                            - /url: /riftbound/tournaments/s4-regional-open-shenyang
                          - generic [ref=f941e240]:
                            - generic [ref=f941e241]: "S4 Regional Open: Shenyang"
                            - generic [ref=f941e242]:
                              - text: By
                              - link "Mobalytics" [ref=f941e243]:
                                - /url: /riftbound/profile/mobalytics/tournaments
                              - text: ∙
                              - generic [ref=f941e244]: Oct 5, 2026
                          - generic [ref=f941e246]:
                            - generic [ref=f941e247]: CN
                            - generic [ref=f941e248]: Regional Open
                            - generic [ref=f941e249]: Vendetta
                        - generic [ref=f941e254] [cursor=pointer]:
                          - link [ref=f941e255]:
                            - /url: /riftbound/tournaments/singapore-regional-qualifier
                          - generic [ref=f941e257]:
                            - generic [ref=f941e258]: Singapore Regional Qualifier
                            - generic [ref=f941e259]:
                              - text: By
                              - link "Mobalytics" [ref=f941e260]:
                                - /url: /riftbound/profile/mobalytics/tournaments
                              - text: ∙
                              - generic [ref=f941e261]: Sep 10, 2026
                          - generic [ref=f941e263]:
                            - generic [ref=f941e264]: SEA
                            - generic [ref=f941e265]: Regional Qualifier
                            - generic [ref=f941e266]: Vendetta
                    - generic [ref=f941e268]:
                      - generic [ref=f941e273]:
                        - textbox "search by name" [ref=f941e280]:
                          - /placeholder: Search...
                        - generic "select" [ref=f941e282]:
                          - combobox [ref=f941e285]
                          - button "Region" [ref=f941e288] [cursor=pointer]
                        - generic "select" [ref=f941e294]:
                          - combobox [ref=f941e297]
                          - button "Set" [ref=f941e300] [cursor=pointer]
                        - generic "select" [ref=f941e306]:
                          - combobox [ref=f941e309]
                          - button "Trending" [ref=f941e312] [cursor=pointer]
                        - generic "select" [ref=f941e318]:
                          - combobox [ref=f941e321]
                          - button "All time" [ref=f941e324] [cursor=pointer]
                      - generic [ref=f941e330]:
                        - generic [ref=f941e333] [cursor=pointer]:
                          - link [ref=f941e334]:
                            - /url: /riftbound/tournaments/s4-chengdu-national-open
                          - generic [ref=f941e336]:
                            - generic [ref=f941e337]: S4 Chengdu National Open
                            - generic [ref=f941e338]:
                              - text: By
                              - link "Mobalytics" [ref=f941e339]:
                                - /url: /riftbound/profile/mobalytics/tournaments
                              - text: ∙
                              - generic [ref=f941e340]: Updated on
                              - generic [ref=f941e341]: Oct 14, 2026
                          - generic [ref=f941e342]:
                            - button "Share" [ref=f941e345]
                            - generic [ref=f941e347]:
                              - generic [ref=f941e348]: CN
                              - generic [ref=f941e349]: National Open
                              - generic [ref=f941e350]: Vendetta
                        - generic [ref=f941e353] [cursor=pointer]:
                          - link [ref=f941e354]:
                            - /url: /riftbound/tournaments/los-angeles-regional-qualifier
                          - generic [ref=f941e356]:
                            - generic [ref=f941e357]: Los Angeles Regional Qualifier
                            - generic [ref=f941e358]:
                              - text: By
                              - link "Mobalytics" [ref=f941e359]:
                                - /url: /riftbound/profile/mobalytics/tournaments
                              - text: ∙
                              - generic [ref=f941e360]: Updated on
                              - generic [ref=f941e361]: Oct 5, 2026
                          - generic [ref=f941e362]:
                            - button "Share" [ref=f941e365]
                            - generic [ref=f941e367]:
                              - generic [ref=f941e368]: NA
                              - generic [ref=f941e369]: Regional Qualifier
                              - generic [ref=f941e370]: Vendetta
                        - generic [ref=f941e373] [cursor=pointer]:
                          - link [ref=f941e374]:
                            - /url: /riftbound/tournaments/s4-regional-open-shenyang
                          - generic [ref=f941e376]:
                            - generic [ref=f941e377]: "S4 Regional Open: Shenyang"
                            - generic [ref=f941e378]:
                              - text: By
                              - link "Mobalytics" [ref=f941e379]:
                                - /url: /riftbound/profile/mobalytics/tournaments
                              - text: ∙
                              - generic [ref=f941e380]: Updated on
                              - generic [ref=f941e381]: Oct 5, 2026
                          - generic [ref=f941e382]:
                            - button "Share" [ref=f941e385]
                            - generic [ref=f941e387]:
                              - generic [ref=f941e388]: CN
                              - generic [ref=f941e389]: Regional Open
                              - generic [ref=f941e390]: Vendetta
                        - generic [ref=f941e393] [cursor=pointer]:
                          - link [ref=f941e394]:
                            - /url: /riftbound/tournaments/singapore-regional-qualifier
                          - generic [ref=f941e396]:
                            - generic [ref=f941e397]: Singapore Regional Qualifier
                            - generic [ref=f941e398]:
                              - text: By
                              - link "Mobalytics" [ref=f941e399]:
                                - /url: /riftbound/profile/mobalytics/tournaments
                              - text: ∙
                              - generic [ref=f941e400]: Updated on
                              - generic [ref=f941e401]: Sep 10, 2026
                          - generic [ref=f941e402]:
                            - button "Share" [ref=f941e405]
                            - generic [ref=f941e407]:
                              - generic [ref=f941e408]: SEA
                              - generic [ref=f941e409]: Regional Qualifier
                              - generic [ref=f941e410]: Vendetta
                        - generic [ref=f941e413] [cursor=pointer]:
                          - link [ref=f941e414]:
                            - /url: /riftbound/tournaments/s4-regional-open-wuhan
                          - generic [ref=f941e416]:
                            - generic [ref=f941e417]: "S4 Regional Open: Wuhan"
                            - generic [ref=f941e418]:
                              - text: By
                              - link "Mobalytics" [ref=f941e419]:
                                - /url: /riftbound/profile/mobalytics/tournaments
                              - text: ∙
                              - generic [ref=f941e420]: Updated on
                              - generic [ref=f941e421]: Aug 31, 2026
                          - generic [ref=f941e422]:
                            - button "Share" [ref=f941e425]
                            - generic [ref=f941e427]:
                              - generic [ref=f941e428]: CN
                              - generic [ref=f941e429]: Regional Open
                              - generic [ref=f941e430]: Vendetta
                        - button "Show more" [ref=f941e431] [cursor=pointer]
                - status [ref=f941e432]
            - generic [ref=f941e434] [cursor=pointer]
          - complementary [ref=f941e438]:
            - generic [ref=f941e439]:
              - generic [ref=f941e441]:
                - generic [ref=f941e443] [cursor=pointer]:
                  - generic [ref=f941e444]: Advertisement
                  - generic [ref=f941e445]: Remove Ads
                - generic [ref=f941e451] [cursor=pointer]:
                  - generic [ref=f941e452]: Remove all ads
                  - generic [ref=f941e453]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=f941e454]
              - generic [ref=f941e456]:
                - generic [ref=f941e458] [cursor=pointer]:
                  - generic [ref=f941e459]: Advertisement
                  - generic [ref=f941e460]: Remove Ads
                - generic [ref=f941e466] [cursor=pointer]:
                  - generic [ref=f941e467]: Remove all ads
                  - generic [ref=f941e468]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=f941e469]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=f941e472]:
    - banner [ref=f941e473]:
      - generic [ref=f941e474] [cursor=pointer]:
        - generic [ref=f941e475]: Advertisement
        - generic [ref=f941e476]: Remove Ads
    - generic [ref=f941e480] [cursor=pointer]:
      - generic [ref=f941e481]: Remove all ads
      - generic [ref=f941e482]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=f941e483]
```

# Test source

```ts
  313 | 
  314 |       filteredLinks = arrayLinks
  315 |         .filter((match) => {
  316 |           const filterPattern = /mobalytics\.gg\/2xko/;
  317 |           return filterPattern.test(match.groups.link);
  318 |         })
  319 |         .slice(0, quantityLinks);
  320 |     });
  321 | 
  322 |     const consoleMessages = [];
  323 |     const pageErrors = [];
  324 |     page.on('console', (msg) => {
  325 |       if (msg.type() === 'error') {
  326 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  327 |         // console.log(consoleInfo);
  328 |         consoleMessages.push(consoleInfo);
  329 |       }
  330 |     });
  331 |     page.on('pageerror', (error) => {
  332 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  333 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  334 |       //   console.log(errorInfo);
  335 |       // }
  336 |       pageErrors.push(errorInfo);
  337 |     });
  338 | 
  339 |     for (const takeLink of filteredLinks) {
  340 |       consoleMessages.length = 0;
  341 |       pageErrors.length = 0;
  342 | 
  343 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  344 | 
  345 |       await test.step(`Open parsed page: ${link}`, async () => {
  346 |         await page.goto(link);
  347 |         await page.waitForTimeout(1000);
  348 |       });
  349 | 
  350 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  351 | 
  352 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  353 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  354 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  355 |       });
  356 |     }
  357 |   });
  358 | 
  359 |   test(`Check that hydration is ok on Riftbound`, async ({ page, request }) => {
  360 |     let filteredLinks;
  361 | 
  362 |     await test.step(`Parse up to ${quantityLinks} links from Riftbound sitemap: ${process.env.BASE_URL}/riftbound/sitemap.xml`, async () => {
  363 |       const response = await request.get(`${process.env.BASE_URL}/riftbound/sitemap.xml`);
  364 |       await test.step(`Expected Result: ${process.env.BASE_URL}/riftbound/sitemap.xml returns with ${response.status()}`, async () => {
  365 |         expect(response.ok()).toBeTruthy();
  366 |       });
  367 |       const xmlData = await response.text();
  368 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  369 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  370 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  371 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
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
> 413 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      |                                               ^ Error: expect(received).not.toMatch(expected)
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
  472 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
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
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hydration.test.js >> Check hydration is successfully for each project >> Check that hydration is ok on Endfield
- Location: e2e-tests/hydration.test.js:241:3

# Error details

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3793edbc-b706-4492-a734-476deaf0c1dc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3793edbc-b706-4492-a734-476deaf0c1dc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: the server responded with a status of 503 (),Console error: 
[error]: Failed to load resource: the server responded with a status of 503 (),Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
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
[error]: Loading the script 'blob:https://mobalytics.gg/3793edbc-b706-4492-a734-476deaf0c1dc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3793edbc-b706-4492-a734-476deaf0c1dc' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: the server responded with a status of 503 (),Console error: 
[error]: Failed to load resource: the server responded with a status of 503 (),Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
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
[error]: Loading the script 'blob:https://mobalytics.gg/54033848-32f9-4c03-ae0c-a7b6ddc63fad' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Farknights-endfield%2F4-star-characters&puc_types=2%3A4&pppnc=21974715207&pnc=21974715207&mpnc=21734706084%2C308365556%2C71161633' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/54033848-32f9-4c03-ae0c-a7b6ddc63fad' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Farknights-endfield%2F4-star-characters&puc_types=2%3A4&pppnc=21974715207&pnc=21974715207&mpnc=21734706084%2C308365556%2C71161633' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
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
[error]: Loading the script 'blob:https://mobalytics.gg/54033848-32f9-4c03-ae0c-a7b6ddc63fad' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Farknights-endfield%2F4-star-characters&puc_types=2%3A4&pppnc=21974715207&pnc=21974715207&mpnc=21734706084%2C308365556%2C71161633' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/54033848-32f9-4c03-ae0c-a7b6ddc63fad' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Farknights-endfield%2F4-star-characters&puc_types=2%3A4&pppnc=21974715207&pnc=21974715207&mpnc=21734706084%2C308365556%2C71161633' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bbc67b25-c562-4ef8-b2a9-055a8b037342' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bbc67b25-c562-4ef8-b2a9-055a8b037342' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bbc67b25-c562-4ef8-b2a9-055a8b037342' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bbc67b25-c562-4ef8-b2a9-055a8b037342' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1f3ed83e-b62d-44bc-af08-c2c2b438c723' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1f3ed83e-b62d-44bc-af08-c2c2b438c723' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1f3ed83e-b62d-44bc-af08-c2c2b438c723' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1f3ed83e-b62d-44bc-af08-c2c2b438c723' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8141c01a-695e-4b4b-bf9a-a25b2d25e893' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8141c01a-695e-4b4b-bf9a-a25b2d25e893' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8141c01a-695e-4b4b-bf9a-a25b2d25e893' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8141c01a-695e-4b4b-bf9a-a25b2d25e893' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3e67ed63-31ac-4b2e-ae21-ec2c53a01cbb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3e67ed63-31ac-4b2e-ae21-ec2c53a01cbb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3e67ed63-31ac-4b2e-ae21-ec2c53a01cbb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3e67ed63-31ac-4b2e-ae21-ec2c53a01cbb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ffbccec7-b4b4-463a-8776-842ea378e497' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ffbccec7-b4b4-463a-8776-842ea378e497' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ffbccec7-b4b4-463a-8776-842ea378e497' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ffbccec7-b4b4-463a-8776-842ea378e497' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/88bc2fc4-ee6c-4f92-b9fb-0d9ce6879ebb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/88bc2fc4-ee6c-4f92-b9fb-0d9ce6879ebb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/88bc2fc4-ee6c-4f92-b9fb-0d9ce6879ebb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/88bc2fc4-ee6c-4f92-b9fb-0d9ce6879ebb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/042ac73f-2424-4a77-b9e7-6e3dc35d1772' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/042ac73f-2424-4a77-b9e7-6e3dc35d1772' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/042ac73f-2424-4a77-b9e7-6e3dc35d1772' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/042ac73f-2424-4a77-b9e7-6e3dc35d1772' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e70ea04d-d5df-4d28-bae9-4cef06938d9d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e70ea04d-d5df-4d28-bae9-4cef06938d9d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e70ea04d-d5df-4d28-bae9-4cef06938d9d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e70ea04d-d5df-4d28-bae9-4cef06938d9d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/13b9ce7a-0ec6-49b8-83a0-f59ec19a4539' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/13b9ce7a-0ec6-49b8-83a0-f59ec19a4539' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/13b9ce7a-0ec6-49b8-83a0-f59ec19a4539' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/13b9ce7a-0ec6-49b8-83a0-f59ec19a4539' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e4012fc7-7de2-472a-a332-f73f173afcf6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e4012fc7-7de2-472a-a332-f73f173afcf6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e4012fc7-7de2-472a-a332-f73f173afcf6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e4012fc7-7de2-472a-a332-f73f173afcf6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bee108cd-efd1-460a-b259-fe2a3bd0552d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bee108cd-efd1-460a-b259-fe2a3bd0552d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bee108cd-efd1-460a-b259-fe2a3bd0552d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bee108cd-efd1-460a-b259-fe2a3bd0552d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3102b8b8-c333-4df0-963e-af80b5c76f22' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3102b8b8-c333-4df0-963e-af80b5c76f22' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3102b8b8-c333-4df0-963e-af80b5c76f22' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3102b8b8-c333-4df0-963e-af80b5c76f22' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8ae092bc-6358-43c4-82ec-c429f7c5194f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8ae092bc-6358-43c4-82ec-c429f7c5194f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8ae092bc-6358-43c4-82ec-c429f7c5194f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8ae092bc-6358-43c4-82ec-c429f7c5194f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6a236aff-544f-4ae9-8216-0393ec181be1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6a236aff-544f-4ae9-8216-0393ec181be1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6a236aff-544f-4ae9-8216-0393ec181be1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6a236aff-544f-4ae9-8216-0393ec181be1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/32a5c71f-4f1f-47ed-b7e2-3bb709219aa7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/32a5c71f-4f1f-47ed-b7e2-3bb709219aa7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/32a5c71f-4f1f-47ed-b7e2-3bb709219aa7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/32a5c71f-4f1f-47ed-b7e2-3bb709219aa7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4240718d-fedd-40b2-8c04-f14ce75681c5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4240718d-fedd-40b2-8c04-f14ce75681c5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4240718d-fedd-40b2-8c04-f14ce75681c5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4240718d-fedd-40b2-8c04-f14ce75681c5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e275bfc7-5ac4-4d15-8060-83648e7fa1c7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e275bfc7-5ac4-4d15-8060-83648e7fa1c7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e275bfc7-5ac4-4d15-8060-83648e7fa1c7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e275bfc7-5ac4-4d15-8060-83648e7fa1c7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4c71974f-ce79-4d85-9b27-898be4be2e88' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4c71974f-ce79-4d85-9b27-898be4be2e88' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4c71974f-ce79-4d85-9b27-898be4be2e88' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4c71974f-ce79-4d85-9b27-898be4be2e88' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
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
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
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
[error]: Loading the script 'blob:https://mobalytics.gg/35875a16-249a-4dd1-8811-4b78afb39a36' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/35875a16-249a-4dd1-8811-4b78afb39a36' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/35875a16-249a-4dd1-8811-4b78afb39a36' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/35875a16-249a-4dd1-8811-4b78afb39a36' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ce23f498-85eb-43c1-a477-acb74c8e6638' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ce23f498-85eb-43c1-a477-acb74c8e6638' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ce23f498-85eb-43c1-a477-acb74c8e6638' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ce23f498-85eb-43c1-a477-acb74c8e6638' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e5cb1d5-5908-4e30-b35f-446372210867' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e5cb1d5-5908-4e30-b35f-446372210867' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e5cb1d5-5908-4e30-b35f-446372210867' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6e5cb1d5-5908-4e30-b35f-446372210867' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/46b084b7-fa41-4dfe-b81a-7c6613ae5e23' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/46b084b7-fa41-4dfe-b81a-7c6613ae5e23' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/46b084b7-fa41-4dfe-b81a-7c6613ae5e23' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/46b084b7-fa41-4dfe-b81a-7c6613ae5e23' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d8e7ee95-1878-4ec3-8316-91ab145175dd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d8e7ee95-1878-4ec3-8316-91ab145175dd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d8e7ee95-1878-4ec3-8316-91ab145175dd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d8e7ee95-1878-4ec3-8316-91ab145175dd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9183ea8e-9dd5-467f-a2ae-5cd868935fe1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9183ea8e-9dd5-467f-a2ae-5cd868935fe1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9183ea8e-9dd5-467f-a2ae-5cd868935fe1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9183ea8e-9dd5-467f-a2ae-5cd868935fe1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6df56aef-eaad-4bce-97a8-c7d989ca735d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6df56aef-eaad-4bce-97a8-c7d989ca735d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6df56aef-eaad-4bce-97a8-c7d989ca735d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/6df56aef-eaad-4bce-97a8-c7d989ca735d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fd56f090-e092-4cca-b04e-e359bb4e75eb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fd56f090-e092-4cca-b04e-e359bb4e75eb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fd56f090-e092-4cca-b04e-e359bb4e75eb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fd56f090-e092-4cca-b04e-e359bb4e75eb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/27454c2f-1893-4076-9a01-db8c8dd3417d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/27454c2f-1893-4076-9a01-db8c8dd3417d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/27454c2f-1893-4076-9a01-db8c8dd3417d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/27454c2f-1893-4076-9a01-db8c8dd3417d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e2a87b9c-6a1b-4fce-beeb-72b0950a8fd5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e2a87b9c-6a1b-4fce-beeb-72b0950a8fd5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e2a87b9c-6a1b-4fce-beeb-72b0950a8fd5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e2a87b9c-6a1b-4fce-beeb-72b0950a8fd5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/35f429b1-5ce5-4607-b61f-f6b45fb7d7a9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/35f429b1-5ce5-4607-b61f-f6b45fb7d7a9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/35f429b1-5ce5-4607-b61f-f6b45fb7d7a9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/35f429b1-5ce5-4607-b61f-f6b45fb7d7a9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b0b42478-962c-4130-be25-259065c44b20' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b0b42478-962c-4130-be25-259065c44b20' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b0b42478-962c-4130-be25-259065c44b20' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b0b42478-962c-4130-be25-259065c44b20' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/505f393d-c86a-42bc-9ebc-0908e1f5ccec' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/505f393d-c86a-42bc-9ebc-0908e1f5ccec' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/505f393d-c86a-42bc-9ebc-0908e1f5ccec' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/505f393d-c86a-42bc-9ebc-0908e1f5ccec' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dd5b8e5e-ac06-4092-aa6c-b120b80f3374' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dd5b8e5e-ac06-4092-aa6c-b120b80f3374' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dd5b8e5e-ac06-4092-aa6c-b120b80f3374' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dd5b8e5e-ac06-4092-aa6c-b120b80f3374' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/66871915-f613-44dd-9099-43045a9a090a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/66871915-f613-44dd-9099-43045a9a090a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/66871915-f613-44dd-9099-43045a9a090a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/66871915-f613-44dd-9099-43045a9a090a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a0f61439-3bd9-453d-b45d-02a056ea1fa4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a0f61439-3bd9-453d-b45d-02a056ea1fa4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a0f61439-3bd9-453d-b45d-02a056ea1fa4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a0f61439-3bd9-453d-b45d-02a056ea1fa4' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/86feb917-62da-4ccb-9d88-ede53333ad8d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/86feb917-62da-4ccb-9d88-ede53333ad8d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/86feb917-62da-4ccb-9d88-ede53333ad8d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/86feb917-62da-4ccb-9d88-ede53333ad8d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
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
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10f7ee22-4a43-465a-a938-7460e5fb28df' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10f7ee22-4a43-465a-a938-7460e5fb28df' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
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
[error]: Loading the script 'blob:https://mobalytics.gg/10f7ee22-4a43-465a-a938-7460e5fb28df' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10f7ee22-4a43-465a-a938-7460e5fb28df' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9a6b613a-e68f-49de-a779-415f0c176353' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9a6b613a-e68f-49de-a779-415f0c176353' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9a6b613a-e68f-49de-a779-415f0c176353' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9a6b613a-e68f-49de-a779-415f0c176353' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
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
[error]: Loading the script 'blob:https://mobalytics.gg/5141fed9-06e8-419a-873f-1631410156f9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5141fed9-06e8-419a-873f-1631410156f9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
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
[error]: Loading the script 'blob:https://mobalytics.gg/5141fed9-06e8-419a-873f-1631410156f9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5141fed9-06e8-419a-873f-1631410156f9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
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
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0f3c358c-efa2-473b-b59a-9b161d852a65' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0f3c358c-efa2-473b-b59a-9b161d852a65' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
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
[error]: Loading the script 'blob:https://mobalytics.gg/0f3c358c-efa2-473b-b59a-9b161d852a65' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0f3c358c-efa2-473b-b59a-9b161d852a65' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7a864841-25e4-402e-b74d-8486f9c739a3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7a864841-25e4-402e-b74d-8486f9c739a3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7a864841-25e4-402e-b74d-8486f9c739a3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7a864841-25e4-402e-b74d-8486f9c739a3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9e753fc7-803e-4dbc-a372-b813518f8fa6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9e753fc7-803e-4dbc-a372-b813518f8fa6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9e753fc7-803e-4dbc-a372-b813518f8fa6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9e753fc7-803e-4dbc-a372-b813518f8fa6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10efff2f-344f-43e9-b55e-cdc27dc0d843' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 503 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10efff2f-344f-43e9-b55e-cdc27dc0d843' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 503 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10efff2f-344f-43e9-b55e-cdc27dc0d843' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 503 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/10efff2f-344f-43e9-b55e-cdc27dc0d843' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 503 (),Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ea8f6e9c-655e-4792-bc47-cbd9b8328481' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ea8f6e9c-655e-4792-bc47-cbd9b8328481' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ea8f6e9c-655e-4792-bc47-cbd9b8328481' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ea8f6e9c-655e-4792-bc47-cbd9b8328481' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/aa739a6f-7a37-4538-bf6e-9830ba1ee248' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/aa739a6f-7a37-4538-bf6e-9830ba1ee248' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/aa739a6f-7a37-4538-bf6e-9830ba1ee248' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/aa739a6f-7a37-4538-bf6e-9830ba1ee248' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

# Page snapshot

```yaml
- generic [active] [ref=f1118e1]:
  - generic [ref=f1118e2]:
    - generic [ref=f1118e3]:
      - link "Activate the free Logitech G Pass for your chance to get keyboards, mice, and headsets! → Get Started Close":
        - /url: /reward-pass/01a15f39-e0e7-77d8-947f-951a912807e5
        - generic [ref=f1118e4] [cursor=pointer]:
          - generic [ref=f1118e5]:
            - paragraph [ref=f1118e11]: Activate the free Logitech G Pass for your chance to get keyboards, mice, and headsets!
            - button "→ Get Started" [ref=f1118e12]
          - img "Close" [ref=f1118e13]
      - generic [ref=f1118e14]:
        - generic [ref=f1118e16]:
          - link [ref=f1118e18] [cursor=pointer]:
            - /url: /arknights-endfield
            - img "Mobalytics" [ref=f1118e19]
          - generic [ref=f1118e21]:
            - link "League of Legends LoL" [ref=f1118e23] [cursor=pointer]:
              - /url: https://mobalytics.gg/lol
              - generic [ref=f1118e25]:
                - img "League of Legends" [ref=f1118e27]
                - generic [ref=f1118e28]: LoL
            - link "Teamfight Tactics TFT" [ref=f1118e30] [cursor=pointer]:
              - /url: https://mobalytics.gg/tft
              - generic [ref=f1118e32]:
                - img "Teamfight Tactics" [ref=f1118e34]
                - generic [ref=f1118e35]: TFT
            - link "Diablo 4 Diablo 4" [ref=f1118e37] [cursor=pointer]:
              - /url: https://mobalytics.gg/diablo-4
              - generic [ref=f1118e39]:
                - img "Diablo 4" [ref=f1118e41]
                - generic [ref=f1118e42]: Diablo 4
            - link "Path of Exile 2 PoE 2" [ref=f1118e44] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe-2
              - generic [ref=f1118e46]:
                - img "Path of Exile 2" [ref=f1118e48]
                - generic [ref=f1118e49]: PoE 2
            - link "Path of Exile PoE" [ref=f1118e51] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe
              - generic [ref=f1118e53]:
                - img "Path of Exile" [ref=f1118e55]
                - generic [ref=f1118e56]: PoE
            - 'link "World of Warcraft: Forever WoW Forever New" [ref=f1118e58] [cursor=pointer]':
              - /url: https://mobalytics.gg/wow-forever
              - generic [ref=f1118e60]:
                - 'img "World of Warcraft: Forever" [ref=f1118e62]'
                - generic [ref=f1118e63]: WoW Forever
                - generic [ref=f1118e64]: New
            - link "Destiny 2 Destiny 2" [ref=f1118e67] [cursor=pointer]:
              - /url: https://mobalytics.gg/destiny-2
              - generic [ref=f1118e69]:
                - img "Destiny 2" [ref=f1118e71]
                - generic [ref=f1118e72]: Destiny 2
            - link "Marathon Marathon" [ref=f1118e74] [cursor=pointer]:
              - /url: https://mobalytics.gg/marathon
              - generic [ref=f1118e76]:
                - img "Marathon" [ref=f1118e78]
                - generic [ref=f1118e79]: Marathon
            - link "Slay the Spire 2 STS 2" [ref=f1118e81] [cursor=pointer]:
              - /url: https://mobalytics.gg/slay-the-spire-2
              - generic [ref=f1118e83]:
                - img "Slay the Spire 2" [ref=f1118e85]
                - generic [ref=f1118e86]: STS 2
            - link "Deadlock Deadlock" [ref=f1118e88] [cursor=pointer]:
              - /url: https://mobalytics.gg/deadlock
              - generic [ref=f1118e90]:
                - img "Deadlock" [ref=f1118e92]
                - generic [ref=f1118e93]: Deadlock
            - link "Overwatch Overwatch" [ref=f1118e95] [cursor=pointer]:
              - /url: https://mobalytics.gg/overwatch
              - generic [ref=f1118e97]:
                - img "Overwatch" [ref=f1118e99]
                - generic [ref=f1118e100]: Overwatch
            - button [ref=f1118e102] [cursor=pointer]
          - link "Gamebase Gamebase Reviews, Previews, & More" [ref=f1118e105] [cursor=pointer]:
            - /url: https://mobalytics.gg/gamebase
            - generic [ref=f1118e106]:
              - img "Gamebase" [ref=f1118e108]
              - generic [ref=f1118e109]: Gamebase
              - generic [ref=f1118e110]: Reviews, Previews, & More
        - generic [ref=f1118e111]:
          - link [ref=f1118e112] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-arknights-endfield&utm_medium=homepage&utm_source=web
            - button "Download App" [ref=f1118e114]
          - generic [ref=f1118e116]:
            - button "Play & Get Free Rewards" [ref=f1118e117] [cursor=pointer]
            - button "New Challenge Available" [ref=f1118e120] [cursor=pointer]
          - generic [ref=f1118e123]:
            - button "Sign In" [ref=f1118e125] [cursor=pointer]
            - button "Settings" [ref=f1118e127] [cursor=pointer]
        - generic [ref=f1118e130]:
          - link [ref=f1118e133] [cursor=pointer]:
            - /url: /arknights-endfield
            - img "Home" [ref=f1118e134]
            - generic: Home
          - link [ref=f1118e137] [cursor=pointer]:
            - /url: /arknights-endfield/profile
            - img "Profile" [ref=f1118e138]
            - generic: Profile
          - link [ref=f1118e141] [cursor=pointer]:
            - /url: /arknights-endfield/characters
            - img "Characters" [ref=f1118e142]
            - generic: Characters
          - link [ref=f1118e145] [cursor=pointer]:
            - /url: /arknights-endfield/tier-list
            - img "Tier List" [ref=f1118e146]
            - generic: Tier List
          - link [ref=f1118e149] [cursor=pointer]:
            - /url: /arknights-endfield/bases
            - img "Bases" [ref=f1118e150]
            - generic: Bases
          - link [ref=f1118e153] [cursor=pointer]:
            - /url: /arknights-endfield/teams
            - img "Teams" [ref=f1118e154]
            - generic: Teams
          - link [ref=f1118e157] [cursor=pointer]:
            - /url: /arknights-endfield/weapons
            - img "Weapons" [ref=f1118e158]
            - generic: Weapons
          - link [ref=f1118e161] [cursor=pointer]:
            - /url: /arknights-endfield/gear
            - img "Gear" [ref=f1118e162]
            - generic: Gear
          - link [ref=f1118e165] [cursor=pointer]:
            - /url: /arknights-endfield/guides
            - img "Guides" [ref=f1118e166]
            - generic: Guides
        - generic [ref=f1118e168]:
          - main [ref=f1118e169]:
            - generic [ref=f1118e170]:
              - img "end logitech free refresh takeover version a" [ref=f1118e171] [cursor=pointer]
              - generic [ref=f1118e175]:
                - generic [ref=f1118e176]:
                  - button [ref=f1118e179]:
                    - generic [ref=f1118e184]:
                      - 'heading "Endfield Arknights: Endfield Weapons" [level=1] [ref=f1118e185]':
                        - generic [ref=f1118e186]: Endfield
                        - generic [ref=f1118e187]: "Arknights: Endfield Weapons"
                      - paragraph [ref=f1118e195]: "Look through the various weapons in Arknights: Endfield to find the perfect match for your Operators. Weapons provide a variety of effects like Attributes, Special Stat bonuses, and unique passive effects."
                  - generic [ref=f1118e201]:
                    - generic [ref=f1118e206]:
                      - textbox "search by name" [ref=f1118e213]:
                        - /placeholder: Search...
                      - generic "select" [ref=f1118e215]:
                        - combobox [ref=f1118e218]
                        - button "Weapon Type" [ref=f1118e221] [cursor=pointer]
                      - generic "select" [ref=f1118e227]:
                        - combobox [ref=f1118e230]
                        - button "Rarity" [ref=f1118e233] [cursor=pointer]
                      - generic "select" [ref=f1118e239]:
                        - combobox [ref=f1118e242]
                        - button "Stat Boost 1" [ref=f1118e245] [cursor=pointer]
                      - generic "select" [ref=f1118e251]:
                        - combobox [ref=f1118e254]
                        - button "Stat Boost 2" [ref=f1118e257] [cursor=pointer]
                      - generic "select" [ref=f1118e263]:
                        - combobox [ref=f1118e266]
                        - button "Passive" [ref=f1118e269] [cursor=pointer]
                    - generic [ref=f1118e276]:
                      - generic [ref=f1118e279]:
                        - generic [ref=f1118e284]:
                          - paragraph [ref=f1118e285]: Aggeloslayer
                          - paragraph
                        - generic [ref=f1118e286]: Polearm
                        - paragraph [ref=f1118e288]: "Attack: 341"
                        - paragraph [ref=f1118e289]: "Will: +93"
                        - paragraph [ref=f1118e290]: "Arts DMG: +26.00%"
                        - paragraph [ref=f1118e291]: "Suppression: Emergency Boost"
                        - paragraph [ref=f1118e292]: After the wielder's Battle Skill hits the enemy, ATK +33.6% for 20s. Effects of the same name cannot stack.
                      - generic [ref=f1118e295]:
                        - generic [ref=f1118e300]:
                          - paragraph [ref=f1118e301]: Amaranthine Tassel
                          - paragraph
                        - generic [ref=f1118e302]: Greatsword
                        - paragraph [ref=f1118e304]: "Attack: 510"
                        - paragraph [ref=f1118e305]: "Strength: +156"
                        - paragraph [ref=f1118e306]: "Attack: +39%"
                        - paragraph [ref=f1118e307]: "Combative: Amaranthine Cleave"
                        - paragraph [ref=f1118e308]: Physical DMG Dealt +25.6%. When the wielder applies Physical Susceptibility, the wielder gains Arts Intensity +48 for 20s. When the wielder applies Crush, the wielder gains Physical DMG Dealt +[14.4% + (4.8% × Max number of Vulnerability stacks consumed from one enemy)] for 30s. The two effects apply separately and do not stack with themselves.
                      - generic [ref=f1118e311]:
                        - generic [ref=f1118e316]:
                          - paragraph [ref=f1118e317]: Ancient Canal
                          - paragraph
                        - generic [ref=f1118e318]: Greatsword
                        - paragraph [ref=f1118e320]: "Attack: 411"
                        - paragraph [ref=f1118e321]: "Strength: +124"
                        - paragraph [ref=f1118e322]: "Arts Intensity: +62"
                        - paragraph [ref=f1118e323]: "Brutality: Lands of Yore"
                        - paragraph [ref=f1118e324]: Arts Intensity:+28 After the wielder consumes Vulnerability stack(s), the wielder gains Physical DMG dealt +[14% x stacks consumed] for 20s. Effects of the same name cannot stack.
                      - generic [ref=f1118e327]:
                        - generic [ref=f1118e332]:
                          - paragraph [ref=f1118e333]: Artzy Tyrannical
                          - paragraph
                        - generic [ref=f1118e334]: Handcannon
                        - paragraph [ref=f1118e336]: "Attack: 505"
                        - paragraph [ref=f1118e337]: "Intellect: +156"
                        - paragraph [ref=f1118e338]: "Critical Rate: +19.50%"
                        - paragraph [ref=f1118e339]: "Fracture: Artzy Exaggeration"
                        - paragraph [ref=f1118e340]: "Cryo DMG:+25.60% After the wielder scores a critical hit with a Battle Skill, the wielder gains Cryo DMG dealt +22.4% for 30s. Max stacks for effects of the same name: 3. Duration of each stack is counted separately. Effect only triggers once every 0.1s."
                      - generic [ref=f1118e343]:
                        - generic [ref=f1118e348]:
                          - paragraph [ref=f1118e349]: Aspirant
                          - paragraph
                        - generic [ref=f1118e350]: Sword
                        - paragraph [ref=f1118e352]: "Attack: 411"
                        - paragraph [ref=f1118e353]: "Agility: +124"
                        - paragraph [ref=f1118e354]: "Physical DMG: +34.70%"
                        - paragraph [ref=f1118e355]: "Twilight: Imposing Peak"
                        - paragraph [ref=f1118e356]: "Ultimate DMG Bonus:+44.80% For 30s after the wielder applies Lifted, the wielder gains Physical DMG dealt +33.6% during the next Ultimate cast. Max stacks for effects of the same name: 3. Duration of each stack is counted separately. Effect only triggers once every 0.5s."
                      - generic [ref=f1118e359]:
                        - generic [ref=f1118e364]:
                          - paragraph [ref=f1118e365]: Beacon of Duty
                          - paragraph
                        - generic [ref=f1118e366]: Polearm
                        - paragraph [ref=f1118e368]: "Attack: 485"
                        - paragraph [ref=f1118e369]: "Agility: +156"
                        - paragraph [ref=f1118e370]: "Ultimate Gain Efficiency: +46.43%"
                        - paragraph [ref=f1118e371]: "Efficacy: Fuel for the Torch"
                        - paragraph [ref=f1118e372]: Heat DMG Dealt +11.2%. When the wielder's skill applies Heat Infliction, the wielder gains Physical and Heat DMG Dealt +12.8% for 20s. When the wielder's skill applies Heat Susceptibility, the entire team gains Physical and Heat DMG Dealt +6.4% for 30s. The two effects apply separately and do not stack with themselves.
                      - generic [ref=f1118e375]:
                        - generic [ref=f1118e380]:
                          - paragraph [ref=f1118e381]: Bedazzling Night Debut
                          - paragraph
                        - generic [ref=f1118e382]: Polearm
                        - paragraph [ref=f1118e384]: "Attack: 500"
                        - paragraph [ref=f1118e385]: "Will: +156"
                        - paragraph [ref=f1118e386]: "Treatment Efficiency: +46.40%"
                        - paragraph [ref=f1118e387]: "Medicant: Shimmering Curtain"
                        - paragraph [ref=f1118e388]: "Main attribute +25.6%. When the wielder's skill grants HP Treatment to other operators in the team, the operator receiving the wielder's treatment also gains ATK +5.6% for 20s. Max stacks for effects of the same name: 4. Duration of each stack is counted separately. Each operator can gain this effect at most once every 0.1s."
                      - generic [ref=f1118e391]:
                        - generic [ref=f1118e396]:
                          - paragraph [ref=f1118e397]: Blessing of Lustrous Carmine
                          - paragraph
                        - generic [ref=f1118e398]: Polearm
                        - paragraph [ref=f1118e400]: "Attack: 500"
                        - paragraph [ref=f1118e401]: "Agility: +156"
                        - paragraph [ref=f1118e402]: "Heat DMG: +43.33%"
                        - paragraph [ref=f1118e403]: "Flow: Absolver of Guilt"
                        - paragraph [ref=f1118e404]: Ultimate Gain Efficiency +28.8%. When the wielder's skill recovers SP, the entire team gains ATK +9.6% for 20s. When the wielder's skill applies Heat Infliction, the entire team gains Heat DMG Dealt +9.6% for 20s. The two effects apply separately and do not stack with themselves.
                      - generic [ref=f1118e407]:
                        - generic [ref=f1118e412]:
                          - paragraph [ref=f1118e413]: Brigand's Calling
                          - paragraph
                        - generic [ref=f1118e414]: Handcannon
                        - paragraph [ref=f1118e416]: "Attack: 505"
                        - paragraph [ref=f1118e417]: "Agility: +156"
                        - paragraph [ref=f1118e418]: "Attack: +39%"
                        - paragraph [ref=f1118e419]: "Detonate: Brigand's Bane"
                        - paragraph [ref=f1118e420]: Cryo DMG Dealt +25.6%. When the wielder applies Cryo Infliction via battle skills or ultimates, the wielder gains Cryo DMG Dealt +32% for 20.00s. When the wielder's battle skill or ultimate applies Arts Susceptibility, the target enemy suffers Arts DMG Taken +9.6% for 20.00s. The two effects apply separately and do not stack with themselves.
                      - generic [ref=f1118e423]:
                        - generic [ref=f1118e428]:
                          - paragraph [ref=f1118e429]: Chimeric Justice
                          - paragraph
                        - generic [ref=f1118e430]: Polearm
                        - paragraph [ref=f1118e432]: "Attack: 411"
                        - paragraph [ref=f1118e433]: "Strength: +124"
                        - paragraph [ref=f1118e434]: "Ultimate Gain Eff.: +37.10%"
                        - paragraph [ref=f1118e435]: "Brutality: Cemented Fury"
                        - paragraph [ref=f1118e436]: Critical Rate:+8.40% After the wielder applies Vulnerability to an enemy with no Vulnerability stacks, ATK +42% for 15s. Effects of the same name cannot stack.
                      - generic [ref=f1118e439]:
                        - generic [ref=f1118e444]:
                          - paragraph [ref=f1118e445]: Chivalric Virtues
                          - paragraph
                        - generic [ref=f1118e446]: Arts Unit
                        - paragraph [ref=f1118e448]: "Attack: 485"
                        - paragraph [ref=f1118e449]: "Will: +156"
                        - paragraph [ref=f1118e450]: "Max HP: +78.00%"
                        - paragraph [ref=f1118e451]: "Medicant: Blight Fervor"
                        - paragraph [ref=f1118e452]: Treatment Efficiency +16%. After the wielder gives HP Treatment with their own skill, the entire team gains ATK +14.4% for 15s. Effects of the same name cannot stack.
                      - generic [ref=f1118e455]:
                        - generic [ref=f1118e460]:
                          - paragraph [ref=f1118e461]: Clannibal
                          - paragraph
                        - generic [ref=f1118e462]: Handcannon
                        - paragraph [ref=f1118e464]: "Attack: 490"
                        - paragraph [ref=f1118e465]: "Main Attribute: +132"
                        - paragraph [ref=f1118e466]: "Arts DMG: +43.30%"
                        - paragraph [ref=f1118e467]: "Infliction: Vicious Purge"
                        - paragraph [ref=f1118e468]: Arts DMG:+19.20% After the wielder consumes an Arts Reaction, target enemy suffers Arts DMG taken +16% (for the specified element) for 15s. Effect only triggers once every 25s.
                    - button "Show more" [ref=f1118e469] [cursor=pointer]
                - status [ref=f1118e470]
            - generic [ref=f1118e472] [cursor=pointer]
          - complementary [ref=f1118e476]:
            - generic [ref=f1118e477]:
              - generic [ref=f1118e479]:
                - generic [ref=f1118e481] [cursor=pointer]:
                  - generic [ref=f1118e482]: Advertisement
                  - generic [ref=f1118e483]: Remove Ads
                - generic [ref=f1118e489] [cursor=pointer]:
                  - generic [ref=f1118e490]: Remove all ads
                  - generic [ref=f1118e491]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=f1118e492]
              - generic [ref=f1118e494]:
                - generic [ref=f1118e496] [cursor=pointer]:
                  - generic [ref=f1118e497]: Advertisement
                  - generic [ref=f1118e498]: Remove Ads
                - generic [ref=f1118e504] [cursor=pointer]:
                  - generic [ref=f1118e505]: Remove all ads
                  - generic [ref=f1118e506]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=f1118e507]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=f1118e510]:
    - banner [ref=f1118e511]:
      - generic [ref=f1118e512] [cursor=pointer]:
        - generic [ref=f1118e513]: Advertisement
        - generic [ref=f1118e514]: Remove Ads
    - generic [ref=f1118e518] [cursor=pointer]:
      - generic [ref=f1118e519]: Remove all ads
      - generic [ref=f1118e520]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=f1118e521]
```

# Test source

```ts
  195 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  196 | 
  197 |       filteredLinks = arrayLinks
  198 |         .filter((match) => {
  199 |           const filterPattern = /mobalytics\.gg\/marathon/;
  200 |           return filterPattern.test(match.groups.link);
  201 |         })
  202 |         .slice(0, quantityLinks);
  203 |     });
  204 | 
  205 |     const consoleMessages = [];
  206 |     const pageErrors = [];
  207 |     page.on('console', (msg) => {
  208 |       if (msg.type() === 'error') {
  209 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  210 |         // console.log(consoleInfo);
  211 |         consoleMessages.push(consoleInfo);
  212 |       }
  213 |     });
  214 |     page.on('pageerror', (error) => {
  215 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  216 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  217 |       //   console.log(errorInfo);
  218 |       // }
  219 |       pageErrors.push(errorInfo);
  220 |     });
  221 |     for (const takeLink of filteredLinks) {
  222 |       consoleMessages.length = 0;
  223 |       pageErrors.length = 0;
  224 | 
  225 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  226 | 
  227 |       await test.step(`Open parsed page: ${link}`, async () => {
  228 |         await page.goto(link);
  229 |         await page.waitForTimeout(1000);
  230 |       });
  231 | 
  232 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  233 | 
  234 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  235 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  236 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  237 |       });
  238 |     }
  239 |   });
  240 | 
  241 |   test(`Check that hydration is ok on Endfield`, async ({ page, request }) => {
  242 |     let filteredLinks;
  243 | 
  244 |     await test.step(`Parse up to ${quantityLinks} links from Endfield sitemap: ${process.env.BASE_URL}/arknights-endfield/sitemap.xml`, async () => {
  245 |       const response = await request.get(`${process.env.BASE_URL}/arknights-endfield/sitemap.xml`);
  246 |       await test.step(`Expected Result: ${process.env.BASE_URL}/arknights-endfield/sitemap.xml returns with ${response.status()}`, async () => {
  247 |         expect(response.ok()).toBeTruthy();
  248 |       });
  249 |       const xmlData = await response.text();
  250 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  251 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  252 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  253 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  254 | 
  255 |       filteredLinks = arrayLinks
  256 |         .filter((match) => {
  257 |           const filterPattern = /mobalytics\.gg\/arknights-endfield/;
  258 |           return filterPattern.test(match.groups.link);
  259 |         })
  260 |         .slice(0, quantityLinks);
  261 |     });
  262 | 
  263 |     const consoleMessages = [];
  264 |     const pageErrors = [];
  265 |     page.on('console', (msg) => {
  266 |       if (msg.type() === 'error') {
  267 |         const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  268 |         // console.log(consoleInfo);
  269 |         consoleMessages.push(consoleInfo);
  270 |       }
  271 |     });
  272 |     page.on('pageerror', (error) => {
  273 |       const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  274 |       // if (error.message.match(/Minified React error #(418|423)/i)) {
  275 |       //   console.log(errorInfo);
  276 |       // }
  277 |       pageErrors.push(errorInfo);
  278 |     });
  279 | 
  280 |     for (const takeLink of filteredLinks) {
  281 |       consoleMessages.length = 0;
  282 |       pageErrors.length = 0;
  283 | 
  284 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  285 | 
  286 |       await test.step(`Open parsed page: ${link}`, async () => {
  287 |         await page.goto(link);
  288 |         await page.waitForTimeout(1000);
  289 |       });
  290 | 
  291 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  292 | 
  293 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  294 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
> 295 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      |                                               ^ Error: expect(received).not.toMatch(expected)
  296 |       });
  297 |     }
  298 |   });
  299 | 
  300 |   test(`Check that hydration is ok on 2xko`, async ({ page, request }) => {
  301 |     let filteredLinks;
  302 | 
  303 |     await test.step(`Parse up to ${quantityLinks} links from 2xko sitemap: ${process.env.BASE_URL}/2xko/sitemap.xml`, async () => {
  304 |       const response = await request.get(`${process.env.BASE_URL}/2xko/sitemap.xml`);
  305 |       await test.step(`Expected Result: ${process.env.BASE_URL}/2xko/sitemap.xml returns with ${response.status()}`, async () => {
  306 |         expect(response.ok()).toBeTruthy();
  307 |       });
  308 |       const xmlData = await response.text();
  309 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  310 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  311 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  312 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
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
```
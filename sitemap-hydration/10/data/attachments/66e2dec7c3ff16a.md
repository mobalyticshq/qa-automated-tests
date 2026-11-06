# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hydration.test.js >> Check hydration is successfully for each project >> Check that hydration is ok on 2xko
- Location: e2e-tests/hydration.test.js:300:3

# Error details

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/690945d1-2ac2-4a64-93c0-67f93861b33c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/690945d1-2ac2-4a64-93c0-67f93861b33c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/690945d1-2ac2-4a64-93c0-67f93861b33c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/690945d1-2ac2-4a64-93c0-67f93861b33c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/adf928d1-97da-4021-87b2-8de76b7164d2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/adf928d1-97da-4021-87b2-8de76b7164d2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/adf928d1-97da-4021-87b2-8de76b7164d2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/adf928d1-97da-4021-87b2-8de76b7164d2' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0f72143d-a9c1-4c1a-9e53-412728296405' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0f72143d-a9c1-4c1a-9e53-412728296405' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0f72143d-a9c1-4c1a-9e53-412728296405' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0f72143d-a9c1-4c1a-9e53-412728296405' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b9be6e51-08be-4deb-b9d9-5524bee7cd1f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b9be6e51-08be-4deb-b9d9-5524bee7cd1f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: the server responded with a status of 400 (),Console error: 
[error]: Failed to load resource: net::ERR_CONNECTION_TIMED_OUT,Console error: 
[error]: Failed to load resource: net::ERR_CONNECTION_TIMED_OUT,Console error: 
[error]: Failed to load resource: net::ERR_CONNECTION_TIMED_OUT,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b9be6e51-08be-4deb-b9d9-5524bee7cd1f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b9be6e51-08be-4deb-b9d9-5524bee7cd1f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: net::ERR_NAME_NOT_RESOLVED,Console error: 
[error]: Failed to load resource: the server responded with a status of 400 (),Console error: 
[error]: Failed to load resource: net::ERR_CONNECTION_TIMED_OUT,Console error: 
[error]: Failed to load resource: net::ERR_CONNECTION_TIMED_OUT,Console error: 
[error]: Failed to load resource: net::ERR_CONNECTION_TIMED_OUT,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/38dff4dc-87b9-4ffa-bea8-2b9c07ad109e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/38dff4dc-87b9-4ffa-bea8-2b9c07ad109e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/38dff4dc-87b9-4ffa-bea8-2b9c07ad109e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/38dff4dc-87b9-4ffa-bea8-2b9c07ad109e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d53a8a58-ec50-45c3-81a6-e87e33dc31f0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d53a8a58-ec50-45c3-81a6-e87e33dc31f0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d53a8a58-ec50-45c3-81a6-e87e33dc31f0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d53a8a58-ec50-45c3-81a6-e87e33dc31f0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0bae58ee-a9e7-4766-a9b2-4106dfd10187' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0bae58ee-a9e7-4766-a9b2-4106dfd10187' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0bae58ee-a9e7-4766-a9b2-4106dfd10187' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0bae58ee-a9e7-4766-a9b2-4106dfd10187' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b89b660a-c33d-43f0-b295-85d308791ea8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b89b660a-c33d-43f0-b295-85d308791ea8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b89b660a-c33d-43f0-b295-85d308791ea8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b89b660a-c33d-43f0-b295-85d308791ea8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1ecc6afd-3a4a-4e30-a776-2554ab3c7b41' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1ecc6afd-3a4a-4e30-a776-2554ab3c7b41' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1ecc6afd-3a4a-4e30-a776-2554ab3c7b41' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1ecc6afd-3a4a-4e30-a776-2554ab3c7b41' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dc991516-31b6-4f22-ba16-4d9c85878cb9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dc991516-31b6-4f22-ba16-4d9c85878cb9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dc991516-31b6-4f22-ba16-4d9c85878cb9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dc991516-31b6-4f22-ba16-4d9c85878cb9' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bca6b7b1-67b9-4785-b7d0-80a96ecaa7f8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bca6b7b1-67b9-4785-b7d0-80a96ecaa7f8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bca6b7b1-67b9-4785-b7d0-80a96ecaa7f8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bca6b7b1-67b9-4785-b7d0-80a96ecaa7f8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5fcd8f79-e259-491d-b9b5-5ff1a29fae5a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5fcd8f79-e259-491d-b9b5-5ff1a29fae5a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5fcd8f79-e259-491d-b9b5-5ff1a29fae5a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5fcd8f79-e259-491d-b9b5-5ff1a29fae5a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7be13df7-1cc4-4e60-8879-88720610851c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7be13df7-1cc4-4e60-8879-88720610851c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7be13df7-1cc4-4e60-8879-88720610851c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7be13df7-1cc4-4e60-8879-88720610851c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c09c5c74-69ad-46d3-8b1d-19d6208c1fa6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c09c5c74-69ad-46d3-8b1d-19d6208c1fa6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c09c5c74-69ad-46d3-8b1d-19d6208c1fa6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c09c5c74-69ad-46d3-8b1d-19d6208c1fa6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a2c67a60-9687-4423-b2d8-6b57d465fa85' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a2c67a60-9687-4423-b2d8-6b57d465fa85' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a2c67a60-9687-4423-b2d8-6b57d465fa85' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a2c67a60-9687-4423-b2d8-6b57d465fa85' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/752c5a20-4e58-421f-9c0b-a1e87b413019' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2F2xko%2Fchampions%2Fvi&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/752c5a20-4e58-421f-9c0b-a1e87b413019' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2F2xko%2Fchampions%2Fvi&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
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
[error]: Loading the script 'blob:https://mobalytics.gg/752c5a20-4e58-421f-9c0b-a1e87b413019' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2F2xko%2Fchampions%2Fvi&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/752c5a20-4e58-421f-9c0b-a1e87b413019' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2F2xko%2Fchampions%2Fvi&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
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
[error]: Loading the script 'blob:https://mobalytics.gg/110ae971-e227-455b-b7c2-1011e1188aa8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/110ae971-e227-455b-b7c2-1011e1188aa8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/110ae971-e227-455b-b7c2-1011e1188aa8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/110ae971-e227-455b-b7c2-1011e1188aa8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1c6b035a-79f8-4982-a534-7fcb4b37957e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1c6b035a-79f8-4982-a534-7fcb4b37957e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1c6b035a-79f8-4982-a534-7fcb4b37957e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1c6b035a-79f8-4982-a534-7fcb4b37957e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/19d59b25-1844-470e-8c72-097a0b1eb0cb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/19d59b25-1844-470e-8c72-097a0b1eb0cb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/19d59b25-1844-470e-8c72-097a0b1eb0cb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/19d59b25-1844-470e-8c72-097a0b1eb0cb' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ebb2a674-f0d9-443e-ad9a-312750dfc9a5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ebb2a674-f0d9-443e-ad9a-312750dfc9a5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ebb2a674-f0d9-443e-ad9a-312750dfc9a5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ebb2a674-f0d9-443e-ad9a-312750dfc9a5' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9af1b811-76dd-49c0-97aa-0eeeeea0df9c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9af1b811-76dd-49c0-97aa-0eeeeea0df9c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9af1b811-76dd-49c0-97aa-0eeeeea0df9c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9af1b811-76dd-49c0-97aa-0eeeeea0df9c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/847ad86f-4639-4dc3-9b62-70de2b341a81' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/847ad86f-4639-4dc3-9b62-70de2b341a81' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/847ad86f-4639-4dc3-9b62-70de2b341a81' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/847ad86f-4639-4dc3-9b62-70de2b341a81' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/089db4fb-35e3-4862-a5ec-b064a46cc3d3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/089db4fb-35e3-4862-a5ec-b064a46cc3d3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/089db4fb-35e3-4862-a5ec-b064a46cc3d3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/089db4fb-35e3-4862-a5ec-b064a46cc3d3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bfe5bd51-89e5-4d93-9bb7-adcba796e5b1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bfe5bd51-89e5-4d93-9bb7-adcba796e5b1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bfe5bd51-89e5-4d93-9bb7-adcba796e5b1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/bfe5bd51-89e5-4d93-9bb7-adcba796e5b1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2F2xko%2Ftier-lists%2Fchampions&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a35ad16a-0c19-4f9e-933c-835d0776bfae' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2F2xko%2Ftier-lists%2Fchampions&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a35ad16a-0c19-4f9e-933c-835d0776bfae' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2F2xko%2Ftier-lists%2Fchampions&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a35ad16a-0c19-4f9e-933c-835d0776bfae' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2F2xko%2Ftier-lists%2Fchampions&puc_types=2%3A4&pppnc=21974715207' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a35ad16a-0c19-4f9e-933c-835d0776bfae' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8a221004-c2b5-4006-a9c1-a0a74daf42e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8a221004-c2b5-4006-a9c1-a0a74daf42e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8a221004-c2b5-4006-a9c1-a0a74daf42e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8a221004-c2b5-4006-a9c1-a0a74daf42e3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4e865779-972a-4102-9a97-0675646b0f72' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4e865779-972a-4102-9a97-0675646b0f72' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4e865779-972a-4102-9a97-0675646b0f72' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4e865779-972a-4102-9a97-0675646b0f72' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4f4ca500-f533-4ca5-b13e-392ba04723fe' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4f4ca500-f533-4ca5-b13e-392ba04723fe' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4f4ca500-f533-4ca5-b13e-392ba04723fe' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4f4ca500-f533-4ca5-b13e-392ba04723fe' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c3c6d277-f418-43dc-b7e6-e8518f0b13f8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c3c6d277-f418-43dc-b7e6-e8518f0b13f8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c3c6d277-f418-43dc-b7e6-e8518f0b13f8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c3c6d277-f418-43dc-b7e6-e8518f0b13f8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f830b679-31a2-4bff-8111-11ed9fb5a090' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f830b679-31a2-4bff-8111-11ed9fb5a090' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f830b679-31a2-4bff-8111-11ed9fb5a090' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f830b679-31a2-4bff-8111-11ed9fb5a090' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/da790804-21d4-4bac-a566-3e16c2b06fde' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/da790804-21d4-4bac-a566-3e16c2b06fde' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/da790804-21d4-4bac-a566-3e16c2b06fde' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/da790804-21d4-4bac-a566-3e16c2b06fde' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/361b507f-a9d9-43ac-bcd9-a7afaf1c0148' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/361b507f-a9d9-43ac-bcd9-a7afaf1c0148' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/361b507f-a9d9-43ac-bcd9-a7afaf1c0148' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/361b507f-a9d9-43ac-bcd9-a7afaf1c0148' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5631c356-e9ac-4b90-9e81-5c3cee6f2653' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5631c356-e9ac-4b90-9e81-5c3cee6f2653' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5631c356-e9ac-4b90-9e81-5c3cee6f2653' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5631c356-e9ac-4b90-9e81-5c3cee6f2653' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b120330a-6d93-4e2b-a106-dfd5276f9eb0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b120330a-6d93-4e2b-a106-dfd5276f9eb0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b120330a-6d93-4e2b-a106-dfd5276f9eb0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Not%3AA-Brand%22%2C%22version%22%3A%228.0.0.0%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22156.0.8078.4%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22156.0.8078.4%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b120330a-6d93-4e2b-a106-dfd5276f9eb0' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\",Page error: 
[Uncaught (in promise) NotSupportedError]: \"Failed to execute 'browsingTopics' on 'Document': document.browsingTopics() is deprecated and has been removed.\""
```

# Page snapshot

```yaml
- generic [active] [ref=f650e1]:
  - generic [ref=f650e2]:
    - generic [ref=f650e3]:
      - link "Activate the free Logitech G Pass for your chance to get keyboards, mice, and headsets! → Get Started Close":
        - /url: /reward-pass/01a15f39-e0e7-77d8-947f-951a912807e5
        - generic [ref=f650e4] [cursor=pointer]:
          - generic [ref=f650e5]:
            - textbox [ref=f650e10]:
              - paragraph [ref=f650e11]: Activate the free Logitech G Pass for your chance to get keyboards, mice, and headsets!
            - button "→ Get Started" [ref=f650e12]
          - img "Close" [ref=f650e13]
      - generic [ref=f650e14]:
        - generic [ref=f650e16]:
          - link [ref=f650e18] [cursor=pointer]:
            - /url: /2xko
            - img "Mobalytics" [ref=f650e19]
          - generic [ref=f650e21]:
            - link "League of Legends LoL" [ref=f650e23] [cursor=pointer]:
              - /url: https://mobalytics.gg/lol
              - generic [ref=f650e25]:
                - img "League of Legends" [ref=f650e27]
                - generic [ref=f650e28]: LoL
            - link "Teamfight Tactics TFT" [ref=f650e30] [cursor=pointer]:
              - /url: https://mobalytics.gg/tft
              - generic [ref=f650e32]:
                - img "Teamfight Tactics" [ref=f650e34]
                - generic [ref=f650e35]: TFT
            - link "Diablo 4 Diablo 4" [ref=f650e37] [cursor=pointer]:
              - /url: https://mobalytics.gg/diablo-4
              - generic [ref=f650e39]:
                - img "Diablo 4" [ref=f650e41]
                - generic [ref=f650e42]: Diablo 4
            - link "Path of Exile 2 PoE 2" [ref=f650e44] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe-2
              - generic [ref=f650e46]:
                - img "Path of Exile 2" [ref=f650e48]
                - generic [ref=f650e49]: PoE 2
            - link "Path of Exile PoE" [ref=f650e51] [cursor=pointer]:
              - /url: https://mobalytics.gg/poe
              - generic [ref=f650e53]:
                - img "Path of Exile" [ref=f650e55]
                - generic [ref=f650e56]: PoE
            - 'link "World of Warcraft: Forever WoW Forever New" [ref=f650e58] [cursor=pointer]':
              - /url: https://mobalytics.gg/wow-forever
              - generic [ref=f650e60]:
                - 'img "World of Warcraft: Forever" [ref=f650e62]'
                - generic [ref=f650e63]: WoW Forever
                - generic [ref=f650e64]: New
            - link "Destiny 2 Destiny 2" [ref=f650e67] [cursor=pointer]:
              - /url: https://mobalytics.gg/destiny-2
              - generic [ref=f650e69]:
                - img "Destiny 2" [ref=f650e71]
                - generic [ref=f650e72]: Destiny 2
            - link "Marathon Marathon" [ref=f650e74] [cursor=pointer]:
              - /url: https://mobalytics.gg/marathon
              - generic [ref=f650e76]:
                - img "Marathon" [ref=f650e78]
                - generic [ref=f650e79]: Marathon
            - link "Slay the Spire 2 STS 2" [ref=f650e81] [cursor=pointer]:
              - /url: https://mobalytics.gg/slay-the-spire-2
              - generic [ref=f650e83]:
                - img "Slay the Spire 2" [ref=f650e85]
                - generic [ref=f650e86]: STS 2
            - link "Deadlock Deadlock" [ref=f650e88] [cursor=pointer]:
              - /url: https://mobalytics.gg/deadlock
              - generic [ref=f650e90]:
                - img "Deadlock" [ref=f650e92]
                - generic [ref=f650e93]: Deadlock
            - link "Overwatch Overwatch" [ref=f650e95] [cursor=pointer]:
              - /url: https://mobalytics.gg/overwatch
              - generic [ref=f650e97]:
                - img "Overwatch" [ref=f650e99]
                - generic [ref=f650e100]: Overwatch
            - button [ref=f650e102] [cursor=pointer]
          - link "Gamebase Gamebase Reviews, Previews, & More" [ref=f650e105] [cursor=pointer]:
            - /url: https://mobalytics.gg/gamebase
            - generic [ref=f650e106]:
              - img "Gamebase" [ref=f650e108]
              - generic [ref=f650e109]: Gamebase
              - generic [ref=f650e110]: Reviews, Previews, & More
        - generic [ref=f650e111]:
          - link [ref=f650e112] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-2xko&utm_medium=homepage&utm_source=web
            - button "Download App" [ref=f650e114]
          - generic [ref=f650e116]:
            - button "Play & Get Free Rewards" [ref=f650e117] [cursor=pointer]
            - button "New Challenge Available" [ref=f650e120] [cursor=pointer]
          - generic [ref=f650e123]:
            - button "Sign In" [ref=f650e125] [cursor=pointer]
            - button "Settings" [ref=f650e127] [cursor=pointer]
        - generic [ref=f650e130]:
          - link [ref=f650e133] [cursor=pointer]:
            - /url: /2xko
            - img "Home" [ref=f650e134]
            - generic: Home
          - link [ref=f650e137] [cursor=pointer]:
            - /url: /2xko/champions
            - img "Champions" [ref=f650e138]
            - generic: Champions
          - link [ref=f650e141] [cursor=pointer]:
            - /url: /2xko/tier-lists
            - img "Tier List" [ref=f650e142]
            - generic: Tier List
          - link [ref=f650e145] [cursor=pointer]:
            - /url: /2xko/guides
            - img "Guides" [ref=f650e146]
            - generic: Guides
        - generic [ref=f650e148]:
          - main [ref=f650e149]:
            - generic [ref=f650e150]:
              - img "2xko logitech free refresh takeover version a" [ref=f650e151] [cursor=pointer]
              - generic [ref=f650e153]:
                - generic [ref=f650e156]:
                  - generic [ref=f650e158]:
                    - img "Thorn Sprite" [ref=f650e160]
                    - generic [ref=f650e161]:
                      - generic [ref=f650e162]: Mobalytics
                      - generic [ref=f650e163]: Open Your Eyes!
                    - generic [ref=f650e164]:
                      - button "Follow" [ref=f650e165] [cursor=pointer]
                      - link "YouTube" [ref=f650e167] [cursor=pointer]:
                        - /url: https://www.youtube.com/c/mobalytics
                    - generic [ref=f650e169]:
                      - generic [ref=f650e170]: 14.1K Favorites
                      - generic [ref=f650e171]: ∙
                      - generic [ref=f650e172]: 75 Followers
                    - generic [ref=f650e173]:
                      - generic [ref=f650e174]: mobalytics
                      - generic [ref=f650e175]: ∙
                      - generic [ref=f650e176]: Member Since Aug 15, 2024
                  - tablist [ref=f650e179]:
                    - tab [ref=f650e180] [cursor=pointer]:
                      - link "Overview" [ref=f650e182]:
                        - /url: https://mobalytics.gg/profile/mobalytics
                    - tab [ref=f650e183] [cursor=pointer]:
                      - link [ref=f650e185]:
                        - /url: https://mobalytics.gg/lol/profile/mobalytics
                    - tab [ref=f650e188] [cursor=pointer]:
                      - link [ref=f650e190]:
                        - /url: https://mobalytics.gg/tft/profile/mobalytics
                    - tab [ref=f650e193] [cursor=pointer]:
                      - link [ref=f650e195]:
                        - /url: https://mobalytics.gg/diablo-4/profile/mobalytics
                    - tab [ref=f650e198] [cursor=pointer]:
                      - link [ref=f650e200]:
                        - /url: https://mobalytics.gg/poe-2/profile/mobalytics
                    - tab [ref=f650e203] [cursor=pointer]:
                      - link [ref=f650e205]:
                        - /url: https://mobalytics.gg/poe/profile/mobalytics
                    - tab [ref=f650e208] [cursor=pointer]:
                      - link [ref=f650e210]:
                        - /url: https://mobalytics.gg/deadlock/profile/mobalytics
                    - tab [ref=f650e213] [cursor=pointer]:
                      - link [ref=f650e215]:
                        - /url: https://mobalytics.gg/gamebase/profile/mobalytics
                    - tab [ref=f650e218] [cursor=pointer]:
                      - link [ref=f650e220]:
                        - /url: https://mobalytics.gg/riftbound/profile/mobalytics
                    - tab [ref=f650e223] [cursor=pointer]:
                      - link [ref=f650e225]:
                        - /url: https://mobalytics.gg/the-bazaar/profile/mobalytics
                    - tab [ref=f650e228] [cursor=pointer]:
                      - link [ref=f650e230]:
                        - /url: https://mobalytics.gg/elden-ring-nightreign/profile/mobalytics
                    - tab [ref=f650e233] [cursor=pointer]:
                      - link [ref=f650e235]:
                        - /url: https://mobalytics.gg/borderlands-4/profile/mobalytics
                    - tab [ref=f650e238] [cursor=pointer]:
                      - link [ref=f650e240]:
                        - /url: https://mobalytics.gg/genshin-impact/profile/mobalytics
                    - tab [ref=f650e243] [cursor=pointer]:
                      - link [ref=f650e245]:
                        - /url: https://mobalytics.gg/mhw/profile/mobalytics
                    - tab [ref=f650e248] [cursor=pointer]:
                      - link [ref=f650e250]:
                        - /url: https://mobalytics.gg/hades-2/profile/mobalytics
                    - tab [ref=f650e253] [cursor=pointer]:
                      - link [ref=f650e255]:
                        - /url: https://mobalytics.gg/overwatch/profile/mobalytics
                    - tab [ref=f650e258] [cursor=pointer]:
                      - link [ref=f650e260]:
                        - /url: https://mobalytics.gg/arknights-endfield/profile/mobalytics
                    - tab [ref=f650e263] [cursor=pointer]:
                      - link [ref=f650e265]:
                        - /url: https://mobalytics.gg/wow-forever/profile/mobalytics
                    - tab [ref=f650e268] [cursor=pointer]:
                      - link [ref=f650e270]:
                        - /url: https://mobalytics.gg/neverness-to-everness/profile/mobalytics
                    - tab [ref=f650e273] [cursor=pointer]:
                      - link [ref=f650e275]:
                        - /url: https://mobalytics.gg/marvel-rivals/profile/mobalytics
                    - tab [ref=f650e278] [cursor=pointer]:
                      - link [ref=f650e280]:
                        - /url: https://mobalytics.gg/marathon/profile/mobalytics
                    - tab [ref=f650e283] [cursor=pointer]:
                      - link [ref=f650e285]:
                        - /url: https://mobalytics.gg/slay-the-spire-2/profile/mobalytics
                    - tab [selected] [ref=f650e288] [cursor=pointer]:
                      - link [ref=f650e290]:
                        - /url: https://mobalytics.gg/2xko/profile/mobalytics
                    - tab [ref=f650e294] [cursor=pointer]:
                      - link [ref=f650e296]:
                        - /url: https://mobalytics.gg/zzz/profile/mobalytics
                - generic [ref=f650e300]:
                  - tablist [ref=f650e304]:
                    - tab "Builds" [ref=f650e305] [cursor=pointer]
                    - tab "Guides" [ref=f650e307] [cursor=pointer]
                    - tab "Tier Lists" [selected] [ref=f650e309] [cursor=pointer]
                  - generic [ref=f650e316]:
                    - generic [ref=f650e319] [cursor=pointer]:
                      - link [ref=f650e320]:
                        - /url: /2xko/tier-lists/beginners
                      - generic [ref=f650e321]:
                        - generic [ref=f650e322]:
                          - generic [ref=f650e323]: Beginner Tier List (By Difficulty)
                          - generic [ref=f650e324]:
                            - text: By
                            - link "Mobalytics" [ref=f650e325]:
                              - /url: /2xko/profile/mobalytics/tier-lists
                            - text: ∙
                            - generic [ref=f650e326]: Updated on
                            - generic [ref=f650e327]: Jul 6, 2026
                        - generic [ref=f650e328]: Easy to Learn
                      - button "Share" [ref=f650e361]
                    - generic [ref=f650e365] [cursor=pointer]:
                      - link [ref=f650e366]:
                        - /url: /2xko/tier-lists/point-champion
                      - generic [ref=f650e367]:
                        - generic [ref=f650e368]:
                          - generic [ref=f650e369]: Point Champion Tier List
                          - generic [ref=f650e370]:
                            - text: By
                            - link "Mobalytics" [ref=f650e371]:
                              - /url: /2xko/profile/mobalytics/tier-lists
                            - text: ∙
                            - generic [ref=f650e372]: Updated on
                            - generic [ref=f650e373]: Jul 6, 2026
                        - generic [ref=f650e374]: S (Top Tier)
                      - button "Share" [ref=f650e407]
                    - generic [ref=f650e411] [cursor=pointer]:
                      - link [ref=f650e412]:
                        - /url: /2xko/tier-lists/assist-champion
                      - generic [ref=f650e413]:
                        - generic [ref=f650e414]:
                          - generic [ref=f650e415]: Assist Champ Tier List
                          - generic [ref=f650e416]:
                            - text: By
                            - link "Mobalytics" [ref=f650e417]:
                              - /url: /2xko/profile/mobalytics/tier-lists
                            - text: ∙
                            - generic [ref=f650e418]: Updated on
                            - generic [ref=f650e419]: Jul 6, 2026
                        - generic [ref=f650e420]: S (Best)
                      - button "Share" [ref=f650e453]
                    - generic [ref=f650e457] [cursor=pointer]:
                      - link [ref=f650e458]:
                        - /url: /2xko/tier-lists/champions
                      - generic [ref=f650e459]:
                        - generic [ref=f650e460]:
                          - generic [ref=f650e461]: Characters Tier List for Ranked Competitive Play
                          - generic [ref=f650e462]:
                            - text: By
                            - link "Mobalytics" [ref=f650e463]:
                              - /url: /2xko/profile/mobalytics/tier-lists
                            - text: ∙
                            - generic [ref=f650e464]: Updated on
                            - generic [ref=f650e465]: Jul 6, 2026
                        - generic [ref=f650e466]: S (Top Tier)
                      - button "Share" [ref=f650e489]
                    - generic [ref=f650e493] [cursor=pointer]:
                      - link [ref=f650e494]:
                        - /url: /2xko/tier-lists/fuses
                      - generic [ref=f650e495]:
                        - generic [ref=f650e496]:
                          - generic [ref=f650e497]: Fuses Tier List
                          - generic [ref=f650e498]:
                            - text: By
                            - link "Mobalytics" [ref=f650e499]:
                              - /url: /2xko/profile/mobalytics/tier-lists
                            - text: ∙
                            - generic [ref=f650e500]: Updated on
                            - generic [ref=f650e501]: Jul 6, 2026
                        - generic [ref=f650e502]: Competitive (High Ceiling)
                      - button "Share" [ref=f650e515]
            - generic [ref=f650e518] [cursor=pointer]
          - complementary [ref=f650e522]:
            - generic [ref=f650e523]:
              - generic [ref=f650e525]:
                - generic [ref=f650e527] [cursor=pointer]:
                  - generic [ref=f650e528]: Advertisement
                  - generic [ref=f650e529]: Remove Ads
                - generic [ref=f650e535] [cursor=pointer]:
                  - generic [ref=f650e536]: Remove all ads
                  - generic [ref=f650e537]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=f650e538]
              - generic [ref=f650e540]:
                - generic [ref=f650e542] [cursor=pointer]:
                  - generic [ref=f650e543]: Advertisement
                  - generic [ref=f650e544]: Remove Ads
                - generic [ref=f650e550] [cursor=pointer]:
                  - generic [ref=f650e551]: Remove all ads
                  - generic [ref=f650e552]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                  - button "Remove ads" [ref=f650e553]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=f650e556]:
    - banner [ref=f650e557]:
      - generic [ref=f650e558] [cursor=pointer]:
        - generic [ref=f650e559]: Advertisement
        - generic [ref=f650e560]: Remove Ads
    - generic [ref=f650e564] [cursor=pointer]:
      - generic [ref=f650e565]: Remove all ads
      - generic [ref=f650e566]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=f650e567]
```

# Test source

```ts
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
  295 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
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
> 354 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      |                                               ^ Error: expect(received).not.toMatch(expected)
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
```
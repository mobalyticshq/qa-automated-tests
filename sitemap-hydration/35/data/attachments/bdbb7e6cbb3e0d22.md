# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hydration.test.js >> Check hydration is successfully for each project >> Check that hydration is ok on Marathon
- Location: e2e-tests/hydration.test.js:180:3

# Error details

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/488a2a95-a874-45d2-b976-6b6c91aa189f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/488a2a95-a874-45d2-b976-6b6c91aa189f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
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
[error]: Loading the script 'blob:https://mobalytics.gg/488a2a95-a874-45d2-b976-6b6c91aa189f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://ib.adnxs.com/getuidj?gdpr=1&gdpr_consent=DBABL~BVQqAAAAAg' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Failed to load resource: the server responded with a status of 404 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/488a2a95-a874-45d2-b976-6b6c91aa189f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
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
[error]: Loading the script 'blob:https://mobalytics.gg/a59a1197-9fab-4bf3-864e-b48e46f15169' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a59a1197-9fab-4bf3-864e-b48e46f15169' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a59a1197-9fab-4bf3-864e-b48e46f15169' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/a59a1197-9fab-4bf3-864e-b48e46f15169' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at I (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37993)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33593)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at C (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37823)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33588)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at D (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:38162)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33598)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  [Prebid] could not load prebid config,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2daee528-568d-400d-b783-e6bc342ffe0d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2daee528-568d-400d-b783-e6bc342ffe0d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at I (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37993)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33593)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at C (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37823)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33588)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at D (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:38162)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33598)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  [Prebid] could not load prebid config,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2daee528-568d-400d-b783-e6bc342ffe0d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2daee528-568d-400d-b783-e6bc342ffe0d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at I (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37993)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33593)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at C (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37823)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33588)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at D (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:38162)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33598)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  [Prebid] could not load prebid config,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b28ced27-98f8-4369-b892-2ec71e47b8af' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b28ced27-98f8-4369-b892-2ec71e47b8af' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at I (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37993)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33593)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at C (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37823)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33588)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at D (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:38162)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33598)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  [Prebid] could not load prebid config,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b28ced27-98f8-4369-b892-2ec71e47b8af' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/b28ced27-98f8-4369-b892-2ec71e47b8af' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f2f00145-71f8-44f7-bcec-6410cdcbff10' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f2f00145-71f8-44f7-bcec-6410cdcbff10' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f2f00145-71f8-44f7-bcec-6410cdcbff10' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/f2f00145-71f8-44f7-bcec-6410cdcbff10' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/13e9efef-d07b-47b8-84b4-1d917672b1ab' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/13e9efef-d07b-47b8-84b4-1d917672b1ab' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/13e9efef-d07b-47b8-84b4-1d917672b1ab' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/13e9efef-d07b-47b8-84b4-1d917672b1ab' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/06cab9ee-c1b0-45c0-9eea-d4dd8fef4a28' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/06cab9ee-c1b0-45c0-9eea-d4dd8fef4a28' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/06cab9ee-c1b0-45c0-9eea-d4dd8fef4a28' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/06cab9ee-c1b0-45c0-9eea-d4dd8fef4a28' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b2e981e-93ab-40bd-96a0-c0b6ee0f1ce6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b2e981e-93ab-40bd-96a0-c0b6ee0f1ce6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b2e981e-93ab-40bd-96a0-c0b6ee0f1ce6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b2e981e-93ab-40bd-96a0-c0b6ee0f1ce6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fd3a87e6-b8ae-40b6-af48-023c9bb19968' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fd3a87e6-b8ae-40b6-af48-023c9bb19968' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fd3a87e6-b8ae-40b6-af48-023c9bb19968' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fd3a87e6-b8ae-40b6-af48-023c9bb19968' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8a7c0f2a-5b52-4535-bc74-96c4a2b47c50' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8a7c0f2a-5b52-4535-bc74-96c4a2b47c50' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8a7c0f2a-5b52-4535-bc74-96c4a2b47c50' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8a7c0f2a-5b52-4535-bc74-96c4a2b47c50' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/435bdff6-17dc-4d7c-a8f4-d52c6d896889' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/435bdff6-17dc-4d7c-a8f4-d52c6d896889' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/435bdff6-17dc-4d7c-a8f4-d52c6d896889' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/435bdff6-17dc-4d7c-a8f4-d52c6d896889' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5dae8074-ce77-4d54-8ca0-79047eb8ca92' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5dae8074-ce77-4d54-8ca0-79047eb8ca92' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5dae8074-ce77-4d54-8ca0-79047eb8ca92' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5dae8074-ce77-4d54-8ca0-79047eb8ca92' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be319108-848c-467d-a45a-6ea7da944427' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be319108-848c-467d-a45a-6ea7da944427' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be319108-848c-467d-a45a-6ea7da944427' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/be319108-848c-467d-a45a-6ea7da944427' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/94ec5fb9-c3ed-4b80-b2d7-4e13fcdd6ce1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/94ec5fb9-c3ed-4b80-b2d7-4e13fcdd6ce1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/94ec5fb9-c3ed-4b80-b2d7-4e13fcdd6ce1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/94ec5fb9-c3ed-4b80-b2d7-4e13fcdd6ce1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e22df56a-e81b-43c0-9048-46f7efb91e99' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e22df56a-e81b-43c0-9048-46f7efb91e99' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e22df56a-e81b-43c0-9048-46f7efb91e99' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e22df56a-e81b-43c0-9048-46f7efb91e99' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0feedbfe-082e-46b9-b907-67e6dd51625b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Permissions policy violation: compute-pressure is not allowed in this document.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0feedbfe-082e-46b9-b907-67e6dd51625b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Permissions policy violation: compute-pressure is not allowed in this document.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0feedbfe-082e-46b9-b907-67e6dd51625b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Permissions policy violation: compute-pressure is not allowed in this document.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0feedbfe-082e-46b9-b907-67e6dd51625b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Permissions policy violation: compute-pressure is not allowed in this document.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/92df9f89-39bd-4d75-8b8f-5224a072992e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/92df9f89-39bd-4d75-8b8f-5224a072992e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/92df9f89-39bd-4d75-8b8f-5224a072992e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/92df9f89-39bd-4d75-8b8f-5224a072992e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c851cb06-4c22-4319-9ab0-f2c18edf888f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c851cb06-4c22-4319-9ab0-f2c18edf888f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c851cb06-4c22-4319-9ab0-f2c18edf888f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c851cb06-4c22-4319-9ab0-f2c18edf888f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2bb764fd-4f3f-4364-8c22-637a9ca30370' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2bb764fd-4f3f-4364-8c22-637a9ca30370' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2bb764fd-4f3f-4364-8c22-637a9ca30370' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/2bb764fd-4f3f-4364-8c22-637a9ca30370' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fmarathon%2Frook-builds&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/92d5c3c7-9e22-40a0-b660-f795e28eff5d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fmarathon%2Frook-builds&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/92d5c3c7-9e22-40a0-b660-f795e28eff5d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fmarathon%2Frook-builds&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/92d5c3c7-9e22-40a0-b660-f795e28eff5d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fmarathon%2Frook-builds&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/92d5c3c7-9e22-40a0-b660-f795e28eff5d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at I (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37993)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33593)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at C (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37823)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33588)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at D (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:38162)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33598)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  [Prebid] could not load prebid config,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3140973a-c9ef-4ab4-9702-25df8523d055' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3140973a-c9ef-4ab4-9702-25df8523d055' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at I (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37993)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33593)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at C (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37823)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33588)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at D (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:38162)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33598)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  [Prebid] could not load prebid config,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3140973a-c9ef-4ab4-9702-25df8523d055' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/3140973a-c9ef-4ab4-9702-25df8523d055' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d2bef5a4-a240-41cb-a007-8de9596b4a9b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d2bef5a4-a240-41cb-a007-8de9596b4a9b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d2bef5a4-a240-41cb-a007-8de9596b4a9b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d2bef5a4-a240-41cb-a007-8de9596b4a9b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ec48b65d-4276-450c-9ba9-bc4af8b928d3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Permissions policy violation: compute-pressure is not allowed in this document.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ec48b65d-4276-450c-9ba9-bc4af8b928d3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Permissions policy violation: compute-pressure is not allowed in this document.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ec48b65d-4276-450c-9ba9-bc4af8b928d3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Permissions policy violation: compute-pressure is not allowed in this document.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/ec48b65d-4276-450c-9ba9-bc4af8b928d3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Permissions policy violation: compute-pressure is not allowed in this document.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9011d84b-d820-45c3-8c84-b07d36020457' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9011d84b-d820-45c3-8c84-b07d36020457' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9011d84b-d820-45c3-8c84-b07d36020457' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/9011d84b-d820-45c3-8c84-b07d36020457' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7cf435e6-c9ad-441f-b054-b323341aa6fe' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7cf435e6-c9ad-441f-b054-b323341aa6fe' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7cf435e6-c9ad-441f-b054-b323341aa6fe' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/7cf435e6-c9ad-441f-b054-b323341aa6fe' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/21ff0052-aae6-488d-bd46-da8557a1032c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/21ff0052-aae6-488d-bd46-da8557a1032c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/21ff0052-aae6-488d-bd46-da8557a1032c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/21ff0052-aae6-488d-bd46-da8557a1032c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dfd06ec2-2b2b-42d4-9bb7-bf57c0d67d33' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dfd06ec2-2b2b-42d4-9bb7-bf57c0d67d33' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dfd06ec2-2b2b-42d4-9bb7-bf57c0d67d33' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/dfd06ec2-2b2b-42d4-9bb7-bf57c0d67d33' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/db8c0260-a765-4815-ba1e-373a0cf4efa8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/db8c0260-a765-4815-ba1e-373a0cf4efa8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/db8c0260-a765-4815-ba1e-373a0cf4efa8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/db8c0260-a765-4815-ba1e-373a0cf4efa8' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/27bdd67b-6159-4258-8a71-5cbb14579666' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/27bdd67b-6159-4258-8a71-5cbb14579666' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/27bdd67b-6159-4258-8a71-5cbb14579666' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/27bdd67b-6159-4258-8a71-5cbb14579666' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/72fb2e11-2468-4a72-8c00-c54a3d6a2622' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/72fb2e11-2468-4a72-8c00-c54a3d6a2622' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/72fb2e11-2468-4a72-8c00-c54a3d6a2622' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/72fb2e11-2468-4a72-8c00-c54a3d6a2622' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d89381ab-a9a8-4ee9-8864-a529b562f69a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d89381ab-a9a8-4ee9-8864-a529b562f69a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d89381ab-a9a8-4ee9-8864-a529b562f69a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d89381ab-a9a8-4ee9-8864-a529b562f69a' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/071d908a-293e-4ec4-8eb8-2c47400c3f66' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/071d908a-293e-4ec4-8eb8-2c47400c3f66' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/071d908a-293e-4ec4-8eb8-2c47400c3f66' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/071d908a-293e-4ec4-8eb8-2c47400c3f66' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1ab82d18-c7d5-4fd0-9382-8d8a3546237e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1ab82d18-c7d5-4fd0-9382-8d8a3546237e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1ab82d18-c7d5-4fd0-9382-8d8a3546237e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1ab82d18-c7d5-4fd0-9382-8d8a3546237e' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/193810fb-19cc-4b7c-828b-594f82134006' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/193810fb-19cc-4b7c-828b-594f82134006' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/193810fb-19cc-4b7c-828b-594f82134006' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/193810fb-19cc-4b7c-828b-594f82134006' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e186df62-d36b-42fb-ad58-eeb36f1e0d0b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e186df62-d36b-42fb-ad58-eeb36f1e0d0b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e186df62-d36b-42fb-ad58-eeb36f1e0d0b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/e186df62-d36b-42fb-ad58-eeb36f1e0d0b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at C (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37823)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33588)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at D (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:38162)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33598)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at I (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37993)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33593)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  [Prebid] could not load prebid config,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c5f05806-2119-4299-be91-6a7940d1231f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c5f05806-2119-4299-be91-6a7940d1231f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at C (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37823)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33588)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at D (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:38162)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33598)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  TypeError: Failed to fetch
    at https://mobalytics.gg/static/js/6949.521ef217.js:15:4056
    at I (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:37993)
    at S (https://mobalytics.gg/static/js/main.4c6744b3.js:2458:33593)
    at ln.load (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:50930)
    at e0.ensureProvidersReady (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:41623)
    at ej.initAdsEffect (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:33807)
    at Object.onFinished (https://mobalytics.gg/static/js/main.4c6744b3.js:2640:22344)
    at ll.finish (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:49797)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.finish (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at ll.runCommand (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47812)
    at ll.dispatch (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:47448)
    at ti (https://mobalytics.gg/static/js/6949.521ef217.js:3:221856)
    at ll.dispatch (https://mobalytics.gg/static/js/6949.521ef217.js:3:221653)
    at onEmpty (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:48679)
    at d (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:42220)
    at f (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43424)
    at o.<anonymous> (https://mobalytics.gg/static/js/main.4c6744b3.js:2471:43477)
    at Be.o.dispatcher.o.dispatcher (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:13653)
    at je (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:14437)
    at o.trigger (https://cdn.jsdelivr.net/npm/video.js@7.20.2/dist/video.min.js:12:19171)
    at PlayerWrapper.onAdError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:461:18)
    at Controller.onErrorLoadingAds (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:2126:22)
    at SdkImpl.onAdsLoaderError (https://cdnjs.cloudflare.com/ajax/libs/videojs-ima/1.11.0/videojs.ima.js:1495:19)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at NY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:853:129)
    at OY (https://imasdk.googleapis.com/js/sdkloader/ima3.js:864:318)
    at MY.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:865:83)
    at Qy (https://imasdk.googleapis.com/js/sdkloader/ima3.js:344:200)
    at m.dispatchEvent (https://imasdk.googleapis.com/js/sdkloader/ima3.js:342:349)
    at pU.<anonymous> (https://imasdk.googleapis.com/js/sdkloader/ima3.js:658:270)
    at My (https://imasdk.googleapis.com/js/sdkloader/ima3.js:341:164)
    at b (https://imasdk.googleapis.com/js/sdkloader/ima3.js:339:297)
    at n (https://mobalytics.gg/static/js/6949.521ef217.js:12:4922),Console error: 
[error]: error:  [Prebid] could not load prebid config,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c5f05806-2119-4299-be91-6a7940d1231f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/c5f05806-2119-4299-be91-6a7940d1231f' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/13c34340-8501-4fc4-9e86-76940e62c3d6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/13c34340-8501-4fc4-9e86-76940e62c3d6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/13c34340-8501-4fc4-9e86-76940e62c3d6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/13c34340-8501-4fc4-9e86-76940e62c3d6' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fmarathon%2Fweapons%2Fbully-smg&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d2228e57-6b81-4fe8-95dc-2170d6be82cd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fmarathon%2Fweapons%2Fbully-smg&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d2228e57-6b81-4fe8-95dc-2170d6be82cd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fmarathon%2Fweapons%2Fbully-smg&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d2228e57-6b81-4fe8-95dc-2170d6be82cd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fmarathon%2Fweapons%2Fbully-smg&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/d2228e57-6b81-4fe8-95dc-2170d6be82cd' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0b9723ce-8bba-4acf-9c15-8d985d7b7a2d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0b9723ce-8bba-4acf-9c15-8d985d7b7a2d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0b9723ce-8bba-4acf-9c15-8d985d7b7a2d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/0b9723ce-8bba-4acf-9c15-8d985d7b7a2d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/19ced97f-58f7-45e2-a0a3-0b96010ba323' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/19ced97f-58f7-45e2-a0a3-0b96010ba323' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/19ced97f-58f7-45e2-a0a3-0b96010ba323' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/19ced97f-58f7-45e2-a0a3-0b96010ba323' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1a8716c4-84ea-4bfb-986a-46fade05693b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1a8716c4-84ea-4bfb-986a-46fade05693b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1a8716c4-84ea-4bfb-986a-46fade05693b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1a8716c4-84ea-4bfb-986a-46fade05693b' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5c841509-4584-4a12-a4f5-755a58dd4860' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5c841509-4584-4a12-a4f5-755a58dd4860' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5c841509-4584-4a12-a4f5-755a58dd4860' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5c841509-4584-4a12-a4f5-755a58dd4860' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: error:  TypeError: Failed to fetch,Console error: 
[error]: error:  TypeError: Failed to fetch,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/65006145-1a97-4be9-95f4-c8eb16d73b78' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/65006145-1a97-4be9-95f4-c8eb16d73b78' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: error:  TypeError: Failed to fetch,Console error: 
[error]: error:  TypeError: Failed to fetch,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/65006145-1a97-4be9-95f4-c8eb16d73b78' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/65006145-1a97-4be9-95f4-c8eb16d73b78' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b842e06-4376-469c-8de6-af0d22bfffe3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b842e06-4376-469c-8de6-af0d22bfffe3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b842e06-4376-469c-8de6-af0d22bfffe3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/8b842e06-4376-469c-8de6-af0d22bfffe3' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fcc2e7ce-8869-45cd-864e-f6f8e68291b1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fcc2e7ce-8869-45cd-864e-f6f8e68291b1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fcc2e7ce-8869-45cd-864e-f6f8e68291b1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/fcc2e7ce-8869-45cd-864e-f6f8e68291b1' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/567661c9-0bfb-4360-a0c6-39a992a5668c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/567661c9-0bfb-4360-a0c6-39a992a5668c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/567661c9-0bfb-4360-a0c6-39a992a5668c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/567661c9-0bfb-4360-a0c6-39a992a5668c' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fmarathon%2Fweapons%2Flongshot&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/213a807c-42fd-48a9-9b81-dc5f17c18c17' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fmarathon%2Fweapons%2Flongshot&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/213a807c-42fd-48a9-9b81-dc5f17c18c17' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fmarathon%2Fweapons%2Flongshot&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/213a807c-42fd-48a9-9b81-dc5f17c18c17' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Access to fetch at 'https://securepubads.g.doubleclick.net/pagead/purl_config?url=https%3A%2F%2Fmobalytics.gg%2Fmarathon%2Fweapons%2Flongshot&puc_types=2%3A4&pppnc=7103' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/213a807c-42fd-48a9-9b81-dc5f17c18c17' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1b0d552a-60d5-450c-95cf-e0b34ce3adf7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1b0d552a-60d5-450c-95cf-e0b34ce3adf7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1b0d552a-60d5-450c-95cf-e0b34ce3adf7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/1b0d552a-60d5-450c-95cf-e0b34ce3adf7' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4fa808e6-7cdb-4250-a2f7-d169d7222878' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4fa808e6-7cdb-4250-a2f7-d169d7222878' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4fa808e6-7cdb-4250-a2f7-d169d7222878' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Failed to load resource: the server responded with a status of 429 (),Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/4fa808e6-7cdb-4250-a2f7-d169d7222878' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /Minified React error #(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5465014b-df56-47f6-9f1a-48e12937374d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5465014b-df56-47f6-9f1a-48e12937374d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

```
Error: expect(received).not.toMatch(expected)

Expected pattern: not /#(418|423)/i
Received string:      "Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5465014b-df56-47f6-9f1a-48e12937374d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Console error: 
[error]: Access to fetch at 'https://cdn.api.btloader.com/device?orgid=5163601465966592&fullVersionList=%5B%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22HeadlessChrome%22%2C%22version%22%3A%22148.0.7778.96%22%7D%2C%7B%22brand%22%3A%22Not%2FA%29Brand%22%2C%22version%22%3A%2299.0.0.0%22%7D%5D&upapi=true' from origin 'https://mobalytics.gg' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.,Console error: 
[error]: Failed to load resource: net::ERR_FAILED,Console error: 
[error]: Loading the script 'blob:https://mobalytics.gg/5465014b-df56-47f6-9f1a-48e12937374d' violates the following Content Security Policy directive: \"script-src * 'unsafe-inline' 'unsafe-eval'\". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback. Note that '*' matches only URLs with network schemes ('http', 'https', 'ws', 'wss'), or URLs whose scheme matches `self`'s scheme. The scheme 'blob:' must be added explicitly. The action has been blocked.,Page error: 
[Error]: \"Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\""
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "Mobalytics" [ref=e6] [cursor=pointer]:
          - /url: /marathon
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
          - generic:
            - link "Genshin Impact Genshin New":
              - /url: https://mobalytics.gg/genshin-impact
              - generic:
                - generic:
                  - img "Genshin Impact"
                  - generic: Genshin
                  - generic:
                    - generic: New
      - generic [ref=e104]:
        - generic [ref=e105]:
          - generic [ref=e110] [cursor=pointer]:
            - button "plus Rewards" [ref=e111]:
              - img "plus" [ref=e113]
              - generic [ref=e114]: Rewards
            - generic [ref=e116]: New
          - link "DOWNLOAD APP" [ref=e117] [cursor=pointer]:
            - /url: /lol/glp/download-welcome?Channel=web_dl_btn&isElectron=true&utm_campaign=top-marathon&utm_medium=homepage&utm_source=web
            - button "DOWNLOAD APP" [ref=e119]:
              - img [ref=e120]
              - text: DOWNLOAD APP
          - link "Gamebase" [ref=e122] [cursor=pointer]:
            - /url: /gamebase
            - generic [ref=e123]: Gamebase
        - generic [ref=e125]:
          - button "Sign In" [ref=e127] [cursor=pointer]
          - button "Notifications" [ref=e129] [cursor=pointer]:
            - img [ref=e130]
          - button [ref=e132] [cursor=pointer]:
            - img [ref=e134]
          - button "Theme" [ref=e136] [cursor=pointer]:
            - img "Theme" [ref=e138]
      - generic [ref=e140]:
        - link "Home" [ref=e143] [cursor=pointer]:
          - /url: /marathon
          - img "Home" [ref=e145]
        - link "Profile" [ref=e148] [cursor=pointer]:
          - /url: /marathon/profile
          - img "Profile" [ref=e150]
        - link "Build Planner" [ref=e153] [cursor=pointer]:
          - /url: /marathon/planner/builds
          - img "Build Planner" [ref=e155]
        - link "Tier Lists" [ref=e158] [cursor=pointer]:
          - /url: /marathon/tier-lists
          - img "Tier Lists" [ref=e160]
        - link "Builds" [ref=e163] [cursor=pointer]:
          - /url: /marathon/builds
          - img "Builds" [ref=e165]
        - link "Runners" [ref=e168] [cursor=pointer]:
          - /url: /marathon/runners
          - img "Runners" [ref=e170]
        - link "Weapons" [ref=e173] [cursor=pointer]:
          - /url: /marathon/weapons
          - img "Weapons" [ref=e175]
        - link "Factions" [ref=e178] [cursor=pointer]:
          - /url: /marathon/factions
          - img "Factions" [ref=e180]
        - link "Maps" [ref=e183] [cursor=pointer]:
          - /url: /marathon/maps
          - img "Maps" [ref=e185]
        - link "Guides" [ref=e188] [cursor=pointer]:
          - /url: /marathon/guides
          - img "Guides" [ref=e190]
      - generic [ref=e192]:
        - main [ref=e193]:
          - generic [ref=e195]:
            - generic [ref=e196]:
              - button "Marathon Misriah 2442 The Misriah 2442 is a Shotgun that uses MIPS Rounds. It packs high damage in close quarters. Updated on June 16th, 2026" [ref=e199]:
                - generic [ref=e204]:
                  - heading "Marathon Misriah 2442" [level=1] [ref=e205]:
                    - generic [ref=e206]: Marathon
                    - generic [ref=e207]: Misriah 2442
                  - generic [ref=e214]:
                    - paragraph [ref=e215]:
                      - text: The Misriah 2442 is a
                      - link "Shotgun" [ref=e216] [cursor=pointer]:
                        - /url: /marathon/weapons#shotguns-5
                      - text: that uses MIPS Rounds. It packs high damage in close quarters.
                    - paragraph [ref=e217]:
                      - emphasis [ref=e218]: Updated on June 16th, 2026
              - generic [ref=e220]:
                - generic [ref=e221]:
                  - generic [ref=e222]:
                    - heading "Overview" [level=2] [ref=e226]
                    - generic [ref=e231]:
                      - table [ref=e233]:
                        - row "Type Shotgun" [ref=e237]:
                          - rowheader "Type" [ref=e238]:
                            - paragraph [ref=e239]: Type
                          - cell "Shotgun" [ref=e240]:
                            - paragraph [ref=e241]: Shotgun
                        - row "Slot Secondary" [ref=e242]:
                          - rowheader "Slot" [ref=e243]:
                            - paragraph [ref=e244]: Slot
                          - cell "Secondary" [ref=e245]:
                            - paragraph [ref=e246]: Secondary
                        - row "Ammo Type MIPS" [ref=e247]:
                          - rowheader "Ammo Type" [ref=e248]:
                            - paragraph [ref=e249]: Ammo Type
                          - cell "MIPS" [ref=e250]:
                            - paragraph [ref=e251]:
                              - generic [ref=e256]: MIPS
                        - row "Rarity Standard" [ref=e257]:
                          - rowheader "Rarity" [ref=e258]:
                            - paragraph [ref=e259]: Rarity
                          - cell "Standard" [ref=e260]:
                            - paragraph [ref=e261]: Standard
                        - row "Price ?" [ref=e262]:
                          - rowheader "Price" [ref=e263]:
                            - paragraph [ref=e264]: Price
                          - cell "?" [ref=e265]:
                            - paragraph [ref=e266]: "?"
                      - paragraph [ref=e267]: Compact submachine gun with five-round burst firing mechanism.
                  - generic [ref=e268]:
                    - heading "Stats" [level=2] [ref=e272]
                    - generic [ref=e277]:
                      - table [ref=e279]:
                        - row "Firepower 182.52" [ref=e283]:
                          - columnheader "Firepower" [ref=e284]:
                            - paragraph [ref=e285]: Firepower
                          - columnheader "182.52" [ref=e286]:
                            - paragraph [ref=e287]:
                              - link "182.52" [ref=e288] [cursor=pointer]:
                                - /url: https://182.52
                        - row "Damage 11.7" [ref=e289]:
                          - cell "Damage" [ref=e290]:
                            - paragraph [ref=e291]: Damage
                          - cell "11.7" [ref=e292]:
                            - paragraph [ref=e293]: "11.7"
                        - row "Precision Multiplier 1.3s" [ref=e294]:
                          - cell "Precision Multiplier" [ref=e295]:
                            - paragraph [ref=e296]: Precision Multiplier
                          - cell "1.3s" [ref=e297]:
                            - paragraph [ref=e298]:
                              - link "1.3s" [ref=e299] [cursor=pointer]:
                                - /url: https://1.3s
                        - row "Rate of Fire 72" [ref=e300]:
                          - cell "Rate of Fire" [ref=e301]:
                            - paragraph [ref=e302]: Rate of Fire
                          - cell "72" [ref=e303]:
                            - paragraph [ref=e304]: "72"
                        - row "Range 10" [ref=e305]:
                          - cell "Range" [ref=e306]:
                            - paragraph [ref=e307]: Range
                          - cell "10" [ref=e308]:
                            - paragraph [ref=e309]: "10"
                      - table [ref=e311]:
                        - row "Accuracy 64" [ref=e315]:
                          - columnheader "Accuracy" [ref=e316]:
                            - paragraph [ref=e317]: Accuracy
                          - columnheader "64" [ref=e318]:
                            - paragraph [ref=e319]: "64"
                        - row "Hipfire Spread ?" [ref=e320]:
                          - cell "Hipfire Spread" [ref=e321]:
                            - paragraph [ref=e322]: Hipfire Spread
                          - cell "?" [ref=e323]:
                            - paragraph [ref=e324]: "?"
                        - row "ADS Spread 0.42s" [ref=e325]:
                          - cell "ADS Spread" [ref=e326]:
                            - paragraph [ref=e327]: ADS Spread
                          - cell "0.42s" [ref=e328]:
                            - paragraph [ref=e329]:
                              - link "0.42s" [ref=e330] [cursor=pointer]:
                                - /url: https://0.42s
                        - row "Crouch Spread Bonus ?" [ref=e331]:
                          - cell "Crouch Spread Bonus" [ref=e332]:
                            - paragraph [ref=e333]: Crouch Spread Bonus
                          - cell "?" [ref=e334]:
                            - paragraph [ref=e335]: "?"
                        - row "Moving Inaccuracy ?" [ref=e336]:
                          - cell "Moving Inaccuracy" [ref=e337]:
                            - paragraph [ref=e338]: Moving Inaccuracy
                          - cell "?" [ref=e339]:
                            - paragraph [ref=e340]: "?"
                      - table [ref=e342]:
                        - row "Handling 64" [ref=e346]:
                          - columnheader "Handling" [ref=e347]:
                            - paragraph [ref=e348]: Handling
                          - columnheader "64" [ref=e349]:
                            - paragraph [ref=e350]: "64"
                        - row "Equip Speed 0.9s" [ref=e351]:
                          - cell "Equip Speed" [ref=e352]:
                            - paragraph [ref=e353]: Equip Speed
                          - cell "0.9s" [ref=e354]:
                            - paragraph [ref=e355]:
                              - link "0.9s" [ref=e356] [cursor=pointer]:
                                - /url: https://0.9s
                        - row "ADS Speed 0.42s" [ref=e357]:
                          - cell "ADS Speed" [ref=e358]:
                            - paragraph [ref=e359]: ADS Speed
                          - cell "0.42s" [ref=e360]:
                            - paragraph [ref=e361]:
                              - link "0.42s" [ref=e362] [cursor=pointer]:
                                - /url: https://0.42s
                        - row "Reload Speed 0.8s" [ref=e363]:
                          - cell "Reload Speed" [ref=e364]:
                            - paragraph [ref=e365]: Reload Speed
                          - cell "0.8s" [ref=e366]:
                            - paragraph [ref=e367]:
                              - link "0.8s" [ref=e368] [cursor=pointer]:
                                - /url: https://0.8s
                        - row "Weight 36%" [ref=e369]:
                          - cell "Weight" [ref=e370]:
                            - paragraph [ref=e371]: Weight
                          - cell "36%" [ref=e372]:
                            - paragraph [ref=e373]: 36%
                        - row "Recoil 93%" [ref=e374]:
                          - cell "Recoil" [ref=e375]:
                            - paragraph [ref=e376]: Recoil
                          - cell "93%" [ref=e377]:
                            - paragraph [ref=e378]: 93%
                        - row "Aim Assist 3.73°" [ref=e379]:
                          - cell "Aim Assist" [ref=e380]:
                            - paragraph [ref=e381]: Aim Assist
                          - cell "3.73°" [ref=e382]:
                            - paragraph [ref=e383]: 3.73°
                      - table [ref=e385]:
                        - row "Magazine & Optics" [ref=e389]:
                          - columnheader "Magazine & Optics" [ref=e390]:
                            - paragraph [ref=e391]: Magazine & Optics
                        - row "Magazine Size 4" [ref=e392]:
                          - cell "Magazine Size" [ref=e393]:
                            - paragraph [ref=e394]: Magazine Size
                          - cell "4" [ref=e395]:
                            - paragraph [ref=e396]: "4"
                        - row "Zoom 1.1x" [ref=e397]:
                          - cell "Zoom" [ref=e398]:
                            - paragraph [ref=e399]: Zoom
                          - cell "1.1x" [ref=e400]:
                            - paragraph [ref=e401]:
                              - link "1.1x" [ref=e402] [cursor=pointer]:
                                - /url: https://1.1x
                        - row "Pellet Count ?" [ref=e403]:
                          - cell "Pellet Count" [ref=e404]:
                            - paragraph [ref=e405]: Pellet Count
                          - cell "?" [ref=e406]:
                            - paragraph [ref=e407]: "?"
                        - row "Spread Angle ?" [ref=e408]:
                          - cell "Spread Angle" [ref=e409]:
                            - paragraph [ref=e410]: Spread Angle
                          - cell "?" [ref=e411]:
                            - paragraph [ref=e412]: "?"
                  - generic [ref=e413]:
                    - heading "Compatible Mods" [level=2] [ref=e417]
                    - table [ref=e424]:
                      - row "Name Slot Type Rarity" [ref=e429]:
                        - cell "Name" [ref=e430]:
                          - paragraph [ref=e431]:
                            - strong [ref=e432]: Name
                        - cell "Slot Type" [ref=e433]:
                          - paragraph [ref=e434]:
                            - strong [ref=e435]: Slot Type
                        - cell "Rarity" [ref=e436]:
                          - paragraph [ref=e437]:
                            - strong [ref=e438]: Rarity
                      - row "Pinpoint Barrel Barrel Superior" [ref=e439]:
                        - cell "Pinpoint Barrel" [ref=e440]:
                          - paragraph [ref=e441]:
                            - generic [ref=e446]: Pinpoint Barrel
                        - cell "Barrel" [ref=e447]:
                          - paragraph [ref=e448]: Barrel
                        - cell "Superior" [ref=e449]:
                          - paragraph [ref=e450]: Superior
                      - row "Background Process Chip Enhanced" [ref=e451]:
                        - cell "Background Process" [ref=e452]:
                          - paragraph [ref=e453]:
                            - generic [ref=e458]: Background Process
                        - cell "Chip" [ref=e459]:
                          - paragraph [ref=e460]: Chip
                        - cell "Enhanced" [ref=e461]:
                          - paragraph [ref=e462]: Enhanced
                      - row "Bounty Hunter Chip Enhanced" [ref=e463]:
                        - cell "Bounty Hunter" [ref=e464]:
                          - paragraph [ref=e465]:
                            - generic [ref=e470]: Bounty Hunter
                        - cell "Chip" [ref=e471]:
                          - paragraph [ref=e472]: Chip
                        - cell "Enhanced" [ref=e473]:
                          - paragraph [ref=e474]: Enhanced
                      - row "Cloudborn Chip Enhanced" [ref=e475]:
                        - cell "Cloudborn" [ref=e476]:
                          - paragraph [ref=e477]:
                            - generic [ref=e482]: Cloudborn
                        - cell "Chip" [ref=e483]:
                          - paragraph [ref=e484]: Chip
                        - cell "Enhanced" [ref=e485]:
                          - paragraph [ref=e486]: Enhanced
                      - row "Eyes on Fire Chip Enhanced" [ref=e487]:
                        - cell "Eyes on Fire" [ref=e488]:
                          - paragraph [ref=e489]:
                            - generic [ref=e494]: Eyes on Fire
                        - cell "Chip" [ref=e495]:
                          - paragraph [ref=e496]: Chip
                        - cell "Enhanced" [ref=e497]:
                          - paragraph [ref=e498]: Enhanced
                      - row "Flash Draw Chip Chip Superior" [ref=e499]:
                        - cell "Flash Draw Chip" [ref=e500]:
                          - paragraph [ref=e501]:
                            - generic [ref=e506]: Flash Draw Chip
                        - cell "Chip" [ref=e507]:
                          - paragraph [ref=e508]: Chip
                        - cell "Superior" [ref=e509]:
                          - paragraph [ref=e510]: Superior
                      - row "Heatsink Chip Enhanced" [ref=e511]:
                        - cell "Heatsink" [ref=e512]:
                          - paragraph [ref=e513]:
                            - generic [ref=e518]: Heatsink
                        - cell "Chip" [ref=e519]:
                          - paragraph [ref=e520]: Chip
                        - cell "Enhanced" [ref=e521]:
                          - paragraph [ref=e522]: Enhanced
                      - row "Insomniac Chip Enhanced" [ref=e523]:
                        - cell "Insomniac" [ref=e524]:
                          - paragraph [ref=e525]:
                            - generic [ref=e530]: Insomniac
                        - cell "Chip" [ref=e531]:
                          - paragraph [ref=e532]: Chip
                        - cell "Enhanced" [ref=e533]:
                          - paragraph [ref=e534]: Enhanced
                      - row "Insurrection Chip Deluxe" [ref=e535]:
                        - cell "Insurrection" [ref=e536]:
                          - paragraph [ref=e537]:
                            - generic [ref=e542]: Insurrection
                        - cell "Chip" [ref=e543]:
                          - paragraph [ref=e544]: Chip
                        - cell "Deluxe" [ref=e545]:
                          - paragraph [ref=e546]: Deluxe
                      - row "Keen Scout Chip Chip Enhanced" [ref=e547]:
                        - cell "Keen Scout Chip" [ref=e548]:
                          - paragraph [ref=e549]:
                            - generic [ref=e554]: Keen Scout Chip
                        - cell "Chip" [ref=e555]:
                          - paragraph [ref=e556]: Chip
                        - cell "Enhanced" [ref=e557]:
                          - paragraph [ref=e558]: Enhanced
                      - row "Last Resort Chip Enhanced" [ref=e559]:
                        - cell "Last Resort" [ref=e560]:
                          - paragraph [ref=e561]:
                            - generic [ref=e566]: Last Resort
                        - cell "Chip" [ref=e567]:
                          - paragraph [ref=e568]: Chip
                        - cell "Enhanced" [ref=e569]:
                          - paragraph [ref=e570]: Enhanced
                      - row "Motionsense Chip Chip Enhanced" [ref=e571]:
                        - cell "Motionsense Chip" [ref=e572]:
                          - paragraph [ref=e573]:
                            - generic [ref=e578]: Motionsense Chip
                        - cell "Chip" [ref=e579]:
                          - paragraph [ref=e580]: Chip
                        - cell "Enhanced" [ref=e581]:
                          - paragraph [ref=e582]: Enhanced
                      - row "Ornithologist Chip Superior" [ref=e583]:
                        - cell "Ornithologist" [ref=e584]:
                          - paragraph [ref=e585]:
                            - generic [ref=e590]: Ornithologist
                        - cell "Chip" [ref=e591]:
                          - paragraph [ref=e592]: Chip
                        - cell "Superior" [ref=e593]:
                          - paragraph [ref=e594]: Superior
                      - row "Stack Overflow Chip Deluxe" [ref=e595]:
                        - cell "Stack Overflow" [ref=e596]:
                          - paragraph [ref=e597]:
                            - generic [ref=e602]: Stack Overflow
                        - cell "Chip" [ref=e603]:
                          - paragraph [ref=e604]: Chip
                        - cell "Deluxe" [ref=e605]:
                          - paragraph [ref=e606]: Deluxe
                      - row "Swarm Directive Chip Deluxe" [ref=e607]:
                        - cell "Swarm Directive" [ref=e608]:
                          - paragraph [ref=e609]:
                            - generic [ref=e614]: Swarm Directive
                        - cell "Chip" [ref=e615]:
                          - paragraph [ref=e616]: Chip
                        - cell "Deluxe" [ref=e617]:
                          - paragraph [ref=e618]: Deluxe
                      - row "Torch Bug Chip Deluxe" [ref=e619]:
                        - cell "Torch Bug" [ref=e620]:
                          - paragraph [ref=e621]:
                            - generic [ref=e626]: Torch Bug
                        - cell "Chip" [ref=e627]:
                          - paragraph [ref=e628]: Chip
                        - cell "Deluxe" [ref=e629]:
                          - paragraph [ref=e630]: Deluxe
                  - generic [ref=e631]:
                    - heading "Sources" [level=2] [ref=e635]
                    - paragraph [ref=e641]:
                      - emphasis [ref=e642]: In Progress...
                - generic [ref=e644]:
                  - generic [ref=e645]:
                    - heading "Table of Contents" [level=2] [ref=e649]
                    - generic [ref=e650]:
                      - generic [ref=e651]:
                        - link "1. Overview" [ref=e652] [cursor=pointer]:
                          - /url: /marathon/weapons/misriah-2442#3-overview-0
                        - link "2. Stats" [ref=e653] [cursor=pointer]:
                          - /url: /marathon/weapons/misriah-2442#1-stats-1
                        - link "3. Compatible Mods" [ref=e654] [cursor=pointer]:
                          - /url: /marathon/weapons/misriah-2442#6-compatible-mods-2
                        - link "4. Sources" [ref=e655] [cursor=pointer]:
                          - /url: /marathon/weapons/misriah-2442#7-sources-3
                      - button "Back to top" [ref=e657] [cursor=pointer]
                  - link "Marathon Weapons Browse all weapons, compare stats, and find the perfect loadout. View All Weapons" [ref=e659] [cursor=pointer]:
                    - /url: /marathon/weapons
                    - generic [ref=e662]:
                      - generic [ref=e663]:
                        - paragraph [ref=e664]: Marathon Weapons
                        - paragraph [ref=e665]: Browse all weapons, compare stats, and find the perfect loadout.
                      - button "View All Weapons" [ref=e667]: View All Weapons
            - status [ref=e669]
        - complementary [ref=e675]:
          - generic [ref=e676]:
            - generic [ref=e678]:
              - generic [ref=e680] [cursor=pointer]:
                - generic [ref=e681]: Advertisement
                - generic [ref=e682]: Remove Ads
              - generic [ref=e686] [cursor=pointer]:
                - generic [ref=e687]: Remove all ads
                - generic [ref=e688]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e689]
            - generic [ref=e691]:
              - generic [ref=e693] [cursor=pointer]:
                - generic [ref=e694]: Advertisement
                - generic [ref=e695]: Remove Ads
              - generic [ref=e699] [cursor=pointer]:
                - generic [ref=e700]: Remove all ads
                - generic [ref=e701]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
                - button "Remove ads" [ref=e702]
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e705]:
    - banner [ref=e706]:
      - generic [ref=e707] [cursor=pointer]:
        - generic [ref=e708]: Advertisement
        - generic [ref=e709]: Remove Ads
    - generic [ref=e712] [cursor=pointer]:
      - generic [ref=e713]: Remove all ads
      - generic [ref=e714]: Say goodbye to ads, support our team, see exclusive sneak peeks, and get a shiny new Discord role.
      - button "Remove ads" [ref=e715]
```

# Test source

```ts
  132 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  133 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  134 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  135 | 
  136 |       filteredLinks = arrayLinks
  137 |         .filter((match) => {
  138 |           const filterPattern =
  139 |             /mobalytics\.gg\/destiny-2\/builds\/(titan|warlock|hunter)\/(void|strand|prismatic|arc|solar|stasis)\/[-a-z]+/;
  140 |           return filterPattern.test(match.groups.link);
  141 |         })
  142 |         .slice(0, quantityLinks);
  143 |     });
  144 | 
  145 |     for (const takeLink of filteredLinks) {
  146 |       const consoleMessages = [];
  147 |       const pageErrors = [];
  148 |       page.on('console', (msg) => {
  149 |         if (msg.type() === 'error') {
  150 |           const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  151 |           // console.log(consoleInfo);
  152 |           consoleMessages.push(consoleInfo);
  153 |         }
  154 |       });
  155 |       page.on('pageerror', (error) => {
  156 |         const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  157 |         // if (error.message.match(/Minified React error #(418|423)/i)) {
  158 |         //   console.log(errorInfo);
  159 |         // }
  160 |         pageErrors.push(errorInfo);
  161 |       });
  162 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  163 | 
  164 |       await test.step(`Open parsed page: ${link}`, async () => {
  165 |         await page.goto(link);
  166 |         await page.waitForTimeout(1000);
  167 |       });
  168 | 
  169 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  170 | 
  171 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  172 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  173 |         expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
  174 |         expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
  175 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  176 |       });
  177 |     }
  178 |   });
  179 | 
  180 |   test(`Check that hydration is ok on Marathon`, async ({ page, request }) => {
  181 |     let filteredLinks;
  182 | 
  183 |     await test.step(`Parse up to ${quantityLinks} links from Marathon sitemap: ${process.env.BASE_URL}/marathon/sitemap.xml`, async () => {
  184 |       const response = await request.get(`${process.env.BASE_URL}/marathon/sitemap.xml`);
  185 |       await test.step(`Expected Result: ${process.env.BASE_URL}/marathon/sitemap.xml returns with ${response.status()}`, async () => {
  186 |         expect(response.ok()).toBeTruthy();
  187 |       });
  188 |       const xmlData = await response.text();
  189 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  190 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  191 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  192 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  193 | 
  194 |       filteredLinks = arrayLinks
  195 |         .filter((match) => {
  196 |           const filterPattern = /mobalytics\.gg\/marathon/;
  197 |           return filterPattern.test(match.groups.link);
  198 |         })
  199 |         .slice(0, quantityLinks);
  200 |     });
  201 | 
  202 |     for (const takeLink of filteredLinks) {
  203 |       const consoleMessages = [];
  204 |       const pageErrors = [];
  205 |       page.on('console', (msg) => {
  206 |         if (msg.type() === 'error') {
  207 |           const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  208 |           // console.log(consoleInfo);
  209 |           consoleMessages.push(consoleInfo);
  210 |         }
  211 |       });
  212 |       page.on('pageerror', (error) => {
  213 |         const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  214 |         // if (error.message.match(/Minified React error #(418|423)/i)) {
  215 |         //   console.log(errorInfo);
  216 |         // }
  217 |         pageErrors.push(errorInfo);
  218 |       });
  219 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  220 | 
  221 |       await test.step(`Open parsed page: ${link}`, async () => {
  222 |         await page.goto(link);
  223 |         await page.waitForTimeout(1000);
  224 |       });
  225 | 
  226 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  227 | 
  228 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  229 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  230 |         expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
  231 |         expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
> 232 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
      |                                               ^ Error: expect(received).not.toMatch(expected)
  233 |       });
  234 |     }
  235 |   });
  236 | 
  237 |   test(`Check that hydration is ok on Endfield`, async ({ page, request }) => {
  238 |     let filteredLinks;
  239 | 
  240 |     await test.step(`Parse up to ${quantityLinks} links from Endfield sitemap: ${process.env.BASE_URL}/arknights-endfield/sitemap.xml`, async () => {
  241 |       const response = await request.get(`${process.env.BASE_URL}/arknights-endfield/sitemap.xml`);
  242 |       await test.step(`Expected Result: ${process.env.BASE_URL}/arknights-endfield/sitemap.xml returns with ${response.status()}`, async () => {
  243 |         expect(response.ok()).toBeTruthy();
  244 |       });
  245 |       const xmlData = await response.text();
  246 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  247 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  248 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  249 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  250 | 
  251 |       filteredLinks = arrayLinks
  252 |         .filter((match) => {
  253 |           const filterPattern = /mobalytics\.gg\/arknights-endfield/;
  254 |           return filterPattern.test(match.groups.link);
  255 |         })
  256 |         .slice(0, quantityLinks);
  257 |     });
  258 | 
  259 |     for (const takeLink of filteredLinks) {
  260 |       const consoleMessages = [];
  261 |       const pageErrors = [];
  262 |       page.on('console', (msg) => {
  263 |         if (msg.type() === 'error') {
  264 |           const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  265 |           // console.log(consoleInfo);
  266 |           consoleMessages.push(consoleInfo);
  267 |         }
  268 |       });
  269 |       page.on('pageerror', (error) => {
  270 |         const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  271 |         // if (error.message.match(/Minified React error #(418|423)/i)) {
  272 |         //   console.log(errorInfo);
  273 |         // }
  274 |         pageErrors.push(errorInfo);
  275 |       });
  276 |       const { link } = takeLink.groups; // extract groupName for convenient usage
  277 | 
  278 |       await test.step(`Open parsed page: ${link}`, async () => {
  279 |         await page.goto(link);
  280 |         await page.waitForTimeout(1000);
  281 |       });
  282 | 
  283 |       const allErrorsInOneString = [...consoleMessages, ...pageErrors].join();
  284 | 
  285 |       await test.step('Expected Result: No hydration errors (418 or 423) are present in the console', async () => {
  286 |         expect.soft(allErrorsInOneString).not.toMatch(/Minified React error #(418|423)/i);
  287 |         expect.soft(allErrorsInOneString).not.toMatch(/Hydration failed/i);
  288 |         expect.soft(allErrorsInOneString).not.toMatch(/Text content does not match server-rendered HTML/i);
  289 |         expect.soft(allErrorsInOneString).not.toMatch(/#(418|423)/i);
  290 |       });
  291 |     }
  292 |   });
  293 | 
  294 |   test(`Check that hydration is ok on 2xko`, async ({ page, request }) => {
  295 |     let filteredLinks;
  296 | 
  297 |     await test.step(`Parse up to ${quantityLinks} links from 2xko sitemap: ${process.env.BASE_URL}/2xko/sitemap.xml`, async () => {
  298 |       const response = await request.get(`${process.env.BASE_URL}/2xko/sitemap.xml`);
  299 |       await test.step(`Expected Result: ${process.env.BASE_URL}/2xko/sitemap.xml returns with ${response.status()}`, async () => {
  300 |         expect(response.ok()).toBeTruthy();
  301 |       });
  302 |       const xmlData = await response.text();
  303 |       const linkRegex = /<loc>(?<link>.*?)<\/loc>/g;
  304 |       const arrayLinks = Array.from(xmlData.matchAll(linkRegex));
  305 |       // First step: Object [RegExp String Iterator] {} which creating while matchAll method applies
  306 |       // Second step: Transform Object [RegExp String Iterator] {} into array with object matches
  307 | 
  308 |       filteredLinks = arrayLinks
  309 |         .filter((match) => {
  310 |           const filterPattern = /mobalytics\.gg\/2xko/;
  311 |           return filterPattern.test(match.groups.link);
  312 |         })
  313 |         .slice(0, quantityLinks);
  314 |     });
  315 | 
  316 |     for (const takeLink of filteredLinks) {
  317 |       const consoleMessages = [];
  318 |       const pageErrors = [];
  319 |       page.on('console', (msg) => {
  320 |         if (msg.type() === 'error') {
  321 |           const consoleInfo = `Console error: \n[${msg.type()}]: ${msg.text()}`;
  322 |           // console.log(consoleInfo);
  323 |           consoleMessages.push(consoleInfo);
  324 |         }
  325 |       });
  326 |       page.on('pageerror', (error) => {
  327 |         const errorInfo = `Page error: \n[${error.name}]: "${error.message}"`;
  328 |         // if (error.message.match(/Minified React error #(418|423)/i)) {
  329 |         //   console.log(errorInfo);
  330 |         // }
  331 |         pageErrors.push(errorInfo);
  332 |       });
```
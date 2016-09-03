## What do the various settings mean? (Accuracy, retry interval for accuracy, etc)

**Time before logging** - How long to wait after a point has been logged to try logging again.

**Distance filter** - When a point becomes available, the app will check to ensure that this much distance exists between the previous and current points. If it isn't this distance, the point is discarded.

**Accuracy filter** - When a point becomes available, the app will check to ensure that this point has a minimum accuracy specified. If it does not match the specified accuracy, the point is discarded. This is useful if you are inside a building for a while.

**Time interval for accuracy** - When searching for a point, the app can continue searching for this many seconds until it finds a point that meets the accuracy and distance filter criteria above.


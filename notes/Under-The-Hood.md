## Create an alias:

alias chrome-canary="/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary"

## Open up Chrome in Remote Debugging Mode

chrome-canary --remote-debugging-port=9222

## Get the socket URL

localhost:9222/json/version

### Create a target

```
    {
        "method": "Target.createTarget",
        "id": 1,
        "params": {
            "url": "https://flipkart.com"
        }
    }
```

### Attach to the target

```
    {
        "method": "Target.attachToTarget",
        "id": 1,
        "params": {
            "targetId": <Target ID>
        }
    }
```

### Perform operations on the session

```
    {
        "method": "Target.sendMessageToTarget",
        "id": 2,
        "params": {
            "sessionId": <Session ID>,
            "message": JSON.stringify({
                "id": 1,
                "method": "Runtime.callFunctionOn",
                "params": {
                    "executionContextId": 1,
                    "functionDeclaration": "() => alert(\'Boo!\')"
                }
            })
        }
    }
```
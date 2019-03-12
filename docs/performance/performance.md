### 性能

1、调用链性能追踪

Daruk会自动记录每个中间件的耗时，以及每个请求的中间件访问链路

你可以在access日志中将看到如下信息

```javascript
{"requestId":"4876bd97-d098-4380-abcf-6a72f42da059","msg":"{\"daruk-logger\":1.196143,\"koa-handle-error\":0.236985,\"koa-x-request-id\":2.087368,\"asyncStore\":0.482164,\"koa-favicon\":0.198605,\"koa-bodyparser\":2.517215,\"koa-test-mid\":2.361615,\"router:/hello\":3.806353,\"sum\":12.886448}"}
```

requestId 为这次请求的id，msg 信息为 经过的中间件及耗时

通过记录耗时与方法追踪，我们可以直观的知道慢请求耗时在哪个中间件中

2、CPU profiler监控

Daruk内置了性能查询路由

`GET /monitor/profiler` ：统计当前机器所有的cpu的性能情况以及内存的用量 

​	参数 period： 可以指定需要多少秒内的机器cpu性能 默认 2000ms

结果：

```Json
{
    "cpu": {
        "device": {
            "userPercent": "0.18",
            "sysPercent": "0.11",
            "idlePercent": "0.70"
        },
        "process": {
            "elapTimeMS": 2003.953394,
            "elapUsageMS": 0.882,
            "cpuPercent": "0.0",
            "period": 2000
        }
    },
    "memory": {
        "rss": "43.16",
        "heapTotal": "51.62",
        "heapUsed": "45.38",
        "external": "0.08"
    }
}
```



`GET /monitor/profiler/function ` : 统计某个时间段内的function执行耗时

​	参数 period： 可以指定需要多少秒内的方法执行耗时 默认 2000ms	

结果(仅截取部分): 格式为 执行时间 - 方法名 - 位置- 行号

```json
(root)(101.1ms 100%)
[33m├── [0m[33m_tickCallback[0m (1.2ms 1.22%)(internal/process/next_tick.js 41)
[33m│   [0m[33m└── [0m[33mrunMicrotasks[0m (1.2ms 100.00%)
[33m│   [0m    [33m└── [0m[33mbodyParser[0m (1.2ms 100.00%)(/Daruk/node_modules/koa-bodyparser/index.js 72)
[33m│   [0m        [33m└── [0m[33mdispatch[0m (1.2ms 100.00%)(/Daruk/node_modules/koa/node_modules/koa-compose/index.js 35)
[33m│   [0m            [33m└── [0m[33manonymous[0m (1.2ms 100.00%)(/Daruk/src/index.ts 217)
[33m│   [0m                
```



`GET /monitor/profiler/mem `: 获取内存快照， 将下载当前具体的内存快照，可通过chrome 的Profiler进行分析

当然， 如果你不想下载下来手动分析，你也可以通过调用以下路由获取详情:

`GET /monitor/profiler/mem-analytics`：分析内存

结果:

```Json	
{
    "heapMap": {},
    "leakPoint": [
        {
            "index": 27992,
            "size": 14347168,
            "id": "@55985"
        },
        {
            "index": 27993,
            "size": 13291464,
            "id": "@55987"
        },
        {
            "index": 148068,
            "size": 1658328,
            "id": "@296137"
        },
        {
            "index": 175630,
            "size": 1079872,
            "id": "@351261"
        },
        {
            "index": 224358,
            "size": 1079832,
            "id": "@448717"
        }
    ],
    "statistics": {
        "total": 49699126,
        "v8heap": 49609744,
        "native": 89382,
        "code": 2803392,
        "jsArrays": 1017696,
        "strings": 27068032,
        "system": 2052496
    },
    "rootIndex": 0,
    "aggregates": {
        "(system)": {
            "count": 106018,
            "distance": -5,
            "self": 5318360,
            "maxRet": 8091728,
            "type": "hidden",
            "name": null,
            "idxs": []
        },
        "(string)": {
            "count": 54471,
            "distance": 2,
            "self": 26389512,
            "maxRet": 26389512,
            "type": "string",
            "name": null,
            "idxs": []
        },
        "(array)": {
            "count": 46685,
            "distance": 2,
            "self": 8706440,
            "maxRet": 10222256,
            "type": "array",
            "name": null,
            "idxs": []
        },
        "(number)": {
            "count": 132,
            "distance": 2,
            "self": 2112,
            "maxRet": 2112,
            "type": "number",
            "name": null,
            "idxs": []
        },
        "(symbol)": {
            "count": 159,
            "distance": 3,
            "self": 5088,
            "maxRet": 5752,
            "type": "symbol",
            "name": null,
            "idxs": []
        },
        "(compiled code)": {
            "count": 18662,
            "distance": 3,
            "self": 2803392,
            "maxRet": 29539184,
            "type": "code",
            "name": null,
            "idxs": []
        },
        "(closure)": {
            "count": 21583,
            "distance": 2,
            "self": 1357232,
            "maxRet": 13263436,
            "type": "closure",
            "name": null,
            "idxs": []
        },
        "Object": {
            "count": 17200,
            "distance": 2,
            "self": 1016888,
            "maxRet": 8980248,
            "type": "object",
            "name": "Object",
            "idxs": []
        },
        "system / Context": {
            "count": 5333,
            "distance": 3,
            "self": 407400,
            "maxRet": 7163126,
            "type": "object",
            "name": "system / Context",
            "idxs": []
        },
        "Monitor": {
            "count": 1,
            "distance": 8,
            "self": 184,
            "maxRet": 91400,
            "type": "object",
            "name": "Monitor",
            "idxs": []
        },
        "global": {
            "count": 2,
            "distance": 1,
            "self": 72,
            "maxRet": 47648758,
            "type": "object",
            "name": "global",
            "idxs": []
        },
        "daruk": {
            "count": 1,
            "distance": 7,
            "self": 272,
            "maxRet": 20440,
            "type": "object",
            "name": "daruk",
            "idxs": []
        }
        // ...省略等

```

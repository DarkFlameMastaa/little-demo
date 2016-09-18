# little-demo
## 把请求服务器的代码拿出来(例about.js)
单独建一个ulits(例helpers.js)文件夹拿出来放到一个function里return出来，但是要把setState这样的代码改掉因为单独放的地方没有state啊,这样在about1.js里面运行就可以得到数据
(具体去看about1.js和ulits文件夹里的helpers.js)

## 解决本地缓存
看helpers.js里的25行在地址最后加?${Math.random()} 这样找不到本地缓存就会去网上找最新的

## 关于分支

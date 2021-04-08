let proxyObj = {};
proxyObj['/ws'] = {
    ws: true,
    target: "ws://localhost:8081"
};
proxyObj['/'] = {
    ws: false,
    target: 'http://localhost:8081',
    changeOrigin: true,
    pathRewrite: {
        '^/': ''
    }
}
module.exports = {
    publicPath: './',
    devServer:{
        //host:'192.168.96.131',
        host:'localhost',
        port:8082,// 启动端口
    }
}
// # main/frontend/src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

// "/api" 경로가 시작하면 프록시 미들웨어를 실행한다.
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: '172.22.200.51:',
      changeOrigin: true
    })
  );
};
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware(
            '/api',
            {
                target:'https://api.github.com',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }

            }
        )
    )
}
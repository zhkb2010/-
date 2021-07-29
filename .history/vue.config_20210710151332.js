// const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

// module.exports = {
// 	publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : "./",

// 	devServer: {
// 		proxy: {
// 			'/': {
// 				target: 'http://192.168.199.151:8890',
// 				changeOrigin: true,
// 				ws: true,
// 				pathRewrite: {
// 					'^/': '/'
// 				}
// 			}
// 		},
// 	},
// }
module.exports = {
	// chainWebpack: config => {
	// 	config.plugin.delete('prefetch');
	// },
	devServer: {
		proxy: {
			'/oauth2.0': {
				target: 'https://nid.naver.com'
			}
		}
	}
};
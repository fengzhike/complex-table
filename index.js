import config from './config'
import * as data from './data'

export default {
	name: "mk-app-lszTemplateList",
	version: "1.0.3",
	description: "mk-app-lszTemplateList",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "mk-app-lszTemplateList")
	}
}

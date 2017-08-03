import { config, start, componentFactory } from 'mk-meta-engine'
import * as mkComponents from 'mk-component'
import myConfig  from './config'

import complex_table from './apps/complex-table/index.js'

const apps = {
		
	[complex_table.name]: complex_table,
}

apps.config = (options) => {
	Object.keys(options).forEach(key => {
		const reg = new RegExp(`^${key == '*' ? '.*' : key}$`)
		Object.keys(apps).forEach(appName => {
			if (appName != 'config') {
				if (reg.test(appName)) {
					apps[appName].config(options[key])
				}
			}
		})
	})
}

apps.config({ '*': { apps } })

config(myConfig({ apps }))

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	
start()
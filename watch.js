const rollup = require('rollup')
const tscc = require('@tscc/rollup-plugin-tscc').default
const typescript = require('rollup-plugin-typescript')
const serve = require('rollup-plugin-serve')
const livereload = require('rollup-plugin-livereload')
const chokidar = require('chokidar')

const watcher = rollup.watch({
	output: {
		dir: '.'
	},
	plugins: [
		serve({
			open: true,
			watch: 'dist',
			contentBase: 'dist',
			port: 8080
		}),
		livereload(),
		tscc({
			specFile: 'tscc.spec.json'
		}),
		typescript({
			tsconfig: 'tsconfig.json'
		}),
	],
	watch: {
		chokidar: true
	}
})

watcher.on('event', (e) => {
	const code = e.code
	if (e.code == 'END') {
		console.log('Build successful.')
	} else if (e.code == 'ERROR')
		console.log('Error description:')
		console.log(e)
	}
})
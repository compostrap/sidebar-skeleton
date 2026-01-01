import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	base: '',
	server: {
		fs: {
			allow: ['.', 'dist']
		}
	},
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		lib: {
			entry: path.resolve(__dirname, 'vite.build.js'),
			formats: ['es'],
			fileName: () => 'sidebar.js',
		},
		cssMinify: false,
		rollupOptions: {
			output: {
				assetFileNames: 'sidebar.[ext]',
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					quietDeps: true
				},
			},
		},
	},
})

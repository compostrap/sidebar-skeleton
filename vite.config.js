import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	base: '',
	server: {
		fs: {
			allow: ['.', 'dist']
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: [
					'import',
					'if-function',
					'global-builtin',
					'color-functions'
				]
			}
		}
	},
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		lib: {
			entry: {
				sidebar: path.resolve(__dirname, 'vite.build.js'),
				'theme-switcher': path.resolve(__dirname, 'src/theme-switcher.js')
			},
			formats: ['es']
		},
		cssMinify: false,
		rollupOptions: {
			output: {
				assetFileNames: 'sidebar.[ext]',
				entryFileNames: '[name].js'
			}
		}
	}
});

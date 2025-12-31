import path from 'path';

export default {
	publicDir: 'public',
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		rollupOptions: {
			output: {
				manualChunks: undefined,
				chunkFileNames: '[name].js',
				entryFileNames: '[name].js',
				assetFileNames: '[name].[ext]',
			},
			input: {
				sidebar: './vite.main.js',
			}
		}
	},
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			scss: { quietDeps: true },
		},
	}
};

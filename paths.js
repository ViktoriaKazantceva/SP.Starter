export default {
	build: {
		html: 'build',
		scripts: 'build/assets/js/',
		styles: 'build/assets/css/',
		images: 'build/assets/img/',
		fonts: 'build/assets/fonts/',
		sprites: 'build/assets/img/sprites/',
		svg: 'build/assets/svg/',
		videos: 'build/assets/video/',
	},
	src: {
		templates: './src/templates/',
		nunj: 'src/templates/pages/**/*.nunj',
		scripts: 'src/assets/js/index.js',
		styles: 'src/assets/styles/styles.scss',
		images: 'src/assets/img/**/*.*',
		imagesInline: 'src/assets/img/inline/',
		fonts: 'src/assets/fonts/**/*.*',
		sprites: 'src/assets/img/sprites/*.png',
		svg: 'src/assets/svg/**/*.svg',
		videos: 'src/assets/video/**/*.*',
	},
	watch: {
		nunj: ['src/templates/**/*.nunj', 'global-data.json'],
		scripts: 'src/assets/js/**/*.js',
		styles: 'src/assets/styles/**/*.scss',
		images: 'src/assets/img/**/*.*',
		fonts: 'src/assets/fonts/**/*.*',
		sprites: 'src/assets/img/sprites/*.png',
		svg: 'src/assets/svg/**/*.svg',
	},
	clean: 'build/',
};

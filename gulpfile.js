var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['styles']);

gulp.task('styles', function () {
	return gulp.src('./Stylesheets/Src/**/*.scss')
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(autoprefixer({
			browsers: ['> 1%', 'last 2 versions', 'ie >= 8'],
			cascade: false
		}))
		.pipe(gulp.dest('./Stylesheets/Build'));
});
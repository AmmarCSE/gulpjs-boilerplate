# gulpjs-boilerplate

Just a boilerplate I created with the following features:

* transpile es6 javascript using [gulp-babel](https://www.npmjs.com/package/gulp-babel)
* only process touched files using [gulp-cached](https://github.com/contra/gulp-cached)
* obfusticate javascript with [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) when building
* optional javascript linting with [gulp-eslint](https://github.com/adametry/gulp-eslint)
* add vendor prefixes to css rules with [autoprefixer](https://github.com/postcss/autoprefixer)
* prevent pipe breaks via errors with [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
* cache busting with [gulp-rev](https://github.com/sindresorhus/gulp-rev) to avoid stale cached files with new builds
* synchronised browser testing with [browsersync](https://www.browsersync.io/)
* minify `HTML` with [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin)
* file size feedback when building with [gulp-size](https://github.com/sindresorhus/gulp-size)

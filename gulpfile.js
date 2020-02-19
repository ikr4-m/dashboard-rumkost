const gulp = require('gulp')
const chalk = require('chalk')
const moment = require('moment')
const browserSync = require('browser-sync').create()
const uglifyCSS = require('uglifycss')
const uglifyJS = require('uglify-es')
const sass = require('sass')
const fs = require('fs')
const pkg = require('./package.json')
const notify = require('gulp-notify')
const beep = require('beepbeep')

const signature =
  `/**\n * ${pkg.author.project_name}\n * (C)-${moment().format('YYYY')} ${pkg.author.name} (${pkg.author.url})\n */\n`

/**
 * Tugas default gulp untuk hot reload ini.
 */
gulp.task('default', function () {
  browserSync.init({
    server: './public',
    port: 6969,
    online: false
  })

  // Cek file SASS
  gulp.watch('public/sass/**.scss').on('change', () => { compileSASS() })

  // Cek file JS
  gulp.watch('public/js').on('change', () => { compileJS() })

  // Cek file HTML
  gulp.watch('public/index.html').on('change', () => {
    browserSync.reload()
  })
})

/**
 * Menyederhanakan SASS menjadi CSS.
 */
function compileSASS () {
  const cssCode = []

  // Scan semua file dalam file sass
  fs.readdir('public/sass', (err, files) => {
    if (err) throw err
    const g = gulp.src('public/dist/main.min.css')

    // Handling apabila ada error
    try {
      files.forEach(file => {
        // Apabila ada file yang bukan berakhiran .scss, hiraukan
        if (!file.endsWith('.scss')) return undefined
        // Push bentuk render sass menjadi css ke dalam array
        cssCode.push(sass.renderSync({ file: `public/sass/${file}` }).css.toString())
      })

      // Buat file baru yang isinya CSS yang telah diuglify + tanda tangan pembuatannya
      fs.writeFileSync('public/dist/main.min.css', signature + uglifyCSS.processString(cssCode.join('\n')))

      // Stream CSSnya
      console.log(`[${chalk.green('SimpleReload')}] SCSS berhasil dicompile!`)
      browserSync.notify('SCSS compiled.')
      return g.pipe(browserSync.stream())
    } catch (error) {
      browserSync.notify(error.message, 5000)
      beep(5, 1000)
      return g.pipe(notify(error.message))
    }
  })
}

/**
 * Compile file JS jadi satu kesatuan
 */
function compileJS () {
  const jsCode = []

  fs.readdir('public/js', (err, files) => {
    if (err) throw err
    const g = gulp.src('public/dist/main.min.js')

    try {
      files.forEach(file => {
        // Apabila ada file yang bukan berakhiran .js, hiraukan
        if (!file.endsWith('.js')) return undefined
        // Push isi file JS ke dalam array
        jsCode.push(uglifyJS.minify(fs.readFileSync('public/js/' + file).toString()).code)
      })

      // Buat file baru yang isinya JS yang telah diuglify + tanda tangan pembuatannya
      fs.writeFileSync('public/dist/main.min.js', signature + uglifyJS.minify(jsCode.join(';')).code)

      // Stream JSnya
      console.log(`[${chalk.green('SimpleReload')}] JS berhasil dicompile!`)
      browserSync.notify('JS compiled.')
      return g.pipe(browserSync.stream())
    } catch (error) {
      browserSync.notify(error.message, 5000)
      beep(5, 1000)
      return g.pipe(notify(error.message))
    }
  })
}

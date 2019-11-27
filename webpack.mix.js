let mix = require('laravel-mix');

mix
.setResourceRoot('../')
.setPublicPath('dist')
.sourceMaps()

if(mix.inProduction()) {
  mix.js(
    'src/console-tags.js',
    'js/console-tags.min.js'
  )
} else {
  mix.js(
    'src/console-tags.js',
    'js/console-tags.js'
  )
}

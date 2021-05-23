const mix = require('laravel-mix');

mix.js('scripts.js', 'dist')
  .react()
  .sass('style.scss', './')
  .setPublicPath('dist');

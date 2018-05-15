const fs = require('fs');
const { task, src, dest, series } = require('gulp');
const realFavicon = require('gulp-real-favicon');
const paths = require('../../paths.config');

// File where the favicon markups are stored
const { FAVICON_DATA_FILE } = paths.favicon;

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
task('generate-favicon', done =>
  realFavicon.generateFavicon(
    {
      masterPicture: paths.favicon.masterPicture,
      dest: paths.favicon.dest,
      iconsPath: 'img/favicon',
      design: {
        ios: {
          pictureAspect: 'noChange',
          assets: {
            ios6AndPriorIcons: false,
            ios7AndLaterIcons: false,
            precomposedIcons: false,
            declareOnlyDefaultIcon: true,
          },
        },
        desktopBrowser: {},
        windows: {
          pictureAspect: 'noChange',
          backgroundColor: '#da532c',
          onConflict: 'override',
          assets: {
            windows80Ie10Tile: false,
            windows10Ie11EdgeTiles: {
              small: false,
              medium: true,
              big: false,
              rectangle: false,
            },
          },
        },
        androidChrome: {
          pictureAspect: 'noChange',
          themeColor: '#ffffff',
          manifest: {
            name: 'mg901',
            display: 'standalone',
            orientation: 'notSet',
            onConflict: 'override',
            declared: true,
          },
          assets: {
            legacyIcon: false,
            lowResolutionIcons: false,
          },
        },
      },
      settings: {
        scalingAlgorithm: 'Mitchell',
        errorOnImageTooSmall: false,
      },
      markupFile: FAVICON_DATA_FILE,
    },
    () => {
      done();
    },
  ),
);

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
task('inject-favicon-markups', () =>
  src(paths.dist.html)
    .pipe(
      realFavicon.injectFaviconMarkups(
        JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code,
      ),
    )
    .pipe(dest(paths.root.dist)),
);

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
task('check-for-favicon-update', () => {
  const currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;

  return realFavicon.checkForUpdates(currentVersion, err => {
    if (err) throw err;
  });
});

task('favicon', series('generate-favicon', 'inject-favicon-markups'));

const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/project-angular/runtime.js',
    './dist/project-angular/polyfills.js',
    './dist/project-angular/main.js'
  ];

  await fs.ensureDir('elements');

  await concat(files, 'elements/project-angular.js');

  await fs.copyFile(
    './dist/project-angular/styles.css',
    'elements/styles.css'
  );

  await fs.copy(
    './dist/project-angular/assets/img',
    'elements/assets/img'
  );

})();

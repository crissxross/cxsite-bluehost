'use strict';

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'web-animations-js': 'vendor/web-animations-js/web-animations.min.js',
  '@angular2-material': 'vendor/@angular2-material'
};

/** User packages configuration. */
const packages: any = {
  'web-animations-js': {
    format: 'cjs'
  },
  '@angular2-material/core': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'core.js'
  },
  '@angular2-material/button': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'button.js'
  },
  '@angular2-material/card': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'card.js'
  },
  '@angular2-material/list': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'list.js'
  },
  '@angular2-material/sidenav': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'sidenav.js'
  },
  '@angular2-material/toolbar': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'toolbar.js'
  },
  '@angular2-material/icon': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'icon.js'
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/showcase',
  'app/about',
  'app/showcase/showcase-detail',
  'app/showcase/featured-works',
  'app/showcase/list-works',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });

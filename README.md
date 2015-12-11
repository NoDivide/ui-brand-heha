<img src="http://www.holidayextras.co.uk/images/heha/heha-logo.png" height="100">

# UI Toolkit Theme for HEHA

A set of HEHA! specific [less](http://lesscss.org/) variables to overbrand  [Bootstrap](http://getbootstrap.com) and the [UI-Toolkit](http://ui-toolkit.com), complete with any brand specific additions and overrides.

## Using the theme in your application

Install Bootstrap, UI Toolkit & this theme

```bash
npm install --save bootstrap holidayextras/ui-toolkit holidayextras/ui-theme-heha
```

Import files into one application `.less` file & compile

```less
@import 'path/to/node_modules/bootstrap/less/bootstrap.less';
@import 'path/to/node_modules/ui-toolkit/src/less/toolkit.less';
@import 'path/to/src/theme/theme’;

// Project specific files
@import 'path/to/your/styles’
```

## Contributing to the theme

### Requirements:

* [Node.js](http://nodejs.org/)

### Installation

```bash
git clone git@github.com:holidayextras/ui-brand-heha.git
cd heha.loc
npm install
```

### Workflow

To [compile](https://github.com/less/less-docs/blob/master/content/usage/command-line-usage.md), [watch](https://github.com/caseywebdev/watchy#readme) and [livereload](https://www.npmjs.com/package/livereload) the `less` and serve the `heha/` directory on [http://localhost:3000](http://localhost:3000), run the following
```bash
npm start
```

The above is broken down into the following commands:

Compile `heha/theme.less` to `heha/theme.css`
```bash
npm run heha:less
```

Serve `heha/` on [http://localhost:3000](http://localhost:3000)
```bash
npm run heha:serve
```

Watch for changes in `src/` and `heha/theme.less` & recompile
```bash
npm run heha:watch
```

Monitor files for changes and reload your web browser with [livereload](https://www.npmjs.com/package/livereload)
```bash
npm run heha:livereload
```

### Additional Tools

Optionally, [Gulp](http://gulpjs.com) is included with this theme, along with a `gulpfile.js`. This file provides some additional functionality during development namely:

* Compiling Less files
* Combining third-party JavaScript file dependencies
* Watching for any file changes: .html, .php, .css, .js, .less
* Livereload through Browser Sync

To take advantage of Gulp simple run:

    gulp

[Bower](http://bower.io) is also included to handle front-end package dependencies. Currently limited to javascript dependencies for this theme.

To include a new package run:

    bower install name-of-package --save-dev

Bower packages are downloaded into `/src/vendor`. To include the package in the theme, edit the `gulpfile.js`, locate the `jsDependencies` array and add the path to the file e.g.:

    var jsDependencies = [
        paths.vendor + ‘/jquery/dist/jquery.min.js’,
        paths.vendor + ‘/jquery.fitvids/jquery.fitvids.js’
    ];

Finally run:

    gulp run

Gulp combines all the javascript dependencies into a single file in the theme folder: `assets/js/vendor.js`

Contact [Ryan taylor](ryan@nodividestudio.com) for any queries about the Gulp setup for this theme.



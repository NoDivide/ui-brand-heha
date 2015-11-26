<img src="http://www.holidayextras.co.uk/images/heha/heha-logo.png" height="100">

# UI Toolkit Theme for HEHA

A set of HEHA! specific [less](http://lesscss.org/) variables to overbrand  [Bootstrap](http://getbootstrap.com) and the [UI-Toolkit](http://ui-toolkit.com) , complete with any brand specific additions and overrides.

## Using the theme in your application

Install Bootstrap, UI Toolkit & this theme
```bash
npm install --save bootstrap holidayextras/ui-toolkit holidayextras/ui-theme-heha
```

Import files into one application `.less` file & compile
```less
@import 'path/to/node_modules/bootstrap/less/bootstrap.less';
@import 'path/to/node_modules/ui-toolkit/src/less/toolkit.less';
@import 'path/to/node_modules/ui-brand-heha/theme/theme.less';

// Project specific files
@import 'path/to/your/application.less'
```

## Contributing to the theme

### Requirements:

* [Node.js](http://nodejs.org/)

### Installation

```bash
git clone git@github.com:holidayextras/ui-brand-heha.git
cd ui-brand-heha
npm install
```

### Workflow

To [compile](https://github.com/less/less-docs/blob/master/content/usage/command-line-usage.md), [watch](https://github.com/caseywebdev/watchy#readme) and [livereload](https://www.npmjs.com/package/livereload) the `less` and serve the `example/` directory on [http://localhost:3000](http://localhost:3000), run the following
```bash
npm run example
```

The above is broken down into the following commands:

Compile `example/theme.less` to `example/theme.css`
```bash
npm run example:less
```

Serve `example/` on [http://localhost:3000](http://localhost:3000)
```bash
npm run example:serve
```

Watch for changes in `src/` and `example/theme.less` & recompile
```bash
npm run example:watch
```

Monitor files for changes and reload your web browser with [livereload]([livereload](https://www.npmjs.com/package/livereload)
```bash
npm run example:livereload
```

<img src="http://www.holidayextras.co.uk/images/heha/heha-logo.png" height="100">

UI Toolkit Theme for HEHA
---

Requirements:
---

* [Node.js v10+](http://nodejs.org/) ( For Application Development )


Install:
---

To develop this theme:

```bash
cd /path/to/themes
git clone git@github.com:holidayextras/ui-brand-heha.git
cd ui-brand-heha
npm install
```

To watch for `ui-brand-heha` changes and automatically rebuild while developing:

```bash
cd /path/to/themes/ui-brand-heha
grunt watch
```

Configure AWS Settings:
---

Once you have this theme installed, you will need to update the `aws.json` file with your AWS credentials and settings you wish applied for this theme.  The `aws.json` file is not included in the git repo and is cloned from `aws.json.dist` upon installation.

Grunt Terminal Commands:
---

#### Build for Distribution:

The following command will compile Less Styles into a CSS files for Distribution.

This command is run automatically if you are using `grunt watch`

```bash
grunt build
```

#### Create a Major Release:

The following will:

1. Increase the build's major number ( e.g. v __1__.2.3 => v __2__.0.0 )
2. Build & Package Distribution Files
3. Create Tag Branch & Perform a git commit
4. Push `dist` files to AWS S3 bucket listed in `aws.json`

```bash
grunt release-major
```

#### Create a Minor Release:

The following will:

1. Increase the build's minor number ( e.g. v 1.__2__.3 => v 1.__3__.0 )
2. Build & Package Distribution Files
3. Create Tag Branch & Perform a git commit
4. Push `dist` files to AWS S3 bucket listed in `aws.json`

```bash
grunt release-minor
```

#### Create a Release Patch:

The following will:

1. Increase the build's patch number ( e.g. v 1.2.__3__ => v 1.2.__4__ )
2. Build & Package Distribution Files
3. Create Tag Branch & Perform a git commit
4. Push `dist` files to AWS S3 bucket listed in `aws.json`

```bash
grunt release-patch
```

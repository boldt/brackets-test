# Setup

Run `npm install` to install the dependencies from the `package.json`.

# Jslint configuration

* `.brackets.json` configures JSLint for Brackets
* `jslint.json` configures JSLint for `grunt jslint`.

Both json-files should be same configured.

# Use Brackets

Import project in Brackets and open `Gruntfile.js` and `js/test.js`; no errors are shown.

# Use grunt

Call `grunt` in the root of the project. The following tasks are executed by default:

* `grunt jslint`
* `grunt jshint`
* `grunt jscs`

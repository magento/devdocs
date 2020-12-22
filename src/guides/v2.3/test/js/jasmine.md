---
group: testing
title: JavaScript unit testing with Jasmine
functional_areas:
  - Testing
  - test
---

Magento uses a custom [Grunt] task named `spec` to run Jasmine tests. The task collects the tests from `<magento_root_dir>dev/tests/js/jasmine/tests` and can be run for all tests, a theme, or a single test.

## Prepare environment

**Step 1.** [Install Node.js].

**Step 2.** [Install grunt-cli].

**Step 3.** In `<magento_root_dir>`, create `Gruntfile.js` and copy `Gruntfile.js.sample` into it.

**Step 4.** In `<magento_root_dir>`, create `package.json` and copy `package.json.sample` into it.

**Step 5.** In `<magento_root_dir>`, install all dependencies:

```bash
npm install
```

**Step 6.** In `<magento_root_dir>`, generate static view files in Magento that are going to be tested
{:#prepare-step6}

```bash
bin/magento setup:static-content:deploy -f
```

Note that normally you don't have permissions to `<magento_root_dir>/app/code/`, in fact the generated static view file is being tested.

{% include note.html
type="tip"
content="**For CentOS and Ubuntu users**<br/>
If the command fails with the error message:

```terminal
/var/www/html/magento2ce/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs: error while loading shared libraries: libfontconfig.so.1: cannot open shared object file: No such file or directory
```

Install [fontconfig library]:<br/>

*  CentOS:

   ```bash
   yum install fontconfig
   ```

*  Ubuntu:

   ```bash
   apt-get install fontconfig
   ```

"
%}

Learn more in [Deploy static view files].

## Run tests

`Gruntfile.js` contains the test run task, so you can run **all tests** using the following command in the Magento root directory:

```bash
grunt spec:<THEME>
```

Example:

```bash
grunt spec:backend
```

You can also run a single test:

```bash
grunt spec:backend --file="/path/to/the/test.js"
```

## Write a test {#write-test}

All tests are distributed through modules stored in `<magento_root_dir>/dev/tests/js/jasmine/tests`. Let's see how to write a test using an example of an existing test:

[`app/code/Magento/Ui/base/js/grid/columns/actions.test.js`]

which tests a JS module:

[`<magento_root_dir>/app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js`]

in its static representations generated in [Step 6] previously:

`<magento_root_dir>/pub/static/<area>/<theme>/<localisation>/Magento_Ui/js/columns/actions.js`.

### Step 1. Create a new file with name `<fileName>.test.js` in an appropriate module directory.

For convenience, we can reflect the directory structure of a file to test.

A path to JS [module](https://glossary.magento.com/module) that we want to cover with tests: `app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js`

A path to a test of the module: `app/code/Magento/Ui/base/js/grid/columns/actions.test.js`

In `<magento_root_dir>/dev/tests/js/jasmine/tests` create the test with appropriate path.

### Step 2. Require a file that you want to test.

For our example we need to cover all static view files ending with `Magento_Ui/js/grid/columns/actions`.

```js
define([
    'Magento_Ui/js/grid/columns/actions'
], function (Actions) {
    'use strict';

    //Test code
    //...
});
```

### Step 3. Write your Jasmine test code.

A Jasmine test consists of main two parts:

*  `describe` blocks
*  `it` blocks

Both the `describe` and `it` functions contains two parameters:

*  a text string with description of what is going to be done
*  a function with block of code implementing described action

In `describe` you can use `beforeEach` and `afterEach` functions performing a preparation of what must be done before and after every `it` test followed.

{% collapsible See the full code of the test%}

```js
define([
    'underscore',
    'Magento_Ui/js/grid/columns/actions'
], function (_, Actions) {
    'use strict';

    describe('ui/js/grid/columns/actions', function () {
        var model,
            action;

        beforeEach(function () {
            model = new Actions({
                index: 'actions',
                name: 'listing_action',
                indexField: 'id',
                dataScope: '',
                rows: [{
                    identifier: 'row'
                }]
            });
            action = {
                index: 'delete',
                hidden: true,
                rowIndex: 0,
                callback: function() {
                    return true;
                }
            };
        });

        it('Check addAction function', function () {
            expect(model.addAction('delete', action)).toBe(model);
        });

        it('Check getAction function', function () {
            var someAction = _.clone(action);

            someAction.index = 'edit';
            model.addAction('edit', someAction);
            expect(model.getAction(0, 'edit')).toEqual(someAction);
        });

        it('Check getVisibleActions function', function () {
            var someAction = _.clone(action);

            someAction.hidden = false;
            someAction.index= 'view';
            model.addAction('delete', action);
            model.addAction('view', someAction);
            expect(model.getVisibleActions('0')).toEqual([someAction]);
        });

        it('Check updateActions function', function () {
            expect(model.updateActions()).toEqual(model);
        });

        it('Check applyAction function', function () {
            model.addAction('delete', action);
            expect(model.applyAction('delete', 0)).toEqual(model);
        });

        it('Check isSingle and isMultiple function', function () {
            var someAction = _.clone(action);

            action.hidden = false;
            model.addAction('delete', action);
            expect(model.isSingle(0)).toBeTruthy();
            someAction.hidden = false;
            someAction.index = 'edit';
            model.addAction('edit', someAction);
            expect(model.isSingle(0)).toBeFalsy();
            expect(model.isMultiple(0)).toBeTruthy();
        });

        it('Check isActionVisible function', function () {
            expect(model.isActionVisible(action)).toBeFalsy();
            action.hidden = false;
            expect(model.isActionVisible(action)).toBeTruthy();
        });
    });
});
```

{% endcollapsible %}

This topic doesn't provide Jasmine test writing methodology.

[Learn more about testing with Jasmine.]

## Known issues and solutions

### Error: Cannot find module '&lt;module&gt;' {#cannot-find-module-error}

#### Issue:

An error message appears:

```terminal
Loading "Gruntfile.js" tasks...ERROR

>> Error: Cannot find module '<module>'

Warning: Task "spec" not found. Use --force to continue.
```

#### Solution:

1. Make sure your Node.js version is up-to-date.
1. Remove `package.json`, `Gruntfile.js`.
1. Copy `package.json`, `Gruntfile.js` from `package.json.sample`, `Gruntfile.js.sample`.
1. Delete the `node_modules` directory.
1. Run `npm install` in your terminal.

### Warning: Cannot read property 'pid' of undefined {#cannot-read-property-pid-warning}

#### Issue:

An error message appears:

```terminal
Warning: Cannot read property 'pid' of undefined

Use --force to continue. Aborted due to warnings.
```

#### Solution:

Run in your terminal:

```bash
cd <magento_root>/node_modules/grunt-contrib-jasmine
```

```bash
npm install
```

<!-- LINK DEFINITIONS -->

<!-- External -->
[`<magento_root_dir>/app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js
{:target="_blank"}
[`app/code/Magento/Ui/base/js/grid/columns/actions.test.js`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/dev/tests/js/jasmine/tests/app/code/Magento/Ui/base/js/grid/columns/actions.test.js
{:target="_blank"}
[Deploy static view files]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html
{:target="_blank"}
[fontconfig library]: https://www.freedesktop.org/wiki/Software/fontconfig/
{:target="_blank"}
[Grunt]: http://gruntjs.com/
{:target="_blank"}
[Install grunt-cli]: http://gruntjs.com/getting-started
{:target="_blank"}
[Install Node.js]: https://nodejs.org/en/
{:target="_blank"}
[Learn more about testing with Jasmine.]: https://jasmine.github.io/edge/introduction.html
{:target="_blank"}

<!-- Internal -->
[Step 6]: #prepare-step6

<!-- Abbreviations -->

*[FTF]: Functional Testing Framework

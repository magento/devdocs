---
layout: default
group: jstf
subgroup: Jasmine
title: JavaScript unit testing with Jasmine
menu_title: Jasmine
menu_node: parent
menu_order:
version: 2.2
github_link: test/js/test_js-unit.md
redirect_from: /guides/v1.0/extension-dev-guide/test/test_js-unit.html
---

#### Contents

* TOC
{:toc}

## Preface

Magento uses a custom [Grunt] task named `spec` to run Jasmine tests. The task collects the tests from `<magento_root_dir>dev/tests/js/jasmine/tests` and can be run for all tests, a theme, or a single test.

## Prepare environment

**Step 1.** [Install Node.js].

**Step 2.** [Install grunt-cli].

**Step 3.** In `<magento_root_dir>`, create `Gruntfile.js` and copy `Gruntfile.js.sample` into it.

**Step 4.** In `<magento_root_dir>`, create `package.json` and copy `package.json.sample` into it.

**Step 5.** In `<magento_root_dir>`, install all dependencies:

    $ npm install
    
**Step 6.** In `<magento_root_dir>`, generate static view files in Magento that are going to be tested
{:#prepare-step6}

    $ php -f bin/magento setup:static-content:deploy -f
    
Note that normally you don't have permissions to `<magento_root_dir>/app/code/`, in fact the generated static view file is being tested.
    
Learn more in [Deploy static view files].

## Run tests

`Gruntfile.js` contains the test run task, so you can run **all tests** using the following command in in the Magento root directory:

    $ grunt spec

You can run a **single test** adding an optional parameter:

    $ grunt spec --file=<path_to_test>
    
  Example:

    $ grunt spec --file="dev/tests/js/jasmine/tests/app/code/Magento/Ui/base/js/core/layout.test.js"
    
If you want to run **tests for a theme**, enter: 

    $ grunt spec:<THEME>
    
  Example:

    $ grunt spec:backend

## Write a test {#write-test}

All tests are distributed through modules stored in `<magento_root_dir>/dev/tests/js/jasmine/tests`. Let's see how to write a test using an example of an existing test:

[`app/code/Magento/Ui/base/js/grid/columns/actions.test.js`]{:target="_blank"}
 
which tests a JS module:

[`<magento_root_dir>/app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js`]{:target="_blank"}
 
in its static representations generated in [Step 6] previously

`<magento_root_dir>/pub/static/<area>/<theme>/<localisation>/Magento_Ui/js/columns/actions.js`.

### Step 1. Create a new file with name `<fileName>.test.js` in an appropriate module directory.

For convenience, we can reflect the directory structure of a file to test.

A path to JS module that we want to cover with tests: `app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js`

A path to a test of the module: `app/code/Magento/Ui/base/js/grid/columns/actions.test.js`

In `<magento_root_dir>/dev/tests/js/jasmine/tests` create the test with appropriate path.

### Step 2. Require a file that you want to test.

For our example we need to cover all static view files ending with `Magento_Ui/js/grid/columns/actions`.

{% highlight js %}
define([
    'Magento_Ui/js/grid/columns/actions'
], function (Actions) {
    'use strict';
 
    //Test code
    //...
});
{% endhighlight %}

### Step 3. Write your Jasmine test code.

A Jasmine test consists of main two parts:
 
- `describe` blocks
- `it` blocks

Both the `describe` and `it` functions contains two parameters:
 
 - a text string with description of what is going to be done
 - a function with block of code implementing described action
  
In `describe` you can use `beforeEach` and `afterEach` functions performing a preparation of what must be done before and after every `it` test followed.

{% collapsible See the full code of the test%}

{% highlight js %}
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

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
{% endhighlight %}

{% endcollapsible %}

This topic doesn't provide Jasmine test writing methodology.

[Learn more about testing with Jasmine.]

<!-- LINK DEFINITIONS -->

<!-- External -->
[`app/code/Magento/Ui/base/js/grid/columns/actions.test.js`]: https://github.com/magento/magento2/blob/53f18a0efc86c58b8e47a6b114f5db6746fc154c/dev/tests/js/jasmine/tests/app/code/Magento/Ui/base/js/grid/columns/actions.test.js
[`<magento_root_dir>/app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js`]: https://github.com/magento/magento2/blob/53f18a0efc86c58b8e47a6b114f5db6746fc154c/app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js

[Deploy static view files]: {{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html#config-cli-subcommands-xlate-dict
[Grunt]: http://gruntjs.com/
[Install grunt-cli]: http://gruntjs.com/getting-started
[Install Node.js]: https://nodejs.org/en/
[Learn more about testing with Jasmine.]: https://jasmine.github.io/edge/introduction.html

<!-- Internal -->
[Step 6]: #prepare-step6


<!-- Abbreviations -->

*[FTF]: Functional Testing Framework


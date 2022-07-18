---
group: javascript-developer-guide
title: JavaScript Developer Guide
landing-page: JavaScript Developer Guide
---

## Introduction {#overview-introduction}

By default, the Magento application uses the [RequireJS file and module loader] to optimize the time of loading pages with included JavaScript files, and to manage dependencies of JavaScript resources.

For information about how JS resources are located and configured, see the [JavaScript resources] topic in the Configuration Guide.

## What's in this guide {#js_contents}

Topics of this book describe the following:

-  [JavaScript initialization] - how to initialize JavaScript components and widgets in JavaScript files and `.phtml` templates
-  [Use custom JavaScript] - how to extend or replace default JavaScript components/widgets.
-  [Locate JavaScript] components - how to define which components (scripts) are used on a particular store page.
-  [Magento jQuery widgets] - Magento jQuery widget API documentation.
-  [Customizing JavaScript illustration] - practical illustration of custom widgets related tasks.

JavaScript automatic testing is described in a separate [JavaScript unit testing] topic.

## Terms used {#js_terms}

| Term                                  | Description                                        |
| ------------------------------------- |--------------------------------------------------- |
| *JavaScript component (JS component)* | Any separate `.js` file decorated as [AMD module]. |
| *Ui component*                        | JS component located in the `Magento_Ui` module, in the [app/code/Magento/Ui/view] directory, or JS component that extends files from this module. |
| *jQuery UI widget*                    | A JS component/widget provided by the [jQuery UI library used in Magento]. |
| *jQuery widget*                       | Custom widget created using jQuery UI Widget Factory and decorated as AMD module. Many Magento JS components are the jQuery widgets. |

[AMD module]: http://requirejs.org/docs/whyamd.html#amd
[`Magento_Ui`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui
[app/code/Magento/Ui/view]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view
[jQuery UI library used in Magento]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/jquery/jquery-ui-1.9.2.js
[jQuery Widget]: https://jqueryui.com/widget/

[RequireJS file and module loader]: http://requirejs.org/
[JavaScript resources]: {{page.baseurl}}/javascript-dev-guide/javascript/js-resources.html

[JavaScript initialization]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
[Use custom JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/custom_js.html
[Locate JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js_debug.html
[Magento jQuery widgets]: {{page.baseurl}}/javascript-dev-guide/widgets/jquery-widgets-about.html
[Customizing JavaScript illustration]: {{page.baseurl}}/javascript-dev-guide/javascript/js_practice.html
[JavaScript unit testing]: {{page.baseurl}}/test/js/jasmine.html

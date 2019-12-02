---
group: javascript-developer-guide
subgroup: 1_Javascript
title: JavaScript
---

By default, the Magento application uses the [RequireJS file and module loader] to optimize the time of loading pages with included JavaScript files, and to manage dependencies of JavaScript resources.

You can follow the same approach when customizing Magento JavaScript, or [disable all the default scripts and their load by RequireJS].

For information about how JS resources are located and configured, see [Configure JavaScript].

## What's in this chapter {#js_contents}

Topics of this chapter describe the following:

-  [JavaScript initialization]({{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html): how to initialize JavaScript components and widgets in JavaScript files and `.phtml` templates
-  [Use custom JavaScript]({{ page.baseurl }}/javascript-dev-guide/javascript/custom_js.html): how to extend or replace default JavaScript components/widgets.
-  [Locate JavaScript]({{ page.baseurl }}/javascript-dev-guide/javascript/js_debug.html) components: how to define which components (scripts) are used on a particular store page.
-  [Magento jQuery widgets]({{ page.baseurl }}/javascript-dev-guide/widgets/jquery-widgets-about.html): Magento [jQuery](https://glossary.magento.com/jquery) [widget](https://glossary.magento.com/widget) [API](https://glossary.magento.com/api) documentation.
-  [Customizing JavaScript illustration]({{ page.baseurl }}/javascript-dev-guide/javascript/js_practice.html): practical illustration of custom widgets related tasks.

## Terms used {#js_terms}

| Term                                  | Description                                        |
| ------------------------------------- |--------------------------------------------------- |
| *JavaScript component (JS component)* | Any separate `.js` file decorated as [AMD module]. |
| *Ui component*                        | JS component located in the `Magento_Ui` module, in the [app/code/Magento/Ui/view] directory. |
| *jQuery UI widget*                    | A JS component/widget provided by [jQuery UI library used in Magento]. |
| *jQuery widget*                       | Custom widget created using jQuery UI Widget Factory and decorated as AMD module. Many Magento JS components are jQuery widget. |

[RequireJS file and module loader]: http://requirejs.org/
[disable all the default scripts and their load by RequireJS]: {{page.baseurl}}/javascript-dev-guide/javascript/custom_js.html#disable_default_js
[Configure JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js-resources.html
[AMD module]: http://requirejs.org/docs/whyamd.html#amd
[app/code/Magento/Ui/view]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view
[jQuery UI library used in Magento]: {{ site.mage2bloburl }}/{{page.guide_version}}/lib/web/jquery/jquery-ui-1.9.2.js
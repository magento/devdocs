---
group: javascript-developer-guide
title: JavaScript Developer Guide
landing-page: JavaScript Developer Guide
menu_title: Introduction
menu_order: 1
---

## Introduction   {#overview-introduction}

By default, the Magento application uses the <a href="http://requirejs.org/" target="_blank">RequireJS file and module loader</a> to optimize the time of loading pages with included {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} files, and to manage dependencies of JavaScript resources.

You can follow the same approach when customizing Magento JavaScript, or <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/custom_js.html#disable_default_js" target="_blank">disable all the default scripts and their load by RequireJS</a>.

For information about how JS resources are located and configured, see the <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/js-resources.html" target="_blank">JavaScript resources</a> topic in the Configuration Guide.

## What\'s in this guide   {##js_contents}

Topics of this book describe the following:

- [JavaScript initialization]({{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html): how to initialize JavaScript components and widgets in JavaScript files and `.phtml` templates
- [Use custom JavaScript]({{ page.baseurl }}/javascript-dev-guide/javascript/custom_js.html): how to extend or replace default JavaScript components/widgets.
- [Locate JavaScript]({{ page.baseurl }}/javascript-dev-guide/javascript/js_debug.html) components: how to define which components (scripts) are used on a particular store page.
- [Magento jQuery widgets]({{ page.baseurl }}/javascript-dev-guide/widgets/jquery-widgets-about.html): Magento {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} documentation.
- [Customizing JavaScript illustration]({{ page.baseurl }}/javascript-dev-guide/javascript/js_practice.html): practical illustration of custom widgets related tasks.

JavaScript automatic testing is described in a separate [JavaScript unit testing]({{ page.baseurl }}/test/js/jasmine.html) topic.

## Terms used   {#js_terms}

<table>
<tr>
<th>
Term
</th>
<th>
Description
</th>
</tr>
<tr>
<td>
<i>JavaScript component (JS component)</i>
</td>
<td>
Any separate <code>.js</code> file decorated as <a href="http://requirejs.org/docs/whyamd.html#amd" target="_blank">AMD module</a>.
</td>
</tr>

<tr>
<td>
<i>Ui component</i>
</td>
<td>
JS component located in the <code>Magento_Ui</code> module, in the <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view" target="_blank">app/code/Magento/Ui/view</a> directory.
</td>
</tr>

<tr>
<td>
<i>jQuery UI widget</i>
</td>
<td>
A JS component/widget provided by <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/jquery/jquery-ui-1.9.2.js" target="_blank">jQuery UI library used in Magento</a>.
</td>
</tr>
<tr>
<td>
<i>jQuery widget</i>
</td>
<td>
Custom widget created using jQuery UI Widget Factory and decorated as AMD {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %}. Many Magento JS components are jQuery widget.
</td>
</tr>
</table>


---
layout: default
group: fedg
subgroup: Javascript
title: Javascript
menu_title: Javascript
menu_order: 1
menu_node: parent
github_link: frontend-dev-guide/javascript/js_overview.md
---

By default, the Magento application uses the <a href="{{site.gdeurl}}http://requirejs.org/" target="_blank">RequireJS file and module loader</a> to optimize the time of loading pages with included JavaScript files, and to manage dependencies beetwen JavaScript resources.

<p class="q">Do we need to mention something about JS scripts being AMD modules?</p>

You can follow the same approach when customizing Magento Javacsript, or <a href="{{site.gdeurl}}frontend-dev-guide/javascript/custom_js.html#disable_default_js" target="_blank">disable all the default scripts and loading them using RequireJS</a>.

For information about how JS resources are located and confgiured, see the <a href="{{site.gdeurl}}/config-guide/config/js-resources.html" target="_blank"> JavaScript resources</a> topic in the Configuration Guide.

<h2 id="#js_contents">What's in this chapter</h2>
Topics of this chapter describe the following:

- [JavaScript initialization]({{site.gdeurl}}frontend-dev-guide/javascript/js_init.html): how to initialize JS componetns and widgets in JS files and `.phtml` templates
- [Use custom JavaScript]({{site.gdeurl}}frontend-dev-guide/javascript/custom_js.html): how to extend or replace default JS components/widgets.
- [Locate JavaScript]({{site.gdeurl}}frontend-dev-guide/javascript/js_debug.html) components: how to define which components (scripts) are used on a particular store page.
- [Magento jQuery widgets]({{site.gdeurl}}frontend-dev-guide/javascript/jquery-widgets-about.html): API documentation for jQuery widgets used in Magento.
- Custom components and widgets: practical illustration of custom widgets related tasks.



<h2 id="js_terms">Terms used</h2>

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
<i>jQuery UI widget</i>
</td>
<td>
A JS component/widget provided by <a href="" target="_blank">jQuery UI bundle.
<p class="q">Do we mean default jQuery UI widgets?</p>
</td>
</tr>
<tr>
<td>
<i>jQuery widget</i>
</td>
<td>
Custom widget created using jQuery UI Widget Factory and decorated as AMD module. Many Magento JS components are jQuery widget.
</td>
</tr>
</table>


---
layout: default
group: fedg
subgroup: D_CSS_G
title: Simple ways to customize a theme's styles
menu_title: Simple ways to customize a theme's styles
menu_order: 1
github_link: frontend-dev-guide/css-guide/css_quick_guide_overview.md
---
<h2>Overview</h2>
Let's say you created a new theme inheriting from Magento Blank or Luma, and chose the compilation mode. What's next? Where to add the style changes? This topic gives the quick answers.
<p class="q">Add TOC</p>

<h2>Simple ways to customize a theme, which inherits from the Magento out of the box themes</h2>

<h3>Simplest way to extend parent styles</h3> 

To extend the parent theme's styles in your theme:
<ol>
<li>In your theme directory, create a `web/css/source` sub-directory. </li>
<li>Create a <code>_extend.less</code> file here. The path to it looks like following: 

<pre>
app/design/frontend/&lt;Vendor&gt;/
├──&nbsp;&lt;theme&gt;/
│&nbsp;&nbsp;&nbsp;├──&nbsp;web/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;css/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;source/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──_extend.less
...
</pre>
</li>
<li>Add your LESS code in this file.</li>
</ol>

Extending a theme using `_extend.less` is the simplest option when you are happy with everything the parent theme has, but want to add more styles.

<h3> Simplest way to override parent styles (that is, override default Magento UI library variables)</h3>

<ol>
<li>In your theme directory, create a `web/css/source` sub-directory. </li>
<li>Create a `_theme.less` file here. The path to it looks like following: 

<pre>
app/design/frontend/&lt;Vendor&gt;/
├──&nbsp;&lt;theme&gt;/
│&nbsp;&nbsp;&nbsp;├──&nbsp;web/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;css/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;source/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──_theme.less
...
</pre>
</li>

It is important to remember, that it overrides the parent <code>_theme.less</code>. 

<li>Copy all variables you need from the parent <code>_theme.less</code>, including those which will not be changed. If your theme inherits from Blank, the <code>_theme.less</code> you should copy from is located at <code>app/design/frontend/Magento/balnk/web/css/source/_theme.less</code></li>
<li>Make the necessary changes.</li>
</ol>

The drawback of this approach is that you will need to monitor and manually update your files in case the parent's `_theme.less` is updated.

<h3>Adding structured changes</h3>

To make your changes easier to read and support, structure them by adding a separate overriding or extending `.less` files for each <a href="{{site.gdeurl}}frontend-dev-guide/css-topics/theme-ui-lib.html#library_elements" target="_blank">Magento UI library component</a> you change. Let's use the `button` component implemented in `_button.less` as an illustration.

<h4>Extend component's styles</h4>
<ol>
<li>In your theme directory, create a `web/css/source` sub-directory. </li>
<li>Add <code>_buttons_extend.less</code> and <code>_extend.less</code> here. The path to the files looks like following: 

<pre>
app/design/frontend/&lt;Vendor&gt;/
├──&nbsp;&lt;theme&gt;/
│&nbsp;&nbsp;&nbsp;├──&nbsp;web/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;css/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;source/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──_buttons_extend.less
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──_extend.less
...
</pre>
</li>
<li>In <code>_buttons_extend.less</code> add your styles for the button component.</li>
<li>
In <code>_extend.less</code> register the <code>_buttons_extend.less</code> by adding the following code: 
<pre>
@import '_buttons_extend.less'; 
</pre>
</li>
</ol>

<h4>Override component's styles</h4>
To extend the parent theme's styles in your theme:
<ol>
<li>In your theme directory, create a <code>web/css/source</code> sub-directory. </li>
<li>Create a <code>_extend.less</code> file here. The path to it looks like following: 

<pre>
app/design/frontend/&lt;Vendor&gt;/
├──&nbsp;&lt;theme&gt;/
│&nbsp;&nbsp;&nbsp;├──&nbsp;web/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;css/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;source/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──_buttons.less
...
</pre>
This file overrides the <code>_buttons.less</code> of the parent theme.
</li>

<li>Add your styles for the button component. If the file is left blank, then no styles are applied for the component.</li>
</ol>



---
group: fedg
subgroup: D_CSS_G
title: Simple ways to customize a theme's styles
menu_title: Simple ways to customize a theme's styles
menu_order: 1
functional_areas:
  - Frontend
---
## What's in this topic

Let's say you created a new {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} inheriting from Magento Blank or Luma, and chose the <a href="{{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_mode.html">LESS compilation mode</a>. What's next? Where to add the style changes? This topic gives quick answers.

## Simplest way to extend parent styles   {#simple_extend}

To extend the parent theme's styles in your theme:
<ol>
<li>In your theme directory, create a <code>web/css/source</code> sub-directory. </li>
<li>Create a <code>_extend.less</code> file there. The path to it looks like following: 

<pre>
&lt;theme_dir&gt;/
│&nbsp;&nbsp;├──&nbsp;web/
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;css/
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;source/
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──_extend.less
...
</pre>
</li>
<li>Add your LESS code in this file.</li>
</ol>

Extending a theme using <code>_extend.less</code> is the simplest option when you are happy with everything the parent theme has, but want to add more styles.

## Simplest way to override parent styles   {#simple_override}

To override parent styles (that is, override default Magento UI {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %} variables):
<ol>
<li>In your theme directory, create a <code>web/css/source</code> sub-directory. </li>
<li>Create a <code>_theme.less</code> file here. The path to it then looks like following: 

<pre>
&lt;theme_dir&gt;/
│&nbsp;&nbsp;├──&nbsp;web/
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;css/
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;source/
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──_theme.less
...
</pre>
</li>

It is important to remember that your <code>_theme.less</code> overrides the parent <code>_theme.less</code>. 

<li>Copy all variables you need from the parent <code>_theme.less</code>, including those which will not be changed. For example if your theme inherits from Blank, the <code>_theme.less</code> you should copy from is located at <code>&lt;Magento_Blank_theme_dir&gt;/web/css/source/_theme.less</code></li>
<li>Make the necessary changes.</li>
</ol>

The drawback of this approach is that you need to monitor and manually update your files whenever the parent's <code>_theme.less</code> is updated.

## Adding structured changes   {#structured_changes}

To make your changes easier to read and support, structure them by adding a separate overriding or extending <code>.less</code> files for each <a href="{{ page.baseurl }}/frontend-dev-guide/css-topics/theme-ui-lib.html#library_elements" target="_blank">Magento UI library component</a> you change. Let's use the <code>button</code> component implemented in <code>_button.less</code> as an illustration.

### Extend component\'s styles   {#structured_extend}

<ol>
<li>In your theme directory, create a <code>web/css/source</code> sub-directory. </li>
<li>Add <code>_buttons_extend.less</code> and <code>_extend.less</code> here. The path to the files looks like following: 

<pre>
&lt;theme_dir&gt;
│&nbsp;&nbsp;├──&nbsp;web/
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;css/
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;source/
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──_buttons_extend.less
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──_extend.less
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

### Override component\'s styles   {#structured_override}

To override the parent theme's styles for buttons in your theme:
<ol>
<li>In your theme directory, create a <code>web/css/source</code> sub-directory. </li>
<li>Create a <code>_buttons.less</code> file here. The path to it looks like following: 

<pre>
&lt;theme_dir&gt;/
│&nbsp;&nbsp;├──&nbsp;web/
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;css/
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;source/
│&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──_buttons.less
...
</pre>
This file overrides the <code>_buttons.less</code> of the parent theme.
</li>

<li>Add your styles for the button component. If the file is left blank, then no styles are applied for the component.</li>
</ol>

## Recommended reading

<ul>
<li><a href="{{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html" target="_blank">Compile LESS with Grunt</a></li>
<li><a href="{{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html" target="_blank">CSS preprocessing</a></li>
<li><a href="{{ page.baseurl }}/frontend-dev-guide/css-topics/theme-ui-lib.html" target="_blank">Magento UI library</a></li>
</ul>

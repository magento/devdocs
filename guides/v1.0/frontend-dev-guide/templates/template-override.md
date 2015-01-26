---
layout: default  
group: fedg
subgroup: C_Templates
title: Templates overriding
menu_title: Templates overriding
menu_order: 3
github_link: frontend-dev-guide/templates/template-override.md
---

<h3 id="template-layout">How templates are initiated</h3>

Templates are iniitated in layout files.
Each layout block has an associated template. 
Template is specified in the `template` attribute of the <block> layout instruction. 
For example, from <a href="{{site.mage2000url}}app/code/Magento/Catalog/view/frontend/layout/catalog_category_view.xml" target="_blank">app/code/Magento/Catalog/view/frontend/layout/catalog_category_view.xml</a>:

<pre>
&lt;block class=&quot;Magento\Catalog\Block\Category\View&quot; name=&quot;category.image&quot; template=&quot;Magento_Catalog::category/image.phtml&quot;/&gt;
</pre>

This means that for rendering the `category.image` block the `image.phtml` template stored in the `category` sub-directory of the `Magento_Catalog` templates directory is used. 
The templates directory of the `Magento_Catalog` module is `app/code/Magento/Catalog/view/frontend/templates`.

<p class="q">What about page templates, how are they initiated?

The next section describes where templates can be located in general.

<h3 id="template-convention">Conventional templates location</h3>
Templates are stored in the following locations:


* <span id="module">Module templates: `app/code/<Namespace>/<Module>/view/frontend/templates/<path_to_templates>`
* <span id="">Theme templates: `app/design/frontend/<Vendor>/<theme>/<Namespace>_<Module>/templates/<path_to_templates>`

Here `<path_to_templates>` might have several levels of directory nesting, or might be empty. Examples:

* `app/code/Magento/Catalog/view/frontend/templates/product/widget/new/content/new_grid.phtml`
* `app/code/Magento/Checkout/view/frontend/templates/cart.phtml`

Templates for blocks and templates for pages??
root.phtml

<h3>Template structure</h3>

<p class="q" Is there something our target audience (a fdg creating a new theme)should know about a template file structure?>

<p class="q">I In the declaration like following /**
 * @var $this \Magento\Framework\View\Element\Html\Link
 */ (from app/code/Magento/Theme/view/frontend/templates/link.phtml) what are the requirements for this class being specified or how is it related to the  template</p>


<h3>Getting argument values from layout</h3>

Arguments values set in a layout file can be accessed in templates using the <code>get{ArgumentName}()</code> and <code>has{ArgumentName}()</code> methods. There are more details in the <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-instructions.html#getter" target="_blank">Layout instructions article.
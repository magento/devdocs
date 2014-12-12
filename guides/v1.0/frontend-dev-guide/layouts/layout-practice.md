---
layout: default
group:
subgroup: B_Layouts
title: Layouts
menu_title: Customizing layout - step-by-step illustration
menu_order: 2
menu_node: parent
github_link: frontend-dev-guide/layouts/layout-practice.md
---

<h2>Introduction</h2>
This article features a step-by-step illustration of how a real-life layout customization task is performed. Namely, it illustrates how to change the layout of customer account links in a Magento store page header.

<h2>Moving customer account links</h2>
In their Orange theme, OrangeCo wants design to tranform the header links block to a drop-down, as follows:

<img src="{{ site.baseurl }}common/images/layout_transform.png">

To do this, they need to wrap the list of header links with a container and add a greeting with a drop-down arrow before the list.

By default rendered header links look like following:

<img src="{{ site.baseurl }}common/images/layout_code_before.png/>

Needed:

<img src="{{ site.baseurl }}common/images/layout_code_after.png/>

<br>
<u>Step 1: Define the template</u>

OrangeCo needs to find out which tempalte is responsible for displaying page links, to be able to include it a layout file.

Using the approach described in the <a href="{{site.gdeurl}}frontend-dev-guide/themes/debug-theme.html">Locate templates, layouts, and styles</a> article, OrangeCo define that the following template is used for links displaying:

**`app/code/Magento/Customer/view/frontend/templates/account/customer.phtml`**

<pre>
&lt;?php&nbsp;if($this-&gt;customerLoggedIn()):&nbsp;?&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class=&quot;customer&nbsp;welcome&nbsp;customer-welcome&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&nbsp;class=&quot;customer&nbsp;name&quot;&nbsp;data-mage-init='{&quot;dropdown&quot;:{}}'&nbsp;data-toggle=&quot;dropdown&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;&lt;?php&nbsp;echo&nbsp;$this-&gt;getCustomerName();&nbsp;?&gt;&lt;/span&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button&nbsp;type=&quot;button&quot;&nbsp;class=&quot;action&nbsp;switch&quot;&gt;&lt;span&gt;&lt;?php&nbsp;echo&nbsp;__('Change')?&gt;&lt;/span&gt;&lt;/button&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/span&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;?php&nbsp;if($this-&gt;getChildHtml()):?&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;class=&quot;customer&nbsp;menu&nbsp;customer-menu&quot;&nbsp;data-target=&quot;dropdown&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;?php&nbsp;echo&nbsp;$this-&gt;getChildHtml();?&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;?php&nbsp;endif;&nbsp;?&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;
&lt;?php&nbsp;endif;&nbsp;?&gt;
</pre>
<br>
<u>Step 2: Add a block to the base layout</u>

OrcangeCo needs to create a `header.links` block in the `header.panel` container to move the links there. As he links can be added this list by different modules, it is better to add this block to the default.xml page configuration of the Theme module.

So the following extending layout is added in the Orange theme:

***app/design/frontend/OrangeCo/orange/Magento_Theme/layout/default.xml***
<pre>
&lt;page&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceContainer&nbsp;name=&quot;header.panel&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Framework\View\Element\Html\Links&quot;&nbsp;name=&quot;header.links&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;css_class&quot;&nbsp;xsi:type=&quot;string&quot;&gt;header&nbsp;links&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceContainer&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;
&lt;/page&gt;
</pre>

<br>

<u>Step 3: Move links</u>

To move the links to the `header.links` block OrangeCo add an extending page configuration:

**`app/design/frontend/OrangeCo/orange/Magento_Customer/layout/default.xml`**

<pre>
&lt;page&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceBlock&nbsp;name=&quot;header.links&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Customer\Block\Account\Customer&quot;&nbsp;name=&quot;customer&quot;&nbsp;template=&quot;account/customer.phtml&quot;&nbsp;before=&quot;-&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Customer\Block\Account\AuthorizationLink&quot;&nbsp;name=&quot;authorization-link-login&quot;&nbsp;template=&quot;account/link/authorization.phtml&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceBlock&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;move&nbsp;element=&quot;register-link&quot;&nbsp;destination=&quot;header.links&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;move&nbsp;element=&quot;top.links&quot;&nbsp;destination=&quot;customer&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;move&nbsp;element=&quot;authorization-link&quot;&nbsp;destination=&quot;top.links&quot;&nbsp;after=&quot;-&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;
&lt;/page&gt;
</pre>

Now the customer links look like following:

<img src="{{ site.baseurl }}common/images/layout_screen2.png">

The last touch will be adding styles.

<br>
<u>Step 4: Add styles</u>

By using styles OrangeCo makes the header links look like they wanted:

<img src="{{ site.baseurl }}common/images/layout_screen3.png">




---
layout: default
group:
subgroup: B_Layouts
title: Customizing layout - step-by-step illustration
menu_title: Customizing layout - step-by-step illustration
menu_order: 2
menu_node: parent
github_link: frontend-dev-guide/layouts/layout-practice.md
---

<h2>Introduction</h2>
This article features a step-by-step illustration of how a real-life layout customization task is performed. Namely, it illustrates how to change the layout of customer account links in a Magento store page header.

<h2>Moving customer account links</h2>
In their Orange theme, OrangeCo want to transform the header links block to a drop-down, the way it is done in the Magento Luma theme:


<img src="{{ site.baseurl }}common/images/layout_transform.png">

To do this, they need to wrap the list of header links with a container and add a greeting with a drop-down arrow before the list.

By default rendered header links look like following:

<img src="{{ site.baseurl }}common/images/layout_code_before1.png">

Needed:

<img src="{{ site.baseurl }}common/images/layout_code_after.png">

<br>
<u>Step 1: Define the blocks</u>

OrangeCo <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-apply.html#theme-apply-apply">apply the Luma theme</a>. Using the approach described in <a href="{{site.gdeurl}}frontend-dev-guide/themes/debug-theme.html">Locate templates, layouts, and styles</a> they find out that the blocks responsible for displaying the header links are defined in `app/code/Magento/Customer/view/frontend/layout/default.xml`:

<pre>
...
&lt;page&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceBlock&nbsp;name=&quot;top.links&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Customer\Block\Account\Link&quot;&nbsp;name=&quot;my-account-link&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;label&quot;&nbsp;xsi:type=&quot;string&quot;&nbsp;translate=&quot;true&quot;&gt;My&nbsp;Account&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Customer\Block\Account\RegisterLink&quot;&nbsp;name=&quot;register-link&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;label&quot;&nbsp;xsi:type=&quot;string&quot;&nbsp;translate=&quot;true&quot;&gt;Register&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Customer\Block\Account\AuthorizationLink&quot;&nbsp;name=&quot;authorization-link&quot;&nbsp;template=&quot;account/link/authorization.phtml&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceBlock&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;
&lt;/page&gt;
</pre>

<u>Step 2: Define the templates</u>

Similar to the way they defined the layout on the previous step, they 
define the  template which is used for rearranging the links:

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
<u>Step 3: Add a block to the base layout</u>

OrangeCo needs to create a new block, say, `header.links`, in the `header.panel` container to move the links there. As the links can be added to this list by different modules, it is better to add this block to the `default.xml` page configuration of the Theme module.

So the following extending layout is added in the Orange theme:

**app/design/frontend/OrangeCo/orange/Magento_Theme/layout/default.xml**
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

<u>Step 4: Move links</u>

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

The last touch will be adding styles:

<img src="{{ site.baseurl }}common/images/layout_screen3.png">





---
layout: default  
group: fedg
subgroup: C_Templates
title: Customizing template illustration
menu_title: Customizing template illustration
menu_order: 4

github_link: frontend-dev-guide/templates/template-sample.md
---
<h2>Overview</h2>
This article contains a step-by-step illustration of solving a typical customization task using templates.

<h2>Sample template customization: changing a layout of the mini shopping cart</h2>
In the default Blank theme, in the mini shopping cart products are listed under the Go to Checkout button, like following:
<img src="{{ site.baseurl }}common/images/inherit_mini1.png" alt="An image of a mini shopping cart where products are listed under the Go to checkout button">

OrangeCo decided they want to change this and display the product list before the Go to Checkout button.
 
The template responsible for displaying the mini-shopping cart is <a href="{{site.mage2000url}}app/code/Magento/Checkout/view/frontend/templates/cart/minicart.phtml" target="_blank"><code>app/code/Magento/Checkout/view/frontend/templates/cart/minicart.phtml</code></a>.
Here is the part of the code OrangeCo worked with:

<img src="{{site.baseurl}}common/images/templ_overview_code1.png" alt="code">


They created a new Orange theme and copied the `minicart.phtml` to the theme folder:
`app/design/frontend/OrangeCo/orange>/Magento_Checkout/templates/cart/minicart.phtml`
In their copy of the templates, they changed the order of the blocks as follows:

<img src="{{site.baseurl}}common/images/templ_overview_code2.png" alt="code">

When the Orange them was applied, the mini shopping cart with products looked like following:

<img src="{{site.baseurl}}common/images/inherit_mini2.png" alt="In the minishopping cart products are listed before the Go to Checkout button ">

<!-- ADDLINK For more details about solving real life customization tasks using templates, refer to the Practice article. --> 

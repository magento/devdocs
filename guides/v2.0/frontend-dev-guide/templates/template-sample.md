---
layout: default  
group: fedg
subgroup: C_Templates
title: Illustration of customizing templates
menu_title: Illustration of customizing templates
menu_order: 3

version: 2.0
github_link: frontend-dev-guide/templates/template-sample.md
redirect_from: /guides/v1.0/frontend-dev-guide/templates/template-sample.html
---

<h2>What's in this topic</h2>
This topic contains a step-by-step illustration of solving a typical design customization task using templates.

<h2>Sample template customization: changing a layout of the mini shopping cart</h2>
In the Magento basic Blank theme, in the mini shopping cart, products are listed under the **Go to Checkout** button, like following:

<img src="{{ site.baseurl }}common/images/inherit_mini1.png" alt="An image of a mini shopping cart where products are listed under the **Go to Checkout** button">

OrangeCo decided they want to change this and display the product list before the **Go to Checkout** button.
 
The template responsible for displaying the mini-shopping cart items and controls is [`<Magento_Checkout_module_dir>/view/frontend/web/template/minicart/content.html`]({{site.mage2000url}}app/code/Magento/Checkout/view/frontend/web/template/minicart/content.html).
Here is the part of the code OrangeCo worked with:

<img src="{{site.baseurl}}common/images/templ_overview_code1.png" alt="code">


They created a new Orange theme and copied the `content.phtml` to the theme directory:
`app/design/frontend/OrangeCo/orange/Magento_Checkout/web/template/minicart/content.html`
In their copy of the templates, they changed the order of the blocks as follows:

<img src="{{site.baseurl}}common/images/templ_overview_code2.png" alt="code">

When the Orange theme was applied, the mini shopping cart with products looked like following:

<img src="{{site.baseurl}}common/images/inherit_mini2.png" alt="In the minishopping cart products are listed before the Go to Checkout button ">



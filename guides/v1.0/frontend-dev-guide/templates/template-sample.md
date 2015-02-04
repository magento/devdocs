---
layout: default  
group: fedg
subgroup: C_Templates
title: Customizing template illustration
menu_title: Customizing template illustration
menu_order: 3

github_link: frontend-dev-guide/templates/template-sample.md
---
<h2>Overview</h2>

This article contains a step-by-step illustration of a typical customization task solved by customizing a template.


<h2>Sample template customization: changing a layout of the mini shopping cart</h2>
In the default Blank theme, in the mini shopping cart products are listed under the Go to Checkout button, like following:
<img src="{{ site.baseurl }}common/images/inherit_mini1.png" alt="An image of a mini shopping cart where products are listed under the Go to checkout button">

Let's change this and display the product list before the Go to Checkout button. 
The template responsible for displaying the mini-shopping cart is `app/code/Magento/Checkout/view/frontend/templates/cart/minicart.phtml`.
Here is the part of the code we will work with:

<img src="{{site.baseurl}}common/images/templ_overview_code1.png" alt="code">


We will create a new theme and copy the `minicart.phtml` to our theme folder:
`app/design/frontend/<Our_vendor>/<new_theme>/Magento_Checkout/templates/cart/minicart.phtml`
In our copy of the templates, we change the order of the blocks as following:

<img src="{{site.baseurl}}common/images/templ_overview_code2.png" alt="code">

When we apply our new theme, the mini shopping cart with products will look like following:

<img src="{{site.baseurl}}common/images/inherit_mini2.png" alt="In the minishopping cart products are listed before the Go to Checkout button ">



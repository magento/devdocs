---
group: frontend-developer-guide
subgroup: C_Templates
title: Illustration of customizing templates
menu_title: Illustration of customizing templates
menu_order: 3
functional_areas:
  - Frontend
---

## What's in this topic

This topic contains a step-by-step illustration of solving a typical design customization task using templates.

## Sample template customization: changing a layout of the mini shopping cart

In the Magento basic Blank theme, in the mini shopping cart, products are listed under the **Go to Checkout** button, like following:

![An image of a mini shopping cart where products are listed under the \*\*Go to Checkout\*\* button]({{ site.baseurl }}/common/images/inherit_mini1.png)

OrangeCo decided they want to change this and display the product list before the **Go to Checkout** button.

The template responsible for displaying the mini-shopping cart items and controls is [`<Magento_Checkout_module_dir>/view/frontend/web/template/minicart/content.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Checkout/view/frontend/web/template/minicart/content.html).
Here is the part of the code OrangeCo worked with:

![code]({{ site.baseurl }}/common/images/templ_overview_code1.png)


They created a new Orange {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} and copied the `content.phtml` to the theme directory:
`app/design/frontend/OrangeCo/orange/Magento_Checkout/web/template/minicart/content.html`
In their copy of the templates, they changed the order of the blocks as follows:

![code]({{ site.baseurl }}/common/images/templ_overview_code2.png)

When the Orange theme was applied, the mini shopping cart with products looked like following:

![In the minishopping cart products are listed before the Go to Checkout button ]({{ site.baseurl }}/common/images/inherit_mini2.png)

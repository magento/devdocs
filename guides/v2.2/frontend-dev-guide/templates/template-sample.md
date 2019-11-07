---
group: frontend-developer-guide
title: Templates customization sample
functional_areas:
  - Frontend
---

This topic contains a step-by-step guide to solving a typical design customization task using templates.

## Sample template customization: changing a layout of the mini shopping cart

In the Magento basic Blank theme, in the mini shopping cart, products are listed under the **Go to Checkout** button, like following:

![An image of a mini shopping cart where products are listed under the Go to Checkout button]({{site.baseurl}}/common/images/inherit_mini121.png)

OrangeCo decided they want to change this and display the product list before the **Go to Checkout** button.

The template responsible for displaying the mini-shopping cart items and controls is [`<Magento_Checkout_module_dir>/view/frontend/web/template/minicart/content.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Checkout/view/frontend/web/template/minicart/content.html){:target="_blank"}.
Here is the part of the code OrangeCo worked with:

![code1]({{site.baseurl}}/common/images/templ_overview_code121.png)

They created a new Orange theme and copied the `content.html` to the theme directory:
`app/design/frontend/OrangeCo/orange/Magento_Checkout/web/template/minicart/content.html`.

In their copy of the templates, they changed the order of the blocks as follows:

![code2]({{site.baseurl}}/common/images/templ_overview_code221.png)

When the Orange theme was applied, the mini shopping cart with products looked like the following:

![In the minishopping cart products are listed before the Go to Checkout button]({{site.baseurl}}/common/images/inherit_mini221.png)

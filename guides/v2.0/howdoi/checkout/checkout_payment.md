---
layout: default
group: howdoi
subgroup: checkout
title: Add a payment method rendering to the checkout
menu_title: Customize the view of a checkout step
menu_order: 3
github_link: howdoi/checkout/checkout_payment.md
---

<h2> What's in this topic </h2>

Out of the box, checkout in Magento consists of two steps:
 
 - Shipping Information
 - Review and Payment Information

On the Review and Payment Information step the enabled payment methods are rendered. This topic descibes how to make your custom payment method appear on this step as well. 

* TOC
{:toc}

To implement the payment method rendering in checkout, you need to take the following steps:

1. Create the .js file implementing the component.
<p class="q">What is exactly is this component?</p>
2. Create the .js file registering the component's .js 
<p class="q">Where does it register it and what is the name of the file</p>
3. Create a template for the payment method 
<p class="q">is it a template for the payment method rendering in checkout?</p>
4. Declare the ... in the checkout_index_index.xml 
<p class="q">What should be declared here except the case </p>
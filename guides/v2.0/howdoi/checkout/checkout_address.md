---
layout: default
group: howdoi
subgroup: checkout
title: Add custom address rendering
menu_title: Add custom address rendering
menu_order: 1
github_link: howdoi/checkout/checkout_address.md
---

## What's in this topic
The default Magento Checkout consists of two steps:

 - Shipping Information
 - Review and Paymetns Information

This topic describes how to add a custom address renderer to be used on the Shipping Information checkout step.

## Adding custom address renderer overview

To implmenent custom address rendering, you need to create the following entities:

- .js component for rendering address
- .js model for the shipping rate processor
<p class="q">Is it ok to say "for processing"? or is the processor an entity or smth</p>
<p class="q">What exactly is saved?</p>
- .js model for saving shipping address processor
- .js component for registering the processors

Then you need to declare the components in the Checkout page layout and in the 
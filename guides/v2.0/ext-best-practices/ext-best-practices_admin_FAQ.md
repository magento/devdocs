---
layout: default
group: ext-best-practices
subgroup: Best Practice Categories
title: Admin UI FAQ
menu_title: Admin UI FAQ
menu_order: 2
github_link: ext-best-practices/ext-best-practices_admin_FAQ.md



---
##{{page.menu_title}}

This FAQ provides Best Practices about creating extensions that integrate cleanly into the Admin panel UI.

How to display extensions in the Admin is a great place for using Best Practices; what extension developers choose to do (or not do) when integrating their extensions has a big impact on the look-n-feel of the Admin UI.

<h3 id="bp_admin_Q1">Q</h3>

Where should my extension appear in the Admin panel?

<h3 id="bp_admin_A1">A</h3>

____

<h3 id="bp_admin_Q2">Q</h3>

Are there "rules" about using icons or images that appear beside the name of my extension in the Admin panel?

<h3 id="bp_admin_A2">A</h3>

____

<h3 id="bp_admin_Q3">Q</h3>

"What's the suggested way with M2 to distinguish between CE and EE to hide/show features if you have an extension that has EE only features?" (bsstaveley)

<h3 id="bp_admin_A3">A</h3>

One answer from redbox-bolaji was: "Not sure exactly but `/** @var $moduleManager Magento\Framework\Module\Manager */$moduleManager->isEnabled('Magento_Enterprise’)` should suffice.  In the future, I think this might be the correct constant to check;  `\Magento\Framework\AppInterface\ProductMetadata::EDITION_NAME`

<h3 id="bp_admin_Q1">Q</h3>

How do I configure my module to appear in the _________ menu of the Admin panel?

<h3 id="bp_admin_A1">A</h3>
Use the <Module Directory>/etc/adminhtml/menu.xml file to configure from where on the Admin panel your extension is accessible.




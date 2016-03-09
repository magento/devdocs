---
layout: default
group: ext-best-practices
subgroup: Best Practice Categories
title: Admin UI FAQ
menu_title: Admin UI FAQ
menu_order: 1
github_link: ext-best-practices/ext-best-practices_admin_FAQ.md



---
##{{page.menu_title}}
{:.no_toc}

This FAQ provides Best Practices for creating extensions that integrate cleanly into the Admin panel UI.

How to display extensions in the Admin is a great place for using Best Practices; what extension developers choose to do (or not do) when integrating their extensions has a big impact on the look-n-feel of the Admin UI.

### Frequently Asked Questions
{:.no_toc}
* Table of Content
{:toc}

____

#### Where should my extension appear in the Admin panel?

____

#### Are there "rules" about using icons or images that appear beside the name of my extension in the Admin panel?

____

#### "What's the suggested way with M2 to distinguish between CE and EE to hide/show features if you have an extension that has EE only features?" (bsstaveley)

One answer from redbox-bolaji was: "Not sure exactly but `/** @var $moduleManager Magento\Framework\Module\Manager */$moduleManager->isEnabled('Magento_Enterprise’)` should suffice.  In the future, I think this might be the correct constant to check;  `\Magento\Framework\AppInterface\ProductMetadata::EDITION_NAME`

____

#### How do I configure my module to appear in the _________ menu of the Admin panel?

Use the <Module Directory>/etc/adminhtml/menu.xml file to configure from where on the Admin panel your extension is accessible.

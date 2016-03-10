---
layout: default
group: ext-best-practices
subgroup: Best Practice Categories
title: Admin UI and UX FAQ
menu_title: Admin UI/UX FAQ
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

#### What are the best practices for authorizing or collecting information from merchants prior to enabling my extension?

____

#### When should an extension embed items into an existing page?

____

#### When is it appropriate to create a new standalone page for a unique feature?

____


#### What are the steps involved in adding settings to the config?

____

####What are the rules about using the left-navigation "slide-out panels" in the Admin panel?

____


#### What's best practices for distributing different translations?

____

#### Are there "rules" about using icons or images that appear beside the name of my extension in the Admin panel?

____

#### Can my module's transactions be listed on my own tab instead of inserting them into the sales tab?

____

#### Can I add a link in the Admin taking me to my store where you can buy more extensions?

____

#### For my ad supported extension where are appropriate, but highly visible areas I can place ads in the admin?

____

#### In Magento 2, how can my extension distinguish between the Community Edition and the Enterprise Edition?

One answer from redbox-bolaji was:

>Not sure exactly but `/** @var $moduleManager Magento\Framework\Module\Manager */$moduleManager->isEnabled('Magento_Enterprise’)` should suffice.  In the future, I think this might be the correct constant to check; `\Magento\Framework\AppInterface\ProductMetadata::EDITION_NAME`

____

#### How do I configure my module so that it appears in a specific place on the Admin panel?

Use the `<Module Directory>/etc/adminhtml/menu.xml` file to configure from where on the Admin panel your extension is accessible.

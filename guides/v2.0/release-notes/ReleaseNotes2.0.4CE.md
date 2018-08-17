---
group: release-notes
subgroup: 02_rel-notes
title: Magento Open Source 2.0.4 Release Notes
menu_title: Magento Open Source 2.0.4 Release Notes 
menu_order: 198
version: 2.0
level3_menu_node: level3child
level3_subgroup: ce20-relnotes
---

We are pleased to present Magento Open Source 2.0.4. This release includes all of the security enhancements and performance improvements of Magento 2.0.3, in improved packaging. **You must download and install 2.0.4 to ensure that you receive all the security enhancements of 2.0.3**. 


Backward-incompatible changes are documented in <a href="{{ site.baseurl }}/guides/v2.0/release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.

### Fixed issues

####  Upgrade and Installation

<!-- 50224 -->* Magento no longer creates store data inconsistently during installation. 

<!-- 47531 -->* During upgrade, the `setup:config:set` script no longer deletes values in the `env.php` file. 

#### Import

<!-- 50255 -->* Magento now successfully imports existing products as well as products that use custom URLs. 

#### APIs

<!-- 46720 --> * The Orders {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} now exposes the shipping address. This corrects an issue with using this API to integrate with third-party systems. 

<!-- 49558 --> * The SOAP API now returns attributes of type "text swatch" and "visual swatch" when you use the API to add attribute options. Previously, this feature did not work for these attribute types.  

#### PHP

<!-- 50500 -->* Magento now allows you to use arguments of `url` type in nested arrays. Previously, you could pass route parameters only if the `url` argument was declared at the top level.  

#### Miscellaneous

<!-- 47704 -->* Magento no longer displays {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} tags in messages. 

<!-- 48781 --> * Product performance has been enhanced when loading {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}catalog{% endglossarytooltip %} products with multiple color swatches. 

<!-- 47844 -->* Magento now successfully saves and displays new customer attributes. 

<!-- 49449--> * Magento performance has been improved by the removal of redundant get requests that previously occurred during {% glossarytooltip c7ecb18d-cefe-452d-83e2-3c4d5e355db9 %}shopping cart{% endglossarytooltip %} refresh.

#### Security enhancements

This release includes several enhancements to improve the security of your Magento 2.0 installation. While there are no confirmed attacks related to these issues to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento 2.0 installation to the latest version as soon as possible.

The following list provides an overview of the security issues fixed in this release. We describe each issue in greater detail in the <a href="https://magento.com/security" target="_blank">Magento Security Center</a>. 

<!-- 45887 -->* Issue with persistent cross-site scripting through a user account has been resolved. 

<!-- 50608 -->*  Magento now supports setting limits on password attempts. Previously, {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} and Customer Token API access did not limit the number of attempts to enter a password, inadvertently allowing brute force attempts to guess passwords. 

<!-- 50611 -->* APIs that previously granted access to anonymous users are now configured to require a higher permission level.  Default product behavior does not permit anonymous access to Catalog, Store and {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} APIs. However, if you would like to allow anonymous access, you can change this setting. 


<!-- 48819 -->* Magento now prevents the arbitrary execution of {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} code through the {% glossarytooltip 9c4c7b9b-43f0-4454-8e8c-fb62ad40c35f %}language package{% endglossarytooltip %} {% glossarytooltip 6341499b-ead9-4836-9794-53d95eb48ea5 %}CSV{% endglossarytooltip %} file. 

<!-- 47050 -->* The encryption keys that are generated in **System > Manage Encryption Key** have been strengthened. 

<!-- 50755 -->* Reflected XSS can no longer occur through the Authorizenet module’s {% glossarytooltip 510de766-1ebd-4546-bf38-c618c9c945d2 %}redirect{% endglossarytooltip %} data. 

We recommend that you review Magento's <a href="http://merch.docs.magento.com/ce/user_guide/magento/magento-security-best-practices.html" target="_blank">Security Best Practices</a>, and confirm that all safeguards are in place to protect your system from compromise. Use this occasion to examine your system for indications of possible attack, such as strange administrator accounts, unfamiliar files on the server, etc. To receive direct notification from our security team regarding any emerging issues and solutions, sign up for the <a href="https://magento.com/security/sign-up" target="_blank">Security Alert Registry</a>.

### System requirements

Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later support PHP 5.5, 5.6, 7.0.2, and MySQL 5.6. For more information, see 
[System Requirements]({{ site.baseurl }}/magento-system-requirements.html){:target="_blank"}.

### Installation instructions

#### New installations

New users can now complete a full installation of Magento Open Source 2.0.4 from an archive file on the <a href="https://www.magentocommerce.com/download" target="_blank">Download</a> page.

##### <b>Download a new installation</b>#####

1. Go to the <a href="https://www.magentocommerce.com/download" target="_blank">Magento Community Edition Download</a> page.

2. Under Full Release, select a format for the download archive file. Then, click **Download**.

3.	Follow the Magento <a href="{{ site.baseurl }}/guides/v2.0/install-gde/prereq/integrator_install.html#integrator-first-composer-ce" target="_blank">installation instructions</a>.

##### <b>Install a new installation with Composer</b>#####

1. Go to the <a href="https://www.magentocommerce.com/download" target="_blank">Magento Open Source Download</a> page.

2.	Under **Download with Composer**, click **Download**.

3.	Follow the instructions to download Composer, and get the {{site.data.var.ce}} {% glossarytooltip 7490850a-0654-4ce1-83ff-d88c1d7d07fa %}metapackage{% endglossarytooltip %}.


#### **Upgrade existing installations**

If you installed Magento Open Source 2.0.0 from an archive, you must perform some additional tasks before you can upgrade your installation. Current users of Magento 2.0.0/2.0.1/2.0.2/2.0.3 must first update the installer from the command line. Then, update the installation from the <a href="http://docs.magento.com/m2/ce/user_guide/system/web-setup-wizard.html" target="_blank">Web Setup Wizard</a> or command line. For detailed instructions, see the <a href="{{ site.baseurl }}/guides/v2.0/release-notes/tech_bull_201-upgrade.html" target="_blank">technical bulletin</a>.


##### <b>Upgrade an existing installation from the Setup Wizard</b>#####

1.	Log in to Admin with Administrator privileges.

2.	On the Admin sidebar, click **System**. Under **Tools**,  choose **Web Setup Wizard**.

3.	Click  **System Upgrade**. Follow the onscreen instructions to complete the upgrade.

For more information, see <a href="{{ site.baseurl }}/guides/v2.0/comp-mgr/bk-compman-upgrade-guide.html" target="_blank">Upgrade the Magento installation and components</a>.


##### <b>Upgrade an existing installation from the GitHub repository</b>#####
Developers who contribute to the Open Source codebase can <a href="{{ site.baseurl }}/guides/v2.0/comp-mgr/bk-compman-upgrade-guide.html" target="_blank">upgrade manually</a> from the Magento Open Source GitHub repository.

1.	Go to the <a href="{{ site.baseurl }}/guides/v2.0/install-gde/install/cli/dev_options.html" target="_blank">Contributing Developers</a> page.

2.	Follow the instructions to pull the updates from the repository and update {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %}.











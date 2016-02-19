---
layout: default
group: 
title: Magento Enterprise Edition Release Notes 1.14.2.4
menu_title: 
menu_node: 
menu_order: 
github_link: release-notes/ReleaseNotes1.14.2.4EE.md
redirect_from: 
---

<h2>Release Notes</h2>
<h2>Magento Enterprise Edition 1.14.2.4</h2>

We are pleased to bring you Magento Enterprise Edition 1.14.2.4, which bundles improvements for issues reported to us by our merchants after installing latest Patch SUPEE-7405 or Magento Enterprise Edition Release 1.14.2.3. While there are no confirmed attacks related to these issues to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. 

This patch bundle also contains changes to Magento file permissions that support the upload of all file types and directories. File permissions are now 0666 (previously 0640). Directory permissions are now 0777 (previously 0750). 

Important! Use Magento Enterprise Edition 1.14.2.4 or later for all new installations and upgrades to ensure that you have the latest fixes, features, and security updates.

You <b>must</b> install Patch SUPEE-7405 v1.0 before installing this patch unless you are running:

* Magento EE 1.14.2.3

* Magento CE 1.9.2.3


If you running either of these versions of Magento, or have previously installed Patch 7405 v 1.0  on an earlier version of Magento, you do not need to install Patch SUPEE-7405 v1.0 before installing this patch. 



<h2>Security Patch Bundle (SUPEE-7405 v.1.1)</h2>
We highly recommend that all users of Magento Enterprise Edition 1.9.0.0 - 1.14.2.3 either install the SUPEE-7405 1.1 Patch Bundle, or upgrade to Magento Enterprise Edition 1.14.2.4. Even if you are not having any of the issues addressed by this patch bundle, we recommend installing it. This will help prevent code conflicts with possibly future patches.


Security Patch Bundle (SUPEE-7405 v.1.1) includes several SUPEE patches, including SUPEE-7978 and SUPPEE-7822. 


Visit the Magento Security Center for detailed information about the SUPEE-7405 1.1 patch bundle.



<h2>Cart Merge Patch (SUPEE-7978)</h2>
Carts containing identical items now merge correctly. Previously, when you merged one cart containing an item with another cart that contained the same item, Magento did not merge cart totals appropriately. Now, your cart will display only one item.  



<h2>SOAP API Patch  (SUPEE-7822)</h2>
The Magento SOAP API now works as expected. Previously, after installation of patch SUPEE-7405 v1.0,  an API request would cause a 500 error, and Magento would log an exception.


* If you have not yet installed previous patches, please do so now to bring your system up to date.

* Read or review Magento’s Security Best Practices and make sure that all safeguards are in place to protect your system from compromise.

* Use this occasion to examine your system for indications of possible attack such as strange administrator accounts, unfamiliar files on the server, etc.

* To receive direct notification from our security team regarding any emerging issues and solutions, sign up for the Security Alert Registry.


To download and install the patch:

To upgrade Magento:

See also:


---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.1.7 Release Notes
menu_title: Magento Commerce 2.1.7 Release Notes
menu_order: 260
level3_menu_node: level3child
level3_subgroup: ee21-relnotes 
version: 2.1
---

*	TOC
{:toc}


*Release date: May 31, 2017*

*Page updated: June 1, 2017*

We are pleased to present Magento Commerce (formerly Enterprise Edition) 2.1.7. This release includes important enhancements to the security of your Magento software.


<div class="bs-callout bs-callout-warning" markdown="1">
While there are no confirmed attacks related to these vulnerabilities to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento software to the latest version as soon as possible.
</div>

Looking for the <a href= "{{ site.baseurl }}/guides/v2.0/cloud/release-notes/CloudReleaseNotes.html" target="_blank">Magento Commerce (Cloud)  Release Notes</a>?

## Highlights

Magento 2.1.7 contains over 15 security enhancements as well as one significant functional enhancement. Look for the following highlights in this release:



* **Resolution of multiple high priority and critical security issues**. These critical issues include remote code execution for authenticated Admin users, access control bypass, and cross-site request forgery issues. See [Magento 2.0.14 and 2.1.7 Security Patches](https://magento.com/security/patches/magento-2014-and-217-security-update){:target="_blank"} for a comprehensive discussion of these issues. 


* **Reversion of the changes to image resizing that we introduced in 2.1.6**. Unfortunately, certain image resizing changes introduced unanticipated problems. We have reverted these changes in this release, and will provide improvements to image resizing in a future product update. 

<table>
  <tr>
    <th>Currently installed Magento version</th>
    <th>Upgrade to ...</th>

        <th>Additional actions</th>


  </tr>
  <tr>
    <td>2.1.0 - 2.1.5</td>
    <td>2.1.7</td>
     <td>none needed</td>
    
  </tr>
  <tr>
    <td>2.1.6 without image resizing hot fix 
    (CE-MAGETWO-67805.patch  and EE-MAGETWO-67805.patch)</td>
    <td>2.1.7</td>
    <td>After upgrading, run the <code>bin/magento catalog:images:resize</code> command.</td>
  </tr>

  <tr>
    <td>2.1.6 with image resizing hot fix (CE-MAGETWO-67805.patch and EE-MAGETWO-67805.patch)</td>
    <td>2.1.7</td>
    <td>
    <ol>
    <li>Delete the image resizing patch before upgrading to 2.1.7. </li>
    <li>After upgrading, run the <code>bin/magento catalog:images:resize</code> command. </li>
     </ol>
    </td>

</tr>

</table>

**Note**: As of June 30, 2017, MasterCard may fine merchants who do not support cards that use their recently expanded range of BIN numbers. Transactions for customers that use cards with these new BINs will fail if your software does not support these new BIN numbers. MasterCard describes the issue [here](https://www.mastercard.us/en-us/issuers/get-support/2-series-bin-expansion.html){:target="_blank"}.  **If you are running Magento 2.1.3 or later, your Magento software already provides support for these new BINs.** 

## System requirements

Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}/install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ee_install_21.md %}

## Migration toolkits

The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports. 



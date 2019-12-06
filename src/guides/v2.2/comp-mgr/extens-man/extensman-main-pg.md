---
group: software-update-guide
subgroup: 06_UseExtMan
title: Start the Extension Manager
menu_title: Start the Extension Manager
menu_node:
menu_order: 2
functional_areas:
  - Upgrade
---

## Start the Extension Manager from the Magento Admin

To start the [Extension](https://glossary.magento.com/extension) Manager:

1. If you haven't done so already, create or get your [authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html).
1. Log in to the [Magento Admin](https://glossary.magento.com/magento-admin) as an administrator.
1. Click **System** > **Web Setup Wizard**.
1. Click **Extension Manager** as the following figure shows.

   ![Click the Extension Manager]({{ site.baseurl }}/common/images/extens_mgr_select.png){:width="550px"}

1. If prompted, log in to the Extension Manager.

   The following page displays if a login is required.

   ![Install or upgrade extensions]({{ site.baseurl }}/common/images/extens_mgr_login.png){:width="400px"}

1. Enter your authentication keys in the provided fields.
1. Click **Submit**.

{:.bs-callout-warning}
You must use the same authentication keys you used to install the Magento software. For example, you *cannot* use {{site.data.var.ce}} authentication keys to update or upgrade {{site.data.var.ee}} or vice versa. You also *cannot* use another user's authentication keys or [Shared account](http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html) authentication keys

See one of the following sections:

*  [Choose what to install, uninstall, or update](#extens-choose)
*  [Install extensions](#extensman-install)
*  [Uninstall extensions](#extensman-uninstall)
*  [Update extensions](#extensman-update)

## Choose what to install, uninstall, or update {#extens-choose}

After you log in to the Extension Manager, a list displays as follows:

![Choose what to install, update, or uninstall]({{ site.baseurl }}/common/images/extens_mgr_updates.png){:width="500px"}

*  **Updates Available** displays the number of extensions you can update.
*  **Extensions Ready to Install** displays the number of extensions you can install.
*  **Last Refresh** displays the last time you refreshed the list of extensions on Magento Marketplace.

   Click **Refresh** to update the information, such as after you purchase new extensions.

### Supported actions for each type {#extens-choose-pertype}

{% collapsible Supported actions for each type %}

We support different actions for each *type* of component. (*Component* is a general term that includes any type of code you can install in the Magento application&mdash;module, language package, theme, or metapackage. *Extension* refers to anything you can install, uninstall, or update.)

The following figure shows how types display in the Extension Manager.

![Extension Manager columns]({{ site.baseurl }}/common/images/extensman_columns-only.png)

Following is a definition of types:

*  `module` for a module (that is, PHP code that modifies Magento behavior)
*  `language` for a language package used to translate the Magento storefront and Admin
*  `theme` for a collection of styles that affect the look of the storefront or Admin
*  `library` for a library&mdash;such as a shared third-party library
*  `component` for any type of component that must be installed in the Magento root directory (this is a relatively uncommon type)

Actions are further divided between those available for *metapackages* (that is, an installable package that contains a group of different types) or *non-metapackages* (that is, a single type).

The following sections provide details:

*  [Actions available for non-metapackages](#extensman-access-types-non-meta)
*  [Actions available for metapackages](#extensman-access-types-meta)

#### Actions available for non-metapackages {#extensman-access-types-non-meta}

Most extensions you get from Magento Marketplace or another source have only one type; for example, a module.

The following table shows which actions are supported for each non-metapackage.

<table>
   <!-- <col width="40%">
   <col width="15%">
   <col width="15%">
   <col width="15%">
   <col width="15%"> -->
      <tbody>
      <tr>
         <th>Type</th>
         <th>Update</th>
         <th>Uninstall</th>
      </tr>
      <tr>
         <td>module</td>
         <td>Yes</td>
         <td>Yes</td>
      </tr>
      <tr>
         <td>language package and theme</td>
         <td>Yes</td>
         <td>Yes</td>
      </tr>
      <tr>
         <td>library</td>
         <td>Yes</td>
         <td>Yes</td>
      </tr>
      <tr>
         <td>component</td>
         <td>Yes</td>
         <td>Yes</td>
      </tr>
   </tbody>
</table>

#### Actions available for metapackages {#extensman-access-types-meta}

A metapackage is an installable package that includes more than one type. For example, we require a package that contains a module and a theme to be packaged as a metapackage.

The following table shows which actions are available for a metapackage.

<table>
   <!-- <col width="40%">
   <col width="15%">
   <col width="15%">
   <col width="15%">
   <col width="15%"> -->
   <tbody>
      <tr>
         <th>Type</th>
         <th>Update</th>
         <th>Uninstall</th>
      </tr>
      <tr>
         <td>module</td>
         <td>No</td>
         <td>No</td>
      </tr>
      <tr>
         <td>language package and theme</td>
         <td>Yes</td>
         <td>Yes</td>
      </tr>
      <tr>
         <td>library</td>
         <td>Yes</td>
         <td>Yes</td>
      </tr>
      <tr>
         <td>component</td>
         <td>Yes</td>
         <td>Yes</td>
      </tr>
   </tbody>
</table>

{% endcollapsible %}

## Install extensions {#extensman-install}

{% collapsible To install extensions: %}

Click **Review and Install** as the following figure shows.

![Review and install extensions]({{ site.baseurl }}/common/images/extensman_review-purchases.png){:width="450px"}

The Ready to Install page displays as follows.

![Display a list of extensions you can install]({{ site.baseurl }}/common/images/extensman_ready-to-install-pg.png){:width="450px"}

The following sections discuss your options.

### Get more information

To get more information about an extension, click ![Get information about an extension]({{ site.baseurl }}/common/images/extensman_icon_question.png).

### Install one extension

To install one extension, click the **Install** link at the end of its row and continue with [Step 1. Readiness check]({{ page.baseurl }}/comp-mgr/extens-man/extensman-readiness.html).

### Install more than one extension

To install more than one extension:

1. Select the checkbox next to each extension, or click **Select All** from the list as the following figure shows.

   ![Choose extensions to install]({{ site.baseurl }}/common/images/extensman_choose-to-install.png){:width="550px"}

1. After you select what to install, click **Install** at the top of the page as the following figure shows.

   ![Install your purchases]({{ site.baseurl }}/common/images/extensman_ready-to-install.png){:width="550px"}

1. Continue with [Step 1. Readiness check]({{ page.baseurl }}/comp-mgr/extens-man/extensman-readiness.html).

{% endcollapsible %}

## Uninstall extensions {#extensman-uninstall}

{% collapsible To uninstall extensions: %}

1. In the Installed Extensions section, click **Uninstall** from the **Actions** list as the following figure shows.

   ![Uninstall extensions]({{ site.baseurl }}/common/images/extensman_uninstall.png){:width="600px"}

   If no **Uninstall** option is available, the vendor did not provide an uninstallation script. Contact the vendor for uninstallation instructions.

1. Continue with [Step 1. Readiness check]({{ page.baseurl }}/comp-mgr/extens-man/extensman-readiness.html).

{% endcollapsible %}

## Update extensions {#extensman-update}

{% collapsible To update extensions: %}

The New Updates page displays all extensions that can be updated.

![List of extensions that can be updated]({{ site.baseurl }}/common/images/extensman_new-updates.png){:width="600px"}

You have the following options:

*  To update one extension, click **Update** at the end of its row.
*  To update more than one extension, select its checkbox and click **Update**, as the following figure shows.

   ![Update selected extensions]({{ site.baseurl }}/common/images/extensman_update-selected.png){:width="500px"}

*  To update all extensions, click **Select All** from the list and click **Update**, as the following figure shows.

   ![Update all extensions]({{ site.baseurl }}/common/images/extensman_update-all.png)

Continue with [Step 1. Readiness check]({{ page.baseurl }}/comp-mgr/extens-man/extensman-readiness.html).

{% endcollapsible %}

---
group: software-update-guide
subgroup: 32_UseUpgrade
title: Step 1. Select versions to upgrade
menu_title: Step 1. Select versions to upgrade
menu_node:
menu_order: 5
functional_areas:
  - Upgrade
---

## System upgrade options {#upgrade-access}

To choose which components to upgrade:

1. After you [run System Upgrade]({{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html), a page similar to the following displays:<br><br>

   <img src="{{ site.baseurl }}/common/images/upgr_step1-mock.png" width="750px" alt="System Upgrade automatically checks for core module updates and third-party modules if you wish">

1. You have the following options:

   <table>
   <tbody>
   <tr>
      <th>Item</th>
      <th>Meaning</th>
   </tr>
   <tr>
      <td><p>Try Again, Next</p></td>
      <td><p>Click <strong>Try Again</strong> to search for upgrades again. You can do this if something recently changed.</p>
         <p>Click <strong>Next</strong> to continue to the readiness check after making selections on this page.</p></td>
   </tr>
   <tr>
      <td><p>Magento Core Components list</p></td>
      <td><p>Displays available core component versions for upgrade.</p>
         <p><strong>(current)</strong> indicates the version you currently have.</p>
         <p><strong>(latest)</strong> indicates the most recent available version for upgrade.</p></td>
   </tr>
   <tr>
      <td><p>Other Components button</p></td>
      <td><p>Enables you to search for upgrades for third-party components.</p>
         <ul><li>To search for available component updates, click <strong>Yes</strong>.</li>
         <li>To search only for Magento core component upgrades, click <strong>No</strong>.</li></ul></td>
   </tr>
   <tr>
      <td><p>Pagination</p></td>
      <td><p>Enables you to:</p>
         <p><img src="{{ site.baseurl }}/common/images/cman_page_number.png" width="100px" alt="Specify number of items to display on page" />Specify the number of items to display on a page.</p>
         <p><img src="{{ site.baseurl }}/common/images/cman_page_move.png" width="100px" alt="Move back and forward or specify a page number" />From left to right, move back one page, go to a specific page, or move forward one page.</p></td>
   </tr>
   <tr>
      <td><p>List of components</p></td>
      <td><p>For each component, you can:</p>
         <ul><li>Set <strong>Upgrade</strong> to <strong>Yes</strong> to upgrade it.</li>
            <li>Set <strong>Upgrade</strong> to <strong>No</strong> to skip it (that is, <em>not</em> upgrade that component).</li>
            <li>From the <strong>Update Version</strong> list, click the upgrade version. (If you already have the most current version, the list has only one option.)</li></ul>
            </td>
   </tr>
   </tbody>
   </table>

## Upgrade components {#upgr-comps}

To upgrade components:

1. From the **Magento Core Components** list, click the core component version to which to upgrade.

   For example, to upgrade to the latest version, click the one with **(latest)** in the name as the following figure shows.

   ![Select the version of Magento core components to which to upgrade]({{ site.baseurl }}/common/images/upgr_step1_core-ver.png)

1. For each third-party component:

   *  If you *do* want to upgrade it, set **Upgrade** to **Yes** and click the version from the **Update Version** list.

      A sample follows.

      ![Upgrade this component]({{ site.baseurl }}/common/images/upgr_comp_yes.png)

   *  If you *do not* want to upgrade it, set **Upgrade** to **No**.

      A sample follows.

      ![Do not upgrade this component]({{ site.baseurl }}/common/images/upgr_comp_no.png)

1. Click **Next** and continue with [Step 2. Readiness check]({{ page.baseurl }}/comp-mgr/upgrader/upgrade-readiness.html)

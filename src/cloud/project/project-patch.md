---
group: cloud-guide
title: Apply patches
functional_areas:
  - Cloud
  - Upgrade
---

[{{ site.data.var.mcp-prod }}](https://github.com/magento/magento-cloud-patches) and [Magento Quality Patches](https://github.com/magento/quality-patches) deliver patches to your installed Magento application.

-  {{ site.data.var.mcp-prod }} delivers required patches with critical fixes
-  Magento Quality Patches delivers optional, low-impact quality fixes as [individual patches]({{ site.baseurl }}/release/policy/#individual-patch), which do not contain backward incompatible changes.

Both packages improve the integration of all {{site.data.var.ee}} versions with Cloud environments and support quick delivery of critical, optional, and custom fixes. You can use these packages to apply, revert, and view general information about all individual patches that are available for Magento.

{:.bs-callout-tip}
You can use the [Magento Quality Patches]({{ site.baseurl }}/guides/v2.4/comp-mgr/patching/mqp.html) and [{{ site.data.var.mcp-prod }}](#standalone) packages as stand-alone packages for {{ site.data.var.ce }} and {{ site.data.var.ee }} projects. We recommend using the Magento Quality Patches package for non-Cloud projects.

When you deploy changes to the remote environment, `{{site.data.var.ct}}` uses {{ site.data.var.mcp-package }} and `magento/quality-patches` to check for pending patches and applies them automatically in the following order:

1. Apply all required Magento patches included in the {{ site.data.var.mcp-prod }} package.
1. Apply selected optional Magento patches included in the Magento Quality Patches package.
1. Apply custom patches in the `/m2-hotfixes` directory in alphabetical order by patch name.

{:.bs-callout-info}
When you update `{{ site.data.var.ct }}` or the {{ site.data.var.mcp-prod }} package, the latest required patches are applied the next time you deploy your project, or you can deploy them immediately using the `ece-patches apply` CLI command and redeploying your Cloud environment. You cannot skip [required patches](https://github.com/magento/magento-cloud-patches/tree/develop/patches) during the deployment process.

## Prerequisites

{% include cloud/note-upgrade.md %}

The Magento Quality Patches package is a dependency for the {{ site.data.var.mcp-prod }} and {{site.data.var.ct}} packages. To apply the latest patches, you must have [the latest version of {{ site.data.var.ct }}]({{site.baseurl}}/cloud/project/ece-tools-update.html) installed. The minimum required version of {{site.data.var.ct}} is 2002.1.2.

## View available patches and status

To view the list of available individual patches:

```bash
php ./vendor/bin/ece-patches status
```

Sample response:

```terminal
More detailed information about patches you can find on https://support.magento.com/
╔════════════════╤═════════════════════════════════════════════════╤══════════╤═════════════╤═════════════════════════════════╗
║ Id             │ Title                                           │ Type     │ Status      │ Details                         ║
╠════════════════╪═════════════════════════════════════════════════╪══════════╪═════════════╪═════════════════════════════════╣
║ MAGECLOUD-5069 │ FPC is getting disabled during deployments      │ Required │ Applied     │ Affected components:            ║
║                │                                                 │          │             │  - magento/module-page-cache    ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ MCLOUD-5650    │ Hold deployment config after reading from file  │ Required │ Applied     │ Affected components:            ║
║                │                                                 │          │             │  - magento/framework            ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ MCLOUD-5684    │ Pagination Not working - product_list_limit=all │ Required │ Applied     │ Affected components:            ║
║                │                                                 │          │             │  - magento/module-elasticsearch ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ MC-65837       │ Fix load balancer issue                         │Deprecated│ Applied     │ Recommended replacement: MC-1   ║
║                │                                                 │          │             │ Affected components:            ║
║                │                                                 │          │             │  - magento/framework            ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ BUNDLE-2554    │ Set Payment info bug                            │ Required │ Not applied │ Affected components:            ║
║                │                                                 │          │             │  - amzn/amazon-pay-module       ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ MC-1           │ Fixes issue 1                                   │ Optional │ Applied     │ Affected components:            ║
║                │                                                 │          │             │  - magento/module-cms           ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ MC-2           │ Fixes issue 2                                   │ Optional │ Not applied │ Affected components:            ║
║                │                                                 │          │             │  - magento/module-cms           ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ MC-3           │ Fixes issue 3                                   │ Optional │ Not applied │ Required patches:               ║
║                │                                                 │          │             │  - MC-2                         ║
║                │                                                 │          │             │ Affected components:            ║
║                │                                                 │          │             │  - magento/module-cms           ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ N/A            │ ../m2-hotfixes/MDVA_custom__2.3.5_ce.patch      │ Custom   │ N/A         │ Affected components:            ║
║                │                                                 │          │             │  - magento/module-framework     ║
╚════════════════╧═════════════════════════════════════════════════╧══════════╧═════════════╧═════════════════════════════════╝
Magento 2 Enterprise Edition, version 2.3.5.0
```

The status table contains the following types of information:

-  **Type**:
   -  `Optional`—All patches from the MQP package and the [Magento Cloud Patches]({{ site.baseurl }}/cloud/project/project-patch.html) package are optional for {{ site.data.var.ee }} and {{ site.data.var.ce }} installations. For {{ site.data.var.ece }}, all MQP patches are optional.
   -  `Required`—All patches from the {{ site.data.var.mcp-prod }} package are required for Cloud customers.
   -  `Deprecated`—The individual patch is marked as deprecated by Magento and we recommend reverting it if you have applied it. After you revert a deprecated patch, it will no longer be displayed in the status table.
   -  `Custom`—All patches from the 'm2-hotfixes' directory.

-  **Status**:
   -  `Applied`—The patch has been applied.
   -  `Not applied`—The patch has not been applied.
   -  `N/A`—The status of the patch cannot be defined due to conflicts.

-  **Details**:
   -  `Affected components`—The list of affected Magento modules.
   -  `Required patches`—The list of required patches (dependencies).
   -  `Recommended replacement`—The patch that is a recommended replacement for a deprecated patch.

## Apply a patch in a local environment

You can apply patches manually in a local environment and test them before you deploy.

{:.procedure}
To apply individual patches in a local development environment:

1. Add the 'QUALITY_PATCHES' variable to the `.magento.env.yaml` file and list the required patches underneath.

   ```yaml
   stage:
       build:
           QUALITY_PATCHES:
               - MCTEST-1002
               - MCTEST-1003
   ```

1. From the project root, apply the patches.

   ```bash
   php ./vendor/bin/ece-patches apply
   ```

   The `ece-patches apply` command applies patches in the following order:
   -  Required patches
   -  Optional individual patches
   -  Custom patches from the `/m2-hotfixes` directory

1. Clear the Magento cache.

   ```bash
   php ./bin/magento cache:clean
   ```

1. Test the patches, make any necessary changes to custom patches.

## Apply a patch in a Cloud environment

{:.bs-callout-warning}
We strongly recommend testing all patches in a Integration or Staging environments before deploying to the Production environment.

{:.procedure}
To apply patches in a Cloud environment:

1. Add the 'QUALITY_PATCHES' variable to the `.magento.env.yaml` file and list the required patches underneath.

   ```yaml
   stage:
       build:
           QUALITY_PATCHES:
               - MCTEST-1002
               - MCTEST-1003
   ```

   {:.bs-callout-info}
   After upgrading to a new version of Magento, you must re-apply patches if the patches are not included in the new version.

1. Commit and push the updated `.magento.env.yaml` file.

   ```bash
   git commit -m "Apply patch"
   ```

   ```bash
   git push origin <branch-name>
   ```

## Apply a custom patch

When you deploy, `{{ site.data.var.ct }}` applies all Magento patches and any custom patches that you add to the `/m2-hotfixes` directory in the Magento project root.

{:.bs-callout-info}
All patch file names must end with the `.patch` extension.

{:.procedure}
To apply and test a custom patch on a Cloud environment:

1. In the project root, create a directory called `m2-hotfixes` if it does not exist

   ```bash
   mkdir m2-hotfixes
   ```

1. Copy the patch file to the `/m2-hotfixes` directory.

1. Add, commit, and push code changes.

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "Apply patch"
   ```

   ```bash
   git push origin <branch-name>
   ```

   {:.bs-callout-info}
   Make sure to test all patches in a pre-production environment. For Magento Cloud, you can create new branches with the `magento-cloud environment:branch <branch-name>` CLI command.

## Apply patches to a non-Cloud project {#standalone}

Use the [Magento Quality Patches]({{ site.baseurl }}/guides/v2.4/comp-mgr/patching/mqp.html) package for {{ site.data.var.ce }} and {{ site.data.var.ee }} projects.

## Revert a patch in a local environment

You can revert all previously applied patches in a local development environment using the `ece-patches` CLI.

To revert all applied patches:

```bash
php ./vendor/bin/ece-patches revert
```

This command reverts all patches in the following order:

-  Reverts all applied custom patches from the /m2-hotfixes directory.
-  Reverts all applied optional individual patches.
-  Reverts all applied required patches.

## Logging

The Magento Quality Patches package logs all operations to the `<Magento_root>/var/log/patch.log` file.

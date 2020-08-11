---
group: cloud-guide
title: Apply patches
functional_areas:
  - Cloud
  - Upgrade
---

The [Magento Quality Patches](https://github.com/magento/quality-patches) and [{{ site.data.var.mcp-prod }}](https://github.com/magento/magento-cloud-patches) packages deliver Magento [individual patches]({{ site.baseurl }}/release/policy/#individual-patch), which improve the integration of all {{site.data.var.ee}} versions with Cloud environments and supports quick delivery of critical and custom fixes. You can use these packages to apply, revert, and view general information about all individual patches that are available for Magento.

{:.bs-callout-tip}
You can also use the [Magento Quality Patches]({{ site.baseurl }}/guides/v2.4/comp-mgr/patching.html#mqp) and [{{ site.data.var.mcp-prod }}](#standalone) packages as stand-alone packages for {{ site.data.var.ce }} and {{ site.data.var.ee }} projects. We recommend using the Magento Quality Patches package for non-Cloud projects.

When you deploy changes to the remote environment, `{{site.data.var.ct}}` uses `magento/quality-patches` and {{ site.data.var.mcp-package }} to check for pending patches and applies them automatically in the following order:

1. Apply required patches from Magento included in the {{ site.data.var.mcp-package }} package.
1. Apply selected Magento quality patches included in the Magento Quality Patches package.
1. Apply optional and custom patches in the `/m2-hotfixes` directory in alphabetical order by patch name.

{:.bs-callout-info}
When you update `{{ site.data.var.ct }}` or the {{ site.data.var.mcp-prod }} package, the latest required patches are applied automatically the next time you deploy your project. You cannot skip [required patches](https://github.com/magento/magento-cloud-patches/tree/develop/patches) during the deployment process.

You can also apply patches manually.

{:.bs-callout-info}
All patch file names must end with the `.patch` extension.

## Prerequisites

{% include cloud/note-upgrade.md %}

To apply the latest patches, [install the latest version of {{ site.data.var.ct }}]({{site.baseurl}}/cloud/project/ece-tools-update.html). The Magento Quality Patches package is a dependency for the {{ site.data.var.mcp }} and {{site.data.var.ct}} packages. It is installed or updated when you install or update the {{ site.data.var.ct }} package version.

{:.procedure}
To install the Magento Quality Patches package:

1. Add the `magento/quality-patches` Composer package to your `composer.json` file:

   ```bash
   composer require magento/quality-patches
   ```

1. Update your project dependencies:

   ```bash
   composer update
   ```

## View individual patches

You can list all available patches for your version of Magento using `{{ site.data.var.ct }}`.

To view the list of available individual patches:

```bash
php ./vendor/bin/ece-patches status
```

You will see output similar to the following:

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

   -  Optional—All individual patches from the MQP package and the [Magento Cloud Patches]({{ site.baseurl }}/cloud/project/project-patch.html) package are optional for {{ site.data.var.ee }} and {{ site.data.var.ce }} installations.
   -  Required—All individual patches from the {{ site.data.var.mcp-prod }} package are required for Cloud customers.
   -  Deprecated—The individual patch is marked as deprecated by Magento and we recommend reverting it if you have applied it. After you revert a deprecated patch, it will no longer be displayed in the status table.
   -  Custom—All patches from the 'm2-hotfixes' directory.

-  **Status**:

   -  Applied—The patch has been applied.
   -  Not applied—The patch has not been applied.
   -  N/A—The status of the patch cannot be defined due to conflicts.

-  **Details**:

   -  Affected components—The list of affected Magento modules.
   -  Required patches—The list of required patches (dependencies).
   -  Recommended replacement—The patch that is a recommended replacement for a deprecated patch.

## Apply a patch in a local environment

You can apply patches manually in a local environment and test them before you deploy.

{:.procedure}
To apply patches in a local environment:

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
   php ./vendor/bin/ece-tools patch
   ```

   Patches will be applied in the following order:

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
We strongly recommend testing all patches in a staging or development environment before deploying to production.

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

1. Commit and push the updated `.magento.env.yaml` file:

   ```bash
   git commit -m "Apply patch"
   ```

   ```bash
   git push origin <branch-name>
   ```

## Apply a custom patch

When you deploy, `{{ site.data.var.ct }}` applies all Magento patches and any custom patches that you add to the `/m2-hotfixes` directory in the Magento project root.

{:.procedure}
To apply and test a custom patch on a cloud environment:

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
   Make sure to test all patches in a pre-production environment.  For Magento Cloud, new branches can be created with `magento-cloud environment:branch <branch-name>`.

## Apply patches to a non-Cloud project {#standalone}

You can use {{ site.data.var.mcp-prod }} as a stand-alone package to apply Magento patches and hotfixes to a Magento project that is not deployed on the Cloud platform.

{:.bs-callout-tip}
You can also use the [Magento Quality Patches]({{ site.baseurl }}/guides/v2.4/comp-mgr/patching.html#mqp) package for {{ site.data.var.ce }} and {{ site.data.var.ce }} projects. We recommend using the Magento Quality Patches package for non-Cloud projects.

{:.procedure}
To use Magento Cloud Patches as a stand-alone package:

1. Add the magento-cloud-patches package to your `composer.json` file.

   ```bash
   composer require magento/magento-cloud-patches
   ```

1. From the project root, apply the patches.

   ```bash
   php ./vendor/bin/ece-tools patch
   ```

   This command applies Magento patches and any custom patches found in the `/m2-hotfixes` directory.

1. Clear the Magento cache.

   ```bash
   php ./bin/magento cache:clean
   ```

   You can clean the cache using the Magento Admin Cache Management.

1. Test the patches, and make any necessary changes to custom patches.

## Revert a patch to a local environment

You can revert all applied patches on a local environment and restore the codebase to a clean state.

To revert {{site.data.var.ece}} patches:

```bash
php ./vendor/bin/ece-patches revert
```

This command reverts all patches in the following order:

-  Reverts all applied custom patches from the /m2-hotfixes directory.
-  Reverts all applied Magento Quality patches.
-  Reverts all applied Magento Cloud patches.

## Logging

The Magento Quality Patch package logs all operations in the `<Magento_root>/var/log/patch.log` file.

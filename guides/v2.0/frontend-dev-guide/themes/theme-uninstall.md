---
group: frontend-developer-guide
subgroup: A_Themes
title: Uninstall a storefront theme
menu_title: Uninstall a storefront theme
menu_order: 2
functional_areas:
  - Frontend
  - Theme
---

## What's in this topic

This topic describes how to uninstall a {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} in Magento 2.

The way a theme should be uninstalled is defined by two factors:

* the way the theme was added: manually added (installed or created), installed as {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}composer{% endglossarytooltip %} package or as an {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %}.
* the way Magento was installed: [using the source files from GitHub]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-clone.html) or [using Composer]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-composer.html).

The following sections describe the flow for uninstalling themes in each case.

## Prerequisites

1. [Set your Magento application to the developer or default mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html).
2. Make sure that the theme is not applied on the storefront. To do this, in the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} panel navigate to **STORES** > **Settings** > **Configuration**>**Design** and make sure that your custom theme is not applied for any {% glossarytooltip ca5a9ff1-8182-4fc4-a34b-9b3f831dbf3f %}store view{% endglossarytooltip %}.
2. Make sure that the theme is not defined as a parent for any registered theme. To do this, in the Admin panel, navigate to **Content** > **Design** > **Themes**. Make sure that your theme is not mentioned in the **Parent Theme** column. If it is mentioned, you need to uninstall the child theme first.

## Uninstall a manually added theme

If you created or manually installed the theme, it does not matter how you installed Magento.

To uninstall a manually added theme:

1. Navigate to the vendor directory where the theme was installed. This directory should be: `<Magento root dir>/app/design/frontend/<VendorName>`.
2. Remove the theme directory.
3. Remove the theme record from database. If you are using MySQL, run the following command to do this:

```
mysql -u <user> -p -e "delete from <dbname>.theme where theme_path ='<Vendor>/<theme>' AND area ='frontend' limit 1"
```
Where:

- `<user>`: your Magento database username
- `<dbname>`: your Magento database name
- `<Vendor>/<theme>`: relative path to the theme directory

## Uninstall a theme package

The flow for uninstalling a theme that is {% glossarytooltip b57038ca-7906-4fce-a00f-d614b81d5301 %}Composer package{% endglossarytooltip %} is different, depending on the way your Magento instance was installed.  

### Uninstall a theme package if Magento was installed using Composer

If both the theme and the Magento instance were installed using Composer, you can use a special CLI command. Follow the instructions from the [Uninstall themes Composer package]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html) topic.

### Uninstall a theme package if Magento was installed by cloning the repository

To uninstall a theme Composer package if your Magento instance was installed by cloning the git repository, you can also uninstall it using the CLI command, but having removed it from the list of dependencies first.

Take the following steps:

1. Open the `<Magento root dir>/composer.json` file.
2. Find a line with a reference to theme package and delete it. The reference would look like following:

   ```
   ...
   "require": {
    ...
       "<vendor>/<theme-name>": "<version>"
   },
   ...
   ```

3. To update the project dependencies, run:  

   ```
    composer update
   ```

4. Use the `magento theme:uninstall` CLI command as described in the [Uninstall themes Composer package]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html) topic.

{: .bs-callout .bs-callout-info }
You can use the Composer command to remove the dependency, but in that case, you must delete the theme record from the database manually.

## Uninstall a theme extension

If the theme was installed as an extension, you can uninstall it using one of the following flows:

* the same way as theme Composer packages are uninstalled, see the [Uninstall a theme package](#uninstall-a-theme-package) section for details.
* using the Component Manager.     

To uninstall a theme extension using the Component Manager:

1. In the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} Panel, navigate to **System** > **Web Setup Wizard** > **Component Manager**.
2. In the **Actions** column, click **Select** > **Uninstall** in the theme record. See the following image for illustration.

![extension_manager_uninstall_theme]({{ site.baseurl }}/common/images/fdg/uninstall_extension.png){:width="630px"}

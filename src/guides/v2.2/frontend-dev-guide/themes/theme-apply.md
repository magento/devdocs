---
group: frontend-developer-guide
title: Apply and configure a storefront theme
functional_areas:
  - Frontend
  - Theme
---

## What's in this topic {#theme-apply-overview}

The topic describes how to apply a [theme](https://glossary.magento.com/theme) for your store. This is a required step if you want a theme to be used on a [storefront](https://glossary.magento.com/storefront).
Also, it gives information how to add a theme independent logo for your store.

## Prerequisites

Make sure that you [set]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer [mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html).

## Apply a theme {#theme-apply-apply}

After you [add your theme to the file system]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html), you can apply it to your store. You apply a theme in [Admin](https://glossary.magento.com/admin).

To apply a theme:

1. In Admin, go to **CONTENT** > **Design** > **Configuration**. A Design Configuration page opens. It contains a grid with the available configuration scopes. For example:

   ![Design Configuration page]

1. In the configuration record corresponding to your store view, click **Edit**. The page with design configuration for the selected scope opens. For example:

   ![Design Configuration page for a particular scope]

1. On the **Default Theme** tab, in the **Applied Theme** drop-down, select your newly created theme.
1. Click **Save Configuration**.
1. If caching is enabled, [clear the cache](#theme-apply-clear).
1. To see your changes applied, reload the storefront pages.

## Add a design exception {#theme-apply-except}

Design exceptions enable you to specify an alternative theme for particular user-agents, instead of creating a separate store views for them.
To add a design exception:

1. In Admin, go to **CONTENT** > **Design** > **Configuration**
1. In the configuration record corresponding to your store view, click **Edit**.
1. On the **Design Rule** tab, click **Add New User Agent Rule**.
1. In the **Search String** box specify the user-agent using either normal strings or regular expressions (PCRE). In the **Theme Name** drop-down list select the theme to be used for matching agent.
1. Click **Save Configuration** or **Save and Continue**.
1. If caching is enabled, [clear the cache](#theme-apply-clear).
1. To see your changes applied, reload the storefront pages.

## Add a theme-independent logo {#theme-apply-logo}

You might want to set a permanent store logo that displays on the storefront no matter what theme is applied.
To add a permanent theme-independent logo:

1. In Admin, go to **CONTENT** > **Design** > **Configuration**
1. In the configuration record corresponding to your store view, click **Edit**.
1. Expand the **Header** tab.
1. In the **Logo Image** field browse to the logo file saved in your file system.
1. Upload the file. Allowed file types include .png, .gif, .jpg, and .jpeg. To add an .svg logo, see [Declaring theme logo]({{page.baseurl}}/frontend-dev-guide/themes/theme-create.html#logo_declare).
1. Optionally, specify the desired width, height, and the alternative text for the logo in the corresponding fields.
1. Click **Save Configuration** or **Save and Continue**.
1. If caching is enabled, [clear the cache](#theme-apply-clear).
1. To see your changes applied, reload the storefront pages.

The logo you add here is stored in the `/pub/media/logo/default/` directory.

{:.bs-callout-warning}
To delete the permanent logo, go to the same location, and click the "Delete image" icon in the bottom left corner of the logo preview, then click the "Save Configuration button".

## Clear the cache {#theme-apply-clear}

If caching is enabled in Magento Admin, you must clear the cache after you apply the theme, add a design exception, add a logo, and perform other tasks.

A system message notifies you that invalidated cache types must be refreshed.

1. Click **System** > **Cache Management**.
1. Clear the invalid cache types.

## Troubleshooting (if the changes do not get applied)

If the changes you configure in the Admin are not applied after you clear the cache and reload the page, delete all files in the `pub/static/frontend` and `var/view_preprocessed` directories, then reload the pages. You can delete the files manually or run the `grunt clean:<theme_name>` command in CLI. For details about using Grunt in Magento see [Installing and configuring Grunt]({{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html#prerequisites).

[Design Configuration page]: {{site.baseurl}}/common/images/design_conf1.png
[Design Configuration page for a particular scope]: {{site.baseurl}}/common/images/fdg/applied_theme.png

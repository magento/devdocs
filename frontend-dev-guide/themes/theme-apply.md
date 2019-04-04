---
group: frontend-developer-guide
subgroup: A_Themes
title: Apply and configure a storefront theme
menu_title: Apply and configure a storefront theme
menu_order: 4
functional_areas:
  - Frontend
  - Theme
---

## What\'s in this topic   {#theme-apply-overview}

The topic describes how to apply a {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} for your store. This is a required step if you want a theme to be used on a {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}.
Also, it gives information how to add a theme independent logo for your store.

## Prerequisites

Make sure that you [set]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer [mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html).

## Apply a theme {#theme-apply-apply}

After you <a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html">add your theme to the file system</a>, you can apply it to your store. You apply a theme in {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %}.

To apply a theme:

2. In Admin, go to **Stores** > **Settings** > **Configuration** > **Design**.
3. In the **Store View** drop-down field, select the {% glossarytooltip ca5a9ff1-8182-4fc4-a34b-9b3f831dbf3f %}store view{% endglossarytooltip %} where you want to apply the theme.
4. On the **Design Theme** tab, select your newly created theme in the **Design Theme** drop-down.
5. Click **Save Config**.
6. If caching is enabled, <a href="#theme-apply-clear">clear the cache</a>.
6. To see your changes applied, reload the storefront pages.

## Add a design exception {#theme-apply-except}

Design exceptions enable you to specify an alternative theme for particular user-agents, instead of creating a separate store views for them.
To add a design exception:

2. In Admin, go to **Stores** > **Settings** > **Configuration** > **Design**.
3. In the **Scope** drop-down field, select your {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %}.
4. On the **Design Theme** tab next to **User-Agent Exceptions** click **Add**.
5. In the **Search String** box specify the user-agent using either normal strings or regular expressions (PCRE). In the **Design Theme** drop-down list select the theme to be used for matching agent.
6. Click **Save Config**.
7. If caching is enabled, <a href="#theme-apply-clear">clear the cache</a>.
6. To see your changes applied, reload the storefront pages.

## Add a theme-independent logo {#theme-apply-logo}

You might want to set a permanent store logo, that displays on the storefront no matter what theme is applied.
To add a permanent theme-independent logo:

1. In the Admin panel, go to **Stores** > **Settings** > **Configuration** > **Design**.
2. In the **Scope** drop-down, select the store view.
3. In the **Design** section of the General configuration, expand the **Header** tab.
4. In the **Logo Image** field browse to the logo file saved in your file system.
6. Upload the file.
7. Click **Save Config**.
7. If caching is enabled, <a href="#theme-apply-clear">clear the cache</a>.
8. To see your changes applied, reload the storefront pages.

The logo you add here is stored in the `/pub/media/logo/default/` directory.

{: .bs-callout .bs-callout-warning }
To delete the permanent logo, go to the same location, select the checkbox next to the logo image, and click **Delete**.

## Clear the cache {#theme-apply-clear}

If caching is enabled in Magento Admin, you must clear the {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} after you apply the theme, add a design exception, add a logo, and perform other tasks.

A system message notifies you that invalidated cache types must be refreshed.

1.	Click **System** > **Cache Management**.
2.	Clear the invalid cache types.

## Troubleshooting (if the changes do not get applied)

If the changes you configure in the Admin are not applied after you clear the cache and reload the page, try the following:

- Delete all files in the `pub/static/frontend` and `var/view_preprocessed` directories, then reload the pages. You can delete the files manually or run the `grunt clean:<theme_name>` command in CLI. For details about using Grunt in Magento see [Installing and configuring Grunt]({{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html#grunt_prereq).

- In your Magento database, in the `theme` table, check if the `type` value for your custom theme is "0". If it is "1" or "2", change it to "0". You can use a database tool such as [phpMyAdmin]({{ page.baseurl }}/install-gde/prereq/optional.html#install-optional-phpmyadmin) or do it manually from the command line.

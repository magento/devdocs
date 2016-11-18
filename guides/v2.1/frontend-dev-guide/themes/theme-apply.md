---
layout: default
group: fedg
subgroup: A_Themes
title: Apply and configure a storefront theme
menu_title: Apply and configure a storefront theme
version: 2.1
menu_order: 4
github_link: frontend-dev-guide/themes/theme-apply.md
---

<h2 id="theme-apply-overview">What's in this topic</h2>

The topic describes how to apply a theme for your store. This is a required step if you want a theme to be used on a storefront. 
Also, it gives information how to add a theme independent logo for your store.

**Contents**:



## Prerequisites 

Make sure that you [set](#{{site.gdeurl21}}config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer [mode]({{site.gdeurl21}}config-guide/bootstrap/magento-modes.html).


## Apply a theme {#theme-apply-apply}
After you <a href="{{site.gdeurl21}}frontend-dev-guide/themes/theme-create.html">add your theme to the file system</a>, you can apply it to your store. You apply a theme in Admin.

To apply a theme:

1. In Admin, go to **CONTENT** > **Design** > **Configuration**. A Design Configuration page opens. It contains a grid with the available configuration scopes. For example: <br><img src="{{site.baseurl}}common/images/design_conf1.png" alt="Design Configuration page">
2. In the configuration record corresponding to your store view, click **Edit**.
4. On the **Default Theme** tab, in the **Applied Theme** drop-down, select your newly created theme.
5. Click **Save**.
6. If caching is enabled, <a href="#theme-apply-clear">clear the cache</a>. 
6. To see your changes applied, reload the store front pages.


## Add a design exception {#theme-apply-except}
Design exceptions enable you to specify an alternative theme for particular user-agents, instead of creating a separate store views for them.
To add a design exception:


2. In Admin, go to **CONTENT** > **Design** > **Configuration**
2. In the configuration record corresponding to your store view, click **Edit**. 
4. On the **Design Rule** tab, click **Add New User Agent Rule**.
5. In the **Search String** box specify the user-agent using either normal strings or regular exceptions (PCRE). In the **Theme Name** drop-down list select the theme to be used for matching agent.
6. Click **Save**.
7. If caching is enabled, <a href="#theme-apply-clear">clear the cache</a>. 
6. To see your changes applied, reload the store front pages.


## Add a theme-independent logo {#theme-apply-logo}
You might want to set a permanent store logo that displays on the store front no matter what theme is applied.
To add a permanent theme-independent logo:

2. In Admin, go to **CONTENT** > **Design** > **Configuration**
2. In the configuration record corresponding to your store view, click **Edit**. 
3. Expand the **Header** tab.
4. In the **Logo Image** field browse to the logo file saved in your file system.
6. Upload the file.
5. Optionally, specify the desired width, height, and the alternative text for the logo in the corresponding fields.
7. Click **Save**.
7. If caching is enabled, <a href="#theme-apply-clear">clear the cache</a>. 
8. To see your changes applied, reload the store front pages.

The logo you add here is stored in the `/pub/media/logo/default/` directory.

<div class="bs-callout bs-callout-warning" id="warning">
  <p>To delete the permanent logo, go to the same location, and click the "Delete image" icon in the bottom left corner of the logo preview.</p>
</div>

## Clear the cache {#theme-apply-clear}
If caching is enabled in Magento Admin, you must clear the cache after you apply the theme, add a design exception, add a logo, and perform other tasks.

A system message notifies you that invalidated cache types must be refreshed.

1.	Click **System** > **Cache Management**.
2.	Clear the invalid cache types.

## Troubleshooting (if the changes do not get applied)

If the changes you configure in the Admin are not applied after you clear the cache and reload the page, delete all files in the `pub/static/frontend` and `var/view_preprocessing` directories, then reload the pages. You can delete the files manually or run the `grunt clean:<theme_name>` command in CLI. For details about using Grunt in Magento see [Installing and configuring Grunt]({{site.gdeurl21}}frontend-dev-guide/css-topics/css_debug.html#grunt_prereq).



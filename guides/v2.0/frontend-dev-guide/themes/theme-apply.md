---
layout: default
group: fedg
subgroup: A_Themes
title: Apply and configure a theme in Admin
menu_title: Apply and configure a theme in Admin
menu_order: 4
github_link: frontend-dev-guide/themes/theme-apply.md
redirect_from: /guides/v1.0/frontend-dev-guide/themes/theme-apply.html
---

<h2 id="theme-apply-overview">What's in this topic</h2>

The topic describes how to apply a theme for your store. This is a required step if you want a theme to be used on a storefront. 
Also, it gives information how to add a theme independent logo for your store.

**Contents**:

* TOC
{:toc}

<!--
<h2 id="theme-apply-cache">Disable the system cache</h2>

When Magento system cache is enabled, you must clear it each time to see your design changes reflected on a store front. To avoid this, disable certain system cache types while you make design changes.
To do this:

1. In Admin, go to **System** > **Tools** > **Cache** **Management**.
2. Select the Layouts, Blocks HTML output, View files fallback, View files pre-processing and Page Cache cache types.
2. In **Actions** select **Disable** and click **Submit**. The selected cache types show a red bar in the status area that reads DISABLED.
<p><img src="{{ site.baseurl }}common/images/cache.png" alt="Cache types disabled"></p>


<div class="bs-callout bs-callout-info" id="info">
  <p>If you apply a theme a second or subsequent time, you might need to manually clear the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;</code> directory. This directory stores the <a href="{{site.gdeurl}}architecture/view/static-process.html#publish-static-view-files" target="_blank">published</a> <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-structure.html#theme-structure-pub" target="_blank">static files</a>.</p>
</div>

 -->

## Prerequisites 

Make sure that you [set](#{{site.gdeurl}}config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer [mode]({{site.gdeurl}}config-guide/bootstrap/magento-modes.html).


## Apply a theme {#theme-apply-apply}
After you <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-create.html">add your theme to the file system</a>, you can apply it to your store. You apply a theme in Admin.

To apply a theme:

1. In Admin go to **CONTENT** > **Design** > **Themes**. Make sure your theme appears in the theme list.
2. Go to **Stores** > **Configuration** > **Design**.
3. In the **Scope** drop-down field, select the store view where you want to apply the theme.
4. On the **Design Theme** tab, select your newly created theme in the **Design Theme** drop-down.
5. Click **Save Config**.
6. If caching is enabled, <a href="#theme-apply-clear">clear the cache</a>. 
6. To see your changes applied, reload the store front pages.


## Add a design exception {#theme-apply-except}
Design exceptions enable you to specify an alternative theme for particular user-agents, instead of creating a separate store views for them.
To add a design exception:

1. In the Admin panel go to **CONTENT** > **Design** > **Themes** and make sure your theme appeared in the list of available themes.
2. Go to **Stores** > **Configuration** > **Design**.
3. In the **Scope** drop-down field, select your website.
4. On the **Design Theme** tab next to **User-Agent Exceptions** click **Add**.
5. In the **Search String** box specify the user-agent using either normal strings or regular exceptions (PCRE). In the **Design Theme** drop-down list select the theme to be used for matching agent.
6. Click **Save Config**.
7. If caching is enabled, <a href="#theme-apply-clear">clear the cache</a>. 
6. To see your changes applied, reload the store front pages.


## Add a theme-independent logo {#theme-apply-logo}
You might want to set a permanent store logo, that displays on the store front no matter what theme is applied.
To add a permanent theme-independent logo:

1. In the Admin panel, go to **Stores** > **Configuration** > **Design**.
2. In the **Scope** drop-down, select the store view.
3. In the **Design** section of the General configuration, expand the **Header** tab.
4. In the **Logo Image** field browse to the logo file saved in your file system.
6. Upload the file.
7. Click **Save Config**.
7. If caching is enabled, <a href="#theme-apply-clear">clear the cache</a>. 
8. To see your changes applied, reload the store front pages.

The logo you add here is stored in the `/pub/media/logo/default/` directory.

<div class="bs-callout bs-callout-warning" id="warning">
  <p>To delete the permanent logo, go to the same location, select the check box next to the logo image, and click <b>Delete</b>.</p>
</div>

## Clear the cache {#theme-apply-clear}
If caching is enabled in Magento Admin, you must clear the cache after you apply the theme, add a design exception, add a logo, and perform other tasks.

A system message notifies you that invalidated cache types must be refreshed.

1.	Click **System** > **Cache Management**.
2.	Clear the invalid cache types.

## Troubleshooting (if the changes do not get applied)

If the changes you configure in the Admin are not applied after you clear the cache and reload the page, delete all files in the `pub/static/frontend` and `var/view_preprocessed` directories, then reload the pages. You can delete the files manually or run the `grunt clean:<theme_name>` command in CLI. For details about using Grunt in Magento see [Installing and configuring Grunt]({{site.gdeurl}}frontend-dev-guide/css-topics/css_debug.html#grunt_prereq).


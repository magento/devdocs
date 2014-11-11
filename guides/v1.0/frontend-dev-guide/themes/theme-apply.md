---
layout: howtom2devgde_chapters_fedg
title: Apply and Configure Theme in Admin
---

<h1 id="theme-apply">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}frontend-dev-guide/themes/theme-apply.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="theme-apply-apply">Disable system cache</h2>

When Magento system cache is enabled, you need to refresh it each time to see your design changes reflected on a store front. To avoid this, you can disable frontend related system cache types. 
To do this:

1. In the Admin panel, go to **System** > **Tools** > **Cache** **Management**. 
2. Select the cache types: Layouts, Blocks HTML output, View files fallback, View files pre-processing and Page Cache.
2. In Actions select **Disable** and click **Submit**. 
3. Each of the selected cache types should have a red bar in the status area that reads DISABLED.
<p><img src="{{ site.baseurl }}common/images/cache.png" alt="Cache types disabled"></p>

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
<p>Depending on what you are attempting to achieve, you may need to disable additional cache types or even manually delete cache files. If required for a certain task, the corresponding article of this Guide mentions it.</p></span>
</div>


<h2 id="theme-apply-apply">Apply a theme in the Admin</h2>
After you added your theme in the file system <!--ADDLINK -->, you can apply it to your store. This is done in the Admin panel. 

To apply a newly added theme:

1. In the Admin panel go to **CONTENT** > **Design** > **Themes** and make sure your theme appeared in the list of available themes. If it is not displayed in the grid, probably your theme.xml is not correct. 
2. Go to **Stores** > **Configuration** > **Design**.
3. In the **Scope** dropdown in the upper-left corner, select the store view where you want to apply the theme.
4. On the **Design Theme** tab, select your newly created theme in the **Design Theme** drop-down.
5. Click **Save Config**.
6. Reload the store front pages to see changes applied.

If caching is enabled in your Magento Admin, after applying the theme you need to drop cache (Magento will notify you by showing a system message). Go to **System** > **Cache Management**, and refresh the cache types that are invalidated.
<!--ADDLINK-->

<h2 id="theme-apply-logo">Add a logo through the Admin (optional)</h2>
You can add your store logo, which will be used on the storefront no matter what theme is applied. To do this :

1. In the Admin panel, go to **Stores** > **Configuration** > **Design**.
2. In the **Scope** dropdown in the upper-left corner, select the store view where you want to apply the theme.
3. In the **Design** section of General configuration, expand the **Header** tab.
4. In the **Logo Image** field, click the button for browsing a file.
5. Browse to the logo file saved on your local machine.
6. Upload the file.
7. Click **Save Config**.

If caching is enabled in your Magento Admin, after adding a logo you need to drop cache (Magento will notify you by showing a system message). Go to <b>System</b> > <b>Cache Management</b>, and refresh the cache types that are invalidated.
<!--ADDLINK-->

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
<p>If you add a logo through the Admin panel, it is only stored in your store images directory, but not in your theme directory.</p></span>
</div>


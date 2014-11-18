---
layout: howtom2devgde_chapters_fedg
title: Apply and Configure Theme in Admin
---

<h1 id="theme-apply">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}frontend-dev-guide/themes/theme-apply.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="theme-apply-overview">Overview</h2>
The article talks about how to apply a theme for your store, and also describes the related procedures you might need to perform, like disabling cache and adding a theme-independent logo. 
<h2 id="theme-apply-apply">Disable system cache</h2>

When Magento system cache is enabled, you need to refresh it each time to see your design changes reflected on a store front. To avoid this, you can disable frontend related system cache types for the time you make design changes. 
To do this:

1. In the Admin panel, go to **System** > **Tools** > **Cache** **Management**. 
2. Select the cache types: Layouts, Blocks HTML output, View files fallback, View files pre-processing and Page Cache.
2. In **Actions** select **Disable** and click **Submit**. 
3. Each of the selected cache types should have a red bar in the status area that reads DISABLED.
<p><img src="{{ site.baseurl }}common/images/cache.png" alt="Cache types disabled"></p>


<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>If you apply a theme not for the first time (say, you have first applied a custom My_theme, then changed to Blank, and then apply My_theme with certain changes), you might need to clear manually the <code>pub/static/frontend/&lt;Vendor&gt;/&lt;theme&gt;</code> directory, where <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-structure.md">static files</a> theme are <a href="{{site.gdeurl}}architecture/view/static-process.html">published</a> to be web-accessible.</p></span>
</div>


<h2 id="theme-apply-apply">Apply a theme in the Admin panel</h2>
After you added your theme in the file system<!--ADDLINK -->, you can apply it to your store. This is done in the Admin panel. 

To apply a newly added theme:

1. In the Admin panel go to **CONTENT** > **Design** > **Themes** and make sure your theme appeared in the list of available themes. 
2. Go to **Stores** > **Configuration** > **Design**.
3. In the **Scope** drop-down field in the upper-left corner, select the store view where you want to apply the theme.
4. On the **Design Theme** tab, in the **Design Theme** drop-down select your newly created theme.
5. Click **Save Config**.
6. Reload the store front pages to see changes applied.

If caching is enabled in your Magento Admin panel, after applying the theme you need to drop cache (Magento will notify you by showing a system message). Go to **System** > **Cache Management**, and refresh the cache types that are invalidated.
<!--ADDLINK-->

<h2 id="theme-apply-except">Add a design exception</h2>
Design exceptions allow you to specify an alternative theme for particular user-agents, instead of creating a separate store views for them.
To configure a special theme to be applied:

1. In the Admin panel go to **CONTENT** > **Design** > **Themes** and make sure your theme appeared in the list of available themes. 
2. Go to **Stores** > **Configuration** > **Design**.
3. In the **Scope** drop-down field in the upper-left corner, select your website.
4. On the **Design Theme** tab next to **User-Agent Exceptions** click **Add**.
5. In the **Search String** specify the user-agent using either normal strings or regular exceptions (PCRE), in the **Design Theme** drop-down list select the theme to be used for matching agent.
6. Click **Save Config**.

If caching is enabled in your Magento Admin, after applying the theme you need to drop cache (Magento will notify you by showing a system message). Go to **System** > **Cache Management**, and refresh the cache types that are invalidated.


<h2 id="theme-apply-logo">Add a theme-independent logo</h2>
You might want to set a permanent store logo, do be displayed on the store front no matter what theme is applied.
To add a permanent theme-independent logo:

1. In the Admin panel, go to **Stores** > **Configuration** > **Design**.
2. In the **Scope** dropdown in the upper-left corner, select the storeview.
3. In the **Design** section of the General configuration, expand the **Header** tab.
4. In the **Logo Image** field, click the button for browsing a file.
5. Browse to the logo file saved in your file system.
6. Upload the file.
7. Click **Save Config**.

The logo you add here is stored in the `/pub/media/logo/default/` directory. 


If caching is enabled in your Magento Admin panel, after adding a logo you need to drop cache (Magento will notify you by showing a system message). Go to <b>System</b> > <b>Cache Management</b>, and refresh the cache types that are invalidated.
<!--ADDLINK-->


<div class="bs-callout bs-callout-warning" id="warning">
  <img src="{{ site.baseurl }}common/images/icon_tip.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>To delete the permanent logo, go to the same location, select the check box next to the logo image, and click <b>Delete</b>.  </p></span>
</div>





---
layout: default
group: fedg
subgroup: E_rwd
title: JavaScript in Magento responsive design
menu_title: JavaScript in Magento responsive design
menu_order: 3
github_link: frontend-dev-guide/responsive-web-design/rwd_js.md
---

<h2>Overview</h2>

In Magento default themes, JavaScript is used to relocate certain elements and change their behavior depending on the <a href="{{site.gdeurl}}frontend-dev-guide/responsive-web-design/rwd_overview.html" target="_blank">breakpoint</a>.

This topic describes the scripts, and provides instructions how to use them in your custom theme.

<h2>JavaScript for responsiveness in the Blank theme</h2>

The Blank theme uses the following scripts to responsively relocate page elements by a <a href="{{site.gdeurl}}frontend-dev-guide/responsive-web-design/rwd_overview.html#fedg_rwd_terms" target="_blank">breakpoint</a>:

<ul>
<li><a href="{{site.mage2000url}}app/design/frontend/Magento/blank/web/js/responsive.js" target="_blank"><code>responsive.js</code></a></li>
<li><a href="{{site.mage2000url}}/lib/web/mage/menu.js" target="_blank"><code>menu.js</code></a></li>

<li><a href="https://github.com/paulirish/matchMedia.js/" target="_blank"><code>matchMedia.js</code></a>, used by <code>responsive.js</code> and <code>menu.js</code></li>
</ul>

The script files are located in the file system as follows:
<pre>
├── app/design/frontend/Magento/blank/web/js/
    ├── responsive.js
├── lib/web/
    ├── matchMedia.js
    ├── mage/
	    ├── menu.js
</pre>

See one of the following sections for more information:

*	<a href="#fedg_rwd_js_resp">responsive.js</a>
*	<a href="#fedg_rwd_js_nav">menu.js</a>


<h2 id="fedg_rwd_js_resp">responsive.js</h2>

The <code>responsive.js</code> script implements specific responsive functions for the Blank and Luma themes. To manipulate JavaScript for the desktop or mobile viewports, <code>responsive.js</code> calls the <code>mediaCheck()</code> anonymous function from <code>matchMedia.js</code>.


The <code>mediaCheck</code> call follows:

<pre>
 /*...*/
    mediaCheck({
        media: '(min-width: 768px)',
        // Switch to Desktop Version
        entry: function () {
            /* The function which toggles page elements from desktop to mobile mode is called here */
        },
        // Switch to Mobile Version
        exit: function () {
            /* The function which toggles page elements from mobile to desktop mode is called here*/
        }
    }); /*...*/

</pre>


In <code>responsive.js</code>, you can see how the checkout progress is toggled from the mobile to the desktop version. For the mobile viewport, the checkout progress block on the checkout page is moved by CSS to be displayed under the checkout steps (for the desktop, it is displayed on the left-hand side), and it becomes a toggled block by means of JavaScript. By default, the checkout progress information is hidden in the “Your Checkout Progress” section and it becomes visible after you click it.



<h2 id="fedg_rwd_js_nav">menu.js</h2>


In a mobile viewport, on the 640px breakpoint, <code>menu.js</code> changes the navigation menu look and behavior the following way: 
<ul>
<li>Category menu items are not displayed, but are accessible after clicking the "menu" icon.</li>
<li>The behaviour of a category link depends on whether the category has sub-categories:
<ul>
<li>If sub-categories exist, the category link behaves as collapsible block. Clicking a category link does not redirect to the category page immediately. Instead it opens a list of sub-categories, including the "All category products" option. </li>
<li>If there are no sub-categories, the category link behaves as usual.</li>
</ul>
</li>
</ul>

The following image illustrates the mobile-view navigation menu.


<img style="border: 1px solid #ABABAB" src="{{site.baseurl}}common/images/js_rwd_menu.png">


<h2 id="rwd_js_reuse">Re-using Magento scripts in your theme</h2>

You can use the <code>menu.js</code>, <code>responsive.js</code> and <code>matchMedia.js</code> to add responsive behavior in your custom theme. 
If your theme inherits from Blank, you do not even need to additionally include the script files in your theme.

In other case, to be able to use the scripts, you need to include them in the <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/Magento_Theme/layout/default_head_blocks.xml</code> file as described in <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-manage.html#layout_markup_css" target="_blank">Add Javascript and CSS</a>. 

If including <code>responsive.js</code>, you also need to copy the file itself to your <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/web/js/</code> directory. <code>matchMedia.js</code> and <code>menu.js</code> are located in the library, and can be included from its original location.

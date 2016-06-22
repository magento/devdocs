---
layout: default
group: fedg
subgroup: E_rwd
title: JavaScript in Magento responsive design
menu_title: JavaScript in Magento responsive design
menu_order: 3
version: 2.0
github_link: frontend-dev-guide/responsive-web-design/rwd_js.md
redirect_from: /guides/v1.0/frontend-dev-guide/responsive-web-design/rwd_js.html
---

<h2>What's in this topic</h2>

This topic describes the JavaScript used in Magento out-of-the-box Blank and Luma themes to relocate certain elements and change their behavior depending on the <a href="{{page.baseurl}}frontend-dev-guide/responsive-web-design/rwd_overview.html#fedg_rwd_terms" target="_blank">breakpoint</a>.


<h2>Scripts general overview</h2>

The Blank and Luma themes use the following scripts to responsively relocate page elements by breakpoint:

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

The <code>responsive.js</code> script implements specific responsive functions for the Blank and Luma themes. To manipulate JavaScript for the desktop or mobile view, <code>responsive.js</code> calls the <code>mediaCheck()</code> anonymous function from <code>matchMedia.js</code>.


The <code>mediaCheck</code> call looks as follows:

{%highlight js%}
 /*...*/
    mediaCheck({
        media: '(min-width: 768px)',
        // Switch to Desktop Version
        entry: function () {
            /* The function that toggles page elements from desktop to mobile mode is called here */
        },
        // Switch to Mobile Version
        exit: function () {
            /* The function that toggles page elements from mobile to desktop mode is called here*/
        }
    }); /*...*/

{%endhighlight js%}


For example, <code>responsive.js</code> changes the view of the checkout progress block on the checkout page:
<ul>
 <li>For the desktop view, the checkout progress block is permanently displayed on the left-hand side.</li>
<li>For the mobile view, it is moved by CSS to be displayed under the checkout steps. <code>responsive.js</code> makes it a toggled block: by default, the checkout progress information is hidden in the <b>Your Checkout Progress</b> section and it is visible after you click it.</li>
</ul>


<h2 id="fedg_rwd_js_nav">menu.js</h2>


In a mobile view, on the 768px breakpoint, <code>menu.js</code> changes the navigation menu look and behavior the following way: 
<ul>
<li>Category menu items are not displayed, but are accessible after clicking the menu icon.</li>
<li>The behavior of a category link depends on whether the category has sub-categories:
<ul>
<li>If sub-categories exist, the category link behaves as collapsible block. Clicking a category link does not redirect to the category page immediately. Instead it opens a list of sub-categories, including the <b>All category products</b> option. </li>
<li>If there are no sub-categories, the category link behaves as usual.</li>
</ul>
</li>
</ul>

The following image illustrates the mobile-view navigation menu.


<img style="border: 1px solid #ABABAB" src="{{site.baseurl}}common/images/js_rwd_menu.png">


<h2 id="rwd_js_reuse">Re-using Magento scripts in your theme</h2>

You can use the <code>menu.js</code>, <code>responsive.js</code> and <code>matchMedia.js</code> to add responsive behavior in your custom theme. 
If your theme inherits from Blank or Luma, you do not even need to additionally include the script files in your theme.

If your theme does not inherit from Blank or Luma, to be able to use the scripts, you must configure RequireJS for your theme.

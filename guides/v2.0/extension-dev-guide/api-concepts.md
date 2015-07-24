---
layout: default
group: extension-dev-guide
subgroup: 6_Module Development
title: PHP Developer Guide
menu_title: Public Interfaces
menu_order: 3
github_link: extension-dev-guide/api-concepts.md
redirect_from: /guides/v1.0/extension-dev-guide/api-concepts.html
---
##{{page.menu_title}}

<h2 id="public-interface">What is a public interface?</h2>
<p>A <i>public interface</i> is a set of code that third-party developers can call, implement, or pluginize. Magento guarantees that this code will not change in subsequent releases without a major version change.</p>
<p>Public interfaces for a module reside in the <code>Api</code> folder for a module. For example, the public interfaces for the <code>Customer</code> module reside in the <code>app/code/Magento/Customer/Api</code> folder.
   Third-party developers should use only these interfaces.
   You can use other interfaces but Magento does not guarantee that other interface will not be modified or removed in subsequent releases.
</p>
<h2 id="api-definition">What is an API?</h2>
<p>An application programming interface (API) is a set of interfaces and their implementations that a module provides to other modules.</p>
<h3 id="api-types">API types</h3>
<p>The following items are considered types of APIs:</p>
<ul>
   <li>Directory structure</li>
   <li>Configuration files structure</li>
   <li>Events</li>
   <li>Client API</li>
   <li>Provider API (SPI)</li>
</ul>
<p>Directory structure and configuration file structure are types of APIs because extension developers use them. Developers write configurations, places their static files in specified folders and so if configuration file structure or directory structure changes in subsequent releases, extensions break.</p>





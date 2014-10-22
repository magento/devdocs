---
layout: howtom2devgde_chapters
title: Magento 2 areas
---
 
<h1 id="m2devgde-area">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/arch/areas.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-area-intro">Introduction</h2> 

Introducing the areas is to facilitate integrating and extending Magento. As an integration/extension developer you need to understand what the areas serve for and how to use modules in the areas. This article described the general meaning of the areas as well as their practical use in Magento.

Magento is divided into several conditional parts, which are not inter-dependent, but using the same data. Each of these parts serves to delimit representation of the data to different user groups depending on the behavior logic of the system. These parts are called areas.

Usually, an area has the behavior and view components, which operate separately. However, an area can have only one component, for instance, the Cron area, which does not have the view component.
In Magento there are six areas

* Admin panel <!-- link -->
* Storefront(frontend): entry point for this area is <code>index.php</code> or <code>pub/index.php</code>
* Crontab (crontab): entry point for this area is <code>pub/cron.php</code>
* Install (install): entry point for this area is <code>dev/shell/install.php</code>, or <code>index.php</code> or <code>pub/index.php</code>
* Web API REST (webapi_rest): entry point for this area is index.php or pub/index.php
* Web API SOAP (webapi_soap): entry point for this area is index.php or pub/index.php
If your extension works in several areas, you should ensure it has separate behavior and view components for each area.
The third-party developer can add an area if necessary.

---
layout: howtom2devgde_chapters
title: What is an integration?
---

<h1 id="what-is-integration">What is an Integration?</h1>

<p><a href="{{ site.githuburl }}guides/v1.0/config-guide/integration/what-is-integration.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p> 

All third-party systems integrating with Magento must be authenticated and authorized to access Magento resources securely. To make both procedures easier, we changed the workflow for authorizing the API calls. You can now authorize your third-party system using either secure, cloud-based key exchange or by creating the keys locally on the merchant's Magento system.

Integrating with Magento requires you to define access rights that control what information your third-party system needs from the merchant's Magento instance. If you want to establish more control over the data accessible for the external systems, you can do so using configuration files.

Here we discuss how to create a new integration, configure it, specify the access rights for different user roles, restrict access to the resources using configuration files, and authorization workflow in Magento 2.

<h2 id="audience">Intended Audience</h2>

This page is intended to be used by third-party developers who want to extend Magento's functionality by creating integrations.

If you're a merchant who wants to activate an integration, see Activating an Integration instead.

<h2 id="create-integration">Choosing How to Create Your Integration</h2>

You have the following options to create your integration:

*  Creating the integration using the Magento Admin, which you might prefer if you aren't comfortable creating configuration files. For more information, see Manually Creating an Integration Using the Magento Admin.

*  Automatically creating the integration by providing it as an extension package. For more information, see [Creating an Integration Automatically]({{ site.gdeurl }}config-guide/integration/integration-create-man.html)). 


---
layout: default
group: 
subgroup: Integration
title: What is an integration?
menu_title: What is an integration?
menu_order: 1
github_link: config-guide/integration/what-is-integration.md
---

Third-party developers can create integrations to extend Magento functionality.

All third-party systems that integrate with Magento must be authenticated and authorized to access Magento resources securely.

Integrating with Magento requires you to define access rights that control what information your third-party system needs from the merchant's Magento instance. If you want to establish more control over the data accessible for the external systems, you can do so using configuration files.

Here we discuss how to create a integration, configure it, specify the access rights for different user roles, restrict access to the resources using configuration files, and the Magento authorization workflow.

<h2 id="create-integration">How to create an integration</h2>

Use one of these methods to create your integration:

*  Use the Magento Admin. You might prefer this method if you are not comfortable creating configuration files. For more information, see [Manually create an integration]({{ site.gdeurl }}config-guide/integration/integration-code.html)).

*  Automatically create the integration by providing it as an extension package. For more information, see [Creating an Integration Automatically]({{ site.gdeurl }}config-guide/integration/integration-create-man.html)).


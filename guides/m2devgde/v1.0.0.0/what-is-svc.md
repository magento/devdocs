---
layout: howtom2devgde
title: What is the Magento 2 Service Framework?
---

# What is the Magento 2 Service Framework?

<p><a href="https://github.com/magento/devdocs/blob/master/guides/m2devgde/v1.0.0.0/what-is-svc.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}/common/images/newWindow.gif"/></p>

Magento 2 uses the service framework to define and expose extensible features. The service framework (also referred to as the *service layer*) is between the presentation layer and business logic as the following figure shows:

![The service interface accepts requests from web pages and web services, meaning they do not need to know the details of business logic]({{ site.baseurl }}/common/images/service-layer_block-diagram.png)

The service layer:

 * Is a functional abstraction that represents the business features available to other parts of an application or Magento. 
 * Represents a boundary that encapsulates the business logic a module exposes without revealing any of the details about how that functionality is implemented. 

# Benefits of the Service Layer

Benefits include:

*	Enables you to move business logic out of templates, which reduces the size of templates and makes customization easier.
*	Enables all business logic to be easily made available to external applications as web services by creating `webapi.xml`. 
*	Services are versioned and are therefore backward-compatible. For example, Magento 2.1 might have V2 of a service you've been using but V1 continues to function after the upgrade.
 
 
# Next Steps

TBD
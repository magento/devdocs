---
layout: howtom2devgde_chapters
title: What is the Magento 2 Service Framework?
---

<h1 id="what-is">What is the Magento 2 Service Framework?</h1> 

<p><a href="https://github.com/magento/devdocs/blob/master/guides/m2devgde/v1.0.0.0/svcs-framework/what-is-svc.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

Magento 2 uses the service framework to define and expose extensible features.

A service:

 * Is a functional abstraction that represents the business features available to other parts of an application or Magento. 
 * Represents a boundary that encapsulates the business logic a module exposes without revealing any of the details of how that functionality is implemented. 
 
The following figure shows how this concept works:

![The service interface accepts requests from web pages and web services, meaning they do not need to know the details of business logic]({{ site.baseurl }}common/images/services-and-logic.png)

Services provide a consistent interface and behavior, regardless of the type of client making the request. This means that creating a customer works the same way, regardless of whether the customer is created from a web service or from a web page. It also means that customizations to the customer creation logic manifest themselves consistently from one page to the next and from one client to the next.

Using services interfaces, an integrator can more easily interact with Magento 2 using APIs instead of overloading classes as was necessary in earlier Magento versions. Because you're not overloading classes, and because service interfaces are versioned, there are fewer chances of conflicts with other applications and fewer chances of issues during upgrade.

#### Related Topics:

*	<a href="{{ site.baseurl }}guides/m2devgde/v1.0.0.0/svcs-framework/svcs-props.html">Understanding the Properties and Responsibilities of a Service</a>

*	<a href="{{ site.baseurl }}guides/m2devgde/v1.0.0.0/svcs-framework/svc-how-to-use.html">How a Client Uses a Service</a>

*	<a href="{{ site.baseurl }}guides/m2devgde/v1.0.0.0/webapi/what-is-webapi.html">What Is the Web API Framework?</a>

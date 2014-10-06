---
layout: howtom2devgde_chapters
title: Understanding Integration Authorization 
---

<h1 id="what-is-integration">Understanding Integration Authorization</h1>

<p><a href="{{ site.githuburl }}guides/m2devgde/v1.0.0.0/integration/integration-auth.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

You can authenticate a third-party system with Magento in any of the following ways:

*  (Preferred) Using a secure, cloud-based OAuth workflow

*  For situations where it's not possible to use OAuth, the merchant can generate the keys in the Magento Admin and send them to you

The access check for API calls is performed by two layers: service layer and presentation layer.

<h2 id="service-layer">Service Layer</h2>

The service layer checks specific access privileges and authorizes a user to change specific information for which they have privileges. For example, the service layer checks to see if a user has privileges to edit a product's price and, if so, enables the user to edit the price.

<h2 id="presentation-layer">Presentation Layer</h2>

The presentation layer defines resources in the `acl.xml` file, and retrieves the list of resources necessary for invoking each operation in `[your magento install dir]/app/code/vendor/module/etc/webapi.xml`

<script src="https://gist.github.com/xcomSteveJohnson/9750491.js"></script>


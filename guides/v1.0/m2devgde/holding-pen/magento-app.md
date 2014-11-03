---
layout: howtom2devgde_chapters
title: Magento\App component 
---

<h1 id="m2devgde-magento-app">{{ page.title }}</h1>
<p><a href="{{ site.githuburl }}m2devgde/view/RENAME.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
<h2 id="overview">Overview</h2>

To provide dependency injection and access to database and routing,
the Magento framework needs the `Magento\App` component.

Use the `Magento\App` component configure the Magento framework.

The `Magento/App/EntryPoint/EntryPoint` class is an entry point to launch the application and initialize the dependency injection feature.

The `Magento\App` component processes incoming HTTP requests. The `Magento\HTTP` library contains the classes and interfaces that process the HTTP requests.

Specifically:

* `Magento\HTTP\HandlerInterface` processes a request and provides a response.
* `Magento\HTTP\Authentication` processes the credentials from HTTP request.
* `Magento\HTTP\Header` retrieves information about host, user agent, language, and so on.
* `Magento\HTTP\PhpEnvironment` retrieves the client and server IP addresses.

The `Magento\App` component reads:

* The primary configurations located in the `local.xml` file.
* The resources configurations located in the `resources.xml` file.

The `Magento\App` component processes requests.

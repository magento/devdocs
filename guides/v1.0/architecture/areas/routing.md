---
layout: howtom2devgde_chapters
title: Routing
---

<h1 id="m2devgde-magento-app">{{ page.title }}</h1>
<p><a href="{{ site.githuburl }}m2devgde/view/RENAME.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
<h2 id="overview">Overview</h2>

In Magento 2, a URL has the following format:

`{areaFrontName}/moduleFrontName/{controllerName}/{actionName}`

To assign a URL to a corresponding controller and action, use the router class.

Router has an algorithm to find a matching controller, determined by request.

Then, according to a route rule, controller is assigned to URL. Use the `routes.xml` file to review or change the route rules.

<h3>Routers</h3>

The routers information for the modules is described in `routerList` parameter of `Magento\App\RouterList` type in `di.xml` file.

Each area has its own set of the routers. You configure a router, as follows:

<script src="https://gist.github.com/xcomSteveJohnson/347fabf5747a615dc921.js"></script>

`Magento\App\RouterList` model is injected into `FrontController`.

You might need to customize the routers to change either the standard logic of processing the requests or the native Magento routers
(such as, CMS router, default router, and so on).
However, you must not customize the routers that are used in the core modules of Magento.

<h3>Routes</h3>

Configurations of the routes are stored in `routes.xml` in the scopes area.

Only the standard frontend and backend routers use routes. Typically, the configuration for a route is in the following format:


<pre>
&lt;config>
    &lt;router id="%routerId%">
        &lt;route id="%routeId%" frontName="%frontName%">
            &lt;module name="%moduleName%" before="%moduleName%"/>
        &lt;/route>
    &lt;/router>
&lt;/config>
</pre>


To retrieve the configuration for route for an area by the specified router, use the `Magento\App\Route\Config`.

To replace the controller action in a route with custom one, add the custom controller class before the original controller.

The custom controller and action should share the same names with the original ones.

The system processes the custom controller before the original, while a route remains the same.

If you must reset a route and design, forward the request processing to another route:

`$this->_forward('other/controller/action')`

To remove the controller action, forward to `noroute`, for instance, in `app/code/Company/SomeExtension/Controller/Account.php`:


<pre>
namespace Company\SomeExtension\Controller;

class Account extends \Magento\App\Action\Action
{
    public function loginAction()
    {
        ...
    }

    public function createAction()
    {
        $this->_forward('noroute');
    }

    public function forgotpasswordAction()
    {
        $this->_forward('noroute');
    }
}
</pre>


<h3>Routing processing</h3>

Routing is processed in the following way:

* Modules provide information on their routers through the `routerList` parameter of `Magento\App\RouterList` type in `di.xml` file.
* `FrontController` obtains active routers and checks whether a request can be processed.
* If a request cannot be processed by any router, the default router is used.
* If a request can be processed by a router, the router finds a route with matching `frontName` and looks through corresponding modules. If a module has matching controller and action names, a router instantiates this controller.

The `dispatch()` method of the `Magento\App\Action\Action` class requests an instance and returns its response.

For this class, the `Magento\App` component ensures implementation of `Magento\App\ActionInterface`. This interface processes the requests through its actions. Also, the following classes participate in processing the requests:

* `Magento\App\State` class provides information on the state of the application, that is, current mode, installation date, and so on.
* `Magento\App\Arealist` class serves to configure the application areas through the `di.xml` file
* `Magento\App\Area\FrontNameResolverInterface` class resolves the dynamic area's front names:


<script src="https://gist.github.com/xcomSteveJohnson/254da12747fdf6b4f3ab.js"></script>


<h2>Default router</h2>

If a request cannot be processed by any router, the `Magento\App\Router\DefaultRouter` default router lists handlers for processing such request.

`Magento\App\Router\NoRouteHandlerList` contains the list of handlers.

You can extend it by adding description of a new instance in the DI configurations:

<script src="https://gist.github.com/xcomSteveJohnson/acf72884c0a7246aba66.js"></script>

You must specify the following parameters:

* `%handlerName%%`. A unique name of a handler.
* `%instanceName%`. A handler instance name, according to the class naming convention.
* `sortOrder`. The order of processing a handler.

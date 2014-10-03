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

Then, according to a route rule, controller is assigned to URL. Use `routes.xml` file to review or change the route rules.

<h3>Routers</h3>

The routers information for the modules is described in `routerList` parameter of `Magento\App\RouterList` type in `di.xml` file.

Each area has its own set of the routers. You configure a router, as follows:
<blockquote>
<pre>
&lt;type name="Magento\App\RouterList">
    &lt;arguments>
         &lt;argument name="routerList" xsi:type="array">
             &lt;item name="%routerName%" xsi:type="array">
                 &lt;item name="instance" xsi:type="string">%instanceName%&lt;/item>
                 &lt;item name="disable" xsi:type="boolean">false&lt;/item>
                 &lt;item name="sortOrder" xsi:type="string">10&lt;/item>
             &lt;/item>
         &lt;/argument>
     &lt;/arguments>
&lt;/type>
</pre>
</blockquote>
`Magento\App\RouterList` model is injected into `FrontController`.

You might need to customize the routers to change either the standard logic of processing the requests or the native Magento routers (such as, CMS router, default router, and so on). However, you must not customize the routers used in the core modules of Magento.

<h3>Routes</h3>

Configurations of the routes are stored in routes.xml in the area scopes. Routes are used by the Standard Frontend and Backend Routers only. Typically, a route's configurations are in the following format:

<blockquote>
<pre>
&lt;config>
    &lt;router id="%routerId%">
        &lt;route id="%routeId%" frontName="%frontName%">
            &lt;module name="%moduleName%" before="%moduleName%"/>
        &lt;/route>
    &lt;/router>
&lt;/config>
</pre>
</blockquote>

To retrieve a route's configurations for an area by the specified router, `Magento\App\Route\Config` model is used.

To replace the controller action in a route with custom one, add the custom controller class before the original controller. The custom controller and action should share the same names with the original ones. Thus, system will process the custom controller before the original, while a route will remain the same. If you need to reset completely a route and design, processing of the request is to be forwarded to another route:

`$this->_forward('other/controller/action')`

To remove the controller action, forward to 'noroute,' for instance in `app/code/Company/SomeExtension/Controller/Account.php`

<blockquote>
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
</blockquote>

<h3>Routing processing</h3>

Routing is processed in the following way:

* Modules provide information on their routers via routerList parameter of Magento\App\RouterList type in di.xml file.
* FrontController obtains active routers and checks whether a request can be processed.
* If a request cannot be processed by any router, the default router is used.
* If a request can be processed by a router, the latter finds a route with matching frontName and looks through corresponding modules. If a module has matching controller and action names, a router instantiates this controller.

The `dispatch()` method of the `Magento\App\Action\Action` class requests an instance and returns its response.

For this class Magento\App component ensures implementation of Magento\App\ActionInterface. This interface processes the requests via its actions. Also the following classes participate in processing the requests:

* `Magento\App\State` class provides information on the state of the application, that is, current mode, installation date, and so on.
* `Magento\App\Arealist` class serves to configure the application areas via `di.xml` file
* `Magento\App\Area\FrontNameResolverInterface` class resolves the dynamic area's front names:

<blockquote>
<pre>
&lt;type name="Magento\App\AreaList">
    &lt;param name="areas">
        &lt;value>
            &lt;adminhtml>
                &lt;frontNameResolver>Magento\Backend\App\Area\FrontNameResolver&lt;/frontNameResolver>
                &lt;router>admin&lt;/router>
            &lt;/adminhtml>
        &lt;/value>
    &lt;/param>
&lt;/type>
</pre>
</blockquote>

<h2>Default router</h2>

If a request cannot be processed by any router, the `Magento\App\Router\DefaultRouter` default router lists handlers for processing such request.
The list of handlers is contained in `Magento\App\Router\NoRouteHandlerList`. You can extend it by adding description of a new instance in the DI configurations:

<blockquote>
<pre>
&lt;type name="Magento\App\Router\NoRouteHandlerList">
    &lt;param name="handlerClassesList">
        &lt;value>
            &lt;%handlerName%>
                &lt;instance>%instanceName%&lt;/instance>
                &lt;sortOrder>100&lt;/sortOrder>
            &lt;/%handlerName%>
        &lt;/value>
    &lt;/param>
&lt;/type>
</pre>
</blockquote>

You must specify the following parameters:

* `%handlerName%%` is a unique name of a handler.
* `%instanceName%` is a handler instance name according to the class naming convention.
* `sortOrder` defines the order of processing a handler.

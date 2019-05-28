---
group: php-developer-guide
subgroup: 99_Module Development
title: Routing
menu_title: Routing
menu_order: 11
---

In the Magento system, a {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} has the following format:

`<area front name>/<VendorName>/<ModuleName>/<controller name>/<action name>`

`<area front name>` indicates it is at the "front" of the URL. (The _area name_ is used internally to refer to the area in configuration files. Magento provides areas such as `frontend` for the storefront and `adminhtml` for the administration area.)

To assign a URL to a corresponding controller and action, use the router class.

Router has an algorithm to find a matching controller, determined by request.

Then, according to a route rule, controller is assigned to URL. Use the `routes.xml` file to review or change the route rules.

### Routers

The routers information for the modules is described in the `routerList` parameter of [Magento\\Framework\\App\\RouterList]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/RouterList.php){: target="_blank"} type in your `di.xml`.

Each area has its own set of the routers. The `Magento\Framework\App\RouterList` model is injected into [FrontController]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/FrontController.php){: target="_blank"}.

You might need to customize the routers to change either the standard logic of processing the requests or the native Magento routers
(such as, {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} router, default router, and so on).
However, you must not customize the routers that are used in Magento core modules.

### Routes

Configurations of the routes are stored in `routes.xml` in the scopes area.

Only the standard {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} and {% glossarytooltip 74d6d228-34bd-4475-a6f8-0c0f4d6d0d61 %}backend{% endglossarytooltip %} routers use routes. Typically, the configuration for a route is in the following format:

{% highlight XML %}
<config>
    <router id="%routerId%">
        <route id="%routeId%" frontName="%frontName%">
            <module name="%moduleName%" before="%moduleName%"/>
        </route>
    </router>
</config>
{% endhighlight %}

<div class="bs-callout bs-callout-info" id="info" markdown="1">
`%routeId%` must be at least three characters in length and can consist of the following characters: `A-Z, a-z, 0-9, _`.

`%frontName%` must be at least three characters in length and can consist of the following characters: `A-Z, a-z, 0-9, _, -`.
</div>

To retrieve the configuration for route for an area by the specified router, use the `Magento\App\Framework\Route\Config`.

To replace the controller action in a route with custom one, add the custom controller class before the original controller.

The custom controller and action should share the same names with the original ones.

The system processes the custom controller before the original, while a route remains the same.

If you must reset a route and design, forward the request processing to another route:

`$this->_forward('other/controller/action')`

To remove the controller action, forward to `noroute`, for instance, in `app/code/Company/SomeExtension/Controller/Account/Create.php`:


<pre>
{% glossarytooltip 621ef86b-7314-4fbc-a80d-ab7fa45a27cb %}namespace{% endglossarytooltip %} Company\SomeExtension\Controller\Account;

class Create extends \Magento\Framework\App\Action\Action
{
    public function execute()
    {
        $this->_forward('noroute');
    }
}
</pre>

### Routing processing

Routing is processed in the following way:

* Modules provide information on their routers through the `routerList` parameter of `Magento\Framework\App\RouterList` type in `di.xml`.
* `FrontController` obtains active routers and checks whether a request can be processed.
* If a request cannot be processed by any router, the default router is used.
* If a request can be processed by a router, the router finds a route with matching `frontName` and looks through corresponding modules. If a {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} has matching controller and action names, a router instantiates this controller.

The `dispatch()` method of the `Magento\Framework\App\Action\Action` class requests an instance and returns its response.

For this class, the `Magento\Framework\App\ActionInterface` processes the requests through its actions. Also, the following classes participate in processing the requests:

* The [Magento\\Framework\\App\\State]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/State.php){: target="_blank"}  class provides information on the state of the application, that is, current mode, installation date, and so on.
* The [Magento\\Framework\\App\\Arealist]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/AreaList.php){: target="_blank"} class serves to configure the application areas through the `di.xml` file
* The [Magento\\App\\Area\\FrontNameResolverInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/Area/FrontNameResolverInterface.php){: target="_blank"} class resolves the dynamic area's front names

## Default router

If a request cannot be processed by any router, the [Magento\\Framework\\App\\Router\\DefaultRouter]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/Router/DefaultRouter.php){: target="_blank"} default router lists handlers for processing such request.

[Magento\\App\\Router\\NoRouteHandlerList]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/Router/NoRouteHandlerInterface.php){: target="_blank"} contains the list of handlers.

#### Related information

See [The Route Config Kata](http://vinaikopp.com/2016/03/21/05_the_route_config_kata){:target="_blank"} by Magento contributor [Vinai Kopp](http://vinaikopp.com/blog/list).

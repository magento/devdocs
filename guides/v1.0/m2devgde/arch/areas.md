---
layout: howtom2devgde_chapters
title: Introducing Areas
---

<h1 id="m2devgde-area">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/arch/areas.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-area-intro">Introduction</h2>


Magento areas facilitate integrating with and extending Magento. To extend Magento, you must understand what the areas serve and how to use modules in the areas.

This article describes areas and their practical use in Magento.

<p class="q">Reviewer: The definition of area doesn't make sense. Please clarify.</p>

Magento is divided into several conditional parts, which are not interdependent but use the same data. Each of these parts serves to delimit representation of the data to different user groups depending on the behavior logic of the system. These parts are referred to as *areas*.


Usually, an area has behavior and view components, which operate separately.

However, an area can have only one component, for instance, the `cron` area, which has no view component.

The Magento areas are:

<p class="q">Reviewer: Please verify all of the following.</p>

* Admin: entry point for this area is <code>index.php</code>
* Storefront: entry point for this area is <code>index.php</code> or <code>pub/index.php</code>
* Crontab (crontab): entry point for this area is <code>pub/cron.php</code>
* Install (install): entry point for this area is <code>setup/index.php</code>. `setup` contains `composer.json` that resolves dependencies and manages packages that comprise the Magento 2 software
* Web API REST (webapi_rest): entry point for this area is `index.php` or `pub/index.php`
* Web API SOAP (webapi_soap): entry point for this area is `index.php` or `pub/index.php`

If your extension works in several areas, you should ensure it has separate behavior and view components for each area.
The third-party developer can <a href="#m2devgde-area-add">add an area</a> if necessary. 

<h2 id="m2devgde-area-use-in-md">Use modules in areas</h2>
The resources visible and accessible in an area as well as area's behavior are defined by modules. The same module can influence several areas, for instance RMA [note: this module is available in EE only] module is represented partly in the Admin area and partly in the storefront area.

<div class="bs-callout bs-callout-warning" id="warning">
  <img src="{{ site.baseurl }}common/images/icon_tip.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>Disabling an area does not result in disabling the modules related to it. </p></span>
</div>

<h2 id="m2devgde-area-nm">Name and declare an area</h2>

Area's name or code allows distinguishing what resources belong to this area. An area's code is written in lowercase alphabetical letters, for example, `api` area:
<pre>
&lt;config&gt;
&nbsp;&nbsp;&nbsp;&nbsp;...
&nbsp;&nbsp;&nbsp;&nbsp;&lt;type&nbsp;name=&quot;Magento\App\AreaList&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;areas&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;area_code&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;api&quot;&nbsp;xsi:type=&quot;string&quot;&gt;webapi&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/type&gt;
&nbsp;&nbsp;&nbsp;&nbsp;...
&lt;/config&gt;
</pre>
Thus, `http://magento.host/webapi/URL` will present the related resources of the API area.
An area's code is defined at the application's entry point and cannot be changed during the runtime of the application. However, it can be changed temporarily.
An area is declared in the dependency injection global configuration file `[Module name]/etc/di.xml`:
<script src="https://gist.github.com/xcomSteveJohnson/5d57f8b51d7f6fd5877b.js"></script>
<p class="q">Reviewer: I do not see the following class, please clarify.</p>
Another way to declare an area is to specify it directly in the class. For instance, in the `\Magento\App\Cron` class:
<pre>
class&nbsp;Cron&nbsp;implements&nbsp;\Magento\AppInterface
{
&nbsp;&nbsp;&nbsp;&nbsp;/**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;@var&nbsp;\Magento\Event\ManagerInterface
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/
&nbsp;&nbsp;&nbsp;&nbsp;protected&nbsp;$_eventManager;
&nbsp;&nbsp;&nbsp;&nbsp;/**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;@var&nbsp;State
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/
&nbsp;&nbsp;&nbsp;&nbsp;protected&nbsp;$_state;
&nbsp;&nbsp;&nbsp;&nbsp;/**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;@param&nbsp;ManagerInterface&nbsp;$eventManager
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;@param&nbsp;State&nbsp;$state
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;function&nbsp;__construct(
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ManagerInterface&nbsp;$eventManager,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;State&nbsp;$state
&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$this-&gt;_eventManager&nbsp;=&nbsp;$eventManager;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$this-&gt;_state&nbsp;=&nbsp;$state;
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;/**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;Execute&nbsp;application
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;@return&nbsp;int
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;function&nbsp;execute()
&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$this-&gt;_state-&gt;setAreaCode('crontab');
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$this-&gt;_eventManager-&gt;dispatch('default');
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;0;
&nbsp;&nbsp;&nbsp;&nbsp;}
}
</pre>

<h2 id="m2devgde-area-code">Change an area's code</h2>

You can change an area's code temporarily (that is, in the runtime), if you need to work with part of an area's configurations and design while being in another area. For instance, as an admin user you might need to preview the CMS page in the Admin. Changing an area's code means that objects in an area will receive the code of another area. However, the configurations and other resources of the latter area will remain secure.

To change an area's code, use the `Magento\App\State::emulateAreaCode()` method:
<code>
$this->_objectManager->get('Magento\App\State')->emulateAreaCode('frontend', array($this, 'executeFrontendRoutine'));
</code>
The changes you make by using this method are temporal. For instance, in the example above after `executeFrontendRoutine` method is executed, an area's code will be restored to the original.

<h2 id="m2devgde-area-add">Add a new area</h2>
To add a new area:

1. <a href="#m2devgde-area-nm">Declare</a> unique code for a new area in configurations.
2. <a href="#m2devgde-area-add-rout">Add a router</a> if necessary. 
3. <a href="#m2devgde-area-add-contr">Add an abstract controller</a> if necessary. 

<h3 id="m2devgde-area-add-md">Area module</h3>

Each area declares itself in a module. All resources specific for an area are located in area's module as well.
You can use an area's module to enable or disable an area. If this module is enabled, it injects an area's routers into general application's routing process. If this module is disabled, <a href="#m2devgde-area-add-rout"> an area's routers</a> are not loaded and, as a result, an area's resources and specific functionality are not available.


<div class="bs-callout bs-callout-warning" id="warning">
  <img src="{{ site.baseurl }}common/images/icon_tip.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>Other modules should not depend on an area's module. </p></span>
</div>
Sample of an area's module structure:
<pre>
{Areamodule name}
+-Controller
|&nbsp;+-Router
|&nbsp;|&nbsp;L-{RouterName}.php
|&nbsp;L-Abstract.php
L-etc
&nbsp;&nbsp;L-config.xml
</pre>

<h3 id="m2devgde-area-add-rout">Area routers</h3>
An area can have one or several routers. Implement `\Magento\App\RouterInterface` to add a router to an area. If you implemented own `FrontController`, you can skip this step.

An area's router is declared in `[Module name]/{area_code}/di.xml`:

<script src="https://gist.github.com/xcomSteveJohnson/378acaa4f309957ca5c3.js"></script>

<h3 id="m2devgde-area-add-contr">Area controllers</h3>
Area's abstract controller defines the behavior of all actions of an area:
<pre>
abstract class ActionAbstract extends \Magento\App\Action\Action
{
    ...
}
</pre>

An area's controllers are to be unique for an area. They are located in the subdirectory of the `Controller` directory.

<h2 id="m2devgde-area-link">Link areas and modules</h2>
Defining what module should be used for an area is made by a router: if URL matches, a router returns the corresponding object.

If a module uses the view resources of an area, all related files should be placed to the subdirectory of View directory. The subdirectory should share the name of an area. For instance, the view-related subdirectory for `crontab` area is called `crontab`.

Area's controllers and view resources in a module's structure:
<pre>
{module name}
+-Controller
|&nbsp;+-{Area}
|&nbsp;&nbsp;&nbsp;L-{ControllerName}
|&nbsp;&nbsp;&nbsp;L-{ControllerName}
|&nbsp;&nbsp;&nbsp;L-...
L-view
&nbsp;&nbsp;L-{area}
&nbsp;&nbsp;&nbsp;&nbsp;L-layout
&nbsp;&nbsp;&nbsp;&nbsp;L-template.phtml
&nbsp;&nbsp;&nbsp;&nbsp;L-...
</pre>

<h2 id="m2devgde-area-admin">The Admin area</h2>
The Admin area serves for managing the store. The code of this area is `adminhtml`. Respectively, the `adminhtml/view` subdirectory contains the view resources and the `adminhtml/controller` subdirectory contains the controllers of the Admin area.

You can extend the following parts of the Admin area: 

* <a href="#m2devgde-area-extend">The event observer mechanism</a>
* <a href="#m2devgde-area-extend-acl">The access control list (ACL) rules</a>
* <a href="#m2devgde-area-extend-menu">The navigation menu in the Admin</a>
* <a href="#m2devgde-area-extend-conf-menu">The configuration menu in the Admin</a>
* <a href="#m2devgde-area-layout">The layout update</a>

After you extend the configuration or navigation menu, you will need to specify the routes for custom modules.

<h3 id="m2devgde-area-extend">Extend the event observer mechanism</h3>
You might need to extend the event observer mechanism, for instance, to dispatch an event before loading the data or apply additional filters to the data.

To dispatch an event before loading the data:

<code>$this->_eventManager->dispatch('event_name', array('data' => $data));</code>

To apply additional filter to the data, you need first to define where to find an object and to set the filters in `events.xml`:

<script src="https://gist.github.com/xcomSteveJohnson/ac2567a3c97b7cf0e925.js"></script>

Then, implement the observer's listener:
<script src="https://gist.github.com/xcomSteveJohnson/86fc80d5e32c1d0c7060.js"></script>

<h3 id="m2devgde-area-extend-acl">Extend ACL rules</h3>

To limit access to some page or resource in the Admin, use `acl.xml` file in a module, to which this page or resource belongs:

<script src="https://gist.github.com/xcomSteveJohnson/a4c4f53354dc84dff09d.js"></script>

<h3 id="m2devgde-area-extend-menu">Extend the navigation menu</h3>
To add a new element to the navigation menu, add corresponding configuration to `menu.xml` file in a module, to which this new element belongs:

<script src="https://gist.github.com/xcomSteveJohnson/2387ce1022b1a57bea58.js"></script>

<h3 id="m2devgde-area-extend-conf-menu">Extend the configuration menu in the Admin</h3>

To add some elements to the **Stores** > **Configuration** menu, add `[Module name]/etc/system.xml`:

<script src="https://gist.github.com/xcomSteveJohnson/ba12feb8ffe6d5f45717.js"></script>

<h3 id="m2devgde-area-def-rout">Define routes for custom modules</h3>
After you customize or add some a module to the Admin, you will need to ensure that route of this modules is coherent with the routes of the native Magento modules. To define a custom module's route, specify this route as fallback of standard Admin's route in `routes.xml` file of a module. When specifying a route for a module, make sure that a route is unique.
<pre>
&lt;config&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;router&nbsp;id=&quot;admin&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;route&nbsp;id=&quot;adminhtml&quot;&nbsp;frontName=&quot;admin&quot;&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;module&nbsp;name=&quot;Magento_Backend&quot;/&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/route&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/router&gt;
&lt;/config&gt;
</pre>
By using before or after parameters you can assign correspondingly higher or lower priority in finding the controllers to a module.

<h3 id="m2devgde-area-layout">Layout update</h3>
The layout update is a set of hierarchical trees of tags, which define the location and nesting of the blocks on a page:

<script src="https://gist.github.com/xcomSteveJohnson/3162bd47ef33e9a57cba.js"></script>

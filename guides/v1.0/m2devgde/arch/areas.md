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

<<<<<<< HEAD
* <a href="#m2devgde-area-admin">Admin panel</a>
* Storefront(frontend): entry point for this area is <code>index.php</code> or <code>pub/index.php</code>
=======
<p class="q">Reviewer: Please verify all of the following.</p>

* Admin panel: entry point for this area is <code>index.php</code>
* Storefront: entry point for this area is <code>index.php</code> or <code>pub/index.php</code>
>>>>>>> origin/devbeta
* Crontab (crontab): entry point for this area is <code>pub/cron.php</code>
* Install (install): entry point for this area is <code>setup/index.php</code>. `setup` contains `composer.json` that resolves dependencies and manages packages that comprise the Magento 2 software
* Web API REST (webapi_rest): entry point for this area is `index.php` or `pub/index.php`
* Web API SOAP (webapi_soap): entry point for this area is `index.php` or `pub/index.php`

If your extension works in several areas, you should ensure it has separate behavior and view components for each area.
<<<<<<< HEAD
<<<<<<< HEAD
The third-party developer can <a href="#m2devgde-area-add">add an area</a> if necessary. 

<h2 id="m2devgde-area-use-in-md">Using Modules in Areas</h2>
The resources visible and accessible in an area as well as area's behavior are defined by modules. The same module can influence several areas, for instance RMA [note: this module is available in EE only] module is represented partly in the admin panel area and partly in the storefront area.

<div class="bs-callout bs-callout-warning" id="warning">
  <img src="{{ site.baseurl }}common/images/icon_tip.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>Disabling an area does not result in disabling the modules related to it. </p></span>
</div>

<h2 id="m2devgde-area-nm">Naming and Declaration of an Area</h2>

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
An area is declared in the DI global configuration file `- Module/etc/di.xml`:
<pre>
&lt;config&gt;
&nbsp;&nbsp;&nbsp;&nbsp;...
&nbsp;&nbsp;&nbsp;&nbsp;&lt;type&nbsp;name=&quot;Magento\App\AreaList&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;areas&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;area_code&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;frontNameResolver&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Magento\Module\App\FrontNameResolver&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/type&gt;
&nbsp;&nbsp;&nbsp;&nbsp;...
&lt;/config&gt;
</pre>
Another way to declare an area is to specify it directly in the class. For instance, in `\Magento\App\Cron` class:
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

<h2 id="m2devgde-area-code">Changing an Area's Code</h2>

You can change an area's code temporary (that is, in the runtime), if you need to work with part of an area's configurations and design while being in another area. For instance, as an admin user you might need to preview the CMS page in the admin panel. Changing an area's code means that objects in an area will receive the code of another area. However, the configurations and other resources of the latter area will remain secure.

To change an area's code, use `Magento\App\State::emulateAreaCode()` method:
<code>
$this->_objectManager->get('Magento\App\State')->emulateAreaCode('frontend', array($this, 'executeFrontendRoutine'));
</code>
The changes you make by using this method are temporal. For instance, in the example above after `executeFrontendRoutine` method is executed, an area's code will be restored to the original.

<h2 id="m2devgde-area-add">Adding a New Area</h2>
To add a new area:

1. <a href="#m2devgde-area-nm">Declare</a> unique code for a new area in configurations.
2. <a href="#m2devgde-area-add-rout">Add a router</a> if necessary. 
3. <a href="#m2devgde-area-add-contr">Add an abstract controller</a> if necessary. 

<h3 id="m2devgde-area-add-md">Area Module</h3>

Each area declares itself in a module. All resources specific for an area are located in area's module as well.
You can use an area's module to enable or disable an area. If this module is enabled, it injects an area's routers into general application's routing process. If this module is disabled, <a href="#m2devgde-area-add-rout"> an area's routers</a> are not loaded and, as a result, an area's resources and specific functionality are not available.


<div class="bs-callout bs-callout-warning" id="warning">
  <img src="{{ site.baseurl }}common/images/icon_tip.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>Other modules should not depend on an area's module. </p></span>
</div>
Sample of an area's module structure:
<pre>
{AreaModuleName}
+-Controller
|&nbsp;+-Router
|&nbsp;|&nbsp;L-{RouterName}.php
|&nbsp;L-Abstract.php
L-etc
&nbsp;&nbsp;L-config.xml
</pre>

<h3 id="m2devgde-area-add-rout">Area Routers</h3>
An area can have one or several routers. Implement `\Magento\App\RouterInterface` to add a router to an area. If you implemented own `FrontController`, you can skip this step.

Area's router is declared in `ModuleName/{area_code}/di.xml` file:
<pre>
&lt;config&gt;
&nbsp;&nbsp;&nbsp;&nbsp;...
&nbsp;&nbsp;&nbsp;&nbsp;&lt;type&nbsp;name=&quot;Magento\App\RouterList&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;routerList&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;router_id&quot;&nbsp;xsi:type=&quot;array&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;instance&quot;&nbsp;xsi:type=&quot;object&quot;&gt;Magento\ModuleName\Controller\Router\DefaultRouter&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;disable&quot;&nbsp;xsi:type=&quot;boolean&quot;&gt;Magento\Module\App\FrontNameResolver&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;item&nbsp;name=&quot;sortOrder&quot;&nbsp;xsi:type=&quot;number&quot;&gt;10&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/item&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/type&gt;
&nbsp;&nbsp;&nbsp;&nbsp;...
&lt;/config&gt;
</pre>

<h3 id="m2devgde-area-add-contr">Area Controllers</h3>
Area's abstract controller defines the behaviour of all actions of an area:
<pre>
abstract class ActionAbstract extends \Magento\App\Action\Action
{
    ...
}
</pre>

An area's controllers are to be unique for an area. They are located in the subdirectory of the `Controller` directory.

<h2 id="m2devgde-area-link">Linking Areas and Modules</h2>
Defining what module should be used for an area is made by router: if URL matches, a router returns the corresponding object.

If a module uses the view resources of an area, all related files should be placed to the subdirectory of View directory. The subdirectory should share the name of an area. For instance, the view-related subdirectory for `crontab` area is called `crontab`.

Area's controllers and view resources in a module's structure:
<pre>
{ModuleName}
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

<h2 id="m2devgde-area-admin">Understanding Admin Panel Area</h2>
The admin panel area serves for managing the store. The code of this area is adminhtml. Respectively, adminhtml subdirectory contains the view resources and Adminhtml subdirectory contains the controllers of the admin panel area.

You can extend the following parts of the admin panel area: 

* <a href="#m2devgde-area-extend">The event observer mechanism</a>
* <a href="#m2devgde-area-extend-acl">The access control list (ACL) rules</a>
* <a href="#m2devgde-area-extend-menu">The navigation menu in the admin panel</a>
* <a href="#m2devgde-area-extend-conf-menu">The configuration menu in the admin panel</a>
* <a href="#m2devgde-area-layout">The layout update</a>

After you extend the configuration or navigation menu, you will need to specify the routes for custom modules.

<h3 id="m2devgde-area-extend">Extending the Event Observer Mechanism</h3>
You might need to extend the event observer mechanism, for instance, to dispatch an event before loading the data or apply additional filters to the data.

To dispatch an event before loading the data:

<code>$this->_eventManager->dispatch('event_name', array('data' => $data));</code>

To apply additional filter to the data, you need first to define where to find an object and to set the filters in `events.xml`:
<pre>
&lt;config&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;event&nbsp;name=&quot;translate_initialization_before&quot;&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;observer&nbsp;name=&quot;initialize_translation&quot;&nbsp;method=&quot;initializeTranslation&quot;&nbsp;instance=&quot;Magento\Backend\Model\Observer&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/event&gt;&nbsp;
&lt;/config&gt;
</pre>
Then, implement the observer's listener:
<pre>
public&nbsp;function&nbsp;yourMethodName(Varien_Event_Observer&nbsp;$observer)
{
&nbsp;&nbsp;&nbsp;&nbsp;$collection&nbsp;=&nbsp;$observer-&gt;getEvent()-&gt;getData('collection');
&nbsp;&nbsp;&nbsp;&nbsp;$collection-&gt;addFieldToFilter('entity_id',&nbsp;array('nin'=&gt;$productId));
}
</pre>
<h3 id="m2devgde-area-extend-acl">Extending the ACL Rules</h3>
If you need to limit access to some page or resource in the admin panel, use `acl.xml` file in a module, to which this page or resource belongs:
<pre>
&lt;config&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;acl&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;resources&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;resource&nbsp;title=&quot;Allow&nbsp;everything&quot;&nbsp;sortOrder=&quot;10&quot;&nbsp;id=&quot;Magento_Adminhtml::all&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;resource&nbsp;title=&quot;Magento&nbsp;Admin&quot;&nbsp;sortOrder=&quot;20&quot;&nbsp;id=&quot;Magento_Adminhtml::admin&quot;&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;resource&nbsp;title=&quot;Dashboard&quot;&nbsp;sortOrder=&quot;0&quot;&nbsp;id=&quot;Magento_Adminhtml::dashboard&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;resource&nbsp;title=&quot;Global&nbsp;Search&quot;&nbsp;sortOrder=&quot;100&quot;&nbsp;id=&quot;Magento_Adminhtml::global_search&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;resource&nbsp;title=&quot;My&nbsp;Account&quot;&nbsp;sortOrder=&quot;50&quot;&nbsp;id=&quot;Magento_Adminhtml::myaccount&quot;/&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;resource&nbsp;title=&quot;Marketing&quot;&nbsp;sortOrder=&quot;50&quot;&nbsp;id=&quot;Magento_Adminhtml::marketing&quot;&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;resource&nbsp;title=&quot;SEO&nbsp;&amp;&nbsp;Search&quot;&nbsp;sortOrder=&quot;40&quot;&nbsp;id=&quot;Magento_Adminhtml::marketing_seo&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;resource&nbsp;title=&quot;User&nbsp;Content&quot;&nbsp;sortOrder=&quot;50&quot;&nbsp;id=&quot;Magento_Adminhtml::marketing_user_content&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/resources&gt;
&nbsp;&nbsp;&nbsp;&nbsp;...
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/acl&gt;
&lt;/config&gt;
</pre>

<h3 id="m2devgde-area-extend-menu">Extending the Navigation Menu</h3>
To add a new element to the navigation menu, add corresponding configuration to `menu.xml` file in a module, to which this new element belongs:
<pre>
&lt;config&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;menu&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;add&nbsp;title=&quot;Schedule&quot;&nbsp;resource=&quot;Magento_Adminhtml::schedule&quot;&nbsp;action=&quot;adminhtml/system_design&quot;&nbsp;parent=&quot;Magento_Backend::system_design&quot;&nbsp;sortOrder=&quot;30&quot;&nbsp;module=&quot;Magento_Backend&quot;&nbsp;id=&quot;Magento_Backend::system_design_schedule&quot;/&gt;&nbsp;&nbsp;&nbsp;&nbsp;...
&nbsp;&nbsp;&nbsp;&nbsp;&hellip;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/menu&gt;
&lt;/config&gt;
</pre>

<h3 id="m2devgde-area-extend-conf-menu">Extending the Configuration Menu in the Admin Panel</h3>
If you need to add some elements to the **Stores** > **Configuration** menu, add system.xml file to etc directory of the corresponding module:
<pre>
&lt;config&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;section&nbsp;sortOrder=&quot;910&quot;&nbsp;translate=&quot;label&quot;&nbsp;id=&quot;advanced&quot;&nbsp;showInStore=&quot;1&quot;&nbsp;showInWebsite=&quot;1&quot;&nbsp;showInDefault=&quot;1&quot;&nbsp;type=&quot;text&quot;&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;Advanced&lt;/label&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tab&gt;advanced&lt;/tab&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;resource&gt;Magento_Adminhtml::advanced&lt;/resource&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;group&nbsp;sortOrder=&quot;2&quot;&nbsp;translate=&quot;label&quot;&nbsp;id=&quot;modules_disable_output&quot;&nbsp;showInStore=&quot;1&quot;&nbsp;showInWebsite=&quot;1&quot;&nbsp;showInDefault=&quot;1&quot;&nbsp;type=&quot;text&quot;&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;Disable&nbsp;Modules&nbsp;Output&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;frontend_model&gt;Magento\Backend\Block\System\Config\Form\Fieldset\Modules\DisableOutput&lt;/frontend_model&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/group&gt;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/sections&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&hellip;
&lt;/config&gt;
</pre>

<h3 id="m2devgde-area-def-rout">Defining Routes for Custom Modules</h3>
After you customize or add some a module to the admin panel, you will need to ensure that route of this modules is coherent with the routes of the native Magento modules. To define a custom module's route, specify this route as fallback of standard admin panel's route in `routes.xml` file of a module. When specifying a route for a module, make sure that a route is unique.
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

<h3 id="m2devgde-area-layout">Layout Update</h3>
The layout update is a set of hierarchical trees of tags, which define the location and nesting of the blocks on a page:
<pre>
&lt;{element}&nbsp;name=&quot;&lt;name&gt;&quot;&nbsp;output=&quot;1&quot;&nbsp;label=&quot;...&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;{element}&nbsp;name=&quot;&lt;name&gt;&quot;&nbsp;as=&quot;&lt;alias&gt;&quot;&nbsp;before=&quot;&lt;sibling_name&gt;&quot;&nbsp;after=&quot;&lt;sibling_name&gt;&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;{element}&nbsp;name=&quot;&lt;sibling_name&gt;&quot;&nbsp;template=&quot;...&quot;&nbsp;group=&quot;&lt;group_name&gt;&quot;/&gt;
&lt;/{element}&gt;
</pre>
=======
The third-party developer can add an area if necessary.
>>>>>>> origin/devbeta
=======
You can add a new area if needed as discussed in TBD.

<p class="q">Reviewer: Are there instructions for creating a new area? If so, where?</p>
>>>>>>> origin/devbeta

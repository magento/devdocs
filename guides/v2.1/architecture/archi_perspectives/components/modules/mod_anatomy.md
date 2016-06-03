---
layout: default
group: 
subgroup: 
title: 
menu_title: 
menu_order: 

github_link21: architecture/components/modules/mod_anatomy.md
redirect: /guides/v2.0/architecture/modules/mod_anatomy.html
---

<h2 id="arch-modules-anatomy">Module anatomy</h2>

A Magento <i>module</i> is a logical group of components that encapsulate  a particular business function, typically a business task. All components of a module relate to the module's specific function. For example, each element of the Shipping module contains all the code and interfaces needed to implement core shipping-related tasks. 


A module directory typically contains blocks, controllers, helpers, models, configuration files, and other components that contribute to the module's core purpose. 
 

<h3>Modules and the MVC pattern</h3>
Modules have multiple layers that roughly correspond to the Model-View-Controller (MVC) division of function. The MVC software pattern is an architectural principle/pattern that stipulates the organization of application code into three general categories: code responsible for controlling how data is displayed by the application; how the application creates and updates the data model in the creating data model of .  

* **View** components (M**V**C) correspond with presentation layer elements: CSS, JavaScript, and PHTML template files.

* **Controller** components (MV**C**) correspond to the service layer: service contracts and controllers.

* **Model** components (**M**VC) correspond to business logic layer: models and SQL structures. 

See <a href="{{ site.gdeurl21 }}architecture/archi_perspectives/Magento_MVC.html">Magento MVC Pattern</a> for more information. 


<h3>Module components</h3>

All types of modules contain the following core elements, categorized by directory:

 
* `/block`

* `/controllers`

* `/etc`

* `/helper`

* `/model`

* `/sql`



<h4>Block</h4>
<i>Blocks</i> help provide the data used in the View component of the module structure. Blocks coordinate models with the template files. The files in this folder load the data from database and transfer it to the templates in your theme (`PHTML` files).

<h4>Controllers</h4>
<i>Controllers</i> represent all business logic actions for the given request. These actions include `dispatch()`, `preDispatch()`, `postDispatch()` methods and delegate commands to other parts of the system. Controllers correspond to the Controller portion of the Model-View-Controller model. 

<h4>/etc</h4>
This directory contains the XML files that declare and configure behavior of all modules. Each module must have a `config.xml` file, where  all models, routers, blocks, helpers are declared.

Optionally, this folder could have `adminhtml.xml` (grant permissions for your tabs/sections in server-side menus) and `system.xml` (creates this new section or specifies where it should be displayed in existing one).

Magento 2 looks for configuration information for each module in that module’s '/etc' directory. Depending on the purpose of your module, it might contain the following configuration files in its `/etc` directory:

* acl.xml

* config.xml

* di.xml

* module.xml

* webapi.xml

Configuration files that are in the top level of that module’s `/etc` directory are global to that component.
Configuration files placed in subdirectories (adminhtml, frontend, webapi_rest, webapi_soap) apply only to those respective functional areas.

The specific set of configuration files that your module requires depends on the module's purpose and the Magento area in which it functions. 

<h4>Helper</h4>
Helpers contain utility methods, which are commonly used throughout the application. Methods, as declared in helpers, can be called from any template file or block, model, controller class by

Each module has a default Data Helper class `Modulename/Helper/Data.php`.

<h4>Model</h4>
In a typical Model-View-Controller-based application, models are used to connect to the database and process  data from and to it. Magento has adapted this pattern slightly.


<i>Resource Models</i> are objects that contain code that fetches data from a data store. In practice, this means a resource model is the object that contains the SQL building and fetching code, as well as references to objects that connect to the main Magento database.

<i>Models</i> are objects that contain database-agnostic code for interacting with a type of data. In traditional data modeling terms, your model objects contain the business logic for a particular kind of object (kind of object meaning Product, Customer, etc.).

A Magento model object contains a reference to a resource model, which it uses to load its data. There's an individual resource model object for each model object. For example, a Product Model has a Product resource model.

<h4>sql</h4>
Structures in this directory handle any custom database tables that are used by the module and process all upgrades to the extension.


<h3 id="arch-modules-related">Related topics</h3>

<a href="{{ site.gdeurl21 }}architecture/archi_perspectives/components/modules/mod_intro.html">Module overview</a>


<a href="{{ site.gdeurl21 }}architecture/archi_perspectives/components/Magento_MVC.html">Magento MVC Pattern</a>



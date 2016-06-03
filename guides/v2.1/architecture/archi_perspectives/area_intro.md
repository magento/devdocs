---
layout: default
group: a
subgroup: Architectural Layers
title: Magento Area
menu_title: Magento Area
menu_order: 
github_link21: architecture/archi_perspectives/area_intro.md
---




<h2> Magento area</h2>

A Magento Area contains user-oriented functionality, which is responsible for managing user interaction with the system. It consists of components that provide a bridge into the core business logic encapsulated in the Domain (business logic) layer.

— responsible for presentation layer components

— modules can use area resources

— modules independent of area

— when an area is disabled, then an entry point to module presentation is lost


<h3>Magento area module structure</h3>
— router
— base controller
— area configuration
— area code

The admin panel area serves for managing the store. The code of this area is adminhtml. Respectively, adminhtml subdirectory contains the view resources and Adminhtml subdirectory contains the controllers of the admin panel area.


The resources visible and accessible in an area as well as area's behavior are defined by modules. The same module can influence several areas


{ModuleName}
+-Controller
| +-{Area}
|   L-{ControllerName}
|   L-{ControllerName}
|   L-...
L-view
  L-{area}
    L-layout
    L-template.phtml
    L-...
    
    
    
    
    
Each area declares itself in a module. All resources specific for an area are located in area's module as well.
You can use an area's module to enable or disable an area. If this module is enabled, it injects an area's routers into general application's routing process. If this module is disabled, an area's routers are not loaded and, as a result, an area's resources and specific functionality are not available.

 area can have one or several routers
 
 Area's abstract controller defines the behaviour of all actions of an area
 
 An area's controllers are to be unique for an area

<h3>Magento area configuration</h3>

How do areas and modules interact?
 — Modules are independent of areas. Modules can belong to multiple Areas.
— Area is declared in a separate module (Q: WHERE?) If this module is disabled, the entire Area in the module is disabled
— Disabling an Area will not disable the module in any other Area 
— Areas are independent of each other. Areas must not use resources that belong to another area (Q: MODULES?)
— Areas cannot contain data models
— Areas are indivisible. You cannot disable part of an Area. You disable the entire Area or none of it. 



<h3 id="related">Related topics</h3>
<a href="{{ site.gdeurl21 }}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>

Presentation Layer








 

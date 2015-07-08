---
layout: default
group: arch-guide
subgroup: Architectural Layers
title: Magento Area
menu_title: Magento Area
menu_order: 1
github_link: architecture/archi_perspectives/area_intro.md
---




<h2> Magento Area</h2>

What is a Magento Area? 
A Magento Area contains user-oriented functionality, which is responsible for managing user interaction with the system. It consists of components that provide a bridge into the core business logic encapsulated in the Domain (business logic) layer.

— responsible for presentation layer components
— modules can use area resources
— modules independent of area
— when an area is disabled, then an entry point to module presentation is lost


Magento Area Module Structure
— router
— base controller
— area configuration
— area code


Magento Area Configuration

How do areas and modules interact?
 — Modules are independent of areas. Modules can belong to multiple Areas.
— Area is declared in a separate module (Q: WHERE?) If this module is disabled, the entire Area in the module is disabled
— Disabling an Area will not disable the module in any other Area 
— Areas are independent of each other. Areas must not use resources that belong to another area (Q: MODULES?)
— Areas cannot contain data models
— Areas are indivisible. You cannot disable part of an Area. You disable the entire Area or none of it. 



<h2 id="related">Related topics</h2>
<a href="{{ site.gdeurl }}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>

Presentation Layer








 

---
layout: default
group: arch-guide
subgroup: Architectural Layers
title: Architectural layers overview
menu_title: Architectural layers
menu_node: parent
menu_order: 
version: 2.0
github_link: architecture/archi_perspectives/ALayers_intro.md
redirect_from: /guides/v1.0/architecture/archi_perspectives/ALayers_intro.html
---


<h2>Architectural layers overview</h2>

At its highest level, Magento's product architecture consists of the core product code plus optional <i>modules</i>. These optional modules enhance or replace the basic product code. 

If you are substantially customizing the basic Magento product, module development will be your central focus. Modules organize code that supports a particular task or feature. A module can include code to change the look-and-feel of your storefront as well as its fundamental behavior. 

Your modules function with the core Magento product code, which is organized into layers. Understanding layered software pattern is essential for understanding basic Magento product organization. 

Layered software is a popular, widely discussed principle in software development. Many resources exist for this topic, but consider consulting Pattern-Oriented Software Architecture for a general discussion. 


<h3>Advantages of layered application design</h3>
Layered application design offers many advantages, but users of Magento will appreciate: 

* Stringent separation of business logic from presentation logic simplifies the customization process. For example, you can alter your storefront appearance without affecting any of the backend business logic. 

* Clear organization of code predictably points extension developers to code location. 



<h3>Related topics</h3>

<a href="{{ site.gdeurl }}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>


<a href="{{ site.gdeurl }}architecture/archi_perspectives/present_layer.html">Presentation layer</a>

<a href="{{ site.gdeurl }}architecture/archi_perspectives/service_layer.html">Service layer</a>


<a href="{{ site.gdeurl }}architecture/archi_perspectives/domain_layer.html">Domain layer</a>

<a href="{{ site.gdeurl }}architecture/archi_perspectives/persist_layer.html">Persistence layer</a>



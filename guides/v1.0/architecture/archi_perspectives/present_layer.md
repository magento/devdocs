---
layout: default
group: arch-guide
subgroup: Architectural Layers
title: Presentation layer
menu_title: Presentation layer
menu_order: 1
github_link: architecture/archi_perspectives/present_layer.md
---




<h2> Presentation layer</h2>
When you interact with the Magento web interface, you are directly working with <i>presentation layer</i> code. Also known as the <i>view layer</i>, presentation code controls both product behavior and appearance. If you are extending Magento, you can extensively customize the product's appearance and behavior by using HTML5 and CSS3 to modify elements of the presentation layer. 

Although many different elements comprise the presentation layer -- including templates, layout files, and blocks --  the fundamental unit of presentation layer code is the Magento <i>area</i>. A Magento area defines the logic on how data is displayed according to the type of user accessing it. Areas typically have both behavior and view components.


Any extension you develop can work in several areas.  You should ensure it has separate behavior and view components for each area. For more information, see Extension Developer's Guide.



<h3>Who uses the Presentation layer?</h3>
Three types of Magento users interact with Presentation layer code. Magento uses *areas* to efficiently make web service calls, loading only the dependent code that is required for the particualr type of . Types of users and their associated areas include: 

* <b>Web users</b> interact with the store front, where they can see the View model of data displayed by Magento and interact with product UI elements to request data for view and manipulation. These users work within the (`frontend`) area. 

* <b>Web services</b> use the API endpoints exposed in the presentation layer to integrate with , Magento defines the Web API REST area to 

* <b>System administrators</b> customizing a storefront can indirectly manipulate the presentation layer by tweaking components of the front end.



<h3>Presentation layer organization</h3>

The Magento area is the essential element of the Presentation layer. An area contains elements that control both the appearance and behavior (<i>presentation logic</i>) of the web interface. 

Area

* blocks
* skins and themes  
* models 
* layouts
* layout engine
* templates
* controllers
* database schema

<h3>View model</h3>



<h3>How Presentation code calls other layers</h3>
Presentation code typically calls service contracts, particularly for a store front. However, presentation code is occasionally dependent on a specific implementation that requires the presentation code to directly call the business logic layer. For example, the Admin UI screens are often tightly linked a specific implementation and are not generic across implementations.

<h3>Presentation layer flow</h3>
Web users interact with components of the presentation layer to select actions that initiate calls to the underlying product layers. Presentation layer components make calls to the Service layer, which in turn sends requests to the Business logic layer.

Presentation layer components (blocks, templates, controllers) make calls to the Service layer, which in turn sends requests to the Domain layer. 



<h2 id="related">Related topics</h2>
<a href="{{ site.gdeurl }}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>
Magento Areas
Blocks and Controllers
Templates and Layouts
Magento Web API Endpoints






 

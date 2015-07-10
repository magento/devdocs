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
When you interact with the Magento web interface, you are directly working with <i>presentation layer</i> code. Also known as the <i>view layer</i>, presentation code controls both web user interaction with the product (and how Magento responds to web input) and its appearance. You can extensively customize Magento's appearance and behaviorby using HTML5 and CSS3 to modify elements of the presentation layer. 




<h3>Who uses the Presentation layer?</h3>
Three types of Magento users interact with Presentation layer code. Magento uses *areas* to efficiently make web service calls, loading only the dependent code that is required for the particular type of user. Types of users and their associated areas include: 

* <b>Web users</b> interact with the store front, where they can see the View model of data displayed by Magento and interact with product UI elements to request data for view and manipulation. These users work within the (`frontend`) area. 

* <b>Web services</b> use the REST and SOAP API endpoints exposed in the presentation layer to integrate with third-party applications.  

* <b>System administrators</b> customizing a storefront can indirectly manipulate the presentation layer by tweaking components of the front end.



<h3>Presentation layer components</h3>

One helpful way of understanding the Magento presentation layer components is by examining Magento <i>themes</i>. Magento themes organize both the visual aspect of your storefront and certain aspects of product behavior. 

Each theme resides in a unique directory and contains custom page layouts, templates, skins, and language files that work together to create a distinct user experience. 

The FDG contains an extensive introduction to theme elements and an overview of how to extend and override the default Magento themes. 



<h3>View model</h3>

Magento generates the HTML for a page to display to a user from a tree of view elements. 

View elements fall into two main categories: Blocks and containers.


* Blocks can generate dynamic content and can contain named child view elements that are similar to arguments being passed in. (The `as` attribute holds the child view element names for the parent block to reference them by.)

* Containers collect an ordered group of children view elements.


The brower forms a product web page by asking the view element tree to render itself into HTML. Containers and blocks emit HTML that encloses their children appropriately. Blocks typically have a template file to contain the HTML to be emitted, allowing the HTML to be more easily customized without having to replace the PHP code used to implement the block as well.


<h3>How Presentation code calls other layers</h3>
Presentation code typically calls service contracts, particularly for a store front. However, presentation code is occasionally dependent on a specific implementation that requires the presentation code to directly call the <i>business logic</i> layer. For example, the Admin UI screens are often tightly linked a specific implementation and are not generic across implementations.

<h3>Presentation layer flow</h3>
Web users interact with components of the presentation layer to select actions that initiate calls to the underlying product layers. Presentation layer components make calls to the Service layer, which in turn sends requests to the Domain (or business logic) layer.



<h2 id="related">Related topics</h2>
<a href="{{ site.gdeurl }}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>

Magento Areas

Blocks and Controllers

Templates and Layouts

Magento Web API Endpoints






 

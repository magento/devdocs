---
layout: default
group: arch-guide
subgroup: Architectural Layers
title: Presentation Layer
menu_title: Presentation layer
menu_order: 1
version: 2.0
github_link: architecture/archi_perspectives/present_layer.md
redirect_from: /guides/v1.0/architecture/archi_perspectives/present_layer.html
---




<h2> Presentation layer</h2>
When you interact with the Magento web interface, you are directly working with <i>presentation layer</i> code. The presentation layer contains both view elements (layouts, blocks, templates) and controllers, which process commands to and from the user interface). Presentation code controls web user interaction with the product and its appearance. You can extensively customize the user interface by using HTML, CSS, and PHTML files to modify elements of the presentation layer. 




<h3>Who uses the Presentation layer?</h3>
Three types of Magento users interact with Presentation layer code. Magento uses *areas* to efficiently make web service calls, loading only the dependent code that is required for the particular type of user. Types of users and their associated areas include: 

* <b>Web users</b> interact with the store front, where they can see the View model of data displayed by Magento and interact with product UI elements to request data for view and manipulation. These users work within the (`frontend`) area. 

* <b>System administrators</b> customizing a storefront can indirectly manipulate the presentation layer by, for example, adding themes or widgets to the front end.

* <b>Web API calls</b> can be made through HTTP just like browser requests, and can be made via AJAX calls from the user interface.




<h3>Presentation layer components</h3>

One helpful way of understanding the Magento presentation layer components is by examining Magento <i>themes</i>. Magento themes organize both the visual aspect of your storefront and certain aspects of product behavior. 

Each theme resides in a unique directory and contains custom page layouts, templates, skins, and language files that work together to create a distinct user experience. 

For an extensive introduction to theme elements and an overview of how to extend and override the default Magento themes, see the <a href="{{ site.gdeurl }}frontend-dev-guide/bk-frontend-dev-guide.html">Frontend Developer Guide</a>.



<h3>View model</h3>

Magento generates the HTML for a page to display to a user from a tree of view elements. 

View elements fall into two main categories: Blocks and containers.


* Blocks can generate dynamic content and can contain named child view elements that are similar to arguments being passed in. (The `as` attribute holds the child view element names for the parent block to reference them)

* Containers collect an ordered group of children view elements.


The browser forms a product web page by asking the view element tree to render itself into HTML. Containers and blocks emit HTML that encloses their children appropriately. Blocks can generate their content using static HTML, Knockout JS scripts, and PHTML.


<h3>How Presentation code calls other layers</h3>
Presentation code typically calls service contracts, particularly for a store front. However, presentation code is occasionally dependent on a specific implementation that requires the presentation code to directly call the <i>business logic</i> layer. For example, the Admin UI screens are often tightly linked to a specific implementation and are not generic across implementations.

The View layer calls code from the Model to get information about the state of the application (for example, the price of a product). Typically, the way it accesses the Model is through service contracts. 

<h3>Presentation layer flow</h3>
Web users interact with components of the presentation layer to select actions that initiate calls to the underlying product layers. Presentation layer components make calls to the Service layer, which in turn sends requests to the Domain (or business logic) layer.



<h3 id="related">Related topics</h3>
<a href="{{ site.gdeurl }}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>

<a href="{{ site.gdeurl }}architecture/archi_perspectives/ALayers_intro.html">Architectural layers overview</a>







 

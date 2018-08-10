---
group: arch-guide
title: Presentation Layer
menu_title: Presentation layer
version: 2.1
redirect_from: /guides/v1.0/architecture/archi_perspectives/present_layer.html
---

## What is the Magento Presentation layer?

When you interact with the Magento web interface, you are interacting with *presentation layer* code. The presentation layer is the top layer of the four layers (presentation, service, domain, and persistence layers) described by the Magento architecture.

The presentation layer contains both view elements **(layouts, blocks, templates)** and **controllers**, which process commands to and from the user interface. Presentation code controls web user interaction with the product and its appearance. You can extensively customize the user interface by using HTML, CSS, and {% glossarytooltip ae0f1f68-c466-4189-88fd-6cd8b23c804f %}PHTML{% endglossarytooltip %} files to modify elements of the presentation layer. Basically, the presentation layer represents the customization of HTML, CSS, JavaScript, Magento UI, PHTML files, and block files.

## Who uses the Presentation layer?

Magento uses *areas* to efficiently make web service calls, loading only the dependent code that is required for the particular type of user. Three types of Magento users interact with presentation layer code:

* **Web users** interact with the storefront, where they can see the View model of data displayed by Magento and interact with product UI elements to request data for view and manipulation. These users work within the (`frontend`) area.

* **System administrators** customizing a {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} can indirectly manipulate the presentation layer by, for example, adding themes or widgets to the front end.

* **Web {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} calls** can be made through HTTP just like browser requests, and can be made via AJAX calls from the user interface.

## Presentation layer components

One helpful way of understanding the Magento presentation layer components is by examining Magento *themes*.
Magento themes organize both the visual aspect of your storefront and certain aspects of product behavior.

Each {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} resides in a unique directory and contains custom page layouts, templates, skins, and language files that work together to create a distinct user experience.

For an extensive introduction to theme elements and an overview of how to extend and override the default Magento themes, see the [Frontend Developer Guide]({{page.baseurl}}/frontend-dev-guide/bk-frontend-dev-guide.html).

## View model

Magento generates the {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} for a page to display to a user from a tree of view elements.

View elements fall into two main categories: blocks and containers.

* **Blocks** can generate {% glossarytooltip f7550977-2132-4155-a5e0-d000fcfea866 %}dynamic content{% endglossarytooltip %} and can contain named child view elements that are similar to arguments being passed in.
(The `as` attribute holds the child view element names for the parent block to reference them)

* **Containers** collect an ordered group of children view elements.

The browser forms a product web page by asking the view element tree to render itself into HTML.
Containers and blocks emit HTML that encloses their children appropriately.
Blocks can generate their content using static HTML, Knockout JS scripts, and PHTML.

## How Presentation code calls other layers

Presentation code typically calls service contracts, particularly for a storefront.
However, presentation code is occasionally dependent on a specific implementation that requires the presentation code to directly call the *business logic* layer.
For example, the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} UI screens are often tightly linked to a specific implementation and are not generic across implementations.

The View layer calls code from the Model to get information about the state of the application (for example, the price of a product). Typically, the way it accesses the Model is through service contracts.

## Presentation layer flow

Web users interact with components of the presentation layer to select actions that initiate calls to the underlying product layers.
Presentation layer components make calls to the Service layer, which in turn sends requests to the {% glossarytooltip 41aee03b-a5d5-49c2-8839-894090ef4e86 %}Domain{% endglossarytooltip %} (or business logic) layer.

## Related topics {#related}

[Architectural diagrams]({{page.baseurl}}/architecture/archi_perspectives/arch_diagrams.html)

[Architectural layers overview]({{page.baseurl}}/architecture/archi_perspectives/ALayers_intro.html)

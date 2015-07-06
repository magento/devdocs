---
layout: default
group: arch-guide
subgroup: Architecture
title: Architecture layers
menu_title: Presentation layer
menu_order: 3
github_link: architecture/archi_perspectives/present_layer.md
---




<h2> Presentation layer</h2>


<h3>How Presentation code calls other layers</h3>
Presentation code typically calls service contracts, particularly for a store front. However, presentation code is occasionally dependent on a specific implementation that requires the presentation code to directly call the business logic layer. For example, the Admin UI screens are often tightly linked a specific implementation and are not generic across implementations.

<h2 id="related">Related topics</h2>
<a href="{{ site.gdeurl }}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>


 

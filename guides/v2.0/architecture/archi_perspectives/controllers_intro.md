---
layout: default
group: 
subgroup: Architectural Layers
title: Magento Blocks and Controllers
menu_title: Magento Blocks and Controllers
menu_order: 
version: 2.0
github_link: architecture/archi_perspectives/controllers_intro.md
redirect_from: /guides/v1.0/architecture/archi_perspectives/controllers_intro.html
---




<h2>Magento Blocks and Controllers</h2>
Blocks hold presentation logic -- no business logic code that controls. 

blocks provide methods that templates can use to make the template file easier to read. Blocks contain view-related logic. Blocks are cached. Keeping lots of logic in blocks in good!


You can add new controllers without modifying the front controller

<h3>Introduction to Blocks</h3>
types of blocks

 Layouts have output blocks
 
 
<h3>Introduction to Controllers</h3>


<h3>Magento Front Controller</h3>
 front controller design pattern has two parts


Tasks are highly limited, restricted to routing and dispatching.
Follows the software design pattern commonly implemented in PHP-based applications of a front controller. 

A solution to this problem is known as Front Controller. This design pattern channels every incoming request to a single point of entry – a front controller. This handler object performs all the common subroutines and then dispatches the request to a controller that handles specifics. The adoption of this approach is wide-spread owing to its flexibility and scalability.

Blocks and controllers are discussed extensively in the



 
<h2 id="related">Related topics</h2>
<a href="{{page.baseurl}}architecture/archi_perspectives/arch_diagrams.html">Architectural diagrams</a>

Presentation Layer








 

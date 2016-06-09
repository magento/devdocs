---
layout: default
group: pattern
subgroup: Container
title: Magento Admin Pattern Library
menu_title: Tabs
menu_order: 3
menu_node: 
version: 2.1
github_link: pattern-library/containers/tabs/tabs.md
---
<h2> Tabs </h2>

<h3> Contents </h3>

* <a href="#overview">Overview</a>
* <a href="#when-to-use">When to Use</a>
* <a href="#when-not-to-use">When Not to Use</a>
* <a href="#interactions-behavior">Interactions and Behavior</a>
* <a href="#style">Style</a>
* <a href="#example">Example</a>
* <a href="#accessibility">Accessibility</a>
* <a href="#assets">Assets</a>



<h3 id="overview">Overview</h3>

Tabs should be used when the user needs to alternate between views within the same context.

For solutions not described in this article or for further information, please contact the Magento UX Design Team.

<h3 id="when-to-use">When to Use</h3>
*	When a page has secondary content 

*	When the number of sections is able to fit the width of the container without wrapping or being cut off at the edges.

*	When the content for each tab has a similar structure.

<h3 id="when-not-to-use">When Not to Use</h3>
*	Do not use tabs if the user needs to simultaneously see content from multiple tabs.

*	Do not use tabs if the content of the tab would function more effectively as a separate container or on a separate page.

*	Be cognizant of the type of paradigm that best fits the content. Refer to the expandable containers pattern well and determine the ideal practice.

<h3 id="interactions-behavior">Interactions and Behavior</h3>

When the user click on a tab, the content area associated with that tab will be shown. There are 3 states that a tab can be:

**Active State**

*	Active tab should be “highlighted” to indicate that it’s currently active.

*	Should not be clickable while active.

**Inactive State**

*	Should be clickable.

*	Should have a hover state.

**Disabled State**

*	When a tab is not clickable for any reason, it should be shown in its disabled state.

<h3 id="style">Style</h3>

<img src="img/tabs.jpg">

<h3 id="example">Example</h3>

<img src="img/tabs-example.jpg">

<h3 id="accessibility">Accessibility</h3>

User should be able to navigate through each tab with their keyboard.

Follow the rule "Make all functionality available from a keyboard."

<a href="http://www.w3.org/TR/WCAG20/#keyboard-operation">http://www.w3.org/TR/WCAG20/#keyboard-operation</a>


<h3 id="assets">Assets</h3>

Please reach out to the Magento UX Design team if you need anything else.

<a href="src/magento-tabs.psd">Download Tabs PSD source</a>




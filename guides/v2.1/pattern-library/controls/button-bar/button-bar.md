---
layout: default
group: pattern
subgroup: Controls
title: Magento Admin Pattern Library
menu_title: Button Bar
menu_order: 2
menu_node: 
version: 2.1
github_link: pattern-library/controls/button-bar/button-bar.md
---


<h2> Button Bar </h2>

<h3> Contents </h3>

* <a href="#overview">Overview</a>
* <a href="#when-to-use">When to Use</a>
* <a href="#when-not-to-use">When Not to Use</a>
* <a href="#rules">Rules</a>
* <a href="#style">Style</a>
* <a href="#behavior">Behavior</a>
* <a href="#accessibility">Accessibility</a>
* <a href="#assets">Assets</a>


<h3 id="overview">Overview</h3>

Within Magento application, it is often necessary to provide users with page level actions. These actions should be contain in a button bar as described in this guideline.

For solutions not described in this article, please refer to other related patterns or contact the Magento UX Design team.


<h3 id="when-to-use">When to Use</h3>
* When page level actions are necessary.


<h3 id="when-not-to-use">When Not to Use</h3>
* When there is already a button bar.
* When there is a wizard bar.
* When buttons are needed but they are not page level buttons.


<h3 id="rules">Rules </h3>

#### 1. General Rules
* Only one button bar is allowed per page.
* Either use a button bar or a wizard bar. Both cannot be on the page.
* The buttons within the button bar must be one of the page-level buttons from <a href="../buttons/buttons.html" > buttons pattern.</a>
* All the buttons in button bar should be visible at all time. 

#### 2. Location

* Button bar can be used in a page or a slide-in panel.  
* Its location in either scenario must be right below the page title or the slide-in panel title.

<br>
**Button Bar Position in Page**<br><br>
<img src="img/position-in-page.jpg">

<br>

**Button Bar Position in Slide-in Panel**<br><br>
<img src="img/position-in-modal.jpg">


#### 3. Page Level Button Order and Priority - General Rules

* There should never be more than one primary page level button on a single page.
* Primary page level buttons should always be placed on the far right of the button order.
* If a Back button is present, it should always fall on the far left of the button order.
* Buttons should be ordered by group as specified below. In situations where button groups do not apply, they should be ordered by importance.

####  4. Ordering of Button Bar

Page level buttons can be logically grouped as follows:

* Regress
* Remove
* Progress

<br>

Groups can contain multiple CTAs but only one primary CTA. Groups should follow the below order:

<img src="img/buttonbar1.png">

#### 5. Ordering by Importance

There should never be more than one primary page level CTA on the same page. Page
level CTAs should assume an ascending order of importance from left to right wherever
possible, i.e. least important buttons followed by most important.


<img src="img/buttonbar-importance.png">



<h3 id="style">Style</h3>

All buttons should be right aligned. The button bar is spread across 12 columns and should be fluid. 

<img src="img/buttonbar-style.jpg">


#### Recommendation

1. It is recommended that all buttons in button bar should only be in one line. Because the button bar is in fluid grid, it is possible for the buttons to be wrap around to the next line. 

2. If you have multiple page-level buttons. We recommend using the split button rather having too many buttons that will clutter the page.

<img src="img/button-bar-with-splitbutton.jpg">



<h3 id="behavior">Behavior</h3>

####Sticky button bar

To ensure page level actions are always visible, The button bar should stick to the top of a browser as the user scrolls and the top of button bar hits the top of browser.

**1.Initial State**

<img src="img/button-bar-sticky1.jpg">

<br>
<br>

**2.After user scrolls, the button bar sticks to the browser.**

<img src="img/button-bar-sticky2.jpg">


<h3 id="accessibility">Accessibility</h3>
Buttons should make use of CSS and HTML so that button text is never dependent on a
graphic asset.


<h3 id="assets">Assets</h3>

Please reach out to the Magento UX Design team if you need anything else.

<a href="src/magento-button-bar.psd">Download Button Bar PSD source</a>


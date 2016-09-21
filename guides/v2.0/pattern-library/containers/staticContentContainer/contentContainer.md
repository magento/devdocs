---
layout: default
group: pattern
subgroup: Container
title: Admin Design Pattern Library
menu_title: Static Content Container
menu_order: 1
menu_node: 
version: 2.0
github_link: pattern-library/containers/staticContentContainer/contentContainer.md
redirect_from: /guides/v1.0/pattern-library/containers/staticContentContainer/contentContainer.html
---
<h2> Static Content Container </h2>

<h3> Contents </h3>

*	<a href="#overview">Overview</a>
*	<a href="#when-to-use">When to Use</a>
* <a href="#when-no-to-use">When Not to Use</a>
* <a href="#rule">Rule</a>
* <a href="#variations">Variations</a>
* <a href="#assets">Assets</a>



<h3 id="overview">Overview</h3>

Within the Magento application, it is often necessary to display static information to the users. These static content are considered Content Container and should follow the guideline in this article.

For solutions not described in this article or for further information, please contact the Magento UX Design Team.

<h3 id="when-to-use">When to Use</h3>
* Use this pattern when we need to display static information to the users. 

<h3 id="when-not-to-use">When Not to Use</h3>
* Do not use this pattern if users need to be able to interact with the information.

<h3 id="rule">Rule</h3>
The basic rule is that the content containers should have a title and a content below it. Refer to variations for the styling examples.

<h3 id="variations">Variations</h3>

#### 1. Parent and Child Containers

The following example, shows two sets of parent & child containers. Each parent containers has 2 children containers. There can be 1 or more children. 

It is not recommended to have more than one layer of parent-child (i.e. grand children are not recommended) But if there are exceptions made, the hierarchy should be shown clearly.

**Structure**

The parent container structure: title, rule, content.

<img src="img/Var1-structure.png">

**Styling**

Note that because the children containers can be any variations of other content containers, refer to other variations for styling.

<img src="img/Var1-style.png">

#### 2. Title with Body of Text

**Width:** based on the page grid

**Height:** as needed

<img src="img/Var2-style.png">

#### 3. Title with Differentiated Rows

**Width:** based on the page grid

**Height:** as needed

This is used to clearly separate information for users to easily digest. 
The first row should be grey then, the rows alternate between grey and white.

<img src="img/Var3-style.png">

#### 4. Pricing Breakdown chart

**Width:** based on the page grid

**Height:** as needed

This is used to clearly separate information for users to easily digest. 

<img src="img/Var4-style.png">


<h3 id="assets">Assets</h3>


Please reach out to the Magento UX Design team if you need anything else.

<a href="src/magento-static-content-container.psd">Download Static Content Container PSD source</a>

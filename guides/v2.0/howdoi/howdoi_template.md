---
layout: default
group: howdoi
subgroup: 
title: 
menu_title: 
menu_node: 
menu_order: 1
github_link: howdoi/howdoi_template.md
---

<!-- Author in Markdown but HTML also welcome -->

<!-- Start with H2, not H1 -->

## YOUR HEADING
INTRODUCTORY TEXT, EXPLAIN WHAT YOUR ARTICLE IS ABOUT

## ANOTHER HEADING

### A SMALLER HEADER

<!-- Bulleted list -->

*	Text
*	Text
*	Text

<!-- Ordered list -->

1.	Step 1
2.	Step 2
3.	Step 3

<!-- Image link -->

Please submit all images to our <a href="https://github.com/magento/devdocs/tree/develop/common/images">`common/images`</a> directory.

Format the link as follows:

<img src="{{ site.baseurl }}common/images/FILENAME.png" alt="Alt text for the image">

<!-- Sample HTML cross-reference; don't worry too much about these, we can add or edit them -->
<!-- {{ site.gdeurl }} is a site variable that is defined in _config.yml; it's the base path to the devdocs guides/v2.0 directory -->


<!-- Sample 4 x 3 table -->

|  Column Heading  |  Column Heading  |   Column Heading |
|---|---|---|
|   |   |   |
|   |   |   |
|   |   |   |

<!-- Note, Important, Tip: These must be HTML -->

<div class="bs-callout bs-callout-info" id="info">
  <p>This is a note.</p>
</div>


<div class="bs-callout bs-callout-warning">
    <p>This is important.</p>
</div>

<div class="bs-callout bs-callout-tip">
  <p>This is a tip.</p>
</div>
---
layout: default
group: howdoi
subgroup: SUBJECT
title: PAGE TITLE
menu_title: NAME ON MENU
menu_node: parent
menu_order: 1
github_link: howdoi/PATH/FILENAME.md
---

<!-- Author in Markdown but HTML also welcome -->

<!-- Start with H2, not H1 -->

## YOUR HEADING
INTRODUCTORY TEXT, EXPLAIN WHAT YOUR ARTICLE IS ABOUT

To have a successful migration, use the following guidelines:

## ANOTHER HEADING

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

<img href="{{ site.baseurl }}common/images/FILENAME.png" alt="Alt text for the image">

<!-- Sample HTML cross-reference; don't worry too much about these, we can add or edit them -->
<!-- {{ site.gdeurl }} is a site variable that is defined in _config.yml; it's the base path to the devdocs guides/v2.0 directory -->

For full information please see the complete <a href="{{ site.gdeurl }}migration/bk-migration-guide.html">Migration Guide</a>

<!-- Sample 4 x 3 table -->

|   |   |   |
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
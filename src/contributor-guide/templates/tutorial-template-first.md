---
layout: tutorial
level3_subgroup: sample-tutorial
title: Sample template tutorial
menu_title: Initial tasks
menu_order: 0
return_to:
   title: Code Contributions
   url: contributor-guide/contributing.html
redirect_from:
- guides/v2.3/contributor-guide/templates/tutorial-template-first.html
- guides/v2.4/contributor-guide/templates/tutorial-template-first.html
---

A tutorial provides procedural information spread across multiple pages. It contains several design elements that differ from standard topics:

*  A tutorial replaces the navigation with a table of contents that is specific to the tutorial.
*  The bottom of the index page contains a **Begin Tutorial** button.
*  **Next** and **Previous** buttons are displayed at the bottom of each topic.

## Metadata parameters

You must use the following metadata parameters on the tutorial index page.

Parameter | Description
--- | ---
`layout:` | Must be `tutorial`.
`level3_subgroup:` | A group name that binds the tutorial topics together. This value must be specified on each topic in the tutorial.
`title:` | The title of the tutorial.
`menu_title:` | On the index page of the tutorial, specify `Initial tasks`.
`menu_order:` | The sequence number of the topic. For the index page in a multi-step tutorial, set this 0.
`return_to:` | Defines the tutorial's parent page. The parent page title is displayed in the left navigation above the tutorial steps. Do not specify a value for the `return_to:` parameter. Instead, specify values for these second-level parameters:<br/><br/>`title:` The title of the parent topic<br/><br/>`url:` The URL of the parent topic
`functional_areas:`  |  Optional. Adds facets for search results. Available facets include: sales, products, carts, customers, marketing, account, content, reports, stores, system, catalog, orders, frontend, theme, staging, search, configurations, integration, services, tools, setup, testing or test, standards, install, upgrade, B2B, cloud, and bundled extensions.
`redirect_from`  | Optional. Add a list of other pages in DevDocs that should redirect to this page. The link should start with the `/guides` directory. For an example, see the source code for this template page.  |
`ee_only:` | Optional. If set to `true`, graphics/cues indicating that the article applies to {{site.data.var.ee}} are displayed on devdocs.

The following example shows the completed frontmatter section for an index page:

```yaml
layout: tutorial
level3_subgroup: order-tutorial
title: Order processing tutorial
menu_title: Initial tasks
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
menu_order: 0
```

## Before you begin...

_This tutorial will show a \<audience/skill level> how to \<perform the task addressed in this topic>._

Summarize the goals of the tutorial and the benefit that the reader will receive upon completion.
This summary should be very brief (about 3 lines).

(Optional) _The **X-step tutorial** generally takes **YY minutes**._

## Complete these prerequisites

*  List any skills required (PHP, database, admin, etc.)
*  List any assumptions or requirements before starting.
*  List any steps, bulleted and in order, necessary before starting the tutorial.

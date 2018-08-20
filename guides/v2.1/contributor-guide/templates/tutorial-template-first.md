---
layout: tutorial
group: contributor
subgroup: templates
title: Sample template tutorial
menu_title: Initial tasks
menu_order: 0
level3_subgroup: sample-tutorial
return_to:
   title: Code Contributions
   url: contributor-guide/contributing.html
---

A tutorial provides procedural information spread across multiple pages. It contains several design elements that differ from standard topics:

* A tutorial replaces the navigation with a table of contents that is specific to the tutorial.
* The bottom of the index page contains a **Begin Tutorial** button.
* **Next** and **Previous** buttons are displayed at the bottom of each topic.

## Metadata parameters

The following table lists the {% glossarytooltip 3f0f2ef1-ad38-41c6-bd1e-390daaa71d76 %}metadata{% endglossarytooltip %} parameters that are used on the index page of a tutorial.

Parameter | Description
--- | ---
`layout:` | Must be `tutorial`.
`group:` | The group, or book, to which the topic belongs.
`title:` | The title of the tutorial.
`menu_title:` | On the index page of the tutorial, specify `Initial tasks`.
`level3_subgroup:` | A group name that binds the tutorial topics together. This value must be specified on each topic in the tutorial.
`menu_order:` | The sequence number of the topic. For the index page in a multi-step tutorial, set this 0.
`return_to:` | Defines the tutorial's parent page. The parent page title is displayed in the left navigation above the tuturial steps. Do not specify a value for the `return_to:` parameter. Instead, specify values for these second-level parameters:<br/><br/>`title:` The title of the parent topic<br/><br/>`url:` The URL of the parent topic
`ee_only:` | Optional. If set to `true`, graphics/cues indicating that the article applies to EE are displayed on devdocs.

A completed frontmatter section for an index page:

```
layout: tutorial
group: rest
title: Order processing tutorial
menu_title: Initial tasks
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
menu_order: 0
level3_subgroup: order-tutorial
```

## Before you begin...
{:.tutorial-before}

_This tutorial will show a \<audience/skill level> how to \<perform the task addressed in this topic>._

Summarize the goals of the tutorial and the benefit that the reader will receive upon completion.
This summary should be very brief (about 3 lines).

(Optional) _The **X-step tutorial** generally takes **YY minutes**._

## Complete these prerequisites

* List any skills required (PHP, database, admin, etc.)
* List any assumptions or requirements before starting.
* List any steps, bulleted and in order, necessary before starting the tutorial.

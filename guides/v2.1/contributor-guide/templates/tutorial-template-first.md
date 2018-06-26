---
layout: tutorial
group: contributor
subgroup: templates
title: Sample template tutorial
subtitle: Sample template tutorial
menu_title: Initial tasks
menu_order: 0
level3_menu_node:
level3_subgroup: sample-tutorial
version: 2.1
github_link: contributor-guide/templates/tutorial-template-first.md
---

A tutorial provides procedural information spread across multiple pages. It contains several design elements that differ from standard topics:

* When a user clicks on a tutorial title from the left navigation area, the Devdocs {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} replaces the navigation with a table of contents that is specific to the tutorial.
* **Next** and **Previous** buttons are displayed at the bottom of each topic.

## Metadata parameters

The following table lists the {% glossarytooltip 3f0f2ef1-ad38-41c6-bd1e-390daaa71d76 %}metadata{% endglossarytooltip %} parameters that are used in a tutorial.

Parameter | Description
--- | ---
`layout:` | Must be `tutorial`.
`group:` | The group, or book, to which the topic belongs.
`subgroup:`| First page only. Places a link with the specified text to the {% glossarytooltip 31751771-8163-434b-88bc-c5f94d859fc3 %}sidebar{% endglossarytooltip %}
`level3_subgroup:` | A group name that binds the tutorial topics together. This value must be specified on each topic in the tutorial.
`title:` | The title of the tutorial.  On the first pageFor all other topics in the tutorial, this value should be in the form _Step X. Perform this task_. (For example, `Step 1. Configure the Store`)
`subtitle` | Displays the tutorial name. The value must be specified on each topic in the tutorial.
`menu_title:` | On the first page of the tutorial, specify `Initial tasks`. Otherwise, leave this line blank.
`menu_order:` | The sequence number of the topic. If the topic is an intro topic in a multi-step tutorial, set this 0. Otherwise set it to the step number.
`version:` | The version of Magento that this topic applies to.
`github_link:` | The path to the MD file, starting at the book directory. Ex: `get-started/order-tutorial/order-intro.md`
`ee_only:` | If set to `true`, graphics/cues indicating that the article applies to EE are displayed on devdocs.

## Before you begin...
{:.tutorial-before}

This tutorial will show a < audience/skill level> how to < perform the task addressed in this topic. > Summarize the goals of the tutorial and the benefit that the reader will receive upon completion. This summary should be very brief--about 3 lines.

(Optional) The **X-step tutorial** generally takes **YY minutes**.

## Complete these prerequisites

* List any skills required (PHP, database, admin, etc.)
* List any assumptions or requirements before starting.
* List any steps, bulleted and in order, necessary before starting the tutorial.

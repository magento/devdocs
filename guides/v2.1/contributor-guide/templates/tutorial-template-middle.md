---
layout: tutorial
group: contributor
title: Step 1. Start the procedure
subtitle: Sample template tutorial
menu_order: 1
level3_subgroup: sample-tutorial
return_to:
   title: Code Contributions
   url: contributor-guide/contributing.html

---

Add the content for each step as you see fit.

## Metadata parameters

The {% glossarytooltip 3f0f2ef1-ad38-41c6-bd1e-390daaa71d76 %}metadata{% endglossarytooltip %} parameters for a middle page of a tutorial are the same as the index page, except middle pages also use the `subtitle` parameter.

Parameter | Description
--- | ---
`layout:` | Must be `tutorial`.
`group:` | The group, or book, to which the topic belongs.
`title:` | The title of the topic. This value should be in the form _Step X. Perform this task_. (For example, `Step 1. Configure the Store`)
`menu_title:`| Optional. Use this parameter only if you don't want the title in the left navigation to match the topic title.
`subtitle` | The title of the tutorial. This value should match the `title` value in the index file. 
`level3_subgroup:` | A group name that binds the tutorial topics together. This value must be specified on each topic in the tutorial.
`menu_order:` | The sequence number of the topic. For the index page in a multi-step tutorial, set this 0. Otherwise set it to the step number.
`return_to:` | Defines the tutorial's parent page. The parent page title is displayed in the left navigation above the tuturial steps. Do not specify a value for the `return_to:` parameter. Instead, specify values for these second-level parameters:<br/><br/>`title:` The title of the parent topic<br/><br/>`url:` The URL of the parent topic
`ee_only:` | Optional. If set to `true`, graphics/cues indicating that the article applies to EE are displayed on devdocs.

Example:

```
layout: tutorial
group: rest
title: Step 1. Configure the store
subtitle: Order processing tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
menu_order: 1
level3_subgroup: order-tutorial
```

## Secondary heading

Use a Head2 (`## Heading`) as the highest-leveling heading in this topic.

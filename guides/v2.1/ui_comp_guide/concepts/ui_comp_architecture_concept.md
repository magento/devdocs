---
layout: default
group: UI_Components_guide
subgroup: concepts
title: Architecture Structure of UI Components
menu_title: Architecture Structure of UI Components
menu_order: 1
version: 2.1
github_link: ui_comp_guide/concept/ui_comp_architecture_concept.md
---

{{page.menu_title}}

A UI Component is, basically, a JavaScript object.

A UI Component can be configured in `.xml` or `.phtml` or even in `.php`, or created dynamically inside another component. Typically, any UI Component instance is bound to some `.html` template(s).

The usual UI Component is seen by the user as an distinct and highly interactive part of the UI: form, field, listing toolbar, button an so on.

 UI Components are configured using primarily the following:

1. `declaration.xml` file: the structure, with nodes, nested nodes, argument and so on.
2. UI component XML declaration (the instance).
3. Backend/PHP modifiers.
4. Configuration inside the JavaScript class.

## Related reading

- For information about the configuration and instantiation flow, refer to [UI Components configuraiton flow]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_config_flow_concept.html).


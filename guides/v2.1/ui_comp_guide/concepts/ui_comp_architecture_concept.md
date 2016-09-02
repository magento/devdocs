---
layout: default
group: UI_Components_guide
subgroup: concepts
title: Architecture Structure of UI Components
menu_title: Architecture Structure of UI Components
menu_order: 1
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_architecture_concept.md
---

##  {{page.menu_title}}
{:.no_toc}

A UI component instance is, basically, a JavaScript object.

A UI component can be configured in `.xml` or `.phtml` or even in `.php`, or created dynamically inside another component. Typically, any UI component instance is bound to some `.html` template.

The usual UI component is seen by the user as an distinct and highly interactive part of the UI: form, field, listing toolbar, button an so on.

UI components are configured using primarily the following:

1. `declaration.xml` file: the structure with nodes, nested nodes, options and so on.
2. UI component XML declaration (the instance).
3. Backend/PHP modifiers.
4. Configuration inside the JavaScript classes.

## Related reading

For information about the configuration and instantiation flow, refer to [UI Components configuration flow]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_config_flow_concept.html).

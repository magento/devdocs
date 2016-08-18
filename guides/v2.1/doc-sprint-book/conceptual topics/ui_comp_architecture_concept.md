---
layout: default
group: UI Components
subgroup: Concepts
title: About UI components architecture
menu_title: About UI components architecture
menu_order: 1
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_architecture_concept.md
---


## About UI components architecture
{:.no_toc}

<!-- Table of Content -->
* Table of Content placeholder; required but will not be rendered
{:toc}

Architectural Structure of UI Components


## Overview 

A UI Component is, basically, a JavaScript object.

A UI Component can be configured in .xml or .phtml or even in .php, or created dynamically inside another component. Typically, any UI Component instance is bound to some .html template(s). 

The usual UI Component is seen by the user as an distinct and highly interactive part of the UI: form, field, listing toolbar, button etc. 

 UI Components are configured using primarily the following:

1) declaration.xml file: the structure, with nodes, nested nodes, argument etc (link to separate topic on this)
2) UI component xml declaration (the instance) (link to separate topic on this)
3) Backend/PHP modifiers (link to separate topic on this)
4) Configuration inside the JS class (link to separate topic on this)

For information about the configuration and instantiation flow, refer to {{Configuration Flow of UI Components}}.
For information about the application flow (data, etc), trfrt to {{….}}
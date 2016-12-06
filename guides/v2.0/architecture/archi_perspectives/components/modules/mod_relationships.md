---
layout: default
group: arch-guide
subgroup: Components
title: Module relationships
menu_title: Module relationships
menu_order: 5
level3_menu_node: level3child
level3_subgroup: modules
version: 2.0
github_link: architecture/archi_perspectives/components/modules/mod_relationships.md
redirect_from:
  - /guides/v1.0/architecture/modules/mod_relationships.html
  - /guides/v2.0/architecture/modules/mod_relationships.html
---

## {{page.menu_title}}
{:.no_toc}

* TOC
{:toc}

## Overview {#m2arch-module-relationships-overview}

Understanding how one module relates to another helps determine how it reacts to changes in that module.

A single module can have the following types of relationships with another module:

* **uses**: module A uses module B if it invokes behavior of module B

* **reacts to**: module A reacts to module B if its behavior is triggered by an event in module B without module B knowing about module A

* **customizes**: module A customizes module B if it modifies the behavior of module B

* **implements**: module A implements module B if it implements some, not necessarily all, behavior that is defined in module B

* **replaces**: module A replaces module B if it provides its own version of the API exposed and implemented by module B

## Relationship types and scenarios

### A uses B, C customizes B

In a scenario where module A uses module B and module C customizes module B, the customizations in module C cannot break the API of module B so that module A still functions properly in the face of these customizations.

![Module relationship scenarios: A uses B, C customizes B]({{site.baseurl}}common/images/archi_first_relate.png)

### A reacts to B, C customizes B

Similarly, in a case where module A reacts to module B and module C customizes module B, the customizations in module C must not interfere with the events in module B that module A depends on.

![Module relationship scenarios: A reacts to B, C customizes B]({{site.baseurl}}common/images/archi_second_relate.png)

### A and C customize B

<p>If both module A and C customize module B, be careful about how these customizations are implemented so that you avoid conflicts (see below).</p>

![Module relationship scenarios: A and C customize B]({{site.baseurl}}common/images/archi_third_relate.png)

### A replaces B

If module A replaces module B, it needs to be able to do so in such a way that other modules are not affected. That will mean not having direct hard dependencies on module B, but rather dependencies on a third module, module C, that both module A and B implement.

![Module relationship scenarios: A replaces B]({{site.baseurl}}common/images/archi_fourth_relate.png)

## Related topics {#m2arch-module-related}

<a href="{{page.baseurl}}architecture/archi_perspectives/components/modules/mod_intro.html">Module overview</a>

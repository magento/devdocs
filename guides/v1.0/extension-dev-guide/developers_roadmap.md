---
layout: default
group: extension-dev-guide
subgroup: How to
title: Developer's Roadmap
menu_title: Developer's Roadmap
menu_order: 1
github_link: extension-dev-guide/create_module.md

---

<h2 id="developer_roadmap_overview">Overview</h2>

This topic is intended to introduce the high-level workflow for a developer who wants to create, customize, or contribute to the Magento code and components.
 



<h2 id="developer_roadmap_resources">Developer Resources</h2>
There are several resources that you might want to take a look at as you consider your workflow:

1. <a href="https://github.com/magento/magento2-samples"> Sample extensions created by the Magento 2 Core team</a>
2. Magento 2 Developer's Hub, at <a href="magento.com/developers/magento2">magento.com/developers/magento2</a>
3. The <a href="{{ site.baseurl }}index.html">Magento 2 Documentation Library</a>, with Guides such as Coding Standards, Front-end Developers Guide, Installation and Configuration, and other documents about issues like our backwards compatibility policy, versioning, and using Magento APIs.
             


<h2 id="developer_roadmap_workflow">Workflow and related decisions</h2>
Now let's take a look at a high-level workflow, and start the process of thinking through any questions that you might have to decide before continuing.

IMAGE HERE

<div class="bs-callout bs-callout-info" id="info">
  <p>Take a look at a <a href="https://github.com/magento/magento2-samples/tree/master/m2-sample-minimal"> sample module</a> created by the Magento Core Team. </p>
  <p>The team is creating a <a href="https://github.com/magento/magento2-samples"> collection of samples</a> to demonstrate technologies introduced in Magento 2. You can edit your Magento 2 <code>composer.json</code> file to declare a dependency upon this package of sample modules, and then run <code>composer update</code> to download them. Look for more sample modules as we build them.</p>
 </div>

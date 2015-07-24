---
layout: default
group: extension-dev-guide
subgroup: 1_Introduction
title: PHP Developer Guide
menu_title: Developer Roadmap
menu_order: 2
github_link: extension-dev-guide/developers_roadmap.md
redirect_from: /guides/v1.0/extension-dev-guide/developers_roadmap.html

---
##{{page.menu_title}}


This topic introduces the high-level workflow for a developer who wants to create, customize, or contribute to the Magento code and components.

<h2 id="developer_roadmap_resources">Developer Resources</h2>
There are several resources that you might want to take a look at as you consider your workflow:

1. See the <a href="https://github.com/magento/magento2-samples">Sample extensions</a> created by the Magento 2 Core team
2. Magento 2 Developer's Hub, at <a href="http://magento.com/developers/magento2">magento.com/developers/magento2</a>
3. The <a href="{{ site.baseurl }}index.html">Magento 2 Documentation Library</a>, with Guides such as Coding Standards, Frontend Developers Guide, Installation and Configuration, and other documents about issues like our backwards compatibility policy, versioning, and using Magento APIs.


<h2 id="developer_roadmap_workflow">Workflow and related decisions</h2>
Now let's take a look at a high-level workflow, and consider some questions that you might have to decide before continuing.

<p><img src="{{ site.baseurl }}common/images/EDG_dev_roadmap.png" alt="Developer's roadmap"></p>

<div class="bs-callout bs-callout-info" id="info">
  <p>Take a look at a <a href="https://github.com/magento/magento2-samples/tree/master/sample-module-minimal"> sample module</a> created by the Magento Core Team. </p>
  <p>The Magento core team is creating a <a href="https://github.com/magento/magento2-samples"> collection of samples</a> to demonstrate technologies introduced in Magento 2. You can edit your Magento 2 <code>composer.json</code> file to declare a dependency upon this package of sample modules, and then run <code>composer update</code> to download them. Look for more sample modules as we build them.</p>
 </div>

---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Public interfaces & APIs
menu_title: Public interfaces & APIs
menu_order: 3
version: 2.0
github_link: extension-dev-guide/api-concepts.md
redirect_from: /guides/v1.0/extension-dev-guide/api-concepts.html
---

<h2 id="public-interface">What is a public interface?</h2>
<p>A <i>public interface</i> is a set of code that third-party developers can call, implement, or build as a {% glossarytooltip 9fceecbe-31be-4e49-aac7-11d155a85382 %}plug-in{% endglossarytooltip %}. Magento guarantees that this code will not change in subsequent releases without a major version change.</p>
<p>Public interfaces for a {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} are marked with <code>@api</code> annotation.</p>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Third-party developers should use only these interfaces, that is, interfaces with the `@api` annotation. You can use other interfaces but those may be modified or removed in subsequent Magento releases. For more information, see <a href="{{page.baseurl}}/contributor-guide/backward-compatible-development/">Backward compatibility</a>.</p></span>
</div>



<h2 id="api-definition">What is an API?</h2>
<p>An application programming interface (API) is a set of interfaces and their implementations that a module provides to other modules.</p>
<h3 id="api-types">API types</h3>
<p>The following items are considered types of APIs:</p>
<ul>
   <li>Directory structure</li>
   <li>Configuration files structure</li>
   <li>Events</li>
   <li>Client API</li>
   <li>Provider {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} (SPI)</li>
</ul>
<p>Directory structure and configuration file structure are types of APIs because {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} developers use them. Developers write configurations, and place their {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %} in specified folders; so if the configuration file structure or directory structure changes in subsequent releases, modules and extensions may break.</p>

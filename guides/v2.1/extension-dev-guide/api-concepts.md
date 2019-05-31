---
group: php-developer-guide
subgroup: 99_Module Development
title: Public interfaces & APIs
menu_title: Public interfaces & APIs
menu_order: 3
---

## What is a public interface? {#public-interface}

<p>A <i>public interface</i> is a set of code that third-party developers can call, implement, or build as a [plug-in](https://glossary.magento.com/plug-in). Magento guarantees that this code will not change in subsequent releases without a major version change.</p>
<p>Public interfaces for a [module](https://glossary.magento.com/module) are marked with <code>@api</code> annotation.</p>

{: .bs-callout .bs-callout-info }
Third-party developers should use only these interfaces, that is, interfaces with the `@api` annotation. You can use other interfaces but those may be modified or removed in subsequent Magento releases. For more information, see [Backward compatibility]({{ page.baseurl }}/contributor-guide/backward-compatible-development/).

## What is an API? {#api-definition}

<p>An application programming interface (API) is a set of interfaces and their implementations that a module provides to other modules.</p>

### API types {#api-types}

<p>The following items are considered types of APIs:</p>
<ul>
   <li>Directory structure</li>
   <li>Configuration files structure</li>
   <li>Events</li>
   <li>Client API</li>
   <li>Provider [API](https://glossary.magento.com/api) (SPI)</li>
</ul>
<p>Directory structure and configuration file structure are types of APIs because [extension](https://glossary.magento.com/extension) developers use them. Developers write configurations, and place their [static files](https://glossary.magento.com/static-files) in specified folders; so if the configuration file structure or directory structure changes in subsequent releases, modules and extensions may break.</p>

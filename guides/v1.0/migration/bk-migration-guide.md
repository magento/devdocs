---
layout: default
group:  migration
subgroup: Migration guide
title: Migration guide
menu_title: Migration guide
menu_node: parent
menu_order: 1
github_link: migration/bk-migration-guide.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#migrate-overview">Overview</a>
*	<a href="#migrate-prereq">Prerequisites</a>

<div class="bs-callout bs-callout-info" id="info">
<span>This topic is in draft form. Information in this topic might be incorrect or incomplete. Use the <strong>Edit this page on GitHub</strong> link at the top of this topic to send us feedback and suggestions.</p></span>
</div>

<h2 id="migrate-overview">Overview</h2>
We’re pleased you’re considering moving from the world’s #1 eCommerce platform—Magento 1.x—to the eCommerce platform for the future, Magento 2. We’re also excited to share the details about this process, which we refer to as migration.

Magento 2 migration involves four components: data, extensions, themes, and customizations. 

*	Data: We’ve developed the Magento 2 Data Migration Tool to help you efficiently port all of your key product, customer, and order data, store configurations, promotions and more to Magento 2. This paper provides information on the tool and best practices for using it to migrate your data

*	Custom code: Code is not ported because it cannot be automated.

*	Themes and Customizations: Magento 2 uses several new approaches and technologies that give merchants an unmatched ability to create innovative shopping experiences and scale to new levels. To take advantage of these advances, developers will need to make changes to their themes and customizations. Documentation is available online for creating Magento 2 themes, layouts, and customizations.

Just like an upgrade between 1.x versions (for example, from v1.12 to v1.14), the level of effort to migrate from Magento 1.x to Magento 2.0 depends upon how you have built your site and its level of customization.  Initial estimates indicate that an average Magento 2 migration is only about 20% larger than a Magento 1.x upgrade. Over the coming months, as we proceed with testing and the merchant beta program, we will be able to refine this number so you can plan your budgets and timelines. 
 
<h3 id="migrate-overview-versions">Supported versions</h3>
We support the following versions for migration:

*	Enterprise Edition (EE) version 1.9.1.0 
*	Community Edition (CE) version 1.9.1.0 

We also plan to support:

*  EE 1.11.x, EE 1.12.x, EE 1.13.x, and EE 1.14.x
*  CE 1.6.x, CE 1.7.x, CE 1.8.x, and CE 1.9.x

<h3 id="migrate-overview-not">What migration does not cover</h3>
Magento 2 takes advantage of several new approaches and technologies that give merchants an unmatched ability to create innovative shopping experiences, rapidly respond to changing market dynamics, and scale to new levels. But, these valuable changes mean that some custom code, extensions, and themes cannot be automatically migrated to the new platform. They might need to be adjusted or rebuilt to fit the enhanced Magento 2 architecture.

The migration tool does *not* automatically migrate the following.

#### Extensions and custom code
Design differences between Magento 1 and Magento 2 are so large that custom code and extensions must be manually ported to Magento 2. 

#### Media
Media assets include, for example, images for products, categories, WYSIWYG editor, and so on. You must copy these manually from `<your Magento 1 install dir>/media` directory to `<your Magento 2 install dir>/pub/media` directory.

#### Storefront design
Cascading Stylesheets (CSS), JavaScript, templates, and XML layouts are implemented differently in Magento 2 and must be migrated manually.

#### Layouts
Layout updates implemented in Magento 1 cannot be used in Magento 2. You must migrate the following manually:

*	XML in CMS category pages in the Magento Admin
*	Layout updates specified in widget instances

#### Web services credentials
You must manually create credentials for SOAP, XML-RPC and REST in Magento 2.

#### Indexed data
You should perform a full reindex before you enable Magento 2 on the production sever.

#### Google Shopping
Google Shopping shipped in some older Magento 1 versions but has since been removed.

#### Data that is not supported in Magento 2
Poll, tag, staging modules, and recurring profiles are not currently supported in Magento 2.

<h2 id="migrate-prereq">Prerequisites</h2>
Before you start your migration, you must do all of the following:

*	Set up a Magento 2.0 system that meets our <a href="{{ site.gdeurl }}/install-gde/system-requirements.html">system requirements</a>.

	Set up your system using a topology and design that at least matches your existing Magento 1.x system.

*	Do not start Magento 2.0 cron jobs.

*	Back up or <a href="https://dev.mysql.com/doc/refman/5.1/en/mysqldump.html" target="_blank">dump</a> your Magento 2 database as soon after installation as possible.

*	Check that the data migration tool has a network connection the Magento 1.x and Magento 2 databases.

	Open ports in your firewall so the migration tool can communicate with the databases and so the databases can communicate with each other.

*	To provide redundancy in the event of unexpected issues, we advise you to replicate your Magento 1.x database.

*	Migrate Magento 1.x extension code to Magento 2.0.

	Reach out to your extension providers to see if they have been ported yet.


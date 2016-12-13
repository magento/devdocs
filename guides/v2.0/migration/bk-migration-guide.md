---
layout: default
group:  migration
subgroup: A_Overview
title: Migration overview
menu_title: Overview
menu_node: parent
version: 2.0
menu_order: 1
github_link: migration/bk-migration-guide.md
redirect_from: /guides/v1.0/migration/bk-migration-guide.html
---

## Welcome! {#migrate-overview}

We're pleased you're considering moving from the world's #1 commerce platform --- Magento 1.x --- to the platform for the future, Magento 2. We're also excited to share the details about this process, which we refer to as migration.

## Migration components

Magento 2 migration involves four components: data, extensions and custom code, themes, and customizations.

### Data {#migrate-data}
We've developed the **Magento 2 Data Migration Tool** to help you efficiently move all of your products, customers, and order data, store configurations, promotions and more to Magento 2. This guide provides information on the tool and best practices for using it to migrate your data.

### Extensions and custom code {#migrate-extensions-code}
We've been working hard with the development community to help you use your Magento 1 extensions in Magento 2. Now we're proud to present the <a href="https://marketplace.magento.com/" target="_blank">Magento Marketplace</a>, where you can download or purchase the latest versions of your favourite extensions.

Also, we have developed the <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a>, which will help to port your extensions and custom code to Magento 2, significantly reducing your efforts.

More information on developing extensions for Magento 2 is available in the <a href="{{ page.baseurl }}extension-dev-guide/bk-extension-dev-guide.html" target="_blank">PHP Developer Guide</a>.

### Themes and customizations {#migrate-themes-customizations}

Magento 2 uses new approaches and technologies that give merchants an unmatched ability to create innovative shopping experiences and scale to new levels. To take advantage of these advances, developers will need to make changes to their themes and customizations. Documentation is available online for creating Magento 2 <a href="{{ page.baseurl }}frontend-dev-guide/themes/theme-general.html" target="_blank">themes</a>, <a href="{{ page.baseurl }}frontend-dev-guide/layouts/layout-overview.html" target="_blank">layouts</a>, and <a href="{{ page.baseurl }}frontend-dev-guide/layouts/xml-manage.html" target="_blank">customizations</a>.

## Migration efforts {#migrate-efforts}

Just like an upgrade between 1.x versions (for example, from v1.12 to v1.14), the level of effort to migrate from Magento 1 to Magento 2 depends upon how you have built your site and its level of customization. Initial estimates indicate that an average Magento 2 migration is only about 20% larger than a Magento 1.x upgrade.

However, we are constantly improving the Data Migration Tool (see the [Changelog](https://github.com/magento/data-migration-tool/blob/master/CHANGELOG.md){:target="_blank"} for more details); so the migration efforts are continuously decreasing.

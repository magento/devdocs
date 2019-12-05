---
group: migration-guide
subgroup: E_manually
title: Data that needs to be migrated manually
menu_title: Data that needs to be migrated manually
menu_node: parent
menu_order: 5
functional_areas:
  - Tools
---

## Data types

There are four kinds of data that need to be migrated manually:

*  Media

*  [Storefront](https://glossary.magento.com/storefront) design

*  [Admin](https://glossary.magento.com/admin) user accounts

*  Access Control Lists (ACLs)

## Media

This section discusses how to manually migrate media files.

### Media files stored in the database

This section applies to you *only* if you store media files in the Magento database. This step should be performed before <a href="{{ page.baseurl }}/migration/migration-migrate-data.html">migration of data</a>:

1. Log in to the Magento 1 Admin Panel as an administrator.

1. Click **System** > **Configuration** > ADVANCED > **System**.

1. In the right pane, scroll to **Storage Configuration for Media**.

1. From the **Select Media Database** list, click the name of your [media storage](https://glossary.magento.com/media-storage) database.

1. Click **Synchronize**.

Then, repeat the same steps in your Magento 2 Admin panel.

### Media files in the file system

All media files (images for products, categories, the [WYSIWYG](https://glossary.magento.com/wysiwyg) editor, and so on) should be copied manually from `<your Magento 1 install dir>/media` to `<your Magento 2 install dir>/pub/media`.

However, do *not* copy the `.htaccess` files located in the Magento 1 `media` folder. Magento 2 has its own `.htaccess` that should be preserved.

## Storefront design

*  Design in files (CSS, JS, templates, [XML](https://glossary.magento.com/xml) layouts) changed its location and format

*  [Layout](https://glossary.magento.com/layout) Updates stored in database. Placed through Magento 1 Admin in [CMS](https://glossary.magento.com/cms) Pages, CMS Widgets, [Category](https://glossary.magento.com/category) Pages and Product Pages

## Access Control Lists (ACLs)

You must manually re-create all:

*  credentials for web service APIs (SOAP, XML-RPC, and REST)

*  administrative user accounts and associate them with access privileges

 {:.bs-callout-info}
You may adjust the time zone for a database entity using the `\Migration\Handler\Timezone` handler. See the [Follow-up]({{ page.baseurl }}/migration/migration-migrate-follow-up.html) section for more details.

{:.ref-header}
Related topics

*  <a href="{{ page.baseurl }}/migration/migration-migrate-after.html">After migration</a>

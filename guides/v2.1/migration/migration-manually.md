---
group: migration
subgroup: E_manually
title: Data that needs to be migrated manually
menu_title: Data that needs to be migrated manually
menu_node: parent
menu_order: 5
version: 2.1
github_link: migration/migration-manually.md
redirect_from: /guides/v1.0/migration/migration-manually.html
functional_areas:
  - Tools
---

## Data types

There are four kinds of data that need to be migrated manually:

*	Media

*	{% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}Storefront{% endglossarytooltip %} design

*	{% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} user accounts

*	Access Control Lists (ACLs)

## Media

This section discusses how to manually migrate media files.

### Media files stored in the database

This section applies to you *only* if you store media files in the Magento database. This step should be performed before <a href="{{ page.baseurl }}/migration/migration-migrate-data.html">migration of data</a>:

1.	Log in to the Magento 1 Admin Panel as an administrator.

2.	Click **System** > **Configuration** > ADVANCED > **System**.

3.	In the right pane, scroll to **Storage Configuration for Media**.

4.	From the **Select Media Database** list, click the name of your {% glossarytooltip d95142d7-023f-451c-a2e9-dd88763dcd70 %}media storage{% endglossarytooltip %} database.

5.	Click **Synchronize**.

Then, repeat the same steps in your Magento 2 Admin panel.

### Media files in the file system

All media files (images for products, categories, the {% glossarytooltip 98cf4fd5-59b6-4610-9c1f-b84c8c0abd97 %}WYSIWYG{% endglossarytooltip %} editor, and so on) should be copied manually from `<your Magento 1 install dir>/media` to `<your Magento 2 install dir>/pub/media`.

However, do *not* copy the `.htaccess` files located in the Magento 1 `media` folder. Magento 2 has its own `.htaccess` that should be preserved.

## Storefront design

* Design in files (CSS, JS, templates, {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} layouts) changed its location and format

* {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}Layout{% endglossarytooltip %} Updates stored in database. Placed through Magento 1 Admin in {% glossarytooltip f3944faf-127e-4097-9918-a2e9c647d44f %}CMS{% endglossarytooltip %} Pages, CMS Widgets, {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}Category{% endglossarytooltip %} Pages and Product Pages

## Access Control Lists (ACLs)

You must manually re-create all:

*	credentials for web service APIs (SOAP, XML-RPC, and REST)

*	administrative user accounts and associate them with access privileges

<div class="bs-callout bs-callout-info" id="info">
    <p>
        You may adjust the time zone for a database entity using the <code>\Migration\Handler\Timezone</code> handler. See the <a href="{{ page.baseurl }}/migration/migration-migrate-follow-up.html">Follow-up</a> section for more details.
    </p>
</div>

## Related topics

* <a href="{{ page.baseurl }}/migration/migration-migrate-after.html">After migration</a>

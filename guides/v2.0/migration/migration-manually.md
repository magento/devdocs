---
layout: default
group:  migration
subgroup: manually
title: Data that needs to be migrated manually
menu_title: Data that needs to be migrated manually
menu_node: parent
menu_order: 5
github_link: migration/migration-manually.md
redirect_from: /guides/v1.0/migration/migration-manually.html
---

  
<h2>Data that needs to be migrated manually</h2>

There are three types of data that need to be manually migrated:

*	Media
*	Storefront design
*	Admin users
*	ACLs

### Media
This section discusses how to manually migrate media files.

#### Media files stored in the database
This section applies to you *only* if you store media files in the Magento database. This step should be performed before <a href="{{page.baseurl}}migration/migration-migrate-data.html">migration of data</a>:

1.	Log in to the Magento 1 Admin Panel as an administrator.
2.	Click **System** > **Configuration** > ADVANCED > **System**. 
3.	In the right pane, scroll to **Storage Configuration for Media**.
4.	From the **Select Media Database** list, click the name of your media storage database. 
5.	Click **Synchronize**.

After that, use the following steps:

1.	Log in to the Magento 2 Admin as an administrator.
2.	Click **Stores** > **Configuration** > ADVANCED > **System**. 
3.	In the right pane, scroll to **Storage Configuration for Media**.
4.	From the **Select Media Database** list, click the name of your media storage database. 
5.	Click **Synchronize**.

#### Media files on the file system
All media files (for example, images for products, categories, the WYSIWYG editor, and so on) should be copied manually from `<your Magento 1 install dir>/media` to `<your Magento 2 install dir>/pub/media`. 

However, do *not* copy `.htaccess` files located in the Magento 1 `media` folder. Magento 2 has its own `.htaccess` that should be preserved. 

### Storefront design        
* Design in files (css, js, templates, XML layouts) changed its location and format 
* Layout Updates stored in database. Placed through Magento 1 Admin in CMS Pages, CMS Widgets, Category Pages and Product Pages 

### ACLs (Access Control Lists)
*	You must manually re-create all credentials for web services APIs (that is, SOAP, XML-RPC, and REST)
*	You must manually re-create all administrative users and associate them with access privileges

<div class="bs-callout bs-callout-info" id="info">
  <p>The Data Migration Tool has special handler \Migration\Handler\Timezone for transforming time to different time zone. Using it you can change time for some fields of database. These fields can be specified in your map.xml file with offset parameter.</p>
</div>

### Related topics

* <a href="{{page.baseurl}}migration/migration-migrate-after.html">After migration</a>

---
layout: default
group:  migration
subgroup: manually
title: Data that needs to be migrated manually
menu_title: Data that needs to be migrated manually
menu_node: parent
menu_order: 5
github_link: migration/migration-manually.md
---

  
<h2>Data that needs to be migrated manually</h2>
<h4>What migration does not cover</h4>

Magento 2 uses new powerfull technologies to enhance merchant's shopping experience and these valuable changes mean that some custom code, extensions, and themes cannot be automatically migrated to the new platform. They might need to be adjusted or rebuilt to fit the improved Magento 2 architecture.

The migration tool does not automatically migrate the following. 

* Extensions and custom code 
* Media
  * all media files (e.g. images for product, category, wysiwyg ...) should be copied manually as-is from directory magento1-root/media to magento2-root/pub/media. But .htaccess files that exist in media folder of Magento 1 should not be copied to Magneto 2. Magento 2 has its own .htaccess and it should be preserved. Media files can be copied in any period of migration.
  * in case media is stored in database of Magento 1, then in the Admin of Magento 2 in configuration section of media storage one must press the button "Synchronize" before migration of main data. It will create according database tables in Magento 2.
* Storefront design
  * design in files (css, js, templates, XML layouts) changed its location and format. It can be developed and integrated after migration of settings.
  * Layout Updates stored in DB. Placed through Magento 1 Admin in CMS Pages, CMS Widgets, Category Pages and Product Pages. Should be migrated manually after migration of main data.
* All Credentials for API Web Services. (SOAP, XML-RPC, REST). Should be migrated manually after migration of main data.
* Admin users and ACL rules for them. Should be migrated manually after migration of main data.

<h4>Data which will not be used in Magento 2</h4>

* Google Shopping was removed from Magento 1 and 2
* Poll, Tag, Staging modules and Recurring Profiles were removed in Magento 2
* All indexed data. Indexes should be run manually in Magento 2 after migration of main data and after migration of delta
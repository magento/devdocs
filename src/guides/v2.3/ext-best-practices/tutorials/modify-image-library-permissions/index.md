---
group: extension-best-practices
title: Modify Media Library folder permissions
---

The Magento Media Gallery gives admins the ability to upload image files in specific folders. The Storage class for images in the CMS module manages image file uploads, file retrievals, and directory creation.

For security purposes, Magento provides Media Gallery access to contents in specific folders. The configuration path `system/media_storage_configuration/media_storage/allowed_resource/media_gallery_image_folders` in `config.xml` is used to define "Media Gallery Allowed" folders

By default, Magento allows Media Gallery access to the following two directories under `/pub/media`:

*  `catalog/category`
*  `wysiwyg`

In this tutorial, you will learn how to extend "Media Gallery Allowed" folders using the `config.xml` file.

1. Create a `config.xml` file.

   If your module does not have one, create a `config.xml` file under the etc directory.

1. Add a new "Media Gallery Allowed" folder:

   ```xml
   <system>
       <media_storage_configuration>
           <allowed_resources>
               <media_gallery_image_folders>
                   <!-- new "Media Gallery Allowed" folders -->
                   <my_image_folder>custom_folder_name</my_image_folder>
                   <my_catalog_image_folder>catalog/custom_folder_name</my_catalog_image_folder>
               </media_gallery_image_folders>
           </allowed_resources>
       </media_storage_configuration>
   </system>
   ```

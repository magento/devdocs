---
group: extension-best-practices
title: Modify Media Library folder permissions
---

The Media Gallery gives admins the ability to upload image files in specific folders. The Storage class for images in the CMS module manages image file uploads, file retrievals, and directory creation.

Due to code changes, how you extend your Media Gallery depends on your version of {{site.data.var.ee}} or {{site.data.var.ce}}:

Once you've listed both product names, you can call the product `Commerce`.

-  Commerce versions `2.3.7-p2` and later must use the [#configxml-method](config.xml method)
-  Commerce versions `2.3.7-p1` and earlier must use the [#dixml-method](di.xml method)

## config.xml method {#configxml-method}

{:.bs-callout-info}
Use the `config.xml` method for Commerce versions 2.3.7-p2 and later. For earlier versions, see [the `di.xml` method](#dixml-method).

For security purposes, Commerce provides Media Gallery access to contents in specific folders. The configuration path `system/media_storage_configuration/allowed_resources/media_gallery_image_folders` in `config.xml` defines the "Media Gallery Allowed" folders.

By default, Commerce allows Media Gallery access to the following two directories under `/pub/media`:

-  `catalog/category`
-  `wysiwyg`

In this tutorial, you will learn how to extend "Media Gallery Allowed" folders using the `config.xml` file.

1. Create a `config.xml` file.

 If your module does not have one, create a `config.xml` file under the `etc` directory.

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

## di.xml method {#dixml-method}

{:.bs-callout-info}
Use the `di.xml` method for versions `2.3.7-p1` and earlier. For later versions, see [the config.xml method](#configxml-method). If you subsequently upgrade to version `2.3.7-p2` or higher, you must implement the `config.xml` method.

For security purposes, Commerce does not provide Media Library access to contents in specific folders. This configuration is set in the CMS module's `di.xml` file and injected into the `Storage` class constructor.

By default, Commerce allows Media Library access to all directories under `/pub/media` except the following:

-  `captcha`
-  `catalog/product`
-  `customer`
-  `downloadable`
-  `import`
-  `theme`
-  `theme_customization`
-  `tmp`

In this tutorial, you will learn how to specify Media Library view permissions for folders using the `di.xml` file.

### Step 1: Create a `di.xml` file

If your module does not have one, create a [`di.xml`] file under the `etc` directory.

### Step 2: Specify the class type configuration

To work with the constructor arguments for the `Storage` class, create a new `type` element with the `name` property set to `Magento\Cms\Model\Wysiwyg\Images\Storage` in the `di.xml` file.

Under the `type` element, create an `arguments` element.

```xml
<type name="Magento\Cms\Model\Wysiwyg\Images\Storage">
    <arguments>
    </arguments>
</type>
```

## Step 3: Specify argument name

To change the content of the `dirs` argument provided to the constructor, create a new `argument` array element with the name `dirs` under `arguments`.

```xml
<type name="Magento\Cms\Model\Wysiwyg\Images\Storage">
    <arguments>
        <argument name="dirs" xsi:type="array">
        </argument>
    </arguments>
</type>
```

## Step 4: Exclude or include directory

### Step 4a: Exclude a directory

Add entries to the `exclude` array to extend the list of view restricted directories.

The following configuration restricts Media Library access to content under `pub/media/private-directory/`:

```xml
<type name="Magento\Cms\Model\Wysiwyg\Images\Storage">
    <arguments>
        <argument name="dirs" xsi:type="array">
            <item name="exclude" xsi:type="array">
                <item name="private-directory" xsi:type="array">
                    <item name="regexp" xsi:type="boolean">true</item>
                    <item name="name" xsi:type="string">pub[/\\]+media[/\\]+private-directory[/\\]*$</item>
                </item>
            </item>
        </argument>
    </arguments>
</type>
```

### Step 4b: Include an excluded directory

Add entries to the `include` array to override directory restrictions.

The following configuration overrides the default directory restriction for the `pub/media/downloadable/` directory:

```xml
<type name="Magento\Cms\Model\Wysiwyg\Images\Storage">
    <arguments>
        <argument name="dirs" xsi:type="array">
            <item name="include" xsi:type="array">
                <item name="downloadable" xsi:type="array">
                    <item name="regexp" xsi:type="boolean">true</item>
                    <item name="name" xsi:type="string">pub[/\\]+media[/\\]+downloadable[/\\]*$</item>
                </item>
            </item>
        </argument>
    </arguments>
</type>
```

[`di.xml`]: {{page.baseurl}}/extension-dev-guide/build/di-xml-file.html
[Storage class]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Cms/Model/Wysiwyg/Images/Storage.php

---
group: extension-best-practices
title: Modify Media Library folder permissions
---

The Magento Media Library gives admins the ability to upload image files in specific folders.
The [Storage class] for images in Magento's CMS module manages image file uploads, file retrievals, and directory creation.

For security purposes, Magento does not provide Media Library access to contents in specific folders.
This configuration is set in the CMS module's `di.xml` file and injected into the Storage class constructor.

By default, Magento allows Media Library access to all directories under `/pub/media` except the following:

*  `captcha`
*  `catalog/product`
*  `customer`
*  `downloadable`
*  `import`
*  `theme`
*  `theme_customization`
*  `tmp`

In this tutorial, you will learn how to specify Media Library view permissions for folders using the `di.xml` file.

## Step 1: Create `di.xml` file

If your module does not have one, create a [`di.xml`] file under the `etc` directory.

## Step 2: Specify class type configuration

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

[`di.xml`]: {{page.baseurl }}/extension-dev-guide/build/di-xml-file.html
[Storage class]: {{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Cms/Model/Wysiwyg/Images/Storage.php
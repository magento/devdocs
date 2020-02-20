---
group: frontend-developer-guide
title: Create a new layout
functional_areas:
  - Frontend
---

## Create a new page layout in custom theme

If an existing page layout does not meet your requirements, then you can create a new page layout in Magento.

For example, if a new page is going to be designed as `3-columns-double-footer` layout, you may create the new layout in the following way. Create a custom page-layout XML file in following directory `app/design/frontend/<VendorName>/<ThemeName>/Magento_Theme/page_layout/3-columns-double-footer.xml`.

```xml
<?xml version="1.0"?>
<layout xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_layout.xsd">
    <update handle="3columns"/>
    <referenceContainer name="page.wrapper">
        <container name="footer-bottom" as="footer-bottom" after="-" label="Footer Bottom" htmlTag="footer" htmlClass="page-footer-bottom"/>
    </referenceContainer>
</layout>
```

## Add the new layout to the layouts.xml file

Add the newly created page layout to the `layouts.xml` file of the theme directory `app/design/frontend/<VendorName>/<ThemeName>/Magento_Theme/layouts.xml`.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<page_layouts xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/PageLayout/etc/layouts.xsd">
    <layout id="3-columns-double-footer">
        <label translate="true">3 Columns Double Footer</label>
    </layout>
</page_layouts>
```

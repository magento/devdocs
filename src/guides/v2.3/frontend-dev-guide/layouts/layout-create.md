---
group: frontend-developer-guide
title: Create a new layout
functional_areas:
  - Frontend
---

### Create a new page layout in custom theme

create a custom page-layout xml file in the below directory.
app/design/frontend/<VendorName>/<ThemeName>/Magento_Theme/page_layout/4columns.xml

```xml
<?xml version="1.0"?>
<layout xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_layout.xsd">
    <update handle="3columns"/>
    <referenceContainer name="page.wrapper">
        <container name="header.container" as="header_container" label="Page Header Container" htmlTag="header" htmlClass="page-header" before="main.content"/>
    </referenceContainer>
</layout>
```

### Add the new layout in layouts.xml file

Add the newly created page layout in the `layouts.xml` file in the below directory
app/design/frontend/<VendorName>/<ThemeName>/Magento_Theme/layouts.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>

<page_layouts xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/PageLayout/etc/layouts.xsd">
    <layout id="4columns">
        <label translate="true">4 columns</label>
    </layout>
</page_layouts>
```

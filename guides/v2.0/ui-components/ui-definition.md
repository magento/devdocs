---
group:  UI Library
subgroup: G_UI definition.xml
title: definition.xml
menu_title: definition.xml
menu_node: parent
version: 2.0
redirect_from: /guides/v2.0/ui-library/ui-definition.html

---

{% highlight XML %}
<?xml version="1.0" encoding="UTF-8"?>
<!--
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified">
    <!-- Include section -->
    <xs:include schemaLocation="urn:magento:module:Magento_Ui:etc/ui_components.xsd"/>
    <!-- Definition the document element -->
    <xs:element name="components" type="definition"/>
    <!-- Registering components in the system -->
    <xs:complexType name="definition">
        <xs:annotation>
            <xs:appinfo>Registering components in the system and basic setup</xs:appinfo>
            <xs:documentation>Registering components in the system and basic setup</xs:documentation>
        </xs:annotation>
        <xs:all>
            <!-- Components list -->
            <xs:element type="range" name="range"/>
            <xs:element type="tab" name="tab"/>
            <xs:element type="dataSource" name="dataSource"/>
            <xs:element type="paging" name="paging"/>
            <xs:element type="massaction" name="massaction"/>
            <xs:element type="listingDefinition" name="listing"/>
            <xs:element type="formDefinition" name="form"/>
            <xs:element type="fieldset" name="fieldset"/>
            <xs:element type="field" name="field"/>
            <xs:element type="filters" name="filters"/>
            <xs:element type="columns" name="columns"/>
            <xs:element type="column" name="column"/>
            <xs:element type="filterSelect" name="filterSelect"/>
            <xs:element type="filterSearch" name="filterSearch"/>
            <xs:element type="filterRange" name="filterRange"/>
            <xs:element type="filterInput" name="filterInput"/>
            <xs:element type="filterDate" name="filterDate"/>
            <xs:element type="container" name="container"/>
            <xs:element type="input" name="input"/>
            <xs:element type="hidden" name="hidden"/>
            <xs:element type="checkbox" name="checkbox"/>
            <xs:element type="select" name="select"/>
            <xs:element type="multiselect" name="multiselect"/>
            <xs:element type="textarea" name="textarea"/>
            <xs:element type="fileUploader" name="fileUploader"/>
            <xs:element type="wysiwyg" name="wysiwyg"/>
            <xs:element type="radioset" name="radioset"/>
            <xs:element type="checkboxset" name="checkboxset"/>
            <xs:element type="multiline" name="multiline"/>
            <xs:element type="dataTypeText" name="text"/>
            <xs:element type="dataTypeBoolean" name="boolean"/>
            <xs:element type="dataTypeNumber" name="number"/>
            <xs:element type="dataTypePrice" name="price"/>
            <xs:element type="dataTypeMedia" name="image"/>
            <xs:element type="dataTypeDate" name="date"/>
            <xs:element type="dataTypeEmail" name="email"/>
            <xs:element type="dataTypeMedia" name="file"/>
            <xs:element type="nav" name="nav"/>
            <xs:element type="actions" name="actions"/>
            <xs:element type="actionDelete" name="actionDelete"/>
            <xs:element type="bookmark" name="bookmark"/>
            <xs:element type="exportButton" name="exportButton"/>
            <xs:element type="columnsControls" name="columnsControls"/>
            <xs:element type="container" name="listingToolbar"/>
            <xs:element type="action" name="action"/>
            <xs:element name="component" type="component" />
            <xs:element name="actionsColumn" type="actionsColumn" />
            <xs:element name="selectionsColumn" type="selectionsColumn" />
            <xs:element type="dynamicRows" name="dynamicRows"/>
            <xs:element name="htmlContent" type="htmlContent" />
            <xs:element type="insertForm" name="insertForm"/>
            <xs:element type="insertListing" name="insertListing"/>
            <xs:element type="modal" name="modal"/>
            <xs:element type="button" name="button"/>
        </xs:all>
    </xs:complexType>
    <!-- Custom configuration -->
    <xs:complexType name="listingDefinition">
        <xs:complexContent>
            <xs:extension base="listing">
                <xs:choice minOccurs="0" maxOccurs="unbounded">
                    <xs:element type="container" name="listingToolbar"/>
                    <xs:element type="dataSource" name="dataSource"/>
                    <xs:element type="paging" name="paging"/>
                    <xs:element type="massaction" name="massaction"/>
                    <xs:element type="columns" name="columns"/>
                    <xs:element type="filters" name="filters"/>
                </xs:choice>
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    <xs:complexType name="formDefinition">
        <xs:complexContent>
            <xs:extension base="form">
                <xs:choice minOccurs="0" maxOccurs="unbounded">
                    <xs:element type="fieldset" name="fieldset"/>
                    <xs:element type="dataSource" name="dataSource"/>
                    <xs:element type="insertForm" name="insertForm"/>
                    <xs:element type="insertListing" name="insertListing"/>
                    <xs:element type="modal" name="modal"/>
                    <xs:element type="dynamicRows" name="dynamicRows"/>
                </xs:choice>
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
</xs:schema>
{% endhighlight %}   

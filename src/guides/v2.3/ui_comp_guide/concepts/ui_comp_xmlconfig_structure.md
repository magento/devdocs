---
group: ui-components-guide
title: UI components XML configuration structure
---

## Overview

This topic describes the basic elements used in XML configuration files for declaring  UI components. These elements core structure is strict and third party developers must follow it when customizing existing UI component configuration or declaring new ones.

## Basic configuration elements

<table>
  <tr>
    <th>
      Element
    </th>
    <th>
      Attributes
    </th>
    <th>
      Parent of
    </th>
    <th>
      Description
    </th>
  </tr>
  <tr>
    <td>
      <code>&lt;%basic_component%&gt;&lt;/%basic_component%&gt;</code>
    </td>
    <td>
      <ul>
        <li>
          <code>extends</code>
        </li>
        <li>
          <code>provider</code>
        </li>
        <li>component-specific attributes
        </li>
        <li style="list-style: none; display: inline">
          <p class="q">
            Where a user can find this list of component-specific
            attributes
          </p>
        </li>
      </ul>For detailed descriptions of the general attributes see
      <a href="{{ page.baseurl }}/ui_comp_guide/components/basic-attributes.html">
      Basic attributes</a>.
    </td>
    <td>
      <ol>
        <li>
          <code>&lt;arguments&gt;</code>
        </li>
        <li>
          <code>&lt;settings&gt;</code>
        </li>
        <li><code>&lt;%component%&gt;</code>
        </li>
      </ol><br />
      (order matters)
    </td>
    <td>
      Mandatory root element, the name of the <a href="{{ page.baseurl }}/ui_comp_guide/bk-ui_comps.html#general-structure">
      basic UI component</a>: <code>&lt;form&gt;</code>,
      <code>&lt;listing&gt;</code> or custom basic component.
    </td>
  </tr>
  <tr>
    <td>
      <code>&lt;arguments&gt;&lt;/arguments&gt;</code>
    </td>
    <td>
      <code>name='data'</code>
    </td>
    <td>
      <code>&lt;item name=config&gt;</code> (mandatory)
    </td>
    <td>
      Introduces the configuration block for UiComponent according
      to the old structure used in Magento 2.1.x and earlier. In
      Magento 2.2.x and later only use for options that are not
      described in XSD.
      <p class="q">
        which XSD?<br />
        UiComponent - is it a class or what?
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <code>&lt;settings&gt;&lt;/settings&gt;</code>
    </td>
    <td>
      -
    </td>
    <td></td>
    <td>
      Introduces the configuration block for UiComponent according
      to the <a href="{{ page.baseurl }}/ui_comp_guide/best-practices/semantic_config.html">
      new structure</a>. Use for configuring all options, except
      those that are not described in XSD.
    </td>
  </tr>
  <tr>
    <td>
      <code>&lt;component&gt;&lt;/component&gt;</code>
    </td>
    <td>
      <ul>
        <li>
          <code>class</code>
        </li>
        <li>
          <code>component</code>
        </li>
        <li>
          <code>displayArea</code>
        </li>
        <li>
          <code>sortOrder</code>
        </li>
        <li>
          <code>template</code>
        </li>
        <li>component-specific attributes
        </li>
        <li style="list-style: none; display: inline">
          <p class="q">
            Where a user can find this list of component-specific
            attributes
          </p>
        </li>
      </ul>For detailed descriptions of the general attributes see
      <a href="{{ page.baseurl }}/ui_comp_guide/components/basic-attributes.html">
      Basic attributes</a>
    </td>
    <td>
      <ol>
        <li>
          <code>&lt;arguments&gt;</code>
        </li>
        <li>
          <code>&lt;settings&gt;</code>
        </li>
        <li><code>&lt;%component%&gt;</code>
        </li>
      </ol><br />
      (order matters)
    </td>
    <td>
      UI component name
    </td>
  </tr>
</table>

## Example of the basic UI components configuration structure

```xml
<form>
    <arguments name="data">
        // The old arbitrary structure that declares the configuration of the Form component
    </arguments>
    <settings>
        // The new strict structure that declares the configuration of the Form component
    </settings>
    <fieldset name="fieldsetName">
        <arguments name="data">
            // The old arbitrary structure that declares the configuration of the Fieldset component.
        </arguments>
        <settings>
            // The new strict structure that declares the configuration of the Fieldset component
        </settings>
        <field name="fieldName">
            <settings>
                // The new strict structure that declares the configuration of the Field component
            </settings>
        </field>
    </fieldset>
</form>
```

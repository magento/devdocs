---
layout: default
group: UI_Components_guide
subgroup: concepts
title: UI components XML configuration structure 
menu_title: UI components XML configuration structure  
menu_order: 15
version: 2.2
github_link: ui_comp_guide/concepts/ui_comp_xmlconfig_structure.md
---

## Overview

This topic describes the basic structure used in XML configuration files for declaring any UI component. This structure is strict and third party developers must use this structure when customizing existing UI components' configuration or declaring new ones.  

<table>
  <tr>
    <th>Element</th>
    <th>Attributes</th>
    <th>Child of</th>
    <th>Parent of</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>&lt;%basic_component%&gt;&lt;/%basic_component%&gt;</code></td>
    <td><ul><li><code>class</code></li>
<li><code>component</code></li>
<li><code>displayArea</code></li>
<li><code>sortOrder</code></li>
<li><code>template</code></li>
     </ul></td>
    <td>-</td>
    <td><ol><li>&lt;arguments&gt;</li><li>&lt;settings&gt;</li><li>&lt;%component%&gt</li></ol><br>(order matters)</td>
    <td>Mandatory root element, the name of the basic component: &lt;form&gt;, &lt;listing&gt; or custom basic component.</td>
  </tr>
  <tr>
    <td>&lt;arguments&gt;&lt;/arguments&gt;</td>
    <td><code>name='data'</code></td>
    <td>&lt;%component_name%&gt;</td>
    <td><item name=config> (mandatory)</td>
    <td>Introduces the configuration block for UiComponent (old structure). For options that are not described in XSD.</td>
  </tr>
  <tr>
    <td>&lt;settings&gt;&lt;/settings&gt;</td>
    <td>-</td>
    <td>&lt;%component_name%&gt;</td>
    <td></td>
    <td>Introduces the configuration block for UiComponent according to the  (new structure, preferable)</td>
  </tr>
</table>


The parent node is a UI components declaration is the UI component's node itself, for example for the Form component it is <form>:
As example: 
<form>
</form>

The first child of UiComponent should be <arguments/> node with name “data” if it is needed, 
<p class="q">When it might be needed?</p>
as example
<form>
    <arguments name=“data”>
        // Some arbitrary structure
    </arguments>
</form>

The second child can be <settings/> tag that introduces the configuration block for UiComponent.
Example: 
<form>
    <arguments name=“data”>
        // Some arbitrary structure that declare configuration for “form” component.
    </arguments>
    <settings>
        // The “form” component settings
    </settings>
</form>
The next childs are another component tags that have the same structure.
Example:
<form>
    <arguments name=“data”>
        // Some arbitrary structure that declare configuration for “form” component.
    </arguments>
    <settings>
        // The “form” component settings
    </settings>
    <fieldset name=“fieldsetName”>
        <arguments name=“data”>
            // Some arbitrary structure that declare configuration for “fieldset” component.
        </arguments>
        <settings>
            // The “fieldset” component settings
        </settings>
        <field name=“fieldName”>
            <settings>
                // The “field” component settings
            </settings>
        </field>
    </fieldset>
</form>
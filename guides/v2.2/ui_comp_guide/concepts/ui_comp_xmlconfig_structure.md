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

Magento uses strict structure to declare UiComponents.


Writing UiComponent’s tag is the first step to declare component.
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
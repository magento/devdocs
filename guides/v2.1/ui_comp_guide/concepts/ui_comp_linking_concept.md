---
layout: default
group: UI_Components_guide
subgroup: concepts
title: Linking properties of UI components
menu_title: Linking properties of UI components
menu_order: 14
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_linking_concept.md
---

## {{page.menu_title}}  
{:.no_toc}

* TOC
{:toc}

## Linking properties implementation

The following properties are used for linking observable properties and methods of UI components:

- `exports`
- `imports`
- `links` 
- `listens`

These properties are processed by the `initLinks()` method of the [`uiElement` class]({{page.baseurl}}/ui_comp_guide/concepts/ui_comp_uielement_concept.html) which is called at the moment of a component's instantion. To implement component's communication the method uses `links.js`.

Linking properties are set in [UI components configuration files]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_config_flow_concept.html): XML, JS or PHP. 

## List of linking properties 

### `exports`

The `exports` property is used to notify some external entity about property changing. `exports`'s value is an object, composed of the following:

  - `key`: name of the internal property or method which is tracked for changes.
  - `value`: name of the property or method which receives the notification. Can use [string templates](#string_templ).

Example of setting `exports` in a component's `.js` file:

{% highlight js%}
{
  'exports': {
   'visible': '${ $.provider }.visibility'
  }
}
{% endhighlight js%}

Here `visible` is the `key`, `${ $.provider }.visibility` is the `value`.


Example of setting `exports` in a component's configuration `.xml` file:

{% highlight xml%}
<argument name="data" xsi:type="array">
       <item name="config" xsi:type="array">
                    <item name="exports" xsi:type="array">
                        <item name="visible" xsi:type="string">sample_config.sample_provider.visibility</item>
                	</item>
       </item>
</argument>
{% endhighlight xml%}

For example of `exports` usage in Magento code see [`product_form.xml`, line 81]({{site.mage2100url}}/app/code/Magento/CatalogInventory/view/adminhtml/ui_component/product_form.xml#L81)

### `imports` 
The `imports` property is used for tracking changes of an external entity property. `imports`'s value is an object, composed of the following:

  - `key`: name of the internal property or method which receives the notifications. 
  - `value`: name of the property or method which is tracked for changes. Can use [string templates](#string_templ).

Example of using `imports` in a component's `.js` file:

{% highlight js%}
{
  'imports': {
   'visible': '${ $.provider }.visibility'
  }
}
{% endhighlight js%}

Example of using `imports` in a component's configuration `.xml` file:

{% highlight xml%}
<argument name="data" xsi:type="array">
       <item name="config" xsi:type="array">
                    <item name="imports" xsi:type="array">
                        <item name="visible" xsi:type="string">sample_config.sample_provider.visibility</item>
                    </item>
       </item>
</argument>
{% endhighlight xml%}

For example of `imports` usage in Magento code see [`product_form.xml`, line 103]({{site.mage2100url}}/app/code/Magento/CatalogInventory/view/adminhtml/ui_component/product_form.xml#L103)

### `links`

The `links` property is used for mutual tracking property changes. `links`'s value is an object, composed of the following:

  - `key`: name of the internal property or method which sends and receives the notifications. 
  - `value`: name of the property or method which sends and receives the notifications. Can use [string templates](#string_templ).

Example of using `links` in a component's `.js` file:

{% highlight js%}
{
  'links': {
   'visible': '${ $.provider }.visibility'
  }
}
{% endhighlight js%}

Example of using `links` in a component's configuration `.xml` file:

{% highlight xml%}
<argument name="data" xsi:type="array">
       <item name="config" xsi:type="array">
                    <item name="links" xsi:type="array">
                        <item name="visible" xsi:type="string">sample_config.sample_provider.visibility</item>
                    </item>
       </item>
</argument>
{% endhighlight xml%}

For example of `links` usage in Magento code see [`text.js`, line 19]({{site.mage2100url}}app/code/Magento/Ui/view/base/web/js/form/element/text.js#L19)

### `listens`
The `listens` property is used to track the changes of a component's property. `listens`'s value is an object, composed of the following:
  - `key`: name of the internal property which listens to the changes.
  - `value`: name of the property or method which is tracked for changes. Can use [string templates](#string_templ).

Example of using `listens` in a component's `.js` file :

{% highlight js%}
{
  'listens': {
   'visible': '${ $.provider }.visibility'
  }
}
{% endhighlight js%}

Example of using `listens` in a component's configuration `.xml` file:

{% highlight xml%}
<argument name="data" xsi:type="array">
       <item name="config" xsi:type="array">
                    <item name="listens" xsi:type="array">
                        <item name="visible" xsi:type="string">sample_config.sample_provider.visibility</item>
                    </item>
       </item>
</argument>
{% endhighlight xml%}

For example of `listens` usage in Magento code see [`new_category_form.xml`, line 92]({{site.mage2100url}}app/code/Magento/Catalog/view/adminhtml/ui_component/new_category_form.xml#L92)

## Template strings usage {#string_templ}

The `value` options of linking properties can contain template strings in the `'${...}'` format. During component’s initialization values in this format are processed as template strings using [ES6 templates](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals) or underscore templates, in case when ES6 templates are not supported by user's browser.

So if we put a variable name in `'${ }'`, it is processed into a string representation of the variable’s value.

When working with UI components, we often need to use the string representation of a certain property of the UI component. To address a property of the UI component in the scope of this component, the `$.someProperty`syntax is used.

As a result, if the component's property is the variable for the template string, we get notation similar to the following:

    '${ $.provider }' 

We can also build complex templates strings using this syntax, following are the illustrations:

- Using variables from the other component:

    ``` 
    '${ $.provider }:${ $.dataScope }' // 'provider' is the full name of the other component
    ```
- Calling several functions in one string: 

    ```
    '${ $.provider }:data.overload': 'overload reset validate'// we call 'overload', 'reset', 'validate'
    ```

- Using inline conditions:

    ```
    '${ $.provider }:${ $.customScope ? $.customScope + "." : ""}data.validate': 'validate'
    ``` 

    

 



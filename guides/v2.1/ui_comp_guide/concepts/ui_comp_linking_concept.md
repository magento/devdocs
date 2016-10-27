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

<p class="q"> Can we give more details about `${ $.provider }.visibility` It is the visibility property of...? </p>

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


### `imports` 
- `imports`: used for tracking changes of an external entity property. `imports`'s value is an object, composed of the following:

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

### `links`

- `links`: used for mutual tracking property changes. `links`'s value is an object, composed of the following:

  - `key`: name of the internal property or method which sends and receives the notifications. 
  - `value` - name of the property or method which sends and receives the notifications. Can use [string templates](#string_templ).

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


### `listens`
- `listens`: used to track the changes of a component's property.
  - `key` - name of the internal property which listens to the changes.
  - `value` - name of the property or method which is tracked for changes. Can use [string templates](#string_templ).

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

'${ $.provider }:data.overload': 'overload reset validate'
'${ $.provider }:data.overload': 'overload',

## Template strings usage {#string_templ}

During component’s initialization a value the `'${...}'` format is processed as a template string using [ES6 templates](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals) or underscore template, in case when ES6 templates are not supported by user's browser.

So if we put a variable name in `'${ }'`, it is processed into a string representation of the variable’s value.

When working with UI components, we often need to use the string representation of a certain property of the UI component. To address a property of the UI component in the scope of this component, the `$.someProperty`syntax is used.

As a result, if the component's property is the variable for the template string, we get notation similar to the following:

    '${ $.provider }' // we'll have the string represenation of the provider property of the current UI component

We can also build complex templates strings using this syntax, following are the illustrations:

- Using variables from the other component:

    '${ $.provider }:${ $.dataScope }' // 'provider' is the full name of the other component
 
- Calling several functions in one string: 

    '${ $.provider }:data.overload': 'overload reset validate'// we call 'overload', 'reset', 'validate'

- Using inline conditions:

    '${ $.provider }:${ $.customScope ? $.customScope + "." : ""}data.validate': 'validate' // 

    

 



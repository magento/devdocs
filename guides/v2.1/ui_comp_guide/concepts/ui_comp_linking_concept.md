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

These properties are processed by the `initLinks()` method of the [`uiElement` class]({{page.baseurl}}/ui_comp_guide/concepts/ui_comp_uielement_concept.html). To implement component's communication the method uses `links.js`.

## List of linking properties 

### `exports`

- `exports`: used to notify some external entity about property changing. `exports`'s value is an object, composed of the following:

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

In this example, `visible` is the `key`, `sample_config.sample_provider.visibility` is the `value`.
<p class="q"> Can we give more details about sample_config.sample_provider.visibility. Ex.: this is the `visibility` property of the `sample_config.sample_provider`? </p>

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
- `listens`: used to track the changes of a component's proporty.
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

## Syntax of string templates {#string_templ}

During component’s initialization a value in the `${$.someName}` format is evaluated as a string template using ES6 templates (or underscore template, in case when ES6 templates are not supported).

<p class="q">String template or template string? or template literals? https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals</p>

<p class="q">How do the following two paragraphs relate to the first one. Do they explain it?</p>
If we put a variable name in `${ }`, it is processed into string representation of the variable’s value.

<p class="q">Is it something generally known or Magento-specific?</p>

A UI component which own this template property is also marked as ‘$’ in the template, which probably makes it confusing.

I mean if we have component with configuration 
{
defaults: {
                someName: ‘Shrek’,
                theExactSameName: ‘${$.someName}’
}
}
The internal `$` refers to the component itself, giving us that `$.someName = ‘Shrek’` when processed using ES6 templates.

In this example, initialized component will have two properties: `someName = ‘Shrek’` and
`theExactSameName = ‘Shrek’`.

We can also build complex templates by 
-	concatenating them: ‘${$.someName}${$.someName}123’ // give us ‘ShrekShrek123’
-	using variables from another component using ‘:’ to separate variable name, as ‘${ $.fullNameOfOtherComponent }:someName’ //give us ‘Fiona’

<p class="q">Can we have an example from Magento/UI comps world? when do we need this?</p>

<p class="q">What else we might need to tell here??</p>
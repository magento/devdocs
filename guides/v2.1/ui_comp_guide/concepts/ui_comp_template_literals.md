---
group: UI_Components_guide
subgroup: concepts
title: Template Literals in UI Components
menu_title: Template Literals
menu_order: 50
contributor_name: SwiftOtter Studios
contributor_link: https://swiftotter.com/
version: 2.1
---

# Template Literals in Magento

Magento provides for the use of template literals in UI components. Template literals are strings that can contain embedded expressions. They were introduced into Javascript with ES2015 and were called "template strings" in early editions of the ES2015 / ES6 specification. Since it is a relatively new part of Javascript, some browsers, such as Internet Explorer 11, do not support the specification. Per the specification standard, back-ticks (`` ` ``) are used instead of a single quote (`'`) or double quote (`"`) to delineate a template string. Due to the lack of browser support, Magento has a Javascript class that will parse certain strings with a single quote (`'`) in the same way a browser that supports the specification would parse one with back-ticks.

Template literals can contain expressions which will be evaluated in the current KnockoutJS context. These expressions can contain nearly any valid {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}Javascript{% endglossarytooltip %}. They must start with a dollar sign and be surrounded with curly braces. **Anything inside the following will be evaluated as an expression**: `${  }`. For example, they can be used—and often are—to access properties of the KnockoutJS context like this: `'${ $.submitUrl }'`. They can be used to call functions (`'${ $.loadForm($.formUrl) }'`), or whatever: `'${ 20 + 13 }'`. These expressions are parsed in `/lib/web/mage/utils/template.js`.

Template literals allow UI Components to easily assign dynamic values to class properties. More specifically, they provide an integration layer between a particular KnockoutJS context and a Javascript class.

### The `defaults` Class Property

UI Components are [associated with Javascript classes]({{ site.baseurl }}/guides/v2.1/ui_comp_guide/concepts/ui_comp_uiclass_concept.html) to handle behavior on the client side. These should extend one of the core classes to provide a base level of functionality. Inside the child class, a `defaults` property can be provided.

The `defaults` property should be an object and is handled in a special way. Each property of `defaults` becomes a class property upon initialization. This happens in the `initConfig()` method of `lib/core/class.js`. Every item in `defaults` is passed through a `template()` function which evaluates template literals.

As a result, every `defaults` child property is handled with what could be viewed as a two step process:

1. Evaluate the value of the property for expressions. For example: `'${ $.submitUrl }'` could become `'https://example.com/contact/form/submit/'` (more on that later).
2. Assign that property/value to the class itself. As a result `class.defaults.submitUrl` would become `class.submitUrl`.

This part is important because it means that Javascript classes that extend `Class` (`magento/module-ui/view/base/web/js/lib/core/class.js`) can use the `defaults` property to assign properties to the class itself and leverage template literals during that process without any work on your part.

#### The `:` separator

Certain properties of the `defaults` object are processed by an additional core Javascript class: `links.js` (located: `magento/module-ui/view/base/web/js/lib/core/element/links.js`). The object keys in `defaults` are: 

- `links`
- `imports`
- `exports`

They can be used to interact with other UI Component Javascript classes. While the full use of them is a separate topic, those values can use a colon (`:`) to separate an expression, which should evaluate to a UI Component's name, from the properties to be accessed in that class. Take this example: `'${ $.provider }:user.theme'`. If the `${ $.provider }` expression evaluates to the name of a UI Component that is currently in the registry, that component will be loaded and the value of its `user.theme` property returned.

As a result, a template literal used in the value of one the objects listed above can be used to succinctly access data from an *entirely different* {% glossarytooltip 9bcc648c-bd08-4feb-906d-1e24c4f2f422 %}UI Component{% endglossarytooltip %} Javascript class.

### Template Literal `$` context

Perhaps the most important part of template literals in Magento is the `$` object that can be used inside expressions. (Remember an expression is anything within `${ }`.) The `$` provides access to the `this` context in the Javascript class where the template literals are. To take it a step further, `this` (and the related `$`) is the KnockoutJS context for the template that can be bound to the UI Component. This object should not be confused with the `$` that marks the beginning of an expression. The `$` object can only appear inside of an expression. Here is an example: `${ $.submitUrl }`: the `$` references the current KnockoutJS context, and `.submitUrl` will return the `provider` property from that object.

## Example

Perhaps the most useful aspect of template literals is the ability to access other UI Component Javascript classes in the registry so we will use this as an example. First, there are a few things to explain.

UI Components can have a `<item name="config" xsi:type="array">...</item>` node in the primary XML declaration file ([see an example]({{ site.baseurl }}/guides/v2.1/ui_comp_guide/concepts/ui_comp_xmldeclaration_concept.html#example-of-a-top-level-configuration-file)). In that file, a `component` element can be added with a path reference to the RequireJS file. That file is loaded into the registry when it runs on the front end and other Javascript files can then access it by the *name* of the UI Component instead of the path to the file itself. The name often will look something like this: `example_component.example_component`.

Names of other registered modules can be added to the {% glossarytooltip ebe2cd14-d6d4-4d75-b3d7-a4f2384e5af9 %}server side{% endglossarytooltip %} configuration (XML or PHP) that is output through JSON. Those names can then be easily accessed in the Javascript on the front end. In the following example, the other UI Component's name will be obtained with a template literal in the `imports` object. When this Javascript file is loaded, it will process the template literal and look up the name in the registry. If found, it will load that class. Because there is a colon (`:`), it will go on to find the property that is accessed in the other Javascript class.


```javascript
return Element.extend({
    defaults: {
        template: 'Example_Component/message-list',
        imports: {
            messages: '${ $.messageHandler }:data.userMessages'
        }
    },

    // ...

    initialize: function() {
        this._super();
        this.addHtmlClassesToMessages();
    },

    addHtmlClassesToMessages: function() {
        this.messages.forEach(function(currentValue) {
            currentValue['htmlClass'] = 'message message--' + currentValue['type'];
        });
    }

    // ...
})
```

Notice how the `addHtmlClassesToMessages()` method accesses the `messages` property of `this`. When the class was initialized, the `data.userMessages` array was obtained from the `$.messageHandler` UI Component and was then assigned to the primary object.

In the template, the messages can be displayed like this:

```html
<!-- File: app/code/Example/Component/view/frontend/web/template/message-list.html -->
<div>
  <ul data-bind="foreach: messages" class="message-list">
      <li data-bind="text: content, css: htmlClass"></li>
  </ul>
</div>
```

### Conclusion

Template literals provide a simple and concise way to evaluate expressions. In Magento, they facilitate a great way to load data into a Javascript class. They also play a part in interacting with other classes to create a fully interactive front end framework.

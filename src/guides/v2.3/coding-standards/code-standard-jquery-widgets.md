---
group: coding-standards
subgroup: 01_Coding standards
title: jQuery widget coding standard
landing-page: Coding standards
menu_title: jQuery widget coding standard
menu_order: 7
functional_areas:
  - Standards
---

In the Magento system, all jQuery UI widgets and interactions are built on a simple, reusable base---the [jQuery UI Widget Factory][jquery-ui-widget-factory]{:target="_blank"}.

The factory provides a flexible base for building complex, stateful plug-ins with a consistent [API](https://glossary.magento.com/api).
It is designed not only for plug-ins that are part of [jQuery](https://glossary.magento.com/jquery) UI, but for general usage by developers who want to create object-oriented components without reinventing common infrastructure.

For more information, see the [jQuery Widget API documentation][jquery-ui-api-doc]{:target="_blank"}.

This standard is mandatory for Magento core developers and recommended for third-party [extension](https://glossary.magento.com/extension) developers.
Some parts of Magento code might not comply with the standard, but we are working to gradually improve this.

Use [RFC 2119][rfc2119]{:target="_blank"} to interpret the "must," "must not," "required," "shall," "shall not," "should," "should not," "recommended," "may," and "optional" keywords.

## Naming conventions

*  [Widget](https://glossary.magento.com/widget) names must consist of one or more non-abbreviated English word and in camelcase format.

   ```javascript
   (function($) {
       $.widget('mage.accordion', $.ui.accordion, {
           // ... My custom code ...
       });
   ```

*  Widget names should be verbose enough to fully describe their purpose and behavior.

   ```javascript
   // Declaration of the frontend.advancedEventTrigger widget
   (function($) {
       "use strict";

       $.widget('mage.advancedEventTrigger', $.ui.button, {
           // ... My custom code ...
       });
   }) (jQuery);
   ```

## Instantiation and resources

*  Additional [JavaScript](https://glossary.magento.com/javascript) files used as a resources must be dynamically loaded using the `$.mage.components()` method and must not be included in the `<head>` block.
*  Use the `$.mage.components()` method to load additional JavaScript resource files not included in the `<head>` block.
*  You must use `$.mage.extend()` to extend an existing set of widget resources.
*  You must instantiate widgets using the `data-mage-init` attribute.
  You can use the `.mage()` [plug-in](https://glossary.magento.com/plug-in) to instantiate widgets that use callback methods.

   Benefits:

   *  You leverage the benefits of `$.mage.extend()` and `$.mage.components()`.
   *  Using `data-mage-init` minimizes the inline JavaScript code footprint.
   *  You can modify widget initialization parameters.

   ```javascript
   // Widget initialization using the data-mage-init attribute
   <form data-mage-init="{form:[], validation:{ignore:':hidden'}}"></form>

   // Widget initialization using the mage plug-in
   (function($) {
       $('selector').mage('dialog', {
           close: function(e) {
               $(this).dialog('destroy');
           }
       });
   })(jQuery);
   ```

*  You can declare callback methods inline JavaScript but not methods and widgets.

   ```javascript
   // Widget initialization and configuration
   $('selector').mage('dialog', {
       close: function(e) {
           $(this).dialog('destroy');
       }
   });

   // Widget initialization and binding event handlers
   $('selector').mage('dialog').on('dialogclose', {
       $(this).dialog('destroy');
   });

   // Extension for widget in a JavaScript file
   $.widget('mage.dialog', $.ui.dialog, {
       close: function() {
           this.destroy();
       }
   });

   // Extension of widget resources
   (function($) {
       $.mage
           .extend('dialog', 'dialog',
               '<?php echo $this->getViewFileUrl('Enterprise_\*Module\*::page/js/dialog.js') ?>')
   })(jQuery);
   ```

## Development standards

*  Widgets should comply with the [single responsibility principle][single-responsibility-principle]{:target="_blank"}.

   Widgets should not have responsibilities not related to the [entity](https://glossary.magento.com/entity) described by the widget.

   ```javascript
   // Widget "dialog" that is responsible
   // only for opening content in an interactive overlay.
   $.widget('mage.dialog', {
       // Code logic
   });

   // Widget "validation" that is responsible
   // only for validating the form fields.
   $.widget('mage.validation', $.ui.sortable, {
       // Code logic
   });

   $('selector')
       .mage('dialog')
           .find('form')
               .mage('validation');
   ```

*  Widget properties that modify the widget's behavior must be located in the widget's options to make them configurable and reusable.

   ```javascript
   //Declaration of the backend.dialog widget
   $.widget('mage.dialog', {
       options: {
           modal: false,
           autoOpen: true,
           // Additional widget options
       },
       // Additional widget properties
   });

   // Initializing
   $('selector').mage('dialog', {
       modal: true,
       autoOpen: false
   });
   ```

*  Widget communications must be handled by jQuery events

   ```html
   <body>
     ...
     <button data-mage-init="{button: {event: 'save', target:'[data-role=edit-form]'}}" />
     ...
     <form data-role="edit-form">
     ...
     </form>
     ...
   </body>
   ```

   ```javascript
   // Declaration of the mage.form widget
   $.widget("mage.form," {
       _create: function() {
           this._bind();
       },
       _bind: function() {
           this._on({
               save: this._submit
           })
       },
       _submit: function(e, data) {
           this._rollback();
           if (false !== this._beforeSubmit(e.type, data)) {
               this.element.trigger('submit', e);
           }
       }
   });
   ```

*  You must use [DOM event bubbling][dom-event-bubbling]{:target="_blank"} to perform one-way communication between a child widget and its parent widget.

*  Widgets must comply with the [Law of Demeter][law-of-demeter]{:target="_blank"} principle.

   Do not instantiate a widget or call a widget's methods inside another widget.

*  Make widgets abstract enough so that they can be used anywhere in Magento.

   For example, the `mage.dropdown` widget is applicable in many other scenarios, unlike `mage.topShoppingCart`.

*  Place abstract, share-able widgets under the `<install dir>/pub/lib/<your company>` directory so non-Magento applications can access them.

   For example:

   ```text
   /pub
     /lib
     /magento
       dropdown.js
       validation.js
       dialog.js
   ```

*  Place Magento-specific widgets under the `<install dir>/app/code/<namespace>/<module-name>/view/<area-name>/js` directory.

   For example:

   ```text
   /app
     /code
       /Mage
         /DesignEditor
           /view
             /frontend
               /js
                 vde-block.js
                 vde-container.js
   ```

## Architecture

*  Use an underscore prefix to declare private widget methods.

   Properties without an underscore prefix are accessible using the jQuery Widget factory public API.

   ```javascript
   // Declaration of the backend.accordion widget
   $.widget('mage.accordion', {
       _create: function() {
           this.header = this.element.find(this.options.header);
           this.icon = $(this.options.icon).prependTo(this.header);
         }
   });
   ```

*  Start a widget's element selection with `this.element`
*  Widgets must not interact with DOM elements selected using `this.element.parent()`, `this.element('selector')`, or `this.element.closest('selector')`.

   This reduces the number of widget conflicts because widgets interact only with their child elements.

*  Widget options should have default values.

   Use a `null` value if there is no default value for an option.

*  Pass as widget options all DOM selectors used by that widget.
*  Use the `_setOption` method to process required, immediate state changes.
*  Use the public widget API to call widget methods to allow chaining widget methods.

   ```javascript
   // Call the 'open' method on the menu widget using the public widgets API
   $('selector')
   .menu('open')
   .addClass('ui-state-active');
   ```

*  Handle widget initialization if there is a logical action to perform on successive calls to the widget with no arguments.

   The widget factory automatically fires the `_create()` and `_init()` methods during initialization, in that order and prevents multiple instantiations of the same element.

   The `_create()` method is called only once for each widget instance and `_init()` is called each time the widget is called without arguments.

*  When a widget is destroyed, the attached element should be left exactly like it was before attachment.

   Common tasks for this include:

   *  Removing or adding any [CSS](https://glossary.magento.com/css) classes the widget added/removed to the element.
   *  Detaching any elements the widget added to the DOM.
   *  Destroying any widgets that the widget applied to other elements.

*  Bind [event](https://glossary.magento.com/event) handlers using the `_bind()` method to make it easy to find what events the widget reacts on.
*  Bind events using the `on()` method.

   Benefits:

   *  Delegation is supported using selectors in the event names.
    For example: `click.foo`.
   *  Maintains proper `this` context inside the handlers, so it is not necessary to use the `$.proxy()` method.
   *  Event handlers are automatically namespaced and cleaned up on destruction.

[jquery-ui-widget-factory]: http://jqueryui.com/widget/
[jquery-ui-api-doc]: http://api.jqueryui.com/jQuery.widget/
[rfc2119]: http://www.ietf.org/rfc/rfc2119.txt
[single-responsibility-principle]: https://en.wikipedia.org/wiki/Single_responsibility_principle
[dom-event-bubbling]: http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing
[law-of-demeter]: http://en.wikipedia.org/wiki/Law_of_Demeter

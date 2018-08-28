---
group: fedg
title: Translate theme strings
functional_areas:
  - Frontend
---

## What's in this topic ##

Your custom theme might contain new strings that are not present in the Magento out of the box themes. To ensure that your theme is displayed correctly with any language applied on a store view, you need to make sure that the unique strings of your theme are added to the translation [i18n tool]({{ page.baseurl }}/frontend-dev-guide/translations/xlate.html#translate_terms) when the [dictionary] is run.
Then when a new {% glossarytooltip 9c4c7b9b-43f0-4454-8e8c-fb62ad40c35f %}language package{% endglossarytooltip %} is created and used to translate a store view, all theme strings are translated as well.

This topic describes how to add theme strings in a way that they get collected by the i18n tool and are added to the dictionary.

## Strings added in .phtml templates {#add_strings_phtml}

To ensure that your new string is added to the dictionary and translated, use the `__('<your_string>')` method when outputting a string in a [.phtml template]({{ page.baseurl }}/frontend-dev-guide/templates/template-overview.html).

For example:

```php
### <?php echo __('Create Backup') ?>
```

If your string contains a variable, to add a placeholder for this variable in the dictionary, use syntax similar to the following:

```php
### <?php echo sprintf(__('Hello %s'), $yourVariable) ?>
```

In this example, the <i>'Hello %s'</i> string is added to the dictionary when the i18n tool is run.

## Strings added in email templates {#add_strings_email}

If your theme contains [custom email templates]({{ page.baseurl }}/frontend-dev-guide/templates/template-email.html#customize-email-theme), their strings can be added to the dictionary as well.
To make sure the strings of an email template are added to the dictionary, use the `{{trans}}` [directive]({{ page.baseurl }}/frontend-dev-guide/templates/template-email.html#localization).

Custom email templates [added using the Admin panel]({{ page.baseurl }}/frontend-dev-guide/templates/template-email.html#customize-email-admin), are not stored in the file system, and their strings are not added to the dictionary.

## Strings added in UI component templates {#add_strings_ui_html}

To ensure that the text you add in `.html` templates of UI components is added to the dictionary, mark the text using the `i18n` custom binding. The following code samples illustrate how it should be used for different cases of adding a text:

- when a string is added in the scope of an HTML element:

```html
<span data-bind="i18n: 'Sign In'"></span>
```

- when a string is added with no binding to an HTML element:

```html
<!-- ko i18n: 'You have no items in your shopping cart.' --><!-- /ko -->
```

- when a string is added as an attribute of an HTML element:

```html
<input type="text" data-bind="attr: {placeholder: $t('First Name')}" />
```

## Strings added in UI components configuration files {#add_strings_ui_xml}

To ensure that the text you add in UI components configuration `.xml` files is added to the dictionary, use the `translate` attribute: set `translate=true` for the corresponding element. The following code sample is an illustration:

```xml
<item name="label" xsi:type="string" translate="true">Delete</item>
```

In this example, the *Delete* string is added to the dictionary when the i18n tool is run.

Translated strings that originate from `.xml` files will not render unless they are called with a `__(<variable>)` method.
In this example, you would use a call similar to the following to display the translated *Delete* string.

```php
__($this->config->getData('label'))
```

## Strings added in .js files {#add_strings_js}

To ensure that the text you add in a `.js` file is collected by the i18n tool and added to the dictionary, take the following steps:

1. Link the `mage/translate` library:

    ```javascript
    define (['jquery', 'mage/translate'], function ($) {...});
    ```

2. Use the `$.mage.__('')` function when adding a string:

    ```javascript
    $.mage.__('<string>');
    ```

    If your string contains a variable, to add a placeholder for this variable to the string stored in the dictionary, use the syntax similar to the following:

    ```javascript
    $.mage.__('Hello %1').replace('%1', yourVariable);
    ```

In this example, the `'Hello %1'` string is added to the dictionary when the i18n tool is run.


[dictionary]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict
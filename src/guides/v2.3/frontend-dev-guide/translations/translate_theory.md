---
group: frontend-developer-guide
title: Translate theme strings
functional_areas:
  - Frontend
---

This topic describes how to add theme strings so that the i18n tool can collect and add the strings to the dictionary.

Your custom theme may contain new strings that are not present in out-of-the-box Magento themes.
To ensure your theme displays correctly with any language applied on a store view, verify the unique strings of your theme are added to the translation [i18n tool] when [generating the dictionary].
Then when a new [language package](https://glossary.magento.com/language-package) is created and used to translate a store view, all theme strings are also translated.

## Strings added in .phtml templates {#add_strings_phtml}

To ensure that your new string is added to the dictionary and translated, use the `__('<your_string>')` method when outputting a string in a [.phtml template].

For example:

```php
<?= __('Create Backup') ?>
```

If your string contains a variable, to add a placeholder for this variable in the dictionary, use syntax similar to the following:

```php
<?= __('Hello %1', $yourVariable) ?>
```

In this example, the _'Hello %1'_ string is added to the dictionary when the i18n tool is run.

## Strings added in email templates {#add_strings_email}

If your theme contains [custom email templates], their strings can be added to the dictionary as well.
To add the email template strings to the dictionary, use the {% raw %} `{{trans}}` {% endraw %} [directive].

Custom email templates [added using the Admin panel] are not stored in the file system, and their strings are not added to the dictionary.

To ensure that your new string is added to the dictionary and translated, use the {% raw %} `{{trans}}` {% endraw %} [directive] when outputting a string in an [email template]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/view/frontend/email/account_new.html).

For example:

-  When only a string is added in the email template:
    {% raw %}
    ```html
    {{trans "Lorem Ipsum is simply dummy text of the printing"}}
    ```
    {% endraw %}

-  When only a string is added with a variable value in the email template:
    {% raw %}
    ```html
    {{trans "%items items" items="numItems"}}
    ```
    {% endraw %}

## Strings added in UI component templates {#add_strings_ui_html}

To ensure that the text you add in `.html` templates of UI components is added to the dictionary, mark the text using the `i18n` custom binding. The following code samples illustrate how to use custom bindings:

-  When a string is added in the scope of an HTML element, both of the following examples result in the same output:

   ```html
   <span data-bind="i18n: 'Sign In'"></span>
   ```

   ```html
   <span translate="'Sign In'"></span>
   ```

-  When a string is added with no binding to an HTML element, both of the following examples result in the same output:

   ```html
   <!-- ko i18n: 'You have no items in your shopping cart.' --><!-- /ko -->
   ```

   ```html
   <translate args="'You have no items in your shopping cart.'"/>
   ```

-  When a string is added as an attribute of an HTML element:

   ```html
   <input type="text" data-bind="attr: {placeholder: $t('First Name')}" />
   ```

## Strings added in UI components configuration files {#add_strings_ui_xml}

To ensure that the text you add in UI components configuration `.xml` files is added to the dictionary, use the `translate` attribute. Set the attribute to true for the corresponding element: `translate=true`

In this example, the *Delete* string is added to the dictionary when the i18n tool is run:

```xml
<item name="label" xsi:type="string" translate="true">Delete</item>
```

Translated strings that originate from `.xml` files will not render unless they are called with a `__(<variable>)` method in `.php` files. In this example, you would use a call similar to the following to display the translated *Delete* string.

```php
__($this->config->getData('label'))
```

## Strings added in Underscore templates {#add_strings_underscore_html}

To ensure that the text you add in `.html` Underscore templates is collected by the `i18n` tool, use the `_.i18n('')` Underscore function.

-  When a string is added to the template:

   ```html
   <%= _.i18n('Hello') %>
   ```

-  If the string contains a variable, use the variable placeholder:

   ```html
   <%= _.i18n('Hello %1').replace('%1', yourVariable) %>
   ```

   In this example, the _'Hello %1'_ string is added to the dictionary when the i18n tool is run.

## Strings added in .js files {#add_strings_js}

To ensure that the text you add in a `.js` file is collected by the i18n tool and added to the dictionary:

1. Link the `mage/translate` library:

   ```javascript
   define (['jquery', 'mage/translate'], function ($, $t) {...});
   ```

1. Use the `$.mage.__('')` function when adding a string:

   ```javascript
   $.mage.__('<string>');
   ```

   or

   ```javascript
   $t('<string>');
   ```

   If your string contains a variable, to add a placeholder for this variable to the string stored in the dictionary, use the following syntax:

   ```javascript
   $.mage.__('Hello %1').replace('%1', yourVariable);
   ```

   or

   ```javascript
   $t('Hello %1').replace('%1', yourVariable);
   ```

In this example, the `'Hello %1'` string is added to the dictionary when the i18n tool is run.

[i18n tool]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html
[generating the dictionary]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict
[.phtml template]: {{page.baseurl}}/frontend-dev-guide/templates/template-overview.html
[custom email templates]: {{page.baseurl}}/frontend-dev-guide/templates/template-email.html#customize-email-theme
[directive]: {{page.baseurl}}/frontend-dev-guide/templates/template-email.html#localization
[added using the Admin panel]: {{page.baseurl}}/frontend-dev-guide/templates/template-email.html#customize-email-admin

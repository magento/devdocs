---
group: frontend-developer-guide
title: Custom validation rules
contributor_name: Adarsh Manickam
contributor_link: https://github.com/drpayyne
---

Custom validation rules can be added by creating a Javascript mixin for the `mage/validation` module and calling the `$.validator.addMethod` function with the custom validation rule parameters as described below:

```javascript
$.validator.addMethod(
  'rule-name',
  function(value, element) {
    // Return true or false after validation rule check
  },
  $.mage.__('Error message to display if validation fails')
)
```

This code snippet adds a simple new validation rule to the mixin to validate if an input field has only five words.

`Vendor/Module/view/frontend/requirejs-config.js`

```javascript
var config = {
  config: {
    mixins: {
      'mage/validation': {
        'Vendor_Module/js/validation-mixin': true
      }
    }
  }
}
```

`Vendor/Module/view/frontend/web/js/validation-mixin.js`

```javascript
define(['jquery'], function($) {
  'use strict';

  return function() {
    $.validator.addMethod(
      'validate-five-words',
      function(value, element) {
        return value.split(' ').length == 5;
      },
      $.mage.__('Please enter exactly five words')
    )
  }
});
```

Also, it is possible to adjust existing error message for some specific form
field separately.

This is implemented in the core codebase in scope of the
[`Magento_Search` module]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/CatalogSearch/view/frontend/templates/advanced/form.phtml).

```html
<script>
require([
    "jquery",
    "mage/mage",
    "mage/validation"
], function($){
    $('#form-validate').mage('validation', {
            errorPlacement: function (error, element) {
                var parent = element.parent();
                if (parent.hasClass('range')) {
                    parent.find(this.errorElement + '.' + this.errorClass).remove().end().append(error);
                } else {
                    error.insertAfter(element);
                }
            },
            messages: {
                'price[to]': {'greater-than-equals-to': '<?= $block->escapeJs(__('Please enter a valid price range.')) ?>'},
                'price[from]': {'less-than-equals-to': '<?= $block->escapeJs(__('Please enter a valid price range.')) ?>'}
            }
        });
});
</script>
```

This comes in hand when the error message should be specific but the rule
does not change.

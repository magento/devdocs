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
        return value.split(' ').length == 5 ? true | false;
      },
      $.mage.__('Please enter exactly five words')
    )
  }
});
```

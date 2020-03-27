---
group: frontend-developer-guide
title: Form validation
contributor_name: Adarsh Manickam
contributor_link: https://github.com/drpayyne
functional_areas:
  - Frontend
---

The Magento application provides various ways to validate your form inputs. This implementation is based, and extends, [jQuery Validation](https://jqueryvalidation.org/documentation).

## Validation Module Structure

There are three main validation modules present in Magento: `jquery/validate`, `mage/validation`, and `mage/validation/validation`.

### `jquery/validate`

This is an alias for [`lib/web/jquery/jquery.validate`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/jquery/jquery.validate.js). This is the base validation JavaScript file provided by jQuery that Magento extends.

### `mage/validation`

This module is present at [`lib/web/mage/validation.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/validation.js). This module includes `jquery/validate` and adds various functions, such as `$.validator.addMethod`, which can be used by mixins to add custom validation rules, a base set of rules to validate, the `mage.validation` widget, and more.

### `mage/validation/validation`

This module is present at [`lib/web/mage/validation/validation.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/validation/validation.js). This is considered the entry point for the form validator in Magento and is aliased as `validation` at [`Magento_Theme/view/frontend/requirejs-config.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Theme/view/frontend/requirejs-config.js#L29). This includes `mage/validation` (which in turn includes `jquery/validate`), and adds a few more rules to the validator.

## Initialize validation on a form

There are three ways to make a form to validate upon submission.

#### In a `.phtml` file using `data-mage-init`

In this way, when the form gets submitted it is validated beforehand with the
specified validation rules for each field.

```html
<form class="form contact"
      <!-- ... -->
      data-mage-init='{"validation":{}}'>
      <!-- ... --->
          <div class="field name required">
              <label class="label" for="name"><span><?= $block->escapeHtml(__('Name')) ?></span></label>
              <div class="control">
                  <input name="name" 
                         id="name" 
                         title="<?= $block->escapeHtmlAttr(__('Name')) ?>" 
                         value="<?= $block->escapeHtmlAttr($viewModel->getUserName()) ?>" 
                         class="input-text" 
                         type="text" 
                         data-validate="{required:true}"/>
              </div>
          </div>
      <!-- ... --->
</form>
```

The example above is taken from the `Magento_Contact` module - 
[`app/code/Magento/Contact/view/frontend/templates/form.phtml`](https://github.com/magento/magento2/blob/2.3.4/app/code/Magento/Contact/view/frontend/templates/form.phtml).

#### In a `.phtml` file, using the `<script/>` tag

```html

<form class="form contact"
      method="get"
      action="/"
      id="custom-form"
      data-hasrequired="<?= $block->escapeHtmlAttr(__('* Required Fields')) ?>">
    <fieldset class="fieldset">
        <div class="field name required">
            <label class="label" for="name"><span><?= $block->escapeHtml(__('Name')) ?></span></label>
            <div class="control">
                <input name="name"
                       id="name"
                       value=""
                       class="input-text"
                       type="text"
                       data-validate="{required:true}"/>
            </div>
        </div>
        <div class="field email required">
            <label class="label" for="email"><span><?= $block->escapeHtml(__('Email')) ?></span></label>
            <div class="control">
                <input name="email"
                       id="email"
                       value=""
                       class="input-text"
                       type="email"
                       data-validate="{required:true, 'validate-email':true}"/>
            </div>
        </div>
    </fieldset>
    <div class="actions-toolbar">
        <div class="primary">
            <input type="hidden" name="hideit" id="hideit" value="" />
            <button type="submit" title="<?= $block->escapeHtmlAttr(__('Submit')) ?>" class="action submit primary">
                <span><?= $block->escapeHtml(__('Submit')) ?></span>
            </button>
        </div>
    </div>
</form>
<script>
    require([
        'jquery',
        'domReady',
        'mage/validation'
    ], function($) {
        $('#custom-form').submit(function (event) {
            event.stopPropagation();
            event.preventDefault();
            var $form = $(event.target),
                isFormValid = $form.validation() && $form.validation('isValid');

            if (isFormValid) {
                // do some stuff
            }
        });
    });
</script>
```

#### In a `.js` file

Both [UI Components] and [Widgets] works for this scope. The idea is the same.

[Ui Components]: https://devdocs.magento.com/guides/v2.3/ui_comp_guide/bk-ui_comps.html
[Widgets]: https://devdocs.magento.com/guides/v2.3/javascript-dev-guide/javascript/custom_js.html

The example below is a UI component from the `Magento_Ui` module and represents
only a small part of the whole file. See the whole file [here](https://github.com/magento/magento2/blob/2.3.4/app/code/Magento/Ui/view/base/web/js/form/form.js).

```js
// ...
define([
    // ...
    'mage/validation'
], function (/* ... */) {
    'use strict';
    
    // ...
    
    return Collection.extend({
        // ...
        
        /**
         * Validate and save form.
         *
         * @param {String} redirect
         * @param {Object} data
         */
        save: function (redirect, data) {
            this.validate();

            if (!this.additionalInvalid && !this.source.get('params.invalid')) {
                this.setAdditionalData(data)
                    .submit(redirect);
            } else {
                this.focusInvalid();
            }
        },
        
        // ...
    });
});
```
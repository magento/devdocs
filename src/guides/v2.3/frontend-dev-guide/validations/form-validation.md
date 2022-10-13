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

## See also

*  [Validate a custom form]({{ page.baseurl }}/frontend-dev-guide/validations/custom-form-validation.html)

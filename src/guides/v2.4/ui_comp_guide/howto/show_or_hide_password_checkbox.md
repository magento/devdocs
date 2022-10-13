---
group: ui-components-guide
title: Show or Hide Password Checkbox
migrated_to: https://developer.adobe.com/commerce/frontend-core/ui-components/howto/show-hide-password-checkbox/
layout: migrated
---

This topic describes how you can implement the "show or hide" password checkbox functionality in custom forms.

![Show or Hide Password Checkbox]({{ site.baseurl }}/common/images/ui_comps/show-or-hide-password-checkbox-v2.1.png)

## Step 1: Add the HTML code

Add the HTML code snippet which renders the "show or hide" password checkbox to the PHTML template file. It uses the `scope` custom knockout binding.

Below is the HTML code snippet:

```phtml
<div class="field choice" data-bind="scope: 'showPassword'">
    <!-- ko template: getTemplate() --><!-- /ko -->
</div>
```

For more information about `Scope` binding, refer to [Scope Binding]({{ page.baseurl }}/ui_comp_guide/concepts/knockout-bindings.html#scope)

## Step 2: Add the x-magento-init script

Initialize the "show or hide" password checkbox using the `text/x-magento-init` script. It uses the scope binding name `showPassword` to initialize the component. Pass both the component javascript file path, and the password field id prefixed with #.

```phtml
<script type="text/x-magento-init">
    {
        "*": {
            "Magento_Ui/js/core/app": {
                "components": {
                    "showPassword": {
                        "component": "Magento_Customer/js/show-password",
                        "passwordSelector": "#pass"
                    }
                }
            }
        }
    }
</script>
```

|Option|Description|Type|
|--- |--- |--- |
|`component`|The path to the component’s `.js` file, relative to RequireJS. Here the component path value is `Magento_Customer/js/show-password`|String|
|`passwordSelector`|The id of the password input field, such as `#pass`.|String|

The RequireJS file path for the "show or hide" password checkbox is `Magento_Customer/js/show-password`. It is defined in [`app/code/Magento/Customer/view/frontend/web/js/show-password.js`][show-password].

## Example

This example shows the custom implemented company login form template (PHTML file) with the "show or hide" password checkbox.

```phtml
<div class="block-content" aria-labelledby="block-company-login-heading">
    <form class="form form-company-login" action="<?= $escaper->escapeUrl($block->getPostActionUrl()) ?>" method="post" id="company-login-form">
        <?= $block->getBlockHtml('formkey') ?>
        <fieldset class="fieldset login" data-hasrequired="<?= $escaper->escapeHtml(__('* Required Fields')) ?>">
            <div class="field email required">
                <label class="label" for="email"><span><?= $escaper->escapeHtml(__('Company Email')) ?></span></label>
                <div class="control">
                    <input name="login[username]" id="email" type="email" class="input-text" data-validate="{required:true, 'validate-email':true}">
                </div>
            </div>
            <div class="field password required">
                <label for="pass" class="label"><span><?= $escaper->escapeHtml(__('Password')) ?></span></label>
                <div class="control">
                    <input name="login[password]" type="password" class="input-text" id="pass" data-validate="{required:true}">
                </div>
            </div>
            <div class="field choice" data-bind="scope: 'showPassword'">
                <!-- ko template: getTemplate() --><!-- /ko -->
            </div>
            <div class="actions-toolbar">
                <div class="primary">
                    <button type="submit" class="action login primary" id="company-submit"><span><?= $escaper->escapeHtml(__('Company Sign In')) ?></span></button>
                </div>
            </div>
        </fieldset>
    </form>
</div>
<script type="text/x-magento-init">
    {
        "*": {
            "Magento_Ui/js/core/app": {
                "components": {
                    "showPassword": {
                        "component": "Magento_Customer/js/show-password",
                        "passwordSelector": "#pass"
                    }
                }
            }
        }
    }
</script>
```

[show-password]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/view/frontend/web/js/show-password.js

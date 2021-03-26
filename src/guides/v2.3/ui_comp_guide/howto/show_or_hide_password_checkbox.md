---
group: ui-components-guide
title: Show or Hide Password Checkbox
---

{:.bs-callout-warning}
The "show or hide" password checkbox functionality is only available in Magento version 2.4.x and later.

This topic describes how you can implement the "show or hide" password checkbox functionality in custom forms.

Here is the screenshot of the "show or hide" password checkbox in the customer login form.

![Show or Hide Password Checkbox]({{ page.baseurl }}//ui_comp_guide/images/show-or-hide-password-checkbox-v2.1.png)

## Step 1: Add the HTML code

You need to add the HTML code snippet which renders the show or hide password checkbox in the phtml template file. It uses the `scope` custom knockout binding.

Below is the HTML code snippet

```phtml
<div class="field choice" data-bind="scope: 'showPassword'">
    <!-- ko template: getTemplate() --><!-- /ko -->
</div>
```

For more information about `Scope` binding, refer to [Scope Binding]({{ page.baseurl }}/ui_comp_guide/concepts/knockout-bindings.html#scope)

## Step 2: Add the x-magento-init script

You need to initialize the show or hide password checkbox using the text/x-magento-init script. It uses the scope binding name `showPassword` to initialize the component. You need to pass the component javascript file path and the password field id prefixed with #.

Below is the script snippet

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
|`component`|The path to the component’s `.js` file in terms of RequireJS. Here the component path value is `Magento_Customer/js/show-password`|String|
|`passwordSelector`|It must be equals to the id value of the password input field. i.e. `#pass`.|String|

## Example

This example shows the custom implemented company login form template(phtml file) with the show or hide password checkbox.

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

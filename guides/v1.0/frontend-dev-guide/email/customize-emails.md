---
layout: default  
group: fedg
subgroup: D_Email
title: Customizing email templates
menu_title: Customizing email templates
menu_order: 1

github_link: frontend-dev-guide/templates/template-email.md
---

<h2>Overview</h2>

This topic covers how to customize the content and design of email templates.

* Customizing Email Templates
    * Theme Override
    * Admin Override
    * Header/Footer Templates
* Email Styles
    * Inline styles
    * Non-inline styles
* Logo
* Using Contact Information in Transaction Emails
* Localization
* Supported Email Clients and Devices
* Newsletter Templates

<h2>Customizing Email Templates</h2>

Email templates are stored in the `app/code/<Namespace>/<Module>/view/<area>/email/` folder of their respective modules. For example: `app/code/Magento/Sales/view/frontend/email/order_new.html`. Email templates can be customized in one of two ways:
 
<h3 id="template-theme-override">Theme Override</h3>

Email templates can be overridden by creating templates in the `<Namespace>_<Module>/email/` folder of a custom theme. For example, if you wanted to override the "New Order" email in the `Magento/luma` theme, you would create a file in this location `app/design/frontend/Magento/luma/Magento_Sales/email/order_new.html`. 

Theme fallback is supported, so parent themes of your current theme will be searched for templates.
 
<h3 id="template-admin-override">Admin Override</h3>

1. In the Magento Admin, navigate to **MARKETING** > Communications > **Email Templates**
2. Click the **Add New Template** button.
3. If you want to use a default template as a starting point, in the **Load default template** section, choose the template and click the **Load Template** button. The path to the configuration settings for each default template appears in the **Currently Used For** field in the Template Information section. Make note of this path, because you will need it later when you configure this new template to be used instead of the default template.
    <span style="color: red;">TODO: Update image</span>
    <br><img src="{{site.baseurl}}common/images/create_template.png" alt="New template creation page with loaded default template" width="70%" height="70%"/>

4. In **Template Name**, enter the name which will be used in the Magento Admin.
5. In **Template Subject**, add plain text which will be used as a Subject of the emails sent using the template you create. This field can contain <a href="#var">system variables</a>.  
6. Customize template content. For details please refer to the <a href="#content">next paragraph</a>.
7. In **Template Styles**, optionally add CSS styles for the template. These styles will be added inside of a `<style>` tag in the `<head>` of the email.
8. Click the **Save Template** button.
9. Now that you have created a template, you must configure that template to be used:
    1. Go to **Stores** > **Configuration**
    2. Navigate to the section that contains the template that you want to override. This will be the section that was referenced by the **Currently Used For**. For example, if you created a "New Order" template, the configuration section will be **Stores** > **Configuration** > SALES > **Sales Emails**.
    3. Select your newly created template from the dropdown.
    4. Click the **Save Config** button.

<h3>Header/Footer Templates</h3>

Every frontend email template includes a header and footer template using these two directives: `{{template config_path="design/email/header_template"}}` and `{{template config_path="design/email/footer_template"}}`. By default, those two directives load contents from these files:
 
 * `app/code/Magento/Email/view/frontend/email/header.html`
 * `app/code/Magento/Email/view/frontend/email/footer.html`

The header and footer templates can be overridden using either the <a href="#template-theme-override">theme override</a> or <a href="#template-admin-override">admin override</a> methods.

<h2>Email Styles</h2>

Due to the lack of support for modern web standards among email clients, the email templates are built using tables and other non-ideal HTML markup. 

Some email clients (e.g., Gmail) only support CSS styles that have been applied as "inline" styles on the `style` attribute of HTML tags. Because of this, the majority of email styles are applied as inline styles. Inlining is done using the <a href="https://github.com/jjriv/emogrifier" target="_blank">Emogrifier</a> library, which takes the HTML and CSS and adds all of the CSS styles to `style` attributes of the HTML tags.

<h3>Using Inline Styles to Customize Emails</h3>

The `app/code/Magento/Email/view/frontend/email/header.html` file contains an `inlinecss` directive:

<pre>
{{inlinecss file="css/email-inline.css"}}
</pre>

The `inlinecss` directive tells Magento which files to apply as inline styles on the email template. For example, if an email template is using the `Magento\blank` theme, the `app/design/frontend/Magento/blank/web/css/email-inline.less` file will be compiled and its contents will be applied as inline styles to the email template.

Refer to the <a href="https://github.com/jjriv/emogrifier#emogrifier" target="_blank">Emogrifier README</a> to see what CSS selectors are supported.


<h3>Using Non-Inline Styles to Customize Emails</h3>

While the majority of styles should be applied inline, there are certain CSS styles that can't be applied inline, such as media queries or `:hover` pseudo styles. These styles must be in a `<style type="text/css"></style>` tag.

The `app/code/Magento/Email/view/frontend/email/header.html` file contains a `css` directive inside of a `<style>` tag:

<pre>
{{css file="css/email.css"}}
</pre>

The `css` directive compiles the contents of the provided file and outputs it. For example, if an email template is using the `Magento\blank` theme, the `app/design/frontend/Magento/blank/web/css/email.less` file will be compiled and its contents will be output in the `<style>` tag.

<h3>Organization of Email Styles</h3>

The styles for emails are organized into several different folders.

* `app/design/frontend/Magento/blank/web/css/email.less` - Imports necessary files and then outputs styles to be included in `<style>` tag
* `app/design/frontend/Magento/blank/web/css/email-inline.less`  - Imports necessary files and then outputs styles to be inlined  
* `app/design/frontend/Magento/blank/web/css/source/_email-base.less` - Contains bulk of styles for email resets/layout/typography/etc
* `app/design/frontend/Magento/blank/web/css/source/_email-extend.less` - This file is intended to be copied into your custom themes and edited directly. You can add new email styles or edit existing ones. This should prevent having to edit the `_email-base.less` file. See the `app/design/frontend/Magento/luma/web/css/source/_email-extend.less` file for example usage.
* `app/design/frontend/Magento/blank/web/css/source/_email-variables.less` - The `_email-base.less` file uses a number mixins from the Magento UI library. If you want to change any of the styles output by those mixins, you can set the value of any of t he variables those mixins uses in this file. See the `app/design/frontend/Magento/luma/web/css/source/_email-variables.less` file for example usage.
* `app/design/frontend/Magento/blank/<Namespace>_<Module>/web/css/source/_email.less` - Styles that are specific to modules are stored in these files. This mechanism also allows third-party extensions to include styles that will get included in the inline/non-inline output.
* `lib/web/css/source/_email-variables.less` - Same as `app/design/frontend/Magento/blank/web/css/source/_email-variables.less`
* `lib/web/css/source/lib/variables/_email.less` - Contains new email-specific variables that can be overridden in a theme-specific `_email-variables.less` file. 

When implementing a custom theme, you should be able to fully customize email templates by copying the `app/design/frontend/Magento/blank/web/css/source/_email-extend.less` and `app/design/frontend/Magento/blank/web/css/source/_email-variables.less` files to your custom theme and editing those files.

<h3>Web Fonts</h3>

TODO
---
layout: default  
group: fedg
subgroup: C_Templates
title: Customizing email templates
menu_title: Customizing email templates
menu_order: 4

github_link: frontend-dev-guide/templates/template-email.md
---

<h2>Overview</h2>

This topic covers how to customize the content and design of email templates.

* Customizing Email Templates
    * Theme Override
    * Admin Override
    * Header/Footer Templates
* Email Styles
    * Inline Styles
    * Non-inline Styles
    * Organization of Email Styles
    * Web Fonts
* Logo
* Using Contact Information in Emails
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

<h3>Inline Styles</h3>

The `app/code/Magento/Email/view/frontend/email/header.html` file contains an `inlinecss` directive:

<pre>
{{inlinecss file="css/email-inline.css"}}
</pre>

The `inlinecss` directive tells Magento which files to apply as inline styles on the email template. For example, if an email template is using the `Magento\blank` theme, the `app/design/frontend/Magento/blank/web/css/email-inline.less` file will be compiled and its contents will be applied as inline styles to the email template.

Refer to the <a href="https://github.com/jjriv/emogrifier#emogrifier" target="_blank">Emogrifier README</a> to see what CSS selectors are supported.


<h3>Non-inline Styles</h3>

While the majority of styles should be applied inline, there are certain CSS styles that can't be applied inline, such as media queries or `:hover` pseudo styles. These styles must be in a `<style type="text/css"></style>` tag.

The `app/code/Magento/Email/view/frontend/email/header.html` file contains a `css` directive inside of a `<style>` tag:

<pre>
{{css file="css/email.css"}}
</pre>

The `css` directive compiles the contents of the provided file and outputs it. For example, if an email template is using the `Magento\blank` theme, the `app/design/frontend/Magento/blank/web/css/email.less` file will be compiled and its contents will be output in the `<style>` tag.

In the `app/code/Magento/Email/view/frontend/email/header.html` file, you will see that this variable is being output inside of a `<style>` tag: `{{var template_styles|raw}}`. The value of that variable comes from one of two places: 

* If you add styles inside of a comment block like this, it will get included in the `template_styles` variable: `<!--@styles @-->`
* If you customize transactional emails using the Magento Admin Panel, you can add CSS styles to the **Template Styles** field to include those styles in the `template_styles` variable.

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

<span style="color: red;">TODO</span>

<h2>Logo</h2>

You can add a custom logo to emails by adding it to your custom theme or by uploading it in the Magento Admin. Since email clients don't support vector-based formats such as SVG, you will need to prepare a PNG logo. Since emails are viewed on devices with a broad range of pixel densities, you should use a logo that is 3x the size that you actually want it to display. For example, let's say your email has a 200px &times; 100px area for the logo. The logo image should be 600px &times; 300px.

If you don't have access to a high-resolution version of your logo, you can upload a normal-resolution image. For example, if your logo image is 200px &times; 100px, specify `200` for the width and `100` for the height.

<h3>Add Logo to Theme</h3>

* Add a file named `logo_email.png` to a `Magento_Email/web/` folder in your custom theme. For example, if you wanted to add a logo for the `Magento/luma` theme, you would add a file here: `app/design/frontend/Magento/luma/Magento_Email/web/logo_email.png`.
* Copy the `app/code/Magento/Email/view/frontend/email/header.html` file into a `Magento_Email/email/header.html` folder in your theme. Edit the `width` and `height` attributes of the `<img>` tag to reflect the area in which you want your logo to display (for example, 200 &times; 100). Example:
  <pre>
  {{if logo_width}}
      width="{{var logo_width}}"
  {{else}}
      width="200"
  {{/if}}
  
  {{if logo_height}}
      height="{{var logo_height}}"
  {{else}}
      height="100"
  {{/if}}
  </pre>

<h3>Add Logo Using Admin Panel</h3>

1. In the Magento Admin, navigate to **Stores** > **Configuration** > GENERAL > **Design** > **Emails**
2. In the **Scope** drop-down list, select the scope for which you want to set a logo (a certain store view, the whole website, or default config). 
3. Upload your logo and specify the alternative text for it.
<img src="{{site.baseurl}}common/images/email-logo-settings.png" alt="System configuration">

4. Set "Logo Width" and "Logo Height" values. Based on the example above, you would enter "200" and "100" respectively.
5. Click the **Save Config** button.

<h2>Using Contact Information in Emails</h2>

Emails can output your store name, store email address, store phone number, and store hours of operation if those values are configured in the Admin Panel. 

To set those values:

1. To set the store name, phone number, and hours of operation:
    1. In the Magento Admin, navigate to **Stores** > **Configuration** > GENERAL > **General** > **Emails**
    2. Input values into the **Store Name**, **Store Phone Number**, and **Store Hours of Operation** fields. 
    3. Note: The **Store Phone Number** and **Store Hours of Operation** fields are optional.
    4. Click the **Save Config** button.
2. To set the store name, phone number, and hours of operation:
    1. In the Magento Admin, navigate to **Stores** > **Configuration** > GENERAL > **General** > **Store Email Addresses** > **General Contact**
    2. Input values into the **Sender Name** and **Sender Email** fields. 
    4. Click the **Save Config** button.

The sales emails are configured to display all of the above values, if they're configured in the admin. If you want to add those values to other email templates, you can use the following variables:

<pre>
{{var store_email}}
{{var store_phone}}
{{var store_hours}}
</pre>

<h2>Localization</h2>

In order to support the translation of content, all strings in emails are output using the `trans` directive. Example: 

<pre>
{{trans "Thank you for your order from %store_name." store_name=$store.getFrontendName()}}
</pre>

The `trans` directive will translate strings into whatever locale is configured for the store from which the email is being sent. For example, if an email is being sent from a store view that is configured to use the fr_FR locale, then the email will be translated to French.

<h2>Supported Email Clients and Devices</h2>

We tested responsive emails using a combination of real devices and <a href="http://litmus.com/" target="_blank">Litmus</a>. Due to the greatly varied level of support among email clients for modern web technologies, not all email clients rendered the emails perfectly. However, all of the following clients should render the emails in a manner that allows them to be easily read without obvious issues.

* Supported Desktop Clients
    * Apple Mail 7 (OS X 10.9)
    * Apple Mail 8 (OS X 10.10)
    * Outlook 2003 (Windows 7)
    * Outlook 2007 (Windows 7)
    * Outlook 2010 (Windows 7)
    * Outlook 2013 (Windows 7)
    * Outlook 2016 (OS X 10.10)
* Supported Mobile Clients
    * Native email app (Android 2.3)
    * Native email app (Android 4.2)
    * Gmail app (Android 4.2)
    * Native email app (Blackberry 5 OS)
    * iOS 7 (iPhone 5s)
    * iOS 8 (iPad Retina)
    * iOS 8 (iPad Mini)
    * iOS 8 (iPhone 6)
    * iOS 8 (iPhone 6 Plus)
    * Windows Phone 8
* Supported Web Clients (tested in combination of Firefox, Chrome, and Internet Explorer)
    * AOL Mail
    * Gmail
    * Office 365
    * Outlook.com
    * Yahoo! Mail

<h2 id="newsletter-template">Using Updated Newsletter Templates</h2>

<p>The focus of this article is on transactional emails but the same techniques can be used with newsletter templates as well, including:</p>
<ul> 
    <li>Import the header and footer using the <a href="#custom-head-foot"><code>&#123;&#123;template config_path=""}}</code></a> directives</li>
    <li>Apply inline styles using the <a href="#email-css"><code>&#123;&#123;inlinecss file=""}}</code></a> directive</li>
    <li>Include non-inline styles using <a href="#email-css-noninline"><code>&#123;&#123;var non_inline_styles}}</code></a></li>
</ul>
<p>In the Magento Admin Panel, go to <strong>Newsletter</strong> &gt; <strong>Newsletter Templates</strong> and look at the template named <strong>Example Newsletter Template</strong>. We added this template as a reference for how to build a responsive newsletter.</p>

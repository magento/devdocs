---
layout: default  
group: fedg
subgroup: C_Templates
title: Customizing email templates
menu_title: Customizing email templates
menu_order: 4

github_link: frontend-dev-guide/templates/template-email.md
---

#### Contents

This topic discusses how to customize the content and design of email templates.

* <a href="#customizing-email-templates">Customize email templates</a>
    * <a href="#customize-email-theme">Customize an email template using a theme</a>
    * <a href="#customize-email-admin">Customize an email template using the Magento Admin</a>
    * <a href="#customize-header-footer">Customize header or footer templates</a>
    * <a href="#customize-content">Customize email content</a>
* <a href="#email-styles">Email styles</a>
    * <a href="#inline-styles">Inline styles</a>
    * <a href="#non-inline-styles">Non-inline styles</a>
    * <a href="#organization-email-styles">Organization of email styles</a>
    * <a href="#custom-fonts">Custom fonts</a>
* <a href="#email-logo">Email logo</a>
    * <a href="#customize-logo-theme">Customize the logo using a theme</a>
    * <a href="#customize-logo-admin">Customize the logo using the Admin</a>
* <a href="#contact-information-emails">Using contact information in emails</a>
* <a href="#localization">Localization</a>
* <a href="#supported-clients">Supported email clients and devices</a>
* <a href="#newsletter-templates">Newsletter templates</a>

<h2 id="customizing-email-templates">Customize email templates</h2>
Email templates are stored in the `app/code/<VendorName>/<ModuleName>/view/<area>/email/` directory of their respective modules. For example, the template for the new order tranactional email for the Sales module is located in <a href="{{ site.mage2000url }}app/code/Magento/Sales/view/email/order_new.html" target="_blank">app/code/Magento/Sales/view/email/order_new.html</a>. 

You can customize email templates in any of the following ways:
 
<h3 id="customize-email-theme">Customize an email template using a theme</h3>
Override email templates by creating templates in your custom theme's `<VendorName>_<ModuleName>/email/` directory. For example, to override the "New Order" email in the `Magento/luma` theme, create a template in `app/design/frontend/Magento/luma/Magento_Sales/email/order_new.html`. 

Theme fallback is supported, so parent themes of your current theme are searched for templates.
 
<h3 id="customize-email-admin">Customize an email template using the Magento Admin</h3>
Any templates configured in the Magento Admin take precedence over default or theme-based templates.

1. In the Magento Admin, navigate to **MARKETING** > Communications > **Email Templates**
2. Click **Add New Template**.
3. To use a default template as a starting point, in the **Load default template** section, choose the template and click **Load Template**.<br>
The path to the configuration settings for each default template displays in the **Currently Used For** field in the Template Information section. Make note of this path, because you will need it later when you configure this new template to be used instead of the default template.
    <br><img src="{{site.baseurl}}common/images/email_create_template.png" alt="New template creation page with loaded default template" width="70%" height="70%"/>

4. In **Template Name**, enter a name to identify the template in the Magento Admin.
5. In **Template Subject**, add plain text that will be used as a Subject of the emails sent using the template you create. This field can contain system variables.  
6. Customize template content. For details, see <a href="#customize-content">the section on customizing content</a>.
7. In **Template Styles**, optionally add CSS styles for the template. These styles are added inside of a `<style>` tag in the `<head>` of the email. Typically, you'll use the LESS files <a href="#email-styles">described below</a> to make style changes to emails, because some email clients don't support styles in `<style>` tags.
8. Click **Save Template**.
9. Now that you have created a template, you must configure that template to be used:
    a. Go to **Stores** > **Configuration**
    b. Navigate to the section that contains the template that you want to override; this section is referenced by **Currently Used For**.<br>
    For example, if you created a "New Order" template, the configuration section is one of the options under **Stores** > **Configuration** > SALES > **Sales Emails** > **Order**.
    c. Select your newly created template from the dropdown.
    d. Click **Save Config**.

<h3 id="customize-header-footer">Customize header or footer templates</h3>
Every frontend email template includes a header and footer template using these two directives: `{% raw %}{{template config_path="design/email/header_template"}}{% endraw %}` and `{% raw %}{{template config_path="design/email/footer_template"}}{% endraw %}`. By default, those two directives load contents from these files:
 
 * <a href="{{ site.mage2000url }}app/code/Magento/Email/view/email/header.html" target="_blank">app/code/Magento/Email/view/email/header.html</a>
 * <a href="{{ site.mage2000url }}app/code/Magento/Email/view/email/footer.html" target="_blank">app/code/Magento/Email/view/email/footer.html</a>

The header and footer templates can be customized using either the <a href="#customize-email-theme">theme</a> or <a href="#customize-email-admin">Admin</a> customization methods discussed previously.

<h3 id="customize-content">Customize email content</h3>
To add the store and sales related information to a template, use system variables. 

System variables are placeholders which are replaced by particular values when the actual email is generated. For example, the <code>&#123;&#123;var order.increment_id&#125;&#125;</code> variable is replaced by the ID of the order for which the email is generated.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
 <p>You can also create your own custom variables and set their values in the Admin at <b>System</b> > <b>Custom Variables</b>.</p></span>
</div>

To add a variable to your template content:

1.  In the Magento Admin, navigate to **MARKETING** > Communications > **Email Templates**
2.  Create a new template or edit an existing template.
2.  Click to place the cursor in the text in which to insert the variable.
2. Click **Insert Variable**. A pop-up containing a list of variables opens, including custom variables. Variables are grouped by the modules they relate to. The following figure shows an example: <br><img src="{{site.baseurl}}common/images/email_insert_variable.png" alt="The list of available variables" width="70%" height="70%">

2. Click the name of the required variable. <br> The variable code is inserted in the template content.


<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
 <p> The selection of available variables depends on which template you use as a basis. Alternatively, you can manually insert variables "related" to other templates in your template code if you know the variable code. </p></span>
</div>


<h2 id="email-styles">Email styles</h2>
Some email clients (for example, Gmail) support only CSS styles that have been applied as "inline" styles on the `style` attribute of HTML tags. Because of this, the majority of email styles are applied as inline styles. Inline styling is provided by the <a href="https://github.com/jjriv/emogrifier" target="_blank">Emogrifier</a> library, which takes the HTML and CSS and adds all of the CSS styles to `style` attributes of the HTML tags.

<h3 id="inline-styles">Inline styles</h3>

The `app/code/Magento/Email/view/frontend/email/header.html` file contains an `inlinecss` directive:

    {% raw %}{{inlinecss file="css/email-inline.css"}}{% endraw %}

The `inlinecss` directive tells Magento which files to apply as inline styles on the email template. 

For example, let's say an email is being sent from a store configured with the `Magento/luma` theme. The `inlinecss` directive first looks for a `email-inline.less` file in `app/design/frontend/Magento/luma/web/css/email-inline.less`. However, because that file doesn't exist, it falls back to `app/design/frontend/Magento/blank/web/css/email-inline.less`. The contents of that file is then compiled and its contents applied as inline styles to the email template.

Refer to the <a href="https://github.com/jjriv/emogrifier#emogrifier" target="_blank">Emogrifier README</a> to see what CSS selectors are supported.

<h3 id="non-inline-styles">Non-inline styles</h3>
Non-inline styles for emails come from the following:

<h4 id="global-non-inline-styles">Global Non-inline styles</h4>
While the majority of styles should be applied inline, there are certain CSS styles that can't be applied inline, such as media queries or `:hover` pseudo styles. These styles must be in a `<style type="text/css"></style>` tag for them to work.

The `app/code/Magento/Email/view/frontend/email/header.html` file contains a `css` directive inside of a `<style>` tag:

    <style type="text/css">
        {% raw %}{{var template_styles|raw}}{% endraw %}
    
        {% raw %}{{css file="css/email.css"}}{% endraw %}
    </style>

The `css` directive compiles the contents of the provided file and outputs it. 

For example, let's say an email is being sent from a store configured with the `Magento/luma` theme. The `css` directive first looks for an `email.less` file in `app/design/frontend/Magento/luma/web/css/email.less`. However, because that file doesn't exist, it falls back to `app/design/frontend/Magento/blank/web/css/email.less`. The contents of that file are compiled and its contents output in the `<style>` tag.

<h4 id="template-specific-non-inline-styles">Template-specific non-inline styles</h4>
As mentioned in the preceding section, the `header.html` file outputs the `{% raw %}{{var template_styles|raw}}{% endraw %}` variable. 

The value of that variable comes from any of the following: 

* Any styles you add to any `html` email template inside  a comment block like the following are included in the `template_styles` variable:
      
      <!--@styles 
      .example-style { color: green; }
      @-->
      
* If you customize transactional emails using the Magento Admin, you can add CSS styles to the **Template Styles** field to include those styles in the `template_styles` variable.

<h3 id="organization-email-styles">Organization of email styles</h3>
The styles for emails are split into several different files.

<table>
  <tbody>
    <tr>
      <th>File</th>
      <th>Description</th>
    </tr>
    <tr>
      <td colspan="1">
          <p><code>app/design/frontend/Magento/blank/web/css/email.less</code></p>
      </td>
      <td colspan="1">
          <p>Imports necessary files and then outputs styles to be included in <code>&lt;style&gt;</code> tag</p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <p><code>app/design/frontend/Magento/blank/web/css/email-fonts.less</code></p>
      </td>
      <td colspan="1">
          <p>Contains <code>@font-face</code> declarations for custom fonts. This file is imported by the <code>_email-extend.less</code> file using an <code>@import</code> rule.</p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <p><code>app/design/frontend/Magento/blank/web/css/email-inline.less</code></p>
      </td>
      <td colspan="1">
          <p>Imports necessary files and then outputs styles to be inlined  </p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <p><code>app/design/frontend/Magento/blank/web/css/source/_email-base.less</code></p>
      </td>
      <td colspan="1">
          <p>Contains the majority of styles for emails, including resets, layout, typography, and so on. Review the comments at the top of this file to understand how the styles in this file are split between the <code>email.less</code> and <code>email-inline.less</code> files.</p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <p><code>app/design/frontend/Magento/blank/web/css/source/_email-extend.less</code></p>
      </td>
      <td colspan="1">
          <p>This file is intended to be copied into your custom themes and edited directly. You can add new email styles or override existing ones. This should prevent having to copy the <code>_email-base.less</code> file into your custom theme.</p>
          <p>See the <code>app/design/frontend/Magento/luma/web/css/source/_email-extend.less</code> file for example usage.</p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <p><code>app/design/frontend/Magento/blank/web/css/source/_email-variables.less</code></p>
      </td>
      <td colspan="1">
          <p>The <code>_email-base.less</code> file uses a number mixins from the Magento UI library. If you want to change any of the styles output by those mixins, you can set the value of any of the variables those mixins uses in this file. See the <code>app/design/frontend/Magento/luma/web/css/source/_email-variables.less</code> file for example usage.</p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <p><code>app/design/frontend/Magento/blank/&lt;Namespace&gt;_&lt;Module&gt;/web/css/source/_email.less</code></p>
      </td>
      <td colspan="1">
         <p>Stores module-specific styles. This mechanism also allows third-party extensions to include styles that will get included in the inline/non-inline output.</p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <p><code>lib/web/css/source/_email-variables.less</code></p>
      </td>
      <td colspan="1">
          <p>Same as <code>app/design/frontend/Magento/blank/web/css/source/_email-variables.less</code></p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <p><code>lib/web/css/source/lib/variables/_email.less</code></p>
      </td>
      <td colspan="1">
          <p>Contains new email-specific variables that can be overridden in a theme-specific <code>_email-variables.less</code> file. </p>
      </td>
    </tr>
  </tbody>
</table>

When implementing a custom theme, you should be able to fully customize email templates by copying the `app/design/frontend/Magento/blank/web/css/source/_email-extend.less` and `app/design/frontend/Magento/blank/web/css/source/_email-variables.less` files to your custom theme and editing those files.

<h3 id="custom-fonts">Custom fonts</h3>

Emails will inherit the custom fonts that are defined by the frontend theme. The `Magento\blank` theme uses the **Open Sans** font. Since **Open Sans** is not a standard system font, `@font-face` rules are used to include web fonts.
 
 Here is an overview of how the font structure for emails works:
 
 * The `app/design/frontend/Magento/blank/web/css/source/_email-extend.less` file contains an `@import` directive which requests the `email-fonts.css` file. The reason the contents of `email-fonts.css` are being loaded using `@import` rather than be output directly into a `<style>` tag in the `<head>` of an email is that if a user is reading their email offline, some email clients won't render the text since the web fonts can't be loaded.
 * The `app/design/frontend/Magento/blank/web/css/email-fonts.less` file imports `source/_variables.less` and `source/_typography.less` files:
     * The `app/design/frontend/Magento/blank/web/css/source/_variables.less` file defines which font is going to be used, via the `@font-family-name__base` variable.
     * The `app/design/frontend/Magento/blank/web/css/source/_typography.less` file generates the `@font-face` rules which import the custom fonts.

If you want to change the font used for emails, do the following:

1. Refer to the documentation on [using fonts]({{ site.gdeurl }}frontend-dev-guide/css-topics/using-fonts.html) for details on how to add a new font.
2. Once you've added a new font and have updated the `source/_variables.less` and `source/_typography.less` files for your custom theme to refer to the new font, the emails should start using the new font. 

<h2 id="email-logo">Email logo</h2>
You can add a logo to emails by adding it to your theme or by uploading it in the Magento Admin. 

Because email clients don't support vector-based formats such as Scalable Vector Graphics (SVG), you must prepare a Portable Network Graphics (PNG) logo image. 

Because emails are viewed on devices with a broad range of pixel densities, you should use a logo that is 3x the size you actually want it to display. For example, let's say your email has a 200px &times; 100px area for the logo. Your logo image should be 600px &times; 300px.

If you don't have access to a high-resolution version of your logo, you can upload a normal-resolution image. For example, if your logo image is 200px &times; 100px, specify `200` for the width and `100` for the height.

<h3 id="customize-logo-theme">Customize the logo using a theme</h3>
To customize your logo using a theme:

1.  Add a file named `logo_email.png` to a `Magento_Email/web/` directory in your custom theme. 
  
  For example, to add a logo for the `Magento/luma` theme, you would add a file here: `app/design/frontend/Magento/luma/Magento_Email/web/logo_email.png`.

2.  Copy the `app/code/Magento/Email/view/frontend/email/header.html` file into a `Magento_Email/email/header.html` directory in your theme. 

3.  Edit the `width` and `height` attributes of the `<img>` tag to reflect the area in which you want your logo to display (for example, 200 &times; 100). 
  
  Example:
  
  <pre>{% raw %}
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
  {% endraw %}</pre>
  
  You should leave the if/else conditional statement in place in case you might want to override these values using the Admin.

<h3 id="customize-logo-admin">Customize the logo using the Admin</h3>

1. In the Magento Admin, navigate to **Stores** > **Configuration** > GENERAL > **Design** > **Emails**
2. In the **Scope** drop-down list, select the scope for which you want to set a logo (a certain store view, the whole website, or default config). 
3. Upload your logo and specify the alternative text for it.
<img src="{{site.baseurl}}common/images/email_configuration.png" alt="System configuration">

4. Set "Logo Width" and "Logo Height" values. Based on the example above, you would enter `200` and `100`, respectively.
5. Click the **Save Config** button.

<h2 id="contact-information-emails">Using contact information in emails</h2>
Emails can output your store name, store email address, store phone number, and store hours of operation if those values are configured in the Admin. 

To set those values:

1. To set the store name, phone number, and hours of operation:
    a. In the Magento Admin, navigate to **Stores** > **Configuration** > GENERAL > **General** > **Emails**
    b. Input values into the **Store Name**, **Store Phone Number**, and **Store Hours of Operation** fields. 
    c. Note: The **Store Phone Number** and **Store Hours of Operation** fields are optional.
    d. Click the **Save Config** button.
2. To set the store name, phone number, and hours of operation:
    a. In the Magento Admin, navigate to **Stores** > **Configuration** > GENERAL > **General** > **Store Email Addresses** > **General Contact**
    b. Input values into the **Sender Name** and **Sender Email** fields. 
    c. Click the **Save Config** button.

The sales emails are configured to display all of the above values, if they're configured in the admin. If you want to add those values to other email templates, you can use the following variables:

    {% raw %}{{var store_email}}{% endraw %}
    {% raw %}{{var store_phone}}{% endraw %}
    {% raw %}{{var store_hours}}{% endraw %}

<h2 id="localization">Localization</h2>
To support content translation, all strings in emails are output using the `trans` directive. Example: 

    {% raw %}{{trans "Thank you for your order from %store_name." store_name=$store.getFrontendName()}}{% endraw %}
    {% raw %}{{trans "Once your package ships we will send you a tracking number."}}{% endraw %}

The `trans` directive translates strings into whatever locale is configured for the store from which the email is being sent. For example, if an email is being sent from a store view that is configured to use the `fr_FR` locale, then the email is translated to French.

<h2 id="supported-clients">Supported email clients and devices</h2>
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

<h2 id="newsletter-templates">Newsletter templates</h2>
The focus of this article is on transactional emails but the same techniques can be used with newsletter templates as well, including:

* Import the header and footer using `{% raw %}{{template config_path="design/email/header_template"}}{% endraw %}` and `{% raw %}{{template config_path="design/email/footer_template"}}{% endraw %}`
* Apply inline styles using `{% raw %}{{inlinecss file="css/email-inline.css"}}{% endraw %}`
* Include non-inline styles using `{% raw %}{{css file="css/email.css"}}{% endraw %}`
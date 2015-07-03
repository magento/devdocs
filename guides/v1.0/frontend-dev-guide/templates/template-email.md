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

* <a href="#customizing-email-templates">Customizing Email Templates</a>
    * <a href="#customize-email-theme">Customize Email Template Using Theme</a>
    * <a href="#customize-email-admin">Customize Email Template Using Admin</a>
    * <a href="#customize-header-footer">Customize Header/Footer Templates</a>
    * <a href="#customize-content">Customize Email Content</a>
* <a href="#email-styles">Email Styles</a>
    * <a href="#inline-styles">Inline Styles</a>
    * <a href="#non-inline-styles">Non-Inline Styles</a>
    * <a href="#organization-email-styles">Organization of Email Styles</a>
    * <a href="#web-fonts">Web Fonts</a>
* <a href="#email-logo">Email Logo</a>
    * <a href="#customize-logo-theme">Customize Logo Using Theme</a>
    * <a href="#customize-logo-admin">Customize Logo Using Admin Panel</a>
* <a href="#contact-information-emails">Using Contact Information in Emails</a>
* <a href="#localization">Localization</a>
* <a href="#supported-clients">Supported Email Clients and Devices</a>
* <a href="#newsletter-templates">Newsletter Templates</a>

<h2 id="customizing-email-templates">Customizing Email Templates</h2>

Email templates are stored in the `app/code/<Namespace>/<Module>/view/<area>/email/` folder of their respective modules. For example: `app/code/Magento/Sales/view/frontend/email/order_new.html`. Email templates can be customized in one of two ways:
 
<h3 id="customize-email-theme">Customize Email Template Using Theme</h3>

Email templates can be overridden by creating templates in the `<Namespace>_<Module>/email/` folder of a custom theme. For example, if you wanted to override the "New Order" email in the `Magento/luma` theme, you would create a file in this location `app/design/frontend/Magento/luma/Magento_Sales/email/order_new.html`. 

Theme fallback is supported, so parent themes of your current theme will be searched for templates.
 
<h3 id="customize-email-admin">Customize Email Template Using Admin</h3>

Any templates that are configured in the admin panel will take precedence over default or theme-based templates.

1. In the Magento Admin, navigate to **MARKETING** > Communications > **Email Templates**
2. Click the **Add New Template** button.
3. If you want to use a default template as a starting point, in the **Load default template** section, choose the template and click the **Load Template** button. The path to the configuration settings for each default template appears in the **Currently Used For** field in the Template Information section. Make note of this path, because you will need it later when you configure this new template to be used instead of the default template.
    <br><img src="{{site.baseurl}}common/images/email_create_template.png" alt="New template creation page with loaded default template" width="70%" height="70%"/>

4. In **Template Name**, enter the name which will be used in the Magento Admin.
5. In **Template Subject**, add plain text which will be used as a Subject of the emails sent using the template you create. This field can contain system variables.  
6. Customize template content. For details please refer to the <a href="#customize-content">that section</a>.
7. In **Template Styles**, optionally add CSS styles for the template. These styles will be added inside of a `<style>` tag in the `<head>` of the email. Typically you'll want to use the LESS files <a href="#email-styles">described below</a> to make style changes to emails, as some email clients don't support styles in `<style>` tags.
8. Click the **Save Template** button.
9. Now that you have created a template, you must configure that template to be used:
    1. Go to **Stores** > **Configuration**
    2. Navigate to the section that contains the template that you want to override. This will be the section that was referenced by the **Currently Used For**. For example, if you created a "New Order" template, the configuration section will be **Stores** > **Configuration** > SALES > **Sales Emails**.
    3. Select your newly created template from the dropdown.
    4. Click the **Save Config** button.

<h3 id="customize-header-footer">Customize Header/Footer Templates</h3>

Every frontend email template includes a header and footer template using these two directives: `{% raw %}{{template config_path="design/email/header_template"}}{% endraw %}` and `{% raw %}{{template config_path="design/email/footer_template"}}{% endraw %}`. By default, those two directives load contents from these files:
 
 * `app/code/Magento/Email/view/frontend/email/header.html`
 * `app/code/Magento/Email/view/frontend/email/footer.html`

The header and footer templates can be customized using either the <a href="#customize-email-theme">theme</a> or <a href="#customize-email-admin">admin</a> customization methods described above.

<h3 id="customize-content">Customize Email Content</h3>

To add the store and sales related information to a template, use system variables. 

System variables are placeholders which are replaced by particular values when the actual email is generated. For example, the <code>&#123;&#123;var order.increment_id&#125;&#125;</code> variable is replaced by the ID of the order for which the email is generated.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
 <p> You can also create your own custom variables and set their values. This is done in the Admin, under <b>System</b> > <b>Custom Variables</b> </p></span>
</div>


To add a variable to your template content:

1. On the template creation page, click to place the cursor in the text in which to insert the variable.
2. Click **Insert Variable**. A pop-up containing a list of variables opens, including custom variables. Variables are grouped by the modules they relate to. The following image illustrates a variable list: <br><img src="{{site.baseurl}}common/images/email_insert_variable.png" alt="The list of available variables" width="70%" height="70%">

2. Click the name of the required variable. <br> The variable code is inserted in the template content.


<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
 <p> The selection of available variables depends on which template you use as a basis. Alternatively, you can manually insert variables "related" to other templates in your template code if you know the variable code. </p></span>
</div>


<h2 id="email-styles">Email Styles</h2>

Some email clients (e.g., Gmail) only support CSS styles that have been applied as "inline" styles on the `style` attribute of HTML tags. Because of this, the majority of email styles are applied as inline styles. Inlining is done using the <a href="https://github.com/jjriv/emogrifier" target="_blank">Emogrifier</a> library, which takes the HTML and CSS and adds all of the CSS styles to `style` attributes of the HTML tags.

<h3 id="inline-styles">Inline Styles</h3>

The `app/code/Magento/Email/view/frontend/email/header.html` file contains an `inlinecss` directive:

    {% raw %}{{inlinecss file="css/email-inline.css"}}{% endraw %}

The `inlinecss` directive tells Magento which files to apply as inline styles on the email template. 

For example, let's say an email is being sent from a store configured with the `Magento/luma` theme. The `inlinecss` directive will first look for a `email-inline.less` file in `app/design/frontend/Magento/luma/web/css/email-inline.less`. However since that file doesn't exist, it will fall back to the `app/design/frontend/Magento/blank/web/css/email-inline.less` file. The contents of that file will then be compiled and its contents will be applied as inline styles to the email template.

Refer to the <a href="https://github.com/jjriv/emogrifier#emogrifier" target="_blank">Emogrifier README</a> to see what CSS selectors are supported.

<h3 id="non-inline-styles">Non-Inline Styles</h3>

There are two sources for non-inline styles for emails:

<h4 id="global-non-inline-styles">Global Non-Inline Styles</h4>

While the majority of styles should be applied inline, there are certain CSS styles that can't be applied inline, such as media queries or `:hover` pseudo styles. These styles must be in a `<style type="text/css"></style>` tag for them to work.

The `app/code/Magento/Email/view/frontend/email/header.html` file contains a `css` directive inside of a `<style>` tag:

    <style type="text/css">
        {% raw %}{{var template_styles|raw}}{% endraw %}
    
        {% raw %}{{css file="css/email.css"}}{% endraw %}
    </style>

The `css` directive compiles the contents of the provided file and outputs it. 

For example, let's say an email is being sent from a store configured with the `Magento/luma` theme. The `css` directive will first look for a `email.less` file in `app/design/frontend/Magento/luma/web/css/email.less`. However since that file doesn't exist, it will fall back to the `app/design/frontend/Magento/blank/web/css/email.less` file. The contents of that file will be compiled and its contents will be output in the `<style>` tag.

<h4 id="template-specific-non-inline-styles">Template-Specific Non-Inline Styles</h4>

As mentioned in the section above, the `header.html` file is outputting the `{% raw %}{{var template_styles|raw}}{% endraw %}` variable. 

The value of that variable comes from one of two places: 

* If you add styles to any `html` email template inside of a comment block like this, it will get included in the `template_styles` variable:
      
      <!--@styles 
      .example-style { color: green; }
      @-->
      
* If you customize transactional emails using the Magento Admin Panel, you can add CSS styles to the **Template Styles** field to include those styles in the `template_styles` variable.

<h3 id="organization-email-styles">Organization of Email Styles</h3>

The styles for emails are split into several different files.

<table>
  <tbody>
    <tr>
      <th>File</th>
      <th>Description</th>
    </tr>
    <tr>
      <td colspan="1">
          <code>app/design/frontend/Magento/blank/web/css/email.less</code>
      </td>
      <td colspan="1">
          Imports necessary files and then outputs styles to be included in <code>&lt;style&gt;</code> tag
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <code>app/design/frontend/Magento/blank/web/css/email-fonts.less</code>
      </td>
      <td colspan="1">
          Contains <code>@font-face</code> declarations for custom fonts. This file is imported by the <code>_email-extend.less</code> file using the <code>@import</code> rule.
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <code>app/design/frontend/Magento/blank/web/css/email-inline.less</code>
      </td>
      <td colspan="1">
          Imports necessary files and then outputs styles to be inlined  
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <code>app/design/frontend/Magento/blank/web/css/source/_email-base.less</code>
      </td>
      <td colspan="1">
          Contains majority of styles for emails, including resets/layout/typography/etc. Review the comments at the top of this file to understand how the styles in this file are split between the <code>email.less</code> and <code>email-inline.less</code> files.
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <code>app/design/frontend/Magento/blank/web/css/source/_email-extend.less</code>
      </td>
      <td colspan="1">
          This file is intended to be copied into your custom themes and edited directly. You can add new email styles or override existing ones. This should prevent having to copy the <code>_email-base.less</code> file into your custom theme. See the <code>app/design/frontend/Magento/luma/web/css/source/_email-extend.less</code> file for example usage.
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <code>app/design/frontend/Magento/blank/web/css/source/_email-variables.less</code>
      </td>
      <td colspan="1">
          The <code>_email-base.less</code> file uses a number mixins from the Magento UI library. If you want to change any of the styles output by those mixins, you can set the value of any of the variables those mixins uses in this file. See the <code>app/design/frontend/Magento/luma/web/css/source/_email-variables.less</code> file for example usage.
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <code>app/design/frontend/Magento/blank/&lt;Namespace&gt;_&lt;Module&gt;/web/css/source/_email.less</code>
      </td>
      <td colspan="1">
          Styles that are specific to modules are stored in these files. This mechanism also allows third-party extensions to include styles that will get included in the inline/non-inline output.
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <code>lib/web/css/source/_email-variables.less</code>
      </td>
      <td colspan="1">
          Same as <code>app/design/frontend/Magento/blank/web/css/source/_email-variables.less</code>
      </td>
    </tr>
    <tr>
      <td colspan="1">
          <code>lib/web/css/source/lib/variables/_email.less</code>
      </td>
      <td colspan="1">
          Contains new email-specific variables that can be overridden in a theme-specific <code>_email-variables.less</code> file. 
      </td>
    </tr>
  </tbody>
</table>

When implementing a custom theme, you should be able to fully customize email templates by copying the `app/design/frontend/Magento/blank/web/css/source/_email-extend.less` and `app/design/frontend/Magento/blank/web/css/source/_email-variables.less` files to your custom theme and editing those files.

<h3 id="web-fonts">Web Fonts</h3>

The `Magento\blank` theme and emails use the Open Sans web font. If you want to change this font, can do the following:

<span style="color: red;">TODO - It probably doesn't make sense to write up instructions on how to implement a custom font here, as the custom font will be inherited from the frontend theme. So the theme development documentation should probably be expanded with an example of how to add a custom web font and we can then just reference it from here.</span>

<h2 id="email-logo">Email Logo</h2>

You can add a logo to emails by adding it to your theme or by uploading it in the Magento Admin. 

Since email clients don't support vector-based formats such as SVG, you will need to prepare a PNG logo. Since emails are viewed on devices with a broad range of pixel densities, you should use a logo that is 3x the size that you actually want it to display. For example, let's say your email has a 200px &times; 100px area for the logo. The logo image should be 600px &times; 300px.

If you don't have access to a high-resolution version of your logo, you can upload a normal-resolution image. For example, if your logo image is 200px &times; 100px, specify `200` for the width and `100` for the height.

<h3 id="customize-logo-theme">Customize Logo Using Theme</h3>

* Add a file named `logo_email.png` to a `Magento_Email/web/` folder in your custom theme. 
  
  For example, if you wanted to add a logo for the `Magento/luma` theme, you would add a file here: `app/design/frontend/Magento/luma/Magento_Email/web/logo_email.png`.
* Copy the `app/code/Magento/Email/view/frontend/email/header.html` file into a `Magento_Email/email/header.html` folder in your theme. Edit the `width` and `height` attributes of the `<img>` tag to reflect the area in which you want your logo to display (for example, 200 &times; 100). 
  
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
  
  You should leave the if/else conditional statement in place in case you ever want to override these values using the Admin Panel.

<h3 id="customize-logo-admin">Customize Logo Using Admin Panel</h3>

1. In the Magento Admin, navigate to **Stores** > **Configuration** > GENERAL > **Design** > **Emails**
2. In the **Scope** drop-down list, select the scope for which you want to set a logo (a certain store view, the whole website, or default config). 
3. Upload your logo and specify the alternative text for it.
<img src="{{site.baseurl}}common/images/email_configuration.png" alt="System configuration">

4. Set "Logo Width" and "Logo Height" values. Based on the example above, you would enter `200` and `100`, respectively.
5. Click the **Save Config** button.

<h2 id="contact-information-emails">Using Contact Information in Emails</h2>

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

    {% raw %}{{var store_email}}{% endraw %}
    {% raw %}{{var store_phone}}{% endraw %}
    {% raw %}{{var store_hours}}{% endraw %}

<h2 id="localization">Localization</h2>

In order to support the translation of content, all strings in emails are output using the `trans` directive. Example: 

    {% raw %}{{trans "Thank you for your order from %store_name." store_name=$store.getFrontendName()}}{% endraw %}
    {% raw %}{{trans "Once your package ships we will send you a tracking number."}}{% endraw %}

The `trans` directive will translate strings into whatever locale is configured for the store from which the email is being sent. For example, if an email is being sent from a store view that is configured to use the fr_FR locale, then the email will be translated to French.

<h2 id="supported-clients">Supported Email Clients and Devices</h2>

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

<h2 id="newsletter-templates">Newsletter Templates</h2>

The focus of this article is on transactional emails but the same techniques can be used with newsletter templates as well, including:

* Import the header and footer using `{% raw %}{{template config_path="design/email/header_template"}}{% endraw %}` and `{% raw %}{{template config_path="design/email/footer_template"}}{% endraw %}`
* Apply inline styles using `{% raw %}{{inlinecss file="css/email-inline.css"}}{% endraw %}`
* Include non-inline styles using `{% raw %}{{css file="css/email.css"}}{% endraw %}`

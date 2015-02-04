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

Email templates are not bound to design themes, but creating a custom theme for a store most likely will include customization of email templates as well. Even if you are ok with default templates, there is a change you will definitely need to make - you should change the logo used in these templates (by default the Magento logo is used). 


This article describes how to change the default logo used in default email templates, how to further customize email templates and apply them for a store. 

<h2>Changing email logo</h2>

To replace the default Magento logo used in the email templates:

1. In the Magento Admin, navigate to **Stores** > **Configuration** > GENERAL > **Design** > **Transactional Emails**
2. In the **Scope** drop-down list select the scope for which you want to set a logo (a certain store view, the whole website, or default config). 

2.	Load your logo and specify the alternative text for it.
<img src="{{site.baseurl}}common/images/email-logo-settings.png" alt="System configuration">

3.	Click the **Save Config** button.

<h2>Customizing email template</h2>

To make more serious customization than changing a logo, you need to create a custom template, optionally using a default template as a basis.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
 <p>Email templates can be only accessed and customized in Magento Admin.</p></span>
</div>

To create a custom email template:

1. In the Magento Admin, navigate to **MARKETING** > Communications > **Email Templates**
2. Click the **Add New Template** button. 
3. If you want to use a default template as a starting point, in the Load default template section, choose the default template and click the **Load Template** button. <br id="info_path">The path to the configuration settings for each default template appears in the **Used as Default For** field in the Template Information section. Make note of this path, because you will later need to update the configuration with the name of the new template.<br><img src="{{site.baseurl}}common/images/create_template.png" alt="New template creation page with loaded default template" width="70%" height="70%"/>

4. In **Template Name** enter the name which will be used in the Magento Admin.
5. In **Template Subject** add plain text which will be used as a Subject of the emails sent using the template you create. This field can contain <a href="#var">system variables</a>.  
5. Customize template content. For details please refer to the <a href="#content">next paragraph</a>.
6. In **Template Styles** optionally add styling information using CSS syntax. 
5. Save the template. 

<h3 id="content">Customizing content</h3>

An email template is an HTML snippet, where the content should be enclosed in <code>&lt;body&gt;&lt;/body&gt;</code>

<span id="var">To add store and sales related information to a template, use system variables. 

System variables are placeholders which are replaced by particular values when the actual email is generated. For example, the <code>&#123;&#123;var order.increment_id&#125;&#125;</code> variable is replaced by the order ID of the order for which the email is generated.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
 <p> You can also create your own custom variables and set their values. This is done in the Admin, under <b>System</b> > <b>Custom Variables</b> </p></span>
</div>


To add a variable to your template content:

1. On the template creation page, click **Insert Variable** (having positioned the cursor in the text where you want the variable to be inserted). A pop-up containing a list of variables opens, including custom variables. Variables are grouped by the modules they relate to. The following image illustrates a variable list: <br><img src="{{site.baseurl}}common/images/insert-variable.png" alt="The list of available variables" width="70%" height="70%">

2. Click the name of the required variable, its code is inserted in the template content.


<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
 <p> The selection of available variables depends on which template you use as basis. Though you can manually insert variables "related" to other templates in your template code if you know the variable code. </p></span>
</div>


<h2>Applying a new template</h2>

To use a new template for generating emails, you need to specify it in the in Admin under **Stores** > **Configuration**. 

The further path to the configuration depends on the purpose of the template. 
For example, if the template is supposed to be used for sales emails, like new order notification, or invoice, it is configured under **Stores** > **Configuration** > SALES > **Sales Emails**.

If your template was created using a default one, then the path for configuration was specified on the template creation page in the <a href="#info_path">**Used as Default For** field</a>.


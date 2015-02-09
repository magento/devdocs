---
layout: default  
group: 
subgroup: C_Templates
title: Templates customizing walkthrough
menu_title: Templates customizing walkthrough
menu_order: 2
github_link: frontend-dev-guide/templates/template-overview.md
---

<h2>Overview</h2>
This topic walks you through how to customize a template.

<h2>Template customization walkthrough</h2>

To customize a template in your theme:

1. Locate the template which is associated with the page/block you want to change using <a href="{{site.gdeurl}}frontend-dev-guide/themes/debug-theme.html#debug-theme-templ" target="_blank">template hints</a>.

2. Copy the template to your theme folder.

3. Make the required changes.

To add a new template in a theme:

1. Add a template in your theme directory according to the <a href="{{site.gdeurl}}frontend-dev-guide/templates/template-override.html#template-convention" target="_blank">template storing convention</a>. 

2. Assign your template to a block in the <a href="{{site.gdeurl}}frontend-dev-guide/templates/template-override.html#template-layout" target="_blank">corresponding layout file</a>. 

<h2>Walkthrough illustration: adding a message to the customer review form</h2>
A small customization to illustrate the walkthrough: in their Orange theme, the OrangeCo company want to add a short text to the product review form to encourage customers to write reviews. 

The following image illustrates how the default review form looks like:

<img src="{{site.baseurl}}common/images/template_walk_without_text.png" alt="a default review form">

To add the text, OrangeCo needs to override the default review form template in the Orange theme. 

First, they copy the `form.phtml` template from `app/code/Magento/Review/view/frontend/templates` to the corresponding sub-directory in the Orange theme directory: `app/design/frontend/OrangeCo/orange/Magento_Review/templates`.

In the theme `form.phtml` file they add the HTML snippet with the message before the <code>&lt;form&gt;</code>:

<img src="{{site.baseurl}}common/images/template-sample-code.png" alt="a HTML snippet you need to add">

Here's how the form will look when the Orange theme is applied in a store:

<img src="{{site.baseurl}}common/images/template_with_text.png" alt="Review form with the new message added">






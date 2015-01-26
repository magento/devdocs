---
layout: default  
group: fedg
subgroup: C_Templates
title: Templates customizing walkthrough
menu_title: Templates customizing walkthrough
menu_order: 2
github_link: frontend-dev-guide/templates/template-overview.md
---

<h2>Introduction</h2>
This article features a high-level steps of a template customization, with a practical example.

<h3>Template customization waklthrough</h3>

To customize a template in your theme:

1. Locate which template is associated with the page/block you want to change using <a href="{{site.gdeurl}}frontend-dev-guide/themes/debug-theme.html#debug-theme-templ" target="_blank">template hints</a>.

2. Copy the template to your theme folder, according to the <a href="{{site.gdeurl}}frontend-dev-guide/template-override.html#template-convention" target="_blank">template storing convention</a>: app/design/<Vendor>/<theme>/<Namespace_Module>/templates/<path_to_template>

3. Make the required changes.

To add a new template in a theme:

1. Add your new template in your theme directory according to the <a href="{{site.gdeurl}}frontend-dev-guide/template-override.html#template-convention" target="_blank">conventional location</a>. 

2. Assign your template to a block or page in the <a href="{{site.gdeurl}}frontend-dev-guide/template-override.html#template-layout" target="_blank">corresponding layout file</a>. 

<h2>Walkthrough illustration: adding a message to the customer review form</h2>
As a short walkthrough let’s add a short text to the product review form to inspire customers to add their reviews: “We welcome and appreciate your informative review about this product. Your input will help others to choose the best product for them.”
Here we have a default review form:

<img src="{{site.baseurl}}common/images/template_walk_without_text.png" alt="a default review form">

To add the text we need to override the review form template in your theme. Navigate to `app/code/Magento/Review/view/frontend/templates` and copy the `form.phtml` template. 

In the Orange theme create `app/design/frontend/OrangeCo/orange/Magento_Review/templates` directory and place the `form.phtml` file there.

Now open `app/design/frontend/OrangeCo/orange/Magento_Review/templates/form.phtml` file and add the HTML snippet with the message before the <form>:

<img src="{{site.baseurl}}common/images/template-sample-code.png" alt="a HTML snippet you need to add">

Here's how the form will look when the Orange theme is applied in a store:

<img src="{{site.baseurl}}common/images/template_with_text.png" alt="Review form with the new message added">






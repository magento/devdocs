---
group: frontend-developer-guide
subgroup: C_Templates
title: Templates customization walkthrough
menu_title: Templates customization walkthrough
menu_order: 2
redirect_from: /guides/v1.0/frontend-dev-guide/templates/template-walkthrough.html
functional_areas:
  - Frontend
---

## What's in this topic

This topic walks you through how to customize a template.

## Prerequisites 

[Set]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer [mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html). The application mode influences the way {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %} are cached by Magento. The recommendations about {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} development we provide in this chapter are developer/default-mode specific.

## Template customization walkthrough

To customize a template:

1. Locate the template which is associated with the page/block you want to change using [template hints]({{ page.baseurl }}/frontend-dev-guide/themes/debug-theme.html#debug-theme-templ){:target="_blank"}.

2. Copy the template to your theme folder according to the [template storing convention]({{ page.baseurl }}/frontend-dev-guide/templates/template-override.html#template-convention).

3. Make the required changes.

To add a new template in a theme:

1. Add a template in your theme directory according to the template storing convention. 

2. Assign your template to a block in the [corresponding layout file]({{ page.baseurl }}/frontend-dev-guide/templates/template-override.html#template-layout). 

{:.bs-callout .bs-callout-info}
If you add a new `.html` template, and then edit it, the changes will not apply until you do the following: delete all files in the `pub/static/frontend` and `var/view_preprocessed` directories, then reload the pages. You can delete the files manually or run the `grunt clean:&lt;theme_name&gt;` command in CLI. For details about using Grunt in Magento see [Installing and configuring Grunt]({{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html#grunt_prereq).

## Walkthrough illustration: adding a message to the customer review form

A small customization to illustrate the walkthrough: in their Orange theme, the OrangeCo company wants to add a short text to the product review form to encourage customers to write reviews. 

The following image illustrates how the default review form looks like:

![Default review form]({{ site.baseurl }}/common/images/template_walk_without_text.png)

To add the text, OrangeCo needs to override the default review form template in the Orange theme. 

First, they copy the `form.phtml` template from `<Magento_Review_module_dir>/view/frontend/templates` to the corresponding subdirectory in the Orange theme directory: `app/design/frontend/OrangeCo/orange/Magento_Review/templates`.

In the theme `form.phtml` file they add the {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} snippet with the message before the <code>&lt;form&gt;</code>:

![HTML snippet to add]({{ site.baseurl }}/common/images/template-sample-code.png)

Here's how the form will look when the Orange theme is applied in a store:

![Review form with the new message added]({{ site.baseurl }}/common/images/template_with_text.png)






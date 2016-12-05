---
layout: default
group:
subgroup: View library
title: Page types
menu_title: Page types
menu_order:
version: 2.0
github_link: architecture/view/page-type.md
redirect_from: /guides/v1.0/architecture/view/page-type.html
---

## Introduction to page types {#m2devgde-pagetype-intro}
{:.no_toc}

* TOC
{:toc}

## Overview

Page types are semantic abstractions of those controller actions which are used for page rendering. They help to qualify pages by context type, like Product View page, Shopping Cart page, and so on, providing business users the ability to customize page design. In particular, page types are used in the widget creation  to define the pages where a widget can be displayed.

Page types are defined for the frontend area only, that is for the store front pages.

<p class="q">Reviewer: Clarify "for now"</p>

For now page types are used only to qualify pages by context type during the widget creation procedure. Though the implementation of the concept enables using it in other functionality related to design customization.

As a framework convention, page types correspond to full action names.

Full action names are mapped to the controller actions as follows:

	<ModuleName>_[controller]_[action] -> Vendor\Module\Controller*\Controller::actionAction()

where

*	`module` is the name of a module

*	`Controller` is the module's `Controller` directory

*	`controller` is the controller class name

*	`action` is the name of the action method

For example,

	customer_account_forgotpassword -> Magento\Customer\Controller\Account::forgotPasswordAction

## Page types and layout handles {#m2devgde-pagetype-handles}

In Magento, full action names also used as identifiers for sets of layout instructions (layout handles): a controller action by default loads a layout handle which coincides with its full action name. This means that page types correspond to some of the layout handles.

<div class="bs-callout bs-callout-info" id="info">
 <p>There are also other types of layout handles, like specific page handles, as well as custom handles.</p>
</div>

## Page type declaration {#m2devgde-pagetype-declare}

Page types for each module are declared in `page_types.xml`. The declaration is area-specific, so `page_types.xml` should reside among the frontend-specific resources of a module.

`page_types.xml` is typically located in:

	vendor/<vendorname>/module-<name>/etc/frontend

For example, <a href="{{ site.mage2000url }}app/code/Magento/Customer/etc/frontend/page_types.xml" target="_blank">Customer module page_types.xml</a>.

You must declare the ID and label of each page type in the following format:

{% highlight XML %}
<?xml version="1.0"?>
	<page_types>
		<type id="module1_controller1_action1" label="Page1"/>
		<type id="module2_controller2_action2" label="Page2"/>
	</page_types>
{% endhighlight %}

An example is shown in the previously referenced Customer module `page_types.xml`.

## Page types in widget creation {#m2devge-pagetype-widget}

To create a widget, you must specify the pages on which it displays in the Magento Admin as follows:

1.	In the Magento Admin, click **Content** > **Frontend App**.

2.	After choosing to create a new widget instance, specify the widget type and the design theme.

3.	In the page for configuring other widget options, click **Add Layout Update**. You can now specify pages by clicking the corresponding layout handle names.

4.	If you choose **Specified Page**, a list of available page types displays, as the following figure shows.

	<img src="{{ site.baseurl }}common/images/page_types_widget_specified-page.png">

5.	The page types in this list correspond to certain layout handles as follows.

	<img src="{{ site.baseurl }}common/images/page_types_widget_layout-handles.png">

## Add custom pages for widget creation {#m2devge-pagetype-custom-pg}

For your custom page type to be an option in the list of available pages during widget creation, you must declare this page type as discussed in in <a href="#m2devgde-pagetype-declare">Page type declaration</a>.

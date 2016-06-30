---
layout: default
group: jsdg
subgroup: 3_Widgets
title: Magento jQuery widgets
menu_order: 1
menu_node: parent
version: 2.0
github_link: javascript-dev-guide/widgets/jquery-widgets-about.md
redirect_from:
  - guides/v2.0/frontend-dev-guide/javascript/jquery-widgets-about.html
  - guides/v1.0/frontend-dev-guide/javascript/jquery-widgets-about.html
---

The Magento system uses a jQuery JavaScript library to implement client functionality. This includes a wide usage of standard, customized, and custom jQuery widgets.

This guide discusses the following widgets:
<ul>
<li><a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_accordion.html" target="_blank">Accordion widget</a> </li>
<li><a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_alert.html" target="_blank">Alert widget</a> </li>
<li><a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_calendar.html" target="_blank">Calendar widget</a></li>
<li><a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_collapsible.html" target="_blank">Collapsible widget</a></li>
<li><a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_confirm.html" target="_blank">Confirm widget</a></li>
<li><a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_dialog.html" target="_blank">DropdownDialog widget</a></li>
<li><a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_gallery.html" target="_blank">Gallery widget</a></li>
<li><a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_list.html" target="_blank">List widget</a></li>
<li><a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_loader.html" target="_blank">Loader widget</a></li>
<li><a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_menu.html" target="_blank">Menu widget</a></li>
<li><a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_modal.html" target="_blank">Modal widget</a></li>
<li><a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_navigation.html" target="_blank">Navigation widget</a></li>
<li><a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_prompt.html" target="_blank">Prompt widget</a></li>
<li><a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_quickSearch.html" target="_blank">QuickSearch widget</a></li>
<li><a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_tabs.html" target="_blank">Tabs widget</a></li>

</ul>


<div class="bs-callout bs-callout-info" id="info">
  <p>Magento 2 supports <a href="http://blog.jqueryui.com/2012/11/jquery-ui-1-9-2/" target="_blank">jQuery UI 1.9.2</a>, widget options added in later versions might be unavailable.</p>
</div>

<div class="bs-callout bs-callout-info" id="info">
  <p>Magento out of the box does not contain jQuery UI styles. Also, it is not recommended to download them as is, because it can break the default Magento design. To use certain jQuery UI styles, you need to add them manually in your custom stylesheets in the <code>%your_theme_dir%/web/css</code> or <code>%your_module_dir%/view/%area/web/css</code> directory.</p>
</div>

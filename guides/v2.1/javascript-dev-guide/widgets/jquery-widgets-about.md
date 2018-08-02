---
group: jsdg
subgroup: 3_Widgets
title: Magento jQuery widgets
menu_order: 1
menu_node: parent
version: 2.1
github_link: javascript-dev-guide/widgets/jquery-widgets-about.md
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/jquery-widgets-about.html
 - /guides/v1.0/frontend-dev-guide/javascript/jquery-widgets-about.html
---

The Magento system uses a {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %} to implement client functionality. This includes a wide usage of standard, customized, and custom jQuery widgets.

This guide discusses the following widgets:
<ul>
<li>[Accordion widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_accordion.html" target="_blank) </li>
<li>[Alert widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_alert.html" target="_blank) </li>
<li>[Calendar widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_calendar.html" target="_blank)</li>
<li>[Collapsible widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_collapsible.html" target="_blank)</li>
<li>[Confirm widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_confirm.html" target="_blank)</li>
<li>[DropdownDialog widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_dialog.html" target="_blank)</li>
<li>[Gallery widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_gallery.html" target="_blank)</li>
<li>[List widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_list.html" target="_blank)</li>
<li>[Loader widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_loader.html" target="_blank)</li>
<li>[Menu widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_menu.html" target="_blank)</li>
<li>[Modal widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_modal.html" target="_blank)</li>
<li>[Navigation widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_navigation.html" target="_blank)</li>
<li>[Prompt widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_prompt.html" target="_blank)</li>
<li>[QuickSearch widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_quickSearch.html" target="_blank)</li>
<li>[Tabs widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_tabs.html" target="_blank)</li>

</ul>


<div class="bs-callout bs-callout-info" id="info">
  <p>Magento 2 supports [jQuery UI 1.9.2](http://blog.jqueryui.com/2012/11/jquery-ui-1-9-2/" target="_blank), {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} options added in later versions might be unavailable.</p>
</div>

<div class="bs-callout bs-callout-info" id="info">
  <p>Magento out of the box does not contain jQuery UI styles. Also, it is not recommended to download them as is, because it can break the default Magento design. To use certain jQuery UI styles, you need to add them manually in your custom stylesheets in the <code>{your_theme_dir}/web/css</code> or <code>{your_module_dir}/view/{area}/web/css</code> directory.</p>
</div>

---
layout: default
group: fedg
subgroup: Javascript
title: Magento dropdownDialog widget
menu_order: 3
menu_title: Magento dropdownDialog widget
github_link: frontend-dev-guide/javascript/widget_dialog.md
---

<h2>Overview</h2>
Magento dropdownDialog widget is a customization of the standard <a href="http://api.jqueryui.com/dialog/">jQuery UI Dialog</a>. As extra functionality it implements the following:
<ul>
<li>triggering event for opening</li>
<li>delay to automatically close the dropdown on mouse out</li>
<li>clicking outside the area closes the dropdown</li>
</ul>

<img src="{{site.baseurl}}common/images/"/>
The Dropdown  widget source is located in <a href="{{site.baseurl}}lib/web/mage/dropdown.js" target="_blank">lib/web/mage/dropdown.js</a>.

<h2>Initialization</h2>

Generally the dropdown widget is instantiated like follows:
<pre>
$("#dialog_id").dropdownDialog();
</pre>
Where <code>#dialog_id</code> is the element's selector

Widget can be instantiated with options:
$("#dialog_id").dropdownDialog({
    appendTo :".column.main",
    dialogContentClass : 'active',
    timeout: "2000",
    autoPosition: true,
    "dialogClass" : "popup"
});

Widget instantiation using data attributes:
<div id="dialog" data-mage-init='{"dropdownDialog":{}}'>

Widget instantiated using data attributes with options passed:
<div id="dialog" data-mage-init='{"dropdownDialog":{"appendTo":"[data-block=minicart]", "triggerTarget":".showcart", "timeout": "2000", "triggerClass":"active", "parentClass":"active"}}'/>

<h2>Options</h2>
 
Magento customized Dialog widget has default <a href="http://api.jqueryui.com/dialog/" target="_blank">Query UI Dialog widget</a> options, plus several custom options, which are described further.
 
Magento Dropdown custom options are the following:
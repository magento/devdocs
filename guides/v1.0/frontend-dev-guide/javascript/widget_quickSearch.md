---
layout: default
group: fedg
subgroup: Javascript
title: Magento Navigation widget
menu_order: 2
menu_title: Magento Navigation widget
github_link: frontend-dev-guide/javascript/widget_quickSearch.md
---

<h2>Overview</h2>

The quickSearch widget is a custom autocomplete widget that populates a list of suggest search terms for the given field. This widget uses the existing catalogSearch widget and has been modified to pass in json and handlebars template to make it reusable.
The Suggest widget is also responsible for:
autocomplete
The Suggest widget source is located in the magento/app/code/Magento/CatalogSearch/view/frontend folder.
The Suggest widget uses the code from the CatalogSearch widget. This widget was then refactored to be template agnostic. It will pass a handlebars template into the widget to be rendered by passing in json parameters into the template. 

app/code/Magento/Search/view/frontend/web/form-mini.js

<p class="q">Need to correct to make the overview quickSearch-specific</p>
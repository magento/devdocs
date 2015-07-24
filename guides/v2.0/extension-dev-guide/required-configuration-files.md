---
layout: default
group: extension-dev-guide
subgroup: 3_Build
title: PHP Developer Guide
menu_title: Prepare
menu_order: 3
github_link: extension-dev-guide/required-configuration-files.md
redirect_from: /guides/v1.0/extension-dev-guide/template_create_req_config_files.html
---

##{{page.menu_title}}



In this topic, we want to make it clear that the exact config file required depends on what you want your new module to do! For example, if your module will be used to perform a function in the Admin, you will need to create the following config files:

* __.xml
* __.php

Or, if your module will be used to make a change to the UI, you'll need the following config files:

* __.xml
* __.phtml

Another possibility is that the module will be a service that perhaps calls an API, or does some other work that isn't manifested in the UI. In that case, you will need these files:

* __.xyz
* __.xyz
* __.xyz

<div class="bs-callout bs-callout-info" id="info">

  <p>To look at a sample module that uses these config files, go to 

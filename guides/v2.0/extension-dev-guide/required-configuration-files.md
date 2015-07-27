---
layout: default
group: extension-dev-guide
subgroup: 3_Build
title: PHP Developer Guide
menu_title: Required Configuration Files
menu_order: 3
github_link: extension-dev-guide/required-configuration-files.md
redirect_from: /guides/v1.0/extension-dev-guide/template_create_req_config_files.html
---

##{{page.menu_title}}


The exact config file(s) required for your module depends on what you want your new module to do! For example, if your module performs a function in the Admin, you must create the following config files:

* __.xml
* __.php

If your module changes the UI, you need the following config files:

* __.xml
* __.phtml

If the module is a service that may call an API, or does some other work that is not manifested in the UI you need these files:

* __.xyz
* __.xyz
* __.xyz

<div class="bs-callout bs-callout-info" id="info">

  <p>To look at a sample module that uses these config files, go to 

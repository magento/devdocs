---
group: install_trouble
subgroup: 10_php
title: During installation, PHP date warning
menu_title: During installation, PHP date warning
menu_node:
menu_order: 360
version: 2.0
redirect_from:
  - /guides/v1.0/install-gde/trouble/tshoot_php-date.html
  - /guides/v2.0/install-gde/trouble/tshoot_php-date.html
functional_areas:
  - Install
  - System
  - Setup
---

### Details

During the installation, the following message displays: 

	PHP Warning:  date(): It is not safe to rely on the system's timezone settings. [more]

### Solution

Set the [PHP timezone]({{ page.baseurl }}/install-gde/prereq/php-settings.html) properly.


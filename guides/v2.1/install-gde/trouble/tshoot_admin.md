---
layout: default
group: install_trouble
subgroup: 02_access
title: Error after logging in to the Magento Admin
menu_title: Error after logging in to the Magento Admin
menu_node:
menu_order: 15
version: 2.1
github_link: install-gde/trouble/tshoot_admin.md
functional_areas:
  - Install
  - System
  - Setup
---


### Details

	The requested URL /magento2index.php/admin/admin/dashboard/index/key/0c81957145a968b697c32a846598dc2e/ was not found on this server.

Note the lack of a slash character between <tt>magento2</tt> and <tt>index.php</tt> in the {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %}.

### Solution

The base URL is not correct. The base URL must start with <tt>http://</tt> or <tt>https://</tt> *and* it must end with a slash (/). Run the installation again with a valid value.


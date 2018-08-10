---
group: install_trouble
subgroup: 10_github
title: Cannot clone the Magento GitHub repository
menu_title: Cannot clone the Magento GitHub repository
menu_node:
menu_order: 400
version: 2.1
redirect_from:
  - /guides/v1.0/install-gde/trouble/tshoot_clone.html
  - /guides/v2.0/install-gde/trouble/tshoot_clone.html
functional_areas:
  - Install
  - System
  - Setup
---

### Detail

Error is similar to the following:

```
Cloning into 'magento2'...
Permission denied (publickey).
fatal: The remote end hung up unexpectedly
```

### Solution

Upload your SSH key to GitHub as discussed in [the GitHub help page](https://help.github.com/articles/generating-ssh-keys" target="_blank).

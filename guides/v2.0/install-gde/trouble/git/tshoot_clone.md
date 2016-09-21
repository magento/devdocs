---
layout: default
group: install_trouble
subgroup: 10_github
title: Cannot clone the Magento GitHub repository
menu_title: Cannot clone the Magento GitHub repository
menu_node:
menu_order: 400
version: 2.0
github_link: install-gde/trouble/git/tshoot_clone.md
redirect_from:
  -  /guides/v1.0/install-gde/trouble/tshoot_clone.html
  -  /guides/v2.0/install-gde/trouble/tshoot_clone.html
---


<h2 id="install-trouble-cannot-clone">Cannot clone the Magento GitHub repository</h2>

### Detail

Error is similar to the following:

<pre>Cloning into 'magento2'...
Permission denied (publickey).
fatal: The remote end hung up unexpectedly</pre>

### Solution

Upload your SSH key to GitHub as discussed in <a href="https://help.github.com/articles/generating-ssh-keys" target="_blank">the GitHub help page</a>.


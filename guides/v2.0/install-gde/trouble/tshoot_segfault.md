---
layout: default
group: install_trouble
subgroup: Z_Other issues
title: Segmentation fault during rollback
menu_title: Segmentation fault during rollback
menu_node: 
menu_order: 100
github_link: install-gde/trouble/tshoot_segfault.md
---

<h2 id="install-trouble-segfault">Segmentation fault during rollback</h2>

### Symptom
When you attempt to roll back using the command line, the following error displays:

	Segmentation fault

As a result, the rollback does not complete.

### Details
In some cases, a very long query string causes the user's allocated memory space to run out of memory because of too many recursive calls. We're aware of this issue and are working on a solution.

### Workaround
Until a solution is available, we recommend setting the <a href="http://ss64.com/bash/ulimit.html" target="_blank">`ulimit`</a> for the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a> to a value of 65536 or more. One way to do this is to edit the user's shell script. For example, for the Bash shell:

1.	If you haven't done so already, switch to the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-switch">Magento file system owner</a>.
2.	Open `/home/magento_user/.bashrc` in a text editor.
3.	Add the following line:
	
		ulimit -s 65536

<div class="bs-callout bs-callout-warning">
    <p>We recommend you avoid setting a value for <code>pcre.recursion_limit</code> in <code>php.ini</code> because it can result in incomplete rollbacks with no failure notice.</p>
</div>

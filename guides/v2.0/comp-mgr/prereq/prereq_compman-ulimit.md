---
layout: default
group: compman
subgroup: B_prereq
title: Set ulimit for the web server user
menu_title: Set ulimit for the web server user
menu_order: 2
menu_node: 
github_link: comp-mgr/prereq/prereq_compman-ulimit.md
---

## Issue
Rolling back to a previous backup using either the Component Manager or System Upgrade can silently fail, resulting in incomplete data being written to the file system or database.

### Details
In some cases, a very long query string causes the user's allocated memory space to run out of memory because of too many recursive calls. We're aware of this issue and are working on a solution.

### Workaround
Until a solution is available, we recommend setting the <a href="http://ss64.com/bash/ulimit.html" target="_blank">`ulimit`</a> for the web server user to a value of 65536 or more. One way to do this is to edit the user's shell script. For example, for the Bash shell:

1.	If you haven't done so already, switch to the web server user.
2.	Open `/home/<username>/.bashrc` in a text editor.
3.	Add the following line:
	
		ulimit -s 65536

	You can change this to a larger value if needed.

<div class="bs-callout bs-callout-warning">
    <p>We recommend you avoid setting a value for <code>pcre.recursion_limit</code> in <code>php.ini</code> because it can result in incomplete rollbacks with no failure notice.</p>
</div>
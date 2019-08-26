---
group: installation-guide
subgroup: 20_other
title: Segmentation fault during rollback
menu_title: Segmentation fault during rollback
menu_node:
menu_order: 510
functional_areas:
  - Install
  - System
  - Setup
---

### Symptom

When you attempt to roll back using the command line, the following error displays:

	Segmentation fault

As a result, the rollback does not complete.

### Details

In some cases, a very long query string causes the user's allocated memory space to run out of memory because of too many recursive calls. We're aware of this issue and are working on a solution.

### Workaround
Until a solution is available, we recommend setting the [`ulimit`](http://ss64.com/bash/ulimit.html){:target="_blank"} for the Magento file system user to a value of 65536 or more.

You can do this either on the command line or you can make it a permanent setting for the user by editing their shell script.

If you haven't done so already, switch to the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).

Command:

	ulimit -s 65536

You can change this to a larger value if needed.

{:.bs-callout .bs-callout-info}
The syntax for <code>ulimit</code> depends on the UNIX shell you use. The preceding setting should work with CentOS and Ubuntu with the Bash shell. However, for Mac OS, the correct setting is `ulimit -S 65532`. Consult a man page or operating system reference for more information.

To optionally set the value in the user's Bash shell:

1.	If you haven't done so already, switch to the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
2.	Open `/home/<username>/.bashrc` in a text editor.
3.	Add the following line:

		ulimit -s 65536

4.	Save your changes to `.bashrc` and exit the text editor.

{: .bs-callout .bs-callout-warning }
We recommend you avoid setting a value for [`pcre.recursion_limit`](http://php.net/manual/en/pcre.configuration.php){:target="_blank"} in `php.ini` because it can result in incomplete rollbacks with no failure notice.

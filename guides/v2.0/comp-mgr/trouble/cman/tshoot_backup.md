---
group: compman
subgroup: 50_trouble
title: Troubleshoot backups
menu_title: Troubleshoot backups
menu_node:
menu_order: 400
version: 2.0
functional_areas:
  - Upgrade
---

A backup can fail for any of the following reasons:

*	<a href="#trouble-backup-space">Insufficient disk space</a>
*	<a href="#trouble-backup-os">An operating system error</a>
*	<a href="#trouble-backup-all">Backup fails</a>

### Insufficient disk space   {#trouble-backup-space}

If the backup failed because of insufficient disk space, you should typically free up disk space by moving some files to another storage device or drive. However, there might be other ways to resolve the issue. See one of the following resources for tips:

*	<a href="http://www.cyberciti.biz/datacenter/linux-unix-bsd-osx-cannot-write-to-hard-disk" target="_blank">8 Tips to Solve Linux & Unix Systems Hard Disk Problems Like Disk Full Or Can’t Write to the Disk</a>
*	<a href="http://serverfault.com/questions/315181/df-says-disk-is-full-but-it-is-not" target="_blank">serverfault: df says disk is full, but it is not</a>
*	<a href="http://unix.stackexchange.com/questions/125429/tracking-down-where-disk-space-has-gone-on-linux" target="_blank">unix.stackexchange.com: Tracking down where disk space has gone on Linux? </a>

### Operating system error   {#trouble-backup-os}

Unfortunately, we can't recommend anything specific because of the variety of errors you might encounter. We can suggest, however, you:

*	Contact your system administrator
*	Search public forums like <a href="http://unix.stackexchange.com" target="_blank">stackexchange</a> or <a href="http://stackoverflow.com" target="_blank">stackoverflow</a>
*	Open a <a href="https://github.com/magento/magento2/issues" target="_blank">GitHub issue</a> and we'll try to help

### Backup fails   {#trouble-backup-all}

If the backup fails or if all backup tests fail, it's possible the <a href="{{ page.baseurl }}/install-gde/prereq/apache-user.html">Magento file system owner</a> doesn't have sufficient privileges and ownership of the Magento file system. For example, another user might own the files or the files might be read-only.

Pay particular attention to file system permissions and ownership of the `<your Magento install dir>/var` directory and subdirectories. For more information, see [Set file system permissions and ownership]({{ page.baseurl }}/install-gde/prereq/file-system-perms.html)

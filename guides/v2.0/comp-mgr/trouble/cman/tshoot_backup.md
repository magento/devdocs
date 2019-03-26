---
group: software-update-guide
subgroup: 50_trouble
title: Troubleshoot backups
menu_title: Troubleshoot backups
menu_node:
menu_order: 400
functional_areas:
  - Upgrade
---

A backup can fail for any of the following reasons:

*	[Insufficient disk space](#trouble-backup-space)
*	[An operating system error](#trouble-backup-os)
*	[Backup fails](#trouble-backup-all)

### Insufficient disk space   {#trouble-backup-space}

If the backup failed because of insufficient disk space, you should typically free up disk space by moving some files to another storage device or drive. However, there might be other ways to resolve the issue. See one of the following resources for tips:

*	[8 Tips to Solve Linux & Unix Systems Hard Disk Problems Like Disk Full Or Can’t Write to the Disk](http://www.cyberciti.biz/datacenter/linux-unix-bsd-osx-cannot-write-to-hard-disk){: target="_blank"}
*	[serverfault: df says disk is full, but it is not](http://serverfault.com/questions/315181/df-says-disk-is-full-but-it-is-not){: target="_blank"}
*	[unix.stackexchange.com: Tracking down where disk space has gone on Linux? ](http://unix.stackexchange.com/questions/125429/tracking-down-where-disk-space-has-gone-on-linux){: target="_blank"}

### Operating system error   {#trouble-backup-os}

Unfortunately, we can't recommend anything specific because of the variety of errors you might encounter. We can suggest, however, you:

*	Contact your system administrator
*	Search public forums like [stackexchange](http://unix.stackexchange.com){: target="_blank"} or [stackoverflow](http://stackoverflow.com){: target="_blank"}
*	Open a [GitHub issue](https://github.com/magento/magento2/issues){: target="_blank"} and we'll try to help

### Backup fails   {#trouble-backup-all}

If the backup fails or if all backup tests fail, it's possible the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/apache-user.html) doesn't have sufficient privileges and ownership of the Magento file system. For example, another user might own the files or the files might be read-only.

Pay particular attention to file system permissions and ownership of the `<your Magento install dir>/var` directory and subdirectories. For more information, see [Set file system permissions and ownership]({{ page.baseurl }}/install-gde/prereq/file-system-perms.html)

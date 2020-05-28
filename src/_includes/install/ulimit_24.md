### Why to set ulimit

Rolling back to a previous backup can silently fail, resulting in incomplete data being written to the file system or database using the [`magento setup:rollback`]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html#instgde-cli-uninst-roll) command.

In some cases, a very long query string causes the user's allocated memory space to run out of memory because of too many recursive calls.

### How to set ulimit

We recommend setting the [`ulimit`](http://ss64.com/bash/ulimit.html) for the Magento file system user to a value of 65536 or more.

You can do this either on the command line or you can make it a permanent setting for the user by editing their shell script.

Before you continue, if you haven't done so already, switch to the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).

Command:

```bash
ulimit -s 65536
```

You can change this to a larger value if needed.

{:.bs-callout-info}
The syntax for `ulimit` depends on the UNIX shell you use. The preceding setting should work with CentOS and Ubuntu with the Bash shell. However, for Mac OS, the correct setting is `ulimit -S 65532`. Consult a man page or operating system reference for more information.

To optionally set the value in the user's Bash shell:

1. If you haven't done so already, switch to the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Open `/home/<username>/.bashrc` in a text editor.
1. Add the following line:

   ```bash
   ulimit -s 65536
   ```

1. Save your changes to `.bashrc` and exit the text editor.

{:.bs-callout-warning}
We recommend you avoid setting a value for [`pcre.recursion_limit`](http://php.net/manual/en/pcre.configuration.php) in `php.ini` because it can result in incomplete rollbacks with no failure notice.

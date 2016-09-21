<div markdown="1">

### Why to set ulimit
Rolling back to a previous backup can silently fail, resulting in incomplete data being written to the file system or database. (This includes all types of rollbacks, including using System Upgrade, Component Manager, or the [`magento setup:rollback`]({{page.baseurl}}install-gde/install/cli/install-cli-backup.html##instgde-cli-uninst-roll) command.)

In some cases, a very long query string causes the user's allocated memory space to run out of memory because of too many recursive calls. 

### How to set ulimit
We recommend setting the <a href="http://ss64.com/bash/ulimit.html" target="_blank">`ulimit`</a> for the Magento file system user to a value of 65536 or more.

You can do this either on the command line or you can make it a permanent setting for the user by editing their shell script.

Before you continue, if you haven't done so already, switch to the <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.

Command:

	ulimit -s 65536

You can change this to a larger value if needed.

<div class="bs-callout bs-callout-info">
   	<p>The syntax for <code>ulimit</code> depends on the UNIX shell you use. The preceding setting should work with CentOS and Ubuntu with the Bash shell. However, for Mac OS, the correct setting is <code>ulimit -S 65532</code>. Consult a man page or operating system reference for more information.</p>
</div>

To optionally set the value in the user's Bash shell:

1.	If you haven't done so already, switch to the <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.
2.	Open `/home/<username>/.bashrc` in a text editor.
3.	Add the following line:

		ulimit -s 65536

4.	Save your changes to `.bashrc` and exit the text editor.
	
<div class="bs-callout bs-callout-warning">
    <p>We recommend you avoid setting a value for <a href="http://php.net/manual/en/pcre.configuration.php" target="_blank"><code>pcre.recursion_limit</code></a> in <code>php.ini</code> because it can result in incomplete rollbacks with no failure notice.</p>
</div>
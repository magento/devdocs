<div markdown="1">

## Optionally set `magento_umask` {#mage-owner-umask}
The web server group must have write permissions to certain directories in the Magento file system; however, you might want tighter security, especially in production. We provide the flexibility for you to further restrict those permissions using a [umask](http://www.cyberciti.biz/tips/understanding-linux-unix-umask-value-usage.html){:target="_blank"}.

Our solution is to enable you to optionally create a file named `magento_umask` in your Magento root directory that restricts permissions for the web server group and everyone else. 

<div class="bs-callout bs-callout-info" id="info">
  <p>We recommend changing the umask on a one-user or shared hosting system only. If you have a private Magento server, the group must have write access to the Magento file system; the umask removes write access from the group.</p>
</div>

The default umask (with no `magento_umask` specified) is `002`, which means:

*	775 for directories, which means full control by the user, full control by the group, and enables everyone to traverse the directory. These permissions are typically required by shared hosting providers.

*	664 for files, which means writable by the user, writable by the group, and read-only for everyone else

A common suggestion is to use a value of `022` in the `magento_umask` file, which means:

*	755 for directories: full control for the user, and everyone else can traverse directories.
*	644 for files: read-write permissions for the user, and read-only for everyone else.

To set `magento_umask`:

1.	Log in to your Magento server, or switch to, the [Magento file system owner]({{ site.gdeurl21 }}install-gde/prereq/file-sys-perms-over.html).
2.	Set the value of `magento_umask`:

	1.	Use a text editor to create a new file `<your Magento install dir>/magento_umask`
	2.	Set `magento_umask` to the desired value.

		For example, `022`
3.	Save your changes to `magento_umask` and exit the text editor.
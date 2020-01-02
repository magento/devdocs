The web server group must have write permissions to certain directories in the Magento file system; however, you might want tighter security, especially in production. We provide the flexibility for you to further restrict those permissions using a [umask][].

Our solution is to enable you to optionally create a file named `magento_umask` in your Magento root directory that restricts permissions for the web server group and everyone else.

{:.bs-callout-info}
We recommend changing the umask on a one-user or shared hosting system only. If you have a private Magento server, the group must have write access to the Magento file system; the umask removes write access from the group.

The default umask (with no `magento_umask` specified) is `002`, which means:

*  775 for directories, which means full control by the user, full control by the group, and enables everyone to traverse the directory. These permissions are typically required by shared hosting providers.

*  664 for files, which means writable by the user, writable by the group, and read-only for everyone else

A common suggestion is to use a value of `022` in the `magento_umask` file, which means:

*  755 for directories: full control for the user, and everyone else can traverse directories.
*  644 for files: read-write permissions for the user, and read-only for everyone else.

To set `magento_umask`:

1. In a command line terminal, log in to your Magento server as a [Magento file system owner][].
1. Navigate to the Magento install directory:

   ```bash
   cd <Magento install directory>
   ```

1. Use the following command to create a file named `magento_umask` and write the `umask` value to it.

   ```bash
   echo <desired umask number> > magento_umask
   ```

   You should now have a file named `magento_umask` in the `<Magento install dir>` with the only content being the `umask` number.

1. Log out and log back in as the [Magento file system owner][] to apply the changes.

<!-- Link Definitions -->

[Magento file system owner]: {{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html
[umask]: http://www.cyberciti.biz/tips/understanding-linux-unix-umask-value-usage.html

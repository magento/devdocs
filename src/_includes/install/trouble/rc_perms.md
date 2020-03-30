
## File permissions readiness check issues

Directories in the Magento file system must be writable by the web server user and the Magento file system owner, if applicable. An error similar to the following displays in the Web Setup Wizard if your permissions are not set properly:

![Magento checks file permissions before you install]({{ site.baseurl }}/common/images/install_rc_file-perms.png)

The way you resolve the issue depends on whether you have a one-user or two-user setup:

*  *One user* means you log in to the Magento server as the same user that also runs the web server. This type of setup is common in shared hosting environments.
*  *Two users* means you typically *cannot* log in as, or switch to, the web server user. You typically log in as one user and run the web server as a different user. This is typical in private hosting or if you have your own server.

### One-user resolution

If you have command-line access, enter the following command assuming Magento is installed in `/var/www/html/magento2`:

```bash
cd /var/www/html/magento2 && find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} + && find var vendor pub/static pub/media app/etc -type d -exec chmod g+w {} + && chmod u+x bin/magento
```

If you do not have command-line access, use an FTP client or a file manager application provided by your hosting provider to set permissions.

### Two-user resolution

{% include install/file-system-perms-twouser_cmds-only.md %}
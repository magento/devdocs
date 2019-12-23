Before you continue, to avoid errors during your installation or update, make sure you verify *all* of the following:

*  You set up a [Magento file system owner](#magento-owner-group) and shared that owner's group with the web server user group
*  Your [cron jobs](#magento-cron) are set up and running
*  [File system permissions](#perms) are set properly

{:.bs-callout-warning}
Do not continue without performing these checks. Failure to do so could result in errors.

### Magento file system owner and group {#magento-owner-group}

The [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html) group must have write access to Magento directories and files.

### Cron jobs are running {#magento-cron}

Magento requires three cron jobs, all running as the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).

To verify your cron jobs are set up properly, enter the following command as a user with `root` privileges:

```bash
crontab -u <magento file system owner> -l
```

For example, if your Magento file system owner is named `magento_user`, enter:

```bash
crontab -u magento_user -l
```

Results similar to the following should display:

```terminal
* * * * * /usr/bin/php /var/www/magento2/bin/magento cron:run | grep -v "Ran jobs by schedule" >> /var/www/magento2/var/log/magento.cron.log
* * * * * /usr/bin/php /var/www/magento2/update/cron.php >> /var/www/magento2/var/log/update.cron.log
* * * * * /usr/bin/php /var/www/magento2/bin/magento setup:cron:run >> /var/www/magento2/var/log/setup.cron.log
```

Another symptom of cron not running is the following error in the Magento Admin:

![cron isn't running]({{ site.baseurl }}/common/images/compman-cron-not-running.png){:width="500px"}

To see the error, you might need to click **System Messages** at the top of the window as follows:

![System Messages]({{ site.baseurl }}/common/images/compman_sys-messages.png)

For details, see [Set up cron]({{ page.baseurl }}/install-gde/install/post-install-config.html#post-install-cron).

### File system permissions {#perms}

For security reasons, Magento requires certain permissions on the file system. Permissions are different from [*ownership*](#magento-owner-group). Ownership determines *who* can perform actions on the file system; permissions determine *what* the user can do.

Directories in the Magento file system must be writable by the [Magento file system owner's]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html) group.

To verify your file system permissions are set properly, either log in to the Magento server or use your hosting provider's file manager application.

For example, enter the following commands on a Linux system if the Magento application is installed in `/var/www/html/magento2`:

```bash
ls -al /var/www/html/magento2
```

A sample result follows:

```xml
total 1028
drwxrwx---. 12 magento_user apache   4096 Jun  7 07:55 .
drwxr-xr-x.  3 root         root     4096 May 11 14:29 ..
drwxrwx---.  4 magento_user apache   4096 Jun  7 07:53 app
drwxrwx---.  2 magento_user apache   4096 Jun  7 07:53 bin
-rw-rw----.  1 magento_user apache 439792 Apr 27 21:23 CHANGELOG.md
-rw-rw----.  1 magento_user apache   3422 Apr 27 21:23 composer.json
-rw-rw----.  1 magento_user apache 425214 Apr 27 21:27 composer.lock
-rw-rw----.  1 magento_user apache   3425 Apr 27 21:23 CONTRIBUTING.md
-rw-rw----.  1 magento_user apache  10011 Apr 27 21:23 CONTRIBUTOR_LICENSE_AGREEMENT.html
-rw-rw----.  1 magento_user apache    631 Apr 27 21:23 COPYING.txt
drwxrwx---.  4 magento_user apache   4096 Jun  7 07:53 dev
-rw-rw----.  1 magento_user apache   2926 Apr 27 21:23 Gruntfile.js
-rw-rw----.  1 magento_user apache   7592 Apr 27 21:23 .htaccess
-rw-rw----.  1 magento_user apache   6419 Apr 27 21:23 .htaccess.sample
-rw-rw----.  1 magento_user apache   1358 Apr 27 21:23 index.php
drwxrwx---.  4 magento_user apache   4096 Jun  7 07:53 lib
-rw-rw----.  1 magento_user apache  10376 Apr 27 21:23 LICENSE_AFL.txt
-rw-rw----.  1 magento_user apache  30634 Apr 27 21:23 LICENSE_EE.txt
-rw-rw----.  1 magento_user apache  10364 Apr 27 21:23 LICENSE.txt
-rw-rw----.  1 magento_user apache   4108 Apr 27 21:23 nginx.conf.sample
-rw-rw----.  1 magento_user apache   1427 Apr 27 21:23 package.json
-rw-rw----.  1 magento_user apache   1659 Apr 27 21:23 .php_cs
-rw-rw----.  1 magento_user apache    804 Apr 27 21:23 php.ini.sample
drwxrwx---.  2 magento_user apache   4096 Jun  7 07:53 phpserver
drwxrwx---.  6 magento_user apache   4096 Jun  7 07:53 pub
-rw-rw----.  1 magento_user apache   2207 Apr 27 21:23 README_EE.md
drwxrwx---.  7 magento_user apache   4096 Jun  7 07:53 setup
-rw-rw----.  1 magento_user apache   3731 Apr 27 21:23 .travis.yml
drwxrwx---.  7 magento_user apache   4096 Jun  7 07:53 update
drwxrws---. 11 magento_user apache   4096 Jun 13 16:05 var
drwxrws---. 29 magento_user apache   4096 Jun  7 07:53 vendor
```

In the preceding example, the Magento file system owner is `magento_user`. Directories in the Magento file system have `drwxrwx---` permissions (775) and files have `-rw-rw-rw-` permissions (664).

To get more detailed information, you can optionally enter the following command:

```bash
ls -al /var/www/html/magento2/pub
```

Because Magento deploys static file assets to subdirectories of `pub`, it's a good idea to verify permissions and ownership there as well.

For more information, see [File system permissions and ownership]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).

Use this section to enable Apache 2.4 rewrites and specify a setting for the [distributed configuration file, `.htaccess`](http://httpd.apache.org/docs/current/howto/htaccess.html)

Magento uses server rewrites and `.htaccess` to provide directory-level instructions for Apache.

{:.bs-callout-info}
Failure to enable these settings typically results in no styles displaying on your storefront or Admin.

1. Enable the Apache rewrite module:

   ```bash
   a2enmod rewrite
   ```

1. To enable Magento to use the distributed `.htaccess` configuration file, see the guidelines in the [Apache 2.4 documentation](http://httpd.apache.org/docs/current/mod/mod_rewrite.html).

   Note that in Apache 2.4, the server's default site configuration file is `/etc/apache2/sites-available/000-default.conf`.

   For example, you can add the following to the end of `000-default.conf`:

   ```terminal
   <Directory "/var/www/html">
       AllowOverride All
   </Directory>
   ```

   {:.bs-callout-info}
   In some cases, additional parameters might be required. For more information, see the [Apache 2.4 documentation](https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html#order).

1. If you changed Apache settings, restart Apache:

   ```bash
   service apache2 restart
   ```

   {:.bs-callout-info}
   -  If you upgraded from an earlier Apache version, first look for `<Directory "/var/www/html">` or `<Directory "/var/www">` in `000-default.conf`.
   -  You must change the value of `AllowOverride` in the directive for the directory to which you expect to install the Magento software. For example, to install in the web server docroot, edit the directive in `<Directory /var/www>`.

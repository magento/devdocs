Use this section to enable Apache 2.2 rewrites and specify a setting for the [distributed configuration file, `.htaccess`](http://httpd.apache.org/docs/current/howto/htaccess.html)

Magento uses server rewrites and `.htaccess` to provide directory-level instructions for Apache.

{:.bs-callout-info}
Failure to enable these settings typically results in no styles displaying on your storefront or Admin.

1. Open the following file for editing.

   *  Ubuntu: `vim /etc/apache2/sites-available/default`
   *  CentOS: `vim /etc/httpd/conf/httpd.conf`

1. Locate the block that starts with:

   *  Ubuntu 12: `<Directory /var/www/>`
   *  Ubuntu 14 or CentOS: `<Directory /var/www/html>`

1. Change the value of `AllowOverride` to `<value from Apache site>`.

   An example for Ubuntu 12 follows.

   ```conf
   <Directory /var/www/>
   Options Indexes FollowSymLinks MultiViews
   AllowOverride <value from Apache site>
   Order allow,deny
   Allow from all
   <Directory>
   ```

   {:.bs-callout-info}
   The preceding values for `Order` might not work in all cases. For more information, see the Apache documentation ([2.2](https://httpd.apache.org/docs/2.2/mod/mod_authz_host.html#order)), [2.4](https://httpd.apache.org/docs/2.4/mod/mod_authz_host.html#order)).

1. Save the file and exit the text editor.
1. *Ubuntu only*. Configure Apache to use the `mod_rewrite` module.

   ```bash
   cd /etc/apache2/mods-enabled
   ```

   ```bash
   ln -s ../mods-available/rewrite.load
   ```

1. If you changed Apache settings, restart Apache.

   ```bash
   service apache2 restart
   ```

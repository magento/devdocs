---
group: installation-guide
title: Apache
functional_areas:
  - Install
  - System
  - Setup
---

## Apache versions supported {#apache-support}

Magento supports Apache 2.4.x.

## Help if you are just starting out {#apache-help-beginner}

If you are new to all this and need some help getting started, we suggest the following:

*  [Is the Magento software installed already?]({{page.baseurl }}/install-gde/basics/basics_magento-installed.html)
*  [What is the software that the Magento server needs to run?]({{page.baseurl }}/install-gde/basics/basics_software.html)
*  [What operating system is my server running?]({{page.baseurl }}/install-gde/basics/basics_os-version.html)
*  [How do I log in to my Magento server using a terminal, command prompt, or SSH?]({{page.baseurl }}/install-gde/basics/basics_login.html)

## Important: Apache required directives {#apache-required-directives}

1. Set `AllowEncodedSlashes` in the server config (globally) or in the virtual host configurations to avoid decoding the encoded slashes that may cause issues for URLs. For instance, when retrieving products with a slash in the SKU via the API, you will not want that converted. The sample block is not complete and other directives will be required.

   ```conf
   <VirtualHost *:443>
     # Allow encoded slashes
     AllowEncodedSlashes NoDecode
   </VirtualHost>
   ```

## Important: Apache rewrites and .htaccess {#apache-help-rewrite}

This topic discusses how to enable Apache 2.4 rewrites and specify a setting for the [distributed configuration file, `.htaccess`](http://httpd.apache.org/docs/current/howto/htaccess.html){:target="_blank"}.

Magento uses server rewrites and `.htaccess` to provide directory-level instructions for Apache. The following instructions are included in all of the other sections in this topic as well.

{% collapsible Click to show Apache 2.4 instructions %}
{% include install/allowoverrides24.md %}
{% endcollapsible %}

{:.bs-callout-info}
Failure to enable these settings typically results in no styles displaying on your storefront or Admin.

## Apache required modules {#apache-required-modules}

Magento requires the following Apache modules be installed:

*  [mod_deflate.c](https://httpd.apache.org/docs/2.4/mod/mod_deflate.html)
*  [mod_expires.c](https://httpd.apache.org/docs/2.4/mod/mod_expires.html)
*  [mod_headers.c](https://httpd.apache.org/docs/2.4/mod/mod_headers.html)
*  [mod_rewrite.c](https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html)
*  [mod_security.c](https://modsecurity.org)
*  [mod_ssl.c](https://httpd.apache.org/docs/2.4/mod/mod_ssl.html)

## Verify the Apache version {#install-prereq-apache-verify}

To verify the Apache version you're currently running, enter:

```bash
apache2 -v
```

The result displays similar to the following:

```terminal
Server version: Apache/2.2.22 (Ubuntu)
Server built: Jul 22 2014 14:35:32
```

*  If Apache is *not* installed, see:
   *  [Installing or upgrading Apache on Ubuntu](#install-prereq-apache-ubuntu)
   *  [Installing Apache on CentOS](#install-prereq-apache-centos)

## Installing or upgrading Apache on Ubuntu {#install-prereq-apache-ubuntu}

The following sections discusses how to install or upgrade Apache:

*  Install Apache
*  Upgrade to Apache 2.4 on Ubuntu 12 to use PHP 7.3+

### Installing Apache on Ubuntu 16, 14, or 12 {#install-prereq-apache-ubuntu-install}

{% collapsible Click to show/hide content %}
To install the default version of Apache (Ubuntu 14, 16---Apache 2.4):

1. Install Apache

   ```bash
   apt-get -y install apache2
   ```

1. Verify the installation.

   ```bash
   apache2 -v
   ```

   The result displays similar to the following:

   ```terminal
   Server version: Apache/2.4.18 (Ubuntu)
   Server built: 2016-04-15T18:00:57
   ```

1. Enable rewrites and `.htaccess` as discussed in the following sections.

### Enable rewrites and .htaccess for Apache 2.4

{% include install/allowoverrides24.md %}

{:.ref-header}
Next steps

*  [Solving 403 (Forbidden) errors](#apache-error)
*  Continue with the next prerequisite ([PHP Settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html))
*  [Determine your installation or upgrade path]({{ page.baseurl }}/install-gde/bk-install-guide.html)

{% endcollapsible %}

### Upgrading Apache on Ubuntu 12 {#install-prereq-apache-ubuntu-upgrade}

{% collapsible Click to show/hide content %}

To use PHP 7.3 on Ubuntu 12, you must upgrade Apache to version 2.4. (By default, Ubuntu 12 comes with Apache 2.2.)

To upgrade to Apache 2.4:

1. Add the `ppa:ondrej` repository, which has Apache 2.4:

   ```bash
   apt-get -y update
   ```

   ```bash
   apt-add-repository ppa:ondrej/apache2
   ```

   ```bash
   apt-get -y update
   ```

1. Install Apache 2.4:

   ```bash
   apt-get install -y apache2
   ```

   {:.bs-callout-info}
   If the 'apt-get install' command fails because of unmet dependencies, consult a resource like [http://askubuntu.com](http://askubuntu.com/questions/140246/how-do-i-resolve-unmet-dependencies-after-adding-a-ppa){:target="_blank"}.

1. Verify the installation.

   ```bash
   apache2 -v
   ```

   Messages similar to the following should display:

   ```terminal
   Server version: Apache/2.4.10 (Ubuntu)
   Server built: Jul 22 2014 22:46:25
   ```

1. Continue with the next section.

### Enable rewrites and .htaccess for Apache 2.4 {#enable-rewr-apache24-upgr-ubuntu12}
{% include install/allowoverrides24.md %}

{:.ref-header}
Next steps

*  [Solving 403 (Forbidden) errors](#apache-error)
*  Continue with the next prerequisite ([PHP Settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html))
*  [Determine your installation or upgrade path]({{ page.baseurl }}/install-gde/bk-install-guide.html)

{% endcollapsible %}

## Installing Apache on CentOS 6 or 7 {#install-prereq-apache-centos}

{% collapsible Click to install Apache on CentOS 6 or 7 %}
Magento requires Apache use server rewrites. You must also specify the type of directives that can be used in `.htaccess`, which Magento uses to specify rewrite rules.

Installing and configuring Apache is basically a three-step process: install the software, enable rewrites, and specify `.htaccess` directives.

### Installing Apache {#apache-install-centos}

1. Install Apache 2.4 if you have not already done so.

   ```bash
   yum -y install httpd
   ```

1. Verify the installation:

   ```bash
   httpd -v
   ```

   Messages similar to the following display to confirm the installation was successful:

   ```terminal
   Server version: Apache/2.2.15 (Unix)
   Server built: Oct 16 2014 14:48:21
   ```

1. Continue with the next section.

   {:.bs-callout-info}
   Even though Apache 2.4 is provided by default with CentOS 7. See the following section to configure it.

### Enable rewrites and .htaccess for CentOS 7

1. Open `/etc/httpd/conf/httpd.conf` file for editing:

   ```bash
   vim /etc/httpd/conf/httpd.conf`
   ```

1. Locate the block that starts with:

   ```conf
   <Directory /var/www/html>
   ```

1. Change the value of `AllowOverride` to `All`.

   For example,

   ```conf
   <Directory /var/www/>
     Options Indexes FollowSymLinks MultiViews
     AllowOverride All
     Order allow,deny
     Allow from all
   <Directory>
   ```

   {:.bs-callout-info}
   The preceding values for `Order` might not work in all cases. For more information, see the Apache documentation ([2.4](https://httpd.apache.org/docs/2.4/mod/mod_authz_host.html#order)).

1. Save the file and exit the text editor.

1. To apply Apache settings, restart Apache.

   ```bash
   service apache2 restart
   ```

{:.bs-callout-info}
Failure to enable these settings typically results in no styles displaying on your storefront or Admin.

### Enable rewrites and .htaccess for Ubuntu

1. Open `/etc/apache2/sites-available/default` file for editing:

   ```bash
   vim /etc/apache2/sites-available/default
   ```

1. Locate the block that starts with:

   *  Ubuntu 12: `<Directory /var/www/>`
   *  Ubuntu 14: `<Directory /var/www/html>`

1. Change the value of `AllowOverride` to `All`.

   An example for Ubuntu 12 follows:

   ```conf
   <Directory /var/www/>
     Options Indexes FollowSymLinks MultiViews
     AllowOverride All
     Order allow,deny
     Allow from all
   <Directory>
   ```

1. Save the file and exit the text editor.

1. Configure Apache to use the `mod_rewrite` module:

   ```bash
   cd /etc/apache2/mods-enabled
   ```

   ```bash
   ln -s ../mods-available/rewrite.load
   ```

1. Restart Apache to apply changes:

   ```bash
   service apache2 restart
   ```

{:.ref-header}
Next steps

*  [Solving 403 (Forbidden) errors](#apache-error)
*  Continue with the next prerequisite ([PHP Settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html))
*  [Determine your installation or upgrade path]({{ page.baseurl }}/install-gde/bk-install-guide.html)

{% endcollapsible %}

## Solving 403 (Forbidden) errors {#apache-error}

{% collapsible Click to install solve 403 errors %}
If you encounter 403 Forbidden errors when trying to access the Magento site, you can update your Apache configuration or your virtual host configuration to enable visitors to the site as discussed in one of the following sections:

### Solving 403 Forbidden errors for Apache 2.4 {#apache-error-2-4}

To enable website visitors to access your site, use one of the [Require directives](http://httpd.apache.org/docs/2.4/howto/access.html){:target="_blank"}.

For example:

```conf
<Directory /var/www/>
  Options Indexes FollowSymLinks MultiViews
  AllowOverride All
  Order allow,deny
  Require all granted
</Directory>
```

{:.bs-callout-info}
The preceding values for `Order` might not work in all cases. For more information, see the [Apache documentation](https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html#order){:target="_blank"}.
{% endcollapsible %}

{:.ref-header}
Related topics

*  [PHP]({{page.baseurl}}/install-gde/prereq/php-settings.html)
*  [MySQL]({{page.baseurl}}/install-gde/prereq/mysql.html)
*  [Configuring security options]({{page.baseurl }}/install-gde/prereq/security.html)
*  [Installing optional software]({{page.baseurl }}/install-gde/prereq/optional.html)
*  [Determine your installation or upgrade path]({{ page.baseurl }}/install-gde/bk-install-guide.html)

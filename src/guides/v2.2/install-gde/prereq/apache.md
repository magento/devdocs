---
group: installation-guide
subgroup: Prerequisites
title: Apache
menu_title: Apache
menu_order: 1
functional_areas:
  - Install
  - System
  - Setup
---

## Apache versions supported {#apache-support}

Magento requires Apache 2.2.x or 2.4.x.

## Help if you're just starting out {#apache-help-beginner}

If you're new to all this and need some help getting started, we suggest the following:

*  [Is the Magento software installed already?]({{ page.baseurl }}/install-gde/basics/basics_magento-installed.html)
*  [What is the software that the Magento server needs to run?]({{ page.baseurl }}/install-gde/basics/basics_software.html)
*  [What operating system is my server running?]({{ page.baseurl }}/install-gde/basics/basics_os-version.html)
*  [How do I log in to my Magento server using a terminal, command prompt, or SSH?]({{ page.baseurl }}/install-gde/basics/basics_login.html)

## Important: Apache rewrites and .htaccess {#apache-help-rewrite}

This topic discusses how to enable Apache 2.2 rewrites and specify a setting for the [distributed configuration file, `.htaccess`](http://httpd.apache.org/docs/current/howto/htaccess.html){:target="_blank"}.

Magento uses server rewrites and `.htaccess` to provide directory-level instructions for Apache. The following instructions are included in all of the other sections in this topic as well.

{% collapsible Click to show Apache 2.4 instructions %}
{% include install/allowoverrides24.md %}
{% endcollapsible %}

{% collapsible Click to show Apache 2.2 instructions %}
{% include install/allowoverrides22.md %}
{% endcollapsible %}

 {:.bs-callout-info}
Failure to enable these settings typically results in no styles displaying on your storefront or Admin.

## Verify the Apache version {#install-prereq-apache-verify}

To verify the Apache version you are currently running, enter:

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
*  If Apache 2.2 is installed on Ubuntu 12 *and* you want to use [PHP](https://glossary.magento.com/php) 5.6, see the next section

## Installing or upgrading Apache on Ubuntu {#install-prereq-apache-ubuntu}

The following sections discusses how to install or upgrade Apache:

*  Install Apache
*  Upgrade to Apache 2.4 on Ubuntu 12 to use PHP 5.6 or PHP 7

### Installing Apache on Ubuntu 16, 14, or 12 {#install-prereq-apache-ubuntu-install}
{% collapsible Click to show/hide content %}
To install the default version of Apache (Ubuntu 14, 16&mdash;Apache 2.4, Ubuntu 12&mdash;Apache 2.2):

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

### Enable rewrites and .htaccess for Apache 2.2
{% include install/allowoverrides22.md %}

{:.ref-header}
Next steps

*  [Solving 403 (Forbidden) errors](#apache-error)
*  Continue with the next prerequisite ([PHP Settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html))
*  [Determine your installation or upgrade path]({{ page.baseurl }}/install-gde/bk-install-guide.html)

{% endcollapsible %}

### Upgrading Apache on Ubuntu 12 {#install-prereq-apache-ubuntu-upgrade}

{% collapsible Click to show/hide content %}
To use PHP 5.6 on Ubuntu 12, you must upgrade Apache to version 2.4. (By default, Ubuntu 12 comes with Apache 2.2., which is EOL)

To upgrade to Apache 2.4:

1. Add the `ppa:ondrej` repository, which has Apache 2.4:

   ```bash
   apt-add-repository ppa:ondrej/apache2
   ```

1. Install Apache 2.4:

   ```bash
   apt-get -y update
   ```

   ```bash
   apt-get install -y apache2
   ```

    {:.bs-callout-info}
   If the `apt-get install` command fails because of unmet dependencies, consult a resource like [http://askubuntu.com](http://askubuntu.com/questions/140246/how-do-i-resolve-unmet-dependencies-after-adding-a-ppa){:target="_blank"}.

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

1. Install Apache 2.4 if you haven't already done so.

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
   Even though Apache 2.4 is provided by default with CentOS 7, you configure it like Apache 2.2. See the following section.

### Enable rewrites and .htaccess for Apache 2.2 (including CentOS 7)
{% include install/allowoverrides22.md %}

{:.ref-header}
Next steps

*  [Solving 403 (Forbidden) errors](#apache-error)
*  Continue with the next prerequisite ([PHP Settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html))
*  [Determine your installation or upgrade path]({{ page.baseurl }}/install-gde/bk-install-guide.html)

{% endcollapsible %}

## Solving 403 (Forbidden) errors {#apache-error}

{% collapsible Click to install solve 403 errors %}
If you encounter 403 Forbidden errors when trying to access the Magento site, you can update your Apache configuration or your virtual host configuration to enable visitors to the site as discussed in one of the following sections:

*  [Solving 403 Forbidden errors for Apache 2.4](#apache-error-2-4)
*  [Solving 403 Forbidden errors for Apache 2.2](#apache-error-2-2)

### Solving 403 Forbidden errors for Apache 2.4 {#apache-error-2-4}

To enable website visitors to access your site, use one of the [Require directives](http://httpd.apache.org/docs/2.4/howto/access.html){:target="_blank"}.

For example:

```conf
<Directory /var/www/>
  Options Indexes FollowSymLinks MultiViews
  AllowOverride <value from Apache site>
  Order allow,deny
  Require all granted
</Directory>
```

 {:.bs-callout-info}
The preceding values for `Order` might not work in all cases. For more information, see the [Apache documentation](https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html#order){:target="_blank"}.

### Solving 403 Forbidden errors for Apache 2.2 {#apache-error-2-2}

To enable website visitors to access your site, use the [Allow directive](http://httpd.apache.org/docs/2.2/mod/mod_authz_host.html#allow){:target="_blank"}.

For example:

```conf
<Directory /var/www/>
  Options Indexes FollowSymLinks MultiViews
  AllowOverride <value from Apache site>
  Order allow,deny
  Allow from all
</Directory>
```

 {:.bs-callout-info}
The preceding values for `Order` might not work in all cases. For more information, see the [Apache documentation](https://httpd.apache.org/docs/2.2/mod/mod_authz_host.html#order){:target="_blank"}.
{% endcollapsible %}

{:.ref-header}
Related topics

*  [PHP]({{ page.baseurl }}/install-gde/prereq/php-settings.html)
*  [MySQL]({{ page.baseurl }}/install-gde/prereq/mysql.html)
*  [Configuring security options]({{ page.baseurl }}/install-gde/prereq/security.html)
*  [Installing optional software]({{ page.baseurl }}/install-gde/prereq/optional.html)
*  [Determine your installation or upgrade path]({{ page.baseurl }}/install-gde/bk-install-guide.html)

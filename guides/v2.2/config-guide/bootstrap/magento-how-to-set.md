---
group: configuration-guide
title: Set the value of bootstrap parameters
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview of setting bootstrap parameter values {#config-bootparam-overview}

This topic discusses how to set the values of Magento application bootstrap parameters. [More information about Magento application bootstrapping]({{ page.baseurl }}/config-guide/bootstrap/magento-bootstrap.html).

The following table discusses the bootstrap parameters you can set:

| Bootstrap parameter | Description                                  |
| ------------------- | -------------------------------------------- |
| MAGE_DIRS           | Specifies custom directory and URL paths     |
| MAGE_PROFILER       | Enables dependency graphs and HTML profiling |

{:.bs-callout-info}

*  Not all bootstrap parameters are documented at this time.
*  You now set the Magento mode (developer, default, production) using the [`magento deploy:mode:set {mode}`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html) command.

## Specifying a parameter value using an environment variable {#mode-specify-var}

This section discusses how to set the values of bootstrap parameters using environment variables.

### Set the mode using an environment variable {#config-bootparam-mode}

You can specify Magento bootstrap variables as system-wide environment variables, which enables all processes to use them.

For example, you can use the `MAGE_PROFILER` system environment variable to specify a mode as follows:

```terminal
MAGE_PROFILER={firebug|csv|<custom value>}
```

Set the variable using a shell-specific command. Because shells have differing syntax, consult a reference like [unix.stackexchange.com](http://unix.stackexchange.com/questions/117467/how-to-permanently-set-environmental-variables){:target="_blank"}.

Bash shell example for CentOS:

```bash
export MAGE_PROFILER=firebug
```

{:.bs-callout-info}
If a `PHP Fatal error` displays in the browser after you set a profiler value, restart your web server. The reason might be related to [PHP](https://glossary.magento.com/php) bytecode caching, which caches bytecodes and PHP classpaths.

## Specifying a parameter value {#mode-specify-web}

This section discusses how to specify the mode for either Apache or [nginx](https://glossary.magento.com/nginx).

See one of the following sections for more information:

*  [Specify a variable using an nginx setting](#mode-specify-web-nginx)
*  [Specify a variable using .htaccess (Apache only)](#mode-specify-web-htaccess)
*  [Specify a variable using an Apache setting](#mode-specify-web-apache)

### Specify a variable using an nginx setting {#mode-specify-web-nginx}

See the [nginx sample configuration]({{ site.mage2bloburl }}/{{ page.guide_version }}/nginx.conf.sample#L16){:target="_blank"} on GitHub.

### Specify a variable using .htaccess (Apache only) {#mode-specify-web-htaccess}

One way to set the Magento mode is by editing `.htaccess`. This way, you don't have to change Apache settings.

You can modify `.htaccess` in any of the following locations, depending on your entry point to the Magento application:

*  `<magento_root>/.htaccess`
*  `<magento_root>/pub/.htaccess`

To set a variable:

1. Open any of the preceding files in a text editor and either add or uncomment the desired setting.

   For example, to specify a [mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html), uncomment the following:

   ```conf
   #   SetEnv MAGE_PROFILER firebug
   ```

1. Set the value of `MAGE_PROFILER` to any of the following:

   ```terminal
   firebug
   csvfile
   <custom value>
   ```

1. Save your changes to `.htaccess`; you don't need to restart Apache for the change to take effect.

### Specify a variable using an Apache setting {#mode-specify-web-apache}

The Apache web server supports setting the Magento mode using `mod_env` directives.

The Apache `mod_env` directive is slightly different in [version 2.2](http://httpd.apache.org/docs/2.2/mod/mod_env.html#setenv){:target="_blank"} and [version 2.4](http://httpd.apache.org/docs/2.4/mod/mod_env.html#setenv){:target="_blank"}.

The procedures that follows show how to set the Magento mode in an Apache virtual host. This is not the only way to use `mod_env` directives; consult the Apache documentation for details.

*  [Specify a bootstrap variable for Apache on Ubuntu](#mode-specify-ubuntu)
*  [Specify a bootstrap variable for Apache on CentOS](#mode-specify-centos)

#### Specify a bootstrap variable for Apache on Ubuntu {#mode-specify-ubuntu}

This section assumes you've already set up your virtual host. If you have not, consult a resource such as [this DigitalOcean tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-14-04-lts){:target="_blank"}.

To set a Magento bootstrap variable using your web server's environment:

1. As a user with `root` privileges, open your virtual host configuration file in a text editor.

   For example, if your virtual host is named `my.magento`,

   *  Apache 2.4: `vim /etc/apache2/sites-available/my.magento.conf`
   *  Apache 2.2: `vim /etc/apache2/sites-available/my.magento`

1. Anywhere in the virtual host configuration, add the following line:

   ```conf
   SetEnv "<variable name>" "<variable value>"
   ```

   For example,

   ```conf
   SetEnv "MAGE_PROFILER" "firebug"
   ```

1. Save your changes and exit the text editor.
1. Enable your virtual host if you haven't already done so:

   ```bash
   a2ensite <virtual host config file name>
   ```

   For example,

   ```bash
   a2ensite my.magento.conf
   ```

1. Restart the web server:

   *  Ubuntu: `service apache2 restart`
   *  CentOS: `service httpd restart`

#### Specify a bootstrap variable for Apache on CentOS {#mode-specify-centos}

This section assumes you've already set up your virtual host. If you have not, consult a resource such as [this DigitalOcean tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-centos-6){:target="_blank"}.

To set a Magento bootstrap variable using your web server's environment:

1. As a user with `root` privileges, open `/etc/httpd/conf/httpd.conf` in a text editor.

1. Anywhere in the virtual host configuration, add the following line:

   ```conf
   SetEnv "<variable name>" "<variable value>"
   ```

   For example,

   ```conf
   SetEnv "MAGE_PROFILER" "firebug"
   ```

1. Save your changes and exit the text editor.

After setting the mode, restart the web server:

*  Ubuntu: `service apache2 restart`
*  CentOS: `service httpd restart`

{:.ref-header}
Related topics

*  [Customize base directory paths (MAGE_DIRS)]({{ page.baseurl }}/config-guide/bootstrap/mage-dirs.html)
*  [Set the Magento mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html)
*  [Enable an dependency graphs and built-in profiler (MAGE_PROFILER)]({{ page.baseurl }}/config-guide/bootstrap/mage-profiler.html)

---
group: cloud-guide
title: PHP application
functional_areas:
  - Cloud
  - Setup
  - Application  
---

You can choose which [version of PHP]({{ site.baseurl}}/cloud/project/services.html#service-versions) to run in your `.magento.app.yaml` file:

```yaml
name: mymagento
type: php:<version>
```

### PHP extensions

You can enable or disable PHP extensions in the `runtime:extension` section. Also, the extensions specified become available in the Docker PHP containers.

> .magento.app.yaml

```yaml
runtime:
    extensions:
        - sockets
        - sodium
        - ssh2
    disabled_extensions:
        - bcmath
        - bz2
        - calendar
        - exif
```

Use SSH to log in to an environment and list the PHP extensions.

```bash
php -m
```

For details about a specific PHP extension, see the [PHP Extension List](https://www.php.net/manual/en/extensions.alphabetical.php).

The following table shows the supported PHP extensions when deploying {{site.data.var.ee}} on the Cloud platform.

{:.php-plugins-table}
| Default extensions | Installed extensions<br>that cannot be uninstalled | Extensions that can be installed<br> and uninstalled as needed|
|--------------------|---------------------|---------------------|
| `bcmath`<br> `bz2`<br> `calendar`<br> `exif`<br> `gd`<br> `gettext`<br> `intl`<br> `mysqli`<br> `pcntl`<br> `pdo_mysql`<br> `soap`<br> `sockets`<br>  `sysvmsg`<br> `sysvsem`<br> `sysvshm`<br> `opcache`<br> `zip` |`ctype`<br> `curl`<br> `date`<br> `dom`<br> `fileinfo`<br> `filter`<br> `ftp`<br> `hash`<br> `iconv`<br> `json`<br> `mbstring`<br> `mysqlnd`<br> `openssl`<br> `pcre`<br> `pdo`<br> `pdo_sqlite`<br> `phar`<br> `posix`<br> `readline`<br> `session`<br> `sqlite3`<br> `tokenizer`<br> `xml`<br> `xmlreader`<br> `xmlwriter`<br> |`geoip`<br>`gmp`<br> `igbinary`<br> `imagick`<br> `imap`<br>`ioncube`<br> `ldap`<br> `mailparse`<br> `mcrypt`<br> `msgpack`<br> `mysqli`<br> `oauth`<br> `pdo_mysql`<br> `propro`<br> `pspell`<br> `raphf`<br> `recode`<br> `redis`<br> `shmop` `sockets`<br> `sodium`<br> `ssh2`<br>`tidy`<br> `xdebug`<br> `xmlrpc`<br> `xsl`<br> `yaml`|

The PHP module requirements for {{ site.data.var.ee }} are tied to the Magento version. See [PHP requirements]({{ site.baseurl }}/guides/v2.4/install-gde/prereq/php-settings.html).

{:.bs-callout-warning}
PHP compiled with debug is not supported and the Probe may conflict with XDebug or XHProf. Disable those extensions when enabling the Probe. The Probe conflicts with some PHP extensions like Pinba or IonCube.

### Custom PHP configuration

You can customize the PHP settings for a Cloud environment by adding a `php.ini` file to your project. See [Customize PHP.INI]({{ site.baseurl }}/cloud/project/magento-app-php-ini.html).

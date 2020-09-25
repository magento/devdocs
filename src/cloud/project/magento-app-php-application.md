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

-  **Default extensions** install by automatically. You can disable them as needed.
-  **Required extensions** install automatically and cannot be removed.
-  **Optional extensions**–You can add or disable these extensions as needed.

| Default extensions | Required extensions | Optional extensions |
|--------------------|---------------------|---------------------|
| `ctype`<br> `curl`<br> `date`<br> `dom`<br> `fileinfo`<br> `filter`<br> `ftp`<br> `hash`<br> `iconv`<br> `json`<br> `mbstring`<br> `mysqlnd`<br>  `openssl`<br> `pcre`<br> `pdo`<br> `pdo_sqlite`<br> `phar`<br> `posix`<br> `readline`<br> `session`<br> `sqlite3`<br> `tokenizer`<br> `xml`<br> `xmlreader`<br> `xmlwriter`<br> | `ctype`<br> `curl`<br> `date`<br> `dom`<br> `fileinfo`<br> `filter`<br> `ftp`<br> `hash`<br> `iconv`<br> `json`<br> `mbstring`<br> `mysqlnd`<br> `openssl`<br> `pcre`<br> `pdo`<br> `pdo_sqlite`<br> `phar`<br> `posix`<br> `readline`<br> `session`<br> `sqlite3`<br> `tokenizer`<br> `xml`<br> `xmlreader`<br> `xmlwriter`<br> | `bcmath`<br> `bz2`<br> `calendar`<br> `exif`<br> `gd`<br> `geoip`<br> `gettext`<br> `gmp`<br> `igbinary`<br> `imagick`<br> `imap`<br> `intl`<br> `ioncube`<br> `ldap`<br> `mailparse`<br> `mcrypt`<br> `msgpack`<br> `mysqli`<br> `oauth`<br> `opcache`<br> `pdo_mysql`<br> `propro`<br> `pspell`<br> `raphf`<br> `recode`<br> `redis`<br> `shmop`<br> `soap`<br> `sockets`<br> `sodium`<br> `ssh2`<br> `sysvmsg`<br> `sysvsem`<br> `sysvshm`<br> `tidy`<br> `xdebug`<br> `xmlrpc`<br> `xsl`<br> `yaml`<br> `zip`<br> `pcntl`<br> |

{:.bs-callout-warning}
PHP compiled with debug is not supported and the Probe may conflict with XDebug or XHProf. Disable those extensions when enabling the Probe. The Probe conflicts with some PHP extensions like Pinba or IonCube.

### Custom PHP configuration

You can customize the PHP settings for a Cloud environment by adding a `php.ini` file to your project. See [Customize PHP.INI]({{ site.baseurl }}/cloud/project/magento-app-php-ini.html).

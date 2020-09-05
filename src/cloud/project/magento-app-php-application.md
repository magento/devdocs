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

You can enable additional PHP extensions in the `runtime:extension` section. Also, the extensions specified become available in the Docker PHP containers.

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

{{site.data.var.ece}} supports the following extensions:

-  Default extensions:
   -  `bcmath`
   -  `bz2`
   -  `calendar`
   -  `exif`
   -  `gd`
   -  `gettext`
   -  `intl`
   -  `mysqli`
   -  `pcntl`
   -  `pdo_mysql`
   -  `soap`
   -  `sockets`
   -  `sysvmsg`
   -  `sysvsem`
   -  `sysvshm`
   -  `opcache`
   -  `zip`

-  Extensions that are installed and cannot be uninstalled:
   -  `ctype`
   -  `curl`
   -  `date`
   -  `dom`
   -  `fileinfo`
   -  `filter`
   -  `ftp`
   -  `hash`
   -  `iconv`
   -  `json`
   -  `mbstring`
   -  `mysqlnd`
   -  `openssl`
   -  `pcre`
   -  `pdo`
   -  `pdo_sqlite`
   -  `phar`
   -  `posix`
   -  `readline`
   -  `session`
   -  `sqlite3`
   -  `tokenizer`
   -  `xml`
   -  `xmlreader`
   -  `xmlwriter`

-  Extensions that can be installed and uninstalled as needed:
   -  `bcmath`
   -  `bz2`
   -  `calendar`
   -  `exif`
   -  `gd`
   -  `geoip`
   -  `gettext`
   -  `gmp`
   -  `igbinary`
   -  `imagick`
   -  `imap`
   -  `intl`
   -  `ioncube`
   -  `ldap`
   -  `mailparse`
   -  `mcrypt`
   -  `msgpack`
   -  `mysqli`
   -  `oauth`
   -  `opcache`
   -  `pdo_mysql`
   -  `propro`
   -  `pspell`
   -  `raphf`
   -  `recode`
   -  `redis`
   -  `shmop`
   -  `soap`
   -  `sockets`
   -  `sodium`
   -  `ssh2`
   -  `sysvmsg`
   -  `sysvsem`
   -  `sysvshm`
   -  `tidy`
   -  `xdebug`
   -  `xmlrpc`
   -  `xsl`
   -  `yaml`
   -  `zip`
   -  `pcntl`

{:.bs-callout-warning}
PHP compiled with debug is not supported and the Probe may conflict with XDebug or XHProf. Disable those extensions when enabling the Probe. The Probe conflicts with some PHP extensions like Pinba or IonCube.

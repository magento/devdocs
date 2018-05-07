---
layout: default
group: cloud
title: Application
version: 2.0
github_link: cloud/project/project-conf-files_magento-app.md
redirect_from:
  - /guides/v2.0/cloud/before/before-setup-env-cron.html
  - /guides/v2.1/cloud/before/before-setup-env-cron.html
  - /guides/v2.2/cloud/before/before-setup-env-cron.html
functional_areas:
  - Cloud
  - Setup
---

## About `.magento.app.yaml` {#cloud-yaml-platform}
{{site.data.var.ee}} supports multiple applications per project but typically, a project is composed of a single application, in which case you can simply put a `.magento.app.yaml` at the root of your repository.

This file controls the application and the way it is built and deployed on {{site.data.var.ece}}. To see a sample of the file, see [`.magento.app.yaml`](https://github.com/magento/magento-cloud/blob/master/.magento.app.yaml){:target="\_blank"}. Make sure to review the `.magento.app.yaml` for your installed version. This file can differ across {{site.data.var.ece}} versions.

{% include cloud/note-pro-using-yaml.md %}

The following sections discuss properties in `.magento.app.yaml`.

## Defaults {#cloud-yaml-default}
`.magento.app.yaml` has many default values; see the [sample `.magento.app.yaml`](https://github.com/magento/magento-cloud/blob/master/.magento.app.yaml){:target="\_blank"}.

## `name` property {#name}
`name` identifies the application in the project. {{site.data.var.ee}} supports multiple applications in a project, so each application must have a *unique name* in a project.

`name` can consist only of lower case alphanumeric characters; that is, `a`&ndash;`z` and `0`&ndash;`9`. `name` is used in the [`routes.yaml`]({{page.baseurl}}/cloud/project/project-conf-files_routes.html) to define the HTTP upstream (by default, `php:php`).

For example, if the value of `name` is `app`, you must use `app:php` in the upstream field. You can also use this name in multi-application relationships.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you change the name you should think about updating your other configuration files (`routes.yaml` or the different `.magento.app.yaml`, you will have in a multi-application project. Changing the name has no effect on your different services (such as databases)
</div>


## `type` and `build` {#cloud-yaml-platform-type}
The `type`  and `build` properties are used to build and run the project. The only supported `type` currently is {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %}.

Supported versions for 2.0.X to 2.1.X:

```yaml
type: php:5.5
type: php:5.6
type: php:7.0
```

The `build` determines what happens by default when building the project. The only value currently supported is `composer`.

Example:

```yaml
type: php:7.0
build:
    flavor: composer
```

## `access` {#cloud-yaml-platform-access}
`access` defines the user roles who can log in using SSH to the environments to which they have access.

Possible values are:

```yaml
ssh: admin
ssh: contributor
ssh: viewer
```

## `relationships`  {#cloud-yaml-platform-rel}
`relationships` defines how services are mapped in your application.

The left-hand side is the name of the relationship as it will be exposed to the application in the `MAGENTO_CLOUD_RELATIONSHIPS` environment variable. The right-hand side is in the form `<service name>:<endpoint name>`, where `<service name>` comes from `.magento/services.yaml` and  `<endpoint name>` should be the same as the value of `type`  declared in that same file.

Example of valid options are:

```yaml
database: "mysql:mysql"
database2: "mysql2:mysql"
cache: "arediscache:redis"
search: "searchengine:solr"
```

See also [`services.yaml` documentation]({{page.baseurl}}/cloud/project/project-conf-files_services.html) for a full list of currently supported service types and endpoints.


## `web` {#cloud-yaml-platform-web}
`web` defines how your application is exposed to the web (in HTTP). Here we tell the web application how to serve content, from the front-controller script to a non-static request to an `index.php` file on the root. We support any directory structure so the static file can be in a sub directory, and the `index.php` file can be further down.


`web` supports the following:

* `document_root`: The path relative to the root of the application that is exposed on the web. Typical values include `/public` and `/web`.
* `passthru`: The URL used in the event a static file or PHP file could not be found. This would typically be your applications front controller, often `/index.php` or `/app.php`.
* `index_files`: To use a static file (for example, `index.html`) to serve your application. This key expects a collection. For this to work, the static file(s) should be included in your whitelist. For example, to use a file named `index.html` as an index file, your whitelist should include an element that matches the filename, like `- \.html$`.
* `blacklist`: A list of files that should never be executed. Has no effect on static files.
* `whitelist`: A list of static files (as regular expressions) that can be served. Dynamic files (for example, PHP files) are treated as static files and have their source code served, but they are not executed.
* `expires`: The number of seconds whitelisted (that is, static) content should be cached by the browser. This enables the cache-control and expires headers for static content. The `expires` directive and resulting headers are left out entirely if this isn't set.

Contrary to standard `.htaccess` approaches, which accept a *blacklist* and allow everything to be accessed except a specific list, we accept a *whitelist*, which means that anything not matched will trigger a 404 error and will be passed through to your `passthru` URL.

Our default configuration allows the following:

*   From the root (`/`) path, only web, media, and `robots.txt` files can be accessed
*   From the `/pub/static` and `/pub/media` paths, any file can be accessed

The following displays the default set of web accessible locations associated with an entry in [`mounts`](#cloud-yaml-platform-mounts):

```yaml
# The configuration of app when it is exposed to the web.
web:
locations:
    "/":
        # The public directory of the app, relative to its root.
        root: "pub"
        # The front-controller script to send non-static requests to.
        passthru: "/index.php"
        index:
            - index.php
        expires: -1
        scripts: true
        allow: false
        rules:
            \.(css|js|map|hbs|gif|jpe?g|png|tiff|wbmp|ico|jng|bmp|svgz|midi?|mp?ga|mp2|mp3|m4a|ra|weba|3gpp?|mp4|mpe?g|mpe|ogv|mov|webm|flv|mng|asx|asf|wmv|avi|ogx|swf|jar|ttf|eot|woff|otf|html?)$:
                allow: true
            /robots\.txt$:
                allow: true
    "/media":
        root: "pub/media"
        allow: true
        scripts: false
        passthru: "/index.php"
    "/static":
        root: "pub/static"
        allow: true
        scripts: false
        passthru: "/front-static.php"
        rules:
            ^/static/version\d+/(?<resource>.*)$:
                  passthru: "/static/$resource"
```

## `disk` {#cloud-yaml-platform-disk}
`disk` defines the size of the persistent disk size of the
application in MB.

<div class="bs-callout bs-callout-info" id="info">
  <p>The minimal recommended disk size is 256MB. If you see the error <code>UserError: Error building the project: Disk size may not be smaller than 128MB</code>, increase the size to 256MB.</p>
</div>

## `mounts` {#cloud-yaml-platform-mounts}
`mounts` is an object whose keys are paths relative to the root of the application. The mount is a writable area on the disk for files. It's in the form `volume_id[/subpath]`.

The following is a default list of mounts configured in `magento.app.yaml`:

```yaml
# The mounts that will be performed when the package is deployed.
mounts:
    "var": "shared:files/var"
    "app/etc": "shared:files/etc"
    "pub/media": "shared:files/media"
    "pub/static": "shared:files/static"
```

The format for adding your mount to this list is as follows:

```yaml
"/public/sites/default/files": "shared:files/files"
```

* `shared` means that the volume is shared between your applications inside an environment.
* `disk` key defines the size available for that `shared` volume

<div class="bs-callout bs-callout-warning" markdown="1">
Important: The subpath portion of the mount is the unique identifier of the files area. If changed, files at the old location will be permanently lost. Do not change this value once your site has data unless you really want to lose all existing data.
</div>

If you also want the mount web accessible, you must add it to the [`web`](#cloud-yaml-platform-web) block of locations.

## `dependencies` {#cloud-yaml-platform-dep}
`dependencies` enables you to specify dependencies that your application might need during the build process.

{{site.data.var.ee}} supports dependencies on the following
languages:

*	PHP
*	Ruby
*	NodeJS

Those dependencies are independent of the eventual dependencies of your application, and are available in the `PATH`, during the build process and in the runtime environment of your application.

You can specify those dependencies as follows:

```yaml
ruby:
   sass: "~3.4"
nodejs:
   grunt-cli: "~0.3"
```

## `hooks` {#cloud-yaml-platform-hooks}
Use the `hooks` section to specify which shell commands to run during the build and deploy phases. For example, you may want to run a CLI command provided by a custom extension during the build phase.

-   **`build`**—Execute commands _before_ packaging your application. Services, such as the database or Redis, are not available at this time since the application has not been deployed yet. You must add custom commands _before_ the default `php ./vendor/bin/m2-ece-build` command to make sure custom-generated content makes it to the deployment phase.
-   **`deploy`**—Execute commands _after_ packaging and deploying your application. You can access other services at this point. Since the default `php ./vendor/bin/m2-ece-deploy` command copies the `app/etc` directory to correct location, you must add custom commands _after_ the deploy command to prevent custom commands from failing.

Add CLI commands under the `build` or `deploy` sections:

```yaml
hooks:
    # We run build hooks before your application has been packaged.
    build: |
        php ./bin/magento <custom-command>
        php ./vendor/bin/m2-ece-build
    # We run deploy hook after your application has been deployed and started.
    deploy: |
        php ./vendor/bin/m2-ece-deploy
        php ./bin/magento <custom-command>
```

The home directory, where your application is mounted, is `/app`, and that is the directory from which hooks will be run unless you `cd` somewhere else.

The hooks fail if the final command in them fails. To cause them to fail on the first failed command, add `set -e` to the beginning of the hook.

#### [Example] Compile SASS files using grunt
For example, to compile SASS files using grunt:

```yaml
dependencies:
  ruby:
    sass: "3.4.7"
  nodejs:
    grunt-cli: "~0.1.13"

hooks:
  build: |
    cd public/profiles/project_name/themes/custom/theme_name
    npm install
    grunt
    cd
    php ./bin/magento magento-cloud:build
```

You must compile SASS files using `grunt` before static content deployment, which happens during the build. Place the `grunt` command before the `build` command.

## `crons` {#cloud-yaml-platform-cron}
`crons` describes processes that are triggered on a schedule. We recommend you run cron as the [Magento file system owner]({{ page.baseurl}}/cloud/before/before-workspace-file-sys-owner.html). Do not run cron as `root`. We also recommend against running cron as the web server user.

More information about crons:

`crons` supports the following:

*	`spec`: The cron specification. The minimum interval is once per 5 minutes.
*	`cmd`: The command to execute.

A sample Magento cron job follows:

```yaml
crons:
  cronrun:
      spec: "*/5 * * * *"
      cmd: "php bin/magento cron:run"
```

## Configure PHP options {#cloud-yaml-platform-php}
You can choose which version of PHP to run in your `.magento.app.yaml` file:

```yaml
name: myphpapp
type: php:5.6
```

{{site.data.var.ece}} supports PHP 5.5, 5.6, and 7.0.

### PHP extensions {#cloud-yaml-platform-php-ext}
You can define additional PHP extensions you want to enable or disable. Example:

```yaml
# .magento.app.yaml
runtime:
    extensions:
        - xdebug
        - redis
        - ssh2
    disabled_extensions:
        - sqlite3
```

To view the current list of PHP extensions, SSH into your environment and enter the following command:

	php -m

Magento requires the following PHP extensions that are enabled by default:

*	[curl](http://php.net/manual/en/book.curl.php){:target="\_blank"}
*	[gd](http://php.net/manual/en/book.image.php){:target="\_blank"}
*	[intl](http://php.net/manual/en/book.intl.php){:target="\_blank"}
*	PHP 7 only:

	*	[json](http://php.net/manual/en/book.json.php){:target="\_blank"}
	*	[iconv](http://php.net/manual/en/book.iconv.php){:target="\_blank"}
*	[mcrypt](http://php.net/manual/en/book.mcrypt.php){:target="\_blank"}
*	[PDO/MySQL](http://php.net/manual/en/ref.pdo-mysql.php){:target="\_blank"}
*	[bc-math](http://php.net/manual/en/book.bc.php){:target="\_blank"}
*	[mbstring](http://php.net/manual/en/book.mbstring.php){:target="\_blank"}
*	[mhash](http://php.net/manual/en/book.mhash.php){:target="\_blank"}
*	[openssl](http://php.net/manual/en/book.openssl.php){:target="\_blank"}
*	[SimpleXML](http://php.net/manual/en/book.simplexml.php){:target="\_blank"}
*	[soap](http://php.net/manual/en/book.soap.php){:target="\_blank"}
*	[xml](http://php.net/manual/en/book.xml.php){:target="\_blank"}
*	[zip](http://php.net/manual/en/book.zip.php){:target="\_blank"}

You must install the following extensions:

* [ImageMagick](http://php.net/manual/en/book.imagick.php){:target="\_blank"} 6.3.7 (or later), ImageMagick can optionally be used with the `gd` extension
*	[xsl](http://php.net/manual/en/book.xsl.php){:target="\_blank"}
*	[redis](https://pecl.php.net/package/redis){:target="\_blank"}

In addition, we strongly recommend you enable `opcache`.

Other PHP extensions you can optionally install:

*	[apcu](http://php.net/manual/en/book.apcu.php){:target="\_blank"}
*	[blackfire](https://blackfire.io/docs/up-and-running/installation){:target="\_blank"}
*	[enchant](http://php.net/manual/en/book.enchant.php){:target="\_blank"}
*	[gearman](http://php.net/manual/en/book.gearman.php){:target="\_blank"}
*	[geoip](http://php.net/manual/en/book.geoip.php){:target="\_blank"}
*	[imap](http://php.net/manual/en/book.imap.php){:target="\_blank"}
*	[ioncube](https://www.ioncube.com/loaders.php){:target="\_blank"}
*	[pecl-http](https://pecl.php.net/package/pecl_http){:target="\_blank"}
*	[pinba](http://pinba.org){:target="\_blank"}
*	[propro](https://pecl.php.net/package/propro){:target="\_blank"}
*	[pspell](http://php.net/manual/en/book.pspell.php){:target="\_blank"}
*	[raphf](https://pecl.php.net/package/raphf){:target="\_blank"}
*	[readline](http://php.net/manual/en/book.readline.php){:target="\_blank"}
*	[recode](http://php.net/manual/en/book.recode.php){:target="\_blank"}
*	[snmp](http://php.net/manual/en/book.snmp.php){:target="\_blank"}
*	[sqlite3](http://php.net/manual/en/book.sqlite3.php){:target="\_blank"}
*	[ssh2](http://php.net/manual/en/book.ssh2.php){:target="\_blank"}
*	[tidy](http://php.net/manual/en/book.tidy.php){:target="\_blank"}
*	[xcache](https://xcache.lighttpd.net){:target="\_blank"}
*	[xdebug](https://xdebug.org){:target="\_blank"}
*	[xhprof](http://php.net/manual/en/book.xhprof.php){:target="\_blank"}
*	[xmlrpc](http://php.net/manual/en/book.xmlrpc.php){:target="\_blank"}

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Important: PHP compiled with debug is not supported and the Probe may conflict with XDebug or XHProf. Disable those extensions when enabling the Probe. The Probe conflicts with some PHP extensions like Pinba or IonCube.
</div>

### Customize `php.ini` settings {#cloud-yaml-platform-php-set}
You can also create and push a `php.ini` file that is appended to the configuration maintained by {{site.data.var.ee}}.

In your repository, the `php.ini` file should be added to the root of the application (the repository root).

<div class="bs-callout bs-callout-warning" markdow="1">
Configuring PHP settings improperly can cause issues. We recommend only advanced administrators set these options.
</div>

For example, if you need to increase the PHP memory limit:

	memory_limit = 756M

For a list of recommended PHP configuration settings, see [Required PHP settings]({{page.baseurl}}/install-gde/prereq/php-settings.html).

After pushing your file, you can check that the custom PHP configuration has been added to your environment by [creating an SSH tunnel]({{page.baseurl}}/cloud/env/environments-start.html#env-start-tunn) to your environment and entering:

	cat /etc/php5/fpm/php.ini

#### Related topics
*	[Get started with a project]({{page.baseurl}}/cloud/project/project-start.html)
*	[routes.yaml]({{page.baseurl}}/cloud/project/project-conf-files_routes.html)
*	[services.yaml]({{page.baseurl}}/cloud/project/project-conf-files_services.html)

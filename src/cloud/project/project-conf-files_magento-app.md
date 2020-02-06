---
group: cloud-guide
title: Application
functional_areas:
  - Cloud
  - Setup
---

The `.magento.app.yaml` file controls the way your application builds and deploys. Although {{site.data.var.ece}} supports multiple applications per project, typically, a project has a single application with the `.magento.app.yaml` file at the root of the repository.

The `.magento.app.yaml` has many default values, see [a sample `.magento.app.yaml` file](https://github.com/magento/magento-cloud/blob/master/.magento.app.yaml). Always review the `.magento.app.yaml` for your installed version. This file can differ across {{site.data.var.ece}} versions.

## Properties

Use the following properties to build your application configuration file. The `name`, `type`, `disk`, and one `web` or `worker` block is required.

### `name`

{{site.data.var.ee}} supports multiple applications in a project, so you need a unique name that identifies the application in the project. You must use lower case alphanumeric characters, such as `a` to `z` and `0` to `9` for the name.

The name is used in the [`routes.yaml`]({{ site.baseurl }}/cloud/project/project-conf-files_routes.html) file to define the HTTP upstream (by default, `php:http`). For example, if the value of `name` is `app`, you must use `app:http` in the upstream field. You can also use this name in multi-application relationships.

{:.bs-callout-info}
Do not change the name of an application after it has been deployed.

### `type` and `build`

The `type`  and `build` properties provide information about the base container image to build and run the project.

The supported `type` language is [PHP](https://glossary.magento.com/php). Specify the PHP version as follows:

```yaml
type: php:<version>
```

The `build` property determines what happens by default when building the project. The `flavor` specifies a default set of build tasks to run. The supported flavor is `composer`.

```yaml
build:
    flavor: composer
```

### `access`

The _access_ property indicates a minimum user role level that is allowed SSH access to the environments. The available user roles are:

-  `admin`—Can change settings and execute actions in the environment. Also has _contributor_ and _viewer_ rights.
-  `contributor`—Can push code to this environment and branch from the environment. Also has _viewer_ rights.
-  `viewer`—Can view the environment only.

The default user role is `contributor`, which restricts the SSH access from users with only _viewer_ rights. You can change the user role to `viewer` to allow SSH access for users with only _viewer_ rights:

```yaml
access:
    ssh: viewer
```

### `relationships`

Defines the service mapping in the application.

The relationship `name` is available to the application in the `MAGENTO_CLOUD_RELATIONSHIPS` environment variable. The `<service-name>:<endpoint-name>` relationship maps to the name and type values defined in the `.magento/services.yaml` file.

```yaml
relationships:
    <name>: "<service-name>:<endpoint-name>"
```

The following is an example of the default relationships:

```yaml
relationships:
    database: "mysql:mysql"
    redis: "redis:redis"
    elasticsearch: "elasticsearch:elasticsearch"
```

See [Services]({{ site.baseurl }}/cloud/project/project-conf-files_services.html) for a full list of currently supported service types and endpoints.

### `web`

The `web` property defines how your application is exposed to the web (in HTTP). It determines how the web application serves content— from the front-controller script to a non-static request to an `index.php` file on the root. We support any directory structure so the static file can be in a sub directory, and the `index.php` file can be further down.

You can specify the following attributes for the `web` property:

Attribute | Description
--------- | -----------
`root` | The path relative to the root of the application that is exposed on the web. Typical values include `/public` and `/web`.
`passthru` | The URL used in the event that a static file or PHP file cannot be found. This URL is typically the front controller for your applications, often `/index.php` or `/app.php`.
`index` | Static files, such as `index.html`, to serve your application. This key expects a collection. You must include the static file(s) in the whitelist as an index file, like `- \.html$`.
`blacklist` | A list of files that should never be executed. Has no effect on static files.
`whitelist` | A list of static files (as regular expressions) that can be served. Dynamic files (for example, PHP files) are treated as static files and have their source code served, but they are not executed.
`expires` | The number of seconds to cache whitelisted content in the browser. This attribute enables the cache-control and expires headers for static content. If this value is not set, the `expires` directive and resulting headers are not included when serving static content files.

Contrary to standard `.htaccess` approaches that accept a _blacklist_ and allow access to everything not on a specific list, we accept a _whitelist_, which means that any request that does not match triggers a 404 error and passes through to the  URL specified by the `passthru` attribute.

Our default configuration allows the following:

-  From the root (`/`) path, only web and media can be accessed
-  From the `~/pub/static` and `~/pub/media` paths, any file can be accessed

The following example shows the default configuration for a set of web-accessible locations associated with an entry in the  [`mounts` property](#mounts):

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
                ^/sitemap(.*)\.xml$:
                    passthru: "/media/sitemap$1.xml"
        "/media":
            root: "pub/media"
            allow: true
            scripts: false
            expires: 1y
            passthru: "/get.php"
        "/static":
            root: "pub/static"
            allow: true
            scripts: false
            expires: 1y
            passthru: "/front-static.php"
            rules:
                ^/static/version\d+/(?<resource>.*)$:
                    passthru: "/static/$resource"

```

{:.bs-callout-info}
This example shows the default web configuration for a Cloud project configured to support a single domain. For a project that requires support for multiple websites or stores, the `web` configuration must be set up to support shared domains. See [Configure locations for shared domains]({{ site.baseurl }}/cloud/project/project-multi-sites.html#locations).

### `disk`

Defines the persistent disk size of the application in MB.

```yaml
disk: 2048
```

{:.bs-callout-info}
The minimal recommended disk size is 256MB. If you see the error `UserError: Error building the project: Disk size may not be smaller than 128MB`, increase the size to 256MB.

### `mounts`

An object whose keys are paths relative to the root of the application. The mount is a writable area on the disk for files. The following is a default list of mounts configured in the `magento.app.yaml` file using the `volume_id[/subpath]` syntax:

```yaml
 # The mounts that will be performed when the package is deployed.
mounts:
    "var": "shared:files/var"
    "app/etc": "shared:files/etc"
    "pub/media": "shared:files/media"
    "pub/static": "shared:files/static"
```

The format for adding your mount to this list is as follows:

```bash
"/public/sites/default/files": "shared:files/files"
```

-  `shared`—Shares a volume between your applications inside an environment.
-  `disk`—Defines the size available for the shared volume.

{:.bs-callout-warning}
The subpath portion of the mount is the unique identifier of the files area. If changed, files at the old location will be permanently lost. Do not change this value once your site has data unless you really want to lose all existing data.

You can make the mount web accessible by adding it to the [`web`](#web) block of locations.

### `dependencies`

Enables you to specify dependencies that your application might need during the build process.

{{site.data.var.ee}} supports dependencies on the following
languages:

-  PHP
-  Ruby
-  NodeJS

Those dependencies are independent of the eventual dependencies of your application, and are available in the `PATH`, during the build process and in the runtime environment of your application.

You can specify those dependencies as follows:

```yaml
ruby:
   sass: "~3.4"
nodejs:
   grunt-cli: "~0.3"
```

### `hooks`

Use the `hooks` section to run shell commands during the build, deploy, and post-deploy phases:

-  **`build`**—Execute commands _before_ packaging your application. Services, such as the database or Redis, are not available at this time since the application has not been deployed yet. You must add custom commands _before_ the default `php ./vendor/bin/ece-tools` command so that custom-generated content continues to the deployment phase.

-  **`deploy`**—Execute commands _after_ packaging and deploying your application. You can access other services at this point. Since the default `php ./vendor/bin/ece-tools` command copies the `app/etc` directory to the correct location, you must add custom commands _after_ the deploy command to prevent custom commands from failing.

-  **`post_deploy`**—Execute commands _after_ deploying your application and _after_ the container begins accepting connections. The `post_deploy` hook clears the cache and preloads (warms) the cache. You can customize the list of pages using the `WARM_UP_PAGES` variable in the [Post-deploy stage]({{ site.baseurl }}/cloud/env/variables-post-deploy.html). Although not required, this works in tandem with the `SCD_ON_DEMAND` environment variable.

Add CLI commands under the `build`, `deploy`, or `post_deploy` sections _before_ the `ece-tools` command:

```yaml
hooks:
    # We run build hooks before your application has been packaged.
    build: |
        php ./vendor/bin/ece-tools build
    # We run deploy hook after your application has been deployed and started.
    deploy: |
        php ./vendor/bin/ece-tools deploy
    # We run post deploy hook to clean and warm the cache. Available with ECE-Tools 2002.0.10.
    post_deploy: |
        php ./vendor/bin/ece-tools post-deploy
```

Also, you can customize the build phase further by using the `generate` and `transfer` commands to perform additional actions when specifically building code or moving files.

```yaml
hooks:
    # We run build hooks before your application has been packaged.
    build: |
        set -e
        php ./vendor/bin/ece-tools build:generate
        # php /path/to/your/script
        php ./vendor/bin/ece-tools build:transfer
```

-  `set -e`—causes hooks to fail on the first failed command, instead of the final failed command.
-  `build:generate`—applies patches, validates configuration, generates DI, and generates static content if SCD is enabled for build phase.
-  `build:transfer`—transfers generated code and static content to the final destination.

The commands run from the application (`/app`) directory. You can use the `cd` command to change the directory. The hooks fail if the final command in them fails. To cause them to fail on the first failed command, add `set -e` to the beginning of the hook.

{:.procedure}
To compile Sass files using grunt:

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
        php ./vendor/bin/ece-tools build
```

You must compile Sass files using `grunt` before static content deployment, which happens during the build. Place the `grunt` command before the `build` command.

{% include cloud/note-ece-tools-custom-deployment.md %}

### `crons`

Describes processes that are triggered on a schedule. We recommend you run `cron` as the [Magento file system owner]({{ site.baseurl }}/cloud/before/before-workspace-file-sys-owner.html). Do _not_ run cron as `root` or as the web server user.

`crons` support the following:

-  `spec`—The cron specification. For Starter environments and Pro Integration environments, the minimum interval is once per five minutes and once per one minute in Pro Staging and Production environments. You need to complete [additional configurations]({{ site.baseurl }}/cloud/configure/setup-cron-jobs.html#add-cron) for crons in those environments.
-  `cmd`—The command to execute.

A cron job is well suited for the following tasks:

-  They need to happen on a fixed schedule, not continually.
-  The task itself is not especially long, as a running cron job will block a new deployment.
-  Or it is long, but can be easily divided into many small queued tasks.
-  A delay between when a task is registered and when it actually happens is acceptable.

By default, every Cloud project has the following default crons configuration to run the default Magento cron jobs:

```yaml
crons:
    cronrun:
        spec: "* * * * *"
        cmd: "php bin/magento cron:run"
```

For {{site.data.var.ece}} 2.1.x, you can use only [workers](#workers) and [cron jobs](#crons). For {{site.data.var.ece}} 2.2.x, cron jobs launch consumers to process batches of messages, and do not require additional configuration.

If your project requires custom cron jobs, you can add them to the default cron configuration. See [Set up cron jobs]({{ site.baseurl }}/cloud/configure/setup-cron-jobs.html).

## Variables

The following environment variables are included in `.magento.app.yaml`. These are required for {{site.data.var.ece}} 2.2.x.

```yaml
variables:
    env:
        CONFIG__DEFAULT__PAYPAL_ONBOARDING__MIDDLEMAN_DOMAIN: 'payment-broker.magento.com'
        CONFIG__STORES__DEFAULT__PAYMENT__BRAINTREE__CHANNEL: 'Magento_Enterprise_Cloud_BT'
        CONFIG__STORES__DEFAULT__PAYPAL__NOTATION_CODE: 'Magento_Enterprise_Cloud'
```

## Configure PHP options

You can choose which version of PHP to run in your `.magento.app.yaml` file:

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

### Customize `php.ini` settings

You can also create and push a `php.ini` file that is appended to the configuration maintained by {{site.data.var.ee}}.

In your repository, the `php.ini` file should be added to the root of the application (the repository root).

{:.bs-callout-info}
Configuring PHP settings improperly can cause issues. We recommend only advanced administrators set these options.

For example, if you need to increase the PHP memory limit:

```bash
memory_limit = 756M
```

For a list of recommended PHP configuration settings, see [Required PHP settings]({{ site.baseurl }}/guides/v2.3/install-gde/prereq/php-settings.html).

After pushing your file, you can check that the custom PHP configuration has been added to your environment by [creating an SSH tunnel]({{ site.baseurl }}/cloud/env/environments-start.html#env-start-tunn) to your environment and entering:

```bash
cat /etc/php5/fpm/php.ini
```

## Workers

You can define zero or multiple work instances for each application. A worker
instance runs as a container, independent from the web instance and without
a running Nginx instance. Additionally, you do not need to set up a web server on
the worker instance (using Node.js or Go) because the router cannot direct public
requests to the worker.

A worker instance has the exact same code and compilation output as a web instance.
The container image is built once and deployed multiple times if needed using the
same `build` hook and `dependencies`. You can customize the container and
allocated resources.

Use worker instances for background tasks including:

-  Tasks like queue workers or updating indexes.
-  Tasks to run periodic reporting that are too long for a cron job.
-  Tasks should happen "now", but not block a web request.
-  Tasks are large enough that they risk blocking a deploy, even if they are subdivided.
-  The task in question is a continually running process rather than a stream of discrete units of work.

A basic, common worker configuration could look like this:

```yaml
workers:
    queue:
        size: S
        commands:
            start: |
                php worker.php
```

This example defines a single worker named queue, with a "small" container, and runs the command `php worker.php` on startup. If `worker.php` exits, it is automatically restarted.

For {{site.data.var.ece}} 2.1.x, you can use only [workers](#workers) and [cron jobs](#crons). For {{site.data.var.ece}} 2.2.x, cron jobs launch consumers to process batches of messages, and does not require additional configuration.

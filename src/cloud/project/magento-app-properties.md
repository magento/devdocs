---
group: cloud-guide
title: Properties
functional_areas:
  - Cloud
  - Setup
  - Application
---
Use the following properties to build your application configuration file. The `name`, `type`, `disk`, and one `web` or `worker` block is required.

{% include cloud/note-pro-mount-disk-config-yaml-support.md %}

### `name`

The `name` property provides the application name used in the [`routes.yaml`]({{ site.baseurl }}/cloud/project/routes.html) file to define the HTTP upstream (by default, `mymagento:http`). For example, if the value of `name` is `app`, you must use `app:http` in the upstream field.

{:.bs-callout-warning}
Do not change the name of the application after it has been deployed. Doing so will result in data loss.

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

See [Services]({{ site.baseurl }}/cloud/project/services.html) for a full list of currently supported service types and endpoints.

### `web`

The `web` property defines how your application is exposed to the web (in HTTP), determines how the web application serves content, and controls how the application container responds to incoming requests by setting rules in each location _block_. A block represents an absolute path leading with a forward slash (`/`).

```yaml
web:
    locations:
        "/":
            # The public directory of the app, relative to its root.
```

You can fine-tune your `locations` configuration using the following key values for each `locations` block:

Attribute | Description
--------- | -----------
`allow` | Serve files that do not match "rules". Default value = `true`
`expires` | Set the number of seconds to cache content in the browser. This key enables the `cache-control` and `expires` headers for static content. If this value is not set, the `expires` directive and resulting headers are not included when serving static content files. A negative 1 (`-1`) value results in no caching and is the default value. You can express time value with the following units:  `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours), `d` (days), `w` (weeks), `M` (months, 30d), or `y` (years, 365d)
`index` | List the static files to serve your application, such as the `index.html` file. This key expects a collection. This only works if access to the file or files is "allowed" by the `allow` or `rules` key for this location.
`rules` | Specify overrides for a location. Use a regular expression to match a request. If an incoming request matches the rule, then regular handling of the request is overridden by the keys used in the rule.
`passthru` | Set the URL used in the event that a static file or PHP file cannot be found. Typically, this URL is the front controller for your applications, such as `/index.php` or `/app.php`.
`root` | Set the path relative to the root of the application that is exposed on the web. The public directory (location "/") for a Cloud project is set to "pub" by default.
`scripts` | Allow loading scripts in this location. Set the value to `true` to allow scripts.

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

You can make the mount web accessible by adding it to the [`web`](#web) block of locations.

{:.bs-callout-warning}
Once your Magento site has data, do not change the `subpath` portion of the mount name. This value is the unique identifier for the files area. If you change this name, you will lose all site data stored at the old location.

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
        set -e
        php ./vendor/bin/ece-tools build:generate
        php ./vendor/bin/ece-tools build:transfer
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

For {{site.data.var.ece}} 2.1.x, you can use only [workers]({{ site.baseurl }}/cloud/project/magento-app-workers.html) and [cron jobs](#crons). For {{site.data.var.ece}} 2.2.x, cron jobs launch consumers to process batches of messages, and do not require additional configuration.

If your project requires custom cron jobs, you can add them to the default cron configuration. See [Set up cron jobs]({{ site.baseurl }}/cloud/configure/setup-cron-jobs.html).

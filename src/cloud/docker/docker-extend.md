---
group: cloud-guide
title: Extend the Docker configuration
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

You can use the built-in extension mechanism of Docker to specify [multiple compose files]. The following example replaces the default value of the `ENABLE_SENDMAIL` environment variable.

1. Create a `docker-compose-dev.yml` file inside your project root directory and add the following content:

  ```yaml
  version: '2'
  services:
    deploy:
      environment:
        - ENABLE_SENDMAIL=false
   ```

1. Pass both configuration files while executing your commands. For example:

  ```bash
  docker-compose -f docker-compose.yml -f docker-compose-dev.yml run deploy bash
  ```

## Specify Docker build sources

To test changes to images or make more extensive changes to the containers, you must build them from source. You can do this by
by adding the `build:context` configuration to the `docker-compose.override.yml` file.

The following example defines the build context for the Web container. You can use the same technique to build from any of the images in  the `vendor/magento/magento-cloud-docker` directory or any other Docker image, including local images that are resourced outside the project.

  ```yaml
  version: '2.1'
  services:
    web:
      build:
        context: ./vendor/magento/magento-cloud-docker/images/nginx/1.9/
  ```

To update the container configuration and test iteratively, use the `--force-recreate` option to refresh the container build:

  ```bash
  docker-compose up -d --force-recreate --build
  ```

## Add a new version of existing service

In the `{{site.data.var.mcd-package}}` package the available [service versions] are determined by the Docker service images configured in the `{{site.data.var.mcd-package}}` `images` directory. You can add a new service version by creating a directory for the version and adding a `Dockerfile` and other files to configure the new version.

{:.procedure}
To add a new service version using a `Dockerfile`:

1. Clone the `{{site.data.var.mcd-package}}` project to your local environment if necessary.

1. On the command line, change to the directory that contains the existing service version configurations.

  ```bash
  cd magento-cloud-docker/images/<service-name>
  ```

1. Create a directory for the new version.

1. In the new directory, add the `Dockerfile` that contains the image configuration details for the new version. Use the `Dockerfile` for an existing version as a template and add any other required configuration such as supported plugins.

1. Add the `docker-entrypoint.sh` and `healthcheck` files if needed.

1. Add any necessary `.conf` and `.ini` files for the service to the `etc` directory.

1. Run the following command to build the image.

  ```bash
  docker build -t test/<service-name>:<service-version>
  ```
   
1. Once the build succeeds, test the changes by specifying the [Docker build sources].

## Add a new PHP extension

In addition to built-in extensions, you can add PHP extensions to the PHP container.

{:.procedure}
To add a new PHP extension:

1. Clone the `{{site.data.var.mcd-package}}` project to your local environment if necessary.

1. On the command line, navigate to the PHP directory.

  ```shell script
  cd magento-cloud-docker/src/Compose/Php
  ```

1. Add one or more extensions:  to the `ExtensionResolver.php` file:

   -   Open the `ExtensionResolver.php` file for editing.
   
   -   Define the required extension in the `getConfig` method by specifying the extension type and dependency.

   We have divided the extensions into three conditional groups:
   1. `EXTENSION_TYPE_CORE` - Extension that exists in the `docker-php-source`. More details can be found at [https://hub.docker.com/_/php][PHP, Docker Official Images], in the "How to install more PHP extensions" section.
   1. `EXTENSION_TYPE_PECL` - Extensions that can be installed from [https://pecl.php.net/][PECL]. More details [https://hub.docker.com/_/php][PHP, Docker Official Images], the part "PECL extensions"
   1. `EXTENSION_TYPE_INSTALLATION_SCRIPT` - For extensions that can be installed by running a number commands. More details can be found at [https://hub.docker.com/_/php][PHP, Docker Official Images], in the  "Other extensions" section.

   For instance, the following block adds the `bcmath` extension:
   
  ```php?start_inline=1
   'bcmath' => [
       '>=7.0' => [self::EXTENSION_TYPE => self::EXTENSION_TYPE_CORE],
   ],
  ```
  
  In this case, the `bcmath` extension installs from `docker-php-source` for all `PHP` versions starting from `7.0`.
   
  In case of installing an extension from `PECL` which has a dependency on a specific package:
  ```php?start_inline=1
   'gnupg' => [
     '>=7.0' => [
       self::EXTENSION_TYPE => self::EXTENSION_TYPE_PECL,
       self::EXTENSION_OS_DEPENDENCIES => ['libgpgme11-dev'],
     ],
   ],
  ```
  For extension types `EXTENSION_TYPE_PECL`\\`EXTENSION_TYPE_PECL`, the following configuration pattern is valid:
   
  ```php?start_inline=1
   '<extension name>' => [ // this name will be used to identify the extension among other PHP extensions.
       '<php version constraint>' => [ // for which PHP versions this config will apply
            self::EXTENSION_TYPE => self::EXTENSION_TYPE_CORE // or self::EXTENSION_TYPE_PECL
            self::EXTENSION_OS_DEPENDENCIES => ['<name dependency package 1>', <name dependency package 2>, ... ] // Linux packages, they will be installed in the order of indication before extantion
            self::EXTENSION_PACKAGE_NAME => '<raw extension name>', // if this parameter exists, then this value will be used when generating the installation command
            self::EXTENSION_CONFIGURE_OPTIONS => [ // options to be applied when configuring a PHP extension using the command `docker-php-ext-configure`.  See the the "PHP Core Extensions" section in the [https://hub.docker.com/_/php][PHP, Docker Official Images] documentation.
                 '--option1',
                 '--option2',
                 ...
            ]
       ],
       '<php version constraint>' => [
        ....
    ]
  ```
    
  Configuration for extensions `gd`, `geoip` are good examples:
    
  ```php?start_inline=1
    'gd' => [
        '>=7.0 <=7.3' => [
            self::EXTENSION_TYPE => self::EXTENSION_TYPE_CORE,
            self::EXTENSION_OS_DEPENDENCIES => ['libjpeg62-turbo-dev', 'libpng-dev', 'libfreetype6-dev'],
            self::EXTENSION_CONFIGURE_OPTIONS => [
                '--with-freetype-dir=/usr/include/',
                '--with-jpeg-dir=/usr/include/'
            ],
        ],
        '>=7.4' => [
            self::EXTENSION_TYPE => self::EXTENSION_TYPE_CORE,
            self::EXTENSION_OS_DEPENDENCIES => ['libjpeg62-turbo-dev', 'libpng-dev', 'libfreetype6-dev'],
            self::EXTENSION_CONFIGURE_OPTIONS => [
                '--with-freetype=/usr/include/',
                '--with-jpeg=/usr/include/'
            ],
        ],

    ],
    'geoip' => [
        '>=7.0' => [
            self::EXTENSION_TYPE => self::EXTENSION_TYPE_PECL,
            self::EXTENSION_OS_DEPENDENCIES => ['libgeoip-dev', 'wget'],
            self::EXTENSION_PACKAGE_NAME => 'geoip-1.1.1',
        ],
    ],
  ```
   
  If the installation requires the execution of special commands, then use the type `EXTENSION_TYPE_INSTALLATION_SCRIPT`.
  The template for this type:
   
  ```php?start_inline=1
      'extension name' => [
           'php version constraint' => [
               self::EXTENSION_TYPE => self::EXTENSION_TYPE_INSTALLATION_SCRIPT,
               self::EXTENSION_INSTALLATION_SCRIPT => <<< BASH
       <installation script>
       BASH
       ],
  ```
   
  Usage example:
  ```php?start_inline=1
    'ioncube' => [
        '>=7.0 <=7.3' => [
            self::EXTENSION_TYPE => self::EXTENSION_TYPE_INSTALLATION_SCRIPT,
            self::EXTENSION_INSTALLATION_SCRIPT => <<< BASH
    cd /tmp
    curl -O https://downloads.ioncube.com/loader_downloads/ioncube_loaders_lin_x86-64.tar.gz
    tar zxvf ioncube_loaders_lin_x86-64.tar.gz
    export PHP_VERSION=$(php -r "echo PHP_MAJOR_VERSION.'.'.PHP_MINOR_VERSION;")
    export PHP_EXT_DIR=$(php-config --extension-dir)
    cp "./ioncube/ioncube_loader_lin_\${PHP_VERSION}.so" "\${PHP_EXT_DIR}/ioncube.so"
    rm -rf ./ioncube
    rm ioncube_loaders_lin_x86-64.tar.gz
    BASH
    ],
  ```
1. If you want the extension to be enabled by default, then add it to the array `DEFAULT_PHP_EXTENSIONS`

```php?start_inline=1
    /**
     * Extensions which should be installed by default
     */
    public const DEFAULT_PHP_EXTENSIONS = [
        'bcmath',
        'bz2',
        'calendar',
        'exif',
        'gd',
        'gettext',
        'intl',
        'mysqli',
        'pcntl',
        'pdo_mysql',
        'soap',
        'sockets',
        'sysvmsg',
        'sysvsem',
        'sysvshm',
        'opcache',
        'zip',
    ];
```
Otherwise, to enable an extension, you must specify the name of the extension in the `.magento.app.yaml` for your Cloud project, regenerate the Docker compose configuration file, and restart the Docker container.

1. Add any required `.ini` files to the PHP FPM container configuration.

   -  On the command line, navigate to FPM image directory `magento-cloud-docker/images/php/fpm`:

      ```bash
      cd ../../../images/php/fpm
      ```

   -  Add each required `.ini` file to the `etc` directory.

   -  For each `.ini` file that you add, you must add the following line to the `Dockerfile` (`magento-cloud-docker/images/php/fpm/Dockerfile`):

      ```conf
      COPY etc/<filename>.ini /usr/local/etc/php/conf.d/<filename>.ini
      ```

1. Add any required `.ini` files to the PHP CLI container configuration.

   -  On the command line, navigate to the CLI image directory `magento-cloud-docker/images/php/cli`.

      ```bash
      cd ../cli
      ```

   -  Add each required `.ini` file to the `etc` directory.

   -  For each `.ini` file that you add, you must add the following line to the `Dockerfile` (`magento-cloud-docker/images/php/cli/Dockerfile`):

       ```conf
       ADD etc/<file-name>.ini /usr/local/etc/php/conf.d/<filename>.ini
       ```

1. Generate an updated `Dockerfile` for all PHP image versions included in the {{site.data.var.mcd}} package.

   ```bash
   bin/ece-docker image:generate:php
   ```

1. Test the extension by specifying the [Docker build sources].

[multiple compose files]: https://docs.docker.com/compose/reference/overview/#specifying-multiple-compose-files
[service versions]: https://devdocs.magento.com/cloud/docker/docker-containers.html#service-containers
[Docker build sources]: https://devdocs.magento.com/cloud/docker/docker-extend.html#specify-docker-build-sources
[multiple compose files]: https://docs.docker.com/compose/reference/overview/#specifying-multiple-compose-files
[service versions]: https://devdocs.magento.com/cloud/docker/docker-containers.html#service-containers
[Docker build sources]: https://devdocs.magento.com/cloud/docker/docker-extend.html#specify-docker-build-sources

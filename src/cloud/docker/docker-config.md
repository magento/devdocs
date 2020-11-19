---
group: cloud-guide
title: Configure Docker environment
functional_areas:
  - Cloud
  - Setup
  - Configuration
redirect_from:
  - /cloud/reference/docker-config.html
---

`{{site.data.var.mcd-prod}}` deploys Magento to a read-only file system by default in the Docker environment, which mirrors the read-only file system deployed in the Production environment. You have the option to deploy a Docker environment in developer mode, which provides an active development environment with full, writable filesystem permissions.

You use the `ece-docker build:compose` command to generate the Docker Compose configuration to deploy {{site.data.var.ece}} to a local Docker environment.

{: .bs-callout-warning }
The `ece-docker build:compose` command overwrites the existing `docker-compose.yml` configuration file. You can save your customizations for the Docker Compose configuration in a `docker-compose.override.yml` file. See a detailed example in the [Docker quick reference][docker-reference].

## Prerequisites

To get started with local development you must have [Docker] installed on your workstation. In addition, macOS and Windows systems require either [docker-sync] or [Mutagen] for file synchronization between the host and Docker environments.

### Optional Steps

Magento Cloud Docker binds to port `80` on your host environment. If you have enabled the bundled web server on your workstation you must stop the service before launching the Docker environment.

```bash
sudo apachectl stop
```

## Set the launch mode

You can launch a Docker environment in production or developer mode by setting the `mode` option on the `ece-docker build:compose` command:

-  **Production mode**—The `--mode="production"` setting supports an active production environment with read-only filesystem permissions. This is the default configuration setting for launching a Docker environment. Selecting this option builds the Docker environment in production mode and verifies configured service versions. See [Production mode launch instructions][prod-mode].
-  **Developer mode**—The `--mode="developer"` setting supports an active development environment with full, writable filesystem permissions. Selecting this option builds the Docker environment in developer mode and verifies configured service versions. System performance is slower in developer mode because of additional file synchronization operations. See [Developer mode launch instructions][dev-mode].

For example, the following command starts the Docker configuration generator for the developer mode:

```bash
./vendor/bin/ece-docker build:compose --mode="developer"
```

To skip the interactive mode, use the `-n, --no-interaction` option.

{:.bs-callout-info}
The mode option for the `ece-docker build:compose` command does not affect the Magento mode. It determines the {{site.data.var.ece}} file system installation and read-only or read-write behavior.

## Set the environment variables

You can launch a Cloud Docker environment with predefined environment variables by adding the `--env-vars` option to the `ece-docker build:compose` command.

For example, the following command sets values for the `LOCK_PROVIDER` and `CRON_CONSUMERS_RUNNER` environment variables.

```bash
bin/ece-docker build:compose --env-vars="{\"MAGENTO_CLOUD_VARIABLES\":{\"LOCK_PROVIDER\":\"db\",\"CRON_CONSUMERS_RUNNER\":{\"cron_run\":\"true\",\"max_messages\":5000,\"consumers\":[\"test\"]}}}"
```

You must escape special characters when specifying the value for the `--env-vars` option. Use the following PHP script to generate the escaped value. Update the example with the values required for your Cloud Docker environment configuration.

```php
<?php

echo addslashes(json_encode([
   'MAGENTO_CLOUD_VARIABLES' => [
       'LOCK_PROVIDER' => 'db',
       'CRON_CONSUMERS_RUNNER' => [
           'cron_run' => 'true',
           'max_messages' => 5000,
           'consumers' => ['test'],
       ],
   ]
]));
```

## Stop and start containers

You can stop containers and restore them afterwards using the following methods.

Action | Command
------ | -------
Suspend containers to continue your work later | `docker-compose stop`
Stop and remove all containers, images, and volumes | `docker-compose down`
Start containers from a suspended state | `docker-compose start`
Stop the synchronization daemon | `docker-sync stop`
Start the synchronization daemon | `docker-sync start`

Use the following command to stop and remove the Docker configuration:

   ```bash
   docker-compose down -v
   ```

{: .bs-callout-warning}
This command removes all components of your local Docker instance including containers, networks, volumes, and images except for the persistent database and the `magento-sync` volume. See [Rebuild a clean environment][refresh].

## Run Composer with Docker

You can run composer using the `docker` command before you create the container instance. This technique is useful to create an application instance during the CI/CD build process, or even during first time Magento set up.

When you run composer with Docker commands, you must use the [Docker Hub PHP Image Tag] that matches the Magento application version. The following example uses PHP 7.3. You run this command from the project root directory.

```bash
docker run -it  -v $(pwd):/app/:delegated -v ~/.composer/:/root/.composer/:delegated magento/magento-cloud-docker-php:7.3-cli-1.1 bash -c "composer install&&chown www. /app/"
```

This command passes in the current working directory as `/app/`, includes composer from `~/.composer/`, and runs the `composer install` command in the container. After this set up, the command  fixes the permissions on the files that have been added or changed.

## Running Docker on a custom host and port

Sometimes you might want to run Docker on a different host and port, for example if you need more than one Docker instance.

To configure the custom host and port, add the `host` and `port` options to the `build:compose` command.

```bash
./vendor/bin/ece-docker build:compose --host=magento2.test --port=8080
```

You must also add or update the custom host name in your `/etc/hosts` file.

```conf
127.0.0.1 magento2.test
```

Alternatively, you can run the following command to add it to the file:

```bash
echo "127.0.0.1 magento2.test" | sudo tee -a /etc/hosts
```

## Set up email

The default {{ site.data.var.mcd-prod }} configuration includes the [MailHog] service as a replacement for the Sendmail service. Sendmail can cause performance issues in the local Docker environment. See [MailHog service].

[php]: https://www.php.net/manual/en/install.php
[Composer]: https://getcomposer.org
[Docker]: https://www.docker.com/get-started
[docker-reference]: {{site.baseurl}}/cloud/docker/docker-quick-reference.html
[docker-sync]: https://docker-sync.readthedocs.io/en/latest/getting-started/installation.html
[mutagen]: https://mutagen.io/documentation/introduction/installation
[prod-mode]: {{site.baseurl}}/cloud/docker/docker-mode-production.html
[dev-mode]: {{site.baseurl}}/cloud/docker/docker-mode-developer.html
[enable Xdebug]: {{site.baseurl}}/cloud/docker/docker-development-debug.html
[Database container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#database-container
[refresh]: {{site.baseurl}}/cloud/docker/docker-containers.html#rebuild-a-clean-environment
[Docker Hub PHP Image Tag]: https://hub.docker.com/r/magento/magento-cloud-docker-php/tags
[MailHog]: https://github.com/mailhog/MailHog
[MailHog service]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#mailhog-container

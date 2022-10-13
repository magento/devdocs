---
group: cloud-guide
title: Configure and manage your Docker environment
functional_areas:
  - Cloud
  - Setup
  - Configuration
redirect_from:
  - /cloud/reference/docker-config.html
---

{{site.data.var.mcd-prod}} uses Docker Compose to build and deploy {{site.data.var.ee}} to a multi-container Docker application. You can generate the Docker Compose configuration to build and deploy Docker from the following sources:

-  [{{site.data.var.ece}} project configuration files] for Cloud projects
-  [Unified configuration] for On-premises projects
-  [CLI configuration] using `ece-docker build:compose` command options to override configuration values at runtime
-  [Custom Docker Compose configuration file] supports installation for both Cloud and On-premises projects

{:.bs-callout-info}
When you build the Docker Compose configuration file, the `ece-docker build:compose` command overwrites the existing `docker-compose.yml` configuration file. You can save customizations for the Docker Compose configuration in a `docker-compose.override.yml` file.  If the `docker-compose.override.yml` file is present, then the override configuration merges with the base configuration. See [Override configuration].

## Run Composer with Docker

You can run composer using the `docker` command before you create the container instance. This technique is useful to create an application instance during the CI/CD build process, or even during first time set up.

When you run composer with Docker commands, you must use the [Docker Hub PHP Image Tag] that matches the {{site.data.var.ee}} application version. The following example uses PHP 7.3. You run this command from the project root directory.

```bash
docker run -it  -v $(pwd):/app/:delegated -v ~/.composer/:/root/.composer/:delegated magento/magento-cloud-docker-php:7.3-cli-1.1 bash -c "composer install&&chown www. /app/"
```

This command passes in the current working directory as `/app/`, includes composer from `~/.composer/`, and runs the `composer install` command in the container. After this set up, the command fixes the permissions on the files that have been added or changed.

## Update Composer for Docker

To update the Composer version in Cloud Docker, add the `COMPOSER_VERSION` variable to your `.docker/config.env` file with the version you want to use. For example, to use Composer 2.x with {{site.data.var.ee}} >=2.4.2:

```conf
COMPOSER_VERSION=2.0.12
```

When you build your Docker image with this variable, Cloud Docker uses this version to run `composer self-update $COMPOSER_VERSION` for your environment.

## Run Docker on a custom host and port

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

The default {{ site.data.var.mcd-prod }} configuration includes the [MailHog] service as a replacement for the Sendmail service. Sendmail can cause performance issues in the local Docker environment.

After you start the Docker environment, go to the following URL to access the MailHog service and view outgoing emails: `http://magento2.docker:8025`

<!--Link definitions-->

[CLI configuration]: {{site.baseurl}}/cloud/docker/docker-config-sources.html#cli-configuration
[Custom Docker Compose configuration file]: {{site.baseurl}}/cloud/docker/docker-config-sources.html#build-a-custom-docker-compose-configuration
[Composer]: https://getcomposer.org
[Docker Hub PHP Image Tag]: https://hub.docker.com/r/magento/magento-cloud-docker-php/tags
[MailHog]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#mailhog-container
[Override configuration]: {{site.baseurl}}/cloud/docker/docker-quick-reference.html#override-configuration
[{{site.data.var.ece}} project configuration files]: {{site.baseurl}}/cloud/docker/docker-config-sources.html#cloud-configuration-for-commerce
[Unified configuration]: {{site.baseurl}}/cloud/docker/docker-config-sources.html#unified-configuration

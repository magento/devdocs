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

The default {{ site.data.var.mcd-prod }} configuration includes the [MailHog] service as a replacement for the Sendmail service. Sendmail can cause performance issues in the local Docker environment.

When the MailHog service installed, go to the following URL to open the service and view outgoing emails: `http://magento2.docker:8025`

[php]: https://www.php.net/manual/en/install.php
[Composer]: https://getcomposer.org
[Docker]: https://www.docker.com/get-started
[docker-sync]: https://docker-sync.readthedocs.io/en/latest/getting-started/installation.html
[mutagen]: https://mutagen.io/documentation/introduction/installation
[enable Xdebug]: {{site.baseurl}}/cloud/docker/docker-development-debug.html
[Database container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#database-container
[Docker Hub PHP Image Tag]: https://hub.docker.com/r/magento/magento-cloud-docker-php/tags
[MailHog]: https://github.com/mailhog/MailHog

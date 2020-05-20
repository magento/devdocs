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
       - ENABLE_SENDMAIL=true
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

In {{site.data.var.mcd}} package the available [service versions] are determined by the Docker service images configured in the {{site.data.var.mcd}} `images` directory. You can add a new service version by creating a directory for the version and adding a `Dockerfile` and other files to configure the new version.

{:.procedure}
To add a new service version using a `Dockerfile`:

1. Clone the `{{site.data.var.mcd}}` project to your local environment if necessary.

1. On the command line, change to the directory that contains the existing service version configurations.

   ```bash
      cd magento-cloud-docker/images/<service-name>
   ```

1. Create a directory for the new version.

1. In the new directory, add the `Dockerfile` that contains the image configuration details for the new version. Use the `Dockerfile` for an existing version as a template and add any other required configuration such as supported plugins.

1. Add the `docker-entrypoint.sh` and `healthcheck` files if needed.

1. Add any necessary `.conf` and `.ini` files for the service to the `etc` directory.

1. Run the following command to build the image.

   `docker build -t test/<service-name>:<service-version>`

1. Once the build succeeds, test the changes by specifying the [Docker build sources].

[multiple compose files]: https://docs.docker.com/compose/reference/overview/#specifying-multiple-compose-files
[service versions]: https://devdocs.magento.com/cloud/docker/docker-containers.html#service-containers
[Docker build sources]: https://devdocs.magento.com/cloud/docker/docker-extend.html#specify-docker-build-sources

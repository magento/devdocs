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

[multiple compose files]: https://docs.docker.com/compose/reference/overview/#specifying-multiple-compose-files

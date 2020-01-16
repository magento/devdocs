---
group: cloud-guide
title: Extend the Docker configuration
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

## Specify multiple compose files

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

## Specify Docker Build Sources
To be able to locally test changes to images or if there is a requirement to make more extensive changes to the containers you will need to build them from source. This is accomplished by adding build context to the `docker-compose.override.yml`.

```yaml
version: '2.1'
services:
 web:
   build:
     context: ./vendor/magento/magento-cloud-docker/images/nginx/1.9/
```
This example defines the build context for the web container, however this can be done with any of the images in `vendor/magento/magento-cloud-docker` or any image, including locally resourced outside of the project.

When using this to make changes that require testing you can refresh the build of the container by running the following command:

```bash
docker-compose up -d --force-recreate --build
```


[multiple compose files]: https://docs.docker.com/compose/reference/overview/#specifying-multiple-compose-files
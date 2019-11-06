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

[multiple compose files]: https://docs.docker.com/compose/reference/overview/#specifying-multiple-compose-files
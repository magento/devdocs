---
group: cloud-guide
title: CLI containers
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

The following CLI containers, which are based on a [PHP-CLI version 7 image][php-image], provide `magento-cloud` and `{{site.data.var.ct}}` commands to perform file system operations:

-  `build`—extends the CLI container to perform operations with writable filesystem, similar to the build phase
-  `deploy`—extends the CLI container to use read-only file system, similar to the deploy phase
-  `cron`—extends the CLI container to run cron

   -  The `setup:cron:run` and `cron:update` commands are not available on Cloud and Docker for Cloud environment
   -  Cron only works with the CLI container to run the `./bin/magento cron:run` command

For example, you can check the state of the your project using the _ideal-state_ wizard:

Run the `{{site.data.var.ct}}` ideal-state command.

```bash
docker-compose run deploy ece-command wizard:ideal-state
```

Sample response:

```terminal
...
 - Your application does not have the "post_deploy" hook enabled.
The configured state is not ideal
```
{: .no-copy}

### Cron container

The Cron container is based on PHP-CLI images, and executes operations in the background immediately after the Docker environment start. It uses the cron configuration defined in the [`crons` property of the `.magento.app.yaml` file][crons]. To view the cron log:

```bash
docker-compose run deploy bash -c "cat /app/var/cron.log"
```

### Node container

The Node container is based on the [official Node Docker image][node-image]. It can be used to install NPM dependencies, such as Gulp, or run any Node-based command line tools.

[crons]: {{page.baseurl}}/cloud/project/project-conf-files_magento-app.html#crons
[php-image]: https://hub.docker.com/r/magento/magento-cloud-docker-php
[node-image]: https://hub.docker.com/_/node/
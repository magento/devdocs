---
group: cloud-guide
title: Docker CLI Containers
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

The following CLI containers, most of which are based on a [PHP-CLI version 7 image], provide `magento-cloud` and `{{site.data.var.ct}}` commands to perform file system operations and interact with the application:

-  `build`—extends the CLI container to perform operations with writable filesystem, similar to the build phase
-  `deploy`—extends the CLI container to use read-only file system, similar to the deploy phase
-  `cron`—extends the CLI container to run cron
-  `node`—based on node image, used for NPM activities

For example, you can check the state of the your project using the _ideal-state_ wizard:

Run the `{{site.data.var.ct}}` ideal-state command.

```bash
docker-compose run deploy ece-command wizard:ideal-state
```

Sample response:

```terminal
 - Your application does not have the "post_deploy" hook enabled.
The configured state is not ideal
```
{:.no-copy}

All build and deploy processes are defined and configured using {{site.data.var.ct}} and the Magento Cloud template.

## CLI container commands

These commands are available in the Magento Cloud Docker environment:

| Command    | Target Containers   |  Notes
| ------------- |  ------------------ |------------------
| `cloud-build` | build | Used to build the application in production mode, configured via build hook in .magento.app.yml
| `cloud-deploy` | deploy | Used to deploy the application, configured via deploy hook in .magento.app.yml
| `cloud-post-deploy` | deploy | Used to deploy the application, configured via deploy hook in .magento.app.yml
| `ece-command` | deploy | Used to run other commands from ece-tools CLI Tool
| `magento-command` | deploy | Used to run bin/magento commands
| `magento-installer` | deploy | Just runs build and then deploy hooks
| `mftf-command` | deploy | Used to run MFTF command for testing
| `run-cron` | cron | Used to run cron jobs

To understand the processing for each command, review the [scripts in the Magento Cloud Docker GitHub repository][scripts].

## Build container

**Container name**: build<br/>
**Docker base image:** [magento/magento-cloud-docker-php], which is based on the Docker [php] image

The Build container mimics the behavior of the Magento Cloud build process so that testing the build and deploy process is as close to testing in production as possible.

You can also run build commands manually from the build container to perform individual steps from the build process. For example, you can run the following command to deploy static content.

```bash
docker-compose run build magento-command setup:static-content:deploy
```

## Cron container

**Container name**: cron<br/>
**Docker base image:** [magento/magento-cloud-docker-php], which is based on the Docker [php] image<br/>

The Cron container runs operations in the background immediately after the Docker environment starts. This container uses the cron configuration defined in the [`crons` property of the `.magento.app.yaml` file]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app.html#crons). This container has no custom configuration.

For details on managing cron jobs in the Cloud Docker environment, see [Manage cron jobs].

## Deploy container

**Container name:** deploy<br/>
**Docker base image:** [magento/magento-cloud-docker-php], which is based on the [php] Docker image

The Deploy container mimics the Magento Cloud deploy process so that testing the build and deploy process is as close to testing in production as possible.

You can run `build` and `deploy` commands manually from the deploy container. The following example reindexes the Magento store:

```bash
docker-compose run build magento-command index:reindex
```

## Node container

**Container name:** node<br/>
**Docker base image:** [node]<br/>

The Node container is based on the [official Node Docker image][node]. You can use the container to install NPM dependencies, such as Gulp, or run any Node-based command line tools.

[PHP-CLI version 7 image]: https://hub.docker.com/r/magento/magento-cloud-docker-php
[magento/magento-cloud-docker-php]: https://hub.docker.com/r/magento/magento-cloud-docker-php
[scripts]: https://github.com/magento/magento-cloud-docker/tree/develop/images/php/cli/bin
[Cloud Docker scripts]: https://github.com/magento/magento-cloud-docker/tree/develop/images/php/cli/bin
[magento/magento-cloud-docker-php]: https://hub.docker.com/r/magento/magento-cloud-docker-php
[php]: https://hub.docker.com/_/php
[node]: https://hub.docker.com/_/node
[Manage cron jobs]: {{site.baseurl}}/cloud/docker/docker-manage-cron-jobs.html
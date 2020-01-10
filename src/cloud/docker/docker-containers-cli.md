---
group: cloud-guide
title: Docker CLI Containers
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

## CLI Containers

The CLI containers provide `magento-cloud` and `{{site.data.var.ct}}` commands to perform file system operations and to interact with the application.

The following CLI containers, most of which are based on a [PHP-CLI version 7 image](https://hub.docker.com/r/magento/magento-cloud-docker-php), provide `magento-cloud` and `{{site.data.var.ct}}` commands to perform file system operations:

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

All of the build and deploy processes are defined and configured using the ECE-Tools and Magento Cloud template.

### CLI Container Commands

These commands are available in any of the containers.

| Command    | Target Containers   |  Notes
| ------------- |  ------------------ |------------------
| cloud-build | build | Used to build the application in production mode, configured via build hook in .magento.app.yml
| cloud-deploy | deploy | Used to deploy the application, configured via deploy hook in .magento.app.yml
| cloud-post-deploy | deploy | Used to deploy the application, configured via deploy hook in .magento.app.yml
| ece-command | deploy | Used to run other commands from ece-tools CLI Tool
| magento-command | deploy | Used to run bin/magento commands
| magento-installer | deploy | Just runs build and then deploy hooks
| mftf-command | deploy | Used to run MFTF command for testing
| run-cron | cron | Used to run cron jobs

To explore what any of the commands are doing, take a look at the scripts in the github [Cloud Docker Repository](https://github.com/magento/magento-cloud-docker/tree/develop/images/php/cli/bin)

### Build Container

#### Container Information

-  Name: build
-  Docker Base Image: [magento/magento-cloud-docker-php](https://hub.docker.com/r/magento/magento-cloud-docker-php)
-  Docker Image Based On: [php](https://hub.docker.com/_/php)

This container is used for the build process. This mimics Magento Cloud behaviour so testing of the build and deploy process is as close to production as possible.

#### Container Usage

This container can be used to run commands manually recreating steps from the build process.
```
docker-compose run build magento-command setup:static-content:deploy
```

### Cron Container

#### Container Information

-  Name: cron
-  Docker Base Image: [magento/magento-cloud-docker-php](https://hub.docker.com/r/magento/magento-cloud-docker-php)
-  Docker Image Based On: [php](https://hub.docker.com/_/php)

This container is used for the cronjob, it runs the scheduled cronjobs and can also be used to do one off cron runs.

#### Container Usage

The Cron container is based on PHP-CLI images, and executes operations in the background immediately after the Docker environment start. It uses the cron configuration defined in the [`crons` property of the `.magento.app.yaml` file]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app.html#crons). To view the cron log:

```bash
docker-compose run deploy bash -c "cat /app/var/cron.log"
```

-  The `setup:cron:run` and `cron:update` commands are not available on Cloud and Docker for Cloud environment
-  Cron only works with the CLI container to run the `./bin/magento cron:run` command

This container has no extra configuration, however if performance problems from cron runs are present you can use the following snippet in your docker-compose.override.yml

```yaml
  cron:
    entrypoint: "bash -c"
```
This disables the cron container from running automatically.

You can then run the cron manually using the following command.

```bash
docker-compose run cron /usr/local/bin/php bin/magento cron:run
```

### Deploy Container

#### Container Information

-  Name: deploy
-  Docker Base Image: [magento/magento-cloud-docker-php](https://hub.docker.com/r/magento/magento-cloud-docker-php)
-  Docker Image Based On: [php](https://hub.docker.com/_/php)

This container is used for the deploy process. This mimics Magento Cloud behaviour so testing of the build and deploy process is as close to production as possible.

#### Container Usage

This container can be used to interact with the application.
```
docker-compose run build magento-command index:reindex
```

### Node Container

#### Container Information

-  Name: node
-  Docker Base Image: [node](https://hub.docker.com/_/node)

#### Container Usage
The Node container is based on the [official Node Docker image](https://hub.docker.com/_/node/). It can be used to install NPM dependencies, such as Gulp, or run any Node-based command line tools.


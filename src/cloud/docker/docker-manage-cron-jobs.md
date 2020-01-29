---
group: cloud-guide
title: Manage cron jobs
functional_areas:
  - Cloud
  - Setup
  - Configuration
redirect_from:
  - /cloud/reference/docker-config.html
---

The [Cron container] runs the scheduled cron jobs automatically based on the cron configuration defined in the [`crons` property of the `.magento.app.yaml` file]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app.html#crons). You can also use it to run cron jobs manually. The cron implementation has the following limitations:

-  The `setup:cron:run` and `cron:update` commands are not available on Cloud and Docker for Cloud environments
-  In the Docker environment, cron works only with the CLI container to run the `./bin/magento cron:run` command

**To view the cron log:**

```bash
docker-compose run deploy bash -c "cat /app/var/cron.log"
```

**To run cron jobs manually:**

```bash
docker-compose run cron /usr/local/bin/php bin/magento cron:run
```

## Disable the Cron container

If cron runs cause a performance problem, you can prevent the Cron container from running automatically by adding the following snippet to your `docker-compose.override.yml` file.

```yaml
cron:
  entrypoint: "bash -c"
```

After disabling the Cron container, use `docker-compose` to run cron jobs manually.

## Remove the cron container

Improve performance in your Docker development environment by build the Cloud Docker environment without a Cron container.

```bash
./vendor/bin/ece-docker build:compose --mode="developer" `--no-cron` --sync-engine="mutagen"
```

[Cron container]: {{site.baseurl}}/cloud/docker/docker-containers-cli.html
[`crons` property of the `.magento.app.yaml` file]: {{ site.baseurl }}/cloud/project/project-conf-files_magento-app.html#crons

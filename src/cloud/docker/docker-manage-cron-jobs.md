---
group: cloud-guide
title: Manage cron jobs
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The [Cron container] runs the scheduled cron jobs automatically based on the cron configuration defined in the [`crons` property of the `.magento.app.yaml` file]({{ site.baseurl }}/cloud/project/magento-app-properties.html#crons), and any custom configuration specified in the `docker-compose-override.yml` file.

{:.bs-callout-info}
{{site.data.var.ece}} includes a default cron configuration, which can be further customized in the `.magento.app.yaml` file. See [Set up cron jobs]. You can also use the `docker-compose-override.yml` file to customize the Cron container configuration for Docker without updating the environment configuration for the {{site.data.var.ece}} project. The custom settings are applied during the build and deploy process.

The Magento cron implementation has the following limitations:

-  The `setup:cron:run` and `cron:update` commands are not available on Cloud and Docker for Cloud environments
-  In the Docker environment, cron works only with the CLI container to run the `./bin/magento cron:run` command

To improve the overall performance in the Docker development and production environments, the Cron container is not present by default. You can add the `--with-cron` option to the `ece-tools docker:build` command to enable the Cron container as needed.

```bash
./vendor/bin/ece-docker build:compose --mode="developer" --with-cron --sync-engine="mutagen"
```

**To view the cron log:**

```bash
docker-compose run --rm deploy bash -c "cat /app/var/cron.log"
```

**To run cron jobs manually:**

```bash
docker-compose run --rm cron /usr/local/bin/php bin/magento cron:run
```

[Cron container]: {{site.baseurl}}/cloud/docker/docker-containers-cli.html
[`crons` property of the `.magento.app.yaml` file]: {{ site.baseurl }}/cloud/project/magento-app-properties.html#crons
[Set up cron jobs]: {{site.baseurl}}/cloud/configure/setup-cron-jobs.html

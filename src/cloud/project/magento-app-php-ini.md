---
group: cloud-guide
title: Customize PHP.INI
functional_areas:
  - Cloud
  - Setup
  - Application
---
You can also create and push a `php.ini` file that is appended to the configuration maintained by {{site.data.var.ee}}.

In your repository, the `php.ini` file should be added to the root of the application (the repository root).

{:.bs-callout-info}
Configuring PHP settings improperly can cause issues. We recommend only advanced administrators set these options.

For example, if you need to increase the PHP memory limit:

```bash
memory_limit = 756M
```

For a list of recommended PHP configuration settings, see [Required PHP settings]({{ site.baseurl }}/guides/v2.3/install-gde/prereq/php-settings.html).

After pushing your file, you can check that the custom PHP configuration has been added to your environment by [creating an SSH tunnel]({{ site.baseurl }}/cloud/env/environments-start.html#env-start-tunn) to your environment and entering:

```bash
cat /etc/php5/fpm/php.ini
```

{:.bs-callout-info}
If you use {{site.data.var.mcd-prod}} for local development, see [Docker service containers]{{site.baseurl}}//cloud/docker/docker-containers-service.html#fpm-container) for information about using a custom `php.ini` file in a Docker environment.

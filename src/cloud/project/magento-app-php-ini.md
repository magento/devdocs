---
group: cloud-guide
title: Customize PHP.INI
functional_areas:
  - Cloud
  - Setup
  - Application
---

You can customize the PHP settings for your environment using a `php.ini` file that is appended to the configuration maintained by {{site.data.var.ee}}.

In your repository, add the `php.ini` file to the root of the application (the repository root).

{:.bs-callout-info}
Configuring PHP settings improperly can cause issues. We recommend only advanced administrators set these options.

## Increase PHP memory limit

To increase the PHP memory limit, add the following setting to the `php.ini` file:

```php
memory_limit = 1G
```

For debugging, increase the value to 2G.

## Optimize realpath_cache configuration

Set the following `realpath_cache` settings to improve Magento performance.

```conf
;
; Increase realpath cache size
;
realpath_cache_size = 10M

;
; Increase realpath cache ttl
;
realpath_cache_ttl = 7200
```

These settings allow PHP processes to cache paths to files instead of looking them up each time a page loads. See [Performance Tuning](https://www.php.net/manual/en/ini.core.php) in the PHP documentation.

{:.bs-callout-info}
For a list of recommended PHP configuration settings, see [Required PHP settings]({{ site.baseurl }}/guides/v2.4/install-gde/prereq/php-settings.html).

## Check custom php.ini settings

After pushing the `php.ini` changes to your Cloud environment, you can check that the custom PHP configuration has been added to your environment by [creating an SSH tunnel]({{ site.baseurl }}/cloud/env/environments-start.html#env-start-tunn) to your environment and entering:

```bash
cat /etc/php5/fpm/php.ini
```

{:.bs-callout-info}
If you use {{site.data.var.mcd-prod}} for local development, see [Docker service containers]({{site.baseurl}}/cloud/docker/docker-containers-service.html#fpm-container) for information about using a custom `php.ini` file in a Docker environment.

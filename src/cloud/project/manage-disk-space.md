---
group: cloud-guide
title: Manage disk space
functional_areas:
  - Cloud
  - Storage
---
You can find the total storage capacity for your Cloud project in your {{site.data.var.ece}} contract and on your [Magento account page](https://accounts.magento.cloud/user). Each project card in your account shows the number of _environments_, the _storage_ capacity in GB, and the number of _users_.

## Check Integration environment

You can check disk space usage for your Integration environment using the `magento-cloud` CLI.

**To check approximate disk space usage:**

```bash
magento-cloud db:size
```

Sample response:

```terminal
Checking database service mysql...

+----------------+-----------------+--------+
| Allocated disk | Estimated usage | % used |
+----------------+-----------------+--------+
| 2.0 GiB        | 193.3 MiB       | ~ 9%   |
+----------------+-----------------+--------+
```

All the mounts share the same disk. You can check disk space usage for mounts using the `magento-cloud` CLI.

**To check approximate disk space usage for mounts:**

```bash
magento-cloud mount:size
```

Sample response:

```terminal
Checking disk usage for all mounts on <project>-<branch>-mymagento@ssh.us.magento.cloud...

+------------+-----------+---------+-----------+-----------+--------+
| Mount(s)   | Size(s)   | Disk    | Used      | Available | % Used |
+------------+-----------+---------+-----------+-----------+--------+
| app/etc    | 184 KiB   | 1.9 GiB | 481.3 MiB | 1.4 GiB   | 24.7%  |
| pub/media  | 128 KiB   |         |           |           |        |
| pub/static | 158.2 MiB |         |           |           |        |
| var        | 316.7 MiB |         |           |           |        |
+------------+-----------+---------+-----------+-----------+--------+
```

## Check dedicated clusters

For Pro Staging and Production environments, you can check disk space usage in each environment using the _disk free_ command, which reports the amount of disk space used by the file system. You must use SSH to log in to a remote environment.

```bash
df -h
```

The `-h` option displays the report using a human-readable format (KB, MB, or GB).

In the following sample response, the `/data/exports/` mount shows the disk space for media and `/data/mysql/` mount shows disk space for the database:

```terminal
Filesystem                                    Size  Used Avail Use% Mounted on
udev                                           16G     0   16G   0% /dev
tmpfs                                         3.2G  9.1M  3.2G   1% /run
/dev/xvda1                                     59G  8.9G   48G  16% /
tmpfs                                          16G   36K   16G   1% /dev/shm
tmpfs                                         5.0M     0  5.0M   0% /run/lock
tmpfs                                          16G     0   16G   0% /sys/fs/cgroup
/dev/xvdj                                     9.8G  2.3G  7.6G  23% /data/mysql
/dev/xvdi                                     9.8G  491M  9.3G   5% /data/exports
192.168.5.5:/shared                           9.8G  591M  9.3G   6% /mnt/shared
/dev/loop0                                     91M   91M     0 100% /app/project
192.168.5.5:/shared/project/var         9.8G  591M  9.3G   6% /app/project/var
192.168.5.5:/shared/project/app/etc     9.8G  591M  9.3G   6% /app/project/app/etc
192.168.5.5:/shared/project/pub/media   9.8G  591M  9.3G   6% /app/project/pub/media
192.168.5.5:/shared/project/pub/static  9.8G  591M  9.3G   6% /app/project/pub/static
```

You can limit the response by specifying a directory. For example:

```bash
df -h var/
```

Sample response:

```terminal
Filesystem                                    Size  Used Avail Use% Mounted on
192.168.5.5:/shared/project/var         9.8G  591M  9.3G   6% /app/project/var
```

## Allocate disk space

Two configuration files control the allocation of disk space in the Cloud environments: the `.magento.app.yaml` file and the `.magento/services.yaml` file. Each file contains the `disk` property, which defines the disk size value in MB for the respective configuration.

{:.bs-callout-info}
You can change disk space allocation on Pro Integration and Starter environments only. You must submit a Magento support ticket to change disk space allocation on Pro Production and Staging environments.

### Application disk space

The `.magento.app.yaml` file controls the [persistent disk space][disk-key] available to the Magento application.

{:.procedure}
To increase disk space for your application:

1. In your local development environment, open the `.magento.app.yaml` configuration file.

1. Set a new value for the `disk` property (in MB).

   ```yaml
   disk: <value-mb>
   ```

1. Save changes in the file.

1. Add, commit, and push your code changes.

   ```bash
   git add -A && git commit -m "Increase disk space for application" && git push magento <branch-name>
   ```

   The changes take effect after you push the updated YAML file to the remote environment.

### Service disk space

The `.magento/services.yaml` file controls the disk space available to each service, such as MySQL and Redis.

{:.procedure}
To increase disk space for a service:

1. In your local development environment, open the `.magento/service.yaml` configuration file.

1. Add or find a service in the file. See [more about configuring services]({{ site.baseurl }}/cloud/project/services.html).

1. Set a new value for the disk property (in MB).

   ```yaml
   <name>:
       type: <service-name>:<service-version>
       disk: <value-mb>
   ```

1. Save changes in the file.

1. Add, commit, and push your code changes.

   ```bash
   git add -A && git commit -m "Increase disk space for service" && git push magento <branch-name>
   ```

   The changes take effect after you push the updated YAML file to the remote environment.

## Monitor disk space

On Pro Production environments, you can monitor disk space and other performance indicators using the Managed alerts for {{ site.data.var.ee }} alert policy for New Relic. For details, see [Monitor performance with Managed Alerts]({{ site.baseurl }}/cloud/project/new-relic.html#monitor-performance-with-managed-alerts).

## No space left

The build cache can grow over time. If you receive a warning that states `No space left on device`, try clearing the build cache and redeploying:

```bash
magento-cloud project:clear-build-cache
```

<!-- link definitions -->

[disk-key]: {{ site.baseurl }}/cloud/project/magento-app-properties.html#disk
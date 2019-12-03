---
group: cloud-guide
title: Manage disk space
functional_areas:
  - Cloud
  - Storage
---
You can find the total storage capacity for your Cloud project in your {{site.data.var.ece}} contract and on your [Magento account page](https://accounts.magento.cloud/user). Each project card in your account shows the number of _environments_, the _storage_ capacity in GB, and the number of _users_.

You can check disk space usage in each environment using the _disk free_ command, which reports the amount of disk space used by the file system. You must use SSH to log in to a remote environment.

```bash
df -h
```

The `-h` option displays the report using a human-readable format (KB, MB, or GB).

Sample response:

```terminal
Filesystem                     Size  Used Avail Use% Mounted on
/dev/loop25                    518M  518M     0 100% /
tmpfs                           12K     0   12K   0% /dev
fake-sysfs                      30G     0   30G   0% /sys
tmpfs                           30G     0   30G   0% /sys/fs/cgroup
tmpfs                          5.0M     0  5.0M   0% /dev/shm
tmpfs                           50M  324K   50M   1% /run
tmpfs                          5.0M     0  5.0M   0% /run/lock
/dev/loop64                    121M  121M     0 100% /app
/dev/mapper/35xdpijwfe         2.0G  1.9G     0 100% /mnt
/dev/mapper/platform-mxeox5xy  8.0G  141M  7.9G   2% /tmp
/dev/mapper/platform-lxc       313G   13G  285G   5% /run/shared
```

You can limit the response by specifying a directory. For example:

```bash
df -h var/
```

Sample response:

```terminal
Filesystem                     Size  Used Avail Use% Mounted on
/dev/mapper/35xdpijwfe         2.0G  1.9G     0 100% /app/var
```

For the database, you can use the {{ site.data.var.ece }} CLI to check approximate disk space usage:

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

## Allocating disk space

Two configuration files control the allocation of disk space in the Cloud environments: the `.magento.app.yaml` file and the `.magento/services.yaml` file. Each file contains the `disk` property, which defines the disk size value in MB for the respective configuration.

{:.bs-callout-info}
You can change disk space allocation on Pro Integration and Starter enviroments only. You must submit a Magento support ticket to change disk space allocation on Pro Production and Staging environments.

### Application disk space

The `.magento.app.yaml` file controls the [persistent disk space]({{page.baseurl}}/cloud/project/project-conf-files_magento-app.html#disk) available to the Magento application.

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

1. Add or find a service in the file. See [more about configuring services]({{page.baseurl}}/cloud/project/project-conf-files_services.html).

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

## Monitoring disk space

On Pro Production environments, you can monitor disk space and other performance indicators using Adobe-generated alert policies for New Relic. For details, see [New Relic]({{ page.baseurl }}/cloud/project/new-relic.html).

## No space left

The build cache can grow over time. If you receive a warning that states `No space left on device`, try clearing the build cache and redeploying:

```bash
magento-cloud project:clear-build-cache
```

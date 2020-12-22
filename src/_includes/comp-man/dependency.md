<div markdown="1">

## Resolve component dependency conflicts

We suggest you try the following solutions in the order shown:

*  [Conflicting dependencies](#trouble-depend-conflict)
*  [File system permissions issues](#trouble-depend-permission)
*  [The Component Dependency Check status never changes](#trouble-depend-state)

### Conflicting dependencies {#trouble-depend-conflict}

The message `We found conflicting component dependencies` displays if Composer cannot determine which components to install or update. To resolve component dependency issues, you should be a technical person who thoroughly understands how Composer works.

Following is a sample failure message:

```terminal
 We found conflicting component dependencies.
 You are trying to update package(s) magento/module-sample-data to 1.0.0-beta
 We've detected conflicts with the following packages:
 - magento/sample-data version 0.74.0-beta15. Please try to update it to one of the following package versions: 0.74.0-beta16, 0.74.0-beta14, 0.74.0-beta13, 0.74.0-beta12, 0.74.0-beta11, 0.74.0-beta10, 0.74.0-beta9, 0.74.0-beta8, 0.74.0-beta7
```

 {:.bs-callout-info}
The message you see will likely be different.

Typically, component dependency conflicts result from someone manually editing the Magento 2 `composer.json` file. It can also be caused by third-party modules that depend on earlier Magento components than the ones you have installed.

In the preceding example, the installed package `magento/sample-data version 0.74.0-beta15` cannot be upgraded to `1.0.0-beta`. However, 0.74.0-beta15 *can* be upgraded to `0.74.0-beta16` (or others).

Edit `composer.json` to make any of these changes and try the readiness check again.

### File system permissions issues {#trouble-depend-permission}

If the Magento file system owner doesn't have permissions to write to directories on the Magento file system, a message similar to the following displays:

```terminal
file_put_contents(/var/www/html/magento2/var/composer_home/cache/repo/https---
packagist.org/provider-doctrine$instantiator.json): failed to open stream: Permission denied
```

Make sure you set file system permissions as discussed in [Overview of ownership and permissions]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).

### The Component Dependency Check status never changes {#trouble-depend-state}

In some cases, the status of the Component Dependency Check doesn't change, even after you try to correct issues. In that case, you can either delete or rename files named `<magento_root>/var/.update_cronjob_status` and `<magento_root>/var/.setup_cronjob_status` and try running the Component Manager again.

Renaming or removing these files forces the Component Manager to run the checks again.

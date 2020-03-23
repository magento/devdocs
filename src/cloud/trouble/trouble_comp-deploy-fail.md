---
group: cloud-guide
title: Component deployment failure
functional_areas:
  - Cloud
  - Deploy
---

This topic discusses how to recover from a failed component deployment. Typical examples include components that have dependencies that are not met by your environment, such as incompatible PHP versions.

You can recover from a failed deployment in any of the following ways:

-  [Restore a snapshot]({{ site.baseurl }}/cloud/project/project-webint-snap.html)
-  Remove the component from the `composer.json` and redeploy the environment

## Clean, remove, and redeploy

To clean up from the previous deployment, you must log in to the remote environment and manually clear the contents of the Magento `var` directory. And then you must remove the component from the `composer.json` file in your local environment and redeploy.

{:.procedure}
To clean the `var` directories:

1. On your local workstation, change to the Cloud project root directory.

1. Use a SSH to log in to the remote environment.

   ```bash
   magento-cloud environment:ssh
   ```

1. Clear the `var` directories.

   ```shell
   rm -rf var/*
   ```

{:.procedure}
To remove the component:

1. On your local workstation, change to the Cloud project root directory.

1. Clear the cache.

   ```bash
   composer clear-cache
   ```

1. Remove the component from the `composer.json` file.

   ```bash
   composer remove <component-name>:<version>
   ```

   If the following message displays, you do not need to do anything further:

   ```terminal
   Package "<name>:<version>" listed for update is not installed. Ignoring.
   ```

1. Wait while the dependencies are updated.

1. Add, commit, and push code changes.

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "<message>"
   ```

   ```bash
   git push origin <environment-ID>
   ```

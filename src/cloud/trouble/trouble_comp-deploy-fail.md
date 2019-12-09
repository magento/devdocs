---
group: cloud-guide
subgroup: 170_trouble
title: Component deployment failure
menu_title: Component deployment failure
menu_order: 15
menu_node:
functional_areas:
  - Cloud
  - Deploy
---

This topic discusses how to recover from a failed component deployment. Typical examples are components that have dependencies that are not met by your environment; for example, incompatible [PHP](https://glossary.magento.com/php) versions.

You can recover from a failed deployment in any of the following ways:

*  [Restore a snapshot]({{ site.baseurl }}/cloud/project/project-webint-snap.html) if you have one
*  Remove the component from your environment's `composer.json` and redeploy the environment

## Remove the component from `composer.json` and redeploy

This section discusses how to remove the component from the root `composer.json` in your environment and redeploy the environment:

## Get started

{% include cloud/cli-get-started.md %}

## Find a component's Composer name

{% include cloud/composer-name.md %}

## Clear `var` directories

To clean up from the previous deployment, you must SSH to the environment and manually clear the contents of the Magento `var` directory.

1. Enter the following command to SSH to the current environment:

   ```bash
   magento-cloud environment:ssh
   ```

1. Clear the `var` directory:

   ```bash
   rm -rf var/*
   ```

## Remove the component

To remove the component:

1. Change to your environment's root directory if you haven't already done so.
1. Enter the following command:

   ```bash
   composer remove <component-name>:<version>
   ```

   If the following message displays, you do not need to do anything further:

   ```terminal
   Package "<name>:<version>" listed for update is not installed. Ignoring.
   ```

1. Wait while dependencies are updated.
1. Enter the following commands in the order shown to commit the changes and deploy the project:

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "<message>"
   ```

   ```bash
   git push origin <environment ID>
   ```

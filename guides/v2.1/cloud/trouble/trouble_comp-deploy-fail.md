---
group: cloud
subgroup: 170_trouble
title: Component deployment failure
menu_title: Component deployment failure
menu_order: 15
menu_node:
version: 2.1
functional_areas:
  - Cloud
  - Deploy
---

This topic discusses how to recover from a failed component deployment. Typical examples are components that have dependencies that are not met by your environment; for example, incompatible {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} versions.

You can recover from a failed deployment in any of the following ways:

*   [Restore a snapshot]({{ page.baseurl }}/cloud/project/project-webint-snap.html) if you have one
*   Remove the component from your environment's `composer.json` and redeploy the environment

## Remove the component from `composer.json` and redeploy

This section discusses how to remove the component from the root `composer.json` in your environment and redeploy the environment:

## Get started

{% include cloud/cli-get-started.md %}

## Find a component's Composer name

{% include cloud/composer-name.md %}

## Clear `var` directories

To clean up from the previous deployment, you must SSH to the environment and manually clear the contents of the Magento `var` directory.

1.	Enter the following command to SSH to the current environment:

		magento-cloud environment:ssh

2.	Clear the `var` directory:

		rm -rf var/*

## Remove the component

To remove the component:

1.  Change to your environment's root directory if you haven't already done so.
3.  Enter the following command:

        composer remove <component-name>:<version>

    If the following message displays, you don't need to do anything further:

    	Package "<name>:<version>" listed for update is not installed. Ignoring.

4.  Wait while dependencies are updated.
5.  Enter the following commands in the order shown to commit the changes and deploy the project:

        git add -A
        git commit -m "<message>"
        git push origin <environment ID>


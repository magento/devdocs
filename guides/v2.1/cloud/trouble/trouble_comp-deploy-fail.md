---
layout: default
group: cloud
subgroup: 50_trouble
title: Component deployment failure
menu_title: Component deployment failure
menu_order: 50
menu_node: 
github_link21: cloud/trouble/trouble_comp-deploy-fail.md
---

## Component deployment failure
This topic discusses how to recover from a failed component deployment. Typical examples are components that have dependencies that are not met by your environment; for example, incompatible PHP versions.

You can recover from a failed deployment in any of the following ways:

*   [Restore a snapshot]({{ site.gdeurl21 }}cloud/project/project-webint-snap.html) if you have one
*   Remove the component from your environment's `composer.json` and redeploy the environment

### Remove the component from `composer.json` and redeploy
This section discusses how to remove the component from the root `composer.json` in your environment and reploy the environment:

#### Get started

{% collapsible Click to expand/collapse content %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

#### Find a component's Composer name

{% collapsible Click to expand/collapse content %}

{% include cloud/composer-name.md %}

{% endcollapsible %}

#### Remove the component

{% collapsible Click to expand/collapse content %}

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

{% endcollapsible %}

#### Related topics
*	[Manage your projects]({{ site.gdeurl21 }}cloud/project/projects.html)
*	[Manage your environments]({{ site.gdeurl21 }}cloud/env/environments.html)
*	[Tutorials]({{ site.gdeurl21 }}cloud/howtos/how-to.html)

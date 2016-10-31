---
layout: default
group: cloud
subgroup: 15_howto
title: Patch the Magento application
menu_title: Patch the Magento application
menu_order: 4
level3_menu_node: level3child
level3_subgroup: update-magento
menu_node: 
version: 2.0
github_link: cloud/howtos/patch-magento.md
---

## How to patch the Magento application {#cloud-howto-patch}
This topic discusses how to apply patches to your Magento Enterprise Cloud Edition system. There are two types of patches:

*   [General patches](#cloud-patch-gen)

    These patches are provided for all Magento Enterprise Cloud Edition customers in a GitHub repository that's referenced in your `composer.json`. To install general patches, use `composer update`, test your system, and push the patches to the remote server. 

*   [Custom patches](#cloud-patch-custom)

    Custom patches can be provided by Magento to address a specific issue you raised in a Support ticket. Third-party extension developers can also provide a custom patch.

    Copy custom patches to the `m2-hotfixes` directory, then add, commit, and push them to your Cloud integration environment. 

<div class="bs-callout bs-callout-warning">
    <p>Always patch your local system first, then your <a href="{{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int">integration environment</a> system (that is, the remote Cloud server). Resolve any issues before you patch either <a href="{{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage">staging</a> or <a href="{{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod">production</a>.</p>
</div>


## Apply general patches {#cloud-patch-gen}
*General patches* are provided for all Magento Enterprise Cloud Edition customers in a repository referenced in your `composer.json`. To apply these patches, use `composer update`.

The procedure you use is slightly different, depending on the type of environment: [integration]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int), [staging]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage), or [production]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod).

### Get started

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Patch the integration environment

{% collapsible To apply a general patch to an integration environment: %}

1.	On your local system, enter the following command as the [Magento file system owner]({{ page.baseurl}}cloud/before/before-workspace-file-sys-owner.html):

		<Magento root dir>/composer update
2.	Apply the patch:

		git apply vendor/magento/magento-cloud-configuration/patches/<patch file name>
3.	Thoroughly test your local system to make sure the patch doesn't have unexpected side-affects.
4.	After testing the patch, push it to the remote server and deploy it:

		git add -A && git commit -m "Apply patch"
		git push origin <branch name>


{% endcollapsible %}

### Patch the staging or production environment

{% collapsible To apply a general patch to a staging or production environment: %}

1.  Open an SSH connection to your staging or production server:

    *   Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
    *   Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`
2.	Enter the following command:

		<Magento root dir>/composer update
2.	Apply the patch:

		git apply vendor/magento/magento-cloud-configuration/patches/<patch file name>
3.	Thoroughly test your local system to make sure the patch doesn't have unexpected side-affects.
4.	After testing the patch, push it to the remote server and deploy it:

		git add -A && git commit -m "Apply patch"
		git push origin master

{% endcollapsible %}


## Apply custom patches {#cloud-patch-custom}
*Custom patches* are provided to specific customers in a Support ticket. Before you continue, make sure the patch file we provided you is available.

The procedure you use is slightly different, depending on the type of environment: [integration]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int), [staging]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage), or [production]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod).

### Apply a custom patch an integration environment

{% collapsible To apply a custom patch to an integration environment: %}

1.	On your local system, enter the following command as the [Magento file system owner]({{ page.baseurl}}cloud/before/before-workspace-file-sys-owner.html) if you haven't done so already:

		mkdir <Magento root dir>/m2-hotfixes
3.	Copy the patch file to that directory.
2.	Apply the patch:

		git apply <Magento root dir>/m2-hotfixes/<patch file name>
4.	After testing the patch, push it to the remote server and deploy it:

		git add -A && git commit -m "Apply patch"
		git push origin <branch name>

{% endcollapsible %}

### Apply a custom patch to a staging or production environment

{% collapsible To apply a custom patch to a staging or production environment: %}

1.  Open an SSH connection to your staging or production server:

    *   Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
    *   Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`
2.	On your staging or production system, enter the following command if you haven't done so already:

		mkdir <Magento root dir>/m2-hotfixes
3.	Copy the patch file to that directory.
	
	We suggest using the following command:

		rsync -azvP <source> <destination>

	Options:

	`a` archive

	`z` compress

	`v` verbose

	`P` partial progress

	For additional options, see the [rsync man page](http://linux.die.net/man/1/rsync){:target="_blank"}.
2.	Apply the patch:

		git apply <Magento root dir>/m2-hotfixes/<patch file name>
4.	After testing the patch, push it to the remote server and deploy it:

		git add -A && git commit -m "Apply patch"
		git push origin <branch name>

{% endcollapsible %}

#### Related topics
*   [Install components]({{page.baseurl}}cloud/howtos/install-components.html)
*   [Install optional sample data]({{page.baseurl}}cloud/howtos/sample-data.html)
*   [Merge and delete an environment]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html)

---
layout: default
group: cloud
subgroup: 15_howto
title: Test a patch
menu_title: Test a patch
menu_order: 4
level3_menu_node: level3child
level3_subgroup: update-magento
menu_node: 
version: 2.0
github_link: cloud/howtos/patch-magento.md
---

This topic discusses how to test patches to your Magento Enterprise Cloud Edition system locally before you push them to the remote server. We strongly recommend you test patches locally so you can identify any issues.

There are two types of patches:

*   [General patches](#cloud-patch-gen)

    These patches are provided for all Magento Enterprise Cloud Edition customers in a GitHub repository that's referenced in your `composer.json`. We apply these patches automatically during the build phase.

    To install general patches, use `composer update`, test your system, and push the patches to the remote server. 

*   [Custom patches](#cloud-patch-custom)

    Custom patches can be provided by Magento to address a specific issue you raised in a Support ticket. Third-party extension developers can also provide a custom patch.

    Copy custom patches to the `m2-hotfixes` directory and test them on your locally. After successfully testing them, push the patches to the remote server. 

<div class="bs-callout bs-callout-warning" markdown="1">
Always test a patch your local system, then your [integration environment]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int) system (that is, the remote Cloud server). Resolve any issues before you patch either [staging]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage) or [production]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod).
</div>

## Test general patches {#cloud-patch-gen}
*General patches* are provided for all Magento Enterprise Cloud Edition customers in a repository referenced in your `composer.json`. We apply patches automatically during the build phase when a patch is available. The procedure discussed in this section enables to you test a patch locally anytime you choose.

The procedure you use is slightly different, depending on the type of environment: [integration]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int), [staging]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage), or [production]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod).

{% collapsibleh3 Get started %}
We recommend you test a patch in the `master` branch.

{% include cloud/cli-get-started.md %}

{% endcollapsibleh3 %}

{% collapsibleh3 Test a general patch on your local system %}

To test a general patch on your local system:

1.	On your local system, enter the following commands as the [Magento file system owner]({{ page.baseurl}}cloud/before/before-workspace-file-sys-owner.html):

		cd <project root dir>
		magento-cloud environment:checkout master
		git pull origin master
		composer update
2.	Apply the patch locally:

		git apply vendor/magento/magento-cloud-configuration/patches/<patch file name>
3.	Clean the Magento cache:

		php <Magento project root dir>/bin/magento cache:clean

	You can also clean the cache using the [Magento Admin](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html){:target="_blank"}.
4.	Thoroughly test your local system to make sure the patch doesn't have unexpected side-affects.
5.	After testing the patch, push it to the remote server and deploy it:

		git add -A && git commit -m "Apply patch"
		git push origin <branch name>

{% endcollapsibleh3 %}

{% collapsibleh3 Push a general patch to the staging or production environment %}
After you've successfully tested a patch locally and on your integration environment, you can push the patch to staging or production as follows:

1.  Open an SSH connection to your staging or production server:

    *   Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
    *   Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`
2.	Enter the following commands:

		<Magento project root dir>/composer update
2.	Apply the patch locally:

		git apply vendor/magento/magento-cloud-configuration/patches/<patch file name>
3.	Clean the Magento cache:

		php <Magento project root dir>/bin/magento cache:clean

	You can also clean the cache using the [Magento Admin](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html){:target="_blank"}.
3.	Thoroughly test your local system to make sure the patch doesn't have unexpected side-affects.
4.	After testing the patch, push it to the remote server and deploy it:

		git add -A && git commit -m "Apply patch"
		git push origin master

{% endcollapsibleh3 %}

## Test custom patches {#cloud-patch-custom}
*Custom patches* are provided to specific customers in a Support ticket. Before you continue, make sure the patch file we provided you is available.

The procedure you use is slightly different, depending on the type of environment: [integration]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int), [staging]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage), or [production]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod).

{% collapsibleh3 Get started %}
We recommend you test a patch locally in the `master` branch.

{% include cloud/cli-get-started.md %}

{% endcollapsibleh3 %}

{% collapsibleh3 Test a custom patch on your local system %}

To test a custom patch on your local system:

1.	On your local system, enter the following command as the [Magento file system owner]({{ page.baseurl}}cloud/before/before-workspace-file-sys-owner.html) if you haven't done so already:

		mkdir <Magento project root dir>/m2-hotfixes
3.	Copy the patch file to that directory.
2.	Apply the patch locally:

		cd <Magento project root dir>
		magento-cloud environment:checkout master
		git pull origin master
		git apply <Magento project root dir>/m2-hotfixes/<patch file name>
3.	Clean the Magento cache:

		php <Magento project root dir>/bin/magento cache:clean

	You can also clean the cache using the [Magento Admin](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html){:target="_blank"}.
4.	After testing the patch, push it to the remote server and deploy it:

		git add -A && git commit -m "Apply patch"
		git push origin <branch name>

{% endcollapsibleh3 %}

{% collapsibleh3 Push a custom patch to a staging or production environment %}

After you've successfully tested a custom patch locally and on your integration environment, you can push the patch to staging or production as follows:

1.  Open an SSH connection to your staging or production server:

    *   Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
    *   Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`
2.	On your staging or production system, enter the following command if you haven't done so already:

		mkdir <Magento project root dir>/m2-hotfixes
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

		git apply <Magento project root dir>/m2-hotfixes/<patch file name>
3.	Clean the Magento cache:

		php <Magento project root dir>/bin/magento cache:clean
		
	You can also clean the cache using the [Magento Admin](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html){:target="_blank"}.
4.	After testing the patch, push it to the remote server and deploy it:

		git add -A && git commit -m "Apply patch"
		git push origin <branch name>

{% endcollapsibleh3 %}

#### Related topics
*   [Install components]({{page.baseurl}}cloud/howtos/install-components.html)
*   [Install optional sample data]({{page.baseurl}}cloud/howtos/sample-data.html)
*   [Merge and delete an environment]({{page.baseurl}}cloud/howtos/environment-tutorial-env-merge.html)

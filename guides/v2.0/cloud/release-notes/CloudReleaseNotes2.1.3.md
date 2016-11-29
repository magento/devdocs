---
layout: default
group: cloud
subgroup: 03_ReleaseNotes
title: Magento Enterprise Cloud Edition 2.1.2 and 2.0.10 Release Notes
menu_title: Magento Enterprise Cloud Edition 2.1.2 and 2.0.10 Release Notes
menu_order: 2
menu_node: 
version: 2.1
github_link: cloud/CloudReleaseNotes2.1.3.md
---

## Magento Enterprise Cloud Edition 2.1.3 and 2.0.11 Release Notes
{:.no_toc}

### Required update to `.magento.app.yaml`
Before you [upgrade]({{ page.baseurl }}cloud/howtos/upgrade-magento.html) to version 2.1.3 or 2.0.11, you must add a rule to the `web` section of your `.magento.app.yaml` file. You must make the change in your local system, push it to your [integration server]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int), then, after upgrading, push the changes to [staging]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage) and [production]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod).

#### Get started

{% include cloud/get-started-cli.md %}

#### Update `.magento.app.yaml`

{% collapsible To update `.magento.app.yaml`: %}

1.	Open `<Magento root dir>/.magento.app.yaml` in a text editor.
2.	Locate the `web:` section.
3.	Add the following to the `rules:` clause:

		^/static/version\d+/(?<resource>.*)$:
             passthru: "/static/$resource"
4.	Save your changes to `.magento.app.yaml` and exit the text editor.
5.	Enter the following commands to push the changes and redeploy:

		git add -A && git commit -m "Update .magento.app.yaml"
		git push origin <branch name>
6.	Wait for the project to deploy.
7.	[Upgrade]({{ page.baseurl }}cloud/howtos/upgrade-magento.html) to version 2.1.3 or 2.0.11.
8.	Test the upgrade thoroughly in your integration environment.
9.	If tests are successful, push the changes to your staging or production server.


{% endcollapsible %}

### Changes
TBD


### Functional fixes and enhancements
TBD


### Known issues
Is this fixed? TBD

Note the following issue in this release:

The `magento setup:install` command (used for deployment) fails in either a staging or production environment if a Magento database already exists in the following scenario:

*   You installed or updated a component in your integration environment that modifies the database (especially if the component adds tables).
*   Your staging or production environment has an existing database.

This is a known issue with Magento core software; we're actively working to address this issue. If you encounter this issue, contact Magento Enterprise Cloud Edition Support:

1.  Log in to your Magento Cloud account.
2.  Click **Support** > **Submit ticket** from the top menu.
3.  Follow the prompts to open an issue with Support.

<div class="bs-callout bs-callout-warning">
    <p>This issue affects staging and production environments only. There are no issues in an integration environment. For a discussion of these terms, see <a href="{{ page.baseurl }}cloud/discover-arch.html#cloud-arch.html">Architecture</a>.</p>
</div>

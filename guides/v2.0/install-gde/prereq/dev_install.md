---
group: installation-guide
subgroup: T_Developer
title: (Contributor) Clone the Magento repository
menu_title: (Contributor) Clone the Magento repository
menu_order: 1
menu_node: parent
redirect_from:
  - /guides/v2.0/install-gde/install/composer-clone.html
  - /guides/v2.0/install-gde/prereq/composer.html
functional_areas:
  - Install
  - System
  - Setup
---

{: .bs-callout .bs-callout-tip }
Totally lost? Need a helping hand? Try our [installation quick reference (tutorial)]({{ page.baseurl }}/install-gde/install-quick-ref.html) or [installation roadmap (reference)]({{ page.baseurl }}/install-gde/install-roadmap_part1.html).

## Intended audience {#integrator-aud}

The audience for this topic is anyone who contributes to the {{site.data.var.ce}} codebase. You should be highly technical, understand {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} and Git commands, and be able to upgrade the Magento system software and extensions using those commands. If that isn't you, go back and <a href="{{ page.baseurl }}/install-gde/bk-install-guide.html">choose another starting point</a>.

{: .bs-callout .bs-callout-warning }
If you clone the Magento 2 GitHub repository, you _cannot_ use the Magento software in a production environment. You cannot have a live store that accepts orders and so on.

## Prerequisites
{% include install/prereq.md %}

{% include install/composer-overview.md %}

## Install Composer {#instgde-prereq-compose-install}
{% include install/composer-clone.md %}

## Clone the Magento repository   {#instgde-prereq-compose-clone}

This section discusses how to get current code by cloning the Magento GitHub's develop branch. You can clone either a release branch or the `develop` branch:

*	Release branches like `2.1.0` are more stable

	You *must* use a released branch with the <a href="{{ page.baseurl }}/migration/bk-migration-guide.html">Data Migration Tool</a>.
*	`develop` is more recent

Currently, the `develop` branch is the default but you can checkout a release branch like `2.1.0` after cloning.

## Create a Composer authentication file {#instgde-prereq-compose-clone-auth}

{% include install/auth-json.md %}

## How to clone the Magento 2 GitHub repository {#instgde-prereq-compose-clone-ways}

You can clone the Magento 2 GitHub repository using either SSH or HTTPS protocols:

*	Use SSH for better security (no username and password are exchanged). This requires you to <a href="https://help.github.com/articles/generating-ssh-keys/" target="_blank">share a public key</a> with GitHub.
*	Use HTTPS if you don't share an SSH key with GitHub (your username and password are encrypted before being sent to GitHub).

See one of the following section:

*	<a href="#instgde-prereq-compose-clone-ssh">Clone with SSH</a>
*	<a href="#instgde-prereq-compose-clone-https">Clone with HTTPS</a>

### Clone with SSH {#instgde-prereq-compose-clone-ssh}

To clone the Magento GitHub repository using the SSH protocol:

1.	Copy to the clipboard the Magento GitHub repository SSH clone {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %}.

	a.	In a web browser, go to <a href="https://github.com/magento/magento2" target="_blank">the Magento GitHub repository</a>.

	b.	On the right side of the page, under the *clone URL* field, click **SSH**.

	c.	Click the **Copy to clipboard** button.

	The following figure shows an example.

	<p><img src="{{ site.baseurl }}/common/images/install_mage2_clone-ssh.png" width="650px" alt="Clone the Magento GitHub repository using SSH"></p>

1.	Change to your web server's docroot directory.
	Typically, for Ubuntu, it's `/var/www` or `/var/www/html` and for CentOS it's `/var/www/html`.

	Need help locating the docroot? Click <a href="{{ page.baseurl }}/install-gde/basics/basics_docroot.html">here.

2.	Enter `git clone` and paste the value you obtained from step 1.

	An example follows:

		git clone git@github.com:magento/magento2.git

3.	Wait for the repository to clone on your server.

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
	If the following error displays, make sure you [shared your SSH key](https://help.github.com/articles/generating-ssh-keys/){: target="_blank"} with GitHub:
	```terminal
	Cloning into 'magento2'...
	Permission denied (publickey).
	fatal: The remote end hung up unexpectedly
	```
	</div>
4.	Optionally switch to a <a href="https://github.com/magento/magento2/tags" target="_blank">release tag</a> as follows:

		git checkout tags/<tag name> [-b <version>]

	For example, to check out the 2.1.0 release tag in a new branch named `2.1.0`, enter

		git checkout tags/2.1.0 -b 2.1.0

4.	Continue with <a href="{{ page.baseurl }}/install-gde/install/prepare-install.html">Update installation dependencies</a>.

### Clone with HTTPS   {#instgde-prereq-compose-clone-https}

To clone the Magento GitHub repository using the HTTPS protocol:

1.	Copy to the clipboard the Magento GitHub repository HTTPS clone URL.

	a.	In a web browser, go to <a href="https://github.com/magento/magento2" target="_blank">the Magento GitHub repository</a>.

	b.	On the right side of the page, under the *clone URL* field, click **HTTPS**.

	c.	Click the **Copy to clipboard** button.

	The following figure shows an example.

	<p><img src="{{ site.baseurl }}/common/images/install_mage2_clone-https.png" alt="Clone the Magento GitHub repository using HTTPS"></p>

1.	Change to your web server's docroot directory.

	Typically, for Ubuntu, it's `/var/www` or `/var/www/html` and for CentOS it's `/var/www/html`.

2.	Enter `git clone` and paste the value you obtained from step 1.

	An example follows

		git clone https://github.com/magento/magento2.git
3.	Wait for the repository to clone on your server.

4.	Optionally switch to a <a href="https://github.com/magento/magento2/tags" target="_blank">release tag</a> as follows:

		git checkout tags/<tag name> [-b <version>]

	For example, to check out the 2.1.0 release tag in a branch named `2.1.0`, enter

		git checkout tags/2.1.0 -b 2.1.0

## Next step

After completing the tasks discussed on this page, see <a href="{{ page.baseurl }}/install-gde/install/prepare-install.html">Update installation dependencies</a>.



<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase

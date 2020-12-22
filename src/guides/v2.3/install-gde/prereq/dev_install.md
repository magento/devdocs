---
group: installation-guide
title: (Contributor) Clone the Magento repository
functional_areas:
  - Install
  - System
  - Setup
---

{:.bs-callout-tip}
Totally lost? Need a helping hand? Try our [installation quick reference (tutorial)]({{ page.baseurl }}/install-gde/install-quick-ref.html) or [installation roadmap (reference)]({{ page.baseurl }}/install-gde/install-roadmap_part1.html).

## Intended audience {#integrator-aud}

The audience for this topic is anyone who contributes to the {{site.data.var.ce}} codebase.
You should be highly technical, understand [Composer](https://glossary.magento.com/composer) and Git commands, and be able to upgrade the Magento system software and extensions using those commands. If that isn't you, go back and [choose another starting point]({{ page.baseurl }}/install-gde/bk-install-guide.html).

{:.bs-callout-warning}
If you clone the Magento 2 GitHub repository, you _cannot_ use the Magento software in a production environment.
You cannot have a live store that accepts orders and so on.

## Prerequisites

{% include install/prereq.md %}

{% include install/composer-overview.md %}

{% include install/web/deprecated.md %}

## Install Composer {#instgde-prereq-compose-install}

{% include install/composer-clone.md %}

## Clone the Magento repository {#instgde-prereq-compose-clone}

This section discusses how to get current code by cloning [Magento's GitHub repository][]{:target="_blank"} and checking out branches.
You can either checkout a release branch or a development branch:

*  Release branches, like `2.x.0`, are more stable. You _must_ use a release branch with the [Data Migration Tool][].

*  Development branches, like `2.x-develop`, contain the latest changes.

You can checkout a specific release branch after cloning the latest code.

{:.bs-callout-info}
Refer to [GitHub's documentation][]{:target="_blank"} for instructions on cloning a repository.

### Creating an authorization file {#instgde-prereq-compose-clone-auth}

The Magento 2 GitHub repository requires you to authenticate. The `composer install` commands fails if you do not.

#### Generate Magento and Github keys

To authenticate, you will need to generate [Magento authentication keys][] and a [Github personal access token][].

#### Create `auth.json`

{% include install/auth-json.md %}

{:.ref-header}
Related topics

After completing the tasks discussed on this page, see [Update installation dependencies][].

<!-- LINK DEFINITIONS -->

[Github personal access token]: https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
[Magento's GitHub repository]: https://github.com/magento/magento2
[Data Migration Tool]: {{page.baseurl}}/migration/bk-migration-guide.html
[GitHub's documentation]: https://help.github.com/articles/cloning-a-repository-from-github/
[Magento authentication keys]: {{ page.baseurl }}/install-gde/prereq/connect-auth.html
[Update installation dependencies]: {{page.baseurl}}/install-gde/install/prepare-install.html
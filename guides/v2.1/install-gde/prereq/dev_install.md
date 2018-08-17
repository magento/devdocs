---
group: install_pre
title: (Contributor) Clone the Magento repository
version: 2.1
redirect_from:
  - /guides/v1.0/install-gde/install/composer-clone.html
  - /guides/v2.0/install-gde/install/composer-clone.html
  - /guides/v2.0/install-gde/prereq/composer.html
functional_areas:
  - Install
  - System
  - Setup
---

{:.bs-callout .bs-callout-tip}
Totally lost? Need a helping hand? Try our [installation quick reference (tutorial)]({{ page.baseurl }}/install-gde/install-quick-ref.html) or [installation roadmap (reference)]({{ page.baseurl }}/install-gde/install-roadmap_part1.html).

## Intended audience {#integrator-aud}

The audience for this topic is anyone who contributes to the {{site.data.var.ce}} codebase. You should be highly technical, understand {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} and Git commands, and be able to upgrade the Magento system software and extensions using those commands. If that isn't you, go back and [choose another starting point]({{ page.baseurl }}/install-gde/bk-install-guide.html).

{:.bs-callout .bs-callout-warning}
If you clone the Magento 2 GitHub repository, you _cannot_ use the Magento software in a production environment. You cannot have a live store that accepts orders and so on.

## Prerequisites
{% include install/prereq.md %}

{% include install/composer-overview.md %}

## Install Composer {#instgde-prereq-compose-install}
{% include install/composer-clone.md %}

## Clone the Magento repository {#instgde-prereq-compose-clone}

This section discusses how to get current code by cloning [Magento's GitHub repository](https://github.com/magento/magento2){:target="\_blank"} and checking out branches. You can either checkout a release branch or a development branch:

*	Release branches, like `2.1.0`, are more stable. You _must_ use a release branch with the [Data Migration Tool]({{page.baseurl}}/migration/bk-migration-guide.html).

*	Development branches, like `2.2-develop`, contain the latest changes.

Currently, the `2.2-develop` branch is the default, but you can checkout a release branch, like `2.1.0`, after cloning.

{:.bs-callout .bs-callout-info}
Refer to [GitHub's documentation](https://help.github.com/articles/cloning-a-repository-from-github/){:target="\_blank"} for instructions on cloning a repository.

### Creating an authorization file {#instgde-prereq-compose-clone-auth}

The Magento 2 GitHub repository requires you to authenticate. The `composer install` commands fails if you do not. To authenticate, [generate authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html), after which you create an `auth.json` file in the home directory of the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.

#### Create `auth.json`
{% include install/auth-json.md %}

#### Next step

After completing the tasks discussed on this page, see [Update installation dependencies]({{page.baseurl}}/install-gde/install/prepare-install.html).

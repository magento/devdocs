---
title: Contributor install
functional_areas:
  - Install
  - System
  - Setup
redirect_to: https://developer.adobe.com/commerce/contributor/guides/install/
layout: migrated
---

If you are a code or documentation contributor, this install guide is for you! Use Composer to install Magento, then switch over to a released version and update any installation dependencies.

{:.bs-callout-tip}
Are you a non-contributor? Check out our [Quick start install]({{ page.baseurl }}/install-gde/composer.html) guide. Do you have more advanced install problems to solve? Check out our [Advanced install]({{ page.baseurl }}/install-gde/install/cli/install-cli.html) guide.

## Intended audience {#integrator-aud}

The audience for this topic is anyone who contributes to the {{site.data.var.ce}} codebase.
You should be highly technical, understand [Composer](https://glossary.magento.com/composer) and Git commands, and be able to upgrade the Magento system software and extensions using those commands. If that isn't you, go back and [choose another starting point]({{ page.baseurl }}/install-gde/bk-install-guide.html).

{:.bs-callout-warning}
If you clone the Magento 2 GitHub repository, you _cannot_ use the Magento software in a production environment.
You cannot have a live store that accepts orders and so on.

## Prerequisites

{% include install/prereq.md %}

{% include install/composer-overview.md %}
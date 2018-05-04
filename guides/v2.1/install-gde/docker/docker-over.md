---
layout: default
group: install-dock
subgroup: 01_over
title: DevBox (Beta) quick installation overview
menu_title: DevBox (Beta) quick installation overview
landing-page: DevBox Quick Installation (Beta)
menu_node: parent
menu_order: 1
version: 2.1
github_link: install-gde/docker/docker-over.md
functional_areas:
  - Install
  - System
  - Setup
---

{% include install/docker/deprecated-note.html %}

The Magento DevBox is the simplest way yet to install a Magento development system. DevBox puts the Magento application in a [Docker](https://www.docker.com){:target="_blank"} container but all _you_ have to do to set it up is run a script. No more installing an operating system, web server, PHP, and so on.

DevBox is primarily intended for developers but anyone can use it, whether you're a Magento newbie or just want to check out the Magento application. You should _not_ use Magento DevBox in production.

Magento's DevBox installation is a step-by-step wizard that enables you to download a personalized script that sets up Magento DevBox on your machine. The script either installs the Magento software in a {% glossarytooltip 57f1b0dc-1341-466d-a685-e0dbf5a3b713 %}Docker{% endglossarytooltip %} container or creates a shared file system between existing Magento code and a Docker container.

A new installation or using an existing Magento installation takes about 15 minutes.

Optional sample data takes a few additional minutes.

## Get Magento DevBox now
<div class="bs-callout bs-callout-info" id="info" markdown="1">
*   Magento DevBox should be used in development only. (You should _not_ use it in production.)
*   Magento DevBox is Beta software. Report any issues on the [DevBox GitHub repository](https://github.com/magento/magento2devbox-web/issues){:target="_blank"}.
</div>

#### Next steps
*   [DevBox (Beta) reference]({{ page.baseurl}}/install-gde/docker/docker-ref.html)
*   [Troubleshoot issues with Magento DevBox]({{ page.baseurl}}/install-gde/docker/docker-trouble.html)

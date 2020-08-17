---
group: cloud-guide
title: Cloud Docker development
functional_areas:
  - Cloud
  - Configuration
---

{{site.data.var.mcd-prod}} provides an option to deploy {{site.data.var.ee}} to a Docker environment for development, test, and automation tasks.

## Features

-  **Cross-platform support**—Supports Linux, macOS and Windows with WSL2
-  **Magento Cloud emulation**-Provides a Cloud-like deployment pipeline and filesystem to test code locally before deploying your {{ site.data.var.ece }} project to Staging or Production servers
-  **Multiple sync options**-Provides three file synchronization options (native, mutagen and docker-sync) for best performance in the Docker environment
-  **Extensibility**-Use standard Docker configuration file to extend and customize your development environment

## Host Operating Systems

The {{ site.data.var.mcd-prod }} environment supports Linux, macOS, and Windows operating systems. The containers can run on any Docker host, but some setup scripts require you to install PHP and Composer.

TBD

[config docker]: {{site.baseurl}}/cloud/docker/docker-config.html

---
group: cloud-guide
title: Cloud Docker development
functional_areas:
  - Cloud
  - Docker
  - Configuration
  - Introduction
  - Overview
---

{{site.data.var.mcd-prod}} provides an option to deploy {{site.data.var.ee}} to a Docker environment for development, test, and automation tasks.

## Features

-  **Cross-platform support**—Supports Linux, macOS and Windows with WSL2
-  **Magento Cloud emulation**-Provides a Cloud-like deployment pipeline and FS permission to test the code locally before pushing to the Magento Cloud
-  **Multiple sync options**-Provides 3 synchronization options(native, mutagen and docker-sync) for best performance
-  **Extensibility**-Easy extendable with standard Docker configuration files

## Host Operating Systems

The Cloud Docker environment supports Linux, macOS, and Windows operating systems. The containers should run on any Docker host, but some of the set up scripts require you to install PHP and Composer.

TBD

[config docker]: {{site.baseurl}}/cloud/docker/docker-config.html

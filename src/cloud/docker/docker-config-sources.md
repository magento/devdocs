---
group: cloud-guide
title: Configure Docker environment
functional_areas:
  - Cloud
  - Setup
  - Configuration
redirect_from:
  - /cloud/reference/docker-config.html
---

Magento Cloud Docker supports both Magento Cloud installation and standalone installation.
This results in different configuration sources set.

TBD: CONFIG PREFERENCE LEFT TO RIGHT

CLI -> Universal config -> Magento Cloud

## Magento Cloud configuration

If you have Magento Cloud and would like to emulate the environment - make sure you have next files:

-  `.magento.app.yaml`
-  `.magento/services.yaml`

## Unified configuration

If you do not have Magento Cloud confgiuration files or don't want to use them - Magento Cloud Docker supports unified configuration file.

## CLI configuration

The CLI configuration is the quickest way to change some settings of desired enviroenmnt.

---
layout: default
group: cloud
title: Configuration wizard
version: 2.1
github_link: cloud/env/config-wizard.md
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The configuration wizard assists in determining if your configuration follows best practices by verifying the following:

-  Use the `.magento.env.yaml` file
-  Enabled SCD for the build stage
-  Enabled SCD for the deploy stage
-  Enabled SCD on-demand
-  Enabled the master-slave connections for database and Redis service configuration

Each of the wizard commands provides a verification response and, if applicable, a recommendation for the proper configuration.

Command | Description
`wizard:scd-on-demand` | Check if the `SCD_ON_DEMAND` global environment variable is set to `true`
`wizard:scd-on-build ` | Indicates whether SCD is enabled for the build stage
`wizard:scd-on-deploy` | Check if SCD  is enabled for the deploy stage

For example, to verify you 
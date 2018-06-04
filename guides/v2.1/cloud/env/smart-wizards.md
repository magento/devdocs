---
group: cloud
title: Smart wizards
version: 2.1
github_link: cloud/env/smart-wizards.md
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The smart wizards can assist you in determining if your Cloud configuration follows best practices by verifying the following:

-  Enabled SCD on-demand
-  Enabled SCD for the build stage
-  Enabled SCD for the deploy stage
<!-- -  Enabled the master-slave connections for database and Redis service configuration -->

Each of the smart wizard commands provides a verification response and, if applicable, a recommendation for the proper configuration.

Command | Description
------- | -----------
`wizard:scd-on-demand` | Check if the `SCD_ON_DEMAND` global environment variable is set to `true`.
`wizard:scd-on-build ` | Check if the `SCD_ON_DEMAND` global environment variable is set to `false` and the `SKIP_SCD` environment variable is set to `false` for the build stage. Verifies the `config.php` file contains information for stores, store groups, and websites.
`wizard:scd-on-deploy` | Check if the `SCD_ON_DEMAND` global environment variable is set to `false` and the `SKIP_SCD` environment variable is set to `false` for the deploy stage. Verifies the `config.php` file does _NOT_ contain the list of stores, store groups, and websites with related information.

For example, to verify your configuration properly enables the SCD on-demand feature:

```bash
./vendor/bin/ece-tools wizard:scd-on-demand
```

A successful configuration returns:
```
SCD on demand is enabled
```

A failed configuration returns:

```
SCD on demand is disabled
```

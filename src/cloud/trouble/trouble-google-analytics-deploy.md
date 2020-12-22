---
group: cloud-guide
title: Resolve issues with Google Analytics during deployment
functional_areas:
  - Cloud
  - Configuration
  - Services
---

## Resolve issues with Google Analytics during deployment

This topic discusses solutions to typical issues you might experience with Google Analytics during deployments from Integration to Staging to Production.

### Google Analytics disables when deployed

When deploying your code across environments, the build and deploy scripts verify the `master` branch is deployed to keep Google Analytics enabled. When deploying develop (or child) branches of master to developer environments (Integration), the deploy script disables Google Analytics. This is a working as intended feature to ensure developer data and interactions are not sent to or tracked by Google Analytics.

For technical details, the deploy script checks the `MAGENTO_CLOUD_ENVIRONMENT` variable for the string branch name of `master` (case sensitive comparison) defined for `GIT_MASTER_BRANCH`. This variables cannot be directly modified. If the deploy script verifies the deployed branch is Master, Google Analytics remains enabled. If a different branch is deployed (not Master), the deploy script will disable Google Analytics.

To always have Google Analytics enabled in Production, always deploy from the Master branch.

As a best practice, we recommend deploying from Master branch to your Production environment.

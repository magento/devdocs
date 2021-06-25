---
group: cloud-guide
subgroup: 160_deploy
title: Continuous integration
menu_title: Continuous integration
menu_order: 15
menu_node:
functional_areas:
  - Cloud
  - Deploy
---

Following your branching and development methodologies, you can easily develop new features, configure changes, and add extensions to continuously develop and deploy updates.

Both Starter and Pro plan environments support continuous integration for constant updates. This workflow supports releases multiple times a day or on a set schedule according to your business needs.

*  Create development branches with future features and changes
*  Test the code in your development environments
*  Deploy and test in Staging
*  Deploy to Production

We recommend the following best practices for {{site.data.var.ece}} environments.

## Development best practices

*  Keep your branches updated with the latest code for all developers to access and pull
*  Maintain commit comments to share with your developers and track branch work
*  Keep Staging as close to Production as possible with configurations, code, services, and data
*  Do not overfill a branch of development work, keep it streamlined to carefully implement and test code, extensions, etc
*  Keep track of the order you follow for adding extensions to your code. Some extensions require very specific installation orders.
*  Do not push all of your extensions at once into Staging and Production. Add, push, and test extensions in groups to ensure they are stable.
*  Use Magento Configuration Management to ensure configuration consistency

## Deployment best practices

*  Fully deploy the base {{site.data.var.ece}} site initially to ensure all environments are stable with Magento installed. Some extensions will throw errors during build and deploy if they are added during an install. These work best during an update.
*  Run a local build prior to fully deploying
*  Ensure all files are correctly added to the Git branch before pushing

## Testing best practices

*  Fully test Administrator and customer features in your code. Your staff may encounter issues, for example when refunding an order or sending notifications.
*  Heavily test extensions with the correct credentials per environment
*  Perform all Fastly tests against Staging and Production

## Data best practices

*  Create a backup of your database and snapshot on a schedule or before pushing major updates. We provide snapshots of the Pro Production environment according to a [progressive schedule]({{ site.baseurl }}/cloud/architecture/pro-architecture.html#backup-and-disaster-recovery), but you may need to backup your Staging environment for constant iterations.
*  Pull a data dump of your Production data into the Staging environment for extensive testing
*  Consider running scripts or pulling only specific tables to sanitize customer data from non-Production environments Staging

---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce (Cloud) 2.1.2 and 2.0.10 Release Notes
menu_title: Magento Commerce (Cloud) 2.1.2 and 2.0.10 Release Notes
menu_order: 388
menu_node:
level3_menu_node: level3child
level3_subgroup: mccloud-relnotes
functional_areas:
  - Cloud
---

### Changes in this release

We made the following change in this release:

* Added a new environment variable, `UPDATE_URLS`, which if set to `enabled` causes Magento base URLs in the database with to be replaced with Cloud project URLs. By default, `UPDATE_URLS` is set to `enabled`. This is useful for local development, where base URLs are set up for your local environment. When you deploy to a Cloud environment, we change the URLs so you can access your storefront and Magento Admin using project URLs. You should set this variable to `disabled` *only* in staging or production, where the base URLs can't change.
* Staging and Production environments in the UI for Pro projects. You can enter a ticket to have your project updated. For more information, see [Add Staging and Production to Pro projects UI]({{ page.baseurl }}/cloud/trouble/pro-env-management.html).

### Functional fixes and enhancements

We made the following fixes in this release:

* Improved the performance of static file deployment.
*	You can now upgrade to version 2.1.2 if you enabled [static file signatures](http://docs.magento.com/m2/ee/user_guide/system/static-file-signature.html).
*   You no longer need a `pub/front-static.php` in your template.
*   We now back up `env.php` before disabling the Redis cache during deployment.
*   Patches are now applied in alphabetical order.
* Staging and Production environments in the UI for Pro projects. Starting October 23, 2017, all projects created using the free 30-day trial or provisioned for new accounts includes Staging and Production environments in the Project Web Interface. Existing accounts created before October 23, 2017 can enter a ticket to be updated. For more information, see [Add Staging and Production to Pro projects UI]({{ page.baseurl }}/cloud/trouble/pro-env-management.html).

### Known issues

Note the following issue in this release:

The `magento setup:install` command (used for deployment) fails in either a staging or production environment if a Magento database already exists in the following scenario:

*   You installed or updated a component in your integration environment that modifies the database (especially if the component adds tables).
*   Your staging or production environment has an existing database.

This is a known issue with Magento core software; we're actively working to address this issue. If you encounter this issue, contact Magento Enterprise Cloud Edition Support:

1.  Log in to your Magento Cloud account.
2.  Click **Support** > **Submit ticket** from the top menu.
3.  Follow the prompts to open an issue with Support.

{: .bs-callout .bs-callout-warning}
This issue affects Staging and Production environments only. There are no issues in an Integration environment. For a discussion of these terms, see [Architecture]({{ page.baseurl }}/cloud/reference/discover-arch.html).

### {{site.data.var.ee}} Release Notes

*	[{{site.data.var.ee}} 2.1.2 Release Notes]({{ site.gdeurl21 }}release-notes/ReleaseNotes2.1.2EE.html)

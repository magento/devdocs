---
group: cloud-guide
title: ADMIN variables
functional_areas:
  - Cloud
  - Configuration
---

Users that have administrative access to the {{site.data.var.ece}} project can use the
following project environment variables to override the configuration settings
for the administrative user account to access the Admin UI. See [Change the Magento ADMIN variables]({{ page.baseurl }}/cloud/before/before-setup-env-2_clone.html#change-the-magento-admin-variables).


| Variable        | Description                                                                                                                                                                                                                                                                                            |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ADMIN credentials| `ADMIN_USERNAME`—A username for the administrative user with the ability to create other users, including administrative users. During initial project provisioning, the username defaults to the {{ site.data.var.ece }} License Owner email address. You can use the default value, or change it to a secure username.<br><br>`ADMIN_EMAIL`—Email address for the administrative user. This value is required for upgrading and patching {{site.data.var.ece}} and is used to send password reset emails.<br><br>`ADMIN_PASSWORD`—Password for the administrative user. When the project is created a random password is generated and an email is sent to the {{ site.data.var.ece }} License Owner. During project creation, the License Owner should have already changed the password. You might need to contact the License Owner for the updated password.|
| `ADMIN_LOCALE`    | Default—`en_US` Specifies the default locale used by the Magento Admin.|
| `ADMIN_URL`       | The relative URL to access the Admin panel. For example: `/admin`. For security reasons, we recommend you choose a value other than `admin`,`backend`, or another term that is easy to guess.|                              |
{:style="table-layout:auto;"}


{:.bs-callout .bs-callout-info}
The values for the `ADMIN_EMAIL`, `ADMIN_USERNAME`, and `ADMIN_PASSWORD` variables are used only for installation. These values are ignored on upgrades.
---
group: cloud-guide
title: ADMIN variables
functional_areas:
  - Cloud
  - Configuration
---

Users that have administrative access to the {{site.data.var.ece}} project can use the following project environment variables to override the configuration settings for the administrative user account to access the Admin UI. See [Change the Magento ADMIN variables]({{ page.baseurl }}/cloud/before/before-setup-env-2_clone.html#change-the-magento-admin-variables).

## Admin credentials

Use the ADMIN variables in the following table to override credentials for the Magento Admin user during installation.

If you want to change the values after installation, connect to your environment using ssh and use the the Magento CLI [`admin:user` command]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-admin.html) to create or edit the Magento Admin user credentials.

| Variable  | Default | Description |
| -------- | -------- | ----------- |
| `ADMIN_USERNAME`| License Owner email address | A username for the administrative user with the ability to create other users, including administrative users.|
|`ADMIN_EMAIL`| | Email address for the administrative user. This address is used to send password reset notifications.|
|`ADMIN_PASSWORD`| | Password for the administrative user. When the project is created a random password is generated and an email is sent to the {{ site.data.var.ece }} License Owner. During project creation, the License Owner should have already changed the password. You might need to contact the License Owner for the updated password.|
| `ADMIN_LOCALE`    | `en_US` | The default locale used by the Magento Admin.

## Admin URL

Use the following environment variable to secure access to your Magento Admin UI. If specified, this value overrides the default URL during installation.

`ADMIN_URL`—The relative URL to access the Magento Admin UI. The default URL is `/admin`. For security reasons, Magento recommends that you change the default to a unique, custom Admin URL that is not easy to guess.

If you need to change the Admin URL after installation, connect to your environment using SSH and use the Magento CLI [`magento setup:config`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html) command to change the URL.

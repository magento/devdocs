---
group: cloud-guide
title: ADMIN variables
functional_areas:
  - Cloud
  - Configuration
---

Users that have administrative access to the {{site.data.var.ece}} project can use the
following project environment variables to override the configuration settings
for the administrative user account and Admin panel. See [Set environment and project variables]({{ page.baseurl }}/cloud/project/project-webint-basic.html#project-conf-env-var).


| Variable        | Description                                                                                                                                                                                                                                                                                            |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ADMIN_FIRSTNAME | First name of the administrative user.                                                                                                                                                                                                                                                                 |
| ADMIN_LASTNAME  | Last name of the administrative user.                                                                                                                                                                                                                                                                  |
| ADMIN_EMAIL     | Email address for the administrative user. This value is required for upgrading and patching {{site.data.var.ece}} and is used to send password reset emails.                                                                                                                                          |
| ADMIN_LOCALE    | Default—`en_US` Specifies the default locale used by the Magento Admin.                                                                                                                                                                                                                                |
| ADMIN_PASSWORD  | Password for the administrative user. When the project is created a random password is generated and an email is sent to the Project Owner. During project creation, the Project Owner should have already changed the password. You might need to contact the Project Owner for the updated password. |
| ADMIN_URL       | The relative URL to access the Admin panel. For example: `/admin`. For security reasons, we recommend you choose a value other than `admin`,`backend`, or another term that is easy to guess.                                                                                                          |
| ADMIN_USERNAME  | Username for the administrative user. The administrative user can create other users, including other administrative users. The default hardcoded username is the Project Owner email address. You can use this value, or change it to another secure username.                                        |
{:style="table-layout:auto;"}

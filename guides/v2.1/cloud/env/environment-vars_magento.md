---
group: cloud
title: ADMIN variables
version: 2.1
github_link: cloud/env/environment-vars_magento.md
functional_areas:
  - Cloud
  - Configuration
---

Users that have Admin access to the {{site.data.var.ece}} project can use the
following project environment variables to override the configuration settings
for the administrative user account and Admin panel. See [Set environment and project variables]({{ page.baseurl }}/cloud/project/project-webint-basic.html#project-conf-env-var).

<table>
  <thead>
    <tr>
      <th style="width: 165px;">Variable</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ADMIN_FIRSTNAME</code></td>
      <td>First name of the administrative user.</td>
    </tr>
    <tr>
      <td><code>ADMIN_LASTNAME</code></td>
      <td>Last name of the administrative user.</td>
    </tr>
    <tr>
      <td><code>ADMIN_EMAIL</code></td>
      <td>Email address for the administrative user. This value is required for
      upgrading and patching {{site.data.var.ece}} and is used to send password
      reset emails.
    </tr>
    <tr>
      <td><code>ADMIN_LOCALE</code></td>
      <td>Default—<code>en_US</code><br>Specifies the default locale used by
      the Magento Admin.</td>
    </tr>
    <tr>
      <td><code>ADMIN_PASSWORD</code></td>
      <td>Password for the administrative user. When the project is created,
      a random password is generated and an email is sent to the Project Owner
      During project creation, the Project Owner should have already changed
      the password. You might need to contact the Project Owner for the updated
      password.
      </td>
    </tr>
    <tr>
      <td><code>ADMIN_URL</code></td>
      <td>The relative URL to access the Admin panel. For example: `<domain>/admin`.
      For security reasons, we recommend you choose a value other than `admin`,
      `backend`, or another term that is easy to guess.</td>
    </tr>
    <tr>
      <td><code>ADMIN_USERNAME</code></td>
      <td>Username for the administrative user. The administrative user
      can create other users, including other administrative users. The default
      hardcoded username is the Project Owner email address.  You can use this
      value, or change it to another secure username.
    </td>
    </tr>
  </tbody>
</table>

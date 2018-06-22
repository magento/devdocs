---
group: cloud
title: ADMIN variables
version: 2.1
github_link: cloud/env/environment-vars_magento.md
functional_areas:
  - Cloud
  - Configuration
---

You can use the following project environment variables to
override the default administrative credentials for your project. See [Set environment and project variables]({{ page.baseurl }}/cloud/project/project-webint-basic.html#project-conf-env-var)

You can use the following project environment variables to override the
configuration settings for the administrative user account and Admin panel.
See [Set environment and project variables]({{ page.baseurl }}/cloud/project/project-webint-basic.html#project-conf-env-var).

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
      reset emails. See <a href="{{ page.baseurl }}/cloud/project/project-webint-basic.html#project-conf-env-var">Set environment and project variables</a>.</td>
    </tr>
    <tr>
      <td><code>ADMIN_LOCALE</code></td>
      <td>Default—<code>en_US</code><br>Specifies the default locale used by
      the Magento Admin.</td>
    </tr>
    <tr>
      <td><code>ADMIN_PASSWORD</code></td>
      <td>Password for the administrative user. Initially, we generate a random
      password and provide an email directing the Project Owner to reset the
      password. You should immediately change this password.</td>
    </tr>
    <tr>
      <td><code>ADMIN_URL</code></td>
      <td>Enter the relative URL by which to access the Magento Admin. For
      security reasons, we recommend that you choose a value other than
      <code>admin</code> or <code>backend</code> or another term that is easy
      to guess.</td>
    </tr>
    <tr>
      <td><code>ADMIN_USERNAME</code></td>
      <td>Username for the Magento administrative user. The administrative user
      can create other users, including other administrative users. The default
      value for the ADMIN_USERNAME is the Project Owner email address.
    </td>
    </tr>
  </tbody>
</table>

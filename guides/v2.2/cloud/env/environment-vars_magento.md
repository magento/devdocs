---
layout: default
group: cloud
title: Application variables
version: 2.2
github_link: cloud/env/environment-vars_magento.md
functional_areas:
  - Cloud
  - Configuration
---

The following environment variables are available for overriding administrative credentials. See [Manage build and deploy actions](http://devdocs.magento.com/guides/v2.2/cloud/project/magento-env-yaml.html) for more information about using these options in the `.magento.env.yaml` file. 

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
      <td>Administrative user's first name.</td>
    </tr>
    <tr>
      <td><code>ADMIN_LASTNAME</code></td>
      <td>Administrative user's last name.</td>
    </tr>
    <tr>
      <td><code>ADMIN_EMAIL</code></td>
      <td>Administrative user's e-mail address. This value is required for upgrading and patching {{site.data.var.ece}} and is used to send password reset emails. See <a href="{{page.baseurl}}/cloud/project/project-webint-basic.html#project-conf-env-var">Set environment and project variables</a>.</td>
    </tr>
    <tr>
      <td><code>ADMIN_LOCALE</code></td>
      <td>Default—<code>en_US</code><br>Specifies the default locale used by the Magento Admin.</td>
    </tr>
    <tr>
      <td><code>ADMIN_PASSWORD</code></td>
      <td>Administrative user's password. Initially, we generate a random password and provide an email directing the Project Owner to reset the password. You should immediately change this password.</td>
    </tr>
    <tr>
      <td><code>ADMIN_URL</code></td>
      <td>Enter the relative URL by which to access the Magento Admin. For security reasons, we recommend you choose a value other than <code>admin</code> or <code>backend</code> or another term that is easy to guess.</td>
    </tr>
    <tr>
      <td><code>ADMIN_USERNAME</code></td>
      <td>User name for a Magento administrative user. This user is an administrator and can create other users, including other administrative users.</td>
    </tr>
  </tbody>
</table>
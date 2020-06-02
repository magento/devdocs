---
group: cloud-guide
title: Resolve issues with encryption key
functional_areas:
  - Cloud
  - Setup
---

This topic discusses solutions to typical issues you might experience with {{site.data.var.ee}} encryption key in your environments.

For a new Starter project, the Magento encryption key is on your `master` branch Production environment. When you branch to other environments, the key travels with the code and database.

For a new Pro project starting with a "blank site" {{site.data.var.ece}} template, the Magento encryption key is on the Integration `master` branch and environment until you [initially deploy]({{ site.baseurl }}/cloud/setup/first-time-deploy.html) across all environments.

If you have imported data from an existing Magento installation into {{site.data.var.ece}}, you need to [copy the key]({{ site.baseurl }}/cloud/setup/first-time-setup-import-prepare.html#encryption-key) and [deploy it]({{ site.baseurl }}/cloud/setup/first-time-setup-import-import.html#encryption-key) to the environments.

### Encryption key not in all environments {#cloud-trouble-nocrypt}

All Cloud environments require this encryption key in all three environments or the store will encounter authentication and authorization errors for actions like completing a payment on a cart, processing a return, and adding shipping to orders.

To verify and update the encryption key environment variable:

1. SSH to each of the Cloud environments: Integration, Staging, and Production.

   ```bash
   magento-cloud environment:ssh
   ```

1. Open `app/etc/env.php` in a text editor.
1. Verify the existing value of `key` for `crypt`. The value should be your [{{site.data.var.ee}} key]({{ site.baseurl }}/cloud/setup/first-time-setup-import-prepare.html#encryption-key).

   ```php
       return array (
         'crypt' =>
         array (
           'key' => '<your encryption key>',
         ),
       );
   ```

1. If the value is incorrect, add the key value, and save your changes to `env.php`.
1. Exit the text editor and repeat this process for each environment. Test store actions in each environment to verify if the issue persists, such as completing a cart purchase.

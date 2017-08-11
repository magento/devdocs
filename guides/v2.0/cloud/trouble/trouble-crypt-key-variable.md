---
layout: default
group: cloud
subgroup: 170_trouble
title: Resolve issues with encryption key
menu_title: Resolve issues with encryption key
menu_order: 25
menu_node:
version: 2.0
github_link: cloud/trouble/trouble-crypt-key-variable.md
---

## Resolve issues with encryption key
This topic discusses solutions to typical issues you might experience with Magento EE encryption key in your environments.

### Ecryption key not in all environments {#cloud-trouble-nocrypt}
When creating and setting up your ECE project, as a best practice you should install and deploy Magento across all environments starting with Integration to Staging to Production. During this process, the Magento EE encryption key should have been added as an environment variable to `env.php` per environment.

All Cloud environments require this encryption key in all three environments or the store will encounter authentication and authorization errors for actions like completing a payment on a cart, processing a return, and adding shipping to orders.

To verify and update the encryption key environment variable:

1.  SSH to each of the Cloud environments: Integration, Staging, and Production.

        magento-cloud environment:ssh
2.  Open `app/etc/env.php` in a text editor.
3.  Verify the existing value of `key` for `crypt`. The value should be your [Magento EE key]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-prepare.html#cloud-import-copykey).

        {% highlight php startinline=true %}
        return array (
          'crypt' =>
          array (
            'key' => '<your encryption key>',
          ),
        );
        {% endhighlight %}
4.  If the value is incorrect, add the key value, and save your changes to `env.php`.
5.  Exit the text editor and repeat this process for each environment. Test store actions in each environment to verify if the issue persists, such as completing a cart purchase.

#### Related topics
*	[List the current environment variables]({{page.baseurl}}cloud/env/environment-vars_over.html#cloud-import-key)
*	[Copy the encryption key]({{page.baseurl}}cloud/env/environment-vars_over.html)

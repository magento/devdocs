---
layout: default
group: cloud
subgroup: 170_trouble
title: Resolve issues with encryption key
menu_title: Resolve issues with encryption key
menu_order: 60
menu_node:
version: 2.0
github_link: cloud/trouble/trouble_crypt-key-variable.md
---

## Resolve issues with encryption key
This topic discusses solutions to typical issues you might experience with Magento EE encryption key in your environments.

### Ecryption key not in all environments {#cloud-trouble-nocrypt}
All Cloud environments require the addition of your Magento EE encryption key to the `env.php` variables for Integration, Staging, and Production environments. If you didn't add the encryption key, the store will encounter authentication and authorization type errors for actions like completing a payment on a cart, processing a return, and adding shipping to orders.

To check the environment variable:

1.  SSH to each of the Cloud environments.

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
4.  If the value is incorrect, add the key, save your changes to `env.php`, and exit the text editor.


#### Related topics
*	[List the current environment variables]({{page.baseurl}}cloud/env/environment-vars_over.html#cloud-import-key)
*	[Copy the encryption key]({{page.baseurl}}cloud/env/environment-vars_over.html)

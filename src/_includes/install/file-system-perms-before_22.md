## Set pre-installation file system ownership and permissions {#perms-over}

This topic discusses how to set read-write permissions for the web server group before you install the Magento software. This is necessary so the Setup Wizard or command line can write files to the Magento file system.

{% include install/web/deprecated.md %}

The procedure you use is different, depending on whether you use [shared hosting](#perms-shared) and have one user or if you use a [private server](#perms-private) and have two users.

{:.bs-callout-info}
If you're using a Magento version *earlier than* 2.0.6, see [Appendix---Magento file system ownership and appendix (legacy)]({{ page.baseurl }}/install-gde/install/legacy-file-system-perms.html) instead.

## Set permissions for shared hosting (one user) {#perms-shared}

This section discusses how to set pre-installation permissions if you log in to the Magento server as the same user that also runs the web server. This type of setup is common in shared hosting environments.

{% collapsible To set ownership and permissions for a one-user system: %}
{% include install/file-system-perms-oneuser_22.md %}
{% endcollapsible %}

## Set ownership and permissions for two users {#perms-private}

This section discusses how to set ownership and permissions for your own server or a private hosting setup. In this type of setup, you typically *cannot* log in as, or switch to, the web server user. You typically log in as one user and run the web server as a different user.

{% collapsible To set ownership and permissions for a two-user system: %}
{% include install/file-system-perms-twouser_22.md %}
{% endcollapsible %}

## Switch to the Magento file system owner {#install-update-depend-user-switch}

After you've performed the other tasks in this topic, enter one of the following commands to switch to that user:

*  Ubuntu: `su <username>`
*  CentOS: `su - <username>`

For example,

```bash
su magento_user
```

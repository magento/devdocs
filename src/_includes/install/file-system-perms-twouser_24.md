Complete the following tasks in the order shown:

*  [About the shared group](#mage-owner-about-group)
*  [Step 1: Create the Magento file system owner and give the user a strong password](#mage-owner-create-user)
*  [Step 2: Find the web server group](#install-update-depend-user-findgroup)
*  [Step 3: Put the Magento file system owner in the web server's group](#install-update-depend-user-add2group)
*  [Step 4: Get the Magento software](#perms-get-software)
*  [Step 5: Set ownership and permissions for the shared group](#perms-set-two-users)

### About the shared group {#mage-owner-about-group}

To enable the web server to write files and directories in the Magento file system but to also maintain *ownership* by the Magento file system owner, both users must be in the same group. This is necessary so both users can share access to Magento files (including files created using the Magento Admin or other web-based utilities).

This section discusses how to create a new Magento file system owner and put that user in the web server's group. You can use an existing user account if you wish; we recommend the user have a strong password for security reasons.

{:.bs-callout-info}
Skip to [step 2](#install-update-depend-user-findgroup) if you plan on using an existing user account.

### Step 1: Create the Magento file system owner and give the user a strong password {#mage-owner-create-user}

This section discusses how to create the Magento file system owner. (Magento file system owner is another term for the *command-line user*.)

To create a user on CentOS or Ubuntu, enter the following command as a user with `root` privileges:

```bash
adduser <username>
```

To give the user a password, enter the following command as a user with `root` privileges:

```bash
passwd <username>
```

Follow the prompts on your screen to create a password for the user.

{:.bs-callout-warning}
If you don't have `root` privileges on your Magento server, you can use another local user account. Make sure the user has a strong password and continue with [Put the Magento file system owner in the web server group](#install-update-depend-user-add2group).

For example, to create a user named `magento_user` and give the user a password, enter:

```bash
sudo adduser magento_user
```

```bash
sudo passwd magento_user
```

{:.bs-callout-warning}
Because the point of creating this user is to provide added security, make sure you create a [strong password](https://en.wikipedia.org/wiki/Password_strength).

### Step 2: Find the web server user's group {#install-update-depend-user-findgroup}

To find the web server user's group:

*  CentOS:

   ```bash
   grep -E -i '^user|^group' /etc/httpd/conf/httpd.conf
   ```

   or

   ```bash
   grep -Ei '^user|^group' /etc/httpd/conf/httpd.conf
   ```

Typically, the user and group name are both `apache`.

*  Ubuntu: `ps aux | grep apache` to find the apache user, then `groups <apache user>` to find the group.

Typically, the username and the group name are both `www-data`.

### Step 3: Put the Magento file system owner in the web server's group {#install-update-depend-user-add2group}

To put the Magento file system owner in the web server's primary group (assuming the typical Apache group name for CentOS and Ubuntu), enter the following command as a user with `root` privileges:

*  CentOS: `usermod -a -G apache <username>`
*  Ubuntu: `usermod -a -G www-data <username>`

{:.bs-callout-info}
The `-a -G` options are important because they add `apache` or `www-data` as a _secondary_ group to the user account, which preserves the user's _primary_ group. Adding a secondary group to a user account helps [restrict file ownership and permissions](#perms-set-two-users) to ensure members of a shared group only have access to certain files.

For example, to add the user `magento_user` to the `apache` primary group on CentOS:

```bash
sudo usermod -a -G apache magento_user
```

To confirm your Magento user is a member of the web server group, enter the following command:

```bash
groups magento_user
```

The following sample result shows the user's primary (`magento`) and secondary (`apache`) groups.

```bash
magento_user : magento_user apache
```

{:.bs-callout-info}
Typically, the username and primary group name are the same.

To complete the task, restart the web server:

*  Ubuntu: `service apache2 restart`
*  CentOS: `service httpd restart`

### Step 4: Get the Magento software {#perms-get-software}

If you haven't done so already, get the Magento software in one of the following ways:

*  [Compressed archive]({{ page.baseurl }}/install-gde/prereq/zip_install.html)
*  [Composer metapackage]({{ page.baseurl }}/install-gde/composer.html)
*  [Clone the repository (contributing developers only)]({{ page.baseurl }}/install-gde/prereq/dev_install.html)

### Step 5: Set ownership and permissions for the shared group {#perms-set-two-users}

To set ownership and permissions before you install the Magento software:

1. Log in to your Magento server as, or switch to, the Magento file system owner.
1. Enter the following commands in the order shown:

   ```bash
   cd <magento_root>
   ```

   ```bash
   find var generated vendor pub/static pub/media app/etc -type f -exec chmod g+w {} +
   ```

   ```bash
   find var generated vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} +
   ```

   ```bash
   chown -R :<web server group> .
   ```

   ```bash
   chmod u+x bin/magento
   ```

{% include install/file-system-perms-twouser_cmds-only_22.md %}

### Next step

After you have set file system ownership and permissions, [install Magento]({{ page.baseurl }}/install-gde/install/cli/install-cli.html).

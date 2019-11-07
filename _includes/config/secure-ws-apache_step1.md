For security reasons, you can locate the password file anywhere except your web server docroot. In this example, we show how to store the password file in a new directory.

#### Install htpasswd if necessary

First, see if you have the Apache `htpasswd` utility is installed as follows:

1. Enter the following command to determine if `htpasswd` is already installed:

   ```bash
   which htpasswd
    ```

   If a path displays, it is installed; if the command returns no output, `htpasswd` is not installed.

1. If necessary, install `htpasswd`:

   *  Ubuntu: `apt-get -y install apache2-utils`
   *  CentOS: `yum -y install httpd-tools`

#### Create a password file

Enter the following commands as a user with `root` privileges:

```bash
mkdir -p /usr/local/apache/password
```

```bash
htpasswd -c /usr/local/apache/password/.<password file name> <username>
```

where

*  `<username>` can be:

   *  Setting up cron: the web server user or another user.

      In this example, we use the web server user but the choice of user is up to you.

   *  Setting up Elasticsearch: the user is named `magento_elasticsearch` in this example

*  `<password file name>` must be a hidden file (starts with `.`) and should reflect the name of the user. See the examples later in this section for details.

Follow the prompts on your screen to create a password for the user.

#### Examples

**Example 1: cron**
You must set up authentication for only one user for cron; in this example, we use the web server user. To create a password file for the web server user, enter the following commands:

```bash
mkdir -p /usr/local/apache/password
```

```bash
htpasswd -c /usr/local/apache/password/.htpasswd apache
```

**Example 2: Elasticsearch**
You must set up authentication for two users: one with access to nginx and one with access to Elasticsearch. To create password files for these users, enter the following commands:

```bash
mkdir -p /usr/local/apache/password
```

```bash
htpasswd -c /usr/local/apache/password/.htpasswd_elasticsearch magento_elasticsearch
```

#### Add additional users

To add another user to your password file, enter the following command as a user with `root` privileges:

```bash
htpasswd /usr/local/apache/password/.htpasswd <username>
```

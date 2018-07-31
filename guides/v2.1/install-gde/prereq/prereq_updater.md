---
group: install_pre
title: Set up the updater
github_link: install-gde/prereq/prereq_updater.md
functional_areas:
  - Install
  - System
  - Setup
---

The updater synchronizes with Magento Connect for updating components and upgrading the Magento software.
Contributing developers must clone the updater GitHub repository and copy the files to `<your Magento install dir>/update`.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
This topic is for contributing developers *only*; that is, anyone who clones the Magento 2 GitHub repository so they can contribute to the Magento 2 codebase.
If you did not clone the Magento repository, you should skip this topic.
</div>

## Cloning the updater repository   {#compman-updater-clone}

You can clone the Magento 2 Updater repository using either SSH or HTTPS protocols:

* Use SSH for better security (no user name and password are exchanged).
This requires you to [share a public key][1]{: target="_blank"} with GitHub.
* Use HTTPS if you don't share an SSH key with GitHub (your user name and password are encrypted before being sent to GitHub).

See one of the following section:

* [Clone with SSH](#compman-clone-ssh)
* [Clone with HTTPS](#compman-clone-https)
* [Update installation dependencies](#compman-clone-composer)
* [Copy the files](#compman-copy)

### Clone with SSH   {#compman-clone-ssh}

To clone the Magento 2 Updater repository using the SSH protocol:

1.  Copy to the clipboard the Magento 2 Updater repository SSH clone URL.
    
    a. In a web browser, go to [the Magento 2 Updater repository][2]{: target="_blank"}.
    
    b. On the right side of the page, under the *clone URL* field, click **SSH**.
    
    c. Click the **Copy to clipboard** button.
    
    The following figure shows an example.
    
    ![Clone the Magento 2 Updater repository using SSH]({{ site.baseurl }}/common/images/install_mage2_clone-ssh.png){: width="650px"}

2.  Change to your web server's docroot directory.
    
    Typically, for Ubuntu, it's `/var/www` and for CentOS it's `/var/www/html`.
    
    Need help locating the docroot? Click [here.]({{ page.baseurl }}/install-gde/basics/basics_docroot.html)

3.  Enter the following command:
    ```bash
    git clone git@github.com:magento/magento2-updater.git
    ```

4.  Wait for the repository to clone on your server.
    
    <div class="bs-callout bs-callout-info" id="info" markdown="1">
    If the following error displays, make sure you [shared your SSH key][1]{: target="_blank"} with GitHub:
    ```terminal
    Cloning into 'magento2'...
    Permission denied (publickey).
    fatal: The remote end hung up unexpectedly
    ```
    </div>

5.  Continue with [Update installation dependencies](#compman-clone-composer).

### Clone with HTTPS   {#compman-clone-https}

To clone the Magento 2 Updater repository using the HTTPS protocol:

1.  Copy to the clipboard the Magento 2 Updater repository HTTPS clone URL.
    
    a. In a web browser, go to [the Magento 2 Updater repository][2]{: target="_blank"}.
    
    b. On the right side of the page, under the *clone URL* field, click **HTTPS**.
    
    c. Click the **Copy to clipboard** button.
    
    The following figure shows an example.
    
    ![Clone the Magento 2 Updater repository using HTTPS]({{ site.baseurl }}/common/images/install_mage2_clone-https.png)

2.  Change to your web server's docroot directory.
    
    Typically, for Ubuntu, it's `/var/www` and for CentOS it's `/var/www/html`.

3.  Enter the following command:

    ```bash
    git clone https://github.com/magento/magento2-community-edition.git
    ```
    
    If the command fails with an authentication error, try
    ```bash
    git clone https://<your GitHub user name>:<your password>@github.com/magento//magento2-community-edition.git
    ```
    
4.  Wait for the repository to clone on your server.

5.  Continue with the next section.

### Update installation dependencies   {#compman-clone-composer}

The updater application has dependencies specified in its `composer.json` file. To update it, you must authentication. The `composer install` commands fails if you do not. To authenticate, [generate authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html), after which you create an `auth.json` file in the home directory of the Magento file system owner.

#### Generate authentication tokens

{% include install/auth-tokens-get.md %}

#### Create `auth.json`

{% include install/auth-json.md %}

#### Resolve updater dependencies

Before you continue, resolve those dependencies as follows:

1.  Change to the directory to which you cloned the updater application.
2.  As a user with permissions to write to the directory, enter
    ```bash
    composer install
    ```
    
    Wait for dependencies to resolve and continue with the next section.

### Copy the files   {#compman-copy}

As a user with privileges to write files to the Magento file system, enter the following command:

```bash
mkdir -p <your Magento install dir>/update
```
```bash
cp -R <updater-clone-directory>/* <your Magento install dir>/update
```

For example, if you cloned the updater to `/var/www/html/magento2-community-edition` and Magento is installed in `/var/www/html/magento2`, enter

```bash
mkdir -p /var/www/html/magento2/update
```
```bash
cp -R /var/www/html/magento2-community-edition/* /var/www/html/magento2/update
```
    
#### Next step

* [Installation options]({{ page.baseurl }}/install-gde/continue-to-install.html)

<!-- Link definitions -->

[1]: https://help.github.com/articles/generating-ssh-keys/
[2]: https://github.com/magento/magento2-community-edition

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
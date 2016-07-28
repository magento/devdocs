<div markdown="1">

<h2 id="sample-clone">Install sample data by cloning repositories</h2>
This topic discusses how to get the Magento sample data if you cloned the Magento GitHub repository. This method is intended only for contributing developers (that is, developers who plan to contribute to the Magento 2 codebase).

If you're not a contributing developer, choose one of the other options displayed in the table of contents on the left side of the page.

Contributing developers can use this method of installing sample data *only* if all of the following are true:

*   You use Magento CE
*   You <a href="{{page.baseurl}}install-gde/prereq/dev_install.html">cloned the Magento 2 repository</a>.

<div class="bs-callout bs-callout-warning">
    <p>You can use sample data with either the <code>develop</code> branch (more current) or a released branch (such as <code>2.0</code> or <code>2.0.1</code> (more stable)). We recommend you use a released branch because it's more stable. If you're contributing code to the Magento 2 repository and you need the most recent code, use the <code>develop</code> branch.</p>
    <p>Regardless of the branch you choose, you must <a href="{{page.baseurl}}install-gde/prereq/dev_install.html">clone</a> the corresponding branch of the Magento 2 GitHub repository. For example, sample data for the <code>develop</code> branch can be used <em>only</em> with the Magento 2 <code>develop</code> branch.</p>
</div>

See the following sections:

*   [Clone the sample data repository](#clone-sample-repo)
*   [Set file system ownership and permissions](#samp-data-perms)

## Clone the sample data repository {#clone-sample-repo}
This section discusses how to install Magento sample data by cloning the sample data repository. You can clone the sample data repository in any of the following ways:

*   Clone with the <a href="#instgde-prereq-sample-clone-ssh">SSH protocol</a>
*   Clone with the <a href="#instgde-prereq-compose-clone-https">HTTPS protocol</a>

### Clone with SSH {#clone-sample-repo-ssh}
To clone the Magento sample data GitHub repository using the SSH protocol:

1.  In a web browser, go to <a href="https://github.com/magento/magento2-sample-data" target="_blank">the Magento sample data repository</a>.
2.  Next to the name of the branch, click **SSH** from the list.
3.  Click **Copy to clipboard**

    The following figure shows an example.

    <img src="{{ site.baseurl }}common/images/install_mage2_clone-ssh.png" width="650px" alt="Clone the Magento GitHub repository using SSH">
4.  Change to your web server's docroot directory.

    Typically, for Ubuntu, it's `/var/www` and for CentOS it's `/var/www/html`.

    Need <a href="{{page.baseurl}}install-gde/basics/basics_docroot.html">help locating the docroot?</a>
5.  Enter `git clone` and paste the value you obtained from step 1.

    An example follows:

        git clone git@github.com:magento/magento2-sample-data.git
6.  Wait for the repository to clone on your server.

    <div class="bs-callout bs-callout-info" id="info">
        <p>If the following error displays, make sure you <a href="https://help.github.com/articles/generating-ssh-keys/" target="_blank">shared your SSH key</a> with GitHub: </p>
            <pre>Cloning into 'magento2'...
Permission denied (publickey).
fatal: The remote end hung up unexpectedly</pre>
    </div>
7.  Change to the `<your Magento sample data clone dir>/dev/tools` directory.
8.  Enter the following command to create symbolic links between the files you just cloned so sample data works properly:
        
        php -f build-sample-data.php -- --ce-source="<your Magento CE install dir>"
9.  Wait for the command to complete.

10. See <a href="#instgde-prereq-compose-clone-perms">Set file system permissions and ownership</a>.

### Clone with HTTPS {#instgde-prereq-compose-clone-https}
To clone the Magento sample data GitHub repository using the HTTPS protocol:

1.  In a web browser, go to <a href="https://github.com/magento/magento2-sample-data" target="_blank">the Magento sample data repository</a>.
2.  On the right side of the page, under the **clone URL** field, click **HTTPS**.
3.  Click **Copy to clipboard**.

    The following figure shows an example.

    <img src="{{ site.baseurl }}common/images/install_mage2_clone-https.png" width="650px" alt="Clone the Magento GitHub repository using HTTPS">
2.  Change to your web server's docroot directory.

    Typically, for Ubuntu, it's `/var/www` and for CentOS it's `/var/www/html`.
3.  Enter `git clone` and paste the value you obtained from step 1.

    An example follows:
        
        git clone https://github.com/magento/magento2-sample-data.git
4.  Wait for the repository to clone on your server.
5.  Change to the `<your Magento sample data clone dir>/dev/tools` directory.
8.  Enter the following command to create symbolic links between the files you just cloned so sample data works properly:

        php -f build-sample-data.php -- --ce-source="<your Magento CE install dir>"

    For example,

        php build-sample-data.php -- --ce-source="/var/www/magento2"

7.  Wait for the command to complete.
8.  See the next section.

## Set file system ownership and permissions {#samp-data-perms}
Because the `php build-sample-data.php` script creates symlinks between the sample data repository and your Magento 2 repository, you must set file system permissions and ownership in the sample data repository. Failure to do so results in errors accessing the storefront.

To set file system permissions and ownership on the sample data repository:

1.  Change to your sample data clone directory.
2.  Set ownership:

        chown -R :<your web server group name> .

    Typical examples:

    CentOS: `chown -R :apache .`

    Ubuntu: `chown -R :www-data .`

3.  Set permissions:

        find . -type d -exec chmod g+ws {} \;
3.  Clear static files:

        cd <your Magento CE install dir>/var
        rm -rf cache/* page_cache/* generation/*
 
<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
*[Contributing developers]: Developers who contribute code to the Magento 2 CE codebase
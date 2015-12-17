<div markdown="1">

<h2 id="sample-clone">Install sample data by cloning repositories</h2>
This topic discusses how to get the Magento sample data by cloning the Magento GitHub repository and the sample data repository. This method is intended only for contributing developers (that is, developers who plan to contribute to the Magento 2 codebase).

If you're not a contributing developer, choose one of the other options displayed in the table of contents on the left side of the page.

<div class="bs-callout bs-callout-warning">
    <p>You can use sample data with either the <code>develop</code> branch (more current) or the <code>2.0</code> branch (more stable) but only if you <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html#instgde-prereq-compose-clone">cloned</a> the corresponding branch of the Magento 2 GitHub repository.</p>
    <p>We recommend you use the <code>2.0</code> branch because it's more stable. If you're contributing code to the Magento 2 repository and you need the most recent code, use the <code>develop</code> branch.</p>
</div>

<h2 id="sample-prereq">Sample data prerequisites</h2>
Before you install sample data, make sure you have done the following:

1.  Decide which branch of the code to use:

    *  `2.0`, which is more stable (we recommend this branch unless you're contributing code to the Magento 2 project)
    *   `develop`, which is more recent
    
    <div class="bs-callout bs-callout-warning">
        <p>You must clone the <em>same branch</em> of both Magento 2 and sample data repositories. If you cloned the <code>2.0</code> branch of the Magento 2 repository, you must clone the <code>2.0</code> branch of the sample data repository.</p>
        <p>Use the <code>git branch</code> command in the Magento 2 clone directory to display which branch you have.</p>
    </div>

1.  Log in to the Magento server as, or switch to, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
4.  <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Clone the Magento 2 GitHub repository</a>.

5.  <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html">Update dependencies</a> by running <code>composer install</code>.
2.  Change to your Magento installation directory.

    For example, `/var/www/html/magento2`
3.  Require the `https://repo.magento.com` repository, which contains the sample data code:

        composer config repositories.magento composer https://repo.magento.com
4.  Continue with the next section.

<h2 id="instgde-prereq-sample-clone">Clone the sample data repository</h2>
This section discusses how to install Magento sample data by cloning the sample data repository. 

You can clone the sample data repository in any of the following ways:

*   Clone with the <a href="#instgde-prereq-sample-clone-ssh">SSH protocol</a>
*   Clone with the <a href="#instgde-prereq-compose-clone-https">HTTPS protocol</a>

<h3 id="instgde-prereq-sample-clone-ssh">Clone with SSH</h3>
To clone the Magento sample data GitHub repository using the SSH protocol:

1.  Copy to the clipboard the Magento GitHub repository SSH clone URL.

    1.  In a web browser, go to <a href="https://github.com/magento/magento2-sample-data" target="_blank">the Magento sample data repository</a>.
    2.  On the right side of the page, under the <strong>clone URL</strong> field, click <strong>SSH</strong>.
    3.  Click **Copy to clipboard**.

        The following figure shows an example.
        <img src="{{ site.baseurl }}common/images/install_mage2_clone-ssh.png" alt="Clone the Magento GitHub repository using SSH">

4.  Change to your web server's docroot directory.

    Typically, for Ubuntu, it's `/var/www` and for CentOS it's `/var/www/html`.

    <a href="{{ site.gdeurl }}install-gde/basics/basics_docroot.html">Need help locating the docroot</a>?

5.  Enter <code>git clone</code> and paste the value you obtained from step 1.

    The format of the command follows:

        git clone [-b 2.0] git@github.com:magento/magento2-sample-data.git

    Use `-b 2.0` to clone the 2.0 branch; omit it to clone the `develop` branch, which is the default.

    We recommend you clone the `2.0` branch because it's more stable; clone `develop` if you're contributing code to Magento 2.

    Remember to clone the *same branch* of sample data as Magento 2 code. Use the `git branch` command in the Magento 2 clone directory to display which branch you have.

    An example follows: 

        git clone -b 2.0 git@github.com:magento/magento2-sample-data.git

6.  Wait for the repository to clone on your server.

    <div class="bs-callout bs-callout-info" id="info">
        <p>If the following error displays, make sure you <a href="https://help.github.com/articles/generating-ssh-keys/" target="_blank">shared your SSH key</a> with GitHub: </p>
            <pre>Cloning into 'magento2'...
Permission denied (publickey).
fatal: The remote end hung up unexpectedly</pre>
    </div>
7.  Change to the `<your Magento sample data clone dir>/dev/tools` directory.
8.  Enter the following command:
    
        php -f build-sample-data.php -- --ce-source="&lt;your Magento CE install dir>"

9.  Wait for the command to complete.
10. See <a href="#instgde-prereq-compose-clone-perms">Set file system permissions and ownership</a>.

<h3 id="instgde-prereq-compose-clone-https">Clone with HTTPS</h3>
To clone the Magento sample data GitHub repository using the HTTPS protocol:

1.  Copy to the clipboard the Magento sample data repository HTTPS clone URL.

    1.  In a web browser, go to <a href="https://github.com/magento/magento2-sample-data" target="_blank">the Magento sample data repository</a>.
    2.  On the right side of the page, under the <strong>clone URL</strong> field, click <strong>HTTPS</strong>.
    3.  Click <strong>Copy to clipboard</strong>.

    The following figure shows an example.

    <img src="{{ site.baseurl }}common/images/install_mage2_clone-https.png" alt="Clone the Magento GitHub repository using HTTPS">

2.  Change to your web server's docroot directory.

    Typically, for Ubuntu, it's `/var/www` and for CentOS it's `/var/www/html`.

3.  Enter <code>git clone</code> and paste the value you obtained from step 1.

    The format of the command follows:

        git clone [-b 2.0] https://github.com/magento/magento2-sample-data.git

    Use <code>-b 2.0</code> to clone the 2.0 branch; omit it to clone the `develop` branch, which is the default.

    We recommend you clone the <code>2.0</code> branch because it's more stable; clone `develop` if you're contributing code to Magento 2.

    Remember to clone the <em>same branch</em> of sample data as Magento 2 code. Use the `git branch` command in the Magento 2 clone directory to display which branch you have.

    An example follows:

        git clone -b 2.0 https://github.com/magento/magento2-sample-data.git
4.  Wait for the repository to clone on your server.
5.  Change to the <code>&lt;your Magento sample data clone dir>/dev/tools</code> directory.
6.  Enter the following command:

        php -f build-sample-data.php -- --ce-source="&lt;your Magento CE install dir>"

7.  Wait for the command to complete.
8.  See the next section.

<h3 id="instgde-prereq-compose-clone-perms">Set file system permissions and ownership</h3>
Because the <code>php build-sample-data.php</code> script creates symlinks between the sample data repository and your Magento 2 repository, you must set file system permissions and ownership in the sample data repository. Failure to do so will result in errors accessing the storefront.

To set file system permissions and ownership on the sample data repository:

1.  Log in to your Magento server as, or switch to, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.  Change to your sample data clone directory.
3.  Set ownership:
    
        chown -R :<your web server group name> .

    Typical examples:

    CentOS: `chown -R :apache .`

    Ubuntu: `chown -R :www-data .`

4.  Set permissions:

        find . -type d -exec chmod 770 {} \; && find . -type f -exec chmod 660 {} \;

    If you must enter the commands as <code>sudo</code>, use

        sudo find . -type d -exec chmod 770 {} \; && sudo find . -type f -exec chmod 660 {} \;
    

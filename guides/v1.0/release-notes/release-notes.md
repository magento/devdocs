---
layout: default
group: release-notes
subgroup: Release Notes
title: Release Notes
menu_title: Release Notes
menu_node: parent
menu_order: 1
github_link: release-notes/release-notes.md
---

<h4>Contents</h4>

*	<a href="#highlights">Highlights</a>
*	<a href="#known-devbeta">Known issues</a>
*	<a href="#install">Installation</a>
*	<a href="#help">Help us improve this documentation</a>

<h2 id="highlights">Highlights</h2>

Welcome to Magento 2.0 documentation! And welcome to Magento 2.0!

For this first release of Magento 2.0, here is a summary of some important
features of the release.

-   PHP and MySQL. Magento 2 supports PHP 5.5 and 5.6, and MySQL 5.6. See [System
    requirements][1].

    [1]: <{{ site.gdeurl }}install-gde/system-requirements.html>

-   HTML5. The reference themes available out of the box are responsive and
    based on HTML5. See [Themes][2] and [Responsive web design.][3]

    [2]: <{{ site.gdeurl }}frontend-dev-guide/themes/theme-general.html>

    [3]: <{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/rwd_overview.html>

-   CSS3, and CSS preprocessing. The reference themes use CSS3. Magento 2 uses
    the LESS CSS pre-processor, or you can add support for Sass and Compass. See
    [Cascading style sheets][4], and [CSS pre-processor.][5]

    [4]: <{{ site.gdeurl }}frontend-dev-guide/css-topics/css-overview.html>

    [5]: <{{ site.gdeurl }}frontend-dev-guide/css-topics/css-preprocess.html>

-   jQuery. Magento 2 uses jQuery as the primary JavaScript library. Magento
    ships with an extensible set of jQuery widgets. See [Magento JQuery
    widgets][6].

    [6]: <{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widgets-about.html>
-   RequireJS. The RequireJS library helps load JS resources on demand to
    improve page load times. It's also intended to encourage modular design of
    frontend components. See [JavaScript resources][6].

    [6]: <{{ site.gdeurl }}config-guide/config/js-resources.html>

-   PSR Compliance. PSR compliance standardizes the use of PHP to allow
    different sets of code libraries to work together. See [PHP coding
    standard][7].

    [7]: <{{ site.gdeurl }}coding-standards/code-standard-php.html>

-   Modular architecture. Define your own set of modules. Cross-module
    dependencies are reduced, and interfaces among multiple extensions are
    cleaner and more discrete. See [What is Magento?][8], [Magento as a modular
    system][9], and [Service contracts][10].

    [8]: <{{ site.gdeurl }}architecture/arch_whatis.html>

    [9]: <{{ site.gdeurl }}architecture/arch_asmodsys.html>

    [10]: <{{ site.gdeurl }}extension-dev-guide/service-contracts/service-contracts.html>

-   Testing framework. Magento 2 includes a pre-packaged series of test scripts,
    including tests for integration, units, static environments, functional
    areas, and performance criteria. See [Magento Test Framework][11], and the
    [JavaScript unit tests][12].

    [11]: <https://github.com/magento/mtf/blob/master/docs/install-config.md>

    [12]: <{{ site.gdeurl }}extension-dev-guide/test/test_js-unit.html>

See also
--------

-   [XML validation][13]

    [13]: <{{ site.gdeurl }}architecture/view/xml-schema-layout.html>

-   [Service contracts][14]

    [14]: <{{ site.gdeurl }}extension-dev-guide/service-contracts/service-contracts.html>

-   [Translation][15]

    [15]: <{{ site.gdeurl }}architecture/behavior/xlate.html>

-   [Services as web APIs][16]

    [16]: <{{ site.gdeurl }}get-started/bk-get-started-api.html>
	
<h2 id="known-devbeta">Known issues</h2>
We have identified the following known issues in this release:

<!-- *   <a href="#known-devbeta-sampledata">Magento sample data is available only if you edit composer.json</a>
 -->
*   <a href="#known-devbeta-sampledata">Magento sample data is available only if you update composer.json</a>
*   <a href="#known-devbeta-xdebug">Known issue with xdebug</a>
*   <a href="#known-devbeta-storefront-err">Access errors</a>
*   <a href="#known-devbeta-wiz-fail-bogus">Setup Wizard reports failure falsely</a>
*   <a href="#known-devbeta-wiz-fail-installog">Setup Wizard fails because of no installation log</a>
<!-- *   <a href="#known-devbeta-wiz-fail-session-save">session.save_path issue</a> -->

<!-- <h3 id="known-issue-sample">Issue installing optional sample data</h3> -->
<!-- https://jira.corp.x.com/browse/MAGETWO-32879 -->
<!-- Errors display when you attempt to install optional Magento sample data. We are working on this issue and expect a resolution in the near future. -->

<h3 id="known-devbeta-sampledata">Magento sample data is available only if you update composer.json</h3>

To install the optional Magento 2 sample data, you must update `composer.json`, run `composer update`, and run the Magento 2 installer to update the database.

See <a href="{{ site.gdeurl }}/install-gde/install/sample-data.html">Enable optional Magento sample data</a>.

<h3 id="known-devbeta-xdebug">Known issue with xdebug</h3>
If you use the optional PHP extension `xdebug`, you can encounter exceptions:

*   During installation 
*   Accessing either the Magento Admin or storefront after a successful installation 

Sample exception:

    Fatal error: Maximum function nesting level of '100' reached, aborting!

To resolve this issue, you can:

*   Disable the `xdebug` extension.
*   Set the value of `xdebug.max_nesting_level` to a value of 200 or more. For more information, see <a href="http://xdebug.org/docs/basic#max_nesting_level" target="_blank">xdebug documentation</a>.

After you change the configuration of or disable `xdebug`, restart Apache:

*   CentOS: `sudo service httpd restart`
*   Ubuntu: `sudo service apache2 restart`

<h3 id="known-devbeta-storefront-err">Access errors</h3>

<!-- <a href="https://jira.corp.x.com/browse/MAGETWO-31834">MAGETWO-31834</a> and <a href="https://jira.corp.x.com/browse/MAGETWO-31180">MAGETWO-31180</a> --> Errors might display when you attempt to access the Magento storefront or Magento Admin after installation:

Storefront:

    "Can't create directory /var/www/html/m/var/generation/Magento/Framework/App/PageCache/Identifier/."
    #0 /var/www/html/m/lib/internal/Magento/Framework/Code/Generator/Autoloader.php(34): Magento\Framework\Code\Generator->generateClass('Magento\\Framewo...')
    #1 [internal function]: Magento\Framework\Code\Generator\Autoloader->load('Magento\\Framewo...')
    #2 [internal function]: spl_autoload_call('Magento\\Framewo...')
    ... more

Magento Admin:

    "Class Magento\Logging\Model\FlagFactory does not exist"
    "#0 /var/www/html/ui/lib/internal/Magento/Framework/ObjectManager/Definition/Runtime.php(46): Magento\Framework\Code\Reader\ClassReader->getConstructor('Magento\\Logging...')
    #1 /var/www/html/ui/lib/internal/Magento/Framework/ObjectManager/Factory/Factory.php(170): Magento\Framework\ObjectManager\Definition\Runtime->getParameters('Magento\\Logging...')
    #2 /var/www/html/ui/lib/internal/Magento/Framework/ObjectManager/ObjectManager.php(71): Magento\Framework\ObjectManager\Factory\Factory->create('Magento\\Logging...')
    ... more

In either case, try accessing the storefront or Magento Admin again.

<h3 id="known-devbeta-wiz-fail-bogus">Setup Wizard reports failure falsely</h3>

<!-- <a href="https://jira.corp.x.com/browse/MAGETWO-31949">MAGETWO-31949</a> --> In some cases, the Setup Wizard appears to have failed when it has not failed. 

Symptoms:

*   The following message displays at the top of your browser on the last page: `Installation is incomplete. Check the console log for errors before trying again.`
*   If you open the console, a success message displays at the bottom with no errors or exceptions.

In this case, the installation *was* successful. You can access the storefront and Magento Admin as discussed in <a href="{{ site.gdeurl }}install-gde/install/verify.html">Verify the installation</a>.

To access your Magento-created encryption key:

1.  Log in to your Magento server as a user with `root` privileges.
2.  Open `<your Magento install dir>/app/etc/config.php` in a text editor.
3.  Locate the value of `'key' =>`.
        
This is your encryption key.

<h3 id="known-devbeta-wiz-fail-installog">Setup Wizard fails because of no installation log</h3>

<!-- <a href="https://jira.corp.x.com/browse/MAGETWO-31850">MAGETWO-31850</a> -->In some cases (such as running the Setup Wizard in two browser windows or tab pages at the same time), the installation fails because it cannot create `install.log`. 

To work around this issue, see <a href="{{ site.gdeurl }}install-gde/trouble/tshoot_install-log.html">Installation fails; cannot create install.log</a>

<!-- <h3 id="known-devbeta-wiz-fail-session-save">session.save_path issue</h3>

<!-- <a href="https://jira.corp.x.com/browse/MAGETWO-31851">MAGETWO-31851</a> and <a href="https://github.com/magento/magento2/issues/792">GitHub issue 792</a> --><!-- There is a known issue that prevents the usage of <a href="http://php.net/manual/en/configuration.changes.php" target="_blank">php_admin_value</a> for some session configuration settings. Specifically, we are aware that the <a href="http://php.net/manual/en/session.configuration.php#ini.session.save-path" target="_blank">session.save_path</a> cannot be set with `php_admin_value` at this time.

Workarounds:

*   If you're using a hosting provider that does not allow you to change the value of `php_admin_value`, there is no workaround currently. However, the only known instance that we are aware of at this time is ISPManager/ISPConfig which appears to have a <a href="http://www.howtoforge.com/forums/showthread.php?t=61127" target="_blank">method of disabling</a> the `php_admin_value` setting.


*   If you're running the Magento software on your own server and you can log in as a user with `root` privileges, you can replace the `session.save_path` setting with a dependency injection call as follows:

1.  Log in to your Magento server as a user with `root` privileges.
2.  Open `php.ini` in a text editor.
3.  Search for `session.save_path`.
4.  Comment it out.
5.  Save your changes to `php.ini` and exit the text editor.
6.  Restart your web server.
7.  Open `<your Magento install dir>/app/etc/config.php` in a text editor.
8.  Add the following:

        ‘session’ => [
            ‘save_path’ => ‘<your session save path>'

1.  Save your changes and exit the text editor.
2.  Restart Apache.

    Ubuntu: `sudo service apache2 restart`
    CentOS: `sudo service httpd restart`

The Magento system now uses dependency injection for session save settings.

<h4>Finding php.ini</h4>

If you don't know where `php.ini` is located, use the following steps:

1.  If you haven't already done so, create <a href="{{ site.gdeurl }}install-gde/prereq/optional.html#install-optional-phpinfo">phpinfo.php</a>.
2.  Enter the following URL in your browser's address or location field:

    <code>http://&lt;your web server IP or host name>/&lt;path to docroot>/phpinfo.php</code>

3.  Look for the location of `php.ini`.

    `php.ini` is typically specified as **Loaded Configuration File** in the displayed results.

4.  As a user with <code>root</code> privileges, open `php.ini` in a text editor.
5.  Locate the value of `open_basedir` and change it.
6.  Save your changes to `php.ini`.
7.  Restart the web server. -->


<h2 id="install">Installation</h2>

Installation is simplified, and now uses Composer. See our friendly
[Installation Guide][17].

[17]: <{{ site.gdeurl }}install-gde/bk-install-guide.html>

<h2 id="help">Help improve this documentation</h2>

Magento 2.0 product documentation is hosted on GitHub, and we welcome your
feedback there.

Click the "Edit this page on GitHub" link at the top of a documentation page to
open the file in our GitHub repository, where you are invited to suggest changes
by creating pull requests, or open a discussion by creating an issue.
Feel free to contact the documentation team directly at
<a href="mailto:DL-Magento-Doc-Feedback@ebay.com">DL-Magento-Doc-Feedback@ebay.com</a>

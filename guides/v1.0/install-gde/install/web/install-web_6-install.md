---
layout: default 
group: install_wiz 
subgroup: A_Introduction
title: Step 6. Install
menu_title: Step 6. Install
menu_node: 
menu_order: 10
github_link: install-gde/install/web/install-web_6-install.md
---



<h3 id="instgde-install-magento-web-step6">Step 6: Install</h3>

Click **Install Now**.

You have the following options:

*	To see installation progress or error details, click **Console Log**.
*	In the event of problems, click **Previous** to go back and fix incorrect entries.
*	To try the installation again in the event of failure, click **Try Again**.

<h3 id="instgde-install-magento-web-step5last">Installation Success</h3>

The message `Success` displays to indicate a successful installation.

If the installation failed, click **Previous** to review the information you entered, make sure the Magento server and database host are still reachable, or see <a href="{{ site.gdeurl }}install-gde/trouble/tshoot.html">Troubleshooting</a>.

You can also run the installer again.

<h3 id="instgde-install-magento-web-log">Viewing the installation log</h3>
The Setup Wizard creates a log file, named `install.log`, that you might find useful in debugging issues or in verifying the actions performed by the wizard.

The Setup Wizard uses the <a href="http://php.net/manual/en/function.sys-get-temp-dir.php" target="_blank">sys_get_temp_dir ( void )</a> PHP call to determine where to write the installation log. To locate the log:

1.	Open `php.ini` in a text editor.

	If you don't know where `php.ini` is located:

	1.	Log in as or switch to the <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">web server user</a>.
	2.	Create <a href="{{ site.gdeurl }}install-gde/prereq/optional.html#install-optional-phpinfo">phpinfo.php</a> in the web server's docroot.
	3.	Access `phpinfo.php` in a web browser.

		The location of `php.ini` is typically specified as **Loaded Configuration File** in the displayed results.

2.	Search for `sys_temp_dir`.

The value of `sys_temp_dir` determines where `install.log` is located. If the value is commented out, PHP uses that value as its default. 

A typical default value is `/tmp`. If that's the case, the log is `/tmp/install.log`.

<h2 id="instgde-install-reinstall">Updating or reinstalling the Magento software</h2>
You can reinstall the Magento software in an development environment especially to get all the latest code changes:

*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli.html#instgde-install-magento-update">Update</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli.html#instgde-install-magento-reinstall">Uninstall and reinstall</a>

#### Next step

*	To install optional Magento sample data (sample store, products, customers, and so on), see <a href="{{ site.gdeurl }}install-gde/install/sample-data.html">Enable optional Magento sample data</a>.
*	<a href="{{ site.gdeurl }}install-gde/install/verify.html">Verify the installation</a>.
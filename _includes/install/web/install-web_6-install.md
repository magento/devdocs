<div markdown="1">

<h2 id="instgde-install-magento-web-step6">Step 6: Install</h2>

After completing all preceding steps in the Setup Wizard, click **Install Now**.

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

	1.	Log in as or switch to the <a href="{{ site.gdeurl }}install-gde/prereq/file-sys-perms-over.html">switch to the Magento file system owner</a>.
	2.	Create <a href="{{ site.gdeurl }}install-gde/prereq/optional.html#install-optional-phpinfo">phpinfo.php</a> in the web server's docroot.
	3.	Access `phpinfo.php` in a web browser.

		The location of `php.ini` is typically specified as **Loaded Configuration File** in the displayed results.

2.	Search for `sys_temp_dir`.

The value of `sys_temp_dir` determines where `install.log` is located. If the value is commented out, PHP uses that value as its default. 

A typical default value is `/tmp`. If that's the case, the log is `/tmp/install.log`.

### Next step
<a href="{{ site.gdeurl }}install-gde/install/verify.html">Verify the installation</a>
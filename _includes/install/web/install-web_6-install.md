## Step 6: Install   {#instgde-install-magento-web-step6}

After completing all preceding steps in the Setup Wizard, click **Install Now**.

You have the following options:

*  To see installation progress or error details, click **Console Log**.
*  In the event of problems, click **Previous** to go back and fix incorrect entries.
*  To try the installation again in the event of failure, click **Try Again**.

### Installation Success   {#instgde-install-magento-web-step5last}

The message `Success` displays to indicate a successful installation.

If the installation failed, click **Previous** to review the information you entered, make sure the Magento server and database host are still reachable.

You can also run the installer again.

### Viewing the installation log   {#instgde-install-magento-web-log}

The Setup Wizard creates a log file, named `install.log`, that you might find useful in debugging issues or in verifying the actions performed by the wizard.

The Setup Wizard uses the [sys_get_temp_dir ( void )](http://php.net/manual/en/function.sys-get-temp-dir.php) PHP call to determine where to write the installation log. To locate the log:

1. Open `php.ini` in a text editor.

   If you don't know where `php.ini` is located:

   1. Log in as or switch to the [switch to the Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
   1. Create [phpinfo.php]({{ page.baseurl }}/install-gde/prereq/optional.html#install-optional-phpinfo) in the web server's docroot.
   1. Access `phpinfo.php` in a web browser.

   The location of `php.ini` is typically specified as **Loaded Configuration File** in the displayed results.

1. Search for `sys_temp_dir`.

The value of `sys_temp_dir` determines where `install.log` is located. If the value is commented out, PHP uses that value as its default.

A typical default value is `/tmp`. If that's the case, the log is `/tmp/install.log`.

### Next step

[Verify the installation]({{ page.baseurl }}/install-gde/install/verify.html)

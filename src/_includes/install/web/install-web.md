This section discusses how to install the Magento software using a web-based wizard interface. To install Magento from the command line, see [Install Magento software using the command line]({{ page.baseurl }}/install-gde/install/cli/install-cli.html).

## Before you start your installation   {#instgde-install-prereq}

Before you begin, make sure that:

1. Your system meets the requirements discussed in [Magento System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html).
1. You completed all prerequisite tasks discussed in [Prerequisites]({{ page.baseurl }}/install-gde/prereq/prereq-overview.html).
1. After you log in to the Magento server, [switch to the Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).

### Enabling and disabling modules   {#instgde-install-web-enable-mod}

The Setup Wizard enables you to enable or disable modules before you install the Magento software. Before you do so, make sure you understand the following.

{% include install/enable-disable-modules.md %}

## Running the Setup Wizard   {#instgde-install-magento-web}

The Setup Wizard is a multi-page wizard that enables you to go back and forward one page at a time. You *cannot* skip pages, and you must enter all required information on every page before you can proceed to the next page.

In the event of errors, you can run the installer again or you can return to a previous page to fix errors on that page.

### Getting started   {#instgde-install-magento-web-step0}

To install the Magento software using the Setup Wizard:

1. Start a web browser.

1. Enter the following URL in the browser's address or location bar:

   ```text
   http://<Magento host or IP>/<path to Magento root>/setup
   ```

   For example, if the Magento server's IP address is 192.0.2.10 and you installed Magento 2 in the `magento2/` directory relative to the web server's docroot, and you did not configure a Virtual Host, enter:

   ```text
   http://192.0.2.10/magento2/setup
   ```

1. On the initial page, click **Agree and Set Up Magento**.

1. Continue with the following topics in the order presented to complete the installation.

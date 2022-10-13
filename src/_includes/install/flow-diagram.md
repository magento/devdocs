![How Magento installation works]({{ site.baseurl }}/common/images/install-diagram-24.svg)

The general installation flow is as follows:

1. Set up your server environment.

   Install the prerequisite software, including PHP, Apache, MySQL, and the search engine. See the [system requirements]({{ page.baseurl }}/install-gde/system-requirements.html) for more information.

1. Get [authentication keys]({{page.baseurl}}/install-gde/prereq/connect-auth.html) to the Magento Composer repository.

1. Get the Magento software.

   *  (Recommended) Get the {{site.data.var.ce}} or {{site.data.var.ee}} [Composer metapackage]({{page.baseurl}}/install-gde/composer.html) to manage Magento components and their dependencies.

   *  If you want to contribute to the {{site.data.var.ce}} codebase or customize the Magento application, [clone]({{ page.baseurl }}/install-gde/prereq/dev_install.html) the Magento 2 GitHub repository. This method requires familiarity with both GitHub and Composer.

1. Install the Magento software using the command line.

   If the step fails because prerequisite software isn't set up correctly, review our [Prerequisites]({{ page.baseurl }}/install-gde/prereq/prereq-overview.html).

1. Verify the installation by viewing your storefront and the Admin.

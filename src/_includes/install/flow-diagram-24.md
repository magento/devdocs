![How Magento installation works]({{ site.baseurl }}/common/images/install-diagram-24.svg)

The diagram shows the following:

1. Set up your server environment.

   Install the prerequisite software, including PHP, Apache, MySQL, and Elasticsearch. Consult the [system requirements]({{ page.baseurl }}/install-gde/system-requirements.html) for specific information.

1. Get the Magento software.

   *  For simplicity, get a compressed {{site.data.var.ce}} or {{site.data.var.ee}} [archive]({{ page.baseurl }}/install-gde/prereq/zip_install.html), extract it on your Magento server, and start your installation.

   *  If you are more technical and you are familiar with Composer, get a {{site.data.var.ce}} or {{site.data.var.ee}}  [metapackage]({{page.baseurl}}/install-gde/composer.html).

   *  If you want to contribute to the {{site.data.var.ce}} codebase or customize the Magento application, [clone]({{ page.baseurl }}/install-gde/prereq/dev_install.html) the Magento 2 GitHub repository. (This method requires familiarity with both GitHub and Composer.)

1. Install the Magento software using the command line.

   If the step fails because prerequisite software isn't set up correctly, review our [Prerequisites]({{ page.baseurl }}/install-gde/prereq/prereq-overview.html).

1. Verify the installation by viewing your storefront and the Magento Admin.

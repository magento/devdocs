![How Magento installation works]({{ site.baseurl }}/common/images/install_diagram.png){:width="1100px"}

The diagram shows the following:

1. Set up your server environment.

   Install the prerequisite software, including PHP, Apache, and MySQL. Consult the [system requirements]({{ page.baseurl }}/install-gde/system-requirements.html) for specific information.

1. Get the Magento software.

   *  For simplicity, get a compressed {{site.data.var.ce}} or {{site.data.var.ee}} [archive]({{ page.baseurl }}/install-gde/prereq/zip_install.html), extract it on your Magento server, and start your installation.

   *  If you are more technical and you are familiar with Composer, get a {{site.data.var.ce}} or {{site.data.var.ee}} {% if page.guide_version == "2.0" %} [metapackage]({{page.baseurl}}/install-gde/prereq/integrator_install.html) {% else %} [metapackage]({{page.baseurl}}/install-gde/composer.html). {% endif %}

   *  If you want to contribute to the {{site.data.var.ce}} codebase or customize the Magento application, [clone]({{ page.baseurl }}/install-gde/prereq/dev_install.html) the Magento 2 GitHub repository. (This method requires familiarity with both GitHub and Composer.)

   {:.bs-callout-info}
   To be able to use the Web Setup Wizard to install or upgrade the Magento software, or to manage extensions you get from Magento Marketplace, you must either get a compressed archive or a Composer metapackage. If you clone the GitHub repository, you *cannot* use the Web Setup Wizard to upgrade the Magento software and extensions. You must upgrade using [Composer and Git commands]({{ page.baseurl }}/install-gde/install/cli/dev_options.html).

1. Install the Magento software using either the Web Setup Wizard or command line.

   {% include install/web/deprecated.md %}

   For simplicity, only the Web Setup Wizard is shown in the diagram.

   At each step, the Web Setup Wizard validates the information you entered. As shown in the preceding diagram, if validation fails, you must manually fix the issues before you proceed.

   If the step fails because prerequisite software isn't set up correctly, review our [Prerequisites]({{ page.baseurl }}/install-gde/prereq/prereq-overview.html).

1. Verify the installation by viewing your storefront and the Magento Admin.

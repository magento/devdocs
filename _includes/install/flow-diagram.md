<div markdown="1">

![How Magento installation works]({{ site.baseurl }}common/images/install_diagram.png){:width="1100px"}

The diagram shows the following:

1.	Set up your server environment.

	Install the prerequisite software, including PHP, Apache, and MySQL. Consult the system requirements for specific information:

	*	[2.0.x system requirements]({{ site.gdeurl }}install-gde/system-requirements.html)
	*	[2.1.x system requirements]({{ site.gdeurl21 }}install-gde/system-requirements-tech.html)

2.	Get the Magento software.

	*	For simplicity, get a compressed Magento CE or Magento EE [archive]({{ page.baseurl }}install-gde/prereq/zip_install.html), extract it on your Magento server, and start your installation.

	*	If you are more technical and you are familiar with Composer, get a Magento CE or Magento EE [metapackage]({{ page.baseurl }}install-gde/prereq/integrator_install.html).

	*	If you want to contribute to the Magento CE codebase, [clone]({{ page.baseurl }}install-gde/prereq/dev_install.html) the Magento 2 GitHub repository. (This method requires familiarity with both GitHub and Composer.)

	<div class="bs-callout bs-callout-info" id="info">
		<p>To be able to use the Web Setup Wizard to install or upgrade the Magento software, or to manage extensions you get from Magento Marketplace, you must either get a compressed archive or a Composer metapackage.</p>
		<p>If you clone the GitHub repository, you <em>cannot</em> use the Web Setup Wizard to install or upgrade either the Magento software or extensions.</p>
	</div> 

3.	Install the Magento software using either the Web Setup Wizard or command line. 

	For simplicity, only the Web Setup Wizard is shown in the diagram.

	At each step, the Web Setup Wizard validates the information you entered. As shown in the preceding diagram, if validation fails, you must manually fix the issues before you proceed. 

	If the step fails because prerequisite software isn't set up correctly, review our [Prerequisites]({{ page.baseurl }}install-gde/prereq/prereq-overview.html).

	For other types of failures, see our [Troubleshooting]({{ page.baseurl }}install-gde/trouble/tshoot.html).
4.	Verify the installation by viewing your storefront and the Magento Admin.

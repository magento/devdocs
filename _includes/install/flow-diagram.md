<div markdown="1">

![How Magento installation works]({{ site.baseurl }}common/images/install_diagram.png){:width="1100px"}

The diagram shows the following:

1.	Set up your server environment.

	Install the prerequisite software, including PHP, Apache, and MySQL. Consult the system requirements (2.0, 2.1) for specific information.

2.	Get the Magento software.

	*	For simplicity, get a compressed Magento CE or Magento EE archive, extract it on your Magento server, and start your installation.

	*	If you are more technical and you are familiar with Composer, get a Magento CE or Magento EE metapackage.

	*	If you want to contribute to the Magento CE codebase, clone the Magento 2 GitHub repository. (This method requires familiarity with both GitHub and Composer.)

	<div class="bs-callout bs-callout-info" id="info">
		<p>To be able to use the Web Setup Wizard to install or upgrade the Magento software, or to manage extensions you get from Magento Marketplace, you must either get a compressed archive or a Composer metapackage.</p>
	</div> 

3.	Install the Magento software using either the Web Setup Wizard or command line. 

	For simplicity, only the Web Setup Wizard is shown in the diagram.
4.	Verify the installation by viewing your storefront and the Magento Admin.

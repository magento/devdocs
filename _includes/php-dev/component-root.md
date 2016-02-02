<div markdown="1">

### Root directory
We refer to a component's *root directory* as the top-level directory in which you develop component code. Typically, this directory is located in one of the following directories relative to the Magento root directory:

*	Subdirectory of `app` (*recommended*.) :

	*	For modules, use `app/code`
	*	For themes, use `app/design/frontend` (storefront theme) or `app/design/adminhtml` (Magento Admin theme)
	*	For language packages, use `app/i18n`

	You can easily set up this type of environment by <a href="{{ site.gdeurl21 }}install-gde/prereq/dev_install.html">cloning the Magento 2 GitHub repository</a>. Typically, you cloned the repository if you want to to contribute code to the Magento 2 codebase.
*	`vendor`: You get this directory structure if you used the <a href="{{ site.gdeurl21 }}install-gde/prereq/integrator_install.html">`composer create-project`</a> command to get a Magento 2 metapackage (which downloads the CE or EE code), or if you extracted a <a href="{{ site.gdeurl21 }}install-gde/prereq/zip_install.html">compressed Magento 2 archive</a>.

### Required files
The following are required for all components:

*	`registration.php`: Among other things, specifies the directory in which the component is installed; by default, components install in the `<Magento root dir>/vendor` directory. For more information, see <a href="{{ site.gdeurl21 }}extension-dev-guide/component-registration.html" target="_blank">Component registration</a>.
*	`composer.json`: Specifies component dependencies. For more information, see <a href="{{ site.gdeurl21 }}extension-dev-guide/composer-integration.html" target="_blank">Composer integration</a>.
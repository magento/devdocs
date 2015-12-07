<div markdown="1">

### Component root directory
We refer to a component's *root directory* as the top-level directory in which you develop component code. Typically, this directory is located in one of the following directories relative to the Magento root directory:

*	`app/code`: Use this component root directory if you <a href="{{ site.gdeurl }}install-gde/prereq/dev_install.html">cloned the Magento 2 GitHub repository</a>.

	Typically, you cloned the repository either if you're developing components or to contribute code to the Magento 2 codebase.
*	`vendor`: Use this component root directory if you used the <a href="{{ site.gdeurl }}install-gde/prereq/integrator_install.html">`composer create-project`</a> command to download the Magento 2 code or if you extracted a <a href="{{ site.gdeurl }}install-gde/prereq/zip_install.html">compressed Magento 2 archive</a>.

### Required files
The following are required for all components:

*	`registration.php`: Specifies the directory in which the component is installed; by default, components install in the `<Magento root dir>/vendor` directory.
*	`composer.json`: Specifies component dependencies. For more information, see <a href="{{ site.gdeurl }}extension-dev-guide/composer-integration.html">Composer integration</a>.
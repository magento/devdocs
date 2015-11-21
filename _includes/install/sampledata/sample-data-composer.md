<div markdown="1">

<h2 id="install-sample-composer">Install sample data using Composer</h2>
This topic discusses how to enable you to install optional Magento sample data using Composer. You <a href="#instgde-prereq-sample-comp">modify <code>composer.json</code></a> in the Magento root installation directory to provide the location of the sample data package. After that, you can either run the Magento software installer or you can run a script to install the sample data.    

<h2 id="instgde-prereq-sample-comp">Modify <code>composer.json</code></h2>
Sample data is versioned like Magento code. Before you begin, you can either:

*	Find the exact version you want at <a href="http://repo.magento.com/#magento/sample-data" target="_blank">repo.magento.com</a>.
*	Install the latest version using Composer <a href="https://getcomposer.org/doc/01-basic-usage.md#next-significant-release-tilde-and-caret-operators-" target="_blank">next significant release syntax</a>.

To enable sample data using Composer:

1.	Log in to the Magento server as, or switch to, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Enter the following commands to require the current version of sample data packages:

		composer require magento/<package name>:<version>

	`<version>` can be `2.0.0` or you can use Composer next significant release syntax to specify a later release; for example, `~2.0.0+`

	The complete `<package name>` list follows:

	{% include install/sampledata/sample-data_list-of-modules.md %}


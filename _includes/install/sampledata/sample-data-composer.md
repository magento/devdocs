<div markdown="1">

<h2 id="install-sample-composer">Install sample data using Composer</h2>
This topic discusses how to enable you to install optional Magento sample data using Composer. You <a href="#instgde-prereq-sample-comp">modify <code>composer.json</code></a> in the Magento root installation directory to provide the location of the sample data package. After that, you can either run the Magento software installer or you can run a script to install the sample data.    

<h2 id="instgde-prereq-sample-comp">Modify <code>composer.json</code></h2>
Sample data is versioned like Magento components. You can either install the latest version or you can specify a specific version using Composer <a href="https://getcomposer.org/doc/articles/versions.md#next-significant-release-operators" target="_blank">next significant release syntax</a>.

To enable sample data using Composer:

1.	Log in to the Magento server as, or switch to, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.

2.	Enter the following commands to require the current version of sample data packages:

		composer require magento/<package name>:<version>

	`<version>` can be a specific version like `100.0.2` or you can use Composer next significant release syntax to specify a later release; for example, `~100.0.1`

	The complete `<package name>` list follows:

	{% include install/sampledata/sample-data_list-of-modules.md %}


<div markdown="1">

<h2 id="install-sample-composer">Install sample data using Composer</h2>
This topic discusses how to enable you to install optional Magento sample data using Composer. You <a href="#instgde-prereq-sample-comp">modify <code>composer.json</code></a> in the Magento root installation directory to provide the location of the sample data package. After that, you can either run the Magento software installer or you can run a script to install the sample data.    

<h2 id="instgde-prereq-sample-comp">Modify <code>composer.json</code></h2>
Sample data is versioned like Magento code. Before you begin, you can either:

*	Find the exact version you want at <a href="http://repo.magento.com/#magento/sample-data" target="_blank">repo.magento.com</a>.
*	Install the latest version using Composer <a href="https://getcomposer.org/doc/01-basic-usage.md#next-significant-release-tilde-and-caret-operators-" target="_blank">next significant release syntax</a>.

To enable sample data using Composer:

1.	Log in to the Magento server as, or switch to, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Enter the following command to reference Magento packages in <code>composer.json</code>:
		
		composer config repositories.magento composer http://repo.magento.com
3.	Enter the following command to require the current version of the sample data package:

		composer require magento/sample-data:&lt;version>

	where <code>&lt;version></code> is either an exact version or semantic version syntax.
	
	Exact version example:

		composer require magento/sample-data:1.0.0-beta

	Next significant release example:

		composer require magento/sample-data:~1.0.0-beta

4.	Wait while dependencies are installed.

#### Next step
TBD
---
layout: default
group: install_trouble
subgroup: Access issues
title: Exceptions during installation
menu_title: Exceptions during installation
menu_node: 
menu_order: 8
version: 2.0
github_link: install-gde/trouble/tshoot_access-browser.md
redirect_from: /guides/v1.0/install-gde/trouble/tshoot_access-browser.html
---


<h2 id="install-trouble-except">Exceptions display during installation</h2>

### Symptom: Exceptions display during installation. Users have reported a variety of exceptions, including the following:

	Module 'Magento_Indexer':
	Running recurring..
	[ERROR] exception 'Exception' with message 'Recoverable Error: Argument 1 passed to Magento\Indexer\Model\Config\Data::__construct() must be an instance of Magento\Framework\Indexer\Config\Reader, instance of Magento\Indexer\Model\Config\Reader given, called in /home/magento2_dev/
	public_html/var/generation/Magento/Indexer/Model/Config/Data/Interceptor.php on line 14 and defined in /home/magento2_dev/public_html/
	app/code/Magento/Indexer/Model/Config/Data.php on line 22' in /home/magento2_dev/public_html/lib/internal/Magento/Framework/App/ErrorHandler.php:67
	Stack trace:
	#0 /home/magento2_dev/public_html/app/code/Magento/Indexer/Model/Config/Data.php(22): Magento\Framework\App\ErrorHandler->handler(4096, 
	'Argument 1 pass...', '/home/magento2...', 22, Array)
	#1 /home/magento2_dev/public_html/var/generation/Magento/Indexer/Model/Config/Data/Interceptor.php(14): Magento\Indexer\Model\Config\Data->
	__construct(Object(Magento\Indexer\Model\Config\Reader), Object(Magento\Framework\App\Cache\Type\Config), Object(Magento\Indexer\Model\Resource\Indexer\State\Collection), 'indexer_config')
	#2 /home/magento2_dev/public_html/lib/internal/Magento/Framework/ObjectManager/Factory/AbstractFactory.php(103): Magento\Indexer\Model\Config\Data\Interceptor->__construct(Object(Magento\Indexer\Model\Config\Reader), Object(Magento\Framework\App\Cache\Type\Config), 
	Object(Magento\Indexer\Model\Resource\Indexer\State\Collection), 'indexer_config')

	... more ...
	
#### Solution
Clear the `<your Magento install dir>/var/generation` and other directories under `var` as follows:

	rm -rf <your Magento install dir>/var/generation/* <your Magento install dir>/var/di/* <your Magento install dir>/var/cache/* 

After clearing the directories, try the installation again.

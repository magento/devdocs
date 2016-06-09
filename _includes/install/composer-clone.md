<div markdown="1">

<h2 id="instgde-prereq-compose-install">Install Composer</h2>
First, check  if Composer is already installed: 

In a command prompt, enter any of the following commands:

*	`composer --help`
*	`composer list --help`

If command help displays, Composer is already installed.

If an error displays, use the following steps to install Composer.

To install Composer:

1.	Change to or create an empty directory on your Magento server.

2.	Enter the following commands:

		curl -sS https://getcomposer.org/installer | php
		mv composer.phar /usr/local/bin/composer
		
	For additional installation options, see the <a href="https://getcomposer.org/download/" target="_blank">Composer installation documentation</a>.

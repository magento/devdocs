---
layout: default
group: install_trouble
subgroup: Errors during installation
title: Cannot install using nginx
menu_title: Cannot install using nginx
menu_node: 
menu_order: 20
version: 2.1
github_link21: install-gde/trouble/php/tshoot_nginx-port.md
---

<h2 id="install-trouble-pdo">Cannot install using nginx</h2>
If you use the nginx web server and you attempt to install the Magento software, the installation sometimes fails.

### Detail
You can confirm the issue by the following error in the `var/report` directory:

	NOTE: You cannot install Magento using the Setup Wizard because the Magento setup directory cannot be accessed.
	You can install Magento using either the command line or you must restore access to the following directory: /var/www/html/setup
	If you are using the sample nginx configuration, please go to http://ce.mtf03.bcn.magento.com/setup/";i:1;s:641:"#0 /var/www/html/lib/internal/Magento/Framework/App/Http.php(213): Magento\Framework\App\Http->redirectToSetup(Object(Magento\Framework\App\Bootstrap), Object(Exception))

### Workaround
Append `/setup` to the URL by which you access the Setup Wizard or install the Magento software using the <a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli.html">command line</a>.


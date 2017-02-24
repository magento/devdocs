---
layout: default
group: coding-standards
subgroup: Coding standards
title: Code sniffers
menu_title: PHP code sniffers
menu_order: 3
version: 2.0
github_link: coding-standards/code-standard-sniffers.md
---

## PHP code sniffers

We recommend the consistent use of a <i>code sniffer</i> to enhance the readability of your code and help ensure that it meets Magento code standards.  A code sniffer is a tool that automates the process of identifying code irregularities. Although a sniffer will identify many more inconsistencies and errors than a manual edit, we recommend that you evaluate and make any fixes that your sniffer program identifies.  

Magento recommends the use of <a href="http://pear.php.net/manual/en/package.php.php-codesniffer.faq.php" target="_blank">PHP_CodeSniffer</a>, the most popular code sniffer in use throughout the PHP development community.
PHP_CodeSniffer 1.4.0+ includes PSR-1 and PSR-2 standards, which are followed by Magento 2. 
You can configure PHP_CodeSniffer to use your own rules, too. The <a href="https://github.com/magento/marketplace-eqp" target="_blank">Magento Extension Quality Program Coding Standard</a> provides specifications that you can use to configure your code sniffer of choice to bring your <i>PHP coding style closer to Magento PHP standards</i>.



### Code standards 

Magento supports the <a href="http://www.php-fig.org/psr/psr-1/" target="_blank">PSR-1</a> and <a href="http://www.php-fig.org/psr/psr-2/" target="_blank">PSR-2</a> standards. 


The <a href="http://devdocs.magento.com/guides/v2.0/coding-standards/bk-coding-standards.html" target="_blank">Coding standards overview</a> introduces Magento-specific practices for PHP, JavaScript, and JQuery. 

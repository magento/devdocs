---
layout: default
group: coding-standards
subgroup: Coding standards
title: Code sniffers
menu_title: Code sniffers
menu_order: 3
version: 2.0
github_link: coding-standards/code-standard-sniffers.md
---

## PHP code sniffers

We recommend the consistent use of a <i>code sniffer</i> to enhance the readability of your code and help ensure that it meets Magento code standards.  Although a sniffer will identify many more inconsistencies and errors than a manual edit, we recommend that you manually evaluate and make any fixes that your sniffer program has identified.  

### Magento provides

Magento provides 
Here are the sniffing tools that Magento provides: 

* <a href="https://github.com/magento-ecg/coding-standard.xml" target="_blank">ECG Magento PHP Code Sniffer Coding Standard</a>
for PHP developers who use a code sniffer in their development process. Use these specifications to configure your code sniffer of choice to bring your <i>PHP coding style closer to Magento PHP standards</i>. 

* <a href="https://github.com/magento/magento2/tree/develop/dev/tests/static/framework/Magento/Sniffs" target="_blank">built-in sniffers</a>  that are bundled in any Magento 2.x download from GitHub. This collection of sniffers replicates the syntax-checking features of Squizlabs PHP_CodeSniffer. 



### Alternative sniffers?

A quick search of the web reveals many open-source code sniffers.  Although Magento does not recommend a particular sniffer, <a href="http://pear.php.net/manual/en/package.php.php-codesniffer.faq.php" target="_blank">PHP_CodeSniffer</a> is popular in the Magento development community. It incorporates the same syntax-checking tools that are included in the bundled Magento sniffers  `composer.json` plus more extensive stylistic checks. 

















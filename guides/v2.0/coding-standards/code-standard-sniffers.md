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

We recommend the consistent use of <i>code sniffers</i> to enhance the readability of your code and determine whether it meets Magento code standards. (Coding standards are essential tools in large open-source development projects, where a robust, global community of developers write and refactor the code base. ) A sniffer will identify many more inconsistencies and errors than a manual edit will.  However, we recommend that you evaluate each potential fix yourself, and make your changes manually.



### Magento provides...

Magento provides the following code sniffing tools for PHP developers:


* The <a href="https://github.com/magento-ecg/coding-standard.xml" target="_blank">ECG Magento PHP Code Sniffer Coding Standard</a>

* core PHP sniffers



### Magento recommends
We recommend that you use your code sniffer(s) of choice to enhance the readability of your code. Consider the following approach:  
 
* Use <a href="http://pear.php.net/manual/en/package.php.php-codesniffer.faq.php" target="_blank">PHP_CodeSniffer</a> to identify <i>PHP syntax errors</i>.  

* Use the <a href="https://github.com/magento-ecg/coding-standard.xml" target="_blank">ECG Magento PHP Code Sniffer Coding Standard</a>  to bring your <i>PHP coding style closer to Magento PHP standards</i>.




### Conflicts between the core Magento code sniffers and the ECG Magento PHP Code Sniffer?













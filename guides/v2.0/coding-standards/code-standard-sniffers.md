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

We recommend the consistent use of <i>code sniffers</i> to enhance the readability of your code and ensure it meets Magento code standards.  A sniffer will identify many more inconsistencies and errors than a manual edit.  However, we recommend that you manually evaluate and make any fixes after running a sniffer program.  



### Magento provides these code sniffers

Magento provides the following code sniffing tools for PHP developers:


* The <a href="https://github.com/magento-ecg/coding-standard.xml" target="_blank">ECG Magento PHP Code Sniffer Coding Standard</a>

* core PHP sniffers

** Reviewers -- please clarify the name and location of the code sniffers that are part of any Magento installation downloaded from GitHub**



### Magento recommendations 
We recommend the following approach:  
 
* Use <a href="http://pear.php.net/manual/en/package.php.php-codesniffer.faq.php" target="_blank">PHP_CodeSniffer</a> to identify <i>PHP syntax errors</i>.  

* Use the <a href="https://github.com/magento-ecg/coding-standard.xml" target="_blank">ECG Magento PHP Code Sniffer Coding Standard</a>  to bring your <i>PHP coding style closer to Magento PHP standards</i>.


You are not required to use these tools. There are many open-source code sniffer(s) that can enhance the readability of your code. 

**Reviewers: do we want to list any alternative open source sniffers or simply suggest the preceding ones?**


### Conflicts between the core Magento code sniffers and the ECG Magento PHP Code Sniffer?

**Reviewers -- please add content here**













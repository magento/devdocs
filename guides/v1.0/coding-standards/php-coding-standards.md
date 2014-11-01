---
layout: howtom2devgde_chapters
title: PHP coding standards
---

<h1 id="m2devgde-stnd_coding">{{ page.title }}</h1>
<p><a href="{{ site.githuburl }}m2devgde/code-test/stnd_coding.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
<p>The Magento 2 development team has adopted the <a href="http://framework.zend.com/manual/1.12/en/coding-standards.overview.html">Zend Framework Coding Standard for PHP</a>, with a few exceptions.</p>
<p>In addition, a specific list of "best practices" has been implemented as requirements.</p>
<p>Where possible, these standard and requirements are enforced using Automated Static Code Analysis Tests.</p>
<p>standard and requirements which cannot be automatically validated must be applied through rigorous code review.</p>
<p>These standard are enforced for the core development team and are highly recommended for all developers implementing extensions and customizations for the Magento 2 product.
<div class="bs-callout bs-callout-info" id="info">
   <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
   <span class="glyphicon-class">
      <p>The numbering in these lists is static and should be used to reference specific standard when communicating with the Magento 2 development team.</p>
   </span>
</div>
<h2 id="m2devgde-zend">Zend framework coding standard</h2>
<p>Magento 2 has adopted the Zend Framework Coding Standard for PHP. Specifically, Magento 2 has the standard
   listed in the following table.
</p>
<p>Where possible, these standard are enforced using PHP_CodeSniffer.</p>
<h3 id="php-file-formatting">PHP file formatting</h3>
<p>&nbsp;</p>
<table>
   <thead>
      <tr>
         <th>Number</th>
         <th>Standard</th>
         <th>Automatically validated</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>1.1</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.php-file-formatting.html">General</a></td>
         <td>PHP_CodeSniffer (partially)</td>
      </tr>
      <tr>
         <td>1.2</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.php-file-formatting.html">Indentation</a></td>
         <td>PHP_CodeSniffer (partially)</td>
      </tr>
      <tr>
         <td>1.3</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.php-file-formatting.html">Maximum Line Length</a></td>
         <td>PHP_CodeSniffer</td>
      </tr>
      <tr>
         <td>1.4</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.php-file-formatting.html">Line Termination</a></td>
         <td>PHP_CodeSniffer</td>
      </tr>
   </tbody>
</table>

<h3 id="naming-conventions">Naming conventions</h3>
<p>&nbsp;</p>
<table>
   <thead>
      <tr>
         <th>Number</th>
         <th>Standard</th>
         <th>Automatically validated</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>2.1</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.naming-conventions.html">Class Names</a></td>
         <td>PHP_CodeSniffer (partially)</td>
      </tr>
      <tr>
         <td>2.2</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.naming-conventions.html">Abstract Class Names</a></td>
         <td>No</td>
      </tr>
      <tr>
         <td>2.3</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.naming-conventions.html">Interface Names</a></td>
         <td>No</td>
      </tr>
      <tr>
         <td>2.4</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.naming-conventions.html">File Names</a></td>
         <td>No</td>
      </tr>
      <tr>
         <td>2.5</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.naming-conventions.html">Function and Method Names</a></td>
         <td>PHP_CodeSniffer (partially)</td>
      </tr>
      <tr>
         <td>2.6</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.naming-conventions.html">Variable Names</a></td>
         <td>PHP_CodeSniffer (partially)</td>
      </tr>
      <tr>
         <td>2.7</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.naming-conventions.html">Constant Names</a></td>
         <td>PHP_CodeSniffer</td>
      </tr>
   </tbody>
</table>

<h3 id="coding-style">Coding style</h3>
<p>&nbsp;</p>
<table>
   <thead>
      <tr>
         <th>Number</th>
         <th>Standard</th>
         <th>Automatically validated</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>3.1</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">PHP Code Demarcation</a></td>
         <td>PHP_CodeSniffer (partially)</td>
      </tr>
      <tr>
         <td>3.2.1</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">String Literals</a></td>
         <td>No</td>
      </tr>
      <tr>
         <td>3.2.2</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">String Literals Containing Apostrophes</a></td>
         <td>No</td>
      </tr>
      <tr>
         <td>3.2.3</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">Variable Substitution</a></td>
         <td>No</td>
      </tr>
      <tr>
         <td>3.2.4</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">String Concatenation</a></td>
         <td>No</td>
      </tr>
      <tr>
         <td>3.3.1</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">Numerically Indexed Arrays</a></td>
         <td>No</td>
      </tr>
      <tr>
         <td>3.3.2</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">Associative Arrays</a></td>
         <td>No</td>
      </tr>
      <tr>
         <td>3.4.1</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">Class Declaration</a></td>
         <td>PHP_CodeSniffer (partially)</td>
      </tr>
      <tr>
         <td>3.4.2</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">Class Member Variables</a></td>
         <td>No</td>
      </tr>
      <tr>
         <td>3.5.1</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">Function and Method Declaration</a></td>
         <td>PHP_CodeSniffer (partially)</td>
      </tr>
      <tr>
         <td>3.5.2</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">Function and Method Usage</a></td>
         <td>PHP_CodeSniffer (partially)</td>
      </tr>
      <tr>
         <td>3.6.1</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">If/Else/Elseif Statements</a></td>
         <td>PHP_CodeSniffer (partially)</td>
      </tr>
      <tr>
         <td>3.6.2</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">Switch Statements</a></td>
         <td>No</td>
      </tr>
      <tr>
         <td>3.7.1</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">Inline Documentation - Format</a></td>
         <td>PHP_CodeSniffer (partially)</td>
      </tr>
      <tr>
         <td>3.7.2</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">Inline Documentation - Files</a></td>
         <td>No. See the following exceptions.</td>
      </tr>
      <tr>
         <td>3.7.3</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">Inline Documentation - Classes</a></td>
         <td>No. See the following exceptions.</td>
      </tr>
      <tr>
         <td>3.7.4</td>
         <td><a href="http://framework.zend.com/manual/1.12/en/coding-standards.coding-style.html">Inline Documentation Functions</a></td>
         <td>No</td>
      </tr>
   </tbody>
</table>

<h3 id="doc-blocks">Magento coding standard for documentation blocks</h3>
<p>For details about inline documentation standard see <a href="https://wiki.magento.com/display/MAGE2DOC/Magento+Coding+Standard+for+Documentation+Blocks">Magento Coding Standard for Documentation Blocks</a>.</p>
<h2>Exceptions to Zend Framework Coding standard</h2>
<p>Magento 2 PHP Coding standard deviate from the Zend Framework Coding standard in a few specific areas.</p>
<h3 id="best-practices">Best practices</h3>
<p>To ensure the code in Magento 2 is well-structured, readable, and easy to maintain, the Magento 2 team has adopted the following recommended best practices as requirements.</p>
<p>Extension developers are strongly encouraged to adhere to these best practices as well.</p>
<p><a href="http://phpmd.org/">PHPMD - PHP Mess Detector</a> is used to analyze the source code and identify potential problems.</p>

<h3 id="code-size">Code size rules</h3>
<p>&nbsp;</p>
<table>
   <thead>
      <tr>
         <th>Number</th>
         <th>Standard</th>
         <th>Threshold</th>
         <th>Automatically validated</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>4.1</td>
         <td><a href="http://phpmd.org/rules/index.html#code-size-rules">Manage Cyclomatic Complexity</a></td>
         <td>10 decision points per method</td>
         <td>PHP Mess Detector (PHPMD)</td>
      </tr>
      <tr>
         <td>4.2</td>
         <td><a href="http://phpmd.org/rules/index.html#code-size-rules">Manage NPath Complexity</a></td>
         <td>200 acyclic execution paths per method</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>4.3</td>
         <td><a href="http://phpmd.org/rules/index.html#code-size-rules">Avoid Excessive Method Length</a></td>
         <td>100 lines of code per method</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>4.4</td>
         <td><a href="http://phpmd.org/rules/index.html#code-size-rules">Avoid Excessive Class Length</a></td>
         <td>1000 lines of code per class</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>4.5</td>
         <td><a href="http://phpmd.org/rules/index.html#code-size-rules">Avoid Excessive Parameter Lists</a></td>
         <td>10 parameters per object</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>4.6</td>
         <td><a href="http://phpmd.org/rules/index.html#code-size-rules">Avoid Excessive Public Count</a></td>
         <td>45 methods/attributes per class</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>4.7</td>
         <td><a href="http://phpmd.org/rules/index.html#code-size-rules">Avoid Too Many Fields</a></td>
         <td>15 fields per class</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>4.8</td>
         <td><a href="http://phpmd.org/rules/index.html#code-size-rules">Avoid Too Many Methods</a></td>
         <td>50 methods per class</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>4.9</td>
         <td><a href="http://phpmd.org/rules/index.html#code-size-rules">Avoid Excessive Class Complexity</a></td>
         <td>100 WMC per class</td>
         <td>PHPMD</td>
      </tr>
   </tbody>
</table>

<h3 id="design">Design</h3>
<p>&nbsp;</p>
<table>
   <thead>
      <tr>
         <th>Number</th>
         <th>Practice</th>
         <th>Threshold</th>
         <th>Automatically validated</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>5.1</td>
         <td><a href="http://phpmd.org/rules/design.html#couplingbetweenobjects">
            Avoid Exit Expressions</a></td>
         <td>Never recommended in regular code</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>5.2</td>
         <td><a href="http://phpmd.org/rules/design.html#couplingbetweenobjects">Avoid Eval Expressions</a></td>
         <td>Never recommended</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>5.3</td>
         <td><a href="http://phpmd.org/rules/design.html#couplingbetweenobjects">Avoid Go to Statements</a></td>
         <td>Never recommended</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>5.4</td>
         <td><a href="http://phpmd.org/rules/design.html#couplingbetweenobjects">Manage Number of Children</a></td>
         <td>15 child classes per class</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>5.5</td>
         <td><a href="http://phpmd.org/rules/design.html#couplingbetweenobjects">Manage Depth of Inheritance</a></td>
         <td>6 parent classes per class</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>5.6</td>
         <td><a href="http://phpmd.org/rules/design.html#couplingbetweenobjects">Manage Coupling between Objects</a></td>
         <td>13 dependencies per class</td>
         <td>PHPMD</td>
      </tr>
   </tbody>
</table>

<h3 id="naming-conventions">Naming</h3>
<p>&nbsp;</p>
<table>
   <thead>
      <tr>
         <th>Number</th>
         <th>Practice</th>
         <th>Threshold</th>
         <th>Automatically validated</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>6.1</td>
         <td><a href="http://phpmd.org/rules/index.html#naming-rules">Avoid Short Variables</a></td>
         <td>3 characters per variable, property or parameter name</td>
         <td>PHPMD</td>
               </tr>
      <tr>
      <td>6.2</td>
      <td><a href="http://phpmd.org/rules/index.html#naming-rules">Avoid Long Variables</a></td>
      <td>20 characters per variable, property or parameter name</td>
      <td>PHPMD</td>
      </tr>
      <tr>
         <td>6.3</td>
         <td><a href="http://phpmd.org/rules/index.html#naming-rules">Avoid Short Method Names</a></td>
         <td>3 characters per method name</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>6.4</td>
         <td><a href="http://phpmd.org/rules/index.html#naming-rules">Avoid Constructors with Name as Enclosing Class</a></td>
         <td>Never recommended</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>6.5</td>
         <td><a href="http://phpmd.org/rules/index.html#naming-rules">Follow Constant Naming Conventions</a></td>
         <td>Should always be defined in uppercase</td>
         <td>PHPMD</td>
      </tr>
   </tbody>
</table>

<h3 id="unused-code">Unused code</h3>
<p>&nbsp;</p>
<table>
   <thead>
      <tr>
         <th>Number</th>
         <th>Practice</th>
         <th>Threshold</th>
         <th>Automatically validated</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>7.1</td>
         <td><a href="http://phpmd.org/rules/unusedcode.html#unusedprivatefield">Avoid Unused Private Fields</a></td>
         <td>Never recommended</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>7.2</td>
         <td><a href="http://phpmd.org/rules/unusedcode.html#unusedprivatefield">Avoid Unused Local Variables</a></td>
         <td>Never recommended</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>7.3</td>
         <td><a href="http://phpmd.org/rules/unusedcode.html#unusedprivatefield">Avoid Unused Private Methods</a></td>
         <td>Never recommended</td>
         <td>PHPMD</td>
      </tr>
      <tr>
         <td>7.4</td>
         <td><a href="http://phpmd.org/rules/unusedcode.html#unusedprivatefield">Avoid Unused Formal Parameters</a></td>
         <td>Never recommended</td>
         <td>PHPMD</td>
      </tr>
   </tbody>
</table>

<h3 id="code-duplicates">Code duplicates</h3>
<p>&nbsp;</p>
<table>
   <thead>
      <tr>
         <th>Number</th>
         <th>Practice</th>
         <th>Threshold</th>
         <th>Automatically validated</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>8.1</td>
         <td><a href="https://github.com/sebastianbergmann/phpcpd">Avoid duplicated code</a></td>
         <td>5 lines (or more)</td>
         <td>phpcpd</td>
      </tr>
      <tr>
         <td>8.2</td>
         <td><a href="https://github.com/sebastianbergmann/phpcpd">
            Avoid duplicated tokens</a></td>
         <td>70 tokens (or more)</td>
         <td>phpcpd</td>
      </tr>
   </tbody>
</table>


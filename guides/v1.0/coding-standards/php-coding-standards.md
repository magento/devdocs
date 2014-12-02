---
layout: default
group: coding-standards
subgroup: Coding standards
title: PHP coding standard
menu_title: PHP coding standard
menu_order: 2
github_link: coding-standards/php-coding-standards.md
---

<p>The Magento core development team uses a subset of the <a href="http://framework.zend.com/manual/1.12/en/coding-standard.html">Zend Framework Coding Standard for PHP</a>. Magento recommends that developers who create Magento extensions and customizations also use these standards.</p>
<p>Where possible, <code>PHP_CodeSniffer</code> is used to automatically enforce these standards. Otherwise, standards and requirements must be applied through rigorous code review.</p>
<h2 id="php-file-formatting">PHP file formatting</h2>
<ul>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.php-file-formatting.html#coding-standard.php-file-formatting.general">General</a>. Partially automated by <code>PHP_CodeSniffer</code>.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.php-file-formatting.html#coding-standard.php-file-formatting.indentation">Indentation</a>. Partially automated by <code>PHP_CodeSniffer</code>.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.php-file-formatting.html#coding-standard.php-file-formatting.max-line-length">Maximum Line Length</a>. Automated by <code>PHP_CodeSniffer</code>.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.php-file-formatting.html#coding-standard.php-file-formatting.line-termination">Line Termination</a>. Automated by <code>PHP_CodeSniffer</code>.</li>
</ul>
<h2 id="naming-conventions">Naming conventions</h2>
<ul>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.naming-conventions.html#coding-standard.naming-conventions.classes">Classes</a>. Partially automated by <code>PHP_CodeSniffer</code>.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.naming-conventions.html#coding-standard.naming-conventions.abstracts">Abstract Classes</a>. Not automated.t automated.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.naming-conventions.html#coding-standard.naming-conventions.interfaces">Interfaces</a>. Not automated.t automated.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.naming-conventions.html#coding-standard.naming-conventions.filenames">Filenames</a>. Not automated.t automated.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.naming-conventions.html#coding-standard.naming-conventions.functions-and-methods">Functions and Methods</a>. Partially automated by <code>PHP_CodeSniffer</code>.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.naming-conventions.html#coding-standard.naming-conventions.variables">Variables</a>. Partially automated by <code>PHP_CodeSniffer</code>.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.naming-conventions.html#coding-standard.naming-conventions.constants">Constants</a>. Automated by <code>PHP_CodeSniffer</code>.</li>
</ul>
<h2 id="coding-style">Coding style</h2>
<ul>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.coding-style.html#coding-standard.coding-style.php-code-demarcation">PHP Code Demarcation</a>. Partially automated by <code>PHP_CodeSniffer</code>.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.coding-style.html#coding-standard.coding-style.strings">Strings</a>. Not automated.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.coding-style.html#coding-standard.coding-style.arrays">Arrays</a>. Not automated.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.coding-style.html#coding-standard.coding-style.classes.declaration">Class Declaration</a>. Partially automated by <code>PHP_CodeSniffer</code>.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.coding-style.html#coding-standard.coding-style.classes.member-variables">Class Member Variables</a>. Not automated.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.coding-style.html#coding-standard.coding-style.functions-and-methods">Function and Methods</a>. Partially automated by <code>PHP_CodeSniffer</code>.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.coding-style.html#coding-standard.coding-style.control-statements.if-else-elseif">If/Else/Elseif</a>. Partially automated by <code>PHP_CodeSniffer</code>.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.coding-style.html#coding-standards.coding-style.control-statements.switch">Switch</a>. Not automated.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.coding-style.html#coding-standards.inline-documentation.documentation-format">Documentation Blocks -  Format</a>. Partially automated by <code>PHP_CodeSniffer</code>.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.coding-style.html#coding-standards.inline-documentation.files">Documentation Blocks -  Files</a>. Not automated. See the exceptions listed <a href="http://0.0.0.0:4000/guides/v1.0/coding-standards/docblock-standards.html">DocBlock standard</a>.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.coding-style.html#coding-standards.inline-documentation.classes">Documentation Blocks -  Classes</a>. Not automated. See the exceptions listed <a href="http://0.0.0.0:4000/guides/v1.0/coding-standards/docblock-standards.html">DocBlock standard</a>.</li>
   <li><a href="http://framework.zend.com/manual/1.12/en/coding-standard.coding-style.html#coding-standards.inline-documentation.functions">Documentation Blocks -   Functions</a>. Not automated.</li>
</ul>
<h2 id="doc-blocks">DocBlock standard</h2>
<p>For details, see <a href="http://0.0.0.0:4000/guides/v1.0/coding-standards/docblock-standards.html">DocBlock standard</a>.</p>
<h2>Exceptions to Zend Framework Coding standard</h2>
<p>The Magento PHP coding standard deviates from the Zend Framework coding standard in a few specific areas.</p>
<p>To ensure that Magento code is well-structured, readable, and easy to maintain, the Magento team uses the
<p><a href="http://phpmd.org/">PHPMD - PHP Mess Detector</a> to analyze the source code and identify potential problems.</p>
<p>Extension developers are strongly encouraged to adhere to these best practices.</p>
<h3 id="code-size">Code size rules</h3>
<p>For details about the following code size rules, see <a href="http://phpmd.org/rules/index.html#code-size-rules">Code Size Rules</a>.
<ul>
   <li>Manage Cyclomatic Complexity. 10 decision points per method.</li>
   <li>Manage NPath Complexity. 200 acyclic execution paths per method.</li>
   <li>Avoid Excessive Method Length. 100 lines of code per method.</li>
   <li>Avoid Excessive Class Length. 1000 lines of code per class.</li>
   <li>Avoid Excessive Parameter Lists. 10 parameters per object.</li>
   <li>Avoid Excessive Public Count. 45 methods/attributes per class.</li>
   <li>Avoid Too Many Fields. 15 fields per class.</li>
   <li>Avoid Too Many Methods. 50 methods per class.</li>
   <li>Avoid Excessive Class Complexity. 100 WMC per class.</li>
</ul>
<h3 id="design">Design</h3>
<p>For details about the following design best practices, see <a href="http://phpmd.org/rules/design.html#couplingbetweenobjects">
   Design Rules: CouplingBetweenObjects</a>:
<ul>
   <li>
      Avoid Exit Expressions. Never recommended in regular code.
   </li>
   <li>Avoid Eval Expressions. Never recommended.</li>
   <li>Avoid Go to Statements. Never recommended.</li>
   <li>Manage Number of Children. 15 child classes per class.</li>
   <li>Manage Depth of Inheritance. 6 parent classes per class.</li>
   <li>Manage Coupling between Objects. 13 dependencies per class.</li>
</ul>
<h3 id="naming-conventions">Naming rules</h3>
<p>For details about the following naming rules, see <a href="http://phpmd.org/rules/index.html#naming-rules">Naming Rules</a>:
<ul>
   <li>Avoid Short Variables. 3 characters per variable, property or parameter name.</li>
   <li>Avoid Long Variables. 20 characters per variable, property or parameter name.</li>
   <li>Avoid Short Method Names. 3 characters per method name.</li>
   <li>Avoid Constructors with Name as Enclosing Class. Never recommended.</li>
   <li>Follow Constant Naming Conventions. Should always be defined in uppercase.</li>
</ul>
<h3 id="unused-code">Unused code</h3>
<p>For details about unused code, see <a href="http://phpmd.org/rules/unusedcode.html#unusedprivatefield">Design Rules: UnusedPrivateField</a>:</p>
<ul>
   <li>Avoid Unused Private Fields. Never recommended.</li>
   <li>Avoid Unused Local Variables. Never recommended.</li>
   <li>Avoid Unused Private Methods. Never recommended</li>
   <li>Avoid Unused Formal Parameters. Never recommended.</li>
</ul>
<h3 id="code-duplicates">Code duplicates</h3>
<p>For details about code duplicates, see <a href="https://github.com/sebastianbergmann/phpcpd">https://github.com/sebastianbergmann/phpcpd</a>:</p>
<ul>
   <li>Avoid duplicated code. 5 lines (or more).</li>
   <li>
      Avoid duplicated tokens. 70 tokens (or more).
   </li>
</ul>


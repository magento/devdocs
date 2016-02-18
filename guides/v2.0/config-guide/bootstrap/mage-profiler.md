---
layout: default
group: config-guide
subgroup: Bootstrap
title: Enable profiling (MAGE_PROFILER)
menu_title: Enable profiling (MAGE_PROFILER)
menu_order: 7
menu_node: 
github_link: config-guide/bootstrap/mage-profiler.md
redirect_from: /guides/v1.0/config-guide/bootstrap/mage-profiler.html
---

#### Contents
*	<a href="#dirs-introduction">Introduction to Magento profiling</a>
*	<a href="#dirs-set">Set MAGE_PROFILER</a>


<h2 id="dirs-introduction">Introduction to Magento profiling</h2>
Magento profiling enables you to:

*	Displays in the browser a list of objects created and marks unused objects (also referred to as *dependency graphs*).

	Unused dependency graphs occur when an object with many methods and many dependencies is instantiated and not all of its methods are called. These unused methods are created but are never used, so processor time and memory spent to creation of these dependencies are wasted. 

*	Enable an HTML profiler

	You can use an HTML profiler with Magento to perform tasks such as analyzing performance. (The nature of profiling depends on the analytical tools you use.)

Magento provides the base functionality in <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Profiler.php" target="_blank">Magento\Framework\Profiler</a>.

<h2 id="dirs-set">Set MAGE_PROFILER</h2>
`MAGE_PROFILER` supports the following values:

*	`1` to enable an HTML profiler.

	You can also use one of the following values to enable a specific profiler:

	*	`firebug` which uses <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Profiler/Driver/Standard/Output/Firebug.php" target="_blank">Magento\Framework\Profiler\Driver\Standard\Output\Firebug</a>
	*	`csv` which uses <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Profiler/Driver/Standard/Output/Csvfile.php" target="_blank">Magento\Framework\Profiler\Driver\Standard\Output\Csvfile</a>
	*	Any other value (except `2`), including an empty value, which uses <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Profiler/Driver/Standard/Output/Html.php" target="_blank">Magento\Framework\Profiler\Driver\Standard\Output\Html</a>

*	`2` to enable dependency graphs.

	Dependency graphs typically display at the bottom of a page. The following figure shows portion of the output:

	<img src="{{ site.baseurl }}common/images/config_depend-graphs.png" width="650px">

You can set the value of `MAGE_PROFILER` in any of the ways discussed in <a href="{{ site.gdeurl }}config-guide/bootstrap/magento-how-to-set.html">Set the value of bootstrap parameters</a>.
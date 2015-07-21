---
layout: default
group: config-guide
subgroup: Bootstrap
title: Enable an HTML profiler (MAGE_PROFILER)
menu_title: Enable an HTML profiler (MAGE_PROFILER)
menu_order: 7
menu_node: 
github_link: config-guide/bootstrap/mage-profiler.md
---

#### Contents
*	<a href="#dirs-introduction">Introduction to Magento HTML profiling</a>
*	<a href="#dirs-set">Set MAGE_PROFILER</a>


<h2 id="dirs-introduction">Introduction to Magento HTML profiling</h2>
You can use an HTML profiler with Magento to perform tasks such as analyzing performance. (The nature of profiling depends on the analytical tools you use.)

Magento provides the base functionality in <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Profiler.php" target="_blank">Magento\Framework\Profiler</a>.

<h2 id="dirs-set">Set MAGE_PROFILER</h2>
`MAGE_PROFILER` supports the following values:

*	`firebug` which uses <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Profiler/Driver/Standard/Output/Firebug.php" target="_blank">Magento\Framework\Profiler\Driver\Standard\Output\Firebug</a>
*	`csv` which uses <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Profiler/Driver/Standard/Output/Csvfile.php" target="_blank">Magento\Framework\Profiler\Driver\Standard\Output\Csvfile</a>
*	Any other value, including an empty value, which uses <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Profiler/Driver/Standard/Output/Html.php" target="_blank">Magento\Framework\Profiler\Driver\Standard\Output\Html</a>

You can set the value of `MAGE_PROFILER` in any of the ways discussed in <a href="{{ site.gdeurl }}config-guide/bootstrap/magento-how-to-set.html">Set the value of bootstrap parameters</a>.
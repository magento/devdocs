---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Entities of the Magento Testing Framework
menu_title: Block
menu_order: 4
github_link: mtf/mtf_entities/mtf_block.md
---

<h2 id="mtf_block_overview">Block overview</h2>
Block is the area of user interface aimed to perform concrete functionality, for example, Search Box, Header, Footer.

The block object pattern is used in the MTF to avoid unnecessary duplication of code and makes tests easier to support.

A block can have the following features:

- Block can contain other blocks.
- Block can be used in several pages and blocks.

This topic shows how to create new block and explore its structure. It discusses renders, form mapping, and merging pages.

<h2 id="mtf_block_types">Create block for the test</h2>

A basic flow is the following:

* see name and path of the block you want to test
* create block class with logic you need fo the tests
* add block to the page
* run page generator

<h3 id="mtf_block_path">How to determine a block name and a path</h3>
To work with block you need its name and path. Magento has a feature that shows you this data right on the Magento page or implicitly in the code of a web page.

<h4 id="mtf_block_path_ui">See name and path of blocks in GUI</h4>

To enable this feature go through the following steps:

1. Login to Magento Admin as administrator
1. Follow **STORES > Configuration**
1. Change **Store View** to **Main Website** (the Template Path and Block name will only appear for current website)
1. Follow **ADVANCED > Developer**
1. Expand **Debug** tab
1. Set **Template Path Hints** to **Yes**
1. Set **Add Block Name to Hints** to **Yes**
1. **Save Config**

Voilà!

<a href="{{ site.baseurl }}common/images/mtf_block_name_path_in_ui.png"><img src="{{ site.baseurl }}common/images/mtf_block_name_path_in_ui.png" /></a>

<h4 id="mtf_block_path_code">See name and path of blocks in code</h4>

To enable this feature go through the following steps:

* Open <a href="https://github.com/magento/magento2/blob/master/lib/internal/Magento/Framework/View/Element/Template.php"><code>magento2/lib/internal/Magento/Framework/View/Element/Template.php</code></a>

* Find line

{% highlight php %}

return $this->fetchView($this->getTemplateFile());

{% endhighlight php %}

* Replace it with code 

{% highlight php %}

$name = $this->getNameInLayout();
$template = $this->getTemplateFile();
$class = get_class($this);
return "<!-- BEGIN $name using $template \n" . $class . "-->"
    . $this->fetchView($template)
    . "<!-- END $name using $template -->";
    
{% endhighlight php %}

* Save file

<a href="{{ site.baseurl }}common/images/mtf_block_name_path_in_code.png"><img src="{{ site.baseurl }}common/images/mtf_block_name_path_in_code.png" /></a>

<h3 id="mtf_block_ceate">Create block class</h3>

<h3 id="mtf_block_to-page">Add block to the page<h3>

<h3 id="mtf_block_gen">Run page generator</h3>

<h2 id="mtf_block_struct">Block structure</h2>


<h2 id="mtf_block_mapping">Mapping</h2>

<h3 id="mtf_block_mapping">Forms</h3>

<h3 id="mtf_block_mapping">Form Tabs</h3>

<h2 id="mtf_block_mapping_merdge">Merdge of mappings</h2>

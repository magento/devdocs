---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Where is version information stored?
menu_title: Where is version information stored?
menu_order: 4
level3_menu_node: level3child
level3_subgroup: versioning
github_link21: architecture/versioning.md
---

<h2 id="verpol">Where is version information stored?</h2>


Both software version numbers and product version numbers are found in the `version` field of the component's or metapackage's `composer.json` file. 


For example, you can declare software version as a version of the component:

<pre>

"name": "acme/foo",

"version": 1.2.0

</pre>

Or you can use it to declare a dependency on a particular version of a component:

<pre>

"require": {
    
   "acme/foo": "1.2.*",
    
   "acme/bar": "2.2.0"

}

</pre>




<h3>Related topics</h3>
<a href="{{ site.gdeurl21 }}architecture/back-compatibility.html">Backward compatibility</a>

<a href="{{ site.gdeurl21 }}architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>





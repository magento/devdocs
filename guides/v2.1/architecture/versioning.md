---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Versioning policy
menu_title: Versioning policy
menu_order: 4
version: 2.1
github_link21: architecture/versioning.md
---

<h2 id="verpol">Versioning policy overview</h2>

The Magento system and its components use the software (or "platform") version to indicate the compatibility of changes in the implementation (on the code level). By comparing two versions of the same component, one can tell whether it has any <a href="{{ site.gdeurl21 }}architecture/backward-compatibility.html">backwards-incompatible</a> changes in the public API or other significant code changes.

Magento software versioning complies with the following specifications:

* [Semantic Versioning 2.0.0](http://semver.org/)
* [Versioning specification of Composer system](https://getcomposer.org/doc/04-schema.md#version)
* [PHP version_compare()](http://php.net/version_compare)


<h3>Version formats</h3>


Stable release versions are in the format `MAJOR.MINOR.PATCH`, where:

* MAJOR indicates incompatible API changes

* MINOR indicates backward-compatible functionality has been added

* PATCH indicates backward-compatible bug fixes


The pre-release version format is: `MAJOR.MINOR.PATCH-<alpha | beta | rc>n`, where `alpha`, `beta` or `rc` are stability indications, as described in the `version_compare()` specification, and
`n` is an increment number to distinguish releases of the non-stable versions.

<h3>Public APIs</h3>

Source code is considered public API only if it is explicitly marked as such using the `@api` docblock tag. This designation indicates the code can be used or customized by other components, such as formal interfaces and dependency injection points.

For PHP code, compatibility of `@api` may be tracked on the level of structural elements (class signatures, interfaces, methods, etc.). For other source code, compatibility is tracked only on file level (for example, the file has been deleted or renamed).


<h3>Where versioning is used</h3>
The software version can be found in the source code of any Magento component or bundle, inside the `composer.json` file.

It can be declared as the version of the component:

{% highlight JSON %}
"name": "acme/foo",
"version": 1.2.0
{% endhighlight %}

Or it can be used to declare a dependency on a particular version of a component:

{% highlight JSON %}
"require": {
    "acme/foo": "1.2.*",
    "acme/bar": "2.2.0"
}
{% endhighlight %}


<h3>Release types</h3>
This section describes how exactly and when the software version numbers will be changed with releases.

The software version will always change with any release of Magento source code.

<h3>Development releases</h3>
In every development release ("pre-release" version), **the same value of version number will be propagated in all Magento components and their dependencies**.

Magento may update the `x.y.z` version in way perscribed by Semantic Versioning, but also could release the same `x.y.z` with different stability and/or index numbers, For example, `0.1.0-alpha1 -> 0.1.0-alpha2`, `0.1.0-alpha3` or `2.0.0-alpha3 -> 2.1.0-beta1 -> 2.1.0-beta2`

<table>
<tbody>
<tr>
<th></th>
<th>Previous Release</th>
<th>Next Release</th>
</tr>
<tr>
<td>Component Version</td>
<td><pre>
"name": "magento/foo",
"version": 0.1.0-alpha87</pre></td>
<td><pre>
"name": "magento/foo",
"version": 0.1.0-alpha88</pre></td></tr>
<tr>
<td>Dependency in Other Components</td>
<td><pre>"require": {
    "magento/foo": "0.1.0-alpha87"
}
</pre></td>
<td><pre>"require": {
    "magento/foo": "0.1.0-alpha88"
}
</pre></td></tr>
</tbody>
</table>

<h3>Stable releases</h3>

In every stable release, the same value of version number will be propagated in all components, but dependencies will have a wildcard (*) pattern.

The `x.y.z` numbers will change according to Semantic Versioning policy provisions. For example, `1.0.0 -> 1.0.1 -> 1.1.0 -> 1.5.0 -> 1.5.1 -> 2.0.0 -> 2.1.0`. Also, Magento may decide to change the "minor" version instead of the "patch" version.


<table>
<tbody>
<tr>
<th></th>
<th>Previous Release</th>
<th>Next Release</th>
</tr>
<tr>
<td>Component Version</td>
<td><pre>"name": "magento/foo",
"version": ~1.2
</pre>
<p>This is equivalent to &gt;= 1.2 &lt; 2.0.0.</p></td>
<td><pre>"name": "magento/foo",
"version": 1.3.0
</pre></td></tr>
<tr>
<td>Dependency in Other Components</td>
<td><pre>"require": {
    "magento/foo": "1.2.*"
}
</pre></td>
<td><pre>"require": {
    "magento/foo": "1.3.*"
}
</pre></td>
</tr>
</tbody>
</table>


<h3>Example lifecycle</h3>
The following steps demonstrate the packaging and backward compatibility story from the view of Magento, system integrators, and extension developers. This example uses several composer packages on the public github to simulate a merchant site, 2 core Magento modules, and a third-party extension.
<ol>
<li>Start by cloning the master branch from github.


   This sample in <code>composer.json</code> states this site is dependent on a release candidate of a simulated Magento 2.0 release.
   
{% highlight JSON %}
{
  "name": "myexamplestore/sample-site",
  "description": "A sample site",
  "type": "project",
  "version": "1.0.0",
  "require": {
    "myexamplestore/product-bundle": "2.0.0-RC1"
    }
}
{% endhighlight %}
</li>

<li>Run the <code>composer update</code> command. Core modules a & b are pulled down from the repository.</li>


<li>Now the SI includes a third-party extension by adding the composer dependency. This extension trusts our BC and sets the appropriate version on the module-a core dependency.

{% highlight JSON %}
{
  "name": "myexamplestore/sample-site",
  "description": "A sample site",
  "type": "project",
  "version": "1.0.0",
  "require": {
    "myexamplestore/product-bundle": "2.0.0-RC1",
    "myexamplestore/acme-extension": "~1.0"
    }
}
{% endhighlight %}
</li>

<li>Run <code>composer update</code> and see the new extension downloaded.</li>

<li>When Magento releases 2.0 GA, the SI updates the site <code>composer.json</code> to the release version.

{% highlight JSON %}{
  "name": "myexamplestore/sample-site",
  "description": "A sample site",
  "type": "project",
  "version": "1.0.0",
  "require": {
    "myexamplestore/product-bundle": "2.0.0",
    "myexamplestore/acme-extension": "~1.0"
    }
}
{% endhighlight %}
</li>

<li>Run <code>composer update</code> and notice the core modules were updated since RC1, but the extension remains unchanged because of BC policy. 

   This step repeats with each subsequent release of Magento (2.1, 2.2, 2.3, etc.). Deprecation strategy and community communication happens in 2.3.
</li>

<li>Magento decides backward incompatible changes are allowed and does this as part of the upcoming release 2.4.

   {% highlight JSON %}
{
  "name": "myexamplestore/sample-site",
  "description": "A sample site",
  "type": "project",
  "version": "1.0.0",
  "require": {
    "myexamplestore/product-bundle": "2.4.0-RC1",
    "myexamplestore/acme-extension": "~1.0"
    }
}
{% endhighlight %}
</li>

<li>Run <code>composer update</code> and notice that <code>acme-extension</code> is marked as incompatible. </li>

<li>Based upon previous communication, the developer has updated the extension so the SI updates to the new extension version.

{% highlight JSON %}
{
  "name": "myexamplestore/sample-site",
  "description": "A sample site",
  "type": "project",
  "version": "1.0.0",
  "require": {
    "myexamplestore/product-bundle": "2.4.0-RC1",
    "myexamplestore/acme-extension": "~2.0"
    }
}
{% endhighlight %}
</li>

<li>Run <code>composer update</code>. Updates to core modules are returned as third-party extensions.</li>

</ol>

<h3>Related topics</h3>
<a href="{{ site.gdeurl21 }}architecture/backward-compatibility.html">Backward compatibility</a>

<a href="{{ site.gdeurl21 }}architecture/archi_perspectives/ABasics_intro.html">Architectural basics</a>





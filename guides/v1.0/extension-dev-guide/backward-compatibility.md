---
layout: default
group: extension-dev-guide
subgroup: Concepts
title: Backwards compatibiliy
menu_title: Backwards compatibiliy
menu_order: 4

github_link: extension-dev-guide/backward-compatibility.md
---
<h1>Backwards Compatibility Policy</h1>

Merchants and developers want the process of upgrading between revisions of Magento 2 to be as easy as possible. For merchants, the process must be cost-effective, while developers want their extensions to be forward-compatible for as long as possible. 
To help mitigate these concerns, this release introduces a backwards compatibility (BC) policy for PHP code. Magento 2.0 uses [Semantic Versioning 2.0.0](http://semver.org/) to indicate whether a change breaks backward compatibility. Version numbers are in the format `MAJOR.MINOR.PATCH`, where:
* MAJOR indicates incompatible API changes
* MINOR indicates backwards-compatible functionality has been added
* PATCH indicates backward compatible bug fixes
The backwards compatibility policy applies to PHP code annotated with `@api` 
> We promise to be backwards compatible for classes and methods annotated with `@api` within MINOR and PATCH updates to our components. As changes are introduced, we will annotate methods with `@deprecated`.  The methods will only be removed with the next MAJOR component version. MAJOR changes will be scheduled no more than once per year; likely during the holiday season when site changes are unlikely.

We will also run a tool on the code that analyzes two code bases and determines what part of the version (MAJOR, MINOR, or PATCH) needs updating . If the tool determines that a MAJOR change has been detected and this change is outside the window of introducing a backwards-incompatible change, then the delivery process must be stopped and a bug opened against to code to address this breaking change.


<h2>What code is affected?</h2>
The backwards compatibility policy applies to PHP code annotated with `@api`. This includes the following:

* Any interface used by third parties to enhance the system (payment providers, shipping providers, search providers).  We have sometimes called these SPIs.* Any Service Contract* Public classes that are stable and likely extension points within the framework.* Events* Popular extension points, based on customer feedback

<h2>Service Provider Interfaces</h2>A PHP Interface in Magento can be used several ways by the core product and extension developers.* As an API. An interface is called by PHP code.
* As a Service Provider Interface (SPI). An interface can be implemented, allowing code to provide functionality to the platform. 
* As both. For example, in a Service Contract, we expect all calls to a module to be done through the Interface (API), but we also have support for 3rd parties to provide alternate implementations (SPI).
APIs and SPIs are not mutually exclusive. Therefore, we will not distinguish them separately. SPIs are annotated the same as APIs.
 However, the dependency rules are different:* If a module uses (calls) an API, it should be dependent on the MAJOR version and system provides backward compatibility in scope of current major version.  **API dependency example**
{% highlight JSON %}{    ...    "require": {        "magento/customer": "~2.0",    },    ...}
{% endhighlight %}* If a module implements an API/SPI, it should be dependent on MAJOR+MINOR version and system provides backward compatibility in scope of current minor version.
   **SPI dependency example**
{% highlight JSON %}{    ...    "require": {        "magento/customer": "~2.0.0",    },    ...}

{% endhighlight %}


<h2>Versions</h2>

To reduce complexities, for Magento 2.0 GA, all components will be versioned together. This does limit the value of our policy since a change in one module's public API will affect the version of the entire set. Additionally, we will likely extract the `@api` PHP interfaces into a separate package allowing more stability to 3rd parties. We will mature in this area and be able to further reduce coupling of our components post 2.0.  


<h2>What other code changes can cause backwards incompatibility?</h2>

Changes to the database can cause code to break.  As with PHP code, within a MAJOR version changes must be backwards compatible. This means:
* Database tables or columns will not be removed.* The format of data in a column will not be restructed. 
This may require redundancy in table structure and data until a clean occurs with next MAJOR release. Unlike the PHP code, there is no current plan for annotation and tooling to highlight breaking changes.
Changes in configuration files can potentially cause problems. As a result, these files will be monitored to ensure backward incompatible changes are not introduced.
<h2>How does the @api impact the version?</h2>* Adding  `@api` - will lead to increasing minor version.* Removing `@api` - will lead to increasing major version and therefore break compatibility.

<h2>Example Lifecycle</h2>
The following steps demonstrate the packaging and backwards compatibility story from the view of Magento, SI, and extension developer. This example uses several composer packages on public github to simulate a merchant site, 2 core Magenot modules and a 3rd party extension.
<ol>
<li>Start by cloning the master branch from github.


   This sample in <code>composer.json</code> states this site is dependent on a release candidate of a simulated Magento 2.0 release.
   
{% highlight JSON %}
{
  "name": "texanhogman/sample-site",
  "description": "A sample site",
  "type": "project",
  "version": "1.0.0",
  "require": {
    "texanhogman/product-bundle": "2.0.0-RC1"
    }
}
{% endhighlight %}
</li>

<li>Run the <code>composer update</code> command. Core modules a & b are pulled down from the repository.</li>


<li>Now the SI includes a 3rd-party extension by adding the composer dependency. This extension trusts our BC and sets the appropriate version on the module-a core dependency.

{% highlight JSON %}
{
  "name": "texanhogman/sample-site",
  "description": "A sample site",
  "type": "project",
  "version": "1.0.0",
  "require": {
    "texanhogman/product-bundle": "2.0.0-RC1",
    "texanhogman/acme-extension": "~1.0"
    }
}
{% endhighlight %}
</li>

<li>Run <code>composer update</code> and see the new extension downloaded.</li>

<li>When Magento releases 2.0 GA, the SI updates the site <code>composer.json</code> to the release version.

{% highlight JSON %}{
  "name": "texanhogman/sample-site",
  "description": "A sample site",
  "type": "project",
  "version": "1.0.0",
  "require": {
    "texanhogman/product-bundle": "2.0.0",
    "texanhogman/acme-extension": "~1.0"
    }
}
{% endhighlight %}
</li>

<li>Run <code>composer update</code> and notice the core modules were updated since RC1, but the extension remains unchanged because of BC policy. 

   This step will be repeated with each subsequent release of Magento (2.1, 2.2, 2.3, etc.). Deprecation strategy and community communication happens in 2.3.
</li>

<li>Magento decides backward incompatible changes are allowed and does this as part of the upcoming release 2.4.

   {% highlight JSON %}
{
  "name": "texanhogman/sample-site",
  "description": "A sample site",
  "type": "project",
  "version": "1.0.0",
  "require": {
    "texanhogman/product-bundle": "2.4.0-RC1",
    "texanhogman/acme-extension": "~1.0"
    }
}
{% endhighlight %}
</li>

<li>Run <code>composer update</code> and notice that <code>acme-extension</code> is marked as incompatible. </li>

<li>Based upon previous communication, the developer has updated the extension so the SI updates to the new extension version.

{% highlight JSON %}
{
  "name": "texanhogman/sample-site",
  "description": "A sample site",
  "type": "project",
  "version": "1.0.0",
  "require": {
    "texanhogman/product-bundle": "2.4.0-RC1",
    "texanhogman/acme-extension": "~2.0"
    }
}
{% endhighlight %}
</li>

<li>Run <code>composer update</code> and see updates to core modules are as a 3rd-party extension.</li>

</ol>







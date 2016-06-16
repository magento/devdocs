---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: PHP developer guide
menu_title: Backward compatibility
menu_order: 14
version: 2.0
github_link: extension-dev-guide/backward-compatibility.md
redirect_from: 
  - /guides/v1.0/architecture/index-cache/backward-compatibility.html
  - /guides/v2.0/architecture/index-cache/backward-compatibility.html
---
##{{page.menu_title}}



Merchants and developers want the process of upgrading between revisions of Magento 2 to be as easy as possible. For merchants, the process must be cost-effective, while developers want their extensions to be forward-compatible for as long as possible. 
To help mitigate these concerns, this release introduces a backward compatibility (BC) policy for PHP code. Magento 2.0 uses [Semantic Versioning 2.0.0](http://semver.org/) to indicate whether a change breaks backward compatibility. Version numbers are in the format `MAJOR.MINOR.PATCH`, where:

* MAJOR indicates incompatible API changes
* MINOR indicates backward-compatible functionality has been added
* PATCH indicates backward-compatible bug fixes
The backward compatibility policy applies to PHP code annotated with `@api` 

> We promise to be backward compatible for classes and methods annotated with `@api` within MINOR and PATCH updates to our components. As changes are introduced, we will annotate methods with `@deprecated`.  The methods will be removed only with the next MAJOR component version. MAJOR changes will be scheduled no more than once per year; likely during the holiday season when site changes are unlikely.

<h3>What code is affected?</h3>
The backward compatibility policy applies to PHP code annotated with `@api`. This includes the following:

* Any interface used by third parties to enhance the system (payment providers, shipping providers, search providers).  We have sometimes called these SPIs.
* Any service contract
* Public classes that are stable and likely extension points within the framework.
* Individual methods or constants
* Popular extension points, based on customer feedback

The `@api` tag can be applied to a constant, a method, or to the entire class/interface.  If the `@api` tag is applied at the file level, then all methods within the file are part of the public API. You do not need to annotate each method individually.

<h3>Service Provider Interfaces</h3>
A PHP Interface in Magento can be used several ways by the core product and extension developers.

* **As an API**. An interface is called by PHP code.
* **As a Service Provider Interface (SPI)**. An interface can be implemented, allowing code to provide functionality to the platform. 
* **As both**. For example, in a service contract, we expect all calls to a module to be done through the Interface (API), but we also have support for third parties to provide alternate implementations (SPI).
APIs and SPIs are not mutually exclusive. Therefore, we do not distinguish them separately. SPIs are annotated the same as APIs.
 
However, the dependency rules are different:

* If a module uses (calls) an API, it should be dependent on the MAJOR version and the system provides backward compatibility in scope of current major version.

  **API dependency example**
{% highlight JSON %}
{
    ...
    "require": {
        "magento/customer": "~2.0",
    },
    ...
}
{% endhighlight %}
* If a module implements an API/SPI, it should be dependent on the MAJOR+MINOR version, and the system provides backward compatibility in scope of the current minor version.
   **SPI dependency example**
{% highlight JSON %}
{
    ...
    "require": {
        "magento/customer": "~2.0.0",
    },
    ...
}

{% endhighlight %}


<h3>Versions</h3>

To reduce complexities, for Magento 2.0 GA, all components share the same version. This does limit the value of our policy since a change in one module's public API affects the version of the entire set. Additionally, we expect to extract the `@api` PHP interfaces into a separate package, allowing more stability to third parties. Magento expects to be able to further reduce coupling of components after the 2.0 release.  


<h3>What other code changes can cause backward incompatibility?</h3>

Changes to the database can cause code to break.  As with PHP code, within a MAJOR version changes must be backward compatible. This means:

* Database tables or columns will not be removed.
* The format of data in a column will not be restructured. 

This may require redundancy in table structure and data until a clean occurs with next MAJOR release. Unlike the PHP code, this code does not have automated identification of breaking changes.

Changes in configuration files can potentially cause problems. As a result, Magento will monitor these files to ensure backward incompatible changes are not introduced.

<h3>How does the @api impact the version?</h3>
* Adding  `@api` - Leads to increasing minor version.
* Removing `@api` - Leads to increasing major version and therefore breaking compatibility.







This page describes rules for backwards compatible development.

# Backward Сompatibility Policy

See [Visioning](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/versioning/index.html) document for information about what exactly is considered MAJOR and MINOR changes, and how it impacts extension developers.

The core Magento team and contributing developers work in two directions:

1.  New significant release (product's MINOR release)
    - **Necessary** MAJOR and MINOR changes **may be** allowed. Magento architecture team decides whether it's allowed or not.
2.  New patch release (product's PATCH release)
    - **Only** PATCH changes are allowed.

~~~
Note: Backward Сompatibility Policy is not applied to Plugins, Observers and Setup Scripts.
~~~

# Prohibited Code Changes

The following code modifications are forbidden for all code (both `@api` and not `@api`) and can only be made with an approval of a Magento architect:

*   PHP

    * interface/class removal
        ~~~
        Alternative implementation:
        Mark with `@deprecated` tag instead of removing it. Mark also all its methods as deprecated, so IDE highlights them as deprecated.
        ~~~
    *   public and protected method removal 
        ~~~
        Alternative implementation:
        Mark with `@deprecated` tag instead.
        Continue returning the same results from the method if possible, so the old functionality is preserved.
        ~~~
    *   introduction of a method to a class or interface
        ~~~
        Alternative implementation:
        Create a new interface with a new method.
        New interface may take over some existing methods from the class if it makes sense to group them together. In this case, corresponding methods in the old interface/class must be deprecated with `@see` annotation referencing the new interface/method. The old methods should proxy the calls to the new interface instead of duplicating the logic.
        An example of an interface with an extracted method: `Magento\Catalog\Api\CategoryListInterface` is responsible for `getList()` method, and `Magento\Catalog\Api\CategoryRepositoryInterface` doesn't have such method.
        For a **PATCH** product release, do NOT mark the new interface with `@api`.
        For a **MINOR** product release, an architect should mark (approve) the new interface with `@api` if it's applicable.
        ~~~
    *   static function removal
    *   parameter addition in public methods 
        ~~~
        Alternative implementation:
        Add a new method with necessary parameters as described in "introduction of a method to a class or interface" item. Deprecate old method. Reference the new method in a `@see` tag as a recommended replacement. Include an explanation of why the old method was replaced with the new one (e.g., there is a bug in the old method). 
        ~~~
    *   parameter addition in protected methods 
        ~~~
        Alternative implementation:
        Preserve the method as is. Create a new method with the new signature, and deprecate the old method. If possible declare the new method as private.
        
        /**
        * @deprecated This method is not intended for usage in child classes
        * @see updateScopedPrice($price, $storeId)
        */
        protected function updatePrice($price) 
        {
            $this->updateScopedPrice($price);
        }
          
        private function updateScopedPrice($price, $storeId) 
        {
            // Updated logic that takes into account $storeId
        }
        ~~~
    *   modification of default value for optional arguments in public and protected methods 
        ~~~ 
        Alternative implementation:
        Default argument values of public or protected methods are part of API of the class/interface.
        Create a new method with new interface instead. See "introduction of a method to a class or interface".
        It's encouraged to avoid optional parameters. Instead, create multiple methods if it's necessary to cover all use cases.
        ~~~
    *   method argument type modification
    *   modification of types of thrown exceptions (unless a new exception is a sub-type of the old one)
    *   constructor modification
        ~~~
        Alternative implementation:
        Add the new optional parameter to the constructor at the end of arguments list.
        In the constructor body, if new dependency is not provided (value of introduced argument is `null`) fetch the dependency using `Magento\Framework\App\ObjectionManager::getInstance()`.
        
        class ExistingClass
        {
            /** @var \New\Dependency\Interface */
            private $newDependency;
          
            public function __construct(
                \Old\Dependency\Intreface $oldDependency,
                $oldRequiredConstructorParameter,
                $oldOptinalConstructorParameter = null,
                \New\Dependency\Interface $newDependency = null
            ) {
                ...
                $this->newDependency = $newDependency ?: \Magento\Framework\App\ObjectManager::getInstance()->get(\New\Dependency\Interface::class);
            }
             
            public function existingFunction()
            {
                // Existing functionality
                ...
                ...
                
                // Use $this->newDependency wherever the new dependency is needed
                ...
                ...
            }
        }
           
        // Sample unit test code snippet follows
        class ExistingClassTest extends \PHPUnit_Framework_TestCase
        {
            private $existingClassObject;
           
            protected function setUp()
            {
                ...
                // Create dependency mcoks with $this->getMock() or $this->getMockBuilder()
                $newDependencyMock = $this->getMock(\New\Dependency\Interface::class);      
                  
                $objectManager = new \Magento\Framework\TestFramework\Unit\Helper\ObjectManager($this);
                $this->existingClassObject = $objectManager->getObject(
                    ExistingClass::class,
                    [
                        'oldDependency' => $oldDependencyMock,
                        'oldRequiredConstructorParameter' => 'foo',
                        'oldOptinalConstructorParameter' => 'bar',
                        'newDependency' => $newDependencyMock, 
                    ]
                );
            }
           
            public function testExistingFunction()
            {
                ...
                ...
            }
        }
        ~~~
    *   public and protected property removal 
        ~~~
        Alternative implementation:
        Mark with `@deprecated` tag instead.
        Continue storing the value in the property, if possible, so the old functionality is preserved.
        ~~~
    *   constant removal
    *   event argument removal
*   JS

    *   interface/class removal
    *   public and protected method removal
    *   introduction of method to interface
    *   introduction of abstract method to class
    *   static function removal
    *   argument addition (except for optional arguments) in public and protected methods
    *   modification of default value for optional arguments in public and protected methods
    *   public and protected property removal
    *   constant removal
*   XML Schema

    *   obligatory node addition
    *   obligatory attribute addition
    *   attribute/node type removal
    *   configuration file renaming
*   DB Schema

    *   Field modification (type, default values, properties)
    *   Table removal
    *   Introduction of new required field
*   CSS/LESS

    *   class removal
    *   mix-in removal
*   Magento APIs

    *   event removal
    *   layout handle removal
    *   store configuration path removal
    *   directory structure modification
    *   @api annotation removal
    *   magento tool command argument list modification
    *   magento tool command removal
*   Translatable phrases
    *   Phrase modification
*   Magento functional and integration tests
    *   Fixtures format
    *   Fixtures content (except changes forced by new functionality)
~~~
Note: Please note that in items above "renaming" === "removal"
~~~
~~~
Note: Customization code. Listed rules do not apply to customization code: Plugins, Observers, JS Mixins
~~~

# Allowed Code Changes

*   PHP
    *   Changing value of a constant 
        ~~~
        Explanation:
        Changing the value is backwards compatible by itself and so, it is allowed.
        Though client code may save the value of a constant in permanent storage or use it as an input or output value of a method, it's the responsibility of the client code to ensure that it is a reliable implementation. The client code should have enough control over the constant's value. In other words, it's discouraged to rely on a value of a constant from another module (or at least of another vendor).
        ~~~
    *   Stop setting a value to the Registry
        ~~~
        Explanation:
        It is backwards compatible. We discourage usage of the Registry, so 3rd-party extensions should not depend on values in the Registry.
        ~~~
    *   Adding an argument to an event

# Module Setup Version Bumps

1.  **Module data/schema version bumps MUST not be done in patch version releases if next minor version is already released.**

    Example:
    Before Magento 2.1 was released, module data/schema version could be changed in all patch releases of Magento 2.0
    After 2.1 is released, it is forbidden to modify version in 2.0 patch releases, but allowed to modify version in 2.1 patch releases until 2.2 is released.

2.  **Delivery of a fix which bumps module setup/data version in previous minor version should be preceded by its delivery into current unpublished version. If there is an urgent case when a fix is delivered into previous minor version, related fix into current unpublished version must be created with high priority.**

    Example:
    The issue which bumps setup/upgrade version is fixed in develop branch (2.2 release) and then ported into 2.1.x version (setup/upgrade version in both the fix and the port are the same).
    If the fix was initially made in 2.1.x, the pull request for porting it into develop (2.2 release) must be created immediately with high priority and must be delivered ASAP.

3.  **Setup version of a module should be higher than setup version of the same module in any of the previous releases.**
    For example, setup version for module Magento_Catalog being delivered to mainline/develop branch should have higher version (e.g., 2.1.3) than versions in branches 2.0 (e.g., Magento_Catalog has version 2.0.2 here) or 2.1 (e.g., Magento_Catalog has version 2.1.2 here).

# How To

## How to Backport Fixes with Breaking Changes to Patch Branches

The main rule is that **backwards compatibility is more important** than niceness and effort of the implementation. A Magento architect must be involved in making a decision.

This rule has the following potential drawbacks and those are expected:
*   Double work. Necessity to implement different solutions for "develop" branch (unpoming minor release) and patch release branches
*   Inability to refactor code in patch releases
*   Effort for implementing fixes in patch releases may be higher due to necessity to implement workarounds

## Coupling Between Objects Reaches Its Limit with a New Dependency
Sometimes it happens that adding a new **reasonable** dependency to an existing class makes it reaching the dependencies limit.
Assuming that the new dependency is legitimate/reasonable for this class, most likely, it means that the class had a poor design before the changes: too many dependencies, too many responsibilities. Usually, such class should be refactored and so excessive dependencies are removed and/or the class is broken down into smaller classes. But it would be a backward incompatible change if implemented as is.

For preserving backwards compatibility, public and protected interface of the class should be preserved. But the class should be reviewed and refactored so that parts of the logic go into smaller specialized classes.

* The existing class then should be functioning as a facade to preserve backwards compatibility, so existing usages of the refactored methods were not broken
* The old public/protected methods should be marked as deprecated with `@see` tag suggesting the new implementation for new usages
* All unused private properties/methods can be removed now
* All unused protected properties must be marked as deprecated. Type of the variable can be removed from the DocBlock, so it's not calculated as one of the dependencies
* If it's necessary to preserve constructor signature:
    * remove type hinting for unused parameters. This will remove dependency on their type
    * add `@SuppressWarnings(PHPMD.UnusedFormalParameter)` for unused parameters

# Deprecation
Magento 2 must not have alternative APIs. Whenever new implementation of some behavior is introduced, the old implementation must be marked as deprecated. Deprecation reason MUST be specified.

### PHP, JS and XML
_**@deprecated**_  tag must be used to mark methods as deprecated. Deprecation reason must be specified after @deprecated tag. **@see** tag MUST be used to recommend new api to use if old api was replaced with new one:

Deprecated tag in PHP
~~~
/**
 * @deprecated because new api was introduced
 * @see \New\Api
 */
 ~~~

Deprecated tag in XML/HTML
~~~
<!--
@deprecated because new api was introduced
@see NewApi
-->
~~~
### WebAPI

Whenever webapi method is replaced by new implementation that has different signature, that new implementation must be accessible on the same resource but with next sequential version

### Removal of deprecated code
Deprecated code should stay in the code for the following time frames:

*   `@api` code till next major version of the component
*   non-`@api` code for next 2 minor releases or until major release

# Documentation of Backwards Incompatible Changes
In case, any backwards incompatible changes are introduced (with an architectural approval), those MUST be documented.
Most of backwards incompatible changes are documented automatically by a tool and SHOULD NOT be documented manually. Those include:
*   Adding/removal of a class/interface
*   Adding/removal of a method
*   Modification of a method signature
*   Adding/removal of a class/interface constant
*   Adding removal of a class property

Auto-generated [CE changes](https://htmlpreview.github.io/?https://github.com/magento/devdocs/blob/develop/_includes/changes/ce/216-develop.html)

Auto-generated [EE changes](https://htmlpreview.github.io/?https://github.com/magento/devdocs/blob/develop/_includes/changes/ee/216-develop.html)

All other changes MUST be documented in a scope of the task that introduced the backwards incompatible changes. Examples of such changes:
*   change of input/output values format of a method
*   change of a value format in the DB
*   changes in XML files (layouts, configuration files)

## Where to document

Page https://github.com/magento/devdocs/blob/develop/guides/v\<version\>/release-notes/backward-incompatible-changes.md in the [devdocs repository](https://github.com/magento/devdocs/), where "`<version>`" is the MINOR version of the product ("2.2", "2.3", etc.).

Example: [backward-incompatible-changes.md](https://github.com/magento/devdocs/blob/develop/guides/v2.2/release-notes/backward-incompatible-changes.md). "2.2" in the path of the file indicates that it's intended for "2.2" release.

As you work with the `develop` branch of the project, update the page for the **next** MINOR product release. For example, as soon as 2.2 is released, a new page [backward-incompatible-changes.md](https://github.com/magento/devdocs/blob/develop/guides/v2.3/release-notes/backward-incompatible-changes.md) should appear, so start working with this new page.

In order to update the page, create a PR to the devdocs repo with the changes.

---
group: contributor-guide
title: Backward compatible development
redirect_from:
- guides/v2.3/contributor-guide/backward-compatible-development/index.html
- guides/v2.4/contributor-guide/backward-compatible-development/index.html
---
This page describes rules and best practices for backward compatible development.

## Backward Compatibility Policy

See the [versioning][versioning] documentation for the definitions of MAJOR and MINOR changes and how it impacts [extension](https://glossary.magento.com/extension) developers.

 {:.bs-callout-info}
 Note that the 'marketing version' (Magento 2.3) is different than the official version number. v2.2 -> v2.3 represents a MAJOR release for Magento, even though semantically, it is a MINOR increase to the 'marketing version' number.

The core Magento team and contributing developers work in two release types:

1. New and significant release (product's MINOR release)

   -  Necessary MAJOR and MINOR changes are allowed, but the Magento architecture team ultimately decides what is allowed.

1. New patch release (product's PATCH release)

   -  PATCH changes are allowed, but MAJOR and MINOR changes are not allowed.

 {:.bs-callout-info}
Backward Compatibility Policy is not applied to Plugins, Observers and Setup Scripts.

## Prohibited code changes

The following modifications are forbidden for `@api` code without the approval of the **Magento architect**, **Product Manager** and **Engineering Manager** assigned to the component.

 {:.bs-callout-info}
The rules listed do not apply to customization code (e.g. Plugins, Observers, JS Mixins, etc.).

### Composer

#### Introducing a new dependency from an existing module

Introducing a new dependency from an existing module is a backward incompatible change because we cannot guarantee when Magento will enable the required module. As a result, we cannot satisfy the dependency in this way.

### PHP

The following is a list of prohibited [PHP](https://glossary.magento.com/php) code changes and possible alternative implementations.

#### Interface/class removal

Mark the class with the `@deprecated` tag instead of removing it, and mark all of its methods as deprecated so an IDE can highlight them as deprecated.

#### Public and protected method removal

Mark the method with the `@deprecated` tag instead of removing it.

Continue returning the same results from the method if possible, so the old functionality is preserved.

#### Introduction of a method to a class or interface

Create a new interface with a new method instead of introducing a method to a class or interface.

The new interface may take over existing methods from the class if it makes sense to group them together.
In this case, you must deprecate corresponding methods in the old interface/class with the `@see` annotation.
The old methods should proxy the calls to the new interface instead of duplicating the logic.

For an example of an interface with an extracted method see the `Magento\Catalog\Api\CategoryListInterface`.
This interface is responsible for the `getList()` method, but `Magento\Catalog\Api\CategoryRepositoryInterface` does not have that method.

-  For a **PATCH** product release, do NOT mark the new interface with `@api`.
-  For a **MINOR** product release, an architect marks, or approves, the new interface with `@api` if applicable.

#### Removing static functions

Do not remove static functions.

#### Adding parameters in public methods

Deprecate the method and add a new method with the new parameter(s) instead of adding them to a public method.

Follow the alternative implementation described earlier for introducing a new method to a class or interface.

Reference the new method in a `@see` tag as a recommended replacement.
Explain the reasons for replacing the old method with the new one (e.g., there is a bug in the old method).

#### Adding parameters in protected methods

Instead of adding parameters to protected methods, Create a new method with a new signature and deprecate the old method without changing it.

Declare the new method as private if possible.

Example code:

```php
/**
- @deprecated This method is not intended for usage in child classes
- @see updateScopedPrice($price, $storeId)
 */
protected function updatePrice($price)
{
    $this->updateScopedPrice($price);
}

private function updateScopedPrice($price, $storeId)
{
    // Updated logic that takes into account $storeId
}
```

#### Modifying the default values of optional arguments in public and protected methods

This is forbidden because the default argument values of public or protected methods are part of the [API](https://glossary.magento.com/api) of the class/interface.

As an alternative, Create a new method with new interface following the alternative implementation for creating a new method for a class or interface.

Create multiple methods to cover all use cases to avoid using optional parameters.

#### Modifying the method argument type

Do not modify a method argument type.

#### Modifying the types of thrown exceptions

Do not modify the types of thrown exceptions unless a new [exception](https://glossary.magento.com/exception) is a sub-type of the old one.

#### Throwing a new type of exception from an existing method

You SHOULD NOT throw a new type of exception from an existing method. The existing clients of the method may not expect this change and consequently fail to properly handle the exception.

#### Adding a constructor parameter

Add a new optional parameter to the constructor at the end of the arguments list instead of modifying the constructor.

In the constructor body, if the new dependency is not provided (i.e. the value of the introduced argument is `null`), fetch the dependency using `Magento\Framework\App\ObjectManager::getInstance()`.

Prefix the type name with a question mark when declaring a parameter with a `null` default value.

{% collapsible Example Code %}

```php
class ExistingClass
{
    /** @var \New\Dependency\Interface */
    private $newDependency;

    public function __construct(
        \Old\Dependency\Interface $oldDependency,
        $oldRequiredConstructorParameter,
        $oldOptionalConstructorParameter = null,
        ?\New\Dependency\Interface $newDependency = null
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
        // Create dependency mocks with $this->getMock() or $this->getMockBuilder()
        $newDependencyMock = $this->getMock(\New\Dependency\Interface::class);

        $objectManager = new \Magento\Framework\TestFramework\Unit\Helper\ObjectManager($this);
        $this->existingClassObject = $objectManager->getObject(
            ExistingClass::class,
            [
                'oldDependency' => $oldDependencyMock,
                'oldRequiredConstructorParameter' => 'foo',
                'oldOptionalConstructorParameter' => 'bar',
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
```

{% endcollapsible %}

#### Removing or renaming public and protected properties

Mark properties with the `@deprecated` tag instead of removing or renaming them.
Continue storing the value in the property to preserve the old functionality.

#### Removing or renaming constants

Do not remove or rename constants.

#### Removing, renaming, or changing the type of event arguments

Do not remove or rename [event](https://glossary.magento.com/event) arguments.
Do not change argument types.
Instead of changing argument name or type, introduce new event argument with new name or type and deprecate the old argument by adding `@deprecated` annotation before dispatching the event.

Example code:

```php
$transportObject = new DataObject($transport);

/**
 * Event argument `transport` is @deprecated. Use `transport_object` instead.
 */
$this->eventManager->dispatch(
    'email_invoice_set_template_vars_before',
    ['sender' => $this, 'transport' => $transportObject->getData(), 'transport_object' => $transportObject]
);
```

### JS

The following is a list of prohibited JS code changes:

-  Removing or renaming an interface or class
-  Removing or renaming public or protected methods
-  Introducing a method to an interface
-  Introducing an abstract method to a class
-  Removing or renaming static functions
-  Adding non-optional arguments in public and protected methods
-  Modifying the default value for optional arguments in public and protected methods
-  Removing or renaming public or protected properties
-  Removing or renaming constants

### XML Schema

The following is a list of prohibited [XML](https://glossary.magento.com/xml) Schema changes:

-  Adding an obligatory node
-  Adding an obligatory attribute
-  Removing or renaming an attribute or node type
-  Removing or renaming a configuration file

### DB Schema

The following is a list of prohibited DB Schema changes:

-  Modifying field type, default value, or property
-  Removing or renaming a table
-  Introducing a required field

### CSS/Less

The following is a list of prohibited CSS/Less changes:

-  Removing or renaming a class
-  Removing or renaming a mix-in
-  Removing or renaming a variable

### Magento APIs

The following is a list of prohibited Magento API changes:

-  Removing or renaming an event
-  Removing or renaming a [layout](https://glossary.magento.com/layout) handle
-  Removing or renaming a store configuration path
-  Modifying the directory structure
-  Removing an @api annotation
-  Modifying the Magento tool command argument list
-  Modifying or removing the Magento tool command
-  [Topic names for message queue]({{ site.gdeurl }}/extension-dev-guide/message-queues/config-mq.html), except automatically generated names (e.g. topic names generated by [Asynchronous Web API]({{ site.gdeurl }}/rest/asynchronous-web-endpoints.html). Automatically generated topic names should be treated as private implementation and may be changed at any time if needed.

### Translatable phrases

Do not modify any translatable phrase.

### Magento functional and integration tests

The following is a list of prohibited changes to Magento functional and integration tests:

-  Changing a fixture format
-  Changing a fixture content (except changes forced by new functionality)

## Allowed Code Changes

### PHP

#### Changing the value of a constant

Changing the value of a constant is itself a backward compatible change.

Even if client code saves the value in permanent storage or use it as input or output of a method, it is the responsibility of that code to ensure that it is a reliable implementation.

The client code should have enough control over the constant's value.
Do not rely on a value of a constant from another [module](https://glossary.magento.com/module) or another vendor.

#### Stop setting a value to the Registry

Setting a value to the Registry is backward compatible.
However, Magento discourages usage of the Registry, so third-party extensions should not depend on values in the Registry.

#### Adding an argument to an event

Adding an argument to an event is allowed.

## Version changing rules for module setup

1. The module data/schema version must not increase in a patch version release if the next minor version is already released.

   For example, the module data/schema version for all patch releases of Magento 2.0 can change prior to the release of Magento 2.1.
   After 2.1 releases, the version cannot change for 2.0 patch releases, but it can change for 2.1 patch releases until Magento 2.2.

1. Deliver fixes that bump the module setup/data version in the current, unpublished version before delivering it to previous minor versions.
   In cases where an urgent fix was delivered in a previous minor version, treat the fix for the current unpublished version as a high priority task.

   For example, issue fixes that change the setup/upgrade version in the unreleased `develop` branch are delivered first before being ported into the released branches.
   If the fix was made for a released branch, a pull request for porting it into the `develop` branch must be created with a high priority and delivered as soon as possible.

1. The setup version of a module must be higher than previous releases of the same module.

   For example, the setup version for a fix for the Magento_Catalog module is higher in the `develop` branch (2.1.3) than previous branch versions (2.0.2 and 2.1.2 for versions 2.0 and 2.1).

## Backporting fixes with breaking changes to patch branches

Backward compatibility is more important than niceness and implementation effort, but a Magento architect must be involved in making a decision.

Potential drawbacks:

-  It is double the work when it is necessary to implement different solutions for the `develop` branch (upcoming minor release) and patch release branches.
-  Inability to refactor code in patch releases
-  Effort for implementing fixes in patch releases may be higher due to necessary implementation workarounds.

## Refactoring classes that reach limit of coupling between objects

Poorly designed classes with too many responsibilities and dependencies should be refactored to prevent them from reaching the limit of coupling between objects, but removing excessive dependencies and/or breaking the class down into smaller classes is a backward incompatible implementation.

Preserve public and protected class interfaces to maintain backward compatibility.
Review and refactor the class such that parts of the logic go into smaller specialized classes without breaking backward compatibility.

-  Turn the existing class into a facade to prevent existing usages of the refactored methods from breaking.
-  The old public/protected methods should be marked as deprecated with the `@see` tag to suggest the new implementation for new usages.
-  Remove all unused private properties/methods.
-  Mark as deprecated unused protected properties.
  Remove the variable type indicated in the DocBlock to remove the dependency.
-  To preserve the constructor signature:
   -  Remove type hinting for unused parameters to remove dependency on their type.
   -  Add `@SuppressWarnings(PHPMD.UnusedFormalParameter)` for unused parameters.

## Deprecation

Magento 2 must not have alternative APIs.
Whenever you introduce a new implementation of some behavior, mark the old implementation as deprecated and specify the reason.

### PHP, JS, and XML

Use the `@deprecated` tag to mark methods as deprecated and follow it up with an explanation.

Use the  `@see` tag to recommend the new API to use instead of the old one.

Preserve `@api` tag when deprecating `@api`-marked code.

#### Deprecating in PHP and JS

Comment:

```terminal
/**
 * @deprecated because newAPI  was introduced
 * @see \New\Api
 */
```

Trigger a deprecation message in deprecated functions/classes to notify extensions/customizations that use them.

PHP:

```php
trigger_error('Class is deprecated', E_USER_DEPRECATED);
```

JS:

```js
console.warn('Function is deprecated');
```

#### Deprecating in XML/HTML

```xml
<!--
@deprecated because newAPI  was introduced
@see NewApi
-->
```

### WebAPI

When replacing a WebAPI method with a new implementation that has a different signature, make sure it remains accessible on the same resource but with the next sequential version.

### Deprecation testing

Every piece of code that is deprecated MUST be covered by a static test that will fail if some code uses the deprecated piece of code.

### Removal of deprecated code

Deprecated code is preserved for the following time frames:

-  `@api` code: Until the next major version of the component
-  non-`@api` code: The next 2 minor releases or until a major release

## Documentation of Backward Incompatible Changes

Backward incompatible changes must be approved by an architect and documented in the scope of the task that introduces those changes.

Examples of these tasks include:

-  Changing the input/output values format of a method
-  Changing a value format in the DB
-  Changing XML files (layouts, configuration files, etc.)

Some changes are detected and documented by an automated tool.
These backward incompatible changes do not need manual documentation:

-  Adding/removing a class/interface
-  Adding/removing a method
-  Modifying a method signature
-  Adding/removing a class/interface constant
-  Adding removing a class property

Auto-generated [{{site.data.var.ce}} changes]({{ site.gdeurl }}/release-notes/backward-incompatible-changes/reference.html)
Auto-generated [{{site.data.var.ee}} changes]({{ site.gdeurl }}/release-notes/backward-incompatible-changes/reference.html)

### Where to document

In the [DevDocs repository][devdocs-repo], manually add backward incompatible changes to the following file:

`https://github.com/magento/devdocs/blob/master/src/guides/v<version>/release-notes/backward-incompatible-changes/index.md`

Where: `<version>` is the MINOR version of the product (for example, 2.3).

Example: [`https://github.com/magento/devdocs/blob/master/src/guides/v2.3/release-notes/backward-incompatible-changes/index.md`][2.3-bic-page].

Update the page for the *next* MINOR product release when working in the `2.x-develop` branch of the DevDocs repository.

For example, when 2.3 is released, a new `backward-incompatible-changes.md` for 2.4 becomes available for editing.

In order to update the page, create a PR to the DevDocs repository with your changes.

## GraphQl backward compatibility policy

-  For backward compatibility, the GraphQL schema should be considered an API.
-  To allow for the evolution of GraphQL, we allow MINOR changes to be added within a PATCH. This may change in the future.

<!-- Link definitions -->

[versioning]: {{ site.gdeurl }}/extension-dev-guide/versioning/index.html
[devdocs-repo]: https://github.com/magento/devdocs
[2.3-bic-page]: https://github.com/magento/devdocs/blob/master/src/guides/v2.3/release-notes/backward-incompatible-changes/index.md

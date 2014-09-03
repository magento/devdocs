---
layout: howtom2devgde_chapters
title: Dependency Injection
---
 
# Dependency Injection 

<p><a href="{{ site.githuburl }}guides/v1.0/m2devgde/svcs-framework/build-svc.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

## Introduction

Dependency injection in Magento 2 is the alternative to the `Mage` class used in Magento 1. With dependency injection, an object does not need to locate an object or value on which it depends. Instead, a PHP class declares its dependencies in a constructor&mdash;a process referred to as *constructor dependency injection*.

Following is an example that defines a constructor dependency on `SomeServiceInterface`:
	
<pre>
public function __construct(\Magento\Module\Service\V1\SomeServiceInterface $service)
{
	$this->service = $service;
}
public function doSomething()
{
&nbsp;&nbsp;&nbsp;&nbsp;$data = array();
&nbsp;&nbsp;&nbsp;&nbsp;...
&nbsp;&nbsp;&nbsp;&nbsp;$this->service->something($data);
}</pre>

The benefit of constructor dependency injection is that the object is immutable.

(A second type of depedency injection, *method injection*, is discussed later in this topic.)

The <a href="https://github.com/magento/magento2/blob/master/lib/internal/Magento/Framework/ObjectManager/ObjectManager.php" target="_blank">object manager</a> specifies the dependency environment. It's a separate object to avoid having to repeat the same code over and over again.

## Terms Used

This page uses the following terms:

*	Factory: An object that creates the objects of a specific type. Unlike business objects, a factory can be dependent on the object manager.
*	Proxy: An object that implements the same interface as the proxied (original) object, but unlike this original object has only one dependency&mdash;the object manager. A proxy is used for lazy loading of optional dependencies.

## Using Dependency Injection in Your Module

The object manager needs the following configurations:

*	Class definitions for retrieving the types and numbers of class dependencies
*	Instance configurations for retrieving how the objects are instantiated and for defining their lifecycle
*	Abstraction-implementation mappings (that is, interface preferences) for defining what implementation is to be used upon request to an interface

The Magento software uses class constructor signatures to retrieve information about class dependencies; that is, to define what dependencies are to be passed to an object. The Magento software reads constructors using reflection and we recommend you use the Magento compiler tool to pre-compiled class definitions for better performance.

### Dependency Injection Type Configurations

Dependency injection is configuration-based; configurations are validated by <a href="https://github.com/magento/magento2/blob/master/lib/internal/Magento/Framework/ObjectManager/etc/config.xsd" target="_blank">config.xsd</a>.

Object manager configurations can be specified at three levels:

*	Global configurations for a module (`app/etc/di/*.xml`)
*	Global configurations for a module (`[your module directory]/etc/di.xml`)
*	Area-specific configurations for a module (`[your module directory]/etc/[your area code]/di.xml`)

	The area-specific configurations fall into the application areas' configurations (`frontend`, `adminhtml`, and so on). For example, here is the <a href="https://github.com/magento/magento2/blob/master/app/code/Magento/Customer/etc/adminhtml/di.xml" target="_blank">Magento Customer module's adminhtml di.xml</a>.
	
	The application area-specific configurations are loaded separately as necessary.




#### Related Topics:


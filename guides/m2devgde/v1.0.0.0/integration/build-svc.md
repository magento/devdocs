---
layout: howtom2devgde_chapters
title: Basics of Building a Service
---

# Basics of Building a Service

<p><a href="https://github.com/magento/devdocs/blob/master/guides/m2devgde/v1.0.0.0/svc-framework/build-svc.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}/common/images/newWindow.gif"/></p>

A _service_ is basically a contract between code that uses the service and an integration that implements the service. The service itself is PHP code--typically one or more interfaces, classes, and methods. To review the properties of a service, see TBD.

The code that uses a service should depend on the interface rather than on the service implementation to enable the use of a different implementation if needed.

## About the Service Interface

Some important characteristics of a service interface:

*	The methods must be annotated to describe the types of input, which are used to generate contracts for the WebAPI framework. 
	
	Input arguments can be scalar types, arrays or objects. If objects are used, they should be implemented as [Service Data Objects](#About Service Data Objects).

*	The metods must be annotated to describe the types of the output, which are used to generate contracts for WebAPI framework. 

	Output argument can be scalar types, arrays or objects. If objects are used, they should be implemented as [Service Data Objects](#About Service Data Objects).

*	Every interface must be versioned and the version must be a suffix of the interface name.

	Versions must be numbered V1, V2, and so on.
	
To see an example of a Customer service interface, see <a href="https://github.com/magento/magento2/blob/master/app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php" target="_blank">app/code/Magento/Customer/Service/V1/CustomerAccountServiceInterface.php</a> on the Magento 2 github.

## About Service Data Objects

a
b

c

d

e

gf

r

a

a

a

a


Magento 2 API Guide - Outline
=============================

This outline describes the new Magento 2 API Guide.

The goals of this guide are to:

* Introduce developers to API concepts and common tasks.
* Provide guidance for developers who want to extend the Magento APIs.
* Discuss ways of extending with the Magento APIs

As a model, I plan to use the [Google Developers Guide](http://developer-support-handbook.appspot.com/documentation.html#developers-guide).


CHAPTER: Get started
--------------------

Describe the PHP, REST, and SOAP APIs, and discuss the ways users can access the APIs.

CHAPTER: Concepts
-----------------

- What is a "public interface"? Discuss versioning and backwards compatibility policies.
- What is an API? What are the types of APIs? For example, service layer.
- What is an SPI? What are the types of SPIs? For example, extensibility point, events, interfaces, conventions in the file system, and so on.

Cull material from existing API Reference/s. For example, General API Information (each reference has a section like this - we need to consolidate these in an intelligent way.) Also talk about how to access the APIs.
### SECTION: Authentication

### SECTION: Request/Response Types

### SECTION: Credentials

### SECTION: Schema

### SECTION: Error handling

CHAPTER: Create an extension
----------------------------

### SECTION: Create a module
### SECTION: Configure a module
Add appropriate etc/XML files to setup/configure your module
This includes creating webapi.xml to turn on core APIs to be used along with oath v1 handshaking to your SAAS platform if desired
### SECTION: Create a service
### SECTION: Configure
Optionally expose the service(s) methods as APIs via webapi.xml configuration
### Best practices
How a service should be written (all read methods in 1 class; all writes in another);  can directly access models for performance
### Create controllers that call services if needed
### Create blocks/layout that use service if needed
### Create EAV/models/tables if needed by service

CHAPTER: Customize Magento service
----------------------------------
(? that’s been fully service layered or all I care about are the APIs )

### SECTION: Create a module
### SECTION: Configure a module
Add appropriate etc/xml files to configure/setup
Plugin a service to customize service behavior ( typically will have to do most/all methods of a service )
### SECTION: Optionally add EAV/models/tables if needed by service
### SECTION: Create controllers that call services if needed
### SECTION: Create blocks/layout that use service if needed

CHAPTER: Customize Magento that’s not a service
-----------------------------------------------

### SECTION: Create a module
### SECTION: Add appropriate etc/xml files to configure/setup
### SECTION: Create a plugin(s) to the appropriate model(s)
### SECTION: Optionally add EAV/models/tables if needed
### SECTION: Create controllers that call services if needed
### SECTION: Create blocks/layout that use service if needed

CHAPTER: Publish your extension
-------------------------------
How to publish extension on connect so others will find/buy it

    ?ask Tanya

How to deploy a production instance + setup

    ?ask Tanya; Piotr
    Ask William Harvey for performance tweaks/system setup details (?standard system setup?)

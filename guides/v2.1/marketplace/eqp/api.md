---
layout: default
group: eqp
subgroup: 01_Introduction
title: EQP API Reference
landing-page: EQP 
menu_title: EQP API Reference
menu_order: 1
menu_node: parent
version: 2.0
github_link: marketplace/eqp/api.md
functional_areas:
  - Marketplace
  - EQP
---

## Introduction


The Marketplace Extension Quality Program (EQP) is slated to support the REST APIs access to the [Developer Portal](https://developer.magento.com) . The availability of these APIs to the Magento Marketplace Extension Development Community will be announced at some future date.

These APIs will facilitate the full EQP submission process for Magento 1 and Magento 2 Extensions, and Themes to be published to the [Marketplace Store](https://marketplace.magento.com).
It also provides mechanisms for the developers to manage their extensions uploaded to the [Developer Portal](https://developer.magento.com). 

This document will provide an overview of the basic concepts, planned capabilities  and a preview of the version 1.0 of the  REST API details. All feedbacks can be sent to <marketplace-eqp-apis@magento.com>.

## Overview


The EQP APIs are organized on REST concepts using standard HTTP verbs (GET, POST, PUT and DELETE), using JSON in all responses, and indicating any errors via  HTTP Response codes.

The APIs can only be accessed through a secure protocol via HTTPS, and the base url will be:

    https://developer-api.magento.com

The following top-level resources will be available, listed along with their respective endpoints:

* apps 

    ~~~~~~~~
    /rest/v1/apps
    ~~~~~~~~

    All client applications needs to be registered at the :, and each application will be provided an 
    id and secret pair which needs to be used for authentication and authorization to access the APIs.

* users

    ~~~~~~~~
    /rest/v1/users
    ~~~~~~~~

    The resource here will provide access to the developer user profile info, and will facilitate updates to it. There will be no provisions to create a new
    profile as this needs to be setup manually during the registration process to the [Developer Portal](https://developer.magento.com). 

    It will also provide access to sales and related reports to packages owned by the user.

* files

    ~~~~~~~~
    /rest/v1/files
    ~~~~~~~~

    All file assets associated with an Extension or a Theme like the M1 code TGZ files, M2 code ZIP files, PDF documents, and image files for the logo and 
    galleries  can be managed here. Each file uploaded will be provided an unique id, and these ids can be associated with the package meta information using 
    the packages API described below.


* packages

    ~~~~~~~~
    /rest/v1/products/packages
    ~~~~~~~~

    The technical and marketing information associated with each package can be managed here using this resource. This includes all the files associated with
    the M1 or M2 package uploaded via the files resource described above.


* reports

    ~~~~~~~~
    /rest/v1/reports
    ~~~~~~~~

    The resource here provide information on aggregated reports across the Marketplace sites.


As it can be seen, all the endpoints start with **/rest/v1** which will be the mechanism followed to support API versioning. The initial release will be 
set to version 1 (v1). The remaining sections will go over the details of each resource 


---
layout: default
group: marketplace-api
title: Introduction
version: 2.1
github_link: marketplace/eqp/api.md
---

The Magento Extension Quality Program (EQP) REST APIs provide access to the [Magento Developer Portal](https://developer.magento.com). The availability of these APIs to the Magento Marketplace Extension Development Community will be announced on a future date.

These APIs facilitate the full EQP submission process for Magento 1 and Magento 2 extensions and themes for publication on the [Magento Marketplace](https://marketplace.magento.com). They also provide a mechanism for the developers to manage extensions that they have uploaded to the [Developer Portal](https://developer.magento.com).

This document provides an overview of the basic concepts, planned capabilities  and a preview of the version 1.0 of the  REST API details. Send all feedback to [marketplace-eqp-apis@magento.com](marketplace-eqp-apis@magento.com).

## Overview

EQP APIs are based on REST concepts and use standard HTTP verbs:

- GET
- POST
- PUT
- DELETE

Using JSON in all responses and indicating any errors via HTTP Response codes.

The APIs can only be accessed through a secure protocol via HTTPS, and the base url will be:

    https://developer-api.magento.com

The following top-level resources will be available, listed along with their respective endpoints:

### Apps

```
/rest/v1/apps
```

All client applications needs to be registered at the :, and each application will be provided an ID and secret pair which needs to be used for authentication and authorization to access the APIs.

### User

```
/rest/v1/users
```

The resource here will provide access to the developer user profile info, and will facilitate updates to it. There will be no provisions to create a new
profile as this needs to be setup manually during the registration process to the [Developer Portal](https://developer.magento.com).

It will also provide access to sales and related reports to packages owned by the user.

### Files

```
/rest/v1/files
```

All file assets associated with an Extension or a Theme like the M1 code TGZ files, M2 code ZIP files PDF documents, and image files for the logo and 
galleries  can be managed here. Each file uploaded will be provided an unique id, and these ids can be associated with the package meta information using 
the packages API described below.

### Packages

```
/rest/v1/products/packages
```

The technical and marketing information associated with each package can be managed here using this resource. This includes all the files associated with
the M1 or M2 package uploaded via the files resource described above.

### Reports

```
/rest/v1/reports
```

This resource provides information on aggregated reports across the Marketplace sites.

As it can be seen, all the endpoints start with **/rest/v1** which will be the mechanism followed to support API versioning. The initial release will be 
set to version 1 (v1). The remaining sections will go over the details of each resource.
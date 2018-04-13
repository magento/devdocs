---
layout: default
group: marketplace-api
title: Introduction
version: 2.1
github_link: marketplace/eqp/api.md
---

The Magento Extension Quality Program (EQP) REST APIs provide access to the [Magento Developer Portal](https://developer.magento.com). 

Use these APIs to submit Magento 1 and Magento 2 extensions and themes to the Magento EQP for publication on the [Magento Marketplace](https://marketplace.magento.com). You can also manage extensions that you have uploaded to the [Developer Portal](https://developer.magento.com).

EQP APIs are based on REST concepts and use standard HTTP verbs:

- GET
- POST
- PUT
- DELETE

All request and response content is formatted using JSON, including error information.

The APIs only accept encrypted communications using HTTPS at the following base URLs:

    https://developer-api.magento.com - Production
    https://developer-api-sandbox.magento.com - Sandbox


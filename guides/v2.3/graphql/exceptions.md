---
layout: default
group: graphql
title: Exceptions
version: 2.3
github_link: graphql/exceptions.md
---

The WebApi module has an implementation to “mask” `LocalizedExceptions` so they aren't exposed to the client. GraphQL accomplishes this by restricting verbose output to only those exceptions implementing `\GraphQL\Error\ClientAware`, and only if the system is in developer mode. Otherwise, these exceptions will be shown as an “internal server error”.

You must implement the `\GraphQL\Error\ClientAware` interface to handle errors in your module that are directly related to a GraphQL field having an anticipated exception. If you don't, the client will not receive useful messages. However, you should ensure that you don't implement the `ClientAware` interface for too many exceptions. Doing this risks exposing sensitive data to the client.

Magento provides the following exception classes in `Magento\Framework\GraphQl\Exception`

* GraphQlAuthorizationException - Thrown when an authorization error occurs
* GraphQlInputException - Thrown when a query contains invalid input
* GraphQlNoSuchEntityException = Thrown when an expected resource doesn't exist

---
group: graphql
title: Exception handling
version: 2.3
github_link: graphql/develop/exceptions.md
---

The WebApi module has an implementation to “mask” `LocalizedExceptions` so they aren't exposed to the client. GraphQL accomplishes this by restricting verbose output to only those exceptions implementing `\GraphQL\Error\ClientAware`, and only if the system is in developer mode. In these circumstances, Magento returns a full stack trace. Otherwise, Magento writes these exceptions to the system `exception.log` file while returning an “internal server error” to the client.

You should implement the `\GraphQL\Error\ClientAware` interface to handle errors in your module that are directly related to a GraphQL field having an anticipated exception. If you don't, the client will not receive useful messages. However, you should ensure that you don't implement the `ClientAware` interface for too many exceptions. Doing this risks exposing sensitive data to the client.

Magento provides the following exception classes in `Magento\Framework\GraphQl\Exception`. The exception category string

Class | Exception category | Description
--- | --- | ---
`GraphQlAuthorizationException` | `graphql-authorization` | Thrown when an authorization error occurs
`GraphQlInputException` | `graphql-input` | Thrown when a query contains invalid input
`GraphQlNoSuchEntityException` | `graphql-no-such-entity` | Thrown when an expected resource doesn't exist

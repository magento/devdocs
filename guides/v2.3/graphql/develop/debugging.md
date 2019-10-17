---
group: graphql
title: Debugging GraphQL queries
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

This topic provides recommendations on how to debug GraphQL requests.

## Debugging with PHPStorm and Xdebug

When [using GraphiQL]({{ page.baseurl }}/graphql/index.html#how-to-access-graphql) or any other client for testing GraphQL queries, you might need to debug the request processing.
You can use Xdebug for debugging the PHP execution of a GraphQL query just as you would for other HTTP requests.
To start debugging, add the `?XDEBUG_SESSION_START=PHPSTORM` parameter to the endpoint URL.
The following example shows how to establish a connection between Xdebug and PHPStorm IDE.

```http
http://<magento2-3-server>/graphql?XDEBUG_SESSION_START=PHPSTORM
```

You can also enable an Xdebug connection for a particular request by setting the corresponding header parameter.

```text
Cookie: XDEBUG_SESSION=PHPSTORM
```

As a result, Xdebug within the PHP execution attempts to make a connection to an IDE. If the IDE is listening, it will give the instructions to Xdebug about breakpoints and other relevant information.

## Related Topics

*  [GraphQL request headers]({{ page.baseurl }}/graphql/send-request.html)
*  [Exception handling]({{ page.baseurl }}/graphql/develop/exceptions.html)

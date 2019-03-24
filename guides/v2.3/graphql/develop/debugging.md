---
group: graphql
title: Debugging GraphQL queries
---

In this section you will find recommendations on how to debug GraphQL requests.

## Debugging with PHPStorm and Xdebug

When [using GraphiQL]({{ page.baseurl }}/graphql/index.html#how-to-access-graphql) or any other client for testing GraphQL queries you might need to debug the request processing.
It is possible to use Xdebug for debugging the PHP execution of GraphQL query as well as we do for other HTTP requests.
In order to start debugging you can simply add the additional `?XDEBUG_SESSION_START=PHPSTORM` parameter to the endpoint url.
The following example shows how to establish connection between Xdebug and PHPStorm IDE.

```
http://<magento2-3-server>/graphql?XDEBUG_SESSION_START=PHPSTORM
```

There is also another possible way to enable Xdebug connection for particular request by setting the corresponding header parameter.

```
Cookie: XDEBUG_SESSION=PHPSTORM
```

As result Xdebug within the PHP execution attempts to make a connection to an IDE. If the IDE is listening, it will give the instructions to Xdebug about breakpoints etc.

## Related Topics

* [GraphQL request headers]({{ page.baseurl }}/graphql/send-request.html)
* [Exception handling]({{ page.baseurl }}/graphql/develop/exceptions.html)

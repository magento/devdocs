---
group: web-api
title: Use cURL to run the request
functional_areas:
  - Integration
---

cURL is a command-line tool that lets you transmit and receive HTTP requests and responses from the command line or a shell script. It is available for Linux distributions, Mac OS X, and Windows.

To use cURL to run your REST web [API](https://glossary.magento.com/api) call, use the cURL command syntax to construct the cURL command.

To create the endpoint in the call, append the REST URI that you constructed in [Construct a request]({{ page.baseurl }}/get-started/gs-web-api-request.html) to this URL:

`https://<MAGENTO_HOST_OR_IP>/<MAGENTO_BASE_INSTALL_DIR>/rest/`

To pass the customer data object in the POST call payload, specify a JSON or [XML](https://glossary.magento.com/xml) request body on the call.

For a complete list of cURL command options, see [curl.1 the man page](http://curl.haxx.se/docs/manpage.html).

The cURL examples in this guide use the following command-line options:

Option | Description
--- | ---
`-d` | Sends the specified data in a POST request to the HTTP server. Use this option to send a JSON or XML request body to the server.
`-H` | Specifies an extra HTTP header in the request. Precede each header with the `-H` option. You can specify any number of extra headers. For a list of common headers used in Magento web API requests, see [HTTP headers]({{ page.baseurl }}/get-started/gs-web-api-request.html#http-headers)
`-i` | Includes the HTTP header in the output.
`-s` | Specifies silent or quiet mode, which makes cURL mute. Progress and error messages are suppressed.
`-T` | Transfers the specified local file to the remote URL.
`-X` | Specifies the request method to use when communicating with the HTTP server. The specified request method is used instead of the default GET method.

## Next step

[Status codes and responses]({{ page.baseurl }}/get-started/gs-web-api-response.html)

---
group: php-developer-guide
subgroup: Security
title: XSS prevention strategies
menu_title: XSS prevention strategies
menu_order: 1100
---

### Overview

[Cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting){:target="_blank"}, or XSS, is a security vulnerability that can be found in web applications. This vulnerability allows attackers to inject malicious code into a web page viewed by users. Magento [extension](https://glossary.magento.com/extension) developers should be aware of these vulnerabilities to avoid introducing them in their code.

There are mainly three types of XSS vulnerabilities:

* **Persisted XSS** - In this type of vulnerability, the source of unvalidated data comes from the Database or [Backend](https://glossary.magento.com/backend) permanent store.
* **Reflected (non-persistent) XSS** - This type of vulnerability occurs when data provided by a web client is used immediately by server-side scripts to parse and display a page to a user without properly sanitizing the request.
* **DOM XSS** - For this vulnerability, the malicious data does not touch the web server. Rather, it is being reflected by the [JavaScript](https://glossary.magento.com/javascript) code, fully on the client side.

### Preventing XSS

XSS vulnerabilities can be prevented by always validating and sanitizing both user input and output, i.e., user input should never be trusted. Both the [PHP](https://glossary.magento.com/php) language and Magento provides classes and functions to help secure your extension from XSS vulnerabilities.

#### Input Processing

Any data you receive from an external source needs to be validated and sanitized to prevent the storage or execution of malicious code. Input data needs to be validated such that it is within the accepted possible values for that data item. This can vary depending on what that data is used for, but certain field validations can be applied almost universally such as checking for control characters.

#### Output Processing

Output processing involves sanitizing strings that may have come from external data sources before sending it to the browser to be rendered with templates. It is the main method of protecting your extension from XSS attacks.

For more information, see the article on [templates XSS security]({{ page.baseurl }}/frontend-dev-guide/templates/template-security.html){:target="_blank"}.

### Using the Escaper classes

Magento provides the [Escaper]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Escaper.php){:target="_blank"} class for escaping [HTML](https://glossary.magento.com/html) output. This class contains the following useful functions:

Function | Description
--- | ---
`escapeHtml()` | Escapes string inside HTML content
`escapeHtmlAttr()` | Escapes strings in HTML tag attributes
`escapeCss()` | Used for escaping strings inside a [CSS](https://glossary.magento.com/css) context.
`escapeJs()` | Escapes strings inside a JavaScript context
`escapeJsQuote()` | Escapes quotes in JavaScript
`escapeQuote()` | Escapes quotes inside HTML attributes
`escapeUrl()` | Used for escaping strings that will be used in a [URL](https://glossary.magento.com/url).
`escapeXssInUrl()` | Escapes XSS in URLs

### Related Topics

* [Templates XSS security]({{ page.baseurl }}/frontend-dev-guide/templates/template-security.html){:target="_blank"}

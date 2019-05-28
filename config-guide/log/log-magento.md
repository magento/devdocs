---
group: configuration-guide
subgroup: 500_log
title: Magento logging in more detail
menu_title: Magento logging in more detail
menu_node:
menu_order: 2
functional_areas:
  - Configuration
  - System
  - Setup
---

## Monolog {#config-log-monolog}

Magento 2 complies with the PSR-3 standard. By default, Magento uses [Monolog](https://github.com/Seldaek/monolog){:target="_blank"}. Monolog implemented as a preference for `Psr\Log\LoggerInterface` in the Magento application [`di.xml`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/etc/di.xml#L9){:target="_blank"}.

Monolog is a popular {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} logging solution with a wide range of handlers that enable you to build advanced logging strategies. Following is a summary of how Monolog works.

A Monolog _logger_ is a channel that has its own set of _handlers_. Monolog has a large number of handlers, including:

*	Log to files and syslog
*	Send alerts and e-mails
*	Log specific servers and networked logging
*	Logging in development (integration with FireBug and ChromePHP, among others)
*	Log to the database

Each handler can either process the input message and stop propagation or pass the control to the next handler in a chain. 

Log messages can be processed in many different ways. For example, you can store all debug information into a file on disk, put the messages with higher log levels into a database, and finally send messages with log level "critical" by e-mail.

Other channels can have a different set of handlers and logic.

## Get started with logging {#config-log-start}

To start working with a logger, you must get a `\Psr\Log\LoggerInterface` instance. One way to do that is illustrated in our [database logging example]({{ page.baseurl }}/config-guide/log/log-db.html).

Another way follows:

{% highlight php startinline=true %}
class SomeModel
 {
     private $logger;

     public function __construct(\Psr\Log\LoggerInterface $logger)
     {
         $this->logger = $logger;
     }

     public function doSomething()
     {
         try {
             //do something
         } catch (\Exception $e) {
             $this->logger->critical('Error message', ['exception' => $e]);
         }
     }
 }
{% endhighlight %}

The preceding example shows that `SomeModel` receives a `\Psr\Log\LoggerInterface` object using constructor injection. In a method `doSomething`, if some error occurred, it's logged to a method `critical` (`$this->logger->critical($e);`).

[RFC 5424](https://tools.ietf.org/html/rfc5424){:target="_blank"} defines eight log levels (debug, info, notice, warning, error, critical, alert, and emergency).

#### Next
[Example&mdash;logging database activity]({{ page.baseurl }}/config-guide/log/log-db.html)

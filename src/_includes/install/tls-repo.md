The Magento software and component repository, `repo.magento.com`, recently started requiring Transport Layer Security (TLS) 1.1 or later.

The [PCI Security Standards Council](https://en.wikipedia.org/wiki/Payment_Card_Industry_Security_Standards_Council)} removed SSL/TLS 1.0 as an example of strong cryptography from the [PCI Data Security Standard (PCI DSS)](https://www.pcisecuritystandards.org/pci_security) version 3.1, stating that it can no longer be used as a security control after June 30, 2016.

For details, see [Date Change for Migrating from SSL and Early TLS](http://blog.pcisecuritystandards.org/migrating-from-ssl-and-early-tls).

### Symptoms

If you have an earlier version of TLS, you'll see the errors discussed in this section.

#### Downloading a Magento metapackage

The following error displays if you attempt to run `composer create-project` to get a Magento metapackage:

```terminal
[Composer\Downloader\TransportException]
The "https://repo.magento.com/packages.json" file could not be downloaded: Failed to enable crypto
failed to open stream: operation failed
```

### Using the Web Setup Wizard

{% include install/web/deprecated.md %}

Actions like saving your authentication credentials or synchronizing with Magento Marketplace fail with the following error:

![SSL connect error]({{ site.baseurl }}/common/images/install_ssl-connect-error.png)

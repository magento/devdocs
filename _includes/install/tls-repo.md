<div markdown="1">

The Magento software and component repository, `repo.magento.com`, recently started requiring Transport Layer Security (TLS) 1.1 or later.

Our change is driven by the [PCI Security Standards Council](https://en.wikipedia.org/wiki/Payment_Card_Industry_Security_Standards_Council){:target="_blank"}. Any organization (like Magento) that is evaluated for a new Payment Card Industry (PCI) environment must comply with their standards immediately. 
For details, see [Date Change for Migrating from SSL and Early TLS](http://blog.pcisecuritystandards.org/migrating-from-ssl-and-early-tls){:target="_blank"}. 

### Symptoms
If you have an earlier version of TLS, you'll see the errors discussed in this section.

#### Downloading a Magento metapackage
The following error displays if you attempt to run `composer create-project` to get a Magento metapackage:

	[Composer\Downloader\TransportException]                                           
	The "https://repo.magento.com/packages.json" file could not be downloaded: Failed to enable crypto                                                                  
	failed to open stream: operation failed  

### Using the Web Setup Wizard
Actions like saving your authentication credentials or synchronizing with Magento Marketplace fail with the following error:

![SSL connect error]({{ site.baseurl }}common/images/install_ssl-connect-error.png)

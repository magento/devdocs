---
group: configuration-guide
title: Install Varnish
functional_areas:
  - Configuration
  - System
  - Setup
---

Installing the Varnish software is beyond the scope of this guide. For more information about installing Varnish, see:

*	[installation wiki](http://wiki.mikejung.biz/Varnish)
*	[Varnish installation guides](https://www.varnish-cache.org/docs)
*	[How to install Varnish (Tecmint)](http://www.tecmint.com/install-varnish-cache-web-accelerator)

{:.bs-callout .bs-callout-info}
This topic is written for Varnish on CentOS and Apache 2.2. If you're setting up Varnish in a different environment, some commands are likely different. Consult the preceding documentation for more information.

## Confirm your Varnish version {#config-varnish-version}

Enter the following command to display the version of Varnish you're running:

	varnishd -V

A sample follows:

	varnishd (varnish-4.0.3 revision b8c4a34)
	Copyright (c) 2006 Verdens Gang AS
	Copyright (c) 2006-2014 Varnish Software AS

Make sure the version is at least 3.0.5 or any version of 4.x before continuing.

### Next step

[Configure Varnish and your web server]({{ page.baseurl }}/config-guide/varnish/config-varnish-configure.html)

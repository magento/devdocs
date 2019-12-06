---
group: configuration-guide
title: Install Varnish
functional_areas:
  - Configuration
  - System
  - Setup
---

## Install Varnish {#config-varnish-install}

Installing the Varnish software is beyond the scope of this guide. For more information about installing Varnish, see:

*  [installation wiki](http://wiki.mikejung.biz/Varnish)
*  [Varnish installation guides](https://www.varnish-cache.org/docs)
*  [How to install Varnish (Tecmint)](http://www.tecmint.com/install-varnish-cache-web-accelerator)

{:.bs-callout-info}
This topic is written for Varnish on CentOS and Apache 2.2. If you are setting up Varnish in a different environment, some commands are likely different. Consult the preceding documentation for more information.<br><br>If you intend to install Varnish modules (vmods), such as saint mode, you should install Varnish by compiling the code, rather than installing from a package. See [Saint mode]({{ page.baseurl }}/config-guide/varnish/config-varnish-advanced.html#saint) for more details.

## Confirm your Varnish version {#config-varnish-version}

Enter the following command to display the version of Varnish you are running:

```bash
varnishd -V
```

A sample follows:

```terminal
varnishd (varnish-4.0.3 revision b8c4a34)
Copyright (c) 2006 Verdens Gang AS
Copyright (c) 2006-2014 Varnish Software AS
```

Make sure the version is 4.x, 5.2 or 6.x before continuing. If you are running version 3.x, you must upgrade to a supported version. Consult the Varnish installation documentation for more information.

{:.ref-header}
Related topics

[Configure Varnish and your web server]({{ page.baseurl }}/config-guide/varnish/config-varnish-configure.html)

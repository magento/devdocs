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

*  [Installation wiki](https://www.varnish-software.com/wiki/start/index.html)
*  [Varnish installation guides](https://www.varnish-cache.org/docs)
*  [How to install Varnish (Tecmint)](http://www.tecmint.com/install-varnish-cache-web-accelerator)

{:.bs-callout-info}
This topic is written for Varnish on CentOS and Apache 2.4. If you are setting up Varnish in a different environment, some commands are likely different. Consult the preceding documentation for more information.<br><br>If you intend to install Varnish modules (vmods), such as saint mode, you should install Varnish by compiling the code, rather than installing from a package. See [Saint mode]({{ page.baseurl }}/config-guide/varnish/config-varnish-advanced.html#saint) for more details.

## Confirm your Varnish version {#config-varnish-version}

Enter the following command to display the version of Varnish you are running:

```bash
varnishd -V
```

A sample follows:

```terminal
varnishd (varnish-6.5.1 revision 1dae23376bb5ea7a6b8e9e4b9ed95cdc9469fb64)
Copyright (c) 2006 Verdens Gang AS
Copyright (c) 2006-2020 Varnish Software
```

Make sure the version is 6.5.x before continuing. If you are running an older version, you must upgrade to a supported version. Consult the Varnish installation documentation for more information.

{:.ref-header}
Related topics

[Configure Varnish and your web server]({{ page.baseurl }}/config-guide/varnish/config-varnish-configure.html)

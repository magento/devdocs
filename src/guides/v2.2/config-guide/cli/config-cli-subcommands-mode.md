---
group: configuration-guide
title: Set the Magento mode
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of setting Magento modes {#config-mode-over}

To improve security and ease-of-use, we added a command that switches [Magento modes]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html) from developer to production and vice versa.

Production mode also has better performance because static view files are populated in the `pub/static` directory and because of code compilation.

{:.bs-callout-info}
In version 2.0.6 and later, Magento does not explicitly set file or directory permissions when you switch between default, develop, and production modes.
Unlike other Magento modes, developer and production modes are set in `env.php`. [{{site.data.var.ece}}]({{ site.baseurl }}/cloud/bk-cloud.html) supports production and maintenance modes only.
Refer to [Magento ownership and permissions in development and production]({{ page.baseurl }}/config-guide/prod/prod_file-sys-perms.html) for more information.

When you change to developer or production mode, we clear the contents of following directories:

```terminal
var/cache
generated/metadata
generated/code
var/view_preprocessed
pub/static
```

Exceptions:

-  `.htaccess` files are not removed
-  `pub/static` contains a file that specifies the version of static content; this file is not removed

{:.bs-callout-info}
By default, Magento uses the `var` directories to store the cache, logs, and compiled code. You can customize this directory but in this guide, it's assumed to be `var`.

## Display the current mode {#config-mode-show}

The easiest way to do that is to run this command as the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html). If you have shared hosting, this is the user your provider gives you to log in to the server. If you have a private server, it's typically a local user account on the Magento server.

Command usage:

```bash
bin/magento deploy:mode:show
```

A message similar to the following displays:

```terminal
Current application mode: {mode}. (Note: Environment variables may override this value.)
```

where:

-  **`{mode}`** can be either `default`, `developer`, or `production`

## Change modes {#config-mode-change}

Command usage:

```bash
bin/magento deploy:mode:set {mode} [-s|--skip-compilation]
```

where:

-  **`{mode}`** is required; it can be either `developer` or `production`

-  **`--skip-compilation`** is an optional parameter you can use to skip [code compilation]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html) when you change to production mode.

Examples follow.

### Change to production mode

```bash
bin/magento deploy:mode:set production
```

Messages similar to the following display:

```terminal
Enabled maintenance mode
Requested languages: en_US
=== frontend -> Magento/luma -> en_US ===
... more ...
Successful: 1884 files; errors: 0
---

=== frontend -> Magento/blank -> en_US ===
... more ...
Successful: 1828 files; errors: 0
---

=== adminhtml -> Magento/backend -> en_US ===
... more ...
---

=== Minify templates ===
... more ...
Successful: 897 files modified
---

New version of deployed files: 1440461332
Static content deployment complete
Gathering css/styles-m.less sources.
Successfully processed LESS and/or [Sass](https://glossary.magento.com/sass) files
[CSS](https://glossary.magento.com/css) deployment complete
Generated classes:
      Magento\Sales\Api\Data\CreditmemoCommentInterfacePersistor
      Magento\Sales\Api\Data\CreditmemoCommentInterfaceFactory
      Magento\Sales\Api\Data\CreditmemoCommentSearchResultInterfaceFactory
      Magento\Sales\Api\Data\CreditmemoComment\Repository
      Magento\Sales\Api\Data\CreditmemoItemInterfacePersistor
      ... more ...
Compilation complete
Disabled maintenance mode
Enabled production mode.
```

### Change to developer mode

When you change from production to developer mode, you should clear generated classes and Object Manager entities like proxies to prevent unexpected errors. After doing so, you can change modes. Use the following steps:

1. If you're changing from production mode to developer mode, delete the contents of the `generated/code` and `generated/metadata` directories:

   ```bash
   rm -rf <magento_root>/generated/metadata/* <magento_root>/generated/code/*
   ```

1. Set the mode:

   ```bash
   bin/magento deploy:mode:set developer
   ```

   The following message displays:

   ```terminal
   Enabled developer mode.
   ```

### Change to default mode

```bash
bin/magento deploy:mode:set default
```

The following message displays:

```terminal
Enabled default mode.
```

### Run Magento CLI commands from anywhere

[Run Magento CLI commands from anywhere]({{ page.baseurl }}/config-guide/cli/config-cli.html#config-install-cli-first).

If you haven't added `<magento-install-directory>/bin` to your system `PATH`, then you can expect an error when running the Magento command by itself.

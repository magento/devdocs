---
group: configuration-guide
title: Deploy static view files
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of static view files deployment {#config-cli-static-overview}

The static view files deployment command enables you to write [static files](https://glossary.magento.com/static-files) to the Magento file system when the Magento software is set for [production mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode).

The term *static view file* refers to the following:

-  "Static" means it can be cached for a site (that is, the file is not dynamically generated). Examples include images and [CSS](https://glossary.magento.com/css) generated from LESS.
-  "View" refers to presentation layer (from MVC).

Static view files are located in the `<magento_root>/pub/static` directory, and some are cached in the `<magento_root>/var/view_preprocessed` directory as well.

Static view files deployment is affected by Magento modes as follows:

-  **[Default]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#default-mode)** and **[developer]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#developer-mode)** modes: Magento generates them on demand, but the rest are cached in a file for speed of access.
-  **[Production]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode)** mode: Static files are *not* generated or cached.

You must write static view files to the Magento file system manually using the command discussed in this topic; after that, you can restrict permissions to limit your vulnerabilities and to prevent accidental or malicious overwriting of files.

{:.bs-callout-warning}
*Developer mode only*: When you install or enable a new module, it might load new JavaScript, CSS, layouts, and so on. To avoid issues with static files, you must clean the old files to make sure you get all the changes for the new module. You can clean generated static view files in several ways. Refer to [Clean static files cache topic for details]({{ page.baseurl }}/frontend-dev-guide/cache_for_frontdevs.html#clean_static_cache) for more information.

## Deploy static view files {#config-cli-subcommands-staticview}

To deploy static view files:

1. Log in to the Magento server as, or [switch to]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html), the [Magento file system owner](https://glossary.magento.com/magento-file-system-owner).
1. Delete the contents of `<magento_root>/pub/static`, except for the `.htaccess` file. Do not delete this file.
1. Run the static view files deployment tool `<magento_root>/bin/magento setup:static-content:deploy`.

   {:.bs-callout-info}
   If you enable static view file merging in the Magento Admin, the `pub/static` directory system must be writable.

Command options:

```bash
bin/magento setup:static-content:deploy [<languages>] [-t|--theme[="<theme>"]] [--exclude-theme[="<theme>"]] [-l|--language[="<language>"]] [--exclude-language[="<language>"]] [-a|--area[="<area>"]] [--exclude-area[="<area>"]] [-j|--jobs[="<number>"]]  [--no-javascript] [--no-css] [--no-less] [--no-images] [--no-fonts] [--no-html] [--no-misc] [--no-html-minify] [-f|--force]
```

The following table explains this command's parameters and values.

<table>
    <col width="25%" />
    <col width="60%" />
    <col width="10%" />
    <col width="10%" />
    <tbody>
    <tr>
        <th>Option</th>
        <th>Description</th>
        <th>Required?</th>
    </tr>
    <tr>
        <td>&lt;languages&gt;</td>
        <td>
            <p>Space-separated list of <a href="http://www.loc.gov/standards/iso639-2/php/code_list.php">ISO-639</a> language codes for which to output static view files. (Default is
                <code>en_US</code>.)</p>
            <p>You can find the list by running <code>bin/magento info:language:list</code>.</p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--language (-l)</td>
        <td>
            <p>Generate files only for the specified languages. The default, with no option specified, is to generate files for all <a href="http://www.loc.gov/standards/iso639-2/php/code_list.php">ISO-639</a> language codes. You can specify the name of one language code at a time. Default value is <b>all</b>.</p>
            <p>For example, <code>--language en_US --language es_ES</code></p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--exclude-language</td>
        <td>
            <p>Generate files for the specified language codes. The default, with no option specified, is to exclude nothing. You can specify the name of one language code or a comma-separated list of language codes. Default value is <b>none</b>.</p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--theme &lt;theme&gt;</td>
        <td>
            <p>Themes for which to deploy static content. Default value is <b>all</b>.</p>
            <p>For example, <code>--theme Magento/blank --theme Magento/luma</code></p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--exclude-theme &lt;theme&gt;</td>
        <td>
            <p>Themes to exclude when deploying static content. Default value is <b>none</b>.</p>
            <p>For example, <code>--exclude-theme Magento/blank</code></p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--area (-a)</td>
        <td>
            <p>Generate files only for the specified areas. The default, with no option specified, is to generate files for all areas. Valid values are <code>adminhtml</code> and <code>frontend</code>. Default value is <b>all</b>.</p>
            <p>For example, <code>--area adminhtml</code></p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--exclude-area</td>
        <td>
            <p>Do not generate files for the specified areas. The default, with no option specified, is to exclude nothing. Default value is <b>none</b>.</p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--jobs (-j)</td>
        <td>
            <p>Enable parallel processing using the specified number of jobs. The default is 0 (do not run in parallel processes). Default value is <b>0</b>.</p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--symlink-locale</td>
        <td>
            <p>Create symlinks for the files of those locales, which are passed for deployment, but have no customizations.</p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--content-version=CONTENT-VERSION</td>
        <td>
            <p>Custom version of static content can be used if running deployment on multiple nodes to ensure that static content version is identical and caching works properly.</p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--no-javascript</td>
        <td>
            <p>Do not deploy JavaScript files</p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--no-css</td>
        <td>
            <p>Do not deploy CSS files.</p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--no-less</td>
        <td>
            <p>Do not deploy LESS files.</p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--no-images</td>
        <td>
            <p>Do not deploy images.</p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--no-fonts</td>
        <td>
            <p>Do not deploy font files.</p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>--no-html</p>
        </td>
        <td>
            <p>Do not deploy HTML files.</p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--no-misc</td>
        <td>
            <p>Do not deploy other types of files (that is <code>.md</code>, <code>.jbf</code>, <code>.csv</code>, <code>.json</code>, <code>.txt</code>, <code>.htc</code>, or <code>.swf</code> files).</p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--no-html-minify</td>
        <td>
            <p>Do not minify HTML files.</p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>
            -s
            <ul>
                <li>-s quick</li>
                <li>-s standard</li>
                <li>-s compact</li>
            </ul>
        </td>
        <td>
            Define the deployment strategy. Use these options only if you have more than one locale.
            <ul>
                <li>Use the <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html#static-file-quick">quick strategy</a> to minimize deployment time. This is the default command option if not specified.</li>
                <li>Use the <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html#static-file-standard">standard strategy</a> to deploy all static view files for all packages.</li>
                <li>Use the <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html#static-file-compact">compact strategy</a> to conserve disk space on the server.
                </li>
            </ul>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    <tr>
        <td>--force (-f)</td>
        <td>
            <p>Deploy files in any mode. (by default, the static content deployment tool can be run only in production mode. Use this option to run it in default or developer mode).</p>
        </td>
        <td>
            <p>No</p>
        </td>
    </tr>
    </tbody>
</table>

{:.bs-callout-info}
If you specify values for both `<languages>` and `--language`, `<languages>` takes precedence.

### Examples

Following are some example commands.

#### Excluding a theme and HTML minification

The following command deploys [static content](https://glossary.magento.com/static-content) for the US English (`en_US`) language, excludes the Luma [theme](https://glossary.magento.com/theme) provided with Magento, and does not minify [HTML](https://glossary.magento.com/html) files.

```bash
bin/magento setup:static-content:deploy en_US --exclude-theme Magento/luma --no-html-minify
```

Sample output:

```terminal
Requested languages: en_US
Requested areas: frontend, adminhtml
Requested themes: Magento/blank, Magento/backend
=== frontend -> Magento/blank -> en_US ===
=== adminhtml -> Magento/backend -> en_US ===
...........................................................
... more ...
Successful: 2055 files; errors: 0
---

New version of deployed files: 1466710645
............
Successful: 1993 files; errors: 0
---
```

#### Generating static view files for one theme and one area

The following command generates static view files for all languages, the [frontend](https://glossary.magento.com/frontend) area only, the Magento Luma theme only, without generating fonts:

```bash
bin/magento setup:static-content:deploy --area frontend --no-fonts --theme Magento/luma
```

Sample output:

```terminal
Requested languages: en_US
Requested areas: frontend
Requested themes: Magento/luma
=== frontend -> Magento/luma -> en_US ===
...........................................................
... more ...
........................................................................
Successful: 2092 files; errors: 0
---

New version of deployed files: 1466711110
```

### Deploy static view files without installing Magento {#deploy_without_db}

You might want to run the deployment process in a separate, non-production, environment, to avoid any build processes on sensitive production machines.

To do this, take the following steps:

1. Run [`bin/magento app:config:dump`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-export.html) to export the configuration from your production system.
1. Copy the exported files to the non-production code base.
1. Run [`bin/magento setup:static-content:deploy`](#config-cli-subcommands-staticview).

## Troubleshooting the static view files deployment tool {#view-file-trouble}

[Install the Magento software first]({{ page.baseurl }}/install-gde/bk-install-guide.html); otherwise, you cannot run the static view files deployment tool.

**Symptom**: The following error is displayed when you run the static view files deployment tool:

```terminal
ERROR: You need to install the Magento application before running this utility.
```

**Solution**:

Use the following steps:

1. Install the Magento software in any of the following ways:

   -  [Command line]({{ page.baseurl }}/install-gde/install/cli/install-cli.html)
   -  [Setup wizard]({{ page.baseurl }}/install-gde/install/web/install-web.html)

1. Log in to the Magento server as, or [switch to]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html), the Magento file system owner.
1. Delete the contents of `<magento_root>/pub/static` directory, except for the `.htaccess` file. Do not delete this file.
1. [Run the static view files deployment tool](#config-cli-subcommands-staticview).

## Tip for developers customizing the static content deployment tool

When creating a custom implementation of the static content deployment tool, use only [atomic](https://en.wikipedia.org/wiki/Linearizability) file writing for files that should be available on the client. If you use non-atomic file writing, those files might be loaded on the client with partial content.

One of the options for making it atomic is to write to files stored in a temporary directory and copying or moving them to the destination directory (from where they are loaded to client) after writing is over. For details about writing to files, see [http://php.net/manual/en/function.fwrite.php](http://php.net/manual/en/function.fwrite.php).

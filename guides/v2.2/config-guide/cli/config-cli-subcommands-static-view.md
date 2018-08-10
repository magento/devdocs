---
group: config-guide
title: Deploy static view files
version: 2.2
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of static view files deployment {#config-cli-static-overview}

The static view files deployment command enables you to write {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %} to the Magento file system when the Magento software is set for <a href="{{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode">production mode</a>.

The term *static view file* refers to the following:

-   "Static" means it can be cached for a site (that is, the file is not dynamically generated). Examples include images and {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} generated from LESS.
-   "View" refers to presentation layer (from MVC).

Static view files are located in the `<your Magento install dir>/pub/static` directory, and some are cached in the `<your Magento install dir>/var/view_preprocessed` directory as well.

Static view files deployment is affected by Magento modes as follows:

-   **[Default]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#default-mode)** and **[developer]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#developer-mode)** modes: Magento generates them on demand, but the rest are cached in a file for speed of access.
-   **[Production]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode)** mode: Static files are *not* generated or cached.

You must write static view files to the Magento file system manually using the command discussed in this topic; after that, you can restrict permissions to limit your vulnerabilities and to prevent accidental or malicious overwriting of files.

<div class="bs-callout bs-callout-warning" markdown="1">
_Developer mode only_: When you install or enable a new module, it might load new JavaScript, CSS, layouts, and so on. To avoid issues with static files, you must clean the old files to make sure you get all the changes for the new {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %}.

You can clean generated static view files in several ways. Refer to [Clean static files cache topic for details]({{ page.baseurl }}/frontend-dev-guide/cache_for_frontdevs.html#clean_static_cache) for more information.
</div>

## Deploy static view files {#config-cli-subcommands-staticview}

To deploy static view files:

1.  Log in to the Magento server as, or <a href="{{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html">switch to</a>, the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.
2.  Delete the contents of `<your Magento install dir>/pub/static`, except for the `.htaccess` file. Do not delete this file.
3.  Run the static view files deployment tool `<your Magento install dir>/bin/magento setup:static-content:deploy`.
<!-- 4.	Set read-only file permissions for the `pub/static` directory, its subdirectories, and files. -->

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
  If you enable static view file merging in the Magento Admin, the `pub/static` directory system must be writable.
	</div>

Command options:

	bin/magento setup:static-content:deploy [<languages>] [-t|--theme[="<theme>"]] [--exclude-theme[="<theme>"]] [-l|--language[="<language>"]] [--exclude-language[="<language>"]] [-a|--area[="<area>"]] [--exclude-area[="<area>"]] [-j|--jobs[="<number>"]]  [--no-javascript] [--no-css] [--no-less] [--no-images] [--no-fonts] [--no-html] [--no-misc] [--no-html-minify] [-f|--force]

The following table explains this command's parameters and values.

<table>
  <col width="25%" />
  <col width="65%" />
  <col width="15%" />
  <tbody>
    <tr>
      <th>
        Option
      </th>
      <th>
        Description
      </th>
      <th>
        Required?
      </th>
    </tr>
    <tr>
      <td>
        &lt;languages&gt;
      </td>
      <td>
        <p>
          Space-separated list of <a href=
          "http://www.loc.gov/standards/iso639-2/php/code_list.php"
          target="_blank">ISO-639</a> language codes for which to
          output static view files. (Default is
          <code>en_US</code>.)
        </p>
        <p>
          You can find the list by running <code>bin/magento
          info:language:list</code>.
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        --language (-l)
      </td>
      <td>
        <p>
          Generate files only for the specified languages. The
          default, with no option specified, is to generate files
          for all <a href=
          "http://www.loc.gov/standards/iso639-2/php/code_list.php"
          target="\_blank">ISO-639</a> language codes. You can
          specify the name of one language code at a time.
        </p>
        <p>
          For example, <code>--language en_US --language
          es_ES</code>
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        --exclude-language
      </td>
      <td>
        <p>
          Generate files for the specified language codes. The
          default, with no option specified, is to exclude nothing.
          You can specify the name of one language code or a
          comma-separated list of language codes.
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        --theme &lt;theme&gt;
      </td>
      <td>
        <p>
          Themes for which to deploy static content.
        </p>
        <p>
          For example, <code>--theme Magento/blank --theme
          Magento/luma</code>
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        --exclude-theme &lt;theme&gt;
      </td>
      <td>
        <p>
          Themes to exclude when deploying static content.
        </p>
        <p>
          For example, <code>--exclude-theme Magento/blank</code>
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        --area (-a)
      </td>
      <td>
        <p>
          Generate files only for the specified areas. The default,
          with no option specified, is to generate files for all
          areas. Valid values are <code>adminhtml</code> and
          <code>frontend</code>.
        </p>
        <p>
          For example, <code>--area adminhtml</code>
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        --exclude-area
      </td>
      <td>
        <p>
          Do not generate files for the specified areas. The
          default, with no option specified, is to exclude nothing.
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        --jobs (-j)
      </td>
      <td>
        <p>
          Enable parallel processing using the specified number of
          jobs. The default is 0 (do not run in parallel processes).
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        --no-javascript
      </td>
      <td>
        <p>
          Do not deploy JavaScript files
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        --no-css
      </td>
      <td>
        <p>
          Do not deploy CSS files.
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        --no-less
      </td>
      <td>
        <p>
          Do not deploy LESS files.
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        --no-images
      </td>
      <td>
        Do not deploy images.
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        --no-fonts
      </td>
      <td>
        <p>
          Do not deploy font files.
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          --no-html
        </p>
      </td>
      <td>
        <p>
          Do not deploy HTML files.
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        --no-misc
      </td>
      <td>
        <p>
          Do not deploy other types of files (that is
          <code>.md</code>, <code>.jbf</code>, <code>.csv</code>,
          <code>.json</code>, <code>.txt</code>, <code>.htc</code>,
          or <code>.swf</code> files).
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        --no-html-minify
      </td>
      <td>
        <p>
          Do not minify HTML files.
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        -s
        <ul>
          <li>-s quick
          </li>
          <li>-s standard
          </li>
          <li>-s compact
          </li>
        </ul>
      </td>
      <td>
        Define the deployment strategy. Use these options only if you have more than one locale.
				<ul>
					<li>
	          Use the <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html#static-file-quick">quick strategy</a> to minimize deployment time. This is the default command option if not specified.
					</li>
					<li>
						Use the <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html#static-file-standard">standard strategy</a> to deploy all static view files for all packages.
					</li>
					<li>
						Use the <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html#static-file-compact">compact strategy</a> to conserve disk space on the server.
					</li>
				</ul>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
    <tr>
      <td>
        --force (-f)
      </td>
      <td>
        <p>
          Deploy files in any mode. (by default, the static
          content deployment tool can be run only in production
          mode. Use this option to run it in default or developer
          mode).
        </p>
      </td>
      <td>
        <p>
          No
        </p>
      </td>
    </tr>
  </tbody>
</table>

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you specify values for both `<languages>` and `--language`, `<languages>` takes precedence.
</div>

### Examples

Following are some example commands.

#### Excluding a theme and HTML minification

The following command deploys {% glossarytooltip a3e37235-4e8b-464f-a19d-4a120560206a %}static content{% endglossarytooltip %} for the US English (`en_US`) language, excludes the Luma {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} provided with Magento, and does not minify {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} files.

    bin/magento setup:static-content:deploy en_US --exclude-theme Magento/luma --no-html-minify

Sample output:

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

#### Generating static view files for one theme and one area

The following command generates static view files for all languages, the {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} area only, the Magento Luma theme only, without generating fonts:

    bin/magento setup:static-content:deploy --area frontend --no-fonts --theme Magento/luma

Sample output:

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

### Deploy static view files without installing Magento {#deploy_without_db}

You might want to run the deployment process in a separate, non-production, environment, to avoid any build processes on sensitive production machines.

To do this, take the following steps:

1.  Run [`bin/magento app:config:dump`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-config-mgmt-export.html) to export the configuration from your production system.
2.  Copy the exported files to the non-production code base.
3.  Run [`bin/magento setup:static-content:deploy`](#config-cli-subcommands-staticview).

## Troubleshooting the static view files deployment tool {#view-file-trouble}

<a href="{{ page.baseurl }}/install-gde/bk-install-guide.html">Install the Magento software first</a>; otherwise, you cannot run the static view files deployment tool.

**Symptom**: The following error is displayed when you run the static view files deployment tool:

	ERROR: You need to install the Magento application before running this utility.

**Solution**:

Use the following steps:

1.  Install the Magento software in any of the following ways:

    -   [Command line]({{ page.baseurl }}/install-gde/install/cli/install-cli.html)
    -   [Setup wizard]({{ page.baseurl }}/install-gde/install/web/install-web.html)

2.  Log in to the Magento server as, or <a href="{{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html">switch to</a>, the Magento file system owner.
3.  Delete the contents of `<your Magento install dir>/pub/static` directory, except for the `.htaccess` file. Do not delete this file.
4.  <a href="#config-cli-subcommands-staticview">Run the static view files deployment tool</a>.
<!-- 4.	Set read-only file permissions for the `pub/static` directory, its subdirectories, and files. -->

	<!-- <div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  		<p>If you enable static view file merging in the Magento Admin, the <code>pub/static</code> directory system must be writable.</p></span>
	</div> -->

## Tip for developers customizing the static content deployment tool

When creating a custom implementation of the static content deployment tool, use only [atomic](https://en.wikipedia.org/wiki/Linearizability){:target="\_blank"} file writing for files that should be available on the client. If you use non-atomic file writing, those files might be loaded on the client with partial content.

One of the options for making it atomic is to write to files stored in a temporary directory and copying or moving them to the destination directory (from where they are loaded to client) after writing is over. For details about writing to files, see [http://php.net/manual/en/function.fwrite.php](http://php.net/manual/en/function.fwrite.php){:target="\_blank"}.

<!-- The default Magento implementation of [`Magento\Framework\Filesystem\Directory\WriteInterface::writeFile`]({{ site.mage2100url }}lib/internal/Magento/Framework/Filesystem/Directory/WriteInterface.php#L118){:target="_blank"} uses non-atomic file writing.
 -->

## Related topics

-   <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
-   <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
-   <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
-   <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
-   <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
-   <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
-   <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
-   <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
-   <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
-   <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
-   <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
-   <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>

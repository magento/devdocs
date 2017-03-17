---
layout: default
group:  config-guide
subgroup: 04_CLI
title: Deployment strategies
menu_title: Deployment strategies
menu_node:
menu_order: 300
version: 2.2
github_link: config-guide/cli/config-cli-subcommands-static-deploy-strategies.md
---

## Overview

When [deploying static view files]({{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html), you can choose one of the three available strategies:

* Standard
* Quick
* Compact

The strategies are aimed to provide the optimized deployment result for different use cases:

* Standard is the regular deployment process.
* Quick minimizes the time required for deployment when files for more than one locale are deployed.
* Compact minimizes the space taken by the published view files.  

The following sections describe the implementation details and features of the strategies.

## Standard strategy

When the Standard strategy is used, all static view files for all packages are deployed, that is, processed by `\Magento\Framework\App\View\Asset\Publisher`.

## Quick strategy

Deployment process with the Quick strategy is the following:

1. For each theme, one arbitrary locale is chosen and all files for this locale are deployed, like in the Standard strategy.
2. For all other locales of the theme:
	1. Files that override the deployed locale are defined. Those files are also deployed. 
	2.  All other files are considered similar for all locales, and are copied from the deployed locale. 

<div class="bs-callout bs-callout-info" id="info" markdown="1">
By similar we mean files, that are locale-(or theme-, or area-)independent. These files might include CSS, images, fonts.
</div>

This approach minimizes the deployment time required for multiple locales. Though a lot of files are duplicated.

## Compact strategy

The Compact strategy avoids files duplicating. Instead, the similar files are stored in the "basic" sub-directories.
For the most optimized result, three scopes for possible similarity are allocated: area, theme, and locale. "Basic" sub-directories are created for all combinations of these scopes. The files are deployed to these sub-directories according to the following patterns. 

<table>
  <tbody>
    <tr>
      <th>
        Pattern
      </th>
      <th>
        Description
      </th>
    </tr>
    <tr>
      <td>
        %area%/%theme%/%locale%
      </td>
      <td>
        <p>
          Files specific for a particular area, theme, and locale
        </p>
      </td>
    </tr>
    <tr>
      <td>
        %area%/%theme%/default
      </td>
      <td>
        Files similar for all locales of a particular theme of a
        particular area.
      </td>
    </tr>
    <tr>
      <td>
        %area%/Magento/base/%locale%
      </td>
      <td>
        Files specific for a particular area and locale, but
        similar for all themes.
      </td>
    </tr>
    <tr>
      <td>
        %area%/Magento/base/default
      </td>
      <td>
        <p>
          Files specific for a particular area, but similar for all
          themes and locales.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        base/Magento/base/%locale%
      </td>
      <td>
        <p>
          Files similar for all areas and themes, but specific for
          a particular locale.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        base/Magento/base/default
      </td>
      <td>
        Similar for all areas, themes and locales.
      </td>
    </tr>
  </tbody>
</table>


### Mapping deployed files
This approach to deployment means that files are inherited from "basic" themes and locales. This inheritance relations are stored in the map files for each combination of area, theme and locale. There are separate map files for PHP and JS:

* `map.php`
* `requirejs-map.js`

`map.php` is used by `Magento\Framework\View\Asset\Repository` to build correct URLs.

`requirejs-map.js` is used by the `baseUrlResolver` plugin for RequireJS.

Example of `map.php`:

{%highlight php%}
return [
        'Magento_Checkout::cvv.png' => [
            'area' => 'frontend',
            'theme' => 'Magento/luma',
            'locale' => 'en_US',
        ],
        '...' => [
            'area' => '...',
            'theme' => '...',
            'locale' => '...'
        ]
        ];
{%endhighlight%}

Example of `requirejs-map.js`:

{%highlight js%}
require.config({
    "config": {
       "baseUrlInterceptor": {
            "jquery.js": "../../../../base/Magento/base/en_US/"
        }
    }
});
{%endhighlight%}


## Tip for extension developers

To avoid problems with static files being not found and not displayed during page rendering, do not use URL concatenations: use `\Magento\Framework\View\Asset\Repository::createAsset()` for building URLs to the static view files.



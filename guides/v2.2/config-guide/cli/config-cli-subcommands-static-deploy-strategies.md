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

* standard
* quick
* compact

The strategies are aimed to provide the optimized deployment result for different use cases:

* "standard" is the regular deployment process.
* "quick" minimizes the time required for deployment.
* "compact" minimizes the space taken by the published view files.  

The following paragraphs describe the implementation details and features of the strategies.

## Terms used

<table>
  <tr>
    <th>Term</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><i>Package</i></td>
    <td>A set of files in a particular <code>area/theme/locale</code> directory.</td>
  </tr>
  <tr>
    <td><i>Parent package</i></td>
    <td>A virtual package aggregating files that are locale-independant, that is common for several packages. These files might include CSS, images, fonts. <p class="q">Does the table with "patterns" give more info about distinguishing common files? Should I reference it here?</p></td>
  </tr>
</table>

## Standard strategy

When the standard strategy is used, all static view files for all packages are deployed, that is, processed by <code>\Magento\Framework\App\View\Asset\Publisher</code>.

## Quick strategy

In the quick strategy, the parent package is aggregated on a locale level.

When generating files for any other locale, only locale-dependent static files are deployed. All other required files are copied from the parent package. This approach minimizes the time required for deployment. Thought a lot of files are duplicated.

## Compact strategy

The compact strategy avoids duplicating of files for themes, areas and locales. This is achieved by storing all common files in "basic" sub-directories:

* basic for areas: `base`
* basic for themes: `Magento/base`
* basic for locales: `default`

In order to distinguish which files are common, and which are area-, theme- and/or locale-specific, the following patterns are used:

<table>
  	<col width="35%">
  	<col width="15%">
  	<col width="50%">
	<tbody>
		 <tr>
			<th>Pattern</th>
			<th>Type</th>
			<th>Comment</th>
		 </tr>
         <tr>
            <td>%area%/%theme%/%locale%</td>
            <td><p>theme</p></td>
            <td><p>Referenced from all client code since all clients operate within concrete scope (area, theme, and locale)</p></td>
         </tr>
         <tr>
             <td>%area%/%theme%/default</td>
             <td><p>base</p></td>
             <td><p>Could not be referenced directly from client code</p></td>
         </tr>
          <tr>
             <td>%area%/Magento/base/%locale%</td>
             <td><p>base</p></td>
             <td><p>Could not be referenced directly from client code</p></td>
          </tr>
          <tr>
             <td>%area%/Magento/base/default</td>
             <td><p>base</p></td>
             <td><p>Could not be referenced directly from client code</p></td>
          </tr>
          <tr>
             <td>%area%/Magento/base/default</td>
             <td><p>base</p></td>
             <td><p>Could not be referenced directly from client code</p></td>
          </tr>
          <tr>
             <td>base/Magento/base/%locale%</td>
             <td><p>base</p></td>
             <td><p>Could not be referenced directly from client code</p></td>
          </tr>
          <tr>
             <td>base/Magento/base/default</td>
             <td><p>base</p></td>
             <td><p>Could not be referenced directly from client code</p></td>
         </tr>
	</tbody>
</table>

All content, specific to some area, theme, and locale, is deployed to corresponding area/theme/locale directory.

```
pub/static
        adminhtml
            ...
        frontend
            Magento/luma/
                default/
                    %path/to/file%
                    ...
                en_US/
                    %path/to/file%
                    %module_name/%path/to/file%
                    ...
                fr_FR/
                    %path/to/file%
                    %module_name/%path/to/file%
                    ...
            Magento/blank/
                default/
                    %path/to/file%
                en_US/
                    %path/to/file%
                    %module_name/%path/to/file%
                    ...
                fr_FR
                    %path/to/file%
                    %module_name/%path/to/file%
                    ...
```

Except base theme, each theme in each area has default locale, where all common for theme locales files are kept: CSS, font, images.
As Javascript files can have translations, they are deployed for each area, theme and locale.

### Mapping deployed files
This approach to deployment means that files are inherited from basic themes and locales. This inheritance relations are stored in the map files located in the `pub/static` directory. There are separate map files for PHP and JS:

* `map.php`
* `requirejs-map.js`
<p class="q">Where are these maps stored exactly?</p>
Example of map.php:

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

Example of requirejs-map.js

{%highlight js%}
    require.config({
        "config": {
            "baseUrlInterceptor": {
                "jquery.js": "../../../../base/Magento/base/en_US/"
            }
        }
    });
{%endhighlight%}


## Things to keep in mind for extension developers

During page rendering, all assets URL are resolved bt `\Magento\Framework\View\Asset\Repository::createAsset()` according to the corresponding map file.

To avoid problems with static files not being found not displayed during page rendering, do not use URL concatenations.
All URLs should goes through Requirejs in JavaScript or through AssetRepository in PHP.

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
* "quick" minimizes the time required for deployment when files for more  than one locale are deployed.
* "compact" minimizes the space taken by the published view files.  

The following sections describe the implementation details and features of the strategies.

## Terms used

<table>
  <tr>
    <th>Term</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><i>Deployment package</i></td>
    <td>A set of files in a particular <code>area/theme/locale</code> directory.</td>
  </tr>
  <tr>
    <td><i>Parent deployment package</i></td>
    <td></td>
  </tr>
  <tr>
    <td><i>Virtual deployment package</i></td>
    <td>A package aggregating files that are locale-independent, that is common for several packages. These files might include CSS, images, fonts. <p class="q">Does the table with "patterns" give more info about distinguishing common files? Should I reference it here?</p></td>
  </tr>
</table>

## Standard strategy

When the standard strategy is used, all static view files for all packages are deployed, that is, processed by `\Magento\Framework\App\View\Asset\Publisher`.

## Quick strategy

Deployment process with the quick strategy is following:

1. For each theme, one arbitrary locale is chosen and all files for this locale are deployed like in the standard strategy.
2. For all other locales of the theme:
	1. Files that override the deployed locale are defined. Those files are also deployed. 
	2.  All other files are considered similar for all locales, and are copied from the deployed locale. 
 
This approach minimizes the deployment time required for multiple locales. Though a lot of files are duplicated.

## Compact strategy

The compact strategy avoids duplicating of files for themes, areas and locales. Instead, the similar files are stored in "base" sub-directories.
For the best possible result, three levels of similarity are allocated: area, theme, and  locale. "Basic" sub-directories are created for all combinations. 

The following table describes the patterns used for creating these sub-directories:


<table>
  	<col width="35%">
  	<col width="15%">
  	<col width="50%">
	<tbody>
		 <tr>
			<th>Pattern</th>
			<th>Description</th>
		 </tr>
         <tr>
            <td>%area%/%theme%/%locale%</td>
            <td><p>area-, theme-, and locale- specific</p></td>
         </tr>
         <tr>
             <td>%area%/%theme%/default</td>
             <td><p>для всех локалей конкретной эрии и темы</p></td>
         </tr>
          <tr>
             <td>%area%/Magento/base/%locale%</td>
             <td>специфичны для эрии и локали, но для всех тем</td>
          </tr>
          <tr>
             <td>%area%/Magento/base/default</td>
             <td><p>для всех тем и локалей конкретной эрии</p></td>
          </tr>
          <tr>
             <td>base/Magento/base/%locale%</td>
             <td><p>для конкретной локали всех эрий и тем</p></td>
          </tr>
          <tr>
             <td>base/Magento/base/default</td>
             <td><p>универсальны для всех эрий, тем и локалей</p></td>
         </tr>
	</tbody>
</table>


### Mapping deployed files
This approach to deployment means that files are inherited from basic themes and locales. This inheritance relations are stored in the map files for each combination of area, theme and locale. There are separate map files for PHP and JS:

* `map.php`
* `requirejs-map.js`

`map.php` is used by `Magento\Framework\View\Asset\Repository` to build correct URLs.

`requirejs-map.js` is used by baseUrlResolver plugin for RequireJS.

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

To avoid problems with static files not being found not displayed during page rendering, do not use URL concatenations: use `\Magento\Framework\View\Asset\Repository::createAsset()` for building URLs to the static view files.



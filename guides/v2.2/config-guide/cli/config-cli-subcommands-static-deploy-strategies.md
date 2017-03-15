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
    <td>A package that aggregates common for few packages files. <p class="q">need explanation</p></td>
  </tr>
</table>

## Standard strategy

When the standard strategy is used, all static view files for all packages are deployed, that is, processed by <code>\Magento\Framework\App\View\Asset\Publisher</code>.

## Quick strategy

Part of files can be deployed and part of them can be copied from the parent package.
<p class="q">in general?</p>
In the quick strategy the parent package is aggregated on locale level.
<p class="q">not clear</p>
When generating files for any other locale, only static files found in this package?locale directory? are deployed. All other required files are copied from the aggregated parent package.
<p class="q">why "aggregated parent package" if the parent package is aggregated according to the definition?</p> 

## Compact strategy
In the quick strategy there are a lot of duplication of same files for all combinations of deployed areas, themes, and locales.
In the real situation, most of the static files don't have specific versions for locales, also it is the common case that for different themes there are only a few files which are different from the main website theme.

<p class="q">how packages and themes are related?</p>

So the main purpose of compact strategy is to avoid duplicating of files between theme, areas, locales.
In order to achieve this new basic theme (Magento/base) and basic area (base) are created.

In order to distinguish which files are common, and which are specific lets see, what patterns are used for static content deploy.
There are several types of static content, which could be described as the following patterns:

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
            <td>{{area}}/{{theme}}/{{locale}}</td>
            <td><p>theme</p></td>
            <td><p>Referenced from all client code since all clients operate within concrete scope (area, theme, and locale)</p></td>
         </tr>
         <tr>
             <td>{{area}}/{{theme}}/default</td>
             <td><p>base</p></td>
             <td><p>Could not be referenced directly from client code</p></td>
         </tr>
          <tr>
             <td>{{area}}/Magento/base/{{locale}}</td>
             <td><p>base</p></td>
             <td><p>Could not be referenced directly from client code</p></td>
          </tr>
          <tr>
             <td>{{area}}/Magento/base/default</td>
             <td><p>base</p></td>
             <td><p>Could not be referenced directly from client code</p></td>
          </tr>
          <tr>
             <td>{{area}}/Magento/base/default</td>
             <td><p>base</p></td>
             <td><p>Could not be referenced directly from client code</p></td>
          </tr>
          <tr>
             <td>base/Magento/base/{{locale}}</td>
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

All adjective content (specific to some area, theme, and locale) will be deployed to corresponding area/theme/locale subfolder.

<code>
pub/static
        adminhtml
            ...
        frontend
            Magento/luma
                default
                    path_to_file
                en_US
                    path_to_file
                    {module_name}
                    path_to_file
                fr_FR
                    path_to_file
                    {module_name}
                    path_to_file
            Magento/blank
                default
                    path_to_file
                en_US
                    path_to_file
                    {module_name}
                    path_to_file
                fr_FR
                    path_to_file
                    {module_name}
                    path_to_file
</code>

Except base theme, each theme in each area has <code>default<code> locale, where all common for theme locales files are kept:
<code>css, font, images</code>
As Javascript files can have translations they are duplicated for each area.
As new approach of deployment means that files will be inherited from parent themes and locales, we need
to have map file, which will represents relations of this inheritance. For php and js there are two files: <code>map.php, requirejs-map.js</code>

Example of map.php:

<code>
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
</code>

Example of requirejs-map.js

<code>
    require.config({
        "config": {
            "baseUrlInterceptor": {
                "jquery.js": "../../../../base/Magento/base/en_US/"
            }
        }
    }); 
</code>


#### Page Rendering (для екстеншн JS devs)
During page rendering, all assets URL will be resolved in **\Magento\Framework\View\Asset\Repository::createAsset()** according to the corresponding map file.
There should be no url-concatinations in JavaScripts.
All urls should goes through requirejs in JavaScript or through AssetRepository in PHP.

иначе файл может быть не найден при деплое в компакт стратегии.

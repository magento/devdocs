---
group: config-guide
subgroup: 04_CLI
title: Static files deployment strategies
menu_title: Static files deployment strategies
menu_node:
menu_order: 301
level3_menu_node: level3child
level3_subgroup: static_deploy
version: 2.2
github_link: config-guide/cli/config-cli-subcommands-static-deploy-strategies.md
functional_areas:
  - Configuration
  - Deploy
  - System
  - Setup
---

## Overview

When [deploying static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html), you can choose one of the three available strategies. Each of them provides optimal deployment results for different use cases:

*   [Standard](#static-file-standard): the regular deployment process.
*   [Quick](#static-file-quick) (_default_): minimizes the time required for deployment when files for more than one {% glossarytooltip 05099dbb-d491-4e33-a065-16035cb2d4d9 %}locale{% endglossarytooltip %} are deployed.
*   [Compact](#static-file-compact): minimizes the space taken by the published view files.

The following sections describe the implementation details and features of each strategy.

## Standard strategy {#static-file-standard}
When the Standard strategy is used, all static view files for all packages are deployed, that is, processed by [`\Magento\Framework\App\View\Asset\Publisher`]({{ site.mage2200url }}lib/internal/Magento/Framework/App/View/Asset/Publisher.php){:target="\_blank"}.

For more information, see [Deploy static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html).

## Quick strategy {#static-file-quick}
The quick strategy performs the following actions:

1. For each theme, one arbitrary locale is chosen and all files for this locale are deployed, like in the standard strategy.
2. For all other locales of the theme:
	1. Files that override the deployed locale are defined and deployed.
	2.  All other files are considered similar for all locales, and are copied from the deployed locale.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
By _similar_, we mean files that are independent of the locale, theme, or area. These files might include CSS, images, and fonts.
</div>

This approach minimizes the deployment time required for multiple locales although a lot of files are duplicated.

## Compact strategy {#static-file-compact}
The compact strategy avoids file duplication by storing similar files in `base` subdirectories.

For the most optimized result, three scopes for possible similarity are allocated: area, theme, and locale. `base` subdirectories are created for all combinations of these scopes.

The files are deployed to these subdirectories according to the following patterns.

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
        <code>&lt;area>/&lt;theme>/&lt;locale></code>
      </td>
      <td>
        <p>
          Files specific for a particular area, theme, and locale
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;area>/&lt;theme>/default</code>
      </td>
      <td>
        Files similar for all locales of a particular theme of a
        particular area.
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;area>/Magento/base/&lt;locale></code>
      </td>
      <td>
        Files specific for a particular area and locale, but
        similar for all themes.
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;area>/Magento/base/default</code>
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
        <code>base/Magento/base/&lt;locale></code>
      </td>
      <td>
        <p>
          Files similar for all areas and themes, but specific to
          a particular locale.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>base/Magento/base/default</code>
      </td>
      <td>
        Similar for all areas, themes and locales.
      </td>
    </tr>
  </tbody>
</table>


### Mapping deployed files
The approach to deployment used in the compact strategy means that files are inherited from base themes and locales. This inheritance relations are stored in the map files for each combination of area, {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} and locale. There are separate map files for {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} and JS:

* `map.php`
* `requirejs-map.js`

`map.php` is used by [`Magento\Framework\View\Asset\Repository`]({{ site.mage2200url }}lib/internal/Magento/Framework/View/Asset/Repository.php){:target="\_blank"} to build correct URLs.

`requirejs-map.js` is used by the `baseUrlResolver` plugin for RequireJS.

Example of `map.php`:

```php?start_inline=1
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
```

Example of `requirejs-map.js`:

```js
require.config({
    "config": {
       "baseUrlInterceptor": {
            "jquery.js": "../../../../base/Magento/base/en_US/"
        }
    }
});
```

## Tips for extension developers
To build URLs to static view files, use [`\Magento\Framework\View\Asset\Repository::createAsset()`]({{ site.mage2200url }}lib/internal/Magento/Framework/View/Asset/Repository.php#L200-L213){:target="\_blank"}.

Do not use {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} concatenations to avoid problems with {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %} being not found and not displayed during page rendering.

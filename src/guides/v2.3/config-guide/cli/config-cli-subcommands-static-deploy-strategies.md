---
group: configuration-guide
title: Static files deployment strategies
functional_areas:
  - Configuration
  - Deploy
  - System
  - Setup
---

## Overview

When [deploying static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html), you can choose one of the three available strategies. Each of them provides optimal deployment results for different use cases:

*  [Standard](#static-file-standard): the regular deployment process.
*  [Quick](#static-file-quick) (_default_): minimizes the time required for deployment when files for more than one [locale](https://glossary.magento.com/locale) are deployed.
*  [Compact](#static-file-compact): minimizes the space taken by the published view files.

The following sections describe the implementation details and features of each strategy.

## Standard strategy {#static-file-standard}

When the Standard strategy is used, all static view files for all packages are deployed, that is, processed by [`\Magento\Framework\App\View\Asset\Publisher`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/View/Asset/Publisher.php).

For more information, see [Deploy static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html).

## Quick strategy {#static-file-quick}

The quick strategy performs the following actions:

1. For each theme, one arbitrary locale is chosen and all files for this locale are deployed, like in the standard strategy.
1. For all other locales of the theme:

   1. Files that override the deployed locale are defined and deployed.
   1. All other files are considered similar for all locales, and are copied from the deployed locale.

 {:.bs-callout-info}
By _similar_, we mean files that are independent of the locale, theme, or area. These files might include CSS, images, and fonts.

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

The approach to deployment used in the compact strategy means that files are inherited from base themes and locales. This inheritance relations are stored in the map files for each combination of area, [theme](https://glossary.magento.com/theme) and locale. There are separate map files for [PHP](https://glossary.magento.com/php) and JS:

*  `map.php`
*  `requirejs-map.js`

`map.php` is used by [`Magento\Framework\View\Asset\Repository`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/View/Asset/Repository.php) to build correct URLs.

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

To build URLs to static view files, use [`\Magento\Framework\View\Asset\Repository::createAsset()`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/View/Asset/Repository.php#L211-L244).

Do not use [URL](https://glossary.magento.com/url) concatenations to avoid problems with [static files](https://glossary.magento.com/static-files) being not found and not displayed during page rendering.

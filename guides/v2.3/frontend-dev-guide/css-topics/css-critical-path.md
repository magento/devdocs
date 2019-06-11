---
group: frontend-developer-guide
title: CSS critical path
functional_areas:
  - Frontend
---

All CSS styles loaded from external files are considered as render-blocking. It means that web page won't be displayed until these files are loaded.
By using CSS critical path we deliver minified critical CSS inline in `<head>` and defer all non-critical styles that are loaded asynchronously.
Thus we can significantly improve the time to first render of our pages.

## Enable CSS critical path

{: .bs-callout .bs-callout-info }
CSS critical path configuration is located in **Stores** > **Settings** > **Configuration** > ADVANCED > **Developer** tab. But **Developer** tab is hidden in [production mode][production-mode]. Once in production mode, CSS critical path can only be enabled using the CLI.

Enable CSS critical path:

    ```bash
    php -f bin/magento config:set dev/css/use_css_critical_path 1
    ```

Make sure that there is `critical.css` file for your theme. Other non-critical CSS files will be loaded asynchronously.

## Overview of Magento's critical CSS

Critical CSS file should be located in `app/design/frontend/<your_vendor_name>/<your_theme_name>/web/css/critical.css`
Default Luma theme critical CSS file is located in `app/design/frontend/Magento/luma/web/css/critical.css`
If there is not `critical.css` for custom theme but there is Luma theme, Luma's `critical.css` will be used.
Critical css file path can also be configured in `di.xml` as a constructor `filePath` argument in `Magento\Theme\Block\Html\Header\CriticalCss` block.

To generate critical CSS for your theme critical path CSS generators like [Penthouse](https://www.npmjs.com/package/penthouse) or [Critical](https://www.npmjs.com/package/critical) can be used. Or you can create it by yourself. While creating critical CSS adhere to the following principles:

- Minify your `critical.css` to reduce it's size.
- Do not duplicate your styles in `critical.css` and non-critical style sheets.
- Do not introduce new styles in `critical.css` that are not present in non-critical style sheets. CSS rules from non-critical style sheets should overwrite critical CSS rules. Otherwise your styles can be broken.

### Critical CSS loader

There is a preloading spinner in critical styles if CSS critical path is enabled in configuration. It is added in `Magento/Theme/view/frontend/layout/default.xml`. Preloader explains to users that something is still loading and it helps to increase the user experience.
After non-critical CSS is loaded and applied, spinner disappears. But spinner disappears only in case if you have CSS styles from Blank theme CSS. If you have your own CSS rule, you should hide preloader by `data-role='main-css-loader'` attribute.

## Critical CSS performance improvements

Introducing critical path CSS to Magento leads to the following performance optimization improvements:

1. Eliminated render-blocking CSS resources. As a result time for loading render-blocking resources decreased from 1.51 sec to 0.76 sec.

![CSS resources eliminated as render-blocking]({{ site.baseurl }}/common/images/critical_css_improvements1.png)

2. First meaningful paint time improved from 3.5 sec to 2.3 sec.

![First meaningful paint time improved]({{ site.baseurl }}/common/images/critical_css_improvements2.png)

3. Speed index increased by 0.8 sec.

![Speed index increased]({{ site.baseurl }}/common/images/critical_css_improvements3.png)

As a result Google PageSpeed Insights score improved by **5** points.

{: .bs-callout .bs-callout-info }
These are results for mobile devices with slow connection from [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)


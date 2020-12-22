---
group: frontend-developer-guide
title: CSS critical path
functional_areas:
  - Frontend
---

All CSS styles loaded from external files are considered as render-blocking. This means that a web page will not be displayed until these files are loaded.
By using 'CSS critical path', we deliver minified critical CSS inline in `<head>` and defer all non-critical styles that are loaded asynchronously.
Thus we can significantly improve the time to first render of our pages.

## Enable CSS critical path

 {:.bs-callout-info}
CSS critical path configuration is located on the **Stores** > Settings > **Configuration** > **ADVANCED** > **Developer** tab. However, the **Developer** tab is hidden in [production mode]({{page.baseurl}}/config-guide/bootstrap/magento-modes.html). Once in production mode, CSS critical path can only be enabled using the CLI.

To enable the CSS critical path:

```bash
bin/magento config:set dev/css/use_css_critical_path 1
```

Make sure that there is a `critical.css` file for your theme. Other non-critical CSS files will be loaded asynchronously.

## Overview of Magento's critical CSS

The 'critical' CSS file should be located in `app/design/frontend/<your_vendor_name>/<your_theme_name>/web/css/critical.css`
The default Luma theme critical CSS file is located in `app/design/frontend/Magento/luma/web/css/critical.css`
If there is not a `critical.css` file for the custom theme, but there is one for the Luma theme, Luma's `critical.css` will be used.
The critical css file path can also be configured in `di.xml` as a constructor `filePath` argument in the `Magento\Theme\Block\Html\Header\CriticalCss` block.

To generate a critical CSS for your theme, critical path CSS generators like [Penthouse](https://www.npmjs.com/package/penthouse) or [Critical](https://www.npmjs.com/package/critical) can be used, or you can create it yourself. While creating critical CSS, adhere to the following principles:

-  Minify your `critical.css` to reduce its size.
-  Do not duplicate styles in `critical.css` and non-critical style sheets.
-  Do not introduce new styles in `critical.css` that are not present in non-critical style sheets. CSS rules from non-critical style sheets should overwrite critical CSS rules. Otherwise your styles can be broken.

### Critical CSS loader

If 'CSS critical path' is enabled in the configuration, a preloading spinner will be used. It is added in `Magento/Theme/view/frontend/layout/default.xml`.
After non-critical CSS is loaded and applied, the spinner disappears. The spinner will disappear automatically only if you have CSS styles from the 'Blank' theme CSS. If you have your own CSS rules, you should hide the preloader by using the `data-role='main-css-loader'` attribute.

## Critical CSS performance improvements

Introducing a critical path CSS to Magento leads to performance improvements:

-  Eliminated render-blocking CSS resources. As a result, the time for loading render-blocking resources decreases substantially.

   ![CSS resources eliminated as render-blocking]({{ site.baseurl }}/common/images/critical_css_improvements1.png)

-  The first meaningful paint time improved from 3.5 seconds to 2.3 seconds.

   ![First meaningful paint time improved]({{ site.baseurl }}/common/images/critical_css_improvements2.png)

-  The speed index increased by 0.8 seconds.

   ![Speed index increased]({{ site.baseurl }}/common/images/critical_css_improvements3.png)

As a result, the Google PageSpeed Insights score improved by **5** points.

 {:.bs-callout-info}
These are results for mobile devices with slow connection from [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

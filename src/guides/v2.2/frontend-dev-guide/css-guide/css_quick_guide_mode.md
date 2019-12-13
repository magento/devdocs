---
group: frontend-developer-guide
title: Simple style changes with client-side LESS compilation vs. server-side
functional_areas:
  - Frontend
---

After you [create a theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html), you need to decide which LESS compilation mode to use before changing styles. You can choose between [two modes]({{ page.baseurl }}/frontend-dev-guide/css-topics/css-preprocess.html):

-  **Server-side compilation mode (default):** less file is compiled with PHP less library. In developer mode, PHP will generate the CSS files on the fly provided there is not one already. Running static content deploy will compile the stylesheet.

-  **Client-side compilation mode (recommended for [theme](https://glossary.magento.com/theme) development):** Less file is compiled client-side on every page load, which results in slow response times and "flash of unstyled text" (FOUT) issues.

The examples in this topic use the [simple approach]({{ page.baseurl }}/frontend-dev-guide/css-guide/css_quick_guide_approach.html#simple_extend) for customizing theme styles. You make changes to the `_extend.less` file.

In our examples, we will change the color and font of the primary buttons. The default view of the primary buttons can be illustrated by the **Create an Account** button view on the Customer login page:

![Admin login page with the default view of the primary buttons]({{ site.baseurl }}/common/images/extend_less_screenshot21.png)

## Before you begin

1. [Create a theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html). In your `theme.xml` file, specify Magento Luma or Magento Blank as the parent theme.
1. [Apply your theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-apply.html#theme-apply-apply) in the [Magento Admin](https://glossary.magento.com/magento-admin).

## Using server-side compilation mode

The following is an illustration of how the process of making simple changes looks like with the server-side LESS compilation mode:

1. Navigate to your theme directory and add the `web/css/source/_extend.less` file.
1. Change the color of the buttons by adding the following code in the `_extend.less` file:

   ```less
   .action {
       &.primary {
           background-color: palevioletred;
           border-color: palevioletred;
       }
   }
   ```

1. [Clean static files cache]({{ page.baseurl }}/frontend-dev-guide/cache_for_frontdevs.html#clean_static_cache).
1. Refresh the page and verify your changes.

   ![Less code redefining the color of the primary buttons]({{ site.baseurl }}/common/images/extend_less_screenshot121.png)

1. Change the button font size by adding the following code in the `_extend.less` file:

   ```less
   .action {
       &.primary {
           background-color: palevioletred;
           border-color: palevioletred;
           font-size: 1.5em;
       }
   }
   ```

1. Delete all files in the following directories:

   -  `pub/static/frontend/<vendor>/<theme>`
   -  `var/view_preprocessed/pub/static/frontend/<vendor>/<theme>`

1. Refresh the page and verify your changes.

   ![Admin login page where the font of the buttons was changed]({{ site.baseurl }}/common/images/extend_less_screenshot221.png)

{:.bs-callout-info}
If you are using server-side compilation mode, you must [clean generated static view files]({{ page.baseurl }}/frontend-dev-guide/cache_for_frontdevs.html#clean_static_cache). Continue to the next section to learn how to use Grunt to automate this process.

## Using server-side compilation mode with Grunt

1. Navigate to your theme directory and create a `web/css/source/_extend.less` file.
1. Install Grunt and register your theme as described in [Installing and configuring Grunt]({{ page.baseurl }}/frontend-dev-guide/tools/using_grunt.html#grunt_prereq).
1. From your Magento installation directory, run the following commands:

   -  `grunt exec:<your_theme>`
   -  `grunt less:<your_theme>`
   -  `grunt watch`

1. Change the color of the buttons by adding the following code in the `_extend.less` file:

   ```less
   .action {
       &.primary {
           background-color: palevioletred;
           border-color: palevioletred;
       }
   }
   ```

1. Refresh the page and verify your changes.

   ![Admin login page where the color of the button was changed]({{ site.baseurl }}/common/images/extend_less_screenshot121.png)

1. Change the button font size by adding the following code in the `_extend.less` file:

   ```less
   .action {
       &.primary {
           background-color: palevioletred;
           border-color: palevioletred;
           font-size: 1.5em;
       }
   }
   ```

1. Refresh the page and verify your changes.

   ![Admin login page where the font of the buttons was changed]({{ site.baseurl }}/common/images/extend_less_screenshot221.png)

## Using client-side compilation mode

1. Navigate to your theme directory and create a `web/css/source/_extend.less` file.
1. Log in to the Magento Admin.
1. Click **STORES** > **Settings** > **Configuration** > **ADVANCED** > **Developer** > **Frontend development workflow** > **Workflow type**.
1. Change the LESS compilation mode to client-side.
1. [Clean static view files]({{ page.baseurl }}/frontend-dev-guide/cache_for_frontdevs.html#clean_static_cache).
1. Change the color of the buttons by adding the following code in the `_extend.less` file:

   ```less
   .action {
       &.primary {
           background-color: palevioletred;
           border-color: palevioletred;
       }
   }
   ```

1. Refresh the page and verify your changes.

   ![Admin login page where the font of the buttons was changed]({{ site.baseurl }}/common/images/extend_less_screenshot121.png)

1. Change the button font size by adding the following code in the `_extend.less` file:

   ```less
   .action {
       &.primary {
           background-color: palevioletred;
           border-color: palevioletred;
           font-size: 1.5em;
       }
   }
   ```

1. Refresh the page and verify your changes.

   ![Admin login page where the font of the buttons was changed]({{ site.baseurl }}/common/images/extend_less_screenshot221.png)

{:.bs-callout-info}
When your Magento instance is in client-side Less compilation mode, simple changes are applied after saving or refreshing the page. For more sophisticated changes, you may need to manually clean the theme sub-directory in the `pub/static/frontend` directory and generate a new deployment. See [Styles debugging]({{ page.baseurl }}/frontend-dev-guide/css-topics/css_debug.html).

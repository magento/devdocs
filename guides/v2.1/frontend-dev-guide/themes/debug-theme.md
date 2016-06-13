---
layout: default  
group: fedg
subgroup: A_Themes
title: Locate templates, layouts, and styles
menu_title: Locate templates, layouts, and styles
menu_order: 6
version: 2.1
github_link: frontend-dev-guide/themes/debug-theme.md
---

<h2 id="debug-theme-intro">What's in this topic</h2>

When you create a Magento theme, you might need to create override files for default theme and module view files. To do so, you must determine which template, layout, and style files Magento uses. This topic describes how to do this.

**Contents**

* TOC
{:toc}


## Locate templates {#debug-theme-templ}

To locate the template that is responsible for a specific part of the storefront or Admin, you can use Magento built-in template hints.

To enable template hints:

1. Click **Stores** > **Configuration** > ADVANCED > **Developer**.

2. In the **Scope** dropdown in the upper-left corner select the view for which you want the template hints.

3. In the **Debug** tab, set **Template Path Hints for storefront** to **Yes**. To enable path hints for Admin set **Template Path Hints for Admin** to **Yes**.
4. To save the changes, click **Save Config** in the upper-right corner.
<p><img src="{{ site.baseurl }}common/images/fdg_debug_theme.png" alt="Enabling template hints"></p>

Now that you have enabled template hints, reload the page that you want to modify, and review the path for the template file or files that template hints show.

For example, here is how a storefront category page looks with enabled template hints:
<p><img src="{{ site.baseurl }}common/images/theme_debug2.png" alt="A storefront page with enabled template hints"></p>

In this example mini shopping cart page element is defined by the `<Magento_Checkout_module_dir>/view/frontend/templates/cart/minicart.phtml` template:

<p><img src="{{ site.baseurl }}common/images/theme_debug3.png" alt="A hint with template name for minishopping cart"></p>
(the template name is above the element)

Here is how Customers page looks with enabled template hints in Admin:
<p><img src="{{ site.baseurl }}common/images/theme_debug5.png" alt="Admin page with enabled template hints"></p>

Alternatively, you can perform a text search in the file system by using system generated titles, CSS class names, block titles, labels, or links text as search terms.
For example, using a browser debug tool, you can define that the minicart block css class is `minicart-wrapper`.
<p><img src="{{ site.baseurl }}common/images/theme_debug4.png" alt="Firebug displaying html"></p>

A search through the app directory for occurrences of "minicart-wrapper" in `.phtml` files returns the `app/code/Magento/Checkout/view/frontend/templates/cart/minicart.phtml` template.

Since it is not recommended to edit the default files, you need to add overriding files if you want to customize the template. For details about overriding templates please refer to <a href="{{site.gdeurl21}}frontend-dev-guide/templates/template-walkthrough.html">Customizing Theme Template</a>.


## Locate layouts {#debug-theme-layout}
Just like templates, layouts are saved on a per-module basis. You can easily locate the layout file by determining in which module the templates for the element you are interested in reside in. To locate the template, you can use Template Hints or text search in the app directory, as described previously .

After you have determined the module, you can search for the layout in the following locations:

1. `<current_theme_dir>/<Namespace>_<Module>/layout/`
2. `<parent_theme(s)_dir>/<Namespace>_<Module>/layout/`
3. `<module_dir>/frontend/layout/`
4. `<module_dir>/view/base/layout/`

There is no straightforward algorithm how to define at once the exact layout file, but in most cases layout file names are self descriptive. Also you can search them for mentions of the corresponding templates.

Example:

Let's say you need to locate the layout that is responsible for displaying mini shopping cart on the storefront, when the Blank theme by Magento is applied for the store view.

Using the Template Hints we determine that the template is `app/code/Magento/Checkout/view/frontend/templates/cart/minicart.phtml`, and in the path, we see that it belongs to the `Magento_Checkout` module.

Let's search for the layout following the fallback scheme:

1. Check the `app/design/frontend/Magento/blank/Magento_Checkout/` layout. To locate the required layout, search this directory for occurrences of the template name, " minicart.phtml ". No matching file is found, so we proceed to the next fallback level, which is the parent theme layouts.
2. We can find the info about parent theme in a theme configuration file `theme.xml`, the parent theme name is specified there in the `<parent></parent>` node. In the `app/design/frontend/Magento/blank/theme.xml` there's no `<parent>` node, which means the Blank theme has no parents. So we should search on the next fallback level which is the module layouts.
3. The Magento_Checkout layouts are located in `app/code/Magento/Checkout/view/frontend/layout/`. After searching this directory for occurrences of "`minicart.phtml`", we define that the layout we are looking for is `app/code/Magento/Checkout/view/frontend/layout/default.xml`.

After you located the necessary layout file, you can create your custom layout file with the corresponding name in your theme folder to add <a href="{{site.gdeurl21}}frontend-dev-guide/layouts/layout-extend.html" target="_blank">extending</a> or <a href="{{site.gdeurl21}}frontend-dev-guide/layouts/layout-override.html" target="_blank">overriding</a> content. Please see <a href="{{site.gdeurl21}}frontend-dev-guide/layouts/layout-overview.html">Customizing Theme Layouts</a> for more details.


## Locate styles {#debug-theme-style}
To locate a CSS rule that is applied to a certain element, find the template for the page that contains the element. Or you can use browser debugging tools, to locate the class name.
After you find the class name, use text search in the theme and module styles directories to locate the `.less` or `.css` file that defines the class. Perform the search according to the following fallback scheme:


2. Theme styles `<current_theme_dir>/web/css/`
2. Module theme styles `<current_theme_dir>/<Namespace>_<Module>/web/css/`
3. Parent theme styles `<parent_theme_dir>/web/css/`
4. Parent theme Module styles `<parent_theme_dir>/<Namespace>_<Module>/web/css/`
5. Module styles for the `frontend` area `<module_dir>/view/frontend/web/css/`
6. Module styles for the `base` area `<module_dir>/view/base/web/css/`

Example:

Let's find the file defining on the CSS classes used for displaying the mini shopping cart on the storefront, when the Blank theme by Magento is applied for the store view.

In the mini shopping cart template `app/code/Magento/Checkout/view/frontend/templates/cart/minicart.phtml` the top level element has `minicart-wrapper` class.

So, let's search for occurrences of "`minicart-wrapper`" in according to the fallback scheme:

1. Search in `app/design/frontend/Magento/blank/web/css`, the search returns no results.
2. Search in `app/design/frontend/Magento/blank/Magento_Checkout/web/css`.The "`minicart-wrapper`" style is defined in `app/design/frontend/Magento/blank/Magento_Checkout/web/css/source/module/_minicart.less`

<p>After you determine which <code>.css</code> or <code>.less</code> file defines the class, you can override the default class definition in your custom <code>.css</code> or <code>.less</code> files.  For details, see <a href="{{ site.gdeurl21 }}frontend-dev-guide/css-topics/css-themes.html">CSS in themes</a>.</p>

layout: howtom2devgde_chapters_fedg
title: How to debug a theme
---

<h1 id="debug-theme">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2fedg/debug-theme.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="debug-theme-intro">Introduction</h2>
This section describes the ways to find out which templates, layouts, and styles are used for displaying this or that page or element of a Magento store. 

Though creating a new Magento theme does not involve editing default theme and module view files, you still need to know them to be able to override or elaborate their content in your custom theme files, and to debug your theme.

<h2 id="debug-theme-templ">Locating Templates</h2>
You can use Magento built-in Template Hints to find out which template is responsible for which part of the store front.

To enable Template Hints:

1. Go to **Stores** > **Configuration** > ADVANCED > **Developer**. 

2. In the **Scope** dropdown in the upper-left corner select the store view you want the template hints show on.

3. In the **Debug** tab set **Template Path Hints** to **Yes**.
4. To save the changes click **Save Config** in the upper-right corner.
<p><img src="{{ site.baseurl }}common/images/theme_debug1.png" alt="Enabling template hints"></p>

Now that you have Template Hints enabled, reload the page you want to modify, and look at the path of the template file(s) that the Template Hints will provide you with.

For example, here is how a strorefront category page looks with Template Hints are enabled:
<p><img src="{{ site.baseurl }}common/images/theme_debug2.png" alt="A storefront page with enabled template hints"></p>

So, we can see that for example mini shopping cart page element is defined by the `app/code/Magento/Checkout/view/frontend/templates/cart/minicart.phtml` template:

<p><img src="{{ site.baseurl }}common/images/theme_debug3.png" alt="A hint with template name for minishopping cart"></p>
(the template name is above the element)

The other simple method for locating a necessary template is performing a text search in the file system using system generated titles,  CSS class names, block titles, labels or links text as search terms. 
For example, using a browser debug tool, you can define that the minicart block css class is `minicart-wrapper`.
<p><img src="{{ site.baseurl }}common/images/theme_debug4.png" alt="Firebug displaying html"></p>

Searching through the app directory for occurrences of "minicart-wrapper" in .phtml files leads us to locating the `app/code/Magento/Checkout/view/frontend/templates/cart/minicart.phtml` template.

Since it is not recommended to edit the default files, you need to add overriding files if you want to customize the template. For details about overriding templates please refer to Customizing Theme Template. 
<--! ADDLINK -->

<h2 id="debug-theme-layout" >Locating Layouts</h2>
Just like templates, layouts are saved on a per-module basis therefore you can easily locate the layout file having defined in which module reside the templates for the element you are interested in. To locate the template, you can use Template Hints or text search in the app directory, as described earlier.

Once you have defined the module, you can search for the layout in the following locations according to the layout fallback logic:

1. `app/design/<area>/<Vendor>/<current_theme>/<Namespace>_<Module>/layout` 
2. `app/design/<area>/<Vendor>/<parent_theme(s)>/<Namespace>_<Module> /layout`
3. `app/code/<Vendor>/<Module>/view/<area>/layout`

There is no straightforward algorithm how to define at once the exact layout file, but in most cases layout file names are self descriptive. Also you can search them for mentions of the corresponding templates. 

Example:

Let's say you need to locate the layout which is responsible for displaying mini shopping cart on the storefront, when the blank theme by Magento is applied for the store view.

Using the Template Hints we have defined that the template is `app/code/Magento/Checkout/view/frontend/templates/cart/minicart.phtml`, and in the path we see that it belongs to the `Magento_Checkout` module.

Let's search for the layout following the fallback scheme:

1. First we check the `app/design/frontend/Magento/blank/Magento_Checkout/`layout. To locate the required layout, we need to search this directory for occurrences of the template name, " minicart.phtml ". No matching files is found, so we proceed to the next fallback level, which is the parent theme layouts. 
2. We can find the info about parent theme in a theme configuration file theme.xml, the parent theme name is specified there in the `<parent></parent>` node. In the `app/design/frontend/Magento/blank/theme.xml` there's no `<parent>` node, which means the blank theme has no parents. So we should search on the next fallback level which is the module layouts.
3. The Magento_Checkout layouts are located in `app/code/Magento/Checkout/view/frontend/layout/`. After searching this directory for occurrences of "`minicart.phtml`", we define that the layout we are looking for is `app/code/Magento/Checkout/view/frontend/layout/default.xml`.  

Once you located the necessary layout, you can create your custom layout file with the corresponding name in your theme folder, and customize its content. Please see Customizing Theme Layouts for more details.
<--! ADDLINK -->

<h2 id="debug-theme-style">Locating Styles</h2>
To locate a CSS rule which is applyed to a certain element, you can turn to the template of the page which contains the element. Or you can use browser debugging tools, to locate the class name.
Once you know the class name, use text search in the theme and module styles directories to locate the .less or .css file defining that class. Perform the search according to the following fallback scheme:

1. Theme styles `app/design/<area>/<Vendor>/<current_theme>/web/css`
2. Module theme styles `app/design/<area>/<Vendor>/<current_theme>/<Namespace_Module>/web/css`
3. Parent theme styles `app/design/<area>/<Vendor>/<parent_theme>/web/css`
4. Module styles `app/code/<Vendor>/<Module>/view/<area>/web/`

Example:

Let's find the file defining on the CSS classes used for displaying the mini shopping cart on the storefront, when the blank theme by Magento is applied for the store view.

In the mini shopping cart template `app/code/Magento/Checkout/view/frontend/templates/cart/minicart.phtml` we can see that the top level element has `minicart-wrapper` class.

So, let's search for occurrences of "`minicart-wrapper`" in according to the fallback scheme:

1. First we search in `app/design/frontend/Magento/blank/web/css`, the search returns no results. 
2. Next we search in `app/design/frontend/Magento/blank/Magento_Checkout/web/css`, and find that the "`minicart-wrapper`" style is defined in `app/design/frontend/Magento/blank/Magento_Checkout/web/css/source/minicart.less`

Having located which .css or .less defines the class, you can override the default class definition in your custom .css or .less files, as your customization require. Please see Customizing Theme CSS for more details. 
<--! ADDLINK -->
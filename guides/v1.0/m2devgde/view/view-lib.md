---
title: The Magento 2 view library
layout: howtom2devgde_chapters
...

<h1 id="m2devgde-static-proc">{{ page.title }}</h1>
<p><a href="{{ site.githuburl }}m2devgde/view/view-lib.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="view-library-overview">Overview</h2>

An independent view layer domain, the View component was created to eliminate
global dependencies
on `Magento_Core`, `Magento_Backend`, `Magento_Adminhtml` and `Magento_Page` modules
for HTML content rendering. All application modules perform rendering using the
View component, and remain independent from each other.

The View component is represented
as `Magento\Framework\View` library: `magento2/lib/Magento/Framework/View`.

<h2 id="framework-view-library">The Magento\Framework\View Library</h2>

The View component contains contains basic classes, factories and interfaces
used to implement HTML content rendering  for the frontend and backend
application areas. 

<h2 id="library-components">Magento\View Library Components</h2>

The `Magento\Framework\View` library has the following components:

-   Template Engine

-   Page Assets

-   Element (Block)

-   Design

    -   File Resolution

    -   Fallback

    -   Theme

-   Layout.

<h2>Magento\Framework\View Library Dependencies</h2>

The `Magento\Framework\View` library closely interacts with other Magento
libraries and modules, so it has multiple dependencies. 

`Magento\Framework\View` depends on the following Magento libraries:  

-   `\Magento\Framework\App\Dir`

-   `\Magento\Framework\Autoload`

-   `\Magento\Framework\Code`

-   `\Magento\Framework\Config`

-   `\Magento\Framework\Data`

-   `\Magento\Framework\Event`

-   `\Magento\Framework\File`

-   `\Magento\Framework\Filesystem`

-   `\Magento\Framework\Filter`

-   `\Magento\Framework\HTTP`

-   `\Magento\Framework\Image`

-   `\Magento\Framework\Json`

-   `\Magento\Framework\Message`

-   `\Magento\Framework\Module`

-   `\Magento\Framework\Object`

-   `\Magento\Framework\ObjectManager`

-   `\Magento\Framework\Profiler`

`Magento\Framework\View` depends on the following modules:

-   `Magento_Core`

Apart from obvious and reasonable dependencies,
the `Magento\Framework\View` library has so-called artifact dependencies, which
will be refactored in future releases.

Basic Magento modules that interact with the` Magento\Framework\View` library
are:

-   `Magento_Core`

-   `Magento_Theme`

-   `Magento_Backend`

-   `Magento_FullPageCache`

-   `Magento_Widget`

In addition, a few other modules also use the `Magento\Framework\View` library
in method calls, constructors of models, and helper classes.

The majority of Magento module dependencies on
the `Magento\Framework\View` library are induced on the level of Magento blocks
classes implementation. These dependencies result from unified process of block
classes creation, which is implemented by means of
the `Magento\Framework\View` library:  two parental classes
(`\Magento\Framework\View\Element\AbstractBlock` and`\Magento\Framework\View\Element\Template`)
are common ancestors for all block classes of Magento modules, and implement
the `\Magento\Framework\View\Element\BlockInterface` interface.

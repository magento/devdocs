---
title: The Magento 2 view library
layout: howtom2devgde_chapters
---

<h1 id="m2devgde-static-proc">{{ page.title }}</h1>
<p><a href="{{ site.githuburl }}m2devgde/view/view-lib.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="view-library-overview">Introduction to the view library</h2>

An independent view layer domain, the View component was created to eliminate
global dependencies
on `Magento_Core`, `Magento_Backend`, `Magento_Adminhtml` and `Magento_Page` modules
for HTML content rendering. All application modules perform rendering using the
View component, and remain independent from each other.

Magento 2 View components are located in <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/View" target="_blank">lib/internal/Magento/Framework/View</a>.

The View component basic classes, factories and interfaces
used to implement HTML content rendering  for the frontend and backend
application areas. 

<h2 id="library-components">Magento\View library components</h2>

The `Magento\Framework\View` library has the following components:

-   Template Engine

-   Page Assets

-   Element (Block)

-   Design

    -   File Resolution

    -   Fallback

    -   Theme

-   Layout

<h2>View library dependencies</h2>

The `Magento\Framework\View` library closely interacts with other Magento
libraries and modules, so it has multiple dependencies. 

`Magento\Framework\View` depends on the following Magento libraries:  

<p class="q">Reviewer: The list in the original document was old and I updated it. Please verify.</p>

*   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem/DirectoryList.php" target="_blank">\Magento\Framework\App\DirectoryList</a>
*   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Autoload" target="_blank">\Magento\Framework\Autoload</a>
-   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Code" target="_blank">\Magento\Framework\Code</a>
-   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Config" target="_blank">\Magento\Framework\Config</a>
-   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Data" target="_blank">\Magento\Framework\Data</a>
-   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Event.php" target="_blank">\Magento\Framework\Event</a>
-   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/File" target="_blank">\Magento\Framework\File</a>
-   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filesystem.php" target="_blank">\Magento\Framework\Filesystem</a>
-   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Filter" target="_blank">\Magento\Framework\Filter</a>
-   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/HTTP" target="_blank">\Magento\Framework\HTTP</a>
-   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Image.php" target="_blank">\Magento\Framework\Image</a>
-   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Json" target="_blank">\Magento\Framework\Json</a>
-   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Message" target="_blank">\Magento\Framework\Message</a>
-   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Module" target="_blank">\Magento\Framework\Module</a>
-   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Object.php" target="_blank">\Magento\Framework\Object</a>
-   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager.php" target="_blank">\Magento\Framework\ObjectManager</a>
-   <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Profiler.php" target="_blank">\Magento\Framework\Profiler</a>

`Magento\Framework\View` depends on <a href="{{ site.mage2000url }}tree/master/app/code/Magento/Core" target="_blank">Magento_Core</a>

Basic Magento modules that interact with the` Magento\Framework\View` library
are:

-   `Magento_Core`
-   <a href="{{ site.mage2000url }}tree/master/app/code/Magento/Theme" target="_blank">Magento_Theme</a>
-   <a href="{{ site.mage2000url }}tree/master/app/code/Magento/Backend" target="_blank">Magento_Backend</a>
-   Magento_FullPageCache

	<p class="q">Reviewer: Where is FullPageCache?</p>
	
-   <a href="{{ site.mage2000url }}tree/master/app/code/Magento/Widget" target="_blank">Magento_Widget</a>

In addition, a few other modules also use the `Magento\Framework\View` library
in method calls, constructors of models, and helper classes.

The majority of Magento module dependencies on
the `Magento\Framework\View` library are induced on the level of Magento blocks
classes implementation. These dependencies result from unified process of block
classes creation, which is implemented by means of
the `Magento\Framework\View` library:  two parent classes
(<a href="{{ site.mage2000url }}tree/master/app/code/Magento/Widget" target="_blank">\Magento\Framework\View\Element\AbstractBlock</a> and <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/View/Element/Template" target="_blank">\Magento\Framework\View\Element\Template</a>)
are common ancestors for all block classes of Magento modules, and implement
the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/View/Element/BlockInterface.php" target="_blank">\Magento\Framework\View\Element\BlockInterface</a> interface.

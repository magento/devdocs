---
layout: default
group: integration-testing
subgroup: 30_Custom_DocBlock_Annotations
title: magentoComponentsDir
menu_title: magentoComponentsDir
version: 2.0
github_link: test/integration/annotations/magento-components-dir.md
---

Sometimes, tests require fixture components to be registered in the application for the period of the test run, so fixture data could be asserted in the tests. Though Magento application allows registration of components, it does not allow un-registration of registered components. It means that using only Magento application features, fixture components would remain registered for whole test suite run and could impact other tests.
@magentoComponentsDir annotation allows to register fixture components with un-registration after the test is finished. This annotation allows to register all components in a specified directory recursively.

{% highlight php startinline=1 %}
/**
* @magentoComponentsDir <dir_path>
*/
{% endhighlight %}

Where:
<dir_path> – path to a directory with fixture components. Each component that should be registered must contain a file called registration.php file as described in Component Registrar

## In a test case

Configures each test in the class with the specified fixture(s). Will be extended by @magentoComponentsDir directives in test methods, if any.
method

## In a test

Configures a single test to run with specified fixture(s).

## Examples

{% highlight php startinline=1 %}
// Magento/Foo/_files/modules/moduleOne/registration.php
 
\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::MODULE,
    'Magento_FooOne',
    __DIR__
);
{% endhighlight %}

{% highlight php startinline=1 %}
namespace Magento\Foo;
 
/**
 * @magentoComponentsDir Magento/Foo/_files/modules
 */
class BarTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @magentoComponentsDir Magento/Foo/_files/themes
     */
    public function testOne()
    {
        /**
         * Registered components from Magento/Foo/_files/modules and Magento/Foo/_files/themes
         */
    }
 
    /**
     * @magentoComponentsDir Magento/Foo/_files/libs
     * @magentoComponentsDir Magento/Baz/_files/languages
     */
    public function testTwo()
    {
        /**
        * Registered components from Magento/Foo/_files/modules, Magento/Foo/_files/libs and Magento/Baz/_files/languages
        */
    }
}
{% endhighlight %}

## Registration of Themes

Themes require additional registration (in database) in most of cases.
@magentoComponentsDir annotation is NOT responsible for this and this is up to the developer of the test to determine whether to register themes in the DB or not. The reason for such distinction of responsibilities is that themes registration may require special pre-conditions and it's impossible to re-register themes w/o resetting whole application. Additionally, it breaks DB integrity, so the developer must also use @magentoDbIsolation annotation in this case.

{% highlight php startinline=1 %}

namespace Magento\Foo;
 
use Magento\TestFramework\Helper\Bootstrap;
use Magento\Backend\App\Area\FrontNameResolver as BackendFrontNameResolver;
 
class BarTest extends \PHPUnit_Framework_TestCase
{
    /**
     * Just adding fixture themes to the list of available themes in the application
     *
     * @magentoComponentsDir Magento/Foo/_files/themes
     * @magentoDbIsolation enabled
     */
    public function testSimple()
    {
        $objectManager = \Magento\TestFramework\Helper\Bootstrap::getObjectManager();
        /** @var \Magento\Theme\Model\Theme\Registration $registration */
        $registration = $objectManager->get(
            'Magento\Theme\Model\Theme\Registration'
        );
        $registration->register();
    }
 
    /**
     * Additionally to registering fixture theme(s), set one of them to the default theme for the store
     *
     * @magentoComponentsDir Magento/Foo/_files/themes
     * @magentoDbIsolation enabled
     */
    public function testWithDefaultFixtureTheme()
    {
        $objectManager = \Magento\TestFramework\Helper\Bootstrap::getObjectManager();
 
        $themes = [BackendFrontNameResolver::AREA_CODE => 'Magento/test_theme'];
        $design = $objectManager->create('Magento\Theme\Model\View\Design', ['themes' => $themes]);
        // this can't be done once themes registration already happened, so should be done before
        $objectManager->addSharedInstance($design, 'Magento\Theme\Model\View\Design');
 
        /** @var \Magento\Theme\Model\Theme\Registration $registration */
        $registration = $objectManager->get(
            'Magento\Theme\Model\Theme\Registration'
        );
        $registration->register();
 
        Bootstrap::getInstance()->loadArea(BackendFrontNameResolver::AREA_CODE);
    }
}
{% endhighlight %}
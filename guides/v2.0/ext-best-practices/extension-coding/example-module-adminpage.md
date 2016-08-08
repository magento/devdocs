---
layout: default
group: ext-best-practices
subgroup: 02_Extension-Coding
title: Creating a page in admin
menu_title: Creating a page in admin
menu_order: 1000
version: 2.0
github_link: ext-best-practices/extension-coding/example-module-adminpage.md

---

## {{page.menu_title}}
{:.no_toc}

* TOC
{:toc}

### Overview

This tutorial gives instructions for the creation of a module that displays a simple page in the admin area of Magento.

For the purposes of this tutorial *MyCompany* is the name of the company associated with a module named *ExampleAdminNewPage*.

### Working directory

Start by creating the working directory for all the module files.

In your Magento development environment under the `app/code` directory, create the `MyCompany` company directory.

Next, create the `ExampleAdminNewPage` directory under `MyCompany`. This will be the working directory for the module.

### Initial boilerplate files

These initial boilerplate files are the bare essential files needed for any Magento module.

#### `composer.json`
{:.no_toc}
In general, this file gives composer the ability to install this module and its dependencies. For more information about this file, please read the documentation on [`composer.json`]({{page.baseurl}}extension-dev-guide/build/composer-integration.html).

{% collapsible Show file content %}
  {% highlight json %}
    {
      "name": "mycompany/sample-module-minimal",
      "description": "A module that creates a page in the Magento admin area",
      "type": "magento2-module",
      "version": "1.0.0",
      "license": [
        "OSL-3.0",
        "AFL-3.0"
      ],
      "require": {
        "php": "~5.5.0|~5.6.0|~7.0.0"
      },
      "autoload": {
        "files": [ "registration.php" ],
        "psr-4": {
          "MyCompany\\ExampleAdminNewPage\\": ""
        }
      }
    }
  {% endhighlight %}
{% endcollapsible %}

#### `registration.php`
{:.no_toc}
This file registers the module `MyCompany_ExampleAdminNewPage` with Magento. For more information about this file, please read the documentation on how to [register your component]({{page.baseurl}}extension-dev-guide/build/component-registration.html).

{% collapsible Show file content %}
  {% highlight php startinline=true %}
    <?php
    \Magento\Framework\Component\ComponentRegistrar::register(
        \Magento\Framework\Component\ComponentRegistrar::MODULE,
        'MyCompany_ExampleAdminNewPage',
        __DIR__
    );
  {% endhighlight %}
{% endcollapsible %}

#### `etc/module.xml`
{:.no_toc}
This file specifies the name and version of this module. For more information about this file, please read the documentation on how to [name your component]({{page.baseurl}}extension-dev-guide/build/create_component.html).

{% collapsible Show file content %}
  {% highlight xml %}
    <?xml version="1.0"?>
    <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
      <module name="MyCompany_ExampleAdminNewPage" setup_version="1.0.0">
      </module>
    </config>
  {% endhighlight %}
{% endcollapsible %}

### Routing and navigation

Before we can view the module's page, we need a way to navigate to it. These files create a link to the page in the left navigation and tells Magento how to resolve requests for that page.

For more information on this topic, see the documentation on [routing]({{page.baseurl}}extension-dev-guide/routing.html).

#### `etc/adminhtml/menu.xml`
{:.no_toc}
This xml file creates two items in the Content section of the left navigation:

1. A new separate section with the title 'Greetings'.
2. A link with the label 'Hello World' that leads to a page request for `exampleadminnewpage/helloworld/index`.

The following parts make up the generated page request link to the 'Hello World' page:

* `exampleadminnewpage` - This is the frontName. Since its purpose is to help route requests to the correct module, we give it the same name as the module, but this is not required.
* `helloworld` - This specifies the name of the controller to use.
* `index` - In the xml file, since the action for the controller is not specified, Magento uses the default value `index`.

{% collapsible Show file content %}
  {% highlight xml %}
    <?xml version="1.0"?>
    <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Backend:etc/menu.xsd">
        <menu>
          <add id="MyCompany_ExampleAdminNewPage::greetings" title="Greetings" translate="title" module="MyCompany_ExampleAdminNewPage" parent="Magento_Backend::content" sortOrder="50" dependsOnModule="MyCompany_ExampleAdminNewPage" resource="MyCompany_ExampleAdminNewPage::greetings"/>
          <add id="MyCompany_ExampleAdminNewPage::greetings_helloworld" title="Hello World" translate="title" module="MyCompany_ExampleAdminNewPage" parent="MyCompany_ExampleAdminNewPage::greetings" sortOrder="10" dependsOnModule="MyCompany_ExampleAdminNewPage" action="exampleadminnewpage/helloworld" resource="MyCompany_ExampleAdminNewPage::greetings"/>
        </menu>
    </config>
  {% endhighlight %}
{% endcollapsible %}

#### `etc/adminhtml/routes.xml`
{:.no_toc}
This xml file tells Magento to route requests that use the frontName `exampleadminnewpage` to this module.

{% collapsible Show file content %}
  {% highlight xml %}
  <?xml version="1.0"?>
  <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:App/etc/routes.xsd">
      <router id="admin">
          <route id="exampleadminnewpage" frontName="exampleadminnewpage">
              <module name="MyCompany_ExampleAdminNewPage"/>
          </route>
      </router>
  </config>
  {% endhighlight %}
{% endcollapsible %}

### Page controller

Now that we have a link to the 'Hello World' page, we need to create the file needed to handle that request.

#### `Controller/Adminhtml/HelloWorld/Index.php`
{:.no_toc}
This file is the class assigned to the default Index action for the `HelloWorld` controller. Since the admin area serves this page, the file belongs in the `Adminhtml` directory, and the class itself extends [`\Magento\Backend\App\Action`]({{site.mage2100url}}app/code/Magento/Backend/App/Action.php){:target="_blank"}.
{% collapsible Show file content %}
  {% highlight php %}
    <?php
      namespace MyCompany\ExampleAdminNewPage\Controller\Adminhtml\HelloWorld;

      class Index extends \Magento\Backend\App\Action
      {
        /**
        * @var PageFactory
        */
        protected $resultPageFactory;


         public function __construct(
             \Magento\Backend\App\Action\Context $context,
             \Magento\Framework\View\Result\PageFactory $resultPageFactory
         ) {
              parent::__construct($context);
              $this->resultPageFactory = $resultPageFactory;
         }
         /**
          * Load the page defined in view/adminhtml/layout/exampleadminnewpage_helloworld_index.xml
          *
          * @return \Magento\Framework\View\Result\Page
          */
         public function execute()
         {
              return  $resultPage = $this->resultPageFactory->create();
         }
      }
    ?>
  {% endhighlight %}
{% endcollapsible %}

### Page view

Now that Magento knows how to handle requests for the 'Hello World' page, we need view files that define the look of the page.

These files belong in the `view/adminhtml` directory because the page is in the admin area.

#### `view/adminhtml/layout/exampleadminnewpage_helloworld_index.xml`
{:.no_toc}

This file defines the layout and structure of the index page for the HelloWorld controller. It sets the title to "Greetings" and instructs Magento to use the `helloworld.phtml` template as the content in a `Magento\Backend\Block\Template` block class.

The name of this file uses the following pattern: *frontName*\_*controller*\_*action*.xml

{% collapsible Show file content %}
  {% highlight xml %}
    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
        <head>
            <title>
                Greetings
            </title>
        </head>
        <body>
            <referenceContainer name="content">
                <block class="Magento\Backend\Block\Template" template="MyCompany_ExampleAdminNewPage::helloworld.phtml"/>
            </referenceContainer>
        </body>
    </page>
  {% endhighlight %}
{% endcollapsible %}

#### `view/adminhtml/templates/helloworld.phtml`
{:.no_toc}

This template file contains the actual page content for the 'Hello World' page.

{% collapsible Show file content %}
  {% highlight html %}
    <p>Hello World!</p>
  {% endhighlight %}
{% endcollapsible %}

### Full module directory structure

The module is now complete. Your module's directory structure under `app/code` should look like the following:

  <pre markdown="1">
    MyCompany
    `-- ExampleAdminNewPage
        |
        |-- Controller
        |   |-- Adminhtml
        |       |-- HelloWorld
        |           `-- <a href="#controlleradminhtmlhelloworldindexphp">Index.php</a>
        |-- etc
        |   |-- adminhtml
        |   |   |-- <a href="#etcadminhtmlmenuxml">menu.xml</a>
        |   |   `-- <a href="#etcadminhtmlroutesxml">routes.xml</a>
        |   `-- <a href="#etcmodulexml">module.xml</a>
        |-- view
        |   |-- adminhtml
        |       |-- layout
        |       |    `-- <a href="#viewadminhtmllayoutexampleadminnewpagehelloworldindexxml">exampleadminnewpage_helloworld_index.xml</a>
        |       `-- templates
        |           `-- <a href="#viewadminhtmltemplateshelloworldphtml">helloworld.phtml</a>
        |-- <a href="#composerjson">composer.json</a>
        `-- <a href="#registrationphp">registration.php</a>
  </pre>
  <script>
    $(document).ready(function(){
      var anchor = window.location.hash.substring(1);
      if(anchor)
      {
        console.log(anchor);
        $("#"+anchor).nextUntil("h4",".collapsible").children(".collapsible-title").click();
      }

      $('a[href^="#"]').click(function(){
          var target = $(this).attr('href');
          $(target).nextUntil("h4",".collapsible").children(".collapsible-title").click();
      });
    });
  </script>

### Installing the module

Now that the module is code-complete, run the following commands to install it:

1. `bin/magento module:status` - This command shows a list of enabled/disabled module.
2. `bin/magento module:enable MyCompany_ExampleAdminNewPage` - If necessary, run this to enable the disabled module.
3. `bin/magento setup:upgrade` - This command will properly register the module with Magento.
4. `bin/magento setup:di:compile` - This command compiles classes used in dependency injections.

Once the module installation has completed, the link to the 'Hello World' page should appear in the 'Greetings' section under 'Content' in the left navigation in the admin area.

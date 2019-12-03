---
youtube_id: l33T2-YC4tk
duration: "4:02"
group: "Fundamentals of Magento 2 Development"
title: "Create a New Page"
thumbnail: "fundamentals/thumbs/create-new-page.png"
menu_order: 1
---

In this video on how to create a new page, we’ll create a page which returns JSON with one parameter: the message “HELLO WORLD!”

To add a new page in Magento 2, you need to create a new controller. In Magento 2, a controller is a file located at a specific place which responds to a specific route. A route in Magento 2 is a standard URL that consists of three parts:

*  frontName
*  controllerName
*  actionName

We’ll look at how those three parts of a route correspond to a certain file.

So the steps we need to take to add a new page are:

1. Create a new module.
1. Add a routes.xml file.
1. Add a controller (action) file.

To create a module, you need to complete the following high-level steps:

1. Create the module folder.
1. Create the etc/module.xml file.
1. Create the registration.php file.
1. Run the “bin/magento setup:upgrade” script to install the new module.
1. Check that the module is working.

Let’s go through each step.

## Create a new module

We will create a new module called `Learning_HelloPage`

```bash
cd <magento2_root>/app/code
```

```bash
mkdir Learning
```

```bash
mkdir Learning/HelloPage
```

Now create two files:

```console
Learning/HelloPage/registration.php
Learning/HelloPage/etc/module.xml
```

### registration.php

```php
<?php /**
* Copyright © 2016 Magento. All rights reserved. * See COPYING.txt for license details.
*/
\Magento\Framework\Component\ComponentRegistrar::register( \Magento\Framework\Component\ComponentRegistrar::MODULE, 'Learning_HelloPage',
__DIR__
);
```

### module.xml

```xml
<?xml version="1.0"?>
<!--
/**
* Copyright © 2016 Magento. All rights reserved. * See COPYING.txt for license details.
*/
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
    <module name="Learning_HelloPage" setup_version="0.0.1">
    </module>
</config>
```

## Add a routes.xml file

Before we create the file, let’s take a brief look at how routing works in Magento 2. Each area (in our case, frontend and adminhtml) has a corresponding merged `routes.xml` file, which is merged from the `etc/&lt;area&gt;/routes.xml` file from every module. That `routes.xml` file contains information about all registered routes and frontNames. Recall that a frontName is the first part of a route.

So, we should register it in the `routes.xml` file and associate it with a module. It is possible to have multiple modules associated with one route, so we can create pages under the catalog `frontName`.

Now, since we’re working in the frontend area, we’ll add the `etc/frontend/routes.xml` file for our `Learning_HelloPage` module:

```xml
<?xml version="1.0"?>
<!--
/**
* Copyright © 2016 Magento. All rights reserved. * See COPYING.txt for license details.
*/
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:App/etc/routes.xsd">
    <router id="standard">
        <route id="learning" frontName="test">
            <module name="Learning_HelloPage" />
        </route>
    </router>
</config>
```

We added a new route here called “learning” (note it does not have to match the module name) and a new `frontName`. Often the route and `frontName` are the same – for example, “catalog” – but it is not required.
When Magento 2 sees a URL like `test/chunk2/chunk3`, it will check whether our module `Learning_HelloPage` has a folder, `Controller/Chunk2`, and an action file, `Chunk3.php`.

Our route will be `test/page/view`.

## Add a controller (action) file

Let’s add the controller now.

```bash
cd <magento2_root>/app/code/Learning/HelloPage
```

```bash
mkdir Controller
```

```bash
mkdir Controller/Page
```

Let’s create an action file `Controller/Page/View.php`:

```php
<?php /**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Learning\HelloPage\Controller\Page;
class View extends \Magento\Framework\App\Action\Action
{
    /**
     * @var \Magento\Framework\Controller\Result\JsonFactory
     */
    protected $resultJsonFactory;
    /**
     * @param \Magento\Framework\App\Action\Context $context
     * @param \Magento\Framework\Controller\Result\JsonFactory $resultJsonFactory
     */
    public function __construct(
       \Magento\Framework\App\Action\Context $context,
       \Magento\Framework\Controller\Result\JsonFactory $resultJsonFactory)
{
       $this->resultJsonFactory = $resultJsonFactory;
       parent::__construct($context);
}
    /**
     * View  page action
     *
     * @return \Magento\Framework\Controller\ResultInterface
     */
    public function execute()
    {
       $result = $this->resultJsonFactory->create();
       $data = ['message' => 'Hello world!'];

return $result->setData($data);
} }
```

Note we created a JSON-type page. This can be seen in the results factory that we specify in our constructor. In order to activate our module and our page we should run the Magento setup upgrade:

```bash
cd <magento2_root>
```

```bash
php bin/magento setup:upgrade
```

Now we need to verify that `Learning_HelloPage` is present in the output. If you examine the `/test/page/view` page, you should see the message:

```console
{"message":"Hello world!"}
```

This is because we returned a `ResultJson` object. Magento 2 has different result objects for different cases – ResultPage for a regular page, Forward result, and so on.

We used a JSON result here because the goal was to illustrate how to create a new page, not to dig into the view layer, which would require activation to use the Page result object.

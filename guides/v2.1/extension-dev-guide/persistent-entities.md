---
layout: default
group:
subgroup:
title: Persistent entities
menu_title: Persistent entities
menu_order: 1000
version: 2.1
github_link: extension-dev-guide/persistent-entities.md
---

### Overview

In Magento, an *entity* is a unique object that contains different attributes or parameters. Magento modules use entities in their business logic to represent something that is either concrete or abstract. Examples of Magento entities include product, order, customer, sale, and so on. Models with class attributes represent these entities in memory, and the underlying database provide and store the data for them.

Starting in Magento 2.1, we no longer recommend using the deprecated save, load, and delete methods in the [model](#models) classes. This document provides the recommended approach you should use to save, load, and delete entities.

### Entity Representations

In Magento, data interfaces, data models, and models all represent entities.

#### Data Interfaces
A data interface is the interface for an entity that reveals the data it contains to clients. For example, the [`\Magento\Customer\Api\Data\CustomerInterface`]({{ site.mage2100url }}app/code/Magento/Customer/Api/Data/CustomerInterface.php){:target="_blank"} class contains get and set functions for customer entity-related data such as names and email.

To allow the addition of [custom EAV attributes]({{page.baseurl}}extension-dev-guide/attributes.html) on your entity, your data interface must extend the [`\Magento\Framework\Api\CustomAttributesDataInterface`]({{ site.mage2100url }}lib/internal/Magento/Framework/Api/CustomAttributesDataInterface.php){:target="_blank"} class.

To allow the use of [extension attributes]({{page.baseurl}}extension-dev-guide/attributes.html) on your entity, your data interface must extend the [`\Magento\Framework\Api\ExtensibleDataInterface`]({{ site.mage2100url }}lib/internal/Magento/Framework/Api/ExtensibleDataInterface.php){:target="_blank"} class. We recommend using this approach when you define the data interface for your entity.

#### Data Models
A data model is a class that implements a data interface and contains data that is accessible using setter and getter methods. [Repositories](#repositories) use data models and resource models for entity persistence. We recommend you put data model classes in the `Model/Data` directory inside your module's root directory.

An example of a data model is the [`\Magento\Customer\Model\Data\Customer`]({{ site.mage2100url }}app/code/Magento/Customer/Model/Data/Customer.php){:target="_blank"} class.

#### Models

Magento models extend the [`Magento\Framework\Model\AbstractModel`]({{ site.mage2100url }}lib/internal/Magento/Framework/Model/AbstractModel.php){:target="_blank"} class because it provides useful general functions. Models contain logic for validation, events, and caching. A model class might have a data interface implementation. To set or access data, they use `getData`, `setData` and magic methods. A model is not statically typed if it does not have a data interface implementation.

 Model classes should posses logic that relates to those classes and should not contain logic that reveal anything about data storage in the underlying data layer.

We recommend putting model classes in the `Model` directory inside your module's root directory.

<div class="bs-callout bs-callout-warning" markdown="1">
  Do not use the inherited `load`,`save`, `delete` methods from `AbstractModel` because these deprecated methods will not be available in the future. Instead, Magento recommends using data interfaces and repositories for persisting entities.
</div>

An example of a model is the [`\Magento\Customer\Model\Customer`]({{ site.mage2100url }}app/code/Magento/Customer/Model/Customer.php){:target="_blank"} class.

### Repositories

Modules interact with other modules through their public API. For working with persistent entities, Magento recommends and uses repositories. These classes adopt the [repository pattern](http://martinfowler.com/eaaCatalog/repository.html){:target="_blank"} and act as a layer between your module's business logic layer and the data mapping layer. We recommend placing the class files for repositories under the `Model` or `Model/ResourceModel` directory inside your module's root directory.

An example of a repository is the [`Magento\CatalogRule\Model\CatalogRuleRepository`]({{ site.mage2100url }}app/code/Magento/CatalogRule/Model/CatalogRuleRepository.php){:target="_blank"} class.

Different parts of the application can use your repository to load entities. To prevent loading of the same data from the database more than once, use a registry inside the repository. For an example of this strategy, take a look at the  [`Magento\Customer\Model\ResourceModelCustomerRepository`]({{ site.mage2100url }}app/code/Magento/Customer/Model/ResourceModel/CustomerRepository.php){:target="_blank"} class.

#### Resource Models

Resource models contain logic that allow entities to be persistent. They help decouple the model layer from the data layer by acting as an intermediate mapping layer between the two. These classes provide the interface to manipulate data to the model layer while implementing code that is specific to the data layer. We recommend you put resource models under the `Model/ResourceModel` directory inside your module's root directory.

#### Persisting with resource models

Repository functions should operate on data interfaces. In your repository functions, you can extract a [data model](#data-models) from the interface using the [`\Magento\Framework\Api\ExtensibleDataObjectConverter`]({{ site.mage2100url }}lib/internal/Magento/Framework/Api/ExtensibleDataObjectConverter.php){:target="_blank"} class to create and populate a resource model using a [factory]({{page.baseurl}}extension-dev-guide/factories.html). This resource model can then save, load, or delete an entity.

Example:

{% highlight php startinline=true%}
$customerModel = $this->customerFactory->create(['data' => $customerData]);

/** @var $customerResource \Magento\Customer\Model\ResourceModel\Customer */
$customerResource->save($customerModel);

$customerResource->load($customerModel, $entityId);

$customerResource->delete($customerModel);
{% endhighlight %}

#### Related topics
{:.no_toc}

* [EAV and extension attributes]({{page.baseurl}}extension-dev-guide/attributes.html)
* [Instantiating objects with factories]({{page.baseurl}}extension-dev-guide/factories.html)

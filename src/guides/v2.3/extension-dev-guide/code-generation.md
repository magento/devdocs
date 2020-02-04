---
group: php-developer-guide
title: Code generation
---

## Overview of code generation {#codegen-over}

The Magento application generates code to create non-existent classes. As an example, look at the [Magento/Customer/Model/Resource/AddressRepository] constructor. A snippet follows:

```php
...
public function __construct(
    \Magento\Customer\Model\AddressFactory $addressFactory,
...
```

The first constructor parameter has a type of `Magento\Customer\Model\AddressFactory`. However, this class does not exist in `\Magento\Customer\Model` in the Magento 2 codebase. The Magento application *generates* this class because its name uses a recognized convention (in this case, because the name ends with `Factory`).

Unlike some other languages or libraries, you can look at the generated code on the file system to see what really happens and still debug the code.

### When is code generated? {#codegen-over-when}

Provided the Magento application is not set for [production mode], code is generated when the Magento application cannot find a class when executing code.

In particular,

*  A Factory class creates instances of a type. See [Instantiating objects with factories] for more information. Factories are directly referenced within application code.

*  You can designate a Proxy to be generated for a type in order to ensure the type is not instantiated until it is needed. See [Proxies] for more information. Proxies are directly referenced within [dependency injection](https://glossary.magento.com/dependency-injection) configuration.

*  Interceptor classes are automatically generated to facilitate Magento's plugin system. An interceptor class extends a type and is returned by the Object Manager to allow multiple plugin classes to inject logic into different methods. Interceptors work behind the scenes and are _not_ directly referenced in application code.

You can also use the [code compiler] to generate code at any time.  In Magento 2, "compiling" your application means performing code generation for any eligible class encountered by the configuration/code scanner, as well as performing a number of different [dependency injection](https://glossary.magento.com/dependency-injection) optimizations.

### Why should you regenerate code? {#codegen-over-why}

Suppose a Proxy class for a Customer class is generated, and the Customer class has new methods added to it. Because a Proxy exists on the file system, it is not regenerated. However, the Proxy implementation is now incomplete because it does not have the new Customer class methods. In this case, you must regenerate the Proxy class.

If the code generator implementation itself is changed, you must regenerate all the classes. This is rare, however.

### Advantages of generating code {#codegen-over-adv}

Code generation is required in Magento 2. Generating code assures you of the following:

*  The code is correct. You don’t have to worry that the generated code is delegating to the wrong method or forgetting a semicolon, and you don’t have to write tests for the generated code.
*  Code generation writes the boilerplate code to enable you to write more challenging and interesting code.
*  Consistent implementation.

   All generated Factories work the same way. After you know how one Factory works, you know how they all work.

## Object Manager responsibility for code compilation {#codegen-om}

When code changes as discussed in the preceding section, the Object Manager compiles it.

The code compiler creates the `generated/metadata/global.php` file, which is a PHP serialized map of all constructor definitions mixed with object linking configuration defined in di.xml. The `di.xml` file is the [dependency injection](https://glossary.magento.com/dependency-injection) configuration. There is a global `app/etc/di.xml` file, and there can also be a `di.xml` file for every [module](https://glossary.magento.com/module).

<!-- Link Definitions -->
[Magento/Customer/Model/Resource/AddressRepository]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/Model/ResourceModel/AddressRepository.php
{:target="_blank"}
[production mode]: {{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode
[Instantiating objects with factories]: {{ page.baseurl }}/extension-dev-guide/factories.html
[Proxies]: {{ page.baseurl }}/extension-dev-guide/proxies.html
[code compiler]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html

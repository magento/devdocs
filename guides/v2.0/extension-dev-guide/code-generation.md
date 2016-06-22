---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Code generation
menu_title: Code generation
menu_order: 8
version: 2.0
github_link: extension-dev-guide/code-generation.md

---

<h2 id="codegen-over">Overview of code generation</h2>
The Magento application generates code to create non-existent classes. As an example, look at the <a href="{{ site.mage2000url }}/app/code/Magento/Customer/Model/ResourceModel/AddressRepository.php" target="_blank">\Magento\Customer\Model\Resource\AddressRepository</a> constructor. A snippet follows:

	...
	    public function __construct(
	        \Magento\Customer\Model\AddressFactory $addressFactory,	
	...

The first constructor parameter has a type of `Magento\Customer\Model\AddressFactory`. However, this class does not exist in `\Magento\Customer\Model` in the Magento 2 codebase. The Magento application *generates* this class because its name uses a recognized convention (in this case, because the name ends with `Factory`).

Unlike some other languages or libraries, you can look at the generated code on the file system to see what really happens and still debug the code.

<h3 id="codegen-over-when">When is code generated?</h3>
Provided the Magento application is not set for <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-production">production mode</a>, code is generated when the Magento application cannot find a class when executing code.

In particular,

*	A Factory class creates instances of a type. See <a href="{{page.baseurl}}extension-dev-guide/factories.html">Instantiating objects with factories</a> for more information. Factories are directly referenced within application code.

*	You can designate a Proxy to be generated for a type in order to ensure the type is not instantiated until it is needed. See <a href="{{page.baseurl}}extension-dev-guide/proxies.html">Proxies</a> for more information. Proxies are directly referenced within DI configuration.

*   Interceptor classes are automatically generated to facilitate Magento's plugin system. An interceptor class extends a type and is returned by the Object Manager to allow multiple plugin classes to inject logic into different methods. Interceptors work behind the scenes and are _not_ directly referenced in application code.

You can also use the <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-compiler.html">code compiler</a> to generate code at any time.  In Magento 2, "compiling" your application means performing code generation for any eligible class encountered by the configuration/code scanner, as well as performing a number of different dependency injection optimizations.

<h3 id="codegen-over-why">Why should you regenerate code?</h3>
Suppose a Customer or Proxy class for a Customer class is generated and the Customer class has new methods added to it. Because a Customer or Proxy exists on the file system, it is not regenerated. However, the Customer or Proxy implementation is incomplete now because it does not have the new methods. In this case, you must regenerate the Customer or Proxy class.

If the code generator implementation itself is changed, you must regenerate all the classes. This is rare, however.

<h3 id="codegen-over-adv">Advantages of generating code</h3>
Code generation is required in Magento 2. Generating code assures you of the following:

*	The code is correct. You don’t have to worry that the generated code is delegating to the wrong method or forgetting a semicolon, and you don’t have to write tests for the generated code.
*	Code generation writes the boilerplate code to enable you to write more challenging and interesting code.
*	Consistent implementation.
	
	All generated Factories work the same way. After you learn know how one Factory works, you know how they all work.
	

<h2 id="codegen-om">Object Manager responsibility for code compilation</h2>
When code changes as discussed in the preceding section, one of two Object Manager classes compiles it. The class is chosen based on whether or not the single-tenant compiler or the multi-tenant compiler has been run before.

The single-tenant and multi-tenant compiler create `var/di/global.ser`, which is a PHP serialized map of all constructor definitions mixed with object linking configuration defined in di.xml. `di.xml` is the dependency injection configuration. There is a global `app/etc/di.xml` and there can be one defined for every module.

<!--synced-->
<div class="bs-callout bs-callout-warning">
<p>If you&#8217;re preparing to deploy to production, you must use the multi-tenant compiler. There is a known issue with the single-tenant compiler that prevents it from compiling proxies.</p>
</div>


Depending on whether or not one of the compilers has been run before, the Magento application consumes the compilation using one of the following classes:

*	<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Interception/ObjectManager/Config/Compiled.php" target="_blank">Magento\Framework\Interception\ObjectManager\Config\Compiled</a>, which is used if `global.ser` exists.

*	<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Interception/ObjectManager/Config/Developer.php" target="_blank">Magento\Framework\Interception\ObjectManager\Config\Developer</a>, which is used if `global.ser` does not exist.

	This class is slower than `Magento\Framework\Interception\ObjectManager\Config\Compiled`.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The <code>Developer</code> class has nothing to do with Magento's <em>developer mode</em>.</p></span>
</div>



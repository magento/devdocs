---
layout: default
group: extension-dev-guide
subgroup: 6_Module Development
title: Code generation
menu_title: Code generation
menu_order: 6
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

<h3 id="codegen-over-when">When is code compiled?</h3>
Provided the Magento application is not set for <a href="{{ site.gdeurl }}config-guide/bootstrap/magento-modes.html#mode-production">production mode</a>, code is compiled when the Magento application cannot find a class when executing code.

In particular,

*	A <a href="{{ site.gdeurl }}extension-dev-guide/depend-inj.html#dep-inj-mod-type-fact">Factory</a> class creates instances of a type. For example, a generated <code>\Magento\Customer\Model\AddressFactory</code> creates new instances of <code>\Magento\Customer\Model\Address</code>. The code in <code>AddressFactory</code> provides "typeSafety" (@return annotation) so IDEs understand the type of returned object for the <code>Address</code> type.


*	You can designate a <a href="{{ site.gdeurl }}extension-dev-guide/depend-inj.html#dep-inj-preview-cons">Proxy</a> to be generated for a type.
A proxy is a wrapper for a base class, and the proxy must implement all functions of the base class to delegate those functions to the class. 

	A proxy results in better performance because a proxy can be instantiated without instantiating its base class. The base class is instantiated only if one of its methods  gets called. Therefore, if a class is used as a dependency, but takes a long time to instantiate and the class methods are used only during some paths of execution, using the proxy instead saves time.

	As a practical example, you can see the <a href="{{ site.mage2000url }}app/code/Magento/Store/Model/StoreManager.php" target="_blank">StoreManager</a> class and then see the generated StoreManager Proxy class.

You can use the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler.html">code compiler</a> to compile code at any time.

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

The single-tenant and multi-tenant compiler create `var/di/global.ser`, which is a PHP serialized map of all constructor definitions mixed with object linking configuration defined in di.xml. `di.xml` is the dependency injection configuration. There is a global `app/etc/di.xml` and there can one defined for every module.

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



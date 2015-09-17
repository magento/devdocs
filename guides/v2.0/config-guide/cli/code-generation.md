---
layout: default
group: config-guide
subgroup: CLI
title: About code compilation
menu_title: About code compilation
menu_node: 
menu_order: 5000
github_link: config-guide/cli/code-generation.md
---

#### Contents
*	TBD
*	TBD
*	TBD

<h2 id="codegen-over">Overview of code generation</h2>
In brief, you can generate code to create non-existent classes. As an example, look at the <a href="{{ site.mage2000url }}app/code/Magento/Customer/Model/Resource/AddressRepository.php" target="_blank">\Magento\Customer\Model\Resource\AddressRepository</a> constructor. A snippet follows:

	...
	    public function __construct(
	        \Magento\Customer\Model\AddressFactory $addressFactory,	
	...

The first constructor parameter has a type of `Magento\Customer\Model\AddressFactory`. However, this class does not exist in `\Magento\Customer\Mode` in the Magento 2 codebase. The Magento application *generates* this class because its name uses a recognized convention (in this case, because the name ends with `Factory`).

Unlike some other languages or libraries, you can look at the generated code on the file system to see what really happens and still debug the code.

<h3 id="codegen-over-when">When is code generated?</h3>
Provided the Magento application is not set for <a href="{{ site.gdeurl }}config-guide/bootstrap/magento-modes.html#mode-production">production mode</a>, code is generated when the Magento application cannot find a class when executing code.</p>

You can use the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler.html">code compiler</a> to compile code at any time.

<h3 id="codegen-over-why">Why should you regenerate code?</h3>
Suppose a Customer or Proxy class for a Customer class is generated. The Customer class has new methods added to it. Because a Customer or Proxy exists on the file system, it will not be re-generated. However, the Customer or Proxy implementation is incomplete now because it does not have the new methods. In this case, you must regenerate the Customer or Proxy class.

If the code generator implementation itself is changed, you must regenerate all the classes. This is rare, however.

<h3 id="codegen-over-adv">Advantages of generating code</h3>
Generating code assures you of the following:

*	The code is correct.
	
	You won’t have to worry that the generated code is delegating to the wrong method or forgetting a semicolon. You don’t have to write tests for the generated code.
*	Code generation writes the boilerplate code to enable you to write the more challenging and interesting code.
*	Consistency in implementation. 
	
	All generated Factories work the same way. After you learn know how one Factory works, you should know how they all work.
*	You can change the implementation for all generated code.

	If you discover a better way of implementing a Proxy, you can do it across the board. If you want the code generator to use a PHP `__call` magic method or if you want to use real methods, you only need to change the generator. Code maintenance is reduced.

<h2 id="codegen-over-prox">Proxies and factories</h2>
<ul><li>A <a href="{{ site.gdeurl }}extension-dev-guide/depend-inj.html#dep-inj-mod-type-fact">Factory</a> class creates instances of a type; for example, a generated <code>\Magento\Customer\Model\AddressFactory</code> creates new instances of <code>\Magento\Customer\Model\Address</code>. The code in <code>AddressFactory</code> has some specific code for the <code>Address</code> type.</li>
<li>In more complex code generation, you can designate a <a href="{{ site.gdeurl }}extension-dev-guide/depend-inj.html#dep-inj-preview-cons">Proxy</a> to be generated for a type.<br>
 Generally, a proxy must have an implementation of all the declared public methods of the original class.</br>
The method implementation could be delegating to another object in memory, or the method could make a network call to another object on a different machine. All the Proxy methods in a class usually do the same thing (for example, they all delegate to another object or they all make a network call) except they need a slight difference to call a specific method.<br>
As a practical example, you can see the <a href="{{ site.mage2000url }}app/code/Magento/Store/Model/StoreManager.php" target="_blank">StoreManager</a> class and then see the generated StoreManager Proxy class.</li></ul>




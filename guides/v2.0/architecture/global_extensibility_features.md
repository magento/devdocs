---
layout: default
group: arch-guide
subgroup: Architectural Basics
title: Global features that support extensibility
menu_title: Global features that support extensibility 
menu_node: 
menu_order:
version: 2.0
github_link: architecture/global_extensibility_features.md 

---

<h2>Global features that support extensibility</h2>

Essential qualities foster extensibility throughout the entire set of Magento components. This discussion focuses on:

* Modularity
* Reliance on popular design patterns
* Coding standards
* Flexible attribute types
* Web APIs
* Service contracts and dependency injection
* Plug-ins


<h3>Modularity</h3>
The concept of the <i>module</i> is the heart of Magento extension development, and modular design of software components (in particular, modules, themes, and language packages) is a core architectural principle of the product. Self-contained modules of discrete code are organized by feature, thereby reducing each module's external dependencies.  

If a module is self-contained, then you can modify or replace it without affecting other areas of the code. This <i>loose coupling</i> of software components reduces the ripple effects throughout your code base of changing code. 


 See the <a href="{{ site.gdeurl }}extension-dev-guide/bk-extension-dev-guide.html">PHP Developer Guide</a> for detailed instructions on how to create modules. 

<h3>Reliance on popular design patterns</h3>
Reliance on known architectural and programming structures helps PHP developers orient themselves to the specific development issues that affect coding in a particular product ecosystem. This can reduce the learning curve for new Magento developers. 

Design patterns are time-tested, widely recognized software architecture constructs. Magento product architecture incorporates many well known patterns, but  Model-View-Controller (MVC)  holds particular interest for extension developers. 



<h3>Coding standards</h3>

Magento developers should familiarize themselves with our coding standards, best practices, and conventions, especially standards for PHP file formatting, coding style, and file naming conventions. Magento standards are based on Zend Framework Coding Standards. 


See <a href="{{ site.gdeurl }}coding-standards/bk-coding-standards.html">Coding Standards</a> for guidelines and requirements. 


<h3>Rich product ecosystem</h3>
The wider Magento ecosystem provides an extensive community and rich third-party marketplace for extensions. Visit Magento Marketplace for an overview of the many modules and themes available for download and to buy modules and theme packages, which offer more possibilities  for extending your storefront.  
 


<h3>Flexible attribute types</h3>
You can enhance your storefront by adding unique attributes to the default product attributes. For example, you might need to add a new attribute to describe a product, such as texture or an industry-specific rating. You can add these attributes from the Magento Admin, and the storefront  displays them. 


<table>
   <tbody>
      <tr style="background-color: lightgray">
         <th>Attribute type</th>
         <th>Displayed by Storefront?</th>
         
      </tr>
<tr>
         <td>EAV
         </td>
         <td>no</td>
         </tr>
         
         <tr>
         <td>Custom
         </td>
         <td>yes</td>
         </tr>
         <tr>
         <td>Extension
         </td>
         <td>no</td>
         </tr>


</tbody>
</table>

Attribute types fall into three general categories:

* <b>EAV (Entity-Attribute-Value) attributes</b> are site-specific attributes that you can define for a local site using the Magento Admin. 

* <b>Custom attributes</b> are a subset of EAV attributes. Objects that use EAV attributes typically store values in several MySQL tables. The Customer and Catalog modules use EAV attributes. 

* <b>Extension attributes</b>  often use more complex data types than custom attributes. These attributes do not appear in the storefront. Extension attributes are introduced by modules.

See <a href="{{ site.gdeurl }}extension-dev-guide/bk-extension-dev-guide.html">PHP Developer Guide</a> for information about using attributes.



<h3>Web APIs</h3>
Magento or third-party services can be configured as a web API (REST or SOAP) with some simple XML. You can use these services to integrate your Magento installation into third-party applications, such as CRM (Customer Relationship Management), ERP (Enterprise Resource Planning) back office systems, and CMS (Content Management Systems). 


See <a href="{{ site.gdeurl }}get-started/bk-get-started-api.html">Getting Started with Magento Web APIs</a> for more information. 

<h3>Service contracts, dependency injection, and dependency inversion</h3>
<i>Service contracts</i> provide a new way to access public API endpoints. These PHP interfaces offer robust, stable extension points to which clients can connect.  Service contracts define the endpoints that function as a module's public API. Defining these endpoints is an essential part of adding a module. 

Service contracts are discussed throughout the Magento documentation set. See <a href="{{ site.gdeurl }}architecture/archi_perspectives/service_layer.html">Service layer</a> for a high-level introduction. See <a href="{{ site.gdeurl }}extension-dev-guide/bk-extension-dev-guide.html">PHP Developer Guide</a> for a more detailed discussion of service contracts and dependency injection. 

Magento implements <i>dependency injection</i> along with service contracts. Dependency injection provides a mechanism for changing a module's behavior without altering the client or understanding nitty-gritty details of implementation. Both dependency injection and its related concept dependency inversion support Magento's fundamental architectural principles of modularity and ease-of-extensibility. They strongly encourage basic coding practices that support the loose coupling of software modules. 

See <a href="{{ site.gdeurl }}extension-dev-guide/bk-extension-dev-guide.html">PHP Developer Guide</a> for information on both dependency injection and service contracts. 

 
<h3>Plug-ins</h3>
 
Plug-ins, like modules, are a mechanism for adding features to the core Magento product. <i>Plug-ins</i> enable you to make changes to the behavior of any public method in a Magento class. You can consider it a form of extension that uses the `Plugin` class. 

Plug-ins are also called <i>interceptors</i>.  Applications use the plug-in pattern to change method behavior without modifying the actual class. Plug-ins can typically intercept method processing before or after the method runs, or only when the method throws an exception. 


See Plug-ins in  <a href="{{ site.gdeurl }}extension-dev-guide/bk-extension-dev-guide.html">PHP Developer Guide</a> for information on declaring and prioritizing plug-ins.


<h3 id="m2arch-related">Related topics</h3>
<a href="{{ site.gdeurl }}architecture/extensibility.html">Extensibility and modularity</a>








---
layout: default
group: extension-dev-guide
subgroup: 3_Build
title: PHP Developer Guide
menu_title: Magento 2 Configuration Files
menu_order: 3
github_link: extension-dev-guide/required-configuration-files.md
redirect_from: 
  -/guides/v1.0/extension-dev-guide/template_create_req_config_files.html
  -/guides/v2.0/extension-dev-guide/template_create_req_config_files.html
---

##{{page.menu_title}}


Each Magento 2 module has its own set of configuration files, gathered into the module&#8217;s `etc/` folder.  


<span class="editor">


<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Unlike Magento 1, there is no monolithic configuration file in Magento 2. </p></span>
</div>


##Use etc For Your Configuration Files  

Magento 2 looks for configuration information for each module in that module&#8217;s `etc` folder. Depending on the needs of your module, you might have the following configuration files at the top level of your module&#8217;s `etc` folder:

* acl.xml
* config.xml
* di.xml
* module.xml
* webapi.xml


Additions you make to those configuration files are applied *globally* to your module.

In addition to those files, a Magento 2 module also has nested configuration folders in the `etc` folder for any required administration html, frontend, API REST, or API SOAP specific configuration. Additions you make to files in these folders override the settings in the global configuration files for the respective functionality only. That is, if you add a `config.xml` file to `etc/frontend`, the settings you make in that file overrides the settings in `etc/config.xml` __only for frontend__ functionality.


* /adminhtml/
* /frontend/
* /webapi_rest/
* /webapi_soap/





###Magento 2 Module File Structure


A typical file structure for a Magento 2 module is illustrated here:
<p><img src="{{ site.baseurl }}common/images/pdg-config-file-structure.png" width="300" alt="Developer's roadmap"></p>


* Configuration files that are in the top level of that module&#8217;s `etc` folder are global to that module.
* Configuration files in separate functional areas apply only to those areas.



###Examples


The exact set of configuration files required for your module depends on what your new module does. For example, if your module performs a function in the Admin, you should add any necessary configuration files for those functions to `~/etc/adminhtml/`, for example:

* etc/adminhtml/di.xml
* etc/adminhtml/routes.xml

Similarly, if your module changes the UI, you should add the needed configuration files to `~/etc/frontend/`. For example:

* /etc/frontend/.xml
* /etc/frontend/page_types.xml

If the module is a service that may call an API, or does some other work that is not manifested in the UI you should add any needed configuration files in the REST and/or SOAP webapi configuration folders, like this:

* /etc/webapi_rest/di.xml
* /etc/webapi_soap/di.xml

Keep in mind that you may be able to handle your module&#8217;s configuration solely with configuration files at the top level of your module&#8217;s `etc` folder, but the nested folder is a useful way to keep the configuration neatly compartmentalized.


<div class="bs-callout bs-callout-info" id="info">

  <p>To look at a sample module that uses these config files, go to 
</p>



</div>

group: cloud-guide
subgroup: How To
title: Multiple store website
menu_title: Multiple store website
menu_order:
menu_node:
functional_areas:
  - Cloud
  - Setup


One way to setup a website with multiple stores distinguished by their base
urls.

1.) Make sure the web server has its document root is the "pub/" directory.
This is the default case for CLOUD users and they should have in the
"app/etc/env.php" file the line:
     'document_root_is_pub' => true,

2.) Keep "Stores->Configuration->Url Options->Add Store Code To Urls" to "no"

3.) Create your websites, stores and store views, let's you named "us_en" one
of your "store views"(in the admin webui).

4.) In "<magento install directory>/pub"  create directories named after the
codes of your "store views": for the one named "us_en" you create the
directory "pub/us/en/". Copy the "index.php" file from the Magento Install
directory there.

5.)In the "index.php" file in the "pub/us/en/" directory find change the line:
```
  require __DIR__ . '/app/bootstrap.php';
```
to
```
  require __DIR__ . '/../../../app/bootstrap.php';
```
Find the line:
```
   $bootstrap = \Magento\Framework\App\Bootstrap::create(BP, $_SERVER);
```
and add just before it the two lines, so you have this:
```
   $_SERVER[\Magento\Store\Model\StoreManager::PARAM_RUN_CODE] = 'us_en';
   $_SERVER[\Magento\Store\Model\StoreManager::PARAM_RUN_TYPE] = 'store';
   $bootstrap = \Magento\Framework\App\Bootstrap::create(BP, $_SERVER);
```
6.) Keep the "Base Media Url" and the "Base Static Url" at default values
( i.e. without "/us/en/" at the end ) , for example:
```
   https://exmaple.com/static/ 
```

7. ) Comment out or remove all code in the "magento-vars.php" file.

8.) In ".magento.app.yaml" you should have just before or after the "/media": and "/static": blocks:
```
        "/us/en":
            root: "pub/us/en"
            passthru: "/index.php"
            index:
              - index.php
            scripts: true
```
( this makes sure in nginx configuration requests for "/us/en/" go properly to /us/en/index.php?arguments )

8.) Make sure you have the following routes:
```
{
   "https://example.com/" : {
      "type" : "upstream",
      "upstream" : "php"
   },
   "http://example.com/" : {
      "upstream" : "php",
      "type" : "upstream"
   },
   "http://*.example.com/" : {
      "upstream" : "php",
      "type" : "upstream"
   },
   "https://*.example.com/" : {
      "type" : "upstream",
      "upstream" : "php"
   }
}
```
*Those add to nginx configuration and is generally better to use specific
routes insted of yousing a wildcatd.

All website names should have respective routes added.

---
layout: default
group: cloud
subgroup: 50_trouble
title: Troubleshoot Fastly
menu_title: Troubleshoot Fastly
menu_order: 20
menu_node: 
version: 2.0
github_link: cloud/trouble/trouble_fastly.md
---

## Overview of troubleshooting Fastly
You can easily troubleshoot the Fastly extension using `curl` commands and looking for response headers that indicate whether it's operating normally or not.

In particular, you should look for the following:

*	`Fastly-Magento-VCL-Uploaded` should be `Yes`
*	`X-Magento-Tags` should be returned
*	`Fastly-Module-Enabled` should be `Yes`
*	`Cache-Control: max-age` should be greater than 0
*	`Pragma` should be `cache`
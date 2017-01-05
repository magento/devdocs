---
layout: default
group: cloud
subgroup: 40_live
title: Overview of protecting sensitive data 
menu_title: Overview of protecting sensitive data  
menu_order: 11
menu_node: 
level3_menu_node: level3child
level3_subgroup: sens-data
version: 2.1
github_link: cloud/live/sens-data-over.md
---

## Notes -- ignore

i am running the app:config:dump within the SCDdump command and it can be skipped if you use `keep-config` option (edited)

if you want to use an existing config.local.php instead of regenerating latest from db

https://magento2.atlassian.net/wiki/pages/viewpage.action?pageId=85000251

First push to PAAS
Create store views/ stores/ websites in admin, set minification settings, js bundling setting etc. ( **TODO** a complete list of items that affect SCD)

Back up local config.php

Dump config to file: ssh -k <instance_ssh_url>"php bin/magento app:config:dump" TODO "php bin/magento magento-cloud:SCDdump"

Add config.php to .gitignore

In local project root: rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress <instance_ssh_url>:/app/app/etc/config.local.php ./app/etc

git add app/etc/config.local.php

git commit -a -m "SCD in build"

git pus




## Notes -- ignore

Overview:

Option 1: only improve SCD time, SCDdump

To change a config setting from stage > prod, have to modify DB or use Admin to modify settings

CLP doesn't have a lot of settings

If you add store/language, have to SSH to paas and rename/delete config.local.php, do stuff in Admin, then rinse/repeat

Option 2 (post 2.1.4): app:config:dump puts all non-sensitive configs in CLP

can change settings in stage > prod using vars using as-yet-non-existent GUI tool (won't be ready for 2.1.4)



i am running the app:config:dump within the SCDdump command and it can be skipped if you use `keep-config` option (edited)

if you want to use an existing config.local.php instead of regenerating latest from db

https://magento2.atlassian.net/wiki/pages/viewpage.action?pageId=85000251

    First push to PAAS Master
    In PAAS Master Create store views/ stores/ websites in admin, set minification settings, js bundling setting etc. ( **TODO** a complete list of items that affect SCD)
    **OPTIONAL** Back up the local (if user has one already, since these steps will overwrite it.) mv app/etc/config.local.php app/etc/config.local.php.bak

    Get env SSH URL: magento-cloud environment:ssh --pipe -e <env ID>

    Dump config to file: ssh -k itnv3ja4m4duw-prod1-ouhx5wq@ssh.us.magentosite.cloud "php bin/magento app:config:dump" TODO "php bin/magento magento-cloud:SCDdump"

    In local _project root_ dir: rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress itnv3ja4m4duw-prod1-ouhx5wq@ssh.us.magentosite.cloud:/app/app/etc/config.local.php ./app/etc

    git add app/etc/config.local.php

    git commit -a -m "SCD in build" && git push











Generate/compile on separate host with no DB (don't need this for Cloud)

Install magento-cloud CLI

Git global variables

On host without DB, clone Cloud project and switch to branch


magento-cloud project:list

magento-cloud project:get <project ID>


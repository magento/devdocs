---
layout: default
group: cloud
subgroup: 170_trouble
title: Add sitemap and robots.txt
menu_title: Add sitemap and robots.txt
menu_order: 40
menu_node:
version: 2.0
github_link: cloud/trouble/robots-sitemap.md
tags:
  - Cloud
  - Configuration
---

When creating and adding your sitemap and robots.txt to your store, you may run into issues due to the read-only environment. You may receive errors such as the following:

    The path ".:///app/app/" is not writable.
    Path "/app/pub/static/sitemap.xml" is protected and cannot be used.

To best add these files, please review the steps below.

For {{site.data.var.ece}} 2.2, you do not need to move the files or have a redirection added. If you used these workarounds before 2.2, you can return the files to the original locations and ticket to have the redirection removed.

## Generate sitemap and robots {#generate}
Access an environment fully configured for your site:

* For Starter, access an active development branch
* For Pro, access your `master` environment in Integration

Generate your `sitemap.xml` and `robots.txt`:

1. Log into the Magento Admin.
2. Navigate to **Marketing** > **Site Map**.
3. Click **Add Sitemap** to generate a new site map. The file saves as `sitemap.xml`.
4. Navigate to Stores > Configuration > Design.
5. Select options and update `robots.txt`.
6. Save your configuration.

For additional information, see [Using a Sitemap](http://docs.magento.com/m2/ee/user_guide/marketing/sitemap-xml.html){:target="_blank"} and [Search Engine Robots](http://docs.magento.com/m2/ee/user_guide/marketing/search-engine-robots.html){:target="_blank"}.

## Add files to Git {#files}
If you accessed the environment directoy, you need to transfer the files from the environment to your local. For example, you can use `rsync` or  `scd` through a terminal. If you completed the commands on your local, move the files to the correct location.

Move and add the files to your Git branch:

1. Move the files into the `/pub/media/` directory. This is a writable directory for .
2. Add the files to Git. For example:

    git add pub/media/sitemap.xml && git commit -m "Add sitemap" && git push origin master

    git add pub/media/robots.txt && git commit -m "Add robots" && git push origin master
3. Push and merge your changes in development, Staging, and Production environments.
4. Enter a [ticket with Support]({{ page.baseurl }}cloud/bk-cloud.html#gethelp) to have redirects added for `sitemap.xml` and `robots.txt`.

When the redirects are completed, keep these files updated in that file location for your Git branches during deployment.

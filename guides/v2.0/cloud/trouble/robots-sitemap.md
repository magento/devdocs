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
functional_areas:
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

* For Starter, access an active branch for example `staging`
* For Pro, access your `master` environment in Integration

Generate your `sitemap.xml` and `robots.txt`:

1. Log into the Magento Admin.
2. Navigate to **Marketing** > **Site Map**.
3. Click **Add Sitemap** to generate a new site map. The file saves as `sitemap.xml`.
4. Navigate to Stores > Configuration > Design.
5. Select options and update `robots.txt`.
6. Save your configuration.

For additional information, see [Using a Sitemap](http://docs.magento.com/m2/ee/user_guide/marketing/sitemap-xml.html){:target="_blank"} and [Search Engine Robots](http://docs.magento.com/m2/ee/user_guide/marketing/search-engine-robots.html){:target="_blank"}.

## Import files to environment {#files}
If you accessed the environment directoy, you need to transfer the files from the environment to your local. For example, you can use `rsync` or  `scp` through a terminal. If you completed the commands on your local, move the files to the correct location. The following example uses `rsync`.

Move and add the files to your Git branch:

1. SSH into the environment you created the files.
2. Use `rsync` to move the files to your local. The format of the command is `rsync -azvP <source> <destination>`.

    rsync -azvP <source on environment> <local machine user name>@<local machine host or IP>:pub/media/
3. SSH into the environment you want to move the files into.
4. Move the files into the `/pub/media/` directory using the rsync command:

    rsync -azvP pub/media/ <environment machine user name>@<environment machine host or IP>:pub/media/
5. Enter a [ticket with Support]({{ page.baseurl }}cloud/bk-cloud.html#gethelp) to have URL rewrite rules added for `sitemap.xml` and `robots.txt`.

When the redirects are completed, keep these files updated in that file location for your Git branches during deployment.

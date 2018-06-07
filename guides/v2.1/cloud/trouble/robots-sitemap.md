---
group: cloud
title: Add site map and search engine robots
version: 2.1
github_link: cloud/trouble/robots-sitemap.md
functional_areas:
  - Cloud
  - Configuration
---
The `pub` directory is _read only_ in the {{site.data.var.ece}} Integration, Staging, and Production environments. An attempt to generate and write the `sitemap.xml` file to the root directory results in the following error:

```
The path ".:///app/app/" is not writable.
Path "/app/pub/static/sitemap.xml" is protected and cannot be used.
```

To avoid this error, you can only write to specific directories, such as `var`, `pub/media`, or `app/etc`. When using {{site.data.var.ece}}, you must use a redirect in the _read-only_ environments.  Generate the files on your local workstation and upload them to one of the write-enabled directories using the following, appropriate environment:

-  For Starter, access the `staging` branch
-  For Pro, access the `integration` branch

#### To generate a `sitemap.xml` file:

1.  On your local branch, access the Magento Admin panel.
1.  On the _Marketing_ menu, click **Site Map**.
1.  In the _Site Map_ view, click **Add Sitemap**.
1.  In the _New Site Map_ view, enter the following values:

    -  **Filename**:`sitemap.xml`
    -  **Path**:`/pub/media/`

1.  Click **Save & Generate**.
1.  Import the generated files to the `pub/media` directory on the server.
1.  Log in to the remote environment using SSH.
1.  Move the files into the `/pub/media/` directory using the rsync command:

    ```bash
    rsync -azvP pub/media/ <user_name>@<environment_IP_address>:pub/media/
    ```

1.  This results in a `www.example.com/media/sitemap.xml` path, so you must submit a Support ticket to apply a redirect for your generated files.

{% include note.html type="warning" content="Do not change the location of the files during deployment." %}

#### To add a `robots.txt` file:

1.  On your local branch, access the Magento Admin panel.
1.  On the _Stores_ menu, click **Configuration** in the _Settings_ section.
1.  In the _General_ list, click **Design**.
1.  In the _Search Engine Robots_ view, select options and update the `robots.txt` file.
1.  Click **Save Config**.

Your `robots.txt` file appears in the `<magento_root>/app/pub/media/` folder.

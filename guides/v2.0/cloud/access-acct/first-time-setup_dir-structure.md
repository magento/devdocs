---
layout: default
group: cloud
subgroup: 04_setup
title: Project directory structure
menu_title: Project directory structure
menu_order: 50
menu_node: 
version: 2.0
github_link: cloud/access-acct/first-time-setup_dir-structure.md
---

## Project directory structure {#cloud-structure}
Initially, your project has the following structure:

{% highlight xml %}
├── .git
├── .gitignore
├── .magento
│   ├── routes.yaml
│   └── services.yaml
├── .magento.app.yaml
├── auth.json
├── composer.json
├── composer.lock
├── magento-vars.php
├── php.ini
└── README.md
{% endhighlight %}

<div class="bs-callout bs-callout-info" id="info">
  <p>When you push your local environment to the remote server, our deploy script uses the values defined by configuration files in the <code>.magento</code> directory, then the script deletes the directory and its contents. Your local development environment isn't affected.</p>
</div>

For more information about the files and directories in your project, see:

*	[auth.json]({{page.baseurl}}cloud/access-acct/first-time-setup_template.html)
*	[composer.json]()
*	[.magento.app.yaml]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
*	[routes.yaml]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
*	[services.yaml]({{page.baseurl}}cloud/project/project-conf-files_services.html)

---
group:
subgroup: 100_project
title: git push details
menu_title: git push details (remove or rewrite)
menu_order: 100
menu_node:
version: 2.0
github_link: cloud/project/admin-git-push.md
---

# Step by step walk-through of `git push` output
To better grasp what is happening here, we will show you what the output of the `git push` command might look like with {{site.data.var.ece}}.

For this example, we use a sample PHP project with multiple data backends, MySQL, Redis, and Elasticsearch. It has its PHP dependencies in a `composer.json` file. It uses the Ruby library `sass` to compile the SCSS during its build process.

A developer wants to work on a new feature for the store. They created a new environment by running `magento-cloud environment:branch maximal`, where `maximal` is the name of the branch.

After modifying some files, the developer pushed the changes using:

    $ git push

This is what the output looks like:

    Counting objects: 4, done.
    Delta compression using up to 4 threads.
    Compressing objects: 100% (4/4), done.
    Writing objects: 100% (4/4), 428 bytes | 0 bytes/s, done.
    Total 4 (delta 3), reused 0 (delta 0)

This was the normal output you would expect from a git server. If a conflict occurred, an error would have displayed and recommended resolving before pushing again.

## Validating submodules

{{site.data.var.ece}} supports git submodules and supports multiple applications. You can have multiple applications, each in its own git repository, but have a single production environment for all of them. In this case we only have a single application and no git submodule.

The output for each deployed application would have been similar to what you see below for a single application.

    Validating configuration files.

{{site.data.var.ece}} now checks that your configuration files make sense. Errors display if you used tabs instead of spaces in your yaml files. It does many other validations and tries to provide you with useful error messages.

    Processing activity: **Shelly** pushed to **maximal**
        Found 1 new commit.

Now, the deployment process starts building your application(s).

    Building application 'myapp' (runtime type: php, tree: 551ee89)
        Generating runtime configuration.

Based on what you put in your `.magento.app.yaml`, it is going to build for each application a container with the correct configuration.

    Installing build dependencies...
        Installing ruby build dependencies: sass

In this case we have a dependency on the Ruby  `sass` {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %} so it has installed it. (Again, this comes from `.magento.app.yaml`.)

    Found a `composer.json`, installing dependencies.

{{site.data.var.ece}} found `composer.json`, so it is going to automatically fetch and install all the PHP dependencies.

    Executing post-build hook...
        Building...
        Success!

We supplied a build hook in `.magento.app.yaml` (here it is transforming SCSS files to CSS). It is a good time to run  anything that needs to change the main file system. (Because after the build hook, the file system becomes read-only.)

    Executing pre-flight checks...

{{site.data.var.ece}} just ran some static security checks on the code. There are some vulnerabilities it will refuse to deploy. (You can force it, but it's not a good idea.)

    Compressing application.
    Beaming package to its final destination.

Building is over. {{site.data.var.ece}} creates an archive of the application and is going to send it to one of the hosts on the grid where it will be mounted.

    Re-deploying environment mswy7hzcuhcjy-maximal.

The environment with all its applications has been deployed (here there is just one) and {{site.data.var.ece}} will now give you an overview of its configuration.

You will not be able to see output from the "deploy" hook as these happen in the context of the deployed application. But you could SSH to the environment and inspect the log files.

    Environment configuration:
        myapp (type: php, size: S, disk: 200)
        cache (type: redis, size: S)
        database (type: mysql, size: S, disk: 200)
        moarsearch (type: Elasticsearch, size: S, disk: 200)

We can see the five different data backends were deployed (started, and initialized with the data from the parent environment). {{site.data.var.ece}} also  configured the network so your application container can access them.

    Environment routes:
        http://maximal-mswy7hzcuhcjy.example.magento.com/ is served by application `myapp`
        http://www---maximal-mswy7hzcuhcjy.example.magento.com/ redirects to http://maximal-mswy7hzcuhcjy.example.magento.com/
        https://maximal-mswy7hzcuhcjy.example.magento.com/ is served by application `myapp`
        https://www---maximal-mswy7hzcuhcjy.example.magento.com/ redirects to http://maximal-mswy7hzcuhcjy.example.magento.com/

Finally, {{site.data.var.ece}} gives you the different routes that are served by your application. Here you can see the "mangled" routes on a non-live environment where the `www.` part was replaced by `www---` you can visit those in a browser. The site is live.

    To mswy7hzcuhcjy@git.example.magento.com:mswy7hzcuhcjy.git
        31ed214..f32e741  maximal -> maximal

At the end, we are back to some normal git output. The server tells you at what commit level it is now.

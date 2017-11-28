---
layout: default
group: cloud
subgroup: 170_trouble
title: Theme troubleshooting
menu_title: Theme troubleshooting
menu_order:
menu_node:
version: 2.0
github_link: cloud/trouble/theme-troubleshooting.md
---

This information helps you troubleshoot issues with themes added to your {{site.data.var.ece}} sites and stores.

## Lost images on deployment {#images}
When using a theme in your stores that resizes images, the images may not display or disappear from catalog pages when deployed. This may occur due to loading the images from the cache. If this happens, you can use Magento command to regenerate the image cache and properly display the images.

This issue can occur in all environments during any deployment.

To resolve, you need the SSH information and store URL available through the [Project Web Interface]({{page.baseurl}}cloud/project/projects.html) or your noted access.

1. Open a terminal application.
2. [SSH]({{page.baseurl}}cloud/env/environments-ssh.html) into the environment experiencing the issue.
3. Enter the following command to regenerate the image cache:

        php bin/magento catalog:images:resize
4. Test the catagory pages through the store URL.

## Locate blocks in themes that make them uncacheable {#uncache}
When debugging your themes, you may need to locate blocks in themes that make the pages uncacheable. Use the following command to locate these blocks.

    find ./app -type f -name "*.xml" | xargs grep -l cacheable | xargs grep -l false

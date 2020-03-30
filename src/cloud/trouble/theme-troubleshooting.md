---
group: cloud-guide
title: Theme troubleshooting
---

This information helps you troubleshoot issues with themes added to your {{site.data.var.ece}} sites and stores.

## Lost images on deployment {#images}

When using a theme in your stores that resizes images, the images may not display or disappear from catalog pages when deployed. This may occur due to loading the images from the cache. If this happens, you can use Magento command to regenerate the image cache and properly display the images.

This issue can occur in all environments during any deployment.

To resolve, you need the SSH information and store URL available through the [Project Web Interface]({{ site.baseurl }}/cloud/project/projects.html) or your noted access.

1. Open a terminal application.
1. [Checkout a branch]({{ site.baseurl }}/cloud/before/before-setup-env-2_clone.html#branch) that corresponds to the environment where you are experiencing the issue.
1. Regenerate the image cache:

   ```bash
   php bin/magento catalog:images:resize
   ```

1. Test the category pages through the store URL.

## Locate blocks in themes that make them uncacheable {#uncache}

When debugging your themes, you may need to locate blocks in themes that make the pages uncacheable. Use the following command to locate these blocks.

```bash
find ./app -type f -name "*.xml" | xargs grep -l cacheable | xargs grep -l false
```

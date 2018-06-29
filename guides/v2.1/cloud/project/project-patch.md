---
group: cloud
title: Cloud patches
version: 2.1
github_link: cloud/project/project-patch.md
functional_areas:
  - Cloud
  - Upgrade
---
Sometimes we provide a custom patch to address a specific issue. Third-party extension developers can also provide a custom patch. Copy the custom patches to the `/m2-hotfixes` directory and test them on your local workstation.

{% include cloud/note-upgrade.md %}

#### To test a custom patch:
Only a [Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html) can apply patches. 

1.  On your local workstation, create a branch from the Integration environment.

    ```bash
    magento-cloud environment:branch <branch-name>
    ```

1.  Copy the patch file to the `/m2-hotfixes` directory.

1.  Change to the `/m2-hotfixes` directory.

1.  Apply the patch.

    ```bash
    git apply <project-root>/m2-hotfixes/<patch-file-name>
    ```

1.  Clear the Magento cache.

    ```bash
    php <project-root>/bin/magento cache:clean
    ```

    You can also clean the cache using the [Magento Admin](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html){:target="_blank"}.

1.  Test the patch, make any necessary changes, and commit your code changes.

    ```bash
    git add -A && git commit -m "Apply patch"
    ```

1.  Push your code changes to the remote server.

    ```bash
    git push origin <branch name>
    ```

## Upgrade to ece-tools

See [Upgrade Cloud tools]({{ page.baseurl }}/cloud/project/cloud-tools-upgrade).
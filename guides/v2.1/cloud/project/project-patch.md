---
group: cloud-guide
title: Apply custom patches
functional_areas:
  - Cloud
  - Upgrade
---
Sometimes we provide a custom patch to address a specific issue. Also, third-party extension developers can provide a custom patch. Copy the custom patch to the `/m2-hotfixes` directory and test it on your local workstation.

{% include cloud/note-upgrade.md %}

#### To apply and test a custom patch:

You can only apply patches during the build phase of redeployment.

1.  On your local workstation, create a branch based on the `integration` branch.

    ```bash
    magento-cloud environment:branch <branch-name>
    ```

1.  Copy the patch file to the `/m2-hotfixes` directory.

1.  Add, commit, and push your code changes.

    ```bash
    git add -A && git commit -m "Apply patch" && git push origin <branch name>
    ```

1.  After test validation, merge this branch with the `integration` branch.

#### To test if a patch can be applied using your local workstation:

1.  From the project root, apply the patch.

    ```bash
    git apply ./m2-hotfixes/<patch-file-name>
    ```

1.  Clear the Magento cache.

    ```bash
    php ./bin/magento cache:clean
    ```

    You can also clean the cache using the [Magento Admin Cache Management](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html).

1.  Test the patch, make any necessary changes.

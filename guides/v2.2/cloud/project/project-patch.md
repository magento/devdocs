---
group: cloud
title: Cloud patches
version: 2.2
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

1.  copy the patch file to the `/m2-hotfixes` directory.

    ```bash
    mkdir <Magento project root dir>/m2-hotfixes
    ```

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

### Push a custom patch to the Staging or Production environments {#custom-pushpatch}

After successfully testing a custom patch and pushing to your Integration environment, you can push the patch to Staging or Production for Starter and Pro.

1.  Open an SSH connection to your Staging or Production environment. For Starter, see the Project Web Interface for the SSH links. Your Production environment is the Master. For Pro, the SSH access is one of the following:

    *   Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
    *   Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`
2.	On your staging or production system, enter the following command if you haven't done so already:

		mkdir <Magento project root dir>/m2-hotfixes
3.	Copy the patch file to that directory.

	We suggest using the following command:

		rsync -azvP <source> <destination>

	Options:

	`a` archive

	`z` compress

	`v` verbose

	`P` partial progress

	For additional options, see the [rsync man page](http://linux.die.net/man/1/rsync){:target="_blank"}.
2.	Apply the patch:

		git apply <Magento project root dir>/m2-hotfixes/<patch file name>
3.	Clean the Magento cache:

		php <Magento project root dir>/bin/magento cache:clean

	You can also clean the cache using the [Magento Admin](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html){:target="_blank"}.
4.	After testing the patch, push it to the remote server and deploy it:

		git add -A && git commit -m "Apply patch"
		git push origin <branch name>

To update your build system:

1.	Log in to your build system as, or switch to, the [Magento file system owner](https://glossary.magento.com/magento-file-system-owner).
2.	Change to the build system's Magento root directory.
3.	Pull the changes to `app/etc/config.php` from source control.

    The Git command follows:

    ```bash
    git pull mconfig m2.2_deploy
    ```

4.	Compile code:

    ```bash
    php bin/magento setup:di:compile
    ```

5.	After code has been compiled, generate static view files:

    ```bash
    php bin/magento setup:static-content:deploy -f
    ```

6.	Check the changes into source control.

    The Git command follows:

    ```bash
    git add -A && git commit -m "Updated files on build system" && git push mconfig m2.2_deploy
    ```

1. Log in to the Magento server as, or switch to, a user with permissions to write to the Magento file system. See [switch to the Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).

   If you use the bash shell, you can use the following syntax to switch to the Magento file system owner and enter the command at the same time:

   ```bash
   su <Magento file system owner> -s /bin/bash -c <command>
   ```

   If the Magento file system owner does not allow logins, you can do the following:

   ```bash
   sudo -u <Magento file system owner>  <command>
   ```

1. To run Magento commands from any directory, add `<magento_root>/bin` to your system `PATH`.

   Because shells have differing syntax, consult a reference like [unix.stackexchange.com](http://unix.stackexchange.com/questions/117467/how-to-permanently-set-environmental-variables).

   Sample bash shell for CentOS:

   ```bash
   export PATH=$PATH:/var/www/html/magento2/bin
   ```

   Optionally, you can run the commands in the following ways:

   -  `cd <magento_root>/bin` and run them as `./magento <command name>`
   -  `<magento_root>/bin/magento <command name>`
   -  `<magento_root>` is a subdirectory of your web server docroot. [Need help locating the docroot?]({{ page.baseurl }}/install-gde/basics/basics_docroot.html)

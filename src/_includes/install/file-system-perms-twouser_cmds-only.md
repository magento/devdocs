To optionally enter all commands on one line, enter the following assuming Magento is installed in `/var/www/html/magento2` and the web server group name is `apache`:

```bash
cd /var/www/html/magento2 && find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} + && find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} + && chown -R :apache . && chmod u+x bin/magento
```

In the event file system permissions are set improperly and can't be changed by the Magento file system owner, you can enter the command as a user with `root` privileges:

```bash
cd /var/www/html/magento2 && sudo find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} + && sudo find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} + && sudo chown -R :apache . && sudo chmod u+x bin/magento
```

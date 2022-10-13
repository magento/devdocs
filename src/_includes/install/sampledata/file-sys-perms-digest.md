### Apply file system permissions and ownership {#rc1-samp-ownership}

As part of the sample data upgrade process, you must apply current file system permission and ownership as discussed in the following sections.
Failure to do so will cause your upgrade to fail.

For more information about file system ownership and permissions, see [Overview of ownership and permissions].

#### One-user ownership and permissions

If you run the Magento application as one user (which is typical of shared hosting environments), change file system permissions and ownership as follows:

```bash
cd <magento_root>
```

```bash
chmod -R g+w var vendor pub/static pub/media app/etc
```

```bash
chmod u+x bin/magento
```

To optionally enter all commands on one line, enter the following assuming Magento is installed in `/var/www/html/magento2`:

```bash
cd /var/www/html/magento2 && chmod -R g+w var vendor pub/static pub/media app/etc && chmod u+x bin/magento
```

After you set file system permissions, manually clear the `var/cache`, `var/page_cache`, and `var/generation` directories.

A sample command follows:

```bash
rm -rf var/cache/* var/page_cache/* var/generation/*
```

#### Two-user ownership and permissions

If you run the Magento application with two users, enter the following commands as a user with `root` privileges:

```bash
cd <magento_root>
```

```bash
find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} +
```

```bash
find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} +
```

```bash
chown -R :<web server group> .
```

```bash
chmod u+x bin/magento
```

To optionally enter all commands on one line, enter the following assuming Magento is installed in `/var/www/html/magento2` and the web server group name is `apache`:

```bash
cd /var/www/html/magento2 && find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} + && find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} + && chown -R :apache . && chmod u+x bin/magento
```

<!-- Link definitions -->
[Overview of ownership and permissions]: {{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html

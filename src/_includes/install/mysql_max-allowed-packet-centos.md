To increase the value, open `/etc/mysql.cnf` in a text editor and add search for `max_allowed_packet`. Set the value to `16M` or larger.

If it does not exist, add it before `[mysqld_safe]`.

Save your changes to `mysql.cnf`, close the text editor, and restart MySQL (`service mysqld restart`).

To optionally verify the value you set, enter the following command at a `mysql>` prompt:

```shell
SHOW VARIABLES LIKE 'max_allowed_packet';
```

To increase the value, open `/etc/mysql/mysql.cnf` in a text editor and locate the value for `max_allowed_packet`. Save your changes to `mysql.cnf`, close the text editor, and restart MySQL (`service mysql restart`).

To optionally verify the value you set, enter the following command at a `mysql>` prompt:

```shell
SHOW VARIABLES LIKE 'max_allowed_packet';
```

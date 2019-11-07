The following steps provide an example of accessing a database:

1. SSH to the integration environment.

   ```bash
   magento-cloud ssh
   ```

1. Find the database login information:

   ```bash
   php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"]))->database);'
   ```

   Sample output follows:

   ```php
   Array
    (
         [0] => stdClass Object
           (
              [username] => user
              [password] =>
              [ip] => 192.0.2.60
              [host] => database.internal
              [query] => stdClass Object
                 (
                   [is_master] => 1
                 )
              [path] => main
              [scheme] => mysql
              [port] => 3306
           )
       )
   ```

1. Use the following command to connect to the database:

   ```bash
   mysql --host=<host> --user='<database username>' --password='<user password>' --port='<port>' --database='<path>'
   ```

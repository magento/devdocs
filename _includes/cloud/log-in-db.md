<div markdown="1">

1.  SSH to the integration environment.

        magento-cloud ssh
2.  Find the database login information:

        php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"]))->database);'

    Sample output follows:

    <pre class="no-copy">
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
          )</pre>

3.  Use the following command to connect to the database:

	<pre class="no-copy">mysql --host=&lt;host> --user='&lt;database user name>' --password='&lt;user password>' --port='&lt;port>' --database='&lt;path>'</pre>

    Using the preceding example, the command is:

	   mysql --host='database.internal' --user='user' --password='' --port='3306' --database='main'
<div markdown="1">

<pre class="no-copy">
docker-compose ps

                         Name                                        Command               State                                                 Ports                                              
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
magento2devbox_db_709831d587f2feef1e27fa41d4e70219        docker-entrypoint.sh mysqld      Up      0.0.0.0:32780->3306/tcp                                                                          
magento2devbox_elastic_709831d587f2feef1e27fa41d4e70219   /docker-entrypoint.sh elas ...   Up      0.0.0.0:32777->9200/tcp, 9300/tcp                                                                
magento2devbox_rabbit_709831d587f2feef1e27fa41d4e70219    docker-entrypoint.sh rabbi ...   Up      15671/tcp, 0.0.0.0:32778->15672/tcp, 25672/tcp, 4369/tcp, 5671/tcp, 0.0.0.0:32779->5672/tcp      
magento2devbox_redis_709831d587f2feef1e27fa41d4e70219     docker-entrypoint.sh redis ...   Up      6379/tcp                                                                                         
magento2devbox_web_709831d587f2feef1e27fa41d4e70219       /usr/local/bin/entrypoint.sh     Up      22/tcp, 0.0.0.0:22->32705/tcp, 44100/tcp, 0.0.0.0:32781->5000/tcp, 0.0.0.0:32782->80/tcp, 9000/tcp</pre>

In the preceding example:

*	The database listens on port 32780
*	Elasticsearch listens on ports 32777 and 9300
*	RabbitMQ listens on ports 15671, 32778, 25672, 4369, 5671, and 32779
*	Redis listens on port 6379
*	In the web container, the following ports are used:

	*	SSH listens on port 32705

		Applications like PhpStorm communicate with DevBox on the SSH listen port. It's very important to know this port.
	*	Unison synchronization (Windows only) listens on port 32781
	*	The web server listens on port 32782

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You can use any unmapped ports anyway you like. (An example of an unmapped port is port 9000 in the web container in the preceding example.)
</div>

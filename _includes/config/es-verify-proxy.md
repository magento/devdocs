<div markdown="1">

## Verify communication is secure {#es-ws-secure-verify}
This section discusses two ways to verify that HTTP Basic authentication is working:

*	Using a `curl` command to verify you must enter a user name and password to get cluster status
*	Configuring HTTP Basic authentication in the Magento Admin

### Use a `curl` command to verify cluster status
Enter the following command:

	curl -i http://<host name, ip, or localhost>:<proxy port>/_cluster/health

For example, if you enter the command on the Elasticsearch server and your proxy uses port 8080:

	curl -i http://localhost:8080/_cluster/health

The following message displays to indicate authentication failed:

	HTTP/1.1 401 Unauthorized
	Date: Tue, 23 Feb 2016 20:35:29 GMT
	Content-Type: text/html
	Content-Length: 194
	Connection: keep-alive
	WWW-Authenticate: Basic realm="Restricted"

	<html>
	<head><title>401 Authorization Required</title></head>
	<body bgcolor="white">
	<center><h1>401 Authorization Required</h1></center>
	</body>
	</html>

Now try the following command:

	curl -i -u <user name>:<password> http://<host name, ip, or localhost>:<proxy port>/_cluster/health

For example:

	curl -i -u magento_elasticsearch:mypassword http://localhost:8080/_cluster/health

This time the command succeeds with a message similar to the following:

	HTTP/1.1 200 OK
	Date: Tue, 23 Feb 2016 20:38:03 GMT
	Content-Type: application/json; charset=UTF-8
	Content-Length: 389
	Connection: keep-alive

	{"cluster_name":"elasticsearch","status":"yellow","timed_out":false,"number_of_nodes":1,"number_of_data_nodes":1,"active_primary_shards":5,"active_shards":5,"relocating_shards":0,"initializing_shards":0,"unassigned_shards":5,"delayed_unassigned_shards":0,"number_of_pending_tasks":0,"number_of_in_flight_fetch":0,"task_max_waiting_in_queue_millis":0,"active_shards_percent_as_number":50.0}


### Configure HTTP Basic authentication in the Magento Admin
Perform the same tasks as discussed in [Configure Magento to use Elasticsearch](#elastic-m2-configure) *except* click **Yes** from the **Enable Elasticsearch HTTP Auth** list and enter your user name and password in the provided fields.

The following figure shows an example:

<img src="{{ site.baseurl }}common/images/es_with-basic-auth.png" width="650px">

Click **Test Connection** to make sure it works and then click **Save Config**.

You must flush the Magento cache and reindex before you continue.
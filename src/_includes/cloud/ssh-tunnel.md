You can also use SSH tunneling to connect to a service from your local development environment as if the service were local. Before tunneling, you need to have [SSH configured]({{ site.baseurl }}/cloud/env/environments-ssh.html).

Use a terminal application to log in and issue commands.

```bash
magento-cloud login
```

First, you may want to check if any tunnels are already open using the following command:

```bash
magento-cloud tunnel:list
```

To build a tunnel, you must know the name of the app to which to tunnel. Use the following commands to list those applications:

```bash
cd <project directory>
```

```bash
magento-cloud project:list
```

```bash
magento-cloud apps
```

For information on the command, you can enter `magento-cloud apps --help`.

### Set up the SSH tunnel {#tunnel-setup}

Use the following command:

```bash
magento-cloud tunnel:open -e <environment ID> --app <app name>
```

For example, to open a tunnel to the `sprint5` branch in a project with an app named `mymagento`, enter

```bash
magento-cloud tunnel:open -e sprint5 --app mymagento
```

Messages similar to the following display:

```terminal
SSH tunnel opened on port 30003 to relationship: solr
SSH tunnel opened on port 30004 to relationship: redis
SSH tunnel opened on port 30005 to relationship: database
Logs are written to: /home/magento_user/.magento/tunnels.log

List tunnels with: magento-cloud tunnels
View tunnel details with: magento-cloud tunnel:info
Close tunnels with: magento-cloud tunnel:close
```

### Get tunnel information {#tunnel-info}

To display information about your tunnel, enter:

```bash
magento-cloud tunnel:info -e <environment ID>
```

### Connect to services {#tunnel-services}

Now you can connect to services as if they were running locally.

For example, to connect to the database, use the following command:

```bash
mysql --host=127.0.0.1 --user='<database username>' --pass='<user password>' --database='<name>' --port='<port>'
```

Details about the service display if you use the `magento-cloud tunnel:info` command.

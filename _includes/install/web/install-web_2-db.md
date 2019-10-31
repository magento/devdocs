## Step 2: Add a Database   {#instgde-install-magento-web-step2}

1. Enter the following information:

  <table>
  <tbody>
    <tr>
      <th>Item</th>
      <th>Description</th>
    </tr>
  <tr>
    <td>Database Server Host</td>
    <td>If the web server and database server are located on the same host, enter <tt>localhost</tt>. If the database server is located on a different host, enter its fully qualified hostname or IP address. Using the IP address is preferable since using a hostname can cause additional time on each request for DNS lookup.</td>
  </tr>
  <tr>
    <td>Database Server Username</td>
    <td>Enter the username of the Magento database instance owner.</td>
  </tr>
  <tr>
    <td>Database Server Password</td>
    <td>Enter the Magento database user's password, if any. Leave this field blank if you did not configure a password.</td>
  </tr>
  <tr>
    <td>Database Name</td>
    <td>Enter the Magento database instance name.</td>
  </tr>
  <tr>
    <td>Table prefix</td>
    <td><p>Use only if you're installing the Magento database tables in a database instance that has Magento tables in it already.</p>
    <p>In that case, use a prefix to identify the Magento tables for this installation. Some customers have more than one Magento instance running on a server with all tables in the same database.</p>
    <p>The prefix can be a maximum of five characters in length. It must begin with a letter and can include only letters, numbers, and underscore characters.</p>
    <p>This option enables those customers to share the database server with more than one Magento installation.</p></td>
  </tr>
  </tbody>
  </table>

1. Click **Next**.

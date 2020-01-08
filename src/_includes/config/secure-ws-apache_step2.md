You can optionally enable more than one user to securely communicate by adding these users to your password file and to a group file you'll configure in the next section.

To add another user to your password file, enter the following command as a user with `root` privileges:

```bash
htpasswd /usr/local/apache/password/<password file name> <username>
```

To create an authorized group, create a group file anywhere outside the web server docroot. The group file specifies the name of the group and the users in the group. In this example, the group name is `MagentoGroup`.

```bash
vim /usr/local/apache/password/.group
```

Contents of the file:

```text
MagentoGroup: <username1> ... <usernameN>
```

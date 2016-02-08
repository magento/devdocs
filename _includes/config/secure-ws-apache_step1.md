<div markdown="1">

For security reasons, you can locate the password file anywhere except your web server docroot. In this example, we show how to store the password file in a new directory.

Enter the following commands as a user with `root` privileges:

	mkdir -p /usr/local/apache/password
	htpasswd -c /usr/local/apache/password/passwords <username>

where `<username>` can be the web server user or another user. In this example, we use the web server user but the choice of user is up to you.

Follow the prompts on your screen to create a password for the user.

To add another user to your password file, enter the following command as a user with `root` privileges:

	htpasswd /usr/local/apache/password/passwords <username>
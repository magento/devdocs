---
layout: default
group: install
subgroup: Z_Troubleshooting
title: GitHub API rate limit
menu_title: GitHub API rate limit
menu_node: 
menu_order: 16
github_link: install-gde/trouble/tshoot_rate-limit.md
---

<h2 id="install-trouble-pdo">You reach the GitHub API rate limit</h2>

	Could not fetch <name>, enter your GitHub credentials to go over the API rate limit
	The credentials will be swapped for an OAuth token stored in /var/www/.composer/auth.json, your password will not be stored

### Solution (based on <a href="https://coderwall.com/p/kz4egw/composer-install-github-rate-limiting-work-around" target="_blank">coderwall</a>:

1.	Press Control+C to stop the current activity.
2.	Log in to <a href="http://github.com" target="_blank">github.com</a>.
3.	Click <img src="{{ site.baseurl }}common/images/icon_github-account.png" alt="GitHub settings button"> in the horizontal toolbar to view your GitHub account settings.
4.	In the left pane, click **Applications**, as the following figure shows.

	<img src="{{ site.baseurl }}common/images/github_applications.png" alt="GitHub Applications menu">

5.	In the right pane, click **Generate New Token**, as the following figure shows.

	<img src="{{ site.baseurl }}common/images/github_generate-new-token.png" alt="Generate a new token">

6.	Enter a description for the token in the provided field. 

	To change other values on this page, consult the GitHub help.

7.	Click **Generate Token**.
8.	Click **Copy Token**, as the following figure shows.

	<img src="{{ site.baseurl }}common/images/github_copy-token.png" alt="Copying a GitHub token">

9.	Save the token you just copied. You cannot view it again.

10.	In a command prompt or terminal window, change to your Magento installation directory.

	On Ubuntu, you might need to elevate to the `root` user first: `sudo -s`

12.	As a user with `root` privileges, enter the following command:

		composer config -g github-oauth.github.com <your token>

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  		<p>If the command fails, try making the web server user the owner of your web server docroot directory.</p>
  		<p>For example, on Ubuntu, enter <code>sudo chown www-data /var/www</code>.</p></span>
	</div>

13.	Repeat the task that failed previously (usually running either `composer install` or `composer update`.)
---
layout: default
group: release-notes
subgroup: Magento 2.2.0 Release Candidate Alpha
title: Install Magento 2.2.0 Release Candidate Alpha
menu_title: Install Magento 2.2.0 Release Candidate Alpha
menu_order: 2
level3_menu_node:
level3_subgroup:
version: 2.2
github_link: alpha/alpha-install.md
---




## Installation

You need to install Magento CE as part of installing Magento EE or Magento B2B.  install either Magento 2.2.0 Release Candidate Alpha CE and EE, you'll need to:

Install Magento 2.2.0 CE Release Candidate Alpha

Install Magento 2.2.0 CE Release Candidate Alpha


Want to evaluate Magento 2.2.0 B2B Release Candidate Alpha?  See [Install Magento 2.2.0 B2B Release Candidate Alpha]({{page.baseurl}}alpha/alpha-install-b2b.html) for information on downloading and installing. 

### Alpha code repositories

There are three separate Alpha code repositories on GitHub.


<table>
  <tr>
    <th><b>Magento edition</b></th>
    <th><b>Location</b></th>
    <th><b>Availability</b></th>
  </tr>

<tr>
    <td><b>Magento CE</b></td>
    <td>https://github.com/magento/magento2</td>
    <td>Publicly available already</td>
</tr>

<tr>
    <td><b>Magento EE</b></td>
    <td>https://github.com/magento/magento2ee</td>
    <td>Available after contract has been signed</td>
</tr>

<tr>
    <td><b>Magento B2B</b></td>
    <td>https://github.com/magento/magento2b2b</td>
    <td>Available after contract has been signed</td>
</tr>

</table>


Install Magento 2.2.0 CE Release Candidate Alpha

1) Get GitHub authentication keys.

2) Clone the repository you need.

3)


### Get GitHub authentication keys



### Clone the Magento GitHub repository

This section discusses how to get current code by cloning the Magento GitHub’s Alpha branch.


You can clone the Magento 2 GitHub repository using either SSH or HTTPS protocols:

	•	Use SSH for better security (no user name and password are exchanged). This requires you to share a public key with GitHub.

	•	Use HTTPS if you don’t share an SSH key with GitHub (your user name and password are encrypted before being sent to GitHub).

See one of the following sections:

	•	Clone with SSH

	•	Clone with HTTPS


#### Clone with SSH

To clone the Magento GitHub repository using the SSH protocol:

	1.	Copy to the clipboard the Magento GitHub repository SSH clone URL. 

		a. In a web browser, go to https://github.com/magento-partners/magento2ce.

	     b. On the right side of the page, under the *clone URL* field, click **SSH**. 

	    c. Click the **Copy to clipboard** button. 



	2.	Change to your web server’s docroot directory. Typically, for Ubuntu, it’s `/var/www` and for CentOS it’s `/var/www/html`. 

		Need help locating the docroot? Click [here](http://devdocs.magento.com/guides/v2.1/install-gde/basics/basics_docroot.html).

	3.	Enter `git clone` and paste the value you obtained from step 1.  For example, enter `git clone -b 2.2.0-alpha git@github.com:magento-partners/magento2ce.git`.

	4. Wait for the repository to clone on your server.  If the following error displays, make sure you shared your SSH key with GitHub:

	Cloning into 'magento2'...
	Permission denied (publickey).
	fatal: The remote end hung up unexpectedly   


For example, to check out the `2.2.0-rc1` release tag in a new branch named `2.2.0-alpha`, enter

`git checkout tags/2.2.0-rc1 -b 2.2.0-alpha`


5) Optionally switch to a release tag as follows:  git checkout tags/<tag name> [-b <version>]

For example, to check out the 2.1.0 release tag in a new branch named 2.1.0, enter git checkout tags/2.1.0 -b 2.1.0

6) Continue with [Update installation dependencies](http://devdocs.magento.com/guides/v2.1/install-gde/install/prepare-install.html). 


#### Clone with HTTPS


###







## Install the Magento Community Edition Release Candidate Alpha 2.2.0 software
You can get Magento Community Edition Alpha Release Candidate 2.2.0 from Github.



### Complete the installation


After you get the CE software:

1.	[Set file system ownership and permissions]({{ page.baseurl }}install-gde/prereq/file-system-perms.html).
2.	Install the software:

	*	[Web Setup Wizard]({{ page.baseurl }}install-gde/install/web/install-web.html)
	*	[Command line]({{ page.baseurl }}install-gde/install/cli/install-cli.html)




### Complete the installation

After you get the EE software:

1.	[Set file system ownership and permissions]({{ page.baseurl }}install-gde/prereq/file-system-perms.html).
2.	Install the software:

	*	[Web Setup Wizard]({{ page.baseurl }}install-gde/install/web/install-web.html)
	*	[Command line]({{ page.baseurl }}install-gde/install/cli/install-cli.html)

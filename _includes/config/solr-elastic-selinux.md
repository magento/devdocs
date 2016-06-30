<div markdown="1">

### Firewall and SELinux {#firewall-selinux}
By default, UNIX systems generally enable a firewall with restrictive rules and also enable SELinux, which imposes other types of security on the operating system. It's easier to run the search engine server in development by disabling the firewall and SELinux but that choice is up to you.

If you choose to enable your firewall and SELinux, you must set up rules to allow TCP traffic between Magento and your search engine's listen port.

#### Disable iptables and SELinux
To stop the `iptables` (firewall) service, enter the following command as a user with `root` privileges:

	service iptables stop

To set SELinux for permissive mode:

1.	To determine if SELinux is enabled, enter the following command:

		getenforce

	`Enforcing` displays to confirm that SELinux is running. (If `Permissive` displays, continue with the next section.)
2.	To change to permissive mode, enter:

		setenforce 0

#### Set up rules for iptables and SELinux
To set up rules to allow communication with the firewall or SELinux enabled, consult the following resources:

*	<a href="https://help.ubuntu.com/community/IptablesHowTo" target="_blank">iptables how-to</a>
*	<a href="https://fedoraproject.org/wiki/How_to_edit_iptables_rules" target="_blank">How to edit iptables rules (fedora project)</a>
*	<a href="http://www.thegeekstuff.com/2011/06/iptables-rules-examples/" target="_blank">25 Most Frequently Used Linux IPTables Rules Examples</a>
*	<a href="https://www.centos.org/docs/5/html/Deployment_Guide-en-US/ch-selinux.html" target="_blank">Introduction to SELinux (CentOS.org)</a>
*	<a href="https://wiki.centos.org/HowTos/SELinux" target="_blank">SELinux How-To Wiki (CentOS.org)</a>
<div markdown="1">

<h3 id="prereq-java">Install the Java Software Development Kit (JDK)</h3>
To determine if Java is already installed, enter the following command:

	java -version

If the message `java: command not found` displays, you must install the Java SDK as discussed in the next section. 

See one of the following sections:

* <a href="#install-prereq-java-centos">Install the latest JDK on CentOS</a>
* <a href="#install-prereq-java-ubuntu">Install the latest JDK on Ubuntu</a>

<h4 id="install-prereq-java-centos">Install the JDK on CentOS</h4>
See <a href="https://www.digitalocean.com/community/tutorials/how-to-install-java-on-centos-and-fedora#install-oracle-java-8" target="_blank">this article on digitalocean</a>.

Be sure to install the JDK and *not* the JRE.

	apt-get install openjdk-7-jdk

<div class="bs-callout bs-callout-info" id="info">
	<p>Java version 7 might not be available for all operating systems. For example, you can <a href="http://packages.ubuntu.com/" target="_blank">search the list of available packages for Ubuntu</a>.</p>
</div>

<h4 id="install-prereq-java-ubuntu">Install the JDK on Ubuntu</h4>
To install JDK 1.8 on Ubuntu, enter the following commands as a user with `root` privileges:

	add-apt-repository -y ppa:webupd8team/java
	apt-get -y update
	apt-get install -y oracle-java8-installer

For other options, see <a href="https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html" target="_blank">Oracle documentation</a>.
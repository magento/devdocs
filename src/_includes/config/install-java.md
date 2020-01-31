### Install the Java Software Development Kit (JDK) {#prereq-java}

To determine if Java is already installed, enter the following command:

```bash
java -version
```

If the message `java: command not found` displays, you must install the Java SDK as discussed in the next section.

See one of the following sections:

*  [Install the latest JDK on CentOS](#install-prereq-java-centos)
*  [Install the latest JDK on Ubuntu](#install-prereq-java-ubuntu)

#### Install the JDK on CentOS {#install-prereq-java-centos}

See [this article on digitalocean](https://www.digitalocean.com/community/tutorials/how-to-install-java-on-centos-and-fedora#install-oracle-java-8).

Be sure to install the JDK and *not* the JRE.

```bash
yum -y install java-1.7.0-openjdk
```

 {:.bs-callout-info}
Java version 7 might not be available for all operating systems. For example, you can [search the list of available packages for Ubuntu](http://packages.ubuntu.com/).

#### Install the JDK on Ubuntu {#install-prereq-java-ubuntu}

To install JDK 1.8 on Ubuntu, enter the following commands as a user with `root` privileges:

```bash
add-apt-repository -y ppa:webupd8team/java
```

```bash
apt-get -y update
```

```bash
apt-get install -y oracle-java8-installer
```

For other options, see [Oracle documentation](https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html).

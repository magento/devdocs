# -*- mode: ruby -*-
# vi: set ft=ruby :

NAME="magento-devdocs"
HOST_PORT="4000"
RAM="1024"
CPU="50"
VM_BOX="ubuntu/trusty64"

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  config.vm.box = VM_BOX
  config.vm.hostname = NAME
  config.vm.provision :shell, path: "bootstrap.sh"
  config.vm.network :forwarded_port, guest: "4000", host: HOST_PORT

  # VirtualBox specific configuration settings
  config.vm.provider 'virtualbox' do |v|

    # Set a name, a RAM capacity of a virtual machine and CPU load percentage available on your host
    v.customize ['modifyvm', :id, '--name', NAME, '--memory', RAM, '--cpuexecutioncap', CPU]
  end
end

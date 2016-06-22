# Overview of this Vagrant project

You can deploy devdocs site locally using this vagrant project. Vagrant will do the following:
 
 1. Create a virtual machine with Ubuntu
 
 2. Install all the software needed
 
 3. Clone `devdocs` repo to the virtual machine in a shared folder (on VM: `/vagrant/devdocs`, on your machine: in the `vagrant/devdocs` directory)
 
 4. Run Jekyll to generate `magento.devdocs` website locally
 
The generated web-site is accessible through browser from your machine as localhost using IP: **127.0.0.1:4000** by default.

## Setup

1. Download [`devdocs/vagrant` directory](https://github.com/magento/devdocs/vagrant).

2. Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads). 

3. Install [Vagrant](https://www.vagrantup.com/).

## Run Vagrant

1. In your terminal, open the downloaded directory `vagrant` on your host. (The directory where this README is located.)
 
2. Enter `vagrant up`.

3. Wait for some time while vagrant is creating a virtual machine, sets up environment, and runs Jekyll. You'll se the following test in your terminal:

        Configuration file: /vagrant/devdocs/_config.yml
        Server address: http://0.0.0.0:4000//
        Server running... press ctrl-c to stop.

## Browse magento.devdocs site locally

In your browser, visit http://127.0.0.1:4000/

## Customize environment

You can change the following parameters in `Vagrantfile`

- `NAME` is a name of virtual machine (default: "magento.devdocs").
- `HOST_PORT` is a localhost port that enables you to observe the generated site from your host (default: "4000"). 
- `RAM` is a RAM size on virtual machine (default:  "1024" MB).
- `CPU` is a maximum percentage of a CPU used on your machine for VM needs. (default: "50" percent)

## Useful CLI scripts and commands

All commands must be run in the terminal from the directory that contains `Vagrantfile`.

### Scripts

- Stop Jekyll server. (Stops magento.devdocs site generation.)

        vagrant ssh -c "kill $(ps aux | grep '[j]ekyll' | awk '{print $2}')"

- Run Jekyll server. (Generates magento.devdocs site.)
 
        vagrant ssh -c 'cd /jekyll/devdocs; jekyll serve --host=0.0.0.0'

- Reload Jekyll server. (Regenerates magento.devdocs site.)

        vagrant ssh -c "kill $(ps aux | grep '[j]ekyll' | awk '{print $2}'); cd /jekyll/devdocs; jekyll serve --host=0.0.0.0"
 
    
### Commands

- Connect to the running virtual machine. You can run Jekyll commands inside the virtual machine from the `/jekyll/devdocs` directory.

        vagrant ssh

  To terminate the SSH connection, run the command:

            exit
        
- Shut down the running virtual machine

        vagrant halt

- Start and configure the virtual machine

        vagrant up

- Stop and remove the virtual machine

        vagrant destroy

- Reload virtual machine to apply changes in `Vagrantfile` 

        vagrant reload

- Reload virtual machine to apply changes in `Vagrantfile` and `bootstrap.sh`

        vagrant reload --provision

- Reload virtual machine to apply changes in `bootstrap.sh`

        vagrant provision

[More Vagrant commands](https://www.vagrantup.com/docs/cli/up.html).
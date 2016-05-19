# Deploy devdocs locally

You can deploy devdocs site locally using this vagrant project. Vagrant enables you to create a virtual machine with all the software needed to build the devdocs project on a virtual machine. The generated web-site is accessible through browser from your machine as localhost using IP: **127.0.0.1:4000** by default.

## Setup

1. Download or clone [devdocs repository](https://github.com/magento/devdocs).
2. [Install VirtualBox](https://www.virtualbox.org/wiki/Downloads). 
3. [Install Vagrant](https://www.vagrantup.com/).

## Create VM and environment 

1. Using a terminal, change a directory to `devdocs/vagrant` on your host. (The directory where this README is located.) 
 Example: `cd ~/devdocs/vagrant`
2. Enter in your terminal `vagrant up`
3. Wait for some time until vagrant created a virtual machine with ready-to-go environment.

## Browse devdocs site

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

- Stop Jekyll server. (Stops devdocs site generation.)

        vagrant ssh -c "kill $(ps aux | grep '[j]ekyll' | awk '{print $2}')"

- Run Jekyll server. (Generates devdocs site.)
 
        vagrant ssh -c 'cd /jekyll/devdocs; jekyll serve --host=0.0.0.0'

- Reload Jekyll server. (Regenerates devdocs site.)

        vagrant ssh -c "kill $(ps aux | grep '[j]ekyll' | awk '{print $2}'); cd /jekyll/devdocs; jekyll serve --host=0.0.0.0"
 
    
### Commands

- Connect to the running virtual machine. You can run Jekyll commands inside the virtual machine from the `/jekyll/devdocs` directory.

        vagrant ssh

  To terminate the connection, run the command:

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
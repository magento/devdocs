# Deploy devdocs locally

You can deploy devdocs site locally using this vagrant project. Vagrant enables you to create a virtual machine with all the software needed to build the devdocs project on a virtual machine. The generated web-site is accessible through browser from your machine as localhost using IP: **127.0.0.1:4000** by default.

## Setup

1. Download or clone [devdocs repository](https://github.com/magento/devdocs).
2. [Install VirtualBox](https://www.virtualbox.org/wiki/Downloads). 
3. [Install Vagrant](https://www.vagrantup.com/).

## Create VM and environment 

1. Using a terminal change a directory to `devdocs/vagrant` on your host. (The directory where this README is located.) 
 Example: `cd ~/devdocs/vagrant`
2. Enter in the terminal `vagrant up`
3. Wait for some time until vagrant create a virtual machine with ready-to-go environment.

## Run Jekyll

1. Enter in terminal `vagrant ssh -c 'cd /jekyll/devdocs; jekyll serve --host=0.0.0.0'`
2. In browser on your machine, open http://127.0.0.1:4000/

## Customize environment

You can set the following parameters in `Vagrantfile`
- `RAM` is RAM size on virtual machine. Default is "1024" MB.
- `HOST_PORT` is a localhost port that enables you to observe the generated HTML site from your machine. Default is "4000". 
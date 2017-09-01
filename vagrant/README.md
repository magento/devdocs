# Deploy devdocs locally

You can deploy devdocs site locally using this Vagrant project. Vagrant enables you to run the software needed to build the devdocs project in a self-contained virtual machine (VM). Our Vagrant project clones the devdocs repository in the VM and shares the `devdocs` directory with your system in the root of this project. You can then run Jekyll from the VM in `/vagrant/devdocs` project root.

## What is in the project

- `Vagrantfile` - a new VM configuration
- `bootstrap.sh` - VM software installation 

## Install required software

Install the VirtualBox and Vagrant software for your operating system:

1. [Install VirtualBox](https://www.virtualbox.org/wiki/Downloads).
2. [Install Vagrant](https://www.vagrantup.com/).

## Customize the project

You can change the following parameters in `Vagrantfile`:

- `NAME` is a name of virtual machine (default: `magento-devdocs`).
- `HOST_PORT` is a localhost port that enables you to observe the generated site from your host (default: `4000`).
- `RAM` is the amount of RAM used by the virtual VM (default: `1024` MB).
- `CPU` is the maximum percentage of CPU used for the VM. (default: `50` percent).

## Windows only: Run the UNIX shell and VirtualBox as Administrator

To enable symlinks to work, Windows users must run both the UNIX shell (for example, Git Bash) and the VirtualBox application as administrator. The easiest way to do that is to modify the applications' shortcuts as follows:

1.  Right-click the application on your desktop or under **Start** > **All Programs**
2.  From the pop-up menu, click **Properties**.
3.  In the Properties dialog box, click **Advanced**.
4.  Select the **Run as administrator** check box.
5.  Follow the prompts on your screen to save your changes.

## Create the VM and environment 

1. Using a terminal, change to `vagrant` on your host (that is, the directory in which this README is located).
 Example: `cd ~/vagrant/`
2. Enter `vagrant up`
3. Wait for the project to initialize, clone the repository, and install all gems.

    This command takes some time to complete the first time you run it.

## Connect to the VM and run Jekyll

Enter `vagrant ssh` to connect to the VM using SSH.

Use the following commands to run Jekyll:
    
    cd /vagrant/devdocs
    bin/jekyll serve --host=0.0.0.0

After Jekyll has started, go to `http://127.0.0.1:4000` in a web browser on your host.

For additional command options, see [Basic Usage](https://jekyllrb.com/docs/usage).

## Regenerate the site

If you made any changes in devdocs project, you can stop Jekyll and run it again to regenerate the `_site` and preview them in HTML. Automatic regeneration doesn't work in the VM. 

## Useful CLI scripts and commands

All commands must be run in the terminal from the directory that contains `Vagrantfile`.

### Scripts

- Stop Jekyll server. (Stops devdocs site generation.)

        vagrant ssh -c "kill $(ps aux | grep '[j]ekyll' | awk '{print $2}')"

- Run Jekyll server. (Generates devdocs site.)
 
        vagrant ssh -c 'cd /vagrant/devdocs; jekyll serve --host=0.0.0.0'

- Reload Jekyll server. (Regenerates devdocs site.)

        vagrant ssh -c "kill $(ps aux | grep '[j]ekyll' | awk '{print $2}'); cd /vagrant/devdocs; jekyll serve --host=0.0.0.0"
    
### Commands

- Connect to the running virtual machine. You can run Jekyll commands inside the virtual machine from the `/vagrant/devdocs` directory.

        vagrant ssh

  (VM command) To terminate the connection, run the command:

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
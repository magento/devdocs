# Deploy devdocs locally

You can deploy devdocs site locally using this Vagrant container. Vagrant enables you to crun the software needed to build the devdocs project in a self-contained virtual machine. Our Vagrant project clones the devdocs repository. You can run Jekyll from the `/vagrant/devdocs` project root.

## Install required software
Install the Virtual Box and Vagrant software for your operating system:

1. [Install VirtualBox](https://www.virtualbox.org/wiki/Downloads). 
3. [Install Vagrant](https://www.vagrantup.com/).

## Customize the container

You can change the following parameters in `Vagrantfile`:

- `NAME` is a name of virtual machine (default: `magento.devdocs`).
- `HOST_PORT` is a localhost port that enables you to observe the generated site from your host (default: `4000`). 
- `RAM` is the amount of RAM used by the virtualVM (default: `1024` MB).
- `CPU` is the maximum percentage of CPU used for the VM. (default: `50` percent).

## Windows only: Run the UNIX shell and Virtual Box as Administrator
To enable symlinks to work, Windows users must run both the UNIX shell (for example, Git Bash) and the Virtual Box application as administrator. The easiest way to do that is to modify the applications' shortcuts as follows:

1.  Right-click the application on your desktop or under **Start** > **All Programs**
2.  From the pop-up menu, click **Properties**.
3.  In the Properties dialog box, click **Advanced**.
4.  Select the **Run as administrator** check box.
5.  Follow the prompts on your screen to save your changes.

## Create the VM and environment 

1. Using a terminal, change to `devdocs/vagrant` on your host. (The directory where this README is located.) 
 Example: `cd ~/vagrant/devdocs`
2. Enter `vagrant up`
3. Wait for the container to initialize and clone the repository.

    This command takes some time to complete the first time you run it.

## Enter Git commands and run Jekyll
After your Vagrant container has started, enter `vagrant ssh` to connect to the container using SSH. From there, you can fork the devdocs repository and use any editor to make your changes.

When you're ready to preview your changes, continue with the next section.

## Run Jekyll
Use the following command to run Jekyll:

    bundle exec jekyll serve --watch

For additional command options, see [Basic Usage](https://jekyllrb.com/docs/usage).

After Jekyll has started, to go `http://127.0.0.1:4000` in a web browser.


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
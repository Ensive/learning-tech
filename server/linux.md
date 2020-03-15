# Linux

## Distributions

* RedHat (enterprise)
* Debian (very slow updates cycles)
* Ubuntu ()
* Mint

## directories

* /root
* /home/vagrant
* /home/vagrant/.bashrc
* /etc/ - configuration files
* /var - variables files (files are growing, change in time, logs)
* /bin - executable files (ls, etc.)
* sbin (sys root executables are used by sys admins...)
* lib (support the binaries in /bin)
* usr (binaries)

## PATH

* echo $PATH

## Linux Security

* rule of least privilege (standard users, custom users) root vs custom user
* /etc/apt/sources.list (package source list)
* sudo apt-get update && sudo apt-get upgrade
* man apt-get
* sudo apt-get install finger
* <https://packages.ubuntu.com/>
* cat /etc/passwd (home directory is 6th field)
* sudo adduser
* sudo cat /etc/sudoers
* sudo cp /etc/sudoers.d/vagrant /etc/sudoers.d/ensive
* sudo passwd -e ensive
* ssh-keygen (-t dsa | ecdsa | ed25519 | rsa)
* sha256 and md5 are hashing algorithms
* touch ~/.ssh/authorized_keys && chmod 700 .ssh
* chmod 644 .ssh/authorized_keys
* sudo nano /etc/ssh/sshd_config (disable pass logins)
* sudo service ssh restart

## File permissions

* chmod command
* owner | group | everyone
* ls -la (2 columns owner and group)
* r = 4, w = 2, x = 1
* read = 4, read execute = 5, read + write = 6, read + write + execute = 7
* 777, 644, 600, 5
* chown = change owner
* chgrp = change group

## PORTS

* http - 80
* https - 443
* ssh - 22
* ftp - 21
* smtp - 25
* pop3 - 110
* sudo ufw status
* sudo ufw default deny incoming
* sudo ufw default allow outgoing
* sudo ufw allow ssh
* sudo ufw allow 2222/tcp
* sudo ufw allow www

## configure servers

* LAMP
* LEMP
* PEPS
* Mail in a box email servier
* Lita IRC chat bot
* sudo apt-get install libapache2-mod-wsgi
* sudo apache2ctl restart
* sudo vi /etc/apache2/apache2.conf

# commands

https://www.coursera.org/learn/devops-foundations-hands-on/lecture/Ymrcn/solution-temporary-user-setup-with-expiry

https://kodekloudhub.github.io/kodekloud-engineer/docs/projects/nautilus#infrastructure-details

ssh tony@stapp01
sudo useradd -s /sbin/nologin deploy_bot (non interactive shell)
sudo useradd -e 2027-12-31 mark
sudo chage -l mark

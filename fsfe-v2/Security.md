# Security

## Rules

1. keep your software up to date
2. firewall (enough to slow people down)

## Firewall

### nmap program

$ sudo apt install nmap
man nmap
nmap YOUR_SERVER_IP_ADDRESS
nmap -sV YOUR_SERVER_IP_ADDRESS

### port

communication endpoint that maps to a specific process
every port can be considered as a responsibility
by default every port is closed

22/tcp SSH
80/tcp TCP
3000

```bash
$ less/etc/services
```

```bash
iptables -p tcp --dport 80 -j REJECT
```

### ufw

you can lock yourself out

- allow
- deny
- reject

1. http
2. https
3. ssh

## Permissions

What can you do with files?

- read r
- write w
- execute x

```bash
chmod 777 filename
chmod -R 777 filename
```

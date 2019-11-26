# Full Stack for Frontend - Day 1

## Command line

```bash
cd
ls
pwd
mkdir
rmdir # not used
```

```bash
cat
man
less # not used
echo # not used
```

```bash
reset # can help when your terminal stuck
mv *.md Containers # moves multiple files, sometimes used for renaming
touch # creates a file
```

## Shell

shell is a command interpreter to interface with the system (OS?)
shell => application => kernel (core)

```bash
echo $0
```

bash - bourne again shell

## How does the internet work

The internet works through TCP/UDP the packets are sent over those protocols.
Trust system: there is some trust rules, based on which servers communicates with each

### Internet

- www - World, bit torrent, movie streaming

Intranet VPN - at work
IP - Internet Protocol
IP Address

IPv4 - 4.3 billion addresses 4.3 * 10^9
IPv6 - 340 undecillion 3.4 * 10^38

TCP - Transmission Control Protocol

- negotiate the connection to send the data
- lostless (air correction / air checking)

UDP - User Datagram Protocol (tomorrow) - minimizes the round trips to

- 1 way blast connection,
- just sending the data

```bash
ping # can be used to
```

roundtrip time = send package and get the response back

Domain Name System - a protocol (a phone book for internet)
ICANN - Internet Corporation for Assigned Names and Numbers

jemyoung.com => 23.23.185.61
blog.jemyoung.com

- blog - Subdomain
- domain - jemyoung.com
- com - top level domain

Map domains to IP addreses - Nameservers

### Traceroute

- a hubs of all servers
- helps diagnose where connection through hubs is broken (diagnose)
- Traceroute sends ICMP request (Internet Control Message Protocol)
- 192 - is local network
- you can secure your server from ping/traceroute

### Packet

What is packet? a little bit of information

- envelope - with data
  - where it's going
  - where you coming from
  - meta data in headers
  - http: 60 bytes sends
- trillions of packets
- all the packets are checked in a checksum with TCP
  - if 54 out of 57 are sent, TCP asks for the other 3 absent packets
- contains mainly meta data

## VIM

- insert mode - text editing, esc to get out
- command mode
- last line mode

root / - writing files there is bad idea

:set number

- dd - delete a line
- Ctrl+F - page down - moves forward a page Ctrl+D moves forward half a page
- Ctrl+B - page up - moves
- Shift+ZZ - save and exit

## Servers

What does a server do?

- it serves content
- it response on request
- req, res, next - in node servers
- reserved ports: 443

- rack servers (server rack)
- datacenter - collection of computers
- rent a server, fraction of a server, an entire datacenter

### Cloud computing

- same application running in different parts of the world (a little bit closer)
- elastic computer?
- elastic cloud computing - scale up and scale down (pay for what you need)
- process isolation
- VPS - a chunk of a box, a fraction of fraction

### Operating systems

windows (ms-dos)

unix (open source)
portable, consistent, vast software

can be run on:

- wifi routes
- dsl and cable modems
- raspberry pi,
- android phones
- linux laptop
- mac os x
- web server

- BSD => freeBSD => OSX/MacOS
- linux* => ubuntu/debian/red hat
- solaris

- standard input and standard output

Linux

- Kernel (layer talks to actual machine hardware)
  - CPU
  - Threads
- Utilities
  - programs, can be combined together

Authentication

- user/password
- SSH - Secure Socket Shell (large key) as of now - unbreakable
- private key on your computer, public key goes on server
- tunnel

## Domain settings

* created dns records on digital ocean
* you can connect custom name servers (in go daddy you can specify the digital ocean nameservers)

## Server setup

- apt update (as root); different on Amazon
- apt upgrade
- installed package (1st option)
- adduser ensive
- usermod -aG sudo ensive (added ensive to the super user group)
- cat /var/log/auth.log
- /var/log/auth.log - you can see who is logging into the server
- head
- tail -f (is the MIC)

creating ssh directory
create authorized keys
insert pub ssh key
exit
login with new user - ensive
ssh is on port 22 (we can change a port)

php + apache  - work really well (LAMP)

## Nginx

- reverse proxy
- web server
- proxy server
- man yes

How request works: domain => ip => Nginx => ? page

nginx config

- server block
- location block
- directive

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

chown -R $USER:$USER - means that directories are owned by you;
touch - creates a file/modifies timestamp

shell

- service (any service)
- systemctl
- sudo vi /etc/nginx/sites-available/default
- sudo service nginx reload

### process manager

- keeps your application running
- handles errors and restarts
- can handle logging and clustering

# PART 2

- stdin
- stdout
- stderror

- ps - services running
- | - pipe attribute read from stdout
- > write
- >>
- 0<
- 2> - error
- /var/log - the canonical place for all logs

## Search in shell

### find

find /bar -name foo.txt
find directory option file/folder

$ find / -type d -name log
$ find /var/log -type f -name "*.log"

### grep

$ grep -i 'jem' /var/www
zgrep FILE search inside gzip file
tarball

ps
ps aux

Task #1: banlist

- cat all the auth logs
- use regular expression to get all the IP addresses
- add them to the banlist

## Nginx part 2

server {}
location {}

listen 80;
listen [::]80; - IPv6 notation

- different type of compressions: lossy compression

## Security

- Controlling access
- Securing applications
- Firewalls
- Permissions
- Upgrade NodeJS

### What hackers can do with ~root~ access?

- scrape the database
- DDos attack
- bot net
- attackers
- md5 is very breakable

Attackers commonly from

- Russia
- Asia
- China,
- North Korea,
- USA

Task #2
Look the ip by country. Where are attackers from?

- SSH
- Firewalls
- Updates
- Two factor authentication
- VPN

What is unattended upgardes?

- use brotli over gzip

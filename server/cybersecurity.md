# Cybersecurity

## Security Team setup

* Builders
* Breakers
* Defenders

## Roles

* Pen Testing
* Secure Engineering
* Security Analysts
* Security Program managers
* Security Auditors
* Risk Managers

* Cybersecurity should be injected into regular Software Development Lifecycle (SDLC)
* Project requirements vs Security requirements
* Process oriented
* Threat modeling

* Regression Testing
* Fuzz Testing
* Pen Testing

## Networking

### Main concepts of networking

* Medium
* Addressing
* Content

Devices on the same network can share same prefix like 192.168.112.* (32 bits)
192.168.112.*/24 (253) 2^8 = 256 - 3 (reserved) = 253 possible unique addresses = 192.168.112.{2-254}
192.168.112.72/22 = 2^10 = 1024 - 3 (reserved)

Classless Inter-Domain Routing (CIDR)

192.168.112.10 / 24
IP address + Subnet Mask

### To figure out what network device is on

* 122.48.253.2  => 01111010.00110000.11111101.00000010
* /18           => 11111111.11111111.11000000.00000000 & (64 possible values)
* result        => 01111010.00110000.11000000.00000000
* switching back to decimal from results in => 122.48.192.0
* net block: 122.48.{192-255}.{0-255}

* 172.254.3.17  => 10101100.11111110.00000011.00010001
* /8            => 11111111.00000000.00000000.00000000 &
* result        => 10101100.00000000.00000000.00000000 => 172.0.0.0

### Reserved Addresses on a Netblock

* the first address (.0) is used for identification of the network
* the follow address assigned to router
* 255 is to broadcast

### OSI model (Open Systems Interconnection)

* Application (HTTP)
* Presentation (SSL and TLS)
* Session (socket)
* Transport (TCP and UDP)
* Network (IP, ICMP, router)
* Data link (switch, ARP)
* Physical (DSL, DOCSIS, 802.11a/b/g/n)

Each layer concerns only about layers above and below (because every layer is abstraction layer)
Abstraction layer is a way of hiding the working details of a subsystem

* data moves down (encapsulaion) - each layer adds its header data (packing data)
* data moves up (decapsulation) - each layer removes respective layer header (unpacking)

### LAN

Type of messages

* Unicast
* Multicast
* Broadcast

Ethernet package


## URLs

* <https://en.wikipedia.org/wiki/Subnetwork>
* <https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing>
* <https://tools.ietf.org/html/rfc1878>
* <https://tools.ietf.org/html/rfc5942>
* <https://www.rfc-editor.org/rfc/rfc1519.txt>
* <https://en.wikipedia.org/wiki/OSI_model>

# Load Balancers

**Learn:** Elastic Computing

## Use Case

- user goes to google.com (10.10.50.74) => load balancer (web server, usually using nginx) => web servers

## Purpose

Make sure traffic is split evenly between all your servers based on

- connection load
- cpu load
- memory load

## How to

You can use scheduling algorithms to define how load balancer will know which server go to

- round robin* (going to the next one in a sequence)
- least load (which server has the least load on it)
- ip hashing (match agains the set of other ip)
- random choice
- least connections

Tools to check the resources consumption

- top
- htop
  - F5 tree mode

You can

## Known problems

What about session data? When you logged in on one server
Sticked to particular server and doesn't get you bumped between them.
IP hashing - solves that problem
authorization layer before you hit an nginx

## 3rd party solutions for load balancing

- AWS: Elastic Load Balancing

## Learn More

- https://www.f5.com/services/resources/white-papers/load-balancing-101-nuts-and-bolts
-

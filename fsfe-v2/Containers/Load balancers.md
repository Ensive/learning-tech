# Load Balancers

**Learn:** Elastic Computing

Make sure traffic is split evenly between all your servers based on

- connection load
- cpu load
- memory load

Scheduling Algorithms - what is the process how load balancer will know which server go to

- round robin* (going to the next one in a sequence)
- ip hashing (match agains the set of other ip)
- random choice
- least connections
- least load

Tools to check the resources consumption

- top
- htop
  - F5 tree mode

What about session data?

When you logged in on one server

Sticked to particular server and doesn't get you bumped between them.
IP hashing - solves that problem
authorization layer before you hit an nginx

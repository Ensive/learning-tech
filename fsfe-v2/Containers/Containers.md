# Containers

What is a container? Partitioning your code and environment?

What is a difference between a container and virtual machine? - VM has entire OS, container shrinks down into a container of libraries which we need

Hypervisor ? (process isolation)

Segment out the server into parts.
We just includes the libraries which it needs. It doesn't know on which OS it runs on.

What is powerful about individual containers?

- lightweight
- portable
- easier for development
- easier to manage
- faster startup
- decouple application from infrastructure

1. What single application is doing. I can limit down the resources for every container (scaling up and down easier).
2. Rolling out much faster (no need to run operating system). Learn: deployments of containers
3. Static analysis

- NodeJS (app, container)
- MySQL (server db, container)
- Nginx (server, container)
- Python (server, container)

## Docker

- Amazon ECS
- Apache Mesos
- CoreOS rkt

## Orchestration

The whole cluster turns green

All the containers, all the individual operating systems => deploy to servers

- Kubernetes "K8s"
- Docker Swarm
- Amazon EKS (kubernetes)
- Apache Mesos
- AKS (microsoft azure kubernetes)

One microservice: one container

**Learn:** Elastic Computing

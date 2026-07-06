# Kubernetes

https://kubernetes.io/docs/tasks/tools/
https://github.com/Ensive/k8s-setup

docker - containerization tool
k8s - orchestration of containers
minikube
kind

`kubectl create deployment name|id` (name, id of docker image on docker hub or full URL)
`kubectl get deployments`
`kubectl get pods`
* pod is an abstraction over container
* container is a running instance of an image
* pod is a running application

`kubectl port-forward synergychat-web-f7b9f96dd-hwkvk 8080:8080` (pod name LOCAL_PORT:REMOTE_PORT)

Listen on port 8888 locally, forwarding to 5000 in the pod: `kubectl port-forward pod/mypod 8888:5000`

## Pods

https://kubernetes.io/docs/concepts/workloads/pods/

pod is an abstraction around container (a wrapper)
pod is a kubernetes unit to manage, operate the container aka Docker container with a little extra kubernetes magic

Pod is ephemeral unit;
Pod's nature is temporary

Pods are generally not created directly and are created using workload resources.

### Workload resources for managing pods

Workload resources for managing pods:
* deployment
* job
* StatefulSet
* DaemonSet

For tracking state need StatefulSet resource

Each Pod is meant to run a single instance of a given application. If you want to scale your application horizontally (to provide more overall resources by running more instances), you should use multiple Pods, one for each instance. In Kubernetes, this is typically referred to as replication.

Naming: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names

### Deployments

`kubectl edit deployment DEPLOYMENT_NAME`
When a pod is manually deleted a new pod is created from the same image (which kinda feels like a restart)

### Unique IP Addresses

All the resources inside a k8s cluster are virtualized. So, the IP address of a Pod is not the same as the IP address of the Node it's running on.

`kubectl get pods -o wide`
`kubectl proxy`

Nasty JSON: http://127.0.0.1:8001/api/v1/namespaces/default/pods

The name of a Pod must be a valid DNS subdomain value, but this can produce unexpected results for the Pod hostname. For best compatibility, the name should follow the more restrictive rules for a DNS label.

Strict rules: https://tools.ietf.org/html/rfc1123

## Deployments

https://kubernetes.io/docs/concepts/workloads/controllers/deployment/

A Deployment provides declarative updates for Pods and ReplicaSets.

`kubectl get deployment synergychat-web -o yaml`

A ReplicaSet's purpose is to maintain a stable set of replica Pods running at any given time. Usually, you define a Deployment and let that Deployment manage ReplicaSets automatically.

`kubectl get deployment synergychat-web -o yaml > web-deployment.yaml`

`kubectl apply -f web.deployment.yaml`

`kubectl logs`
`kubectl get configmaps`
`kubectl proxy`

## Config Maps

Security standards
https://kubernetes.io/docs/concepts/security/pod-security-standards/

## Services

Pods
Services
Gateway API

Service Types:
* ClusterID
* NodePort (exposes the service to each Node's IP at a static port)
* LoadBalancer (cloud based LB)
* ExternalName (DNS)

`kubectl apply -f services/api-service.yaml`
`kubectl apply -f services/web-service.yaml`
`kubectl get svc`, `kubectl get service`, `kubectl get services`

## Gateway


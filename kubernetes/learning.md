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

Gateway API is a family of API kinds that provide dynamic infrastructure provisioning and advanced traffic routing

* expose services to outside world
* hosting services on a single api
* hosting services on the same port via path routing

Gateway API has for stable API kinds:
* GatewayClass
* Gateway
* HTTPRoute
* GRPCRoute

HTTPRoute -> Gateway -> GatewayClass

GatewayController must be a domain prefixed path (must include path)

Note: Gateway is the newer alternative to Ingress which you might still come across in production systems.

Envoy Gateway/Proxy
https://gateway.envoyproxy.io/docs/concepts/

Install envoy:
`kubectl apply --server-side -f https://github.com/envoyproxy/gateway/releases/download/v1.5.1/install.yaml`

To create a proper gateway

1) Create class (pointing to envoy gateway controller)
2) Create gateway
3) Create HTTP route (routing)

/apis/gateway.networking.k8s.io/v1/namespaces/default/gateways/app-gateway
/apis/gateway.networking.k8s.io/v1/gatewayclasses

`minikube tunnel -c`

Correct resolution sequence

DNS (/etc/hosts) -> IP Address -> Gateway -> Service -> Pod

"gateway.networking.k8s.io/v1" is a core extension of kubernetes api, but not native k8s api; that's why API version different from v1

In a nutshell, however, the important take-away is that in most production deployments you'll be using annotations specific to the cloud provider you're using. Each major cloud provider has their own products, so you need to use k8s annotations and extensions specific to that cloud provider.

To clean deployment yaml:
`kubectl get deployment synergychat-web -o yaml \
  | kubectl neat > controllers/web-deployment.yaml`

`kubectl apply -f config/web-configmap.yaml`
`kubectl rollout restart deployment/synergychat-web`

## Storage

pods are ephemeral
once you delete the pod - the filesystem is deleted along the pod (e.g. On-disk files in a container are ephemeral)

`kubectl logs synergychat-crawler-bbfdbf5b6-ch77g --all-containers`

It's important to remember that while it's common for a pod to run just a single container, multiple containers can run in a single pod. This is useful when you have containers that need to share resources. In other words, we can scale up the instances of an application either at the container level or at the pod level.

How do you choose?

### Persistent Volumes

Static PVs
Dynamic PVs

kubectl get pv
kubectl get pvc

## Namespaces

`kubectl get namespaces`

## Further reading/learning

1) https://www.coursera.org/projects/googlecloud-orchestrating-the-cloud-with-kubernetes-aws-ygvoa
2) https://www.coursera.org/specializations/pearson-certified-kubernetes-application-developer-ckad

* https://www.coursera.org/learn/ibm-containers-docker-kubernetes-openshift

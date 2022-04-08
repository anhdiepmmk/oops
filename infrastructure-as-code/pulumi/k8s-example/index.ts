import * as k8s from "@pulumi/kubernetes";
import * as kx from "@pulumi/kubernetesx";

// create ns omg
const ns = new k8s.core.v1.Namespace("omg", {
  metadata: {
    name: "omg",
  },
});

const bobConfigMap = new k8s.core.v1.ConfigMap("bob-configmap", {
  metadata: {
    name: "bob-configmap",
    namespace: "omg",
  },
  data: { "index.html": "<html>hello this is bob</html>" },
});

const bobDeployment = new k8s.apps.v1.Deployment("bob-deployment", {
  metadata: {
    name: "bob-deployment",
    namespace: "omg",
  },
  spec: {
    selector: {
      matchLabels: {
        app: "bob",
        tier: "dev",
      },
    },
    replicas: 3,
    template: {
      metadata: {
        labels: {
          app: "bob",
          tier: "dev",
        },
      },
      spec: {
        containers: [
          {
            name: "nginx",
            image: "nginx:latest",
            ports: [
              {
                containerPort: 80,
              },
            ],
            volumeMounts: [
              {
                name: "bob-configs",
                mountPath: "/usr/share/nginx/html",
              },
            ],
          },
        ],
        volumes: [
          {
            name: "bob-configs",
            configMap: {
              name: "bob-configmap",
            },
          },
        ],
      },
    },
  },
});

const aConfigMap = new k8s.core.v1.ConfigMap("a-configmap", {
  metadata: {
    name: "a-configmap",
    namespace: "omg",
  },
  data: { "index.html": "<html>hello this is a</html>" },
});

const aPod = new k8s.core.v1.Pod("a-pod", {
  metadata: {
    name: "a-pod",
    namespace: "omg",
    labels: {
      app: "a-pod",
    },
  },
  spec: {
    containers: [
      {
        name: "nginx",
        image: "nginx:latest",
        ports: [
          {
            containerPort: 80,
          },
        ],
        volumeMounts: [
          {
            name: "a-configs",
            mountPath: "/usr/share/nginx/html",
          },
        ],
      },
    ],
    volumes: [
      {
        name: "a-configs",
        configMap: {
          name: "a-configmap",
        },
      },
    ],
  },
});

// Allocate an IP to the Deployment.
const aService = new k8s.core.v1.Service("a-service", {
  metadata: {
    name: "a-service",
    namespace: "omg",
  },
  spec: {
    type: "LoadBalancer",
    ports: [
      { port: 80, targetPort: 80, protocol: "TCP", name: "http" },
      {
        port: 443,
        targetPort: 443,
        protocol: "TCP",
        name: "https",
      },
    ],
    selector: {
      app: "a-pod",
    },
  },
});

aService.status.loadBalancer.apply((lb) =>
  console.log("a ip: ", lb.ingress[0].ip || lb.ingress[0].hostname)
);

const bobService = new k8s.core.v1.Service("bob-service", {
  metadata: {
    name: "bob-service",
    namespace: "omg",
  },
  spec: {
    type: "LoadBalancer",
    ports: [
      { port: 80, targetPort: 80, protocol: "TCP", name: "http" },
      {
        port: 443,
        targetPort: 443,
        protocol: "TCP",
        name: "https",
      },
    ],
    selector: {
      app: "bob",
      tier: "dev",
    },
  },
});

bobService.status.loadBalancer.apply((lb) =>
  console.log("bob ip: ", lb.ingress[0].ip || lb.ingress[0].hostname)
);
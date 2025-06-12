variable "cluster_name" {
  type        = string
  description = "The name of the GKE cluster"
}

variable "region" {
  type        = string
  description = "The region where the cluster will be created"
}

variable "network" {
  type        = string
  description = "The VPC network name"
}

variable "subnetwork" {
  type        = string
  description = "The subnetwork name"
}

variable "k8s_version" {
  type        = string
  description = "Kubernetes version"
  default     = "1.27"
}

variable "nodepools" {
  description = "Node pools configuration"
  type = map(object({
    name         = string
    node_count   = number
    node_labels  = map(string)
    machine_type = string
  }))
  default = {
    worker = {
      name         = "worker"
      node_labels  = { "worker-name" = "worker" }
      machine_type = "e2-medium"
      node_count   = 2
    }
  }
}

variable "zones_count" {
  description = "Number of zones to use for the GKE cluster"
  type        = number
  default     = 1
}

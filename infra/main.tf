resource "google_storage_bucket" "example" {
  name     = "infra-from-scratch-example-bucket"
  location = var.region
  force_destroy = true
  uniform_bucket_level_access = true
}

module "gke_cluster" {
  source = "./modules/gke"

  cluster_name = "${var.project_name}-cluster"
  region       = var.region
  network      = module.vpc.network_name  # Adjust based on your VPC module
  subnetwork   = module.vpc.subnet_name   # Adjust based on your VPC module
  k8s_version  = "1.27"

  nodepools = {
    worker = {
      name         = "worker"
      node_labels  = { "worker-name" = "worker" }
      machine_type = "e2-micro"
      node_count   = 1
    }
  }
}

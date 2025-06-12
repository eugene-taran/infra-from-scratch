terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 4.74.0"
    }
  }
}

locals {
  zones = slice(data.google_compute_zones.available.names, 0, var.zones_count)
  services = toset(["compute", "container", "cloudresourcemanager"])
  master_version = data.google_container_engine_versions.main.valid_master_versions[0]
}

resource "google_project_service" "main" {
  for_each = local.services
  service  = "${each.value}.googleapis.com"
  disable_on_destroy = false
}

data "google_compute_zones" "available" {
  region = var.region
  status = "UP"
  depends_on = [google_project_service.main]
}

data "google_container_engine_versions" "main" {
  location = var.region
  version_prefix = "${var.k8s_version}."
  depends_on = [google_project_service.main]
}

resource "google_container_cluster" "gke" {
  name     = var.cluster_name
  location = var.region
  node_locations = local.zones
  min_master_version = local.master_version

  release_channel {
    channel = "UNSPECIFIED"
  }

  remove_default_node_pool = true
  initial_node_count = 1
  network    = var.network
  subnetwork = var.subnetwork

  depends_on = [google_project_service.main]
}

resource "google_container_node_pool" "nodepools" {
  for_each   = var.nodepools
  name       = each.value.name
  location   = var.region
  cluster    = google_container_cluster.gke.name
  node_count = each.value.node_count

  autoscaling {
    min_node_count = 1
    max_node_count = 1
  }

  management {
    auto_repair  = true
    auto_upgrade = false
  }

  node_config {
    machine_type = each.value.machine_type
    labels       = each.value.node_labels

    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
  }

  version = local.master_version
  depends_on = [google_container_cluster.gke]
}

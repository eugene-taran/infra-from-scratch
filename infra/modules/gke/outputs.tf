output "cluster_id" {
  description = "GKE cluster ID"
  value       = google_container_cluster.gke.id
}

output "cluster_name" {
  description = "GKE cluster name"
  value       = google_container_cluster.gke.name
}

output "cluster_endpoint" {
  description = "GKE cluster endpoint"
  value       = data.google_container_cluster.cluster.endpoint
}

data "google_container_cluster" "cluster" {
  name     = google_container_cluster.gke.name
  location = google_container_cluster.gke.location
  depends_on = [google_container_cluster.gke]
}

output "cluster_ca_certificate" {
  description = "GKE cluster CA certificate"
  value       = data.google_container_cluster.cluster.master_auth[0].cluster_ca_certificate
  sensitive   = true
}


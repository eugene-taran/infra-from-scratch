resource "google_storage_bucket" "example" {
  name     = "infra-from-scratch-example-bucket"
  location = var.region != null ? var.region : "europe-west3"
  force_destroy = true
  uniform_bucket_level_access = true
}

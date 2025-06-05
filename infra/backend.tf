terraform {
  backend "gcs" {
    bucket  = "infra-from-scratch-tf-state"
    prefix  = "terraform/state"
  }
}

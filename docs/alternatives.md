# Alternatives for Bootstrapping Infrastructure

This document tracks research and alternatives for quickly bootstrapping developer/cloud infrastructure for modern applications. Despite this project is more for education purposes, it still worth mentioning what we already have out there

---

## 📦 Ready-made Infrastructure Templates & Stacks

### 1. [terraform-google-enterprise-application](https://github.com/GoogleCloudPlatform/terraform-google-enterprise-application)
- **Description:**  
  Complete example of an enterprise-grade application stack on Google Cloud using Terraform.
- **Pros:**
    - Opinionated best practices from Google Cloud.
    - Covers networking, IAM, Cloud SQL, GKE, CI/CD, monitoring, etc.
    - Actively maintained, great reference for modular Terraform.
    - Has a multitenant application example, which is also one of the topics that would be good to cover in this repo
- **Cons:**
    - Harder to start with it from a learning perspective

---

### 2. [Backstage](https://backstage.io/) ([GitHub](https://github.com/backstage/backstage))
- **Description:**  
  Open-source developer portal/platform from Spotify. Helps organize, manage, and bootstrap infrastructure, microservices, and docs.
- **Pros:**
    - Unified UI for templates, docs, CI/CD, service creation.
    - Large, active community.
    - Supports custom scaffolding for new projects/services.
- **Cons:**
    - More about developer experience/service management than raw infra.
    - Can require extra setup/learning curve for small teams.

---

### 3. [kube-prometheus (prometheus-operator)](https://github.com/prometheus-operator/kube-prometheus)
- **Description:**  
  Community-driven, ready-to-use Kubernetes monitoring stack using Prometheus, Grafana, and Alertmanager, via the Prometheus Operator.
- **Pros:**
    - Fastest way to get enterprise-grade monitoring/alerting for Kubernetes.
    - Best practices for configuration and dashboards.
    - Integrates well with cloud-native stacks.
- **Cons:**
    - Not a full “infra bootstrap,” but covers the observability slice.

---

## 🛠️ Other Notable Tools & Approaches

- **[cookiecutter](https://github.com/cookiecutter/cookiecutter):**  
  Project templating tool (Python-based, but generic). Great for scaffolding new repos/services in any stack.

- **[nx](https://nx.dev/) / [Turborepo](https://turbo.build/):**  
  Monorepo build orchestration, useful for managing code + infra templates.

- **[Yeoman Generators](https://yeoman.io/):**  
  Classic scaffolding for apps/services, less infra-focused but still useful.

- **Cloud “Quickstarts” (AWS Quick Start, Azure Blueprints, etc):**  
  Many clouds offer their own best-practice infra bootstrapping guides/templates.

---

## 🌱 My Initial Direction

At this stage, I’m focusing on:
- Manual composition over a big platforms for maximum learning and flexibility.
- Well-documented guides how to start/implement different parts of the system

**This doc will grow as I evaluate more tools, templates, and approaches. Suggestions welcome!**

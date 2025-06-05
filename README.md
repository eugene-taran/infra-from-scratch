# infra-from-scratch

> **A monorepo for building modern developer infrastructure from scratch — live on Twitch.**

This project is an educational build of core developer tooling and cloud infrastructure, using Node.js, Terraform, Google Cloud, and more. The goal is to learn and have everything ready to quickly start a new project with all developer tooling already in place.

---

## 📑 Table of Contents

- [Current plans](#current-plans)
- [Monorepo Structure](#-monorepo-structure)
- [Main Topics](#-main-topics)
- [Follow the Journey](#-follow-the-journey)
- [Alternatives](#-alternatives)
- [How to Use This Repo](#-how-to-use-this-repo)
- [License](#-license)

---

## Current plans

- [x] Set up Node.js backend service (Typescript, ESLint, Prettier, Jest)
- [x] Set up Github Actions for building docker image
- [x] Set up infra repo with terraform and gcloud account
- [ ] Set up k8s cluster
- [ ] Deploy gateway service to k8s cluster (need to use helm charts)
- [ ] Add another Node.js backend service and deploy it to the same k8s cluster
- [ ] Set up monitoring and observability (Prometheus, Grafana, OpenTelemetry)

## 🏗️ Monorepo Structure

- `terraform/` — Infrastructure-as-code
- `backend/` — Example backend service(s)
- `docs/` — Extended docs, research, and guidelines
- `.github/` — GitHub actions, issue templates, etc.

## 📚 Main Topics

- **Building infrastructure with Terraform (Google Cloud)**
- **Observability: metrics, spans, dashboards**
- **Bootstrapping Node.js services**
- **CI/CD pipelines**
- **End-to-end testing strategies**

## 🔍 Alternatives

See [docs/alternatives.md](./docs/alternatives.md) for a list of tools that can help you spin up your infra

## 📂 How to Use This Repo

*(To be filled in as the repo evolves.)*  
- How to spin up infra
- How to launch example services  
- How to adapt this template for your own projects

## 🪧 License

MIT — see [LICENSE](./LICENSE).

PRs, suggestions, and feedback are welcome!

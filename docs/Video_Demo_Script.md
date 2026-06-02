# 5-Minute Demo Video Script

## 0:00–0:30 Introduction

Assalam-o-Alaikum, my name is Hassan Zahid. This is my project: Deploying a Node.js web application on AWS Free Tier using Docker, Kubernetes with Minikube, Amazon ECR, and GitHub Actions CI/CD. The goal is to keep the full deployment inside free tier and automate updates whenever code is pushed to GitHub.

## 0:30–1:30 Code Walkthrough

Show GitHub repository. Open `src/server.js`, `Dockerfile`, `k8s/deployment.yaml`, and `.github/workflows/deploy.yml`. Explain that the app shows timestamp, container ID, visitor counter, and health endpoint.

## 1:30–2:00 ECR and GitHub Actions

Open AWS ECR and show the pushed image. Open GitHub Actions and show the successful workflow run.

## 2:00–2:30 EC2 and SSH

Show EC2 instance running. Open SSH terminal connected to EC2.

## 2:30–3:30 Live Kubernetes Demo

Run:

```bash
minikube status
kubectl get pods -o wide
kubectl get svc
```

Open browser:

```text
http://EC2_PUBLIC_IP:30080
```

Show `/health` endpoint.

## 3:30–4:00 CI/CD Demo

Change webpage text in code, commit and push to GitHub. Show workflow automatically starting. After success, refresh browser and show updated page.

## 4:00–4:30 Scaling Demo

Run:

```bash
kubectl scale deployment devops-node-app --replicas=2
kubectl get pods
curl http://localhost:30080/health
```

## 4:30–5:00 Conclusion and Cost Safety

Explain learning: Docker, ECR, Kubernetes, EC2, GitHub Actions, CI/CD. Show stopping/terminating resources to avoid cost.

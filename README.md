# DevOps CI/CD Node.js App on AWS EC2 Minikube

This project fulfills the required workflow:

GitHub → GitHub Actions → Docker build → Amazon ECR → EC2 → Minikube Kubernetes → Public NodePort URL

## Features

- Node.js Express web application
- Dynamic timestamp
- Container ID / hostname display
- Visitor counter
- `/health` endpoint
- Dockerfile
- Kubernetes Deployment + NodePort Service
- GitHub Actions CI/CD pipeline
- AWS ECR image publishing
- EC2 Minikube deployment

## Local Run

```bash
npm install
npm start
```

Open:

```text
http://localhost:3000
http://localhost:3000/health
```

## Docker Run

```bash
docker build -t devops-node-k8s-cicd:local .
docker run -p 3000:3000 devops-node-k8s-cicd:local
```

## Kubernetes Manual Deploy

Replace `IMAGE_URI_PLACEHOLDER` in `k8s/deployment.yaml` with your ECR image URI, then:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl get pods
kubectl get svc
```

Public URL format:

```text
http://EC2_PUBLIC_IP:30080
```

## GitHub Secrets Required

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `ECR_REPOSITORY`
- `EC2_HOST`
- `EC2_USERNAME`
- `EC2_SSH_PRIVATE_KEY`

## Screenshot Checklist

Take screenshots of:

1. Local app running
2. Docker image build success
3. ECR repository image
4. EC2 instance running
5. SSH terminal connected to EC2
6. Minikube status
7. `kubectl get pods` and `kubectl get svc`
8. Public app URL in browser
9. GitHub Actions workflow success
10. CI/CD update after pushing a text change


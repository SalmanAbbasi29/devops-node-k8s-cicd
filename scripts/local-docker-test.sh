#!/usr/bin/env bash
set -euo pipefail

docker build -t devops-node-k8s-cicd:local .
docker run --rm -p 3000:3000 --name devops-node-test devops-node-k8s-cicd:local

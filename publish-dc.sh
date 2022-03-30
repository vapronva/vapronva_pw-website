#!/bin/bash
set -e

docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD" registry.vapronva.pw
docker-compose -f 'docker-compose.yml' --project-name 'w-vapronvapw' down
docker-compose -f 'docker-compose.yml' --project-name 'w-vapronvapw' up -d

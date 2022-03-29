#!/bin/bash
set -e
docker build -t vapronvapwwebsiteflask:${CI_COMMIT_TAG:-$CI_COMMIT_SHA} .
IMAGE_VERSION=${CI_COMMIT_TAG:-$CI_COMMIT_SHA} docker-compose -f 'docker-compose.yml' --project-name 'w-vapronvapw' down
IMAGE_VERSION=${CI_COMMIT_TAG:-$CI_COMMIT_SHA} docker-compose -f 'docker-compose.yml' --project-name 'w-vapronvapw' up -d

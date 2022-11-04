#!/bin/bash
docker exec $(sudo docker ps -q) bash -ic "yarn prisma db push"
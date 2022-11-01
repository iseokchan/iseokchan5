#!/bin/bash
envsubst < Dockerrun.aws.json > tmp.json && mv -f tmp.json Dockerrun.aws.json

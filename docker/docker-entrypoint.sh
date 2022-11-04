#!/bin/bash

if [[ $* == *--production* ]] 
then
    # Set DATABASE URL for Production
    echo "export DATABASE_URL=postgresql://${RDS_USERNAME}:${RDS_PASSWORD}@${RDS_HOSTNAME}:${RDS_PORT}/${RDS_DB_NAME}" >> /root/.bashrc
    source ~/.bashrc
fi

if [[ $* == *--migrate* ]]
then
    # Perform migration
    yarn prisma db push
fi

# Run Next.js app
yarn start
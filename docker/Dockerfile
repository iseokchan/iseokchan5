FROM node:14 as dependencies
WORKDIR /iseokchan
COPY iseokchan/package.json iseokchan/yarn.lock ./
RUN yarn install --immutable

FROM node:14 as builder

WORKDIR /iseokchan
COPY iseokchan/ .
COPY --from=dependencies /iseokchan/node_modules ./node_modules

RUN yarn build

FROM node:14 as runner
WORKDIR /iseokchan
ENV NODE_ENV production

# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /iseokchan .

# Entrypoint
COPY ./docker/docker-entrypoint.sh /
RUN [ "chmod", "+x", "/docker-entrypoint.sh" ]

ENTRYPOINT [ "/docker-entrypoint.sh" ]

EXPOSE 3000
ARG IMAGE_TAG=12.18.0-alpine
FROM node:${IMAGE_TAG} AS BASE

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY package*.json ./
RUN npm i

ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
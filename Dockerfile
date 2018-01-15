FROM node:8

RUN apt-get update && apt-get install -y \
	locales-all

ADD https://install.meteor.com/ install.sh

RUN chmod +x install.sh && sh install.sh
RUN rm install.sh
RUN chown -R node:node /usr/local/bin /usr/bin/git

ENV LANG=fr_FR.utf-8

USER node
WORKDIR /app

RUN meteor --version
RUN npm i

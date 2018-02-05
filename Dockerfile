FROM node:8

RUN apt-get update
RUN apt-get install -y bsdtar locales-all
RUN ln -sf $(which bsdtar) $(which tar)

ENV LANG=fr_FR.utf-8

ADD https://install.meteor.com/ install.sh
RUN chmod +x install.sh && sh install.sh
RUN rm install.sh

COPY ./install.sh /usr/local/bin/project-install
RUN chmod +x /usr/local/bin/project-install

RUN npm install -g forever
RUN chown -R node:node /usr/local/bin/

USER node
WORKDIR /app

RUN meteor --version

COPY ./install.sh /usr/local/bin/project-install
CMD project-install

FROM node:wheezy
RUN mkdir /app
ADD project/ /app
WORKDIR /app
COPY package.json /app
RUN npm install
CMD ["npm", "run", "start:prod"]

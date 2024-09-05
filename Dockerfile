FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY k8s-application-hello/package*.json ./

RUN npm install

COPY k8s-application-hello/ ./

CMD ["npm", "start"]
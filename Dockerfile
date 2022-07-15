FROM node:alpine
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
#COPY ./* ./
RUN npm i
CMD ["npm", "run", "start"]

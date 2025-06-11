FROM node AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm cache clean --force
RUN npm i

COPY . .

RUN npm run build 

EXPOSE 3007

CMD ["node", "index.js.js"]

FROM node:20.16.0-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --silent
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
EXPOSE 3000
CMD npm run dev --host=0.0.0.0 --port=3000 --disableHostCheck=true
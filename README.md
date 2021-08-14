node.js Express + Jade - backend api server

# DEV project install

## 1. express-generator

- install express-generator
  npm install --save express-generator
  or npm install -g express-generator
  => express-generator 설치

- make project : using express-generator
  express [project-name]
  => express project 가 자동으로 생성

## 2. git setup

git init

## 3. port change 3000 to 5000

Inside the API directory, go to bin/www and change the port number on line 15 from 3000 to 9000

## 4. install nodemon

npm install nodemon -g

```json
// fix package.json file
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon --watch ./bin/www"
  },
```

# --------------------------

# start node server

npm start:dev
npm start

http://localhost:5000/

## jade

## html to pdf generator library

npm i phantom
https://www.npmjs.com/package/phantom
https://github.com/amir20/phantomjs-node/tree/dec84c74ce16674e0d6f74307f505a539d163e6e/docs
http://amirraminfar.com/phantomjs-node/#/

rest api

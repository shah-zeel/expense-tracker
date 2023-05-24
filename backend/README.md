# expense-tracker
### npm setup
```
npm init
npm i express mongose cors nodemon dotenv
```
or simply run
```
npm install
```
### nodemon setup
In package.json make the following changes
```
"scripts": {
    "start": "nodemon app.js"
},
```
### .env setup
In .env make the following changes
```
PORT = 3000
MONGO_URL = <mongodb+srv url>
```
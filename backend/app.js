const express = require('express')
const cors = require('cors')

const app = express()
require('dotenv').config()

const PORT = process.env.PORT

const server = () => {
    console.log(`Running on ${PORT}`);
}
server()
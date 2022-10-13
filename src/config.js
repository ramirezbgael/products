require('dotenv').config()

const config = {
  port: process.env.PORT,
  db: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME
  }
}

module.exports = config
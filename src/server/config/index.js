module.exports = {
  "development": {
    "username": "root",
    "password": "Test1234%",
    "database": "graphbook_dev",
    "host": "localhost",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "pool": {
      "max": 5,
      "min": 0,
      "acquire": 30000,
      "idle": 10000
    }
  },
  "production": {
    "host": process.env.host,
    "username": process.env.username,
    "password": process.env.password,
    "database": process.env.database,
    "logging": false,
    "dialect": "mysql",
    "operatorsAliases": 0,
    "pool": {
        "max": 5,
        "min": 0,
        "acquire": 30000,
        "idle": 10000
    }
  }
}
const mongoose = require('mongoose')
const connectToDb = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log(`connected Db: ${conn.connection.host}`)
    })
    .catch((err) => {
      console.log(err.message)
      process.exit(1)
    })
}
module.exports = connectToDb

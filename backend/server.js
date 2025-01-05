const express = require("express")
const cors = require("cors")
const port = 5000
const connectDB = require('./config/db')
const questionRoutes = require('./routes/questionRoutes')
const app = express()

app.use(cors())
app.use(express.json())

connectDB()
app.use('/api', questionRoutes)
app.listen(port, () => {
  console.log(`server running at port,${port}`);
})
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Test Response
app.get("/test", (req, res) => {
  let response = {
    message: "Test",
    method: req.method,
    code: res.statusCode
  }
  res.json(response)
})






app.listen(port, () => {
  console.log(`Server run on port ${port}!`)
})
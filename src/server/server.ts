import express from "express"

// console.log(express)

const PORT = 4000
const HOST = "0.0.0.0"
const htmlGreeting =
  "Dear <strong>User</strong> , we are pleased  to have you onboard"

const server = express()

server.use(express.static("dist"))

server.set("view engine", "ejs")

server.use("/", (req, res) => {
  res.render("index", {
    variable:
      "This is the value of an ejs variable passed from express",
    greeting: htmlGreeting
  })
})

server.listen(PORT, HOST, () => {
  console.info(`Server listening on port ${PORT} in ${HOST}`)
})

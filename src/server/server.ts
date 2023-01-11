import express from "express"

import { PORT } from "./config"

const htmlGreeting =
  "Dear <strong>User</strong> , we are pleased  to have you onboard"

const server = express()

server.use(express.static("dist"))

server.set("view engine", "ejs")

server.use("/", (req, res) => {
  res.render("index", {
    variable:
      "This is the value of an ejs variable passed from express",
    greeting: htmlGreeting,
    creator: { name: "Peter", age: 500 }
  })
})

server.listen(PORT, () => {
  console.info(`Server listening on port ${PORT}`)
})

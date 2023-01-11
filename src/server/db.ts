import { MongoClient } from "mongodb"

import { MONGODB_URI, DB_NAME } from "./config"

let connectedClient

export const connectClient = async () => {
  // Check if client is currently connected
  if (connectedClient) {
    return connectedClient.db(DB_NAME)
  }

  // Create new MongoClient and connect to database
  const client = new MongoClient(MONGODB_URI)
  await client.connect()
  await client.db(DB_NAME).command({ ping: 1 })
  console.info(`Successfully connected to ${DB_NAME} database`)

  connectedClient = client

  return connectedClient.db(DB_NAME)
}

export const closeClient = async () => {
  // Check to see if client is connected before closing connection
  await connectedClient?.close()
}

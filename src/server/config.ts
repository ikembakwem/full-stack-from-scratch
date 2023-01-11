export const HOST = process.env.HOST || "0.0.0."
export const PORT = process.env.PORT || 4000
export const SERVER_URL = `http://${HOST}:${PORT}`
export const MONGODB_URI =
  process.env.MONGODB_URI || `mongodb://localhost:27017`

export const DB_NAME = process.env.DB_NAME || "local"

export default { HOST, PORT, SERVER_URL, MONGODB_URI }

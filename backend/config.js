import dotenv from 'dotenv'
dotenv.config()

export const PORT = 5555

const user  = process.env.NODE_DB_USERNAME
const pwd  = process.env.NODE_DB_PASSWORD
const cluster  = process.env.NODE_DB_CLUSTER

export const mongoDBURL = `mongodb+srv://${user}:${pwd}@${cluster}`

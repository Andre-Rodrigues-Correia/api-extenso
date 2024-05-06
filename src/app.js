import express from 'express'
import cors from 'cors'
import router from "./router.js";

const app = express()

app.use(
    express.json(),
    cors(),
    router
)

export default app;
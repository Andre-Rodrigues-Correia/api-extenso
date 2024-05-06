import app from "./app.js";

const PORT = 21183
app.listen(PORT, async () => {
    console.log(`server running in port: ${PORT}`)
})
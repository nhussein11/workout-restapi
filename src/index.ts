import express from 'express';
const v1Router = require('./v1/routes/index')

const app = express()

app.use(express.json())
const PORT = process.env.PORT || 3000;
app.use( '/api/v1', v1Router)


app.listen(PORT, () => {
    console.log(`[Server] running on port ${PORT}`)
})
const express = require('express')

require('./db/mongoose')


const userRouter = require('./routers/user-routers')
const trackRouter = require('./routers/track-routers')


const app = express()

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', '*');
    res.set('Access-Control-Allow-Methods', '*');
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    next();
});

app.use(express.json())

app.use(userRouter)
app.use(trackRouter)


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Backend running on port ${port}`)
})
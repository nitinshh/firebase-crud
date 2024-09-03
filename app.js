const express = require('express')
const cors = require('cors')
const PORT = 3000
const app = express()

app.use(express.json())
app.use(cors())

const userRoute = require('./routers/userRouter')

app.use('/users', userRoute)

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})


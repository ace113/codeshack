const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const expressLayouts = require('express-ejs-layouts')


const db = "mongodb://localhost:27017/codeshack"
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() => console.log('Mongodb database connected..'))
.catch(err => console.log(err))
// ejs
app.use(expressLayouts)
app.set('view engine', 'ejs') 

// Bodybarser
app.use(express.urlencoded({ extended: false }));

// route
app.use('/', require('./routes/index'))

app.use('/user', require('./routes/users'))


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server is started at ${PORT}`))
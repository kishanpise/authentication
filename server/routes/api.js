const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const db = "mongodb://userkishan:pwkishan@eventsdb.cozyd.mongodb.net/eventdb"

mongoose.connect(db, err => {
    if(err){
        console.error('Error!'+err)
    } else{
        console.log("Connected to mongodb")
    }
})

router.get('/', (req, res)=>{
    res.send('From API Route')
})

module.exports = router
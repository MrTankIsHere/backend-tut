// server ko create krna
const express = require("express")
const app = express()

// express.json() = it is a middleware
app.use(express.json())

// title, description
const notes = []


// api = /notes
// method = post (for sending data to frintend from backend)
app.post('/notes', (req, res)=>{

    notes.push(req.body)

    res.status(201).json({
        message: "note created successfully"
    })

    // console.log(req.body);

})


// api = notes
// method = get (for getting data from backend to frontend for read purpose)
app.get("/notes", (req, res)=>{

    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })

    // res.send("this is a msg......./")

})


// api = /notes
// method = delete (to delete data)
// delete /notes/1
app.delete("/notes/:index", (req, res)=>{

    // notes.pop()
    const index = req.params.index

    delete notes[ index ]

    res.status(200).json({
        message: "notes deleted successfully",
        notes: notes
    })

})


// api = /notes
// method = patch (to update the data on the server)
app.patch("/notes/:index", (req, res) => {

    const index = req.params.index
    const title = req.body.title
    const description = req.body.description

    notes[ index ].title = title
    notes[ index ].description = description
    
    res.status(200).json({
        message: "note updated successfully",
        notes : notes
    })

})


module.exports = app
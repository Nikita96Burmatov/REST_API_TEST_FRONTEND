import express from "express";
import  path  from "path";
import {v4} from "uuid";


const app = express();


const CONTACT =[
    {id: v4(), name: 'Владилен', value:'+79884560099', marked: false}
]

app.use(express.json())

app.get('/api/contacts', (req, res) =>{
    res.status(200).json(CONTACT)
})


app.post('/api/contacts', (req, res)=>{
    const contact = {...req.body, id: v4(), marked: false }
    CONTACT.push(contact)
    res.status(201).json(contact)
})

app.use(express.static(path.resolve('./', 'client')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve('./', 'client', 'index.html'))
})

app.listen(3000, () => console.log('Server has been started on port 3000...'))
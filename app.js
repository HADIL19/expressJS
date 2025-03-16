const express = require('express') // Import express packages
const app = express()// Create an express app
//HTTP Methods
//GET retrive data from server
app.get('/', (req, res) => {
    res.send('Welcome to home!')
})

app.get('/hello', (req, res) => {
    res.send('Hello World!');
})
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

//POST create data
app.post('/create', (req, res) => {
    res.send('created data')
})
// PUT
// DELETE
//
const express = require('express') // Import express packages
const app = express()// Create an express app
app.use(express.json())
const users = []

//HTTP Methods
//GET retrive data from server
app.get('/', (request, response) => {
    request.send('Welcome to home!')
})

app.get('/users', (request, response) => {
    if(users.length==0){
        response.status(404).send('no users found')
        return
    }
    response.status(200).send(users)
})

//POST create data add 
app.post('/users', (request, response) => {
    const user = request.body ;
    const findUser = users.find((x)=>x.id== user.id)
    if (findUser){
        response.status(400).send('user already exists');
        return
    }
    users.push(user)
    response.status(201).send('created!')
})
// PUT
// DELETE - Remove data
app.delete('/users/:id', (request, response) => {
    const { id } = request.params;
    const findUserIndex = users.findIndex((x) => x.id == id);
    
    if (findUserIndex == -1) {
        response.status(400).send('User not found');
        return;
    }

    users.splice(findUserIndex, 1);
    response.status(200).send('User deleted successfully!');
});

// 


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

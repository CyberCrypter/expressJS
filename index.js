import  express from 'express';
import { searchController, usernameController } from './controller.js';

const app = express()

const PORT = 3000

app.get('/', (req,res) => {
    res.send("Hello word")
})

//dynamic route
app.get('/user/:name', usernameController)

//search?keyword=express
app.get('/search', searchController)

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
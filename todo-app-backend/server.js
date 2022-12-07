const express = require('express');
const connectDB = require('./config/db');
const todo = require('./routes/todo');
const cors = require('cors');

const app = express();

connectDB();


const PORT = process.env.PORT || 8000;




app.use(cors({origin:true,credentials:true}));
app.use(express.json());

app.get("/",(req,res) => res.send("Server running...."));

app.use("/api/todo",todo);

app.listen(PORT, ()=>{
    console.log(`The server is running at http://localhost:${PORT}`);
});
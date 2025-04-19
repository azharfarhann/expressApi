import express from "express";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios"
// import readline from "readline-sync"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post("/git",async(req,res) => {
    try {
        // let userName = readline.question("enter github username:  ");
        let userName= req.body
        if(!userName) {
            console.log("please enter valid username:  ");
        }
        let response = await axios.get("https://api.github.com/users/azharfarhann")
        console.log(response.data);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: error});
    }
})

app.listen(PORT,() => {
    console.log(`server running at ${PORT}`)
});
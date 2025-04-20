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
        let userName  = req.body.userName
        let response = await axios.get(`https://api.github.com/users/${userName}`);
        console.log(response.data);
        let name = response.data.name;
        let bio = response.data.bio;
        let location = response.data.location;
        let followers = response.data.followers;
        let following = response.data.following;
        
        res.status(200).send(`data of ${userName} :
            name        :  ${name}
            location    :  ${location}
            followers   :  ${followers}
            following   :  ${following}`);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: error});
    }
})

app.listen(PORT,() => {
    console.log(`server running at ${PORT}`)
});
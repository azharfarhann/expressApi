import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json()); // POST METHOD ONLY    

app.get("/", (req, res) => {
  try {
    res.status(200).send("Home Page");
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error });
  }
});

app.get("/date", (req, res) => {
  try {
    let current = new Date().getFullYear();
    res.status(200).send(current);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error });
  }
});

app.get("/day", (req, res) => {
  try {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const d = new Date();
    // let day = weekday[d.getDay()];
    console.log(d.getDay());
    // let current = new Date().getDay();
    // res.status(200).send(day)
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.get("/status", (req, res) => {
  try {
    const hour = new Date().getHours();
    // console.log(new Date);
    let greeting;
    if (hour < 12) {
      greeting = `Good morning`;
    } else if (hour < 18) {
      greeting = `good AFTRN`;
    } else {
      greeting = `good night`;
    }

    res.status(200).send(greeting);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});
app.get("/season", (req, res) => {
  try {
    const month = new Date().getMonth();
    let season;
    if (month >= 3 && month <= 5) {
      season = `spring`;
    } else if (month >= 6 && month <= 8) {
      season = `Rainy`;
    } else if (month >= 9 && month <= 11) {
      season = `autumn`;
    } else {
      season = `winter`;
    }
    res.send(season);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});
app.post("/add",(req,res) => {
    try {
        let userInput = req.body;
    console.log(userInput);
    res.status(200).json(userInput);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
    
})
app.post("/evenodd",(req,res) => {
    try {
        let num = req.body.num;
    // console.log(userInput);
    if (num % 2 === 0) {
        res.status(200).send(`even`);
    } else {
        res.status(200).send(`odd`)
    }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
    
})
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

import express from "express";
import dotenv from "dotenv";
import axios from "axios"
dotenv.config();
const app = express();
app.use(express.json());


const port = process.env.PORT || 5000;

app.post("/weather", async (req, res) => {
    try {
        let city = req.body.city
        let key = process.env.KEY
        let output = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        // console.log(output.data);
        let temp = output.data.main.temp
        let humidity = output.data.main.humidity
        let pressure = output.data.main.pressure
        let seaLevel = output.data.main.sea_level
        let lon = output.data.coord.lon
        let lat = output.data.coord.lat
        let description = output.data.weather[0].description
        let speed = output.data.wind.speed
        let country = output.data.sys.country
        res.status(200).send(
            `temperature in ${city} is  :${(temp-273).toFixed()}\n
             humidity in ${city} is     :${humidity}\n
             pressure in ${city} is     :${pressure}\n
             sealevel in ${city} is     :${seaLevel}\n
             the country is             :${country}`);
        
        // console.log(`temperature of Delhi is${temp},/npressure in the city is ${pressure}`)
        // res.status(200).send(`city name is ${city} and max temp is ${temp}`)
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error })
    }
})

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})
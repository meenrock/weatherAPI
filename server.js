const express = require('express');
const request = require('request');

const app = express();
const port = 4000;
const key = `6b84a8e0962dca9e3da7b398fe8d46f2`

app.get('/',(req, res) => {
    let city = req.query.city;
    var request = require('request');
    /* request(`https://samples.openweathermap.org/data/2.5/weather?q=london&appid=6b84a8e0962dca9e3da7b398fe8d46f2`, function (error, response, body){
        if (response.statusCode === 200) {
            console.log(body)
            //res.send(`${city}+${data.list[0].weather[0].description}`)
            res.send(`${body}`)
        } 
    }); */
    request(`https://samples.openweathermap.org/data/2.5/weather?q=London&mode=html&appid=6b84a8e0962dca9e3da7b398fe8d46f2`, function (error, response, htmlbody){
        if (response.statusCode === 200) {
            console.log(htmlbody)
            //res.send(`${city}+${data.list[0].weather[0].description}`)
            res.send(`${htmlbody}`)
        } 
    });
    
});

app.listen(port, () => console.log(`server is at port ${port} for default`))


import fetch from 'node-fetch';

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

app.get('/tmd',(req, res) => {
    let city = req.query.city;
    var request = require('request');
    
    const url = new URL(URL_TMD_API_DAILY + '/at')
    url.search = new URLSearchParams({
        lat,
        lon,
        date,
        duration,
        hour,
        fields: 'tc,tc_max,tc_min,rh,rain,cond,ws10m,wd10m',
    })

    try {
        const result = await fetch(url, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + TMDTOKEN,
        },
        });
        res.send(`${result}`)

    } catch (error) {
        throw error
    }

    
    
});

app.listen(port, () => console.log(`server is at port ${port} for default`))


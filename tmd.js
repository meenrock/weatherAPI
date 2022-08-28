const express = require('express');
const request = require('request');

let fetch = import('node-fetch');

const app = express();
const port = 4000

const URL_TMD_API_DAILY = 'https://data.tmd.go.th/nwpapi/v1/forecast/location/daily'
const TMDTOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI2YWY3YjBhM2ZkODNmZTQyZTY3MDdjODAwODI4YTE2ZDI2MWI1MzllOGQ0OTdjODY1OGQyOTFlZWJiZTllNGZiYTVjMmNkZTU0YWRjODc0In0.eyJhdWQiOiIyIiwianRpIjoiMjZhZjdiMGEzZmQ4M2ZlNDJlNjcwN2M4MDA4MjhhMTZkMjYxYjUzOWU4ZDQ5N2M4NjU4ZDI5MWVlYmJlOWU0ZmJhNWMyY2RlNTRhZGM4NzQiLCJpYXQiOjE2NDc4MzU5MjcsIm5iZiI6MTY0NzgzNTkyNywiZXhwIjoxNjc5MzcxOTI3LCJzdWIiOiIxMDU0Iiwic2NvcGVzIjpbXX0.I6btkFXi-CMkV1yfPqus4Xhp8-gfyzHO69GbrrYpTjAAjLLlf-eo4LZGblWqbWX8aK-Ikd8OTSwUxFXzlz8HqpwlyWKoX__pdhHMQ4bcZJHbiAHqhXLxdw89IUqzW-7vX0tKrdu9JMLqt0a0U-u-cA4Qo2uPmBO0kvcBVpLXOPIWodlfYj_scxm2tTZ93IClUhL2WEOSS_MLgFFEjiQ7zN3ph4Vfes9LwECUI2neHCgv4v6dy-Yvijsl0pssyZgywi5mlbXGm0Rpmr0ItgkjFrcKR8QnvEtsFYyZ4JemazY482gm11PooggCfZZCavKV9sYdOQvKV6gclktrabpOGuDi3kCLedfW2fUF693e5w4f8O2_gX2_u_A-G0t1-mO2D6_XCRKaeBpA2pkZooF5eFaoUmHWHbkpOu22jgLhinboyeW4wK8pKjEE74MC7DhdJP4fEka8yDBhtM-2tEosEMoxMZ5-Ej84FepUh2yRXdFtwbXU4c_1GzZse2wKE3lHw1t1QSq6QDKxqeQoiSmjvhdz_t-u9tKHIh3luT3wJHoWplX1n1eKtXSb9E-qdj9WO0wG2NsRzfPA-W8d5jNInyIXcblHpJLCx-cwdTLNDKRJhXhbiL18FA1I7B3QrlyrtLdAppujEbAHpYF5SFtqC6qACjejeIcWoTJTtyLTlbQ'


const callWeatherApiDailyByPoint = async ({ lat, lon, duration, date, hour }) => {
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
        })

        return result.json()
    } catch (error) {
        throw error
    }
    }

const result = callWeatherApiDailyByPoint({
    lat: 14.761185, lon: 101.4592492, duration: 1, date: "2022-08-22"
})


app.get('/tmd',(req, res) => {
    let city = req.query.city;
    var request = require('request');
    
    request(`https://samples.openweathermap.org/data/2.5/weather?q=London&mode=html&appid=6b84a8e0962dca9e3da7b398fe8d46f2`, function (error, response, htmlbody){
        if (response.statusCode === 200) {
            console.log(htmlbody)
            //res.send(`${city}+${data.list[0].weather[0].description}`)
            res.send(`${htmlbody}`)
        } 
    });
    
});

app.listen(port, () => console.log(`server is at port ${port} for default`))
const { log } = require("console");
const express = require("express");
const app= express();
const https= require ("https")


app.get("/", function(req,res){

const url= "https://api.openweathermap.org/data/2.5/weather?q=Kampala&appid=2a386b99bd5ce5648a4af52c41573adc&units=metric"
    
https.get(url, function(response){
  console.log(response.on(data))
    var weatherData= 

    console.log(response.statusCode);
})

    res.send("you are logged in at port 3000");

})






app.listen(3000, function(){
    console.log("your server is running on port 3000")
})
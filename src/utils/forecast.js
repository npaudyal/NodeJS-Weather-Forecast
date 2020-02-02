


const request=require('request')

const forecast= (latitude,longitude,callback) =>{
    const url='https://api.darksky.net/forecast/624604e7f799c31f6bd62ab2fc33babc/'+latitude+','+longitude
    request({url,json:true},(error, {body})=>{
        if(error){
            callback("Unable to connect to the internet!!", undefined)

        } else if(body.error) {
            callback("Unable to find location!", undefined)
        }
        else{
             callback(undefined,body.daily.data[0].summary +" It is currently "+ body.currently.temperature+" degrees out. The high today is "+body.daily.data[0].temperatureHigh+ " with a low of "+body.daily.data[0].temperatureLow+ ". There is "+body.currently.precipProbability+"% chance of rain." )
        
        }

    })


}

module.exports=forecast
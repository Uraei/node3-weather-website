const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/81c351ab854eab60ac785b6f31509446/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback(body.error, undefined)
        } else {
            const temperature = body.currently.temperature
            const precipProbability = body.currently.precipProbability
            const dailySummary = body.daily.data[0].summary
            const uvIndex = body.currently.uvIndex
            callback(undefined, dailySummary + ' It is currently ' + temperature + ' degrees out. There is a ' + precipProbability + '% change of rain. The UV Index is ' + uvIndex)
        }
    })
}

module.exports = forecast
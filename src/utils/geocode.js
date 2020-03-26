const request = require('request')

const geocode = (address, callback) => {
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoidXJhZTEiLCJhIjoiY2s4NXY0M29pMDF4cDNncDdlMmpmaG1xdCJ9.oiabRLFqhesv2YccE6SGOg'
    
    request ({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to geolocation service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unavailable location', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
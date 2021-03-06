const request = require('request');

const geocode = (location, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token=pk.eyJ1Ijoic2FtZW56byIsImEiOiJja3BiMW9iZW4wb21kMndxeTRoNDR6dmIyIn0.oqvkQTF-55G5ibQjcqSF4g&limit=10';
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find a location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode; 

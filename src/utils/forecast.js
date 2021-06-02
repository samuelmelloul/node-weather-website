const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9b0428103e36f7116fda48879732d832&query=' + latitude + ',' + longitude;
    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback(body.error.info, undefined);
        } else {
            const temperature = body.current.temperature;
            const feelslike = body.current.feelslike;
            const overcast = body.current.weather_descriptions[0];
            const forecast = overcast + '. It is currently ' + temperature + ' degrees out. It is feel like ' + feelslike + ' degrees out';
            callback(undefined, forecast)
        }

    });
}

module.exports = forecast;
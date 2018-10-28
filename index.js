const { VoiceResponse } = require('twilio').twiml;

module.exports.voice = (event, context, callback) => {
    // Use the Twilio Node.js SDK to build an XML response
    const twiml = new VoiceResponse();
    const number = event.queryStringParameters.Caller;
    if (number === '+12672475497') {
        twiml.pause({ length: 5 });
        twiml.say({ voice: 'alice' }, 'Welcome to Pasha Estates!');
        twiml.play({ digits: 4 });
    } else {
        twiml.reject();
    }

    // Render the response as XML in reply to the webhook request
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/xml',
        },
        body: twiml.toString(),
    };
    callback(null, response);
};

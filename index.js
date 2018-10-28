const { VoiceResponse } = require('twilio').twiml;

module.exports.voice = (event, context, callback) => {
    // Use the Twilio Node.js SDK to build an XML response
    const twiml = new VoiceResponse();
    twiml.say({ voice: 'alice' }, 'Welcome to Pasha Estates!');
    twiml.play({ digits: 4 });

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

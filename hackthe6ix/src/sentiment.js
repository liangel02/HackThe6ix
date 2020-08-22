function Sentiment() {

    let https = require ('https');
    
    //API key and endpoint 
    let key = "d45b35f9227f41f99c7143ac0c87fc39";
    let endpoint = "https://textemotions.cognitiveservices.azure.com/";
    
    let path = '/text/analytics/v3.0/sentiment';
    
    let responseHandler = function (retVal) {
        let body = '';
        retVal.on('data', function (d) {
            body += d;
        });
        retVal.on('end', function () {
            let body1 = JSON.parse(body);
            let body2 = JSON.stringify(body1, null, '  ');
            console.log(body2);
        });
        //console log error 
        retVal.on('error', function (e) {
            console.log('Error: ' + e.message);
        });
    };
    
    let getSentiments = function (documents) {
        //function takes input as a JSON string 
        let body = JSON.stringify(documents);
    
        let request_params = {
            method: 'POST',
            hostname: (new URL(endpoint)).hostname,
            path: path,
            headers: {
                'Ocp-Apim-Subscription-Key': key,
            }
        };
    
        let req = https.request(request_params, responseHandler);
        req.write(body);
        req.end();
    }
    
    //example document
    
    let documents = {
        /*
        'documents': [
            { 'id': '1', 'language': 'en', 'text': 'I really enjoy the new XBox One S. It has a clean look, it has 4K/HDR resolution and it is affordable.' },
        ]
        */
    };
    
    
    //console log JSON return value (sentiment analysis)
    console.log(getSentiments(documents));
    return(null);
}

export default Sentiment;


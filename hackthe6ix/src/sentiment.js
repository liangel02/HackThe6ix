function Sentiment() {

    let https = require ('https');
    
    let subscription_key = "d45b35f9227f41f99c7143ac0c87fc39";
    let endpoint = "https://textemotions.cognitiveservices.azure.com/";
    
    let path = '/text/analytics/v3.0/sentiment';
    
    let response_handler = function (response) {
        let body = '';
        response.on('data', function (d) {
            body += d;
        });
        response.on('end', function () {
            let body_ = JSON.parse(body);
            let body__ = JSON.stringify(body_, null, '  ');
            console.log(body__);
        });
        response.on('error', function (e) {
            console.log('Error: ' + e.message);
        });
    };
    
    let get_sentiments = function (documents) {
        let body = JSON.stringify(documents);
    
        let request_params = {
            method: 'POST',
            hostname: (new URL(endpoint)).hostname,
            path: path,
            headers: {
                'Ocp-Apim-Subscription-Key': subscription_key,
            }
        };
    
        let req = https.request(request_params, response_handler);
        req.write(body);
        req.end();
    }
    
    let documents = {
        'documents': [
            { 'id': '1', 'language': 'en', 'text': 'I really enjoy the new XBox One S. It has a clean look, it has 4K/HDR resolution and it is affordable.' },
            { 'id': '2', 'language': 'es', 'text': 'Este ha sido un dia terrible, llegué tarde al trabajo debido a un accidente automobilistico.' },
        ]
    };
    
    console.log(get_sentiments(documents));
    return(null);
}

export default Sentiment;
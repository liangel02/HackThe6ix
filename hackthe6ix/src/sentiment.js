import { Component } from "react";

class Sentiment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        }
    }
    
    render() {
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
        
            let reqParams = {
                method: 'POST',
                hostname: (new URL(endpoint)).hostname,
                path: path,
                headers: {
                    'Ocp-Apim-Subscription-Key': key,
                }
            };
        
            let request = https.request(reqParams, responseHandler);
            request.write(body);
            request.end();
        }
        
        //example document

        var temp = localStorage.getItem("vOneLocalStorage ");
        console.log("done");

        var text = JSON.stringify(temp);
        window.console.log(temp);

        let returnJSON = {
            'documents': [
                { 'id': '1', 'language': 'en', 'text': 'Hack the 6ix was an amazing experience'},
            ]
        };
        
        //console log JSON return value (sentiment analysis)
        console.log(getSentiments(returnJSON));
        localStorage.setItem("localStorage", getSentiments(returnJSON));
        return(null);
    }
}

export default Sentiment;
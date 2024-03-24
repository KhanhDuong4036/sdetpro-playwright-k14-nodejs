const RequestParent = require('./RequestParent');

class Request extends RequestParent{
    constructor(url, headers = {}){
        super();
        this.url = url;
        this.headers = headers;


    }

    setMethod(method){
        this.headers = {...this.headers, method: method};
    }

    send(){
        console.log(`Sending request with header ${JSON.stringify(this.headers)}`);
        this.response = {statusCode: 200};
        
    }
    
    verifyResponseStatus(){
        console.log(`Status code  ${this.response.statusCode                                          }`);
        
    }
}

module.exports = Request;
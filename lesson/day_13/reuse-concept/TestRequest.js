const GetRequest = require('./GetRequest');
const PostRequest = require('./PostRequest');

// GET
const url = 'http://my-api.com/api';
const request = new GetRequest(url);
request.setMethod();
request.send();
request.verifyResponseStatus();

// POST
const postRequest = new PostRequest(url);
postRequest.setMethod
postRequest.send();
postRequest.verifyResponseStatus();


postRequest.sayHello();
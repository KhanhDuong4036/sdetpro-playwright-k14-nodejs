/**
 * 1. Send request -> response
 * 2. Process response
 * 3. Validate response
 * 
 */

function sendRequest(url, callback) {
    console.log('Sending request to ', url);
    setTimeout(function () {
        callback({ status: 200 });
    }, 1000)

}

function processResponse(response, callback) {
    setTimeout(function () {
        callback(response.status);
    }, 1000)
}

function validateResponse(statusCode) {
    if (statusCode === 200) {
        console.log('Passed!');
    } else {
        console.error('Failed, status code: ', statusCode);
    }

}

const targetUrl = 'https://sdetpro.com';
sendRequest(targetUrl, function(response) {
    processResponse(response, function(statusCode){
        validateResponse(statusCode);
    })
})
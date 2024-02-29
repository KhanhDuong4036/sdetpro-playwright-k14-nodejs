/**
 * 1. Send request -> response
 * 2. Process response
 * 3. Validate response
 * 
 */

function sendRequest(url, callback) {
    console.log('Sending request to ', url);
    // PROMISE
    fetch(url).then(function(response){
        callback(response);
    })

}
// Sync
function processResponse(response) {
    console.log('2. Processing response: ', response);
    return response.status;
}

function validateResponse(statusCode) {
    console.log('3. Validating..');
    if (statusCode === 200) {
        console.log('Passed!');
    } else {
        console.error('Failed, status code: ', statusCode);
    }

}

const targetUrl = 'https://jsonplaceholder.typicode.com/todos/1';
sendRequest(targetUrl, function(response){
    const statusCode = processResponse(response);

})
/*
The http module in Node.jsis used to create an HTTP server. 
When you call http.createServer, you are creating 
an instance of an HTTP server.
*/
const http = require('http')

/*
The createServer method takes a callback function as an argument. 
This callback function is invoked every time the server
receives an incoming HTTP request. The callback function receives 
two arguments: the request object (req) and the response object (res).
*/
const server = http.createServer((req, res)=>{
    console.log('Server is running');
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1> Welcome To Bicycle Shop!</h1>');
});

/*
Note: It is setting up a req-res pipeline that we saw in DotNet.
server.listen() starts server in separate thread. The properties of server 
 object are set before reaching line server.listen(). This is nothing but
 req-res pipeline. Whenever an event comes from network (event for NIC hardware)
 it is received by server(or say diverted to this separately running server 
 object thread)
*/
server.listen(3000);

/*
1. Request (req) Object: The req object represents the incoming HTTP request. 
It contains details about the request, such as the request 
method (GET, POST, etc.), headers, URL, and any data sent by the client.
*/

/*
2. Response (res) Object: The res object represents 
the HTTP response that will be sent back to the client. 
It provides methods to send headers, status codes, and the response body.
*/

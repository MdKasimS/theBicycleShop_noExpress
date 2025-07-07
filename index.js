/*
The http module in Node.jsis used to create an HTTP server. 
When you call http.createServer, you are creating 
an instance of an HTTP server.
*/
const http = require('http')
const url = require('url')
const fs = require('fs').promises

/*
The createServer method takes a callback function as an argument. 
This callback function is invoked every time the server
receives an incoming HTTP request. The callback function receives 
two arguments: the request object (req) and the response object (res).
This is how you are confihuring the server to handle incoming requests
and send responses. In short, it is the request-response pipeline.
The req object contains information about the incoming request,
such as the HTTP method (GET, POST, etc.), headers, and the URL.
And the res object is used to send a response back to the client.
The server listens on a specified port (in this case, port 3000)
and waits for incoming requests. When a request is received,
the callback function is executed, allowing you to handle the request
and send a response back to the client.
So in only one instance of the server, you can handle multiple requests
and send responses based on the request details.
Comparing to WPF.NET, it is also event-driven,
where the server listens for incoming requests and processes them asynchronously.
The only difference architecture wise is that in WPF.NET,
the server is a part of the application,
whereas in Node.js, the server is a separate entity that runs independently.
In WQPF.NET, input is handled by the UI thread,
whereas in Node.js, input is handled by the event loop.
Depending on the input in WPF.NET, the UI thread updates the UI,
whereas in Node.js, the event loop processes the input and updates the server state.    
Based upon user click or action as input to WPF.NET app it shows different views,
whereas in Node.js, the server processes the request and sends back the appropriate response.
Similar to WPF.NET dispacther, Node.js uses an event loop to handle incoming requests.
This allows the server to handle multiple requests concurrently without blocking.
WPF.NET gets events from Windows message queue, and it passes to Event Engine for routing
to the appropriate handler, whereas in Node.js, the event loop processes incoming requests and routes them to the appropriate callback function.
Routes in WPF.NET are defined in XAML, where you define the UI and the event handlers,
whereas in Node.js, routes are defined in the server code, where you define the request
handlers and the response logic.
But basically Windows Message Queue is a queue of messages that are sent to the application,
and the application processes these messages in the order they are received.
In Node.js, the event loop is a queue of events that are processed in the order they
are received.
So, express app's server is also receing network IO evenets from Windows Message Queue,
and it is processing these events in the order they are received in the event loop.


*/
const server = http.createServer(async (req, res)=>{
    
    baseUrl = "http://localhost:3000/"
    console.log('Server is running');
    console.log(req.url);
    
    /*
    This is how you can parse the URL and get the search parameters
    The URL constructor is used to parse the URL and create a URL object.
    The URL object has a searchParams property that contains the search parameters.   
    */
    
    const myUrl = new URL(req.url, baseUrl)
    console.log(myUrl);
    console.log(myUrl.searchParams);
    console.log(myUrl.searchParams.get('id'));
    console.log(req.URL)

    let pathname = myUrl.pathname
    let id = myUrl.searchParams.get('id')

    if(pathname ==="/overview")
    {
        const html = await fs.readFile('./view/bicycles.html', 'utf-8')
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(html)
        return
    }
    else if(pathname ==="/bicycle" && id>=0 && id<=5)
    {
        const html = await fs.readFile('./view/overview.html', 'utf-8')
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(html)
        return
    }
    else if(/\.(png)$/i.test(req.url))
    {
        const image = await fs.readFile(`./public/image/${req.url.slice(1)}`)
        res.writeHead(200, {'Content-Type':'image/png'});
        res.end(image)
        return
    }
    
    else
    {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('<div> <h1>Page Not Found</h1></div>')
        return
    }
    
    // console.log(req.headers);
    // console.log(req.statusCode);
    // console.log(req.statusMessage);

    // res.writeHead(200, {'Content-Type':'text/html'});
    // res.end('<h1> Welcome To Bicycle Shop!</h1>');
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

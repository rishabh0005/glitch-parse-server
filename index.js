// Example express application adding the parse-server module to expose Parse
// compatible API routes.

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var path = require('path');

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

if (!databaseUri) {
  console.log('DATABASE_URI not specified');
}

var api = new ParseServer({
  databaseURI: databaseUri,
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'myAppId',
  masterKey: process.env.MASTER_KEY, 
  serverURL: 'https://'+process.env.PROJECT_DOMAIN+'.glitch.me/parse',
  javascriptKey: process.env.JAVASCRIPT_KEY, 
  restAPIKey: process.env.REST_API_KEY, 
  dotNetKey: process.env.DOT_NET_KEY, 
  clientKey: process.env.CLIENT_KEY,
  liveQuery: {
    classNames: ["Posts", "Comments"] // List of classes to support for query subscriptions
  },
    oauth: {
        janraincapture: {
            janrain_capture_host: process.env.JANRAIN_CAPTURE_HOST
        }            
    }  
});

var app = express();

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);
app.use(mountPath+'/1', api); // handle old SDK calls too

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('<h1>Parse Server</h1><p>The server is up! Go to <a href="/test">/test</a> to make sure everything is working</p><script src="https://button.glitch.me/button.js" data-style="glitch"></script><div class="glitchButton" style="position:fixed;top:20px;right:20px;"></div>');
});

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/test', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

var port = process.env.PORT || 3000;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('parse-server-example running on port ' + port);
});

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);

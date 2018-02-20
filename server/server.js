const express      = require('express');
const path         = require('path');
const logger       = require('morgan');
const bodyParser   = require('body-parser');
const http         = require('http');
const api          = require('./routes/api');
const app  = express();


//Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/api', api);

//Serving the HTML content, for prod
app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

//Set port number
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

//Create the httpserver and start listenin
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server running on ${PORT}`));

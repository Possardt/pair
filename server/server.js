const express      = require('express');
const path         = require('path');
const logger       = require('morgan');
const bodyParser   = require('body-parser');
const http         = require('http');
const app          = express();
const PORT         = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
app.set('port', PORT);

const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server running on ${PORT}`));

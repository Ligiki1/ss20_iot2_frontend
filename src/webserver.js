
import express from 'express';
let app = express();
import { join } from 'path';

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(join(__dirname + '/index.html'));
});

app.listen(8080);  
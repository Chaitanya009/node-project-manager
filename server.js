const express = require('express')
const bodyParser = require("body-parser");
const path = require('path');
const utility = require('./utils/utility');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/create/project/', (req, res) => {
    console.log(req.body)
    try {
        utility.makeDir('/Users/cthakre/Documents/' + req.body.project_path);
        res.send('project created');
    } catch (error) {
        console.log(error)
    }
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/ozitech'));


app.get('/*', (req, res) => {
    res.sendFile(_dirname + '/dist/ozitech/index.html');
});


app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
})
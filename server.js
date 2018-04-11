const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const pusher = new Pusher({
    appId: '506588',
    key: 'e521b1c3c6932e032444',
    secret: 'b926ca0d886bd72e32bf',
    cluster: 'eu',
    encrypted: true
});
app.set('PORT', process.env.PORT || 5000);

app.post('/message', (req, res) => {
    const payload = req.body;
    pusher.trigger('chat', 'message', payload);
    res.send(payload)
});

app.listen(app.get('PORT'), () =>
    console.log('Listening at ' + app.get('PORT')));


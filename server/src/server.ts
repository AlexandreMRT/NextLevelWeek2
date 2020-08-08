import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  resp.send('request')
})

app.listen(3333);

import express from 'express';

const app = express();

app.use(express.json);

app.get('/users', (request, response) => {
  const users = [
    {nome: "Alexandre", idade: 27}
  ]

  response.json(users)
})

app.listen(3333);

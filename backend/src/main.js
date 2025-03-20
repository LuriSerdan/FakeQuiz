const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

function shuffle(array) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

const MensagemDAO = require('./models/MensagemDAO');

app.get('/', (req, res) => {
    res.send({
        mensagem: "Bem Vindo"
    });
});

app.get('/fakes/get', async (req, res) => {
    const mensagens = await MensagemDAO.get();
    res.send(shuffle(mensagens));
});


app.listen(8080);
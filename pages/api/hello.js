// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const express = require('express');
const app = express();
const axios = require('axios');

export default function handler(req, res) {
  axios.get(`https://jsonplaceholder.typicode.com/posts`).then((data) => {
    const rxn = data
    res.send(rxn);
   
     })
}

app.listen(4000);

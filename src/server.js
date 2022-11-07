//const express = require('express')
import express from "express";
import configViewEngine from "./configs/viewEngine";
require('dotenv').config();

const app = express()
const port = process.env.PORT;

configViewEngine(app);
app.get('/', (req, res) => {
  res.render('test/index.ejs');
})

app.get('/about', (req, res) => {
    res.send('Duy béo ahihi!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
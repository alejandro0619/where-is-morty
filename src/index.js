// ! importing modules:
const express = require('express');
const config = require('./server/config');
const app = config(express());


// start:
app.listen(app.get('port'), () => {
  console.log('Server is running on', app.get('port'))
});
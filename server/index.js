const express = require('express');
const app = express();
const router = require('./router/router');

app.use("/api", router);

app.listen(8000);

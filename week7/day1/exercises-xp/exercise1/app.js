const express = require('express');
const app = express();
const PORT = 3000;

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
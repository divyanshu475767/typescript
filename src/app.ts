import express = require('express');
const app = express();

import todosRoutes from './routes/todos'
import bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(todosRoutes);




app.listen(3000);

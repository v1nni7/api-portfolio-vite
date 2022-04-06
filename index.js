const express = require('express'); 
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const loginRouter = require('./routes/auth');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const techsRouter = require('./routes/techs');
const relationshipUserTech = require('./routes/relationshipUserTech');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/techs', techsRouter);
app.use('/login', loginRouter);
app.use('/relationshipUserTech', relationshipUserTech);

app.listen(process.env.PORT || 4001);
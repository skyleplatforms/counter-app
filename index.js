import express from 'express';
import bodyParser from 'body-parser';
import usersResponse from './routes/users.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersResponse);

app.get('/', (req,res) => res.send('Hello, We are here to help'))

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
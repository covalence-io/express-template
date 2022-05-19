import express from 'express';
import configure from './routers';

const app = express();
const port = process.env.PORT || 3000;

configure(app);

console.log(`Attempting to run server on port ${port}`);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
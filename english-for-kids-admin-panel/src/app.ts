import express from 'express';
import cors from 'cors';
import categories from './category/router';

const app = express();
const port = 3000;

app.use(cors());

app.use('/api/categories', categories);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

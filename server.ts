import express from "express";

const app = express();
import route from "./src/routes";
app.use(express.static('./dist/public'));

app.use(express.json());
app.use('/',route);

const port = 4000;
//export const myURL = `http://localhost:4000`;
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
    }
);
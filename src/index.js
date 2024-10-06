import dotenv from "dotenv";
import {app} from './app.js'

dotenv.config({
  path: "./.env",
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
  });

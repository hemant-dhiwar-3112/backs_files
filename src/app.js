import express from 'express'
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World!");
  });
app.get("/hd", (req, res) => {
            res.send("<h1>Hemant dhiwar</h1>");
  });
  
 
                                           export { app }
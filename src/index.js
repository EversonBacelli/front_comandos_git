import express, { json } from "express";
import exphbs from "express-handlebars"

import { router } from "./routes/rotas.js";

const app = express();



const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set("view engine", "handlebars")

app.use(
  express.urlencoded({
      extended: true
  })
)

app.use(express.json())
app.use(express.static("public"))



app.get("/", async (req, res) => {
  const url = "https://railwaynodetemplate-production.up.railway.app/comandos"
  const response = await fetch(url)
    .then(response =>{
       return response.json()
    })
    .then( response => {
       return response[0]
    })
  console.log(response)
  res.render("home",{response})
});



const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

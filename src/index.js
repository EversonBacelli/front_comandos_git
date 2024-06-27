import express, { json } from "express";
import exphbs from "express-handlebars"
import dotenv from "dotenv"


import { router } from "./routes/rotas.js";

const app = express();
dotenv.config()



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
  const url = process.env.url_railway
  const response = await fetch(url)
    .then(response =>{
       return response.json()
    })
    .then( response => {
       return response[0]
    })
  res.render("home",{response})
});



const port = process.env.PORT;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

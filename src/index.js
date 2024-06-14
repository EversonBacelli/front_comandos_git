import express from "express";
const app = express();

// check out the example code in the `./routes/example.js` file.
// You can use this code to separate your routes into different files
// which makes it easier to manage your code as it grows.
import { ExampleRouter } from "./routes/router_example.js";
app.use("/", ExampleRouter);

// Middleware is a function that runs on every request that is sent to your app.
// It can be used to modify the request or response objects, or to run some code
// generally middleware is used for things like authentication,
// logging, or parsing the request body
//
// the example shown below will be for logging, and it is run on every request
app.use((req, res, next) => {
  // try it out at http://localhost:3000/?query=hello+world and check the console
  const start = Date.now();
  res.on("finish", () => {
    const responseTime = Date.now() - start;
    const contentLength = res.get("Content-Length");
    console.log({
      method: req.method,
      url: req.originalUrl,
      query: req.query,
      responseTime: `${responseTime} ms`,
      contentLength: `${contentLength} bytes`,
      status: res.statusCode,
    });
  });
  // the next function is a callback that tells express to move on to the next middleware or route handler
  next();
});

// you can declare a route using the syntax below:
// app.get("path", callback)
//
// the callback function takes two parameters:
// req: the request object
// res: the response object
//
// req has information about the request that was made, like the url, the headers, the body, etc.
// res has methods that allow you to send a response back to the client, like res.send() or res.json()
//
// below is an example of a text response and a json response using the res.send() and res.json() methods
//
// other methods are available, like res.render() to render a template, or res.redirect() to redirect to another url
// see the express docs for more info: https://expressjs.com/en/api.html#res
app.get("/", (req, res) => {
  res.send("Choo Choo! Welcome to your Express app 🚅");
});

app.get("/json", (req, res) => {
  res.json({ "Choo Choo": "Welcome to your Express app 🚅" });
});

// You can declare a POST route using the syntax below:
// POST requests are different from GET requests because they have a body
// and are generally used to create or send data to the server
// Check out the MDN docs for more: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
app.post("/post", (req, res) => {
  res.json({ "Choo Choo": "Welcome to your Express app 🚅", body: req.body });
});

// the port that the process listens on is automatically set by railway,
// so you don't need to set the PORT manually on your service.
// it defaults to port 3000 when the PORT environment variable is not set,
// so you can access your app at http://localhost:3000 when running locally with `npm run dev`
//
// if you want to have the same environment variables that you've set on the railway dashboard,
// check out the cli at https://github.com/railwayapp/cli
const port = process.env.PORT || 3000;

// the final step is to start your app using the following code:
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

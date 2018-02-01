import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

// Express setup, including JSON body parsing.
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Tells express to add the "Access-Control-Allow-Origin" header to allow requests from anywhere.
app.use(cors())

// do this once you deploy the backend in heroku
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/products-api"
// Connect to MongoDB, on the "products-api" database. If the db doesn't exist, mongo will create it.
// for localhost use This
// mongoose.connect("mongodb://localhost/products-api", { useMongoClient: true })
// for deployment use this instead:
mongoose.connect(mongoUrl, { useMongoClient: true })

// This makes mongo use ES6 promises, instead of its own implementation
mongoose.Promise = Promise

// Log when mongo connects, or encounters errors when trying to connect.
mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

// This is the beginning of a model for the Product object.
const Product = mongoose.model("Product", {
  id: Number,
  name: String,
  type: String,
  size: String,
  numberInPack: String,
  substance: String,
  price: Number,
  deliveryTime: String,
  image: String,
  description: String
  // Add more attributes to your product here.
})

app.get("/", (req, res) => {
  res.send("Products API")
})

// Endpoint to create a product. Send a POST to /products with a JSON body
// with the keys and values you want to persist in the database.
app.post("/products", (req, res) => {
  const product = new Product(req.body)

  product.save()
    .then(() => { res.status(201).send("Product created") })
    .catch(err => { res.status(400).send(err) })
})

// retrieve all product objects from the database
//this file no longer in project but in mongodb,
// use .find but note that this is to find it in mongo which is not the same thing as
// e.g. .find or .map functions in javaScript

app.get("/products", (req, res) => {
  Product.find().then(products => {
    res.json(products)
  })
})

// for localhost use this:
// app.listen(8080, () => console.log("Products API listening on port 8080!"))
// for deployment use this instead

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Products API listening on port ${port}`)
})

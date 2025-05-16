
////  express.json()	::=>    Parses JSON data from requests
////  express.urlencoded()	::=>    Parses form data
////  cors()	::=>    Enables cross-origin requests
////  dotenv.config()	::=>    Loads .env variables
////  morgan()	::=>    Logs requests to the console
////  helmet()	::=>    Adds security headers



const express = require('express');
const  mongodb  =  require("mongoose");
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());







// MongoDB Connection
mongodb.connect(process.env.MONGODB_URI)
  .then(() => console.log("Database has been successfully connected"))
  .catch((err) => console.error("Connection error", err));



//Routes
const  signRoute  = require("../serverSide/Route/signRoute");
const   Adminroute = require("../serverSide/Route/AdminRoutes/AdminRoute"); 




app.get('/', (req, res) => {
  res.send('Backend server is running...');
});

// Public route
app.use("/",signRoute);
// Adminroute
app.use("/admin",Adminroute);



app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});



import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import fruits from "./routes/fruits.mjs";

import Fruit from './models/fruit.mjs'

//dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.json());

mongoose.connect("mongodb+srv://manogarikumaraguru:ManoMongo2025@mongopractice.t0opbtz.mongodb.net/?retryWrites=true&w=majority&appName=MongoPractice", {
    
  })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

 

//   mongoose.connect("mongodb+srv://manogarikumaraguru:ManoMongo2025@mongopractice.t0opbtz.mongodb.net/?retryWrites=true&w=majority&appName=MongoPractice", {
//   });
//   mongoose.connection.once('open', ()=> {
//       console.log('connected to mongoDB')
//   })
  

//Route
// app.get("/", (req, res) => {
//     res.send("Welcome to the Fruits API!!!");
//   });
  
//seed route

app.use('/fruits', fruits);

app.get('/fruits/seed', async (req, res)=>{
    try {
        await Fruit.create([
        {
            name:'grapefruit',
            color:'pink',
            readyToEat:true
        },
        {
            name:'grape',
            color:'purple',
            readyToEat:false
        },
        {
            name:'avocado',
            color:'green',
            readyToEat:true
        }
    ])
        res.redirect('/fruits')
    } catch (error) {
        console.error(error)
      }
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
  
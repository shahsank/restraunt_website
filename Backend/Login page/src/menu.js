const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Port = 9999;
app.use(express.json());
app.use(cors());

const userDB = mongoose.createConnection("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const menuSchema = new mongoose.Schema();
const menuModel = userDB.model('menu', menuSchema);

app.get('/menu', async(req,res) => {
    const menu = await menuModel.find().select({
        name: true,
        desc: true,
        price: true,
        _id:false
    })
    res.send(menu);
});
app.get("/menu/dessert", async(req,res)=>{
    const dessert = await menuModel.find({itemType:"Dessert"}).select({name:true,price:true,desc:true,_id:false});
    res.send(dessert);
  })
  
  app.get("/menu/ss", async(req,res)=>{
    const ss = await menuModel.find({itemType:"Soup"},{itemType:"Salad"}).select({name:true,price:true,desc:true,_id:false});
    res.send(ss);
  })
  
  app.get("/menu/pizza", async(req,res)=>{
    const pizza = await menuModel.find({itemType:"Pizza"}).select({name:true,price:true,desc:true,_id:false});
    res.send(pizza);
  })
  
  app.get("/menu/burger", async(req,res)=>{
    const burger = await menuModel.find({itemType:"Burgers"}).select({name:true,price:true,desc:true,_id:false});
    res.send(burger);
  })
  
  app.get("/menu/maincourse", async(req,res)=>{
    const maincourse = await menuModel.find({itemType:"Main Course"}).select({name:true,price:true,desc:true,_id:false});
    res.send(maincourse);
  })
  
  app.get("/menu/beverages", async(req,res)=>{
    const beverages = await menuModel.find({itemType:"Beverages"}).select({name:true,price:true,desc:true,_id:false});
    res.send(beverages);
  })
  
  app.get("/menu/fajitas", async(req,res)=>{
    const fajitas = await menuModel.find({itemType:"Fajitas"}).select({name:true,price:true,desc:true,_id:false});
    res.send(fajitas);
  })
  
  app.get("/menu/pasta", async(req,res)=>{
    const pasta = await menuModel.find({itemType:"Pastas"}).select({name:true,price:true,desc:true,_id:false});
    res.send(pasta);
  })
  
  app.get("/menu/appetizers", async(req,res)=>{
    const appetizers = await menuModel.find({itemType:"Appetizer"}).select({name:true,price:true,desc:true,_id:false});
    res.send(appetizers);
  })



app.listen(Port);
const express = require("express");

// const path = require("path");

const sequelize = require("./model/data");

const bodyParser = require("body-parser");

const adminController = require("./routes/admin");

const User = require("./model/data");

const app = express();

const cors = require("cors");
const { UUID } = require("sequelize");

app.use(cors());

app.use(bodyParser.json({ extended: false }));

// app.use(express.static(path.join(__dirname,'views')));

app.use("/user", adminController);

app.post("user/adduser", async (req, res, next) => {

  try{
  const name = req.body.name;
  const mobileno = req.body.mobileno;
  const email = req.body.email;

  const data = await User.create({
    name: name,
    mobileno: mobileno,
    email: email,
  });
  res.status(201).json({ newuserDetails: data });
}
catch(err){
  res.status(500).json({
    error:err
  })
}
});

app.get('user/get-user',async (req,res,next)=>{
  try{
  const users = User.findAll();
  res.status(200).json({allUsers:users});
  }
  catch(err){
      res.status(500).json({error:err});
  }
})

app.delete('user/delete-user/:id',async (req,res)=>{
    try{
      if(req.params.id == undefined){
        console.log('id is missing');
        res.status(500).json({error: 'id is missing'});
      }
    }catch(err){
      res.status(500).json({error:err});
    }
    const id = req.params.id;

    await User.destroy({where: {id:id}});
    res.sendStatus(200);

})

sequelize
  .sync()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });


app.listen(3000);

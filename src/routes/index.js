const express=require("express");
const router=express.Router();



router.get("/",(req,res)=>{
    res.render("index.html",{title:"WebAppMejia"});
    console.log("get procesado actualmente");
});

router.get("/contactos",(req,res)=>{
    res.render("contactos.html",{title:"Contactos"})
});



module.exports=router;
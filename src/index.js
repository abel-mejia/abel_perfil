const express=require("express");
const app=express();
const path=require("path");



//settings
app.set('port',4000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//configurar el html para los ejs utilizados en las plantillas html
app.engine("html",require('ejs').renderFile);


//routes
app.use(require("./routes/index.js"));


 
//static files
app.use(express.static(path.join(__dirname,"puclit")));


//listening
app.listen(app.get('port'),()=>{
    console.log("se ingreso correctamente!!"+ app.get('port'));
});
const express= require("express");
const app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname+"/public"));

const port = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.render("circles.html");
})

app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("started")
    }
})
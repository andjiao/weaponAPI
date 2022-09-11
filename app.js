//importerer express
const express = require ('express');

//instansierer express
const app = express();

app.get("/weapons", (req,res)=>{
    console.log(req.query.type)
    res.send({
        message:"Oversigt over våben",
        ...req.query
    })
});

    app.get("/weapons/:id", (req,res)=>{
        //req.params er et json-objekt, hvilket gør at man kan itlgå properties
        console.log(req.params);
    
        if(Number(req.params.id) === "1"){
            res.send({type:'Sword', canKill:true})
    
        }
        else{
    
        }
        res.send({errorMessage:"I don't know that weapon"});
    })

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}` ));
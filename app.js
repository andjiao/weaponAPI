//importerer express
const express = require ('express');

//instansierer express
const app = express();


app.use(express.json())

const weapons=[
    {id: 1, name: 'Pistol', price: 23},
    {id: 2, name: 'Sword', price: 34},
    {id: 3, name: 'kastestjerne', price: 54}
]

//GET
app.get('/weapons', (req,res)=>{
    res.send(weapons)
})


app.get('/weapons/:id', (req,res)=>{
    
    //Checking if that weapon exist
    //// req.params return a string, therefor parseInt
    const weapon =  weapon.find(w => w.id === parseInt(req.params.id)) 
    //404 means does not exist
    if(!weapon) return res.status(404).send('The weapon with the given id was not found ');
    res.send(weapon); 
})


//POST
app.post('/weapons', (req,res)=>{
  
    const weapon ={
        id: weapons.length + 1,
        name: req.body.name
    }
    weapons.push(weapon)

    res.send(weapon)
});

//PUT
app.put('/weapons/:id',(req,res)=>{
    //look up the weapon
    const weapon =  weapons.find(w => w.id === parseInt(req.params.id))
 
   
    if(!weapon) return res.status(404).send('The weapon with the given id was not found ');
    
    //updating weapon
    weapon.name = req.body.name;
    weapon.price = req.body.price;

    //return updated object to client
    res.send(weapon)
});

//PATCH
app.patch('/weapon/:id',(req,res)=>{
    //look up the weapon
    const weapon =  weapons.find(w => w.id === parseInt(req.params.id))
    
    if(!weapon) return res.status(404).send('The weapon with the given id was not found ');
    
    //updating weapon
    weapon.price = req.body.price;

    //return updated object to client
    res.send(weapon)
});

//Delete
app.delete('/weapons/:id', (req,res)=>{
    //look up weapon
    const weapon =  weapon.find(w => w.id === parseInt(req.params.id))
    
    if(!weapon) return  res.status(404).send('The weapon with the given id was not found ');

    //delete
    const index = weapons.indexOf(weapons);

    //we go to the index which is defined in line above, and removes 1 item(second argument)
    weapons.splice(index,1)
  

    //return the deleted weapon
    res.send(weapon)

});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}` ));
const { application, json } = require('express');
const express=require('express');
const jwt=require('jsonwebtoken');
const port=3005;


const app=express();
app.use(express.json()); // que me esta llegando desde el POST es un json

// siempre que se hace un login va a ser por el mÃ©todo POST
app.post('/login', (req,res) =>{
   if (!req.body.user  ||  !req.body.pass) {
    
    res.send({error: "no mando todos los datos"})
    return; // colocamos el return para que deje de ejecutar
   }


    /** EL TOKEN DE SEGURIDAD 
   * El token tiene un margen de tiempo - por ej. para el banco el token dure un tiempo determinado para la seguridad 
   * EL TOKEN tiene diferentes partes  tokenData, que es la info que viaja al cliente, el tiempo
   *
   */

   if (req.body.user=='cris' && req.body.pass=='123' ){
    const tokenData={
        nombre:'jose',
        apellido:'ruiz'
        }

    const token =jwt.sign(tokenData, 'Secret',{
        expiresIn: 60*60*24 //expira en 24 horas
    })
    res.send({token})
   }
   else{
    res.send({error: "los datos no son los correctos"})
    return; // colocamos el return para que deje de ejecutar
   }

})

app.get('/producto', (req,res)=>{
    let token =req.headers['authorization']
if(!token){
    console.log('error');

}
token =token.replace('Bearer ', '')
jwt.verify(token, 'Secret', (err,user) =>{
    if(err){
        res.status(401).send({error:'TOKEN INVALIDO'})
    }else{
        console.log('ESTO ES USER ',user)
        res.send({message:'AWWWWWW YEAH'})
    }
})
})



app.listen(port, ()=>{
    console.log('Servidor escuchando en el puerto ', port);
})
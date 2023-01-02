const data = require("../Data.json")
const {PayMethod} = require("../db")
const {Acts} = require("../db")

const loadDb = async () => {
   try{
   // console.log(data)
    for(let i = 0; i < data[0].methods.length;i++){
        PayMethod.create({method: data[0].methods[i]})
    }
    for(let i = 0; i < data[0].acts.length;i++){
        Acts.create({act: data[0].acts[i]})
    }
    console.log("metodos de pago y actos cargados!")
   }catch(err){
    console.log(err);
    res.status(505).json({message: 'Server error'})
   }
}

module.exports = loadDb
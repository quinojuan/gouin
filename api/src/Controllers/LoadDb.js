const data = require("../Data.json")
const {PayMethod} = require("../db")

const loadDb = async () => {
   try{
    console.log(data)
    for(let i = 0; i < data[0].methods.length;i++){
        PayMethod.create({method: data[0].methods[i]})
    }
    console.log("metodos de pago cargados!")
   }catch(err){
    console.log(err);
    res.status(505).json({message: 'Server error'})
   }
}

module.exports = loadDb
const {PayMethod} = require(`../db.js`)

const getPayMethod = async (req, res) => {
  try{
    const allPayMethods = await PayMethod.findAll()
    res.status(201).json(allPayMethods)
  }catch(err){
    console.log(err);
    res.status(505).json({message: 'Server error'})
  }
}

module.exports = {
    getPayMethod
}
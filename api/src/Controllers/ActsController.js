const {Acts} = require(`../db.js`)

const getActs = async (req, res) => {
  try{
    const allActs = await Acts.findAll()
    res.status(201).json(allActs)
  }catch(err){
    console.log(err);
    res.status(505).json({message: 'Server error'})
  }
}

module.exports = {
    getActs
}
const {Cheques} = require(`../db.js`)

const getCheques = async (req, res) => {
  try{
    const allCheques = await Cheques.findAll()
    res.status(201).json(allCheques)
  }catch(err){
    console.log(err);
    res.status(505).json({message: 'Server error'})
  }
}

const postCheque = async (req, res) => {
    const {price, num_cheque, payment_date, headline } = req.body
    try{
      if(price && num_cheque && payment_date && headline){
        const newCheque = await Cheques.create({
            price,
            num_cheque,
            payment_date,
            headline
        })
        console.log(newCheque)
        res.json(newCheque)
      }else{
        res.status(501).json("faltan datos")
      }
  
    }catch(err){
      console.log(err);
      res.status(505).json({message: 'Server error'})
    }
  }

module.exports = {
    getCheques,
    postCheque
}
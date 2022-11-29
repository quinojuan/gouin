const {Movements, Customers} = require(`../db.js`)

const getMovements = async (req, res) => {
  try{
    const allMovements = await Movements.findAll()
    res.json(allMovements)
  }catch(err){
    console.log(err);
    res.status(505).json({message: 'Server error'})
  }
}

const postMovements = async (req, res) => {
  const {date, price, notes, customerId} = req.body
  try{
    if(date && price && notes){
      const newMovement = await Movements.create({
        date,
        price,
        notes,
      })

      let myCustomer = await Customers.findOne({where: {id: customerId}})
      await newMovement.addCustomers(myCustomer.dataValues.id)
      console.log(newMovement)
      res.json(newMovement)
    }else{
      res.status(501).json("faltan datos")
    }

  }catch(err){
    console.log(err);
    res.status(505).json({message: 'Server error'})
  }
}

const updateMovement = async (req, res) => {
 try{
  const { id } = req.params
  let [newMovements] = await Movements.update(req.body, {where: {id}})
  if(newMovements){
    res.json(newMovements)
  }else{
    res.status(501).json({message: "Error /put updateMovements"})
  }
 }catch(err){
  console.log(err);
  res.status(505).json({message: 'Server error'})
}
}

module.exports = {
    getMovements,
    postMovements,
    updateMovement
}
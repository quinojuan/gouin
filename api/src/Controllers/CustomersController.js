const {Customers, Movements, Acts} = require(`../db.js`);


const getCustomers = async (req, res) => {
  try{
    const allCustomers = await Customers.findAll(({
      include: [{
        model: Movements,
        attributes: ['id', 
                     'date',
                     'price',
                     'notes',
                  //  {exclude: ['CustomerMovements']}
                ]
      },{
        model: Acts
      }]
    }))
    res.json(allCustomers)
  }catch(err){
    console.log(err);
    res.status(505).json({message: 'Server error'})
  }
}

const postCustomers = async (req, res) => {
  const {name, last_name, dni} = req.body
  try{
    if(name && last_name && dni){
      const newCustomer = await Customers.create({
        name,
        last_name,
        dni
      })
      //console.log(newCustomer)
      res.json(newCustomer)
    }else{
      res.status(501).json("faltan datos")
    }

  }catch(err){
    console.log(err);
    res.status(505).json({message: 'Server error'})
  }
}

const updateCustomer = async (req, res) => {
 try{
  const { id } = req.params
  let [newCustomer] = await Customers.update(req.body, {where: {id}})
  console.log(newCustomer, "newCustomer")
  if(newCustomer){
    res.json(newCustomer)
  }else{
    res.status(501).json({message: "Error /put updateCustomer"})
  }
 }catch(err){
  console.log(err);
  res.status(505).json({message: 'Server error'})
}
}

module.exports = {
    getCustomers,
    postCustomers,
    updateCustomer
}
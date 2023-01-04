const {Movements, Customers, Cheques, PayMethod, Acts} = require(`../db.js`);


const getMovements = async (req, res) => {
  try{
    const allMovements = await Movements.findAll(({
      include: [{
        model: Customers,
        attributes: ['name']
      },{
        model: Acts,
        attributes: ['act']
      }/* ,{
        model: PayMethod,
        attributes:['method']
      } */
  ]
    }))

    let presentacion = allMovements.map(({id, date, price, notes, Customers, Acts, PayMethod })=>{
      return {
        id,
        date,
        price,
        notes,
        customer: Customers[0].name,
        act: Acts[0].act,
        //method: PayMethod[0].method
      }
    })
    presentacion
		?res.status(201).json(presentacion)
		:res.status(404).json({message: 'Error /get movements'})
  }catch(err){
    console.log(err);
    res.status(505).json({message: 'Server error'})

  }
}

const postMovements = async (req, res) => {
  const {date, price, notes, actId, customerId, methodId} = req.body
  try{
    if(date && price && notes){ // las notas son opcionales
      const newMovement = await Movements.create({
        date,
        price,
        notes,
      })
       
      let myCustomer = await Customers.findOne({where: {id: customerId}})
      await newMovement.addCustomers(myCustomer.dataValues.id)

      let myAct = await Acts.findOne({where: {id: actId}})
      await newMovement.addAct(myAct.dataValues.id)
      //aca asocio el act al customer=
      await myCustomer.addAct(myAct.dataValues.id)

     // let myMethod = await PayMethod.findOne({where: {id: methodId}})
     // await newMovement.addCheque(myMethod.dataValues.id)
   /*     if(methodId){
        let myCheque = await Cheques.findOne({where: {id: methodId}})
         if(myCheque){
          await newMovement.addCheque(myCheque.dataValues.id)
        } else{
          await newMovement.addPayMethod(myMethod.dataValues.id)
        } 
      }  */
      
     // console.log(newMovement)
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
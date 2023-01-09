const data = require("../Data.json");
const { PayMethod, Acts, Customers } = require("../db");

const loadDb = async () => {
  try {
    // console.log(data)
    for (let i = 0; i < data[0].methods.length; i++) {
      PayMethod.create({ method: data[0].methods[i] });
    }
    for (let i = 0; i < data[0].acts.length; i++) {
      Acts.create({ act: data[0].acts[i] });
    }
    console.log("metodos de pago y actos cargados!");

    // for (let i = 0; i < data[1].users.length; i++) {
    //   Customers.create({
    //     name: data[1].users[i].name,
    //     last_name: data[1].users[i].last_name,
    //     dni: data[1].users[i].dni,
    //   });
    // }

    // hago lo mismo que arriba con un map destructurando las propiedades del objeto
    data[1].users.map(({ name, last_name, dni }) =>
      Customers.create({ name, last_name, dni })
    );
  } catch (err) {
    console.log(err);
    res.status(505).json({ message: "Server error" });
  }
};

module.exports = loadDb;

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";

const NewForm = () => {
  const navigate = useNavigate();
  // const [editing, setEditing] = useState(false) // lo voy a utilizar para cuando se modifique un customer (revisar el proyecto de las tasks)
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    last_name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axios.post("http://localhost:3002/customers", customer);
    setLoading(false);
    navigate("/home");
  };

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3>New Form</h3>
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{ backgroundColor: "#1e272e", padding: "1rem" }}
        >
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Name"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="name"
                value={customer.name}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <TextField 
                variant="filled"
                label="Last name"
              />
              <input
                name="last_name"
                type="text"
                placeholder="Last name"
                onChange={handleChange}
              />{" "}
              <button>Save</button>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Button variant="contained" onClick={() => navigate("/home")}>
        Volver
      </Button>
    </>
  );
};

export default NewForm;

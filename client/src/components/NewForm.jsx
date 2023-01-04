import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
} from "@mui/material";

const NewForm = () => {
  const navigate = useNavigate();
  // const [editing, setEditing] = useState(false) // lo voy a utilizar para cuando se modifique un customer (revisar el proyecto de las tasks)
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    last_name: "",
    act: "",
    price: "",
    notes: "",
    amount_paid: 0,
    payment_method: "",
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

  console.log(customer);
  return (
    <>
      <h3>New Form</h3>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        // width="350px"
      >
        <Grid item xs={3}>
          <Card
            sx={{ mt: 5 }}
            style={{ backgroundColor: "#1e272e", padding: "1rem" }}
          >
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  name="name"
                  variant="filled"
                  label="Name"
                  sx={{
                    display: "block",
                    margin: ".5rem 0",
                  }}
                  value={customer.name}
                  onChange={handleChange}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />

                <TextField
                  name="last_name"
                  variant="filled"
                  label="Last name"
                  sx={{
                    display: "block",
                    margin: ".5rem 0",
                  }}
                  value={customer.last_name}
                  onChange={handleChange}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />

                <TextField
                  name="act"
                  variant="filled"
                  label="Act"
                  sx={{
                    display: "block",
                    margin: ".5rem 0",
                  }}
                  value={customer.act}
                  onChange={handleChange}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <TextField
                  name="price"
                  variant="filled"
                  label="Price"
                  sx={{
                    display: "block",
                    margin: ".5rem 0",
                  }}
                  value={customer.price}
                  onChange={handleChange}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <TextField
                  name="notes"
                  variant="filled"
                  multiline
                  rows={4}
                  label="Notes"
                  sx={{
                    display: "block",
                    margin: ".5rem 0",
                  }}
                  value={customer.notes}
                  onChange={handleChange}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <TextField
                  name="amount_paid"
                  variant="filled"
                  label="Amount paid"
                  sx={{
                    display: "block",
                    margin: ".5rem 0",
                  }}
                  value={customer.amount_paid}
                  onChange={handleChange}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                  />

                <TextField
                  name="payment_method"
                  variant="filled"
                  label="Payment method"
                  value={customer.method_of_paid}
                  onChange={handleChange}
                  sx={{
                    display: "block",
                    margin: ".5rem 0",
                  }}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />

                <Button
                  variant="contained"
                  type="submit"
                  disabled={
                    !customer.name ||
                    !customer.last_name ||
                    !customer.act ||
                    !customer.amount_paid ||
                    !customer.payment_method ||
                    !customer.price
                  }
                >
                  {loading ? (
                    <CircularProgress color="inherit" size={24} />
                  ) : (
                    "Save"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <br />
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={() => navigate("/home")}>
          Volver
        </Button>
      </div>
    </>
  );
};

export default NewForm;

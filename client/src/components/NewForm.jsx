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
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
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
                  sx={{
                    display: "block",
                    margin: ".5rem 0",
                  }}
                  name="last_name"
                  value={customer.last_name}
                  onChange={handleChange}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />

                <TextField 
                variant="filled"
                label="Last name"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="last_name"
                value={customer.last_name}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                />
                <Button
                  variant="contained"
                  type="submit"
                  disabled={!customer.name || !customer.last_name}
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
      <Button variant="contained" onClick={() => navigate("/home")}>
        Volver
      </Button>
    </>
  );
};

export default NewForm;

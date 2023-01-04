import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
} from "@mui/material";

const SaldoForm = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setLoading(false);
    navigate("/home");
  };

  return (
    <>
      <h3>SALDO FORM</h3>
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
              <form>
                <TextField
                  name="name"
                  variant="filled"
                  label="Nombre"
                  sx={{
                    display: "block",
                    margin: ".5rem 0",
                  }}
                  value="Juan Quino"
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <TextField
                  name="amount"
                  variant="filled"
                  label="$$$"
                  sx={{
                    display: "block",
                    margin: ".5rem 0",
                  }}
                  value={amount}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <Button
                  variant="contained"
                  type="submit"
                  disabled={ !amount
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

export default SaldoForm;

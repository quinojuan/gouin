import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, Link } from "react-router-dom";

const ButtonAppBar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ FlexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/home"}>Escribanía GOUIN</Link>
          </Typography>
          <Button
            color="warning"
            variant="contained"
            onClick={() => navigate("/new")}
          >
            New
          </Button>
          &nbsp;
          <Button
            color="success"
            variant="contained"
            onClick={() => navigate("/saldo")}
          >
            Agregar pago
          </Button>
          &nbsp;
          <Button
            color="secondary"
            variant="contained"
            onClick={() => navigate("/search")}
          >
            Buscar Cliente
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;

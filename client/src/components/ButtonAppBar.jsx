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
import { useNavigate } from "react-router-dom";

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
            Escribanía GOUIN
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;

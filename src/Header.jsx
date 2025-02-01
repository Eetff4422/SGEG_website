import { AppBar, Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo-entreprise.png";
import "./style.css";

const Header = () => {
  return (
    <AppBar color="default" position="static" className="header">
      <Grid container alignItems="center" className="header-content">
        {/* Logo */}
        <Grid item>
          <img className="logo" alt="Logo" src={logo} />
        </Grid>

        {/* Navigation */}
        <Grid item xs>
          <nav className="navbar">
            <Button component={Link} to="/" className="nav-link">Accueil</Button>
            <Button component={Link} to="/realisations" className="nav-link">Réalisation de l’entreprise</Button>
            <Button component={Link} to="/services" className="nav-link">Services</Button>
            <Button component={Link} to="/contact" className="nav-link">Contact</Button>
          </nav>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;

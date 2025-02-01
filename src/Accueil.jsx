import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import electricite from "./assets/images/electricite-generale.png";
import energies from "./assets/images/energies-renouvelables.png";
import equipements from "./assets/images/equipements-et-installations.png";
import hero from "./assets/images/hero-image.png";
import divers from "./assets/images/service-divers.png";
import "./style.css";

export const Accueil = () => {
  return (
    <Box className="homepage-content">
      {/* Section Héros */}
      <Box className="hero-section">
        <img className="hero-image" alt="Travailleur sur chantier" src={hero} />
      </Box>

      {/* Section À propos */}
      <Box className="section-container">
        <hr className="title-line" />
        <h2>À propos</h2>
        <hr className="title-line" />
        <p>Notre entreprise se spécialise dans...</p>
      </Box>

      {/* Section Services */}
      <Box className="section-container">
        <hr className="title-line" />
        <h2>Nos Services</h2>
        <hr className="title-line" />
        
        <Box className="services-container">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={5} md={5} className="service-item">
              <img className="service-image" alt="Service 1" src={electricite} />
              <Box className="service-title">Électricité générale</Box>
            </Grid>
            <Grid item xs={12} sm={5} md={5} className="service-item">
              <img className="service-image" alt="Service 2" src={equipements} />
              <Box className="service-title">Équipements et Installations</Box>
            </Grid>
            <Grid item xs={12} sm={5} md={5} className="service-item">
              <img className="service-image" alt="Service 3" src={energies} />
              <Box className="service-title">Énergies Renouvelables</Box>
            </Grid>
            <Grid item xs={12} sm={5} md={5} className="service-item">
              <img className="service-image" alt="Service 4" src={divers} />
              <Box className="service-title">Services Divers</Box>
            </Grid>
          </Grid>
        </Box>

        <Button variant="contained" color="primary" className="btn-action">
          En savoir plus
        </Button>
      </Box>

      {/* Section Contact */}
      <Box className="section-container">
        <hr className="title-line" />
        <h2>Contact</h2>
        <hr className="title-line" />
        
        <Box className="contact-form">
          <Box className="form-group">
            <label>Mail :</label>
            <TextField label="Email" variant="outlined" fullWidth />
          </Box>
          <Box className="form-group">
            <label>Téléphone :</label>
            <TextField label="Phone" variant="outlined" fullWidth />
          </Box>
          <Box className="form-group">
            <label>Adresse :</label>
            <TextField label="Address" variant="outlined" fullWidth />
          </Box>
          <Button variant="contained" color="primary" className="btn-action">
            Demandez un devis
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

import { Grid } from "@mui/material";
import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner">
      <Grid   container spacing={2}>
        <Grid  item xs={4} md={6}>
          <h3 className="bannerTitle">consectetur adipiscing elit. Sed eu pharetra.</h3>
          <p  className="bannerSubTitle">consectetur adipiscing elit. Sed eu pharetra ante. Nullam tempus eget ex sit amet congue.</p> <br />
        <button className="btn bannerButton">contact us</button>
        </Grid>
       
      </Grid>
      
    </section>
  );
};

export default Banner;

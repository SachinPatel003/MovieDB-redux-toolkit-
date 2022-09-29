import {  Grid } from "@mui/material";
import React from "react";
import Content from "../../common/Content/Content";

const Movies = ({data}) => {
  return (
    <Grid container spacing={5}>
      {data.map((item) => (
        <Content key={item.id} item={item} />
      ))}
    </Grid>
  );
};

export default Movies;

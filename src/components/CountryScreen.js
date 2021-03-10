import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CountryList from "./CountryList";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0 auto",
    marginTop: 50,
  },
  logo: {
    margin: "0 auto",
  },
  confirmed: {
    borderBottom: "5px solid blue",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 8,
    textTransform: "Uppercase",
  },
  recovered: {
    borderBottom: "5px solid green",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 8,
    textTransform: "Uppercase",
  },
  deaths: {
    borderBottom: "5px solid red",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 8,
    textTransform: "Uppercase",
  },
}));

export default function CountryScreen() {
  const [countryData, setCountryData] = useState([]);
  const [countryName, setCountryName] = useState("Pakistan");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://covid19.mathdro.id/api/countries/${countryName}`
      );
      let data = await response.json();
      const modifieldData = {
        confirmed: data.confirmed.value,
        recovered: data.recovered.value,
        deaths: data.deaths.value,
      };
      setCountryData(modifieldData);
      setLoading(false);
    }
    getData();
  }, [countryName]);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h2">
        {countryName}
      </Typography>
      <CountryList setCountryName={setCountryName} />
      <Grid container spacing={3}>
        {Object.keys(countryData).map((val, index) => {
          return (
            <Grid item xs={12} sm={4} key={index}>
              <Paper className={classes[val]} elevation={10}>
                {isLoading ? (
                  <h1>Loading data...</h1>
                ) : (
                  <>
                    <h2 style={{ color: "black" }}>{val}</h2>
                    <h3>{countryData[val]}</h3>
                  </>
                )}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

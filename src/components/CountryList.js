import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function CountryList({ setCountryName }) {
  const classes = useStyles();
  const [country, setCountry] = useState("Pakistan");
  const [countryList, setCountryList] = useState({});
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setCountry(event);
    setCountryName(event);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    async function getCountryList() {
      const response = await fetch(`https://covid19.mathdro.id/api/countries`);
      let data = await response.json();
      const modifieldData = {
        name: data.countries,
      };
      setCountryList(modifieldData.name);
    }
    getCountryList();
  }, [country]);
  return (
    <div>
      <Button className={classes.button}>Chose your country</Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          {country}
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={country}
          onChange={(e) => handleChange(e.target.value)}
        >
          {Object.keys(countryList).map((val, index) => {
            return (
              <MenuItem key={index} value={countryList[val].name}>
                {countryList[val].name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

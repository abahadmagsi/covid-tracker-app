import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PublicIcon from "@material-ui/icons/Public";
import BarChartIcon from "@material-ui/icons/BarChart";
import LocationCityIcon from "@material-ui/icons/LocationCity";
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export default function FootNav({ screenConfig }) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global States" icon={<PublicIcon />} />
      <BottomNavigationAction
        label="Country States"
        icon={<LocationCityIcon />}
      />
      <BottomNavigationAction label="Graphs" icon={<BarChartIcon />} />
    </BottomNavigation>
  );
}

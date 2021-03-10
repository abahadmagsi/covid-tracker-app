import { Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
export default function DateComponent({ currentScreen }) {
  const [date, setDate] = useState({});

  useEffect(() => {
    async function getDate() {
      const response = await fetch("https://covid19.mathdro.id/api/");
      let data = await response.json();
      const modifieldDate = {
        lastUpdate: data.lastUpdate,
      };
      setDate(modifieldDate);
    }
    getDate();
  }, []);
  return (
    <div>
      <Typography variant="overline" display="block" gutterBottom>
        Last Update :{new Date(date.lastUpdate).toDateString()}
      </Typography>
    </div>
  );
}

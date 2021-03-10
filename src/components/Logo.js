import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import logo from "../Images/image.png";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootLogo: {
    flexGrow: 1,
    marginTop: 10,
    textAlign: "center",
  },
  paperLogo: {
    padding: theme.spacing(4),
    textAlign: "center",
    margin: "0 auto",
    color: theme.palette.text.secondary,
    width: "50%",
  },
}));

export default function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.rootLogo}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paperLogo} elevation={1}>
            <img src={logo} style={{ width: "50%" }} alt="Logo" />
            <Typography variant="h6" component="h4">
              Tracker App by Ahad
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

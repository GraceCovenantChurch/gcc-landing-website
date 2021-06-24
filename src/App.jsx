import React from "react";

import { ArrowRight } from "react-feather";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

import styles from "./App.module.scss";

import logo from "static/gracecovenantchurchlogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "transparent",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  buttons: {
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[300],
    "&:hover": {
      backgroundColor: grey[500],
    },
    opacity: 0.675,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={styles.App}>
      <div className={styles.layer} />
      <div className={`${styles.AppContent} ${classes.root}`}>
        <Grid
          container
          alignItems="center"
          direction="column"
          justify="center"
          spacing={3}
        >
          <Grid item xs={12}>
            <img className={styles.logo} alt="logo" src={logo} />
          </Grid>
          <Grid item xs={12}>
            <p className={styles.title}>Grace Covenant Church</p>
          </Grid>
          <Grid item xs={12}>
            <p className={styles.missionStatement}>
              Raising up kingdom workers who are transformed by Christ to
              influence the world.
            </p>
          </Grid>
          <Grid item xs={12}>
            <hr
              style={{
                color: "white",
                backgroundColor: "white",
                height: ".01vw",
                width: "50vw",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.buttons}
              style={{ fontSize: "1.3vw" }}
              color="primary"
              size="large"
              href="https://ml.gracecovenant.net"
            >
              <p className={styles.linkText}>Main Line</p>
              <ArrowRight color="black" size="1.3vw" />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.buttons}
              style={{ fontSize: "1.3vw" }}
              color="primary"
              size="large"
              href="http://ucity.gracecovenant.net"
            >
              <p className={styles.linkText}>University City</p>
              <ArrowRight color="black" size="1.3vw" />
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;

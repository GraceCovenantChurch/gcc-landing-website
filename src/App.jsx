import React from "react";

import Grid from "@material-ui/core/Grid";

import styles from "./App.module.scss";

import background from "static/philadelphia.png";
import logo from "static/logo.png";
import gcctext from "static/gracecovenanttext_big.png";

function App() {
  return (
    <div
      className={styles.App}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.AppContent}>
        <div className={`${styles.fadeIn} ${styles.header}`}>
          <img className={styles.logo} alt="logo" src={logo} />
        </div>
        <Grid container className={styles.container}>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid key={1} className={styles.left} item>
                  <h1 className={styles.delayedFadeIn}>
                    <a href="http://ucity.gracecovenant.net">University City</a>
                  </h1>
                  <p className={styles.delayedFadeIn}>
                    UPenn and Drexel Campus <br />
                    11:30am Service Time
                  </p>
              </Grid>
              <Grid key={2} className={styles.right} item>
                  <h1 className={styles.delayedFadeIn}>
                    <a href="https://ml.gracecovenant.net">Main Line</a>
                  </h1>
                  <p className={styles.delayedFadeIn}>
                    Western Philadelphia Suburbs <br />
                    9:45am Service Time
                  </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={`${styles.footer} ${styles.fadeIn}`}>
          <img className={styles.gccText} alt="logo" src={gcctext} />
        </div>
      </div>
    </div>
  );
}

export default App;

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
                  <a href="http://ucity.gracecovenant.net">University City Site</a>
                </h1>
              </Grid>
              <Grid key={2} className={styles.right} item>
                <h1 className={styles.delayedFadeIn}>
                  <a href="https://ml.gracecovenant.net">Main Line Site</a>
                </h1>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={`${styles.footer} ${styles.fadeIn}`}>
          <img className={styles.gccText} alt="logo" src={gcctext} />
        </div>
        <div className={`${styles.missionStatement} ${styles.delayedFadeIn}`}>
          <i>Raising up kingdom workers who are transformed by Christ to influence the world.</i>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <div className={styles.container}>
          <Cards />
          <CountryPicker />
          <Chart />
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetcedData = await fetchData();

    console.log(fetcedData);
    this.setState({ data: fetcedData });
  }
  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>App</h1>
        <div className={styles.container}>
          <Cards {...data} />
          <CountryPicker />
          <Chart />
        </div>
      </div>
    );
  }
}

export default App;

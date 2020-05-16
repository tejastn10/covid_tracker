import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

interface country {
  name: String;
}

class App extends React.Component {
  state = {
    data: {
      confirmed: { detail: "", value: 0 },
      deaths: { detail: "", value: 0 },
      recovered: { detail: "", value: 0 },
      lastUpdate: new Date(),
    },
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country: country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>App</h1>
        <div className={styles.container}>
          <Cards {...data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart />
        </div>
      </div>
    );
  }
}

export default App;

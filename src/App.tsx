import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import img from "./images/image.png";

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
    const { data, country } = this.state;

    console.log(country);

    return (
      <div>
        <div className={styles.container}>
          <img className={styles.image} src={img} alt="Covid" />
          <Cards {...data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart {...data} {...country} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {series: [
        {
          name: "series-1",
          data:[11.55,78,99,87]
        }
      ] },
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>

    );
  }
}

export default Donut;
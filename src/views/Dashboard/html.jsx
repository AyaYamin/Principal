import React, { Component } from 'react';
import Chart from 'react-apexcharts';

import Histogram from 'react-chart-histogram';

export default class HHHH extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {
    const labels = ['2016', '2017', '2018'];
    const data = [324, 45, 672];
    const options = { fillColor: '#F44444', strokeColor: '#0000FF' };
    return (
      <div>
        <Histogram
          xLabels={labels}
          yValues={data}
          width='400'
          height='200'
          options={options}
          options={options}
        />
      </div>
    )
  }
}